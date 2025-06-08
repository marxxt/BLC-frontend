// app/api/chat/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { ApplicationData } from "@/types/application";

// Initialize Gemini AI with new library
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  applicationData: Partial<ApplicationData>;
  currentStep: string;
}

// Helper function to determine what data is missing
function getMissingData(applicationData: Partial<ApplicationData>) {
  const missing = [];

  if (!applicationData.financingInfo?.loanType) {
    missing.push("loan type");
  }
  if (!applicationData.applicantInfo?.fullName?.trim()) {
    missing.push("full name");
  }
  if (!applicationData.applicantInfo?.email?.trim()) {
    missing.push("email address");
  }
  if (!applicationData.applicantInfo?.phone?.trim()) {
    missing.push("phone number");
  }
  if (!applicationData.applicantInfo?.address?.street?.trim()) {
    missing.push("residential address");
  }
  if (!applicationData.businessInfo?.legalName?.trim()) {
    missing.push("business legal name");
  }
  if (!applicationData.businessInfo?.businessType) {
    missing.push("business type");
  }
  if (!applicationData.businessInfo?.taxId?.trim()) {
    missing.push("tax ID/EIN");
  }
  if (!applicationData.businessInfo?.established?.trim()) {
    missing.push("business establishment date");
  }
  if (!applicationData.businessInfo?.natureOfBusiness?.trim()) {
    missing.push("nature of business");
  }
  if (!applicationData.businessInfo?.address?.street?.trim()) {
    missing.push("business address");
  }
  if (!applicationData.businessInfo?.phone?.trim()) {
    missing.push("business phone");
  }
  if (!applicationData.businessInfo?.employees) {
    missing.push("number of employees");
  }
  if (!applicationData.businessInfo?.annualSales) {
    missing.push("annual sales");
  }
  if (!applicationData.businessInfo?.annualProfit) {
    missing.push("annual profit");
  }
  if (!applicationData.businessInfo?.bankInfo?.bankName?.trim()) {
    missing.push("bank name");
  }
  if (!applicationData.businessInfo?.bankInfo?.accountNumber?.trim()) {
    missing.push("bank account number");
  }
  if (!applicationData.financingInfo?.requestedAmount) {
    missing.push("requested loan amount");
  }
  if (
    !applicationData.financingInfo?.useOfFunds ||
    applicationData.financingInfo.useOfFunds.length === 0
  ) {
    missing.push("use of funds");
  }
  if (applicationData.legalQuestions?.outstandingJudgments === undefined) {
    missing.push("outstanding judgments");
  }
  if (applicationData.legalQuestions?.bankruptcyHistory === undefined) {
    missing.push("bankruptcy history");
  }
  if (applicationData.legalQuestions?.pendingLawsuits === undefined) {
    missing.push("pending lawsuits");
  }

  return missing;
}

// Helper function to get next logical question
function getNextQuestion(applicationData: Partial<ApplicationData>) {
  const missing = getMissingData(applicationData);
  if (missing.length === 0) return null;

  // Return the first missing item in logical order
  const questionOrder = [
    "loan type",
    "full name",
    "email address",
    "phone number",
    "residential address",
    "business legal name",
    "business type",
    "tax ID/EIN",
    "business establishment date",
    "nature of business",
    "business address",
    "business phone",
    "number of employees",
    "annual sales",
    "annual profit",
    "bank name",
    "bank account number",
    "requested loan amount",
    "use of funds",
    "outstanding judgments",
    "bankruptcy history",
    "pending lawsuits",
  ];

  for (const question of questionOrder) {
    if (missing.includes(question)) {
      return question;
    }
  }

  return missing[0];
}

