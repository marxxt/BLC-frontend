// app/api/chat/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { ApplicationData } from "@/types/application";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  applicationData: Partial<ApplicationData>;
  currentStep: string;
}

// System prompt for the loan application assistant
const SYSTEM_PROMPT = `You are a professional loan application assistant for Blue Ledger Capital. Your role is to gather loan application information in a conversational, friendly manner.

IMPORTANT GUIDELINES:
1. Always be professional, helpful, and reassuring
2. Ask ONE question at a time to avoid overwhelming the user
3. Validate user inputs and ask for corrections if needed
4. Use the current application data to avoid asking duplicate questions
5. Progress through the application logically
6. Acknowledge user responses before asking the next question
7. Keep responses concise but warm

APPLICATION FLOW:
1. Loan Type Selection (business-credit, real-estate, mca)
2. Personal Information (name, email, phone, address)
3. Business Information (legal name, type, tax ID, etc.)
4. Financial Information (annual sales, profit, requested amount)
5. Banking Information
6. Use of Funds

VALIDATION RULES:
- Email: must be valid email format
- Phone: must be 10-digit US format
- Tax ID/EIN: must be XX-XXXXXXX format
- Amounts: must be valid numbers
- Addresses: should include street, city, state, zip

Current step indicates where we are in the process. Use the application data to see what's already collected and what's missing.

Respond with natural conversation, not robotic forms. If the user provides incorrect format, gently guide them to the correct format.`;

export async function POST(request: NextRequest) {
  try {
    const { messages, applicationData, currentStep }: ChatRequest =
      await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    // Get the latest user message
    const userMessage = messages[messages.length - 1]?.content || "";

    // Create context about current application state
    const applicationContext = `
Current Application Data:
${JSON.stringify(applicationData, null, 2)}

Current Step: ${currentStep}

User's latest message: "${userMessage}"

Based on the current application data and step, determine:
1. What information is still needed
2. If the user's response is valid for the current field being collected
3. What the next question should be
4. If we can extract structured data from the user's response

Respond naturally as a loan officer would, and if you can extract structured data, include it in a JSON block at the end of your response using this format:
\`\`\`json
{
  "extractedData": {
    "field": "value"
  },
  "nextStep": "step_name",
  "isValid": true/false,
  "validationError": "error message if any"
}
\`\`\`
`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prepare conversation history for Gemini
    const conversationHistory = messages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: conversationHistory.slice(0, -1), // All but the latest message
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the latest message with context
    const result = await chat.sendMessage(
      `${SYSTEM_PROMPT}\n\n${applicationContext}`
    );
    const response = await result.response;
    const assistantMessage = response.text();

    // Try to extract JSON data from the response
    let extractedData = null;
    let cleanResponse = assistantMessage;

    const jsonMatch = assistantMessage.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      try {
        extractedData = JSON.parse(jsonMatch[1]);
        cleanResponse = assistantMessage
          .replace(/```json\n[\s\S]*?\n```/, "")
          .trim();
      } catch (e) {
        console.warn("Failed to parse extracted JSON:", e);
      }
    }

    return NextResponse.json({
      message: cleanResponse,
      extractedData,
      success: true,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