// System prompt for the loan application assistant
const SYSTEM_PROMPT = `You are Helen, a friendly and experienced loan application assistant for Blue Ledger Capital. You have years of experience helping people navigate the loan application process, and you genuinely care about helping each applicant succeed.

YOUR PERSONALITY AS HELEN:
- Warm, empathetic, and genuinely helpful
- Patient and understanding - you know applying for loans can be stressful
- Professional but approachable - like talking to a knowledgeable friend
- Encouraging and supportive throughout the process
- Clear and concise in your communication
- You celebrate small wins and progress with applicants

CRITICAL RULES:
1. NEVER ask for information that has already been provided in the application data
2. Always check the "MISSING DATA" list to see what you still need to collect
3. Ask for the NEXT LOGICAL missing piece of information from the missing data list
4. Ask ONLY ONE QUESTION AT A TIME - never ask multiple questions in a single response
5. WAIT for the user's response before asking the next question
6. Be conversational and friendly, but professional
7. Validate responses and provide helpful corrections if needed
8. Acknowledge what the user provided before asking the next question with appreciation
9. DO NOT repeat questions for data that has already been collected

HELEN'S COMMUNICATION STYLE:
- Start responses with warm acknowledgments like "Great!", "Perfect!", "Wonderful!", "That's exactly what I need!"
- Use encouraging phrases like "We're making great progress!", "Almost there!", "You're doing fantastic!"
- Be empathetic about the process: "I know these forms can be a lot, but you're doing great!"
- End with the next question in a friendly, conversational way
- Use the applicant's name when you know it to make it personal
- NEVER ask multiple questions in one response - Helen is patient and waits for each answer

CRITICAL CONVERSATION RULES:
- Ask ONLY ONE question per response
- Wait for the user's answer before asking anything else
- For legal questions, be especially careful to ask one at a time:
  1. Ask about outstanding judgments → WAIT for answer → acknowledge
  2. Ask about bankruptcy history → WAIT for answer → acknowledge  
  3. Ask about pending lawsuits → WAIT for answer → acknowledge
- Never rush the user - Helen is patient and understanding

IMPORTANT: For yes/no questions (legal questions), ask one at a time:
- First ask about outstanding judgments, wait for answer
- Then ask about bankruptcy history, wait for answer  
- Finally ask about pending lawsuits, wait for answer

VALIDATION RULES:
- Email: must contain @ and valid domain (e.g., user@domain.com)
- Phone: must be 10 digits, will be formatted as (XXX) XXX-XXXX
- Tax ID/EIN: must be 9 digits, will be formatted as XX-XXXXXXX
- Amounts: must be positive numbers, can include $ and commas
- Addresses: should include street, city, state, zip separated by commas

FORMATTING EXAMPLES:
- Phone "1234567890" → format as "(123) 456-7890"
- Phone "(123) 456-7890" → keep as is
- EIN "123456789" → format as "12-3456789"  
- EIN "12-3456789" → keep as is

RESPONSE FORMAT:
Always end your response with structured data extraction in this EXACT format:

\`\`\`json
{
  "field": "field_name",
  "value": "extracted_value",
  "isValid": true/false,
  "validationError": "error message if invalid",
  "nextStep": "next_field_to_collect"
}
\`\`\`

FIELD MAPPING (use these exact field names):
- Loan type responses (1, "business credit", "credit line") → field: "loanType", value: "business-credit"
- Loan type responses (2, "real estate", "property") → field: "loanType", value: "real-estate"  
- Loan type responses (3, "merchant cash", "mca") → field: "loanType", value: "mca"
- Names → field: "fullName"
- Email addresses → field: "email"
- Phone numbers → field: "phone"
- Residential addresses → field: "address"
- Business names (like "ABC Company LLC", "XYZ Corp") → field: "businessName" (Helen will auto-detect entity type from suffix)
- Business types (if not detected from name) → field: "businessType"
- Tax IDs → field: "taxId"
- Business establishment dates → field: "businessEstablished"
- Nature of business → field: "natureOfBusiness"
- Business addresses → field: "businessAddress"
- Business phone → field: "businessPhone"
- Number of employees → field: "employees"
- Annual sales → field: "annualSales"
- Annual profit → field: "annualProfit"
- Bank name → field: "bankName"
- Bank account numbers (like "0123456789", "123-456-789") → field: "accountNumber"
- Dollar amounts for loans (like "120000", "$120,000", "120k") → field: "requestedAmount", value: convert to number
- Use of funds → field: "useOfFunds"
- Outstanding judgments (yes/no questions) → field: "outstandingJudgments", value: true/false
- Bankruptcy history (yes/no questions) → field: "bankruptcyHistory", value: true/false
- Pending lawsuits (yes/no questions) → field: "pendingLawsuits", value: true/false

BUSINESS NAME INTELLIGENCE:
- If user says "ABC Company LLC" → Extract as businessName: "ABC Company", auto-detect businessType: "llc"
- If user says "XYZ Corporation" → Extract as businessName: "XYZ", auto-detect businessType: "corporation"  
- If user says "Just Business Name" → Extract as businessName: "Just Business Name", then ask for business type
- Helen should acknowledge when she detects the business type: "Great! I can see that's an LLC, so I have that noted."

CRITICAL EXAMPLES:
- User says "Wells Fargo" when asked for bank → {"field": "bankName", "value": "Wells Fargo", "isValid": true}
- User says "0123456789" when asked for account number → {"field": "accountNumber", "value": "0123456789", "isValid": true}
- User says "1234567890" when asked for phone → {"field": "phone", "value": "1234567890", "isValid": true}
- User says "123456789" when asked for EIN → {"field": "taxId", "value": "123456789", "isValid": true}
- User says "ABC Company LLC" for business name → {"field": "businessName", "value": "ABC Company LLC", "isValid": true}
- User says "XYZ Corp" for business name → {"field": "businessName", "value": "XYZ Corp", "isValid": true}
- User says "Just Business Name" for business name → {"field": "businessName", "value": "Just Business Name", "isValid": true}
- User says "equipment purchase" when asked for use of funds → {"field": "useOfFunds", "value": "equipment purchase", "isValid": true}
- User says "no" to outstanding judgments → {"field": "outstandingJudgments", "value": false, "isValid": true}
- User says "yes" to bankruptcy history → {"field": "bankruptcyHistory", "value": true, "isValid": true}

REMEMBER: If user just answered the question you asked, extract that data immediately!

IMPORTANT: If no missing data, respond that the application is complete.

Keep responses warm but concise. Don't repeat information they've already provided.`;

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

    // Get missing data and next question
    const missingData = getMissingData(applicationData);
    const nextQuestion = getNextQuestion(applicationData);

    // Get the latest user message
    const userMessage = messages[messages.length - 1]?.content || "";

    // Create detailed context with explicit data already collected
    const collectedData = {
      loanType: applicationData.financingInfo?.loanType || "NOT PROVIDED",
      fullName: applicationData.applicantInfo?.fullName || "NOT PROVIDED",
      email: applicationData.applicantInfo?.email || "NOT PROVIDED",
      phone: applicationData.applicantInfo?.phone || "NOT PROVIDED",
      address: applicationData.applicantInfo?.address?.street
        ? `${applicationData.applicantInfo.address.street}, ${applicationData.applicantInfo.address.city}, ${applicationData.applicantInfo.address.state} ${applicationData.applicantInfo.address.zip}`
        : "NOT PROVIDED",
      businessName: applicationData.businessInfo?.legalName || "NOT PROVIDED",
      businessType:
        applicationData.businessInfo?.businessType || "NOT PROVIDED",
      taxId: applicationData.businessInfo?.taxId || "NOT PROVIDED",
      established: applicationData.businessInfo?.established || "NOT PROVIDED",
      natureOfBusiness:
        applicationData.businessInfo?.natureOfBusiness || "NOT PROVIDED",
      businessAddress: applicationData.businessInfo?.address?.street
        ? `${applicationData.businessInfo.address.street}, ${applicationData.businessInfo.address.city}, ${applicationData.businessInfo.address.state} ${applicationData.businessInfo.address.zip}`
        : "NOT PROVIDED",
      businessPhone: applicationData.businessInfo?.phone || "NOT PROVIDED",
      employees: applicationData.businessInfo?.employees || "NOT PROVIDED",
      annualSales: applicationData.businessInfo?.annualSales || "NOT PROVIDED",
      annualProfit:
        applicationData.businessInfo?.annualProfit !== undefined
          ? applicationData.businessInfo.annualProfit
          : "NOT PROVIDED",
      bankName:
        applicationData.businessInfo?.bankInfo?.bankName || "NOT PROVIDED",
      accountNumber:
        applicationData.businessInfo?.bankInfo?.accountNumber || "NOT PROVIDED",
      requestedAmount:
        applicationData.financingInfo?.requestedAmount || "NOT PROVIDED",
      useOfFunds: applicationData.financingInfo?.useOfFunds?.length
        ? applicationData.financingInfo.useOfFunds.join(", ")
        : "NOT PROVIDED",
      outstandingJudgments:
        applicationData.legalQuestions?.outstandingJudgments !== undefined
          ? applicationData.legalQuestions.outstandingJudgments
            ? "Yes"
            : "No"
          : "NOT PROVIDED",
      bankruptcyHistory:
        applicationData.legalQuestions?.bankruptcyHistory !== undefined
          ? applicationData.legalQuestions.bankruptcyHistory
            ? "Yes"
            : "No"
          : "NOT PROVIDED",
      pendingLawsuits:
        applicationData.legalQuestions?.pendingLawsuits !== undefined
          ? applicationData.legalQuestions.pendingLawsuits
            ? "Yes"
            : "No"
          : "NOT PROVIDED",
    };

    const applicationContext = `
CURRENT APPLICATION DATA SUMMARY:
- Loan Type: ${collectedData.loanType}
- Full Name: ${collectedData.fullName}
- Email: ${collectedData.email}
- Phone: ${collectedData.phone}
- Residential Address: ${collectedData.address}
- Business Name: ${collectedData.businessName}
- Business Type: ${collectedData.businessType}
- Tax ID/EIN: ${collectedData.taxId}
- Business Established: ${collectedData.established}
- Nature of Business: ${collectedData.natureOfBusiness}
- Business Address: ${collectedData.businessAddress}
- Business Phone: ${collectedData.businessPhone}
- Employees: ${collectedData.employees}
- Annual Sales: ${collectedData.annualSales}
- Annual Profit: ${collectedData.annualProfit}
- Bank Name: ${collectedData.bankName}
- Bank Account Number: ${collectedData.accountNumber}
- Requested Loan Amount: ${collectedData.requestedAmount}
- Use of Funds: ${collectedData.useOfFunds}
- Outstanding Judgments: ${collectedData.outstandingJudgments}
- Bankruptcy History: ${collectedData.bankruptcyHistory}
- Pending Lawsuits: ${collectedData.pendingLawsuits}

MISSING DATA STILL NEEDED: [${missingData.join(", ")}]
NEXT LOGICAL QUESTION: ${nextQuestion || "Application complete - all data collected"}

USER'S LATEST MESSAGE: "${userMessage}"

CRITICAL INSTRUCTIONS:
- Look at the data summary above - anything marked as "NOT PROVIDED" is missing
- If the user just provided information that appears to answer what you asked for, extract it immediately
- DO NOT ask for the same information twice in a row
- ASK ONLY ONE QUESTION AT A TIME - never ask multiple questions together
- If you just asked for "outstanding judgments" and user said "no", extract it as outstandingJudgments: false and ask about bankruptcy history next
- If you just asked for "bank account number" and user said "0123456789", extract it as accountNumber: "0123456789"
- If you just asked for "bank name" and user said "Wells Fargo", extract it as bankName: "Wells Fargo"
- If no missing data remains, congratulate them that the application is complete
- ALWAYS extract data from the user's response if it answers your previous question

FOR LEGAL QUESTIONS SPECIFICALLY - ASK ONE AT A TIME:
- First ask ONLY: "Do you or your business have any outstanding judgments against you? Just a simple yes or no is perfect."
- WAIT for user response, acknowledge it, then ask ONLY: "Have you or your business ever filed for bankruptcy? Again, just yes or no."
- WAIT for user response, acknowledge it, then ask ONLY: "Are there any pending lawsuits involving you or your business? One more yes or no."
- NEVER ask all three legal questions together in one response

REMEMBER: Helen is patient and never rushes. One question, wait for answer, acknowledge, next question.

CURRENT CONVERSATION CONTEXT:
The user is responding to your previous question. Look at what you asked for and extract that information from their response.

EXTRACT DATA FROM THE USER'S MESSAGE AND ASK FOR THE NEXT MISSING ITEM.
`;

    console.log("Application context being sent to AI:", applicationContext); // Debug log

    // Try models in order of preference with new API
    const modelOptions = ["gemini-2.0-flash-exp", "gemini-1.5-pro"];

    let result;

    for (const modelName of modelOptions) {
      try {
        console.log(`Attempting to use model: ${modelName}`);

        const config = {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1000,
          responseMimeType: "text/plain",
        };

        // Filter out the initial welcome message and ensure proper conversation flow
        const relevantMessages = messages.filter(
          (msg) =>
            !msg.content.includes("👋 Welcome to Blue Ledger Capital") &&
            !msg.content.includes(
              "Hello, I would like to start my loan application"
            )
        );

        // Prepare conversation history for new API format
        const contents = [];

        // Add conversation history in alternating format
        for (let i = 0; i < relevantMessages.length - 1; i++) {
          const msg = relevantMessages[i];
          contents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }],
          });
        }

        // Add the current user message with context
        contents.push({
          role: "user",
          parts: [{ text: `${SYSTEM_PROMPT}\n\n${applicationContext}` }],
        });

        // Generate response using new API
        const response = await genAI.models.generateContentStream({
          model: modelName,
          config,
          contents,
        });

        // Handle response from new API format
        let assistantMessage = "";
        for await (const chunk of response) {
          assistantMessage += chunk.text || "";
        }

        console.log(`Successfully used model: ${modelName}`);

        // Extract JSON data with corrected pattern
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
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.warn(`Model ${modelName} failed:`, errorMessage);
        if (modelName === modelOptions[modelOptions.length - 1]) {
          // Last model failed, throw the error
          throw new Error(`All models failed. Last error: ${errorMessage}`);
        }
        // Continue to next model
        continue;
      }
    }
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
