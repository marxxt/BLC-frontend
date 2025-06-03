// components/chatbot/ChatFlow.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ApplicationData } from "@/types/application";
import MessageBubble from "./MessageBubble";
import { generateApplicationId } from "@/lib/utils";
import useSound from "use-sound";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface ChatFlowProps {
  onComplete: (data: ApplicationData) => void;
}

interface ChatResponse {
  message: string;
  extractedData?: {
    field?: string;
    value?: any;
    nextStep?: string;
    isValid?: boolean;
    validationError?: string;
  };
  success: boolean;
}

export default function ChatFlow({ onComplete }: ChatFlowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<string>("loan_type");
  const [applicationData, setApplicationData] = useState<
    Partial<ApplicationData>
  >({});
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [showSoundBlockedAlert, setShowSoundBlockedAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load the sound using useSound hook
  const [playBotSound] = useSound("/sounds/chatbot-ding.mp3", {
    volume: isSoundEnabled ? 1 : 0,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  useEffect(() => {
    // Initialize chat with welcome message
    initializeChat();
  }, []);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addMessage = (type: "bot" | "user", content: string) => {
    const message: Message = {
      id: generateId(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev: Message[]) => [...prev, message]);
  };

  const addBotMessage = (content: string, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage("bot", content);
      if (isSoundEnabled) {
        playBotSound();
      }
    }, delay);
  };

  const initializeChat = () => {
    const welcomeMessage =
      "👋 Welcome to Blue Ledger Capital! I'm here to help you with your funding application. Let's start by determining what type of financing you need.\n\nWhat type of funding are you looking for?\n\n1️⃣ Business Credit Line\n2️⃣ Real Estate Investment Loan\n3️⃣ Merchant Cash Advance\n\nPlease type 1, 2, or 3, or tell me in your own words what you're looking for.";

    addBotMessage(welcomeMessage, 1000);
  };

  const sendMessageToAPI = async (
    userMessage: string
  ): Promise<ChatResponse> => {
    const chatMessages = [
      ...messages,
      { id: generateId(), type: "user", content: userMessage, timestamp: new Date() },
    ];

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: chatMessages.map((msg) => ({
          role: msg.type === "bot" ? "assistant" : "user",
          content: msg.content,
        })),
        applicationData,
        currentStep,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  };

  const updateApplicationData = (extractedData: any) => {
    if (!extractedData) return;

    const { field, value } = extractedData;

    setApplicationData((prev) => {
      const updated = { ...prev };

      // Ensure nested objects are initialized if they don't exist
      if (!updated.applicantInfo) {
        updated.applicantInfo = {
          fullName: "", email: "", phone: "", ssn: "",
          address: { street: "", city: "", state: "", zip: "" }
        };
      }
      if (!updated.businessInfo) {
        updated.businessInfo = {
          legalName: "", businessType: "sole-proprietorship", taxId: "",
          established: "", natureOfBusiness: "", phone: "", employees: 0,
          annualSales: 0, annualProfit: 0,
          address: { street: "", city: "", state: "", zip: "" },
          bankInfo: { bankName: "", accountNumber: "", bankContact: "", bankPhone: "" }
        };
      }
      if (!updated.financingInfo) {
        updated.financingInfo = {
          loanType: "business-credit", requestedAmount: 0, useOfFunds: []
        };
      }

      // Handle different data structures based on field
      switch (field) {
        case "loanType":
          updated.financingInfo.loanType = value;
          break;

        case "fullName":
          updated.applicantInfo.fullName = value;
          break;

        case "email":
          updated.applicantInfo.email = value;
          break;

        case "phone":
          updated.applicantInfo.phone = value;
          break;

        case "address":
          updated.applicantInfo.address = value;
          break;

        case "businessName":
          updated.businessInfo.legalName = value;
          break;

        case "businessType":
          updated.businessInfo.businessType = value;
          break;

        case "taxId":
          updated.businessInfo.taxId = value;
          break;

        case "requestedAmount":
          updated.financingInfo.requestedAmount = value;
          break;

        case "useOfFunds":
          updated.financingInfo.useOfFunds = Array.isArray(value) ? value : [value];
          break;

        // Add more cases as needed for other fields
        default:
          console.log("Unhandled field:", field, value);
      }

      return updated;
    });
  };

  const checkIfApplicationComplete = (
    data: Partial<ApplicationData>
  ): boolean => {
    return !!(
      data.financingInfo?.loanType &&
      data.financingInfo?.requestedAmount &&
      data.financingInfo?.useOfFunds &&
      data.applicantInfo?.fullName &&
      data.applicantInfo?.email &&
      data.applicantInfo?.phone &&
      data.businessInfo?.legalName &&
      data.businessInfo?.taxId
    );
  };

  const completeApplication = () => {
    const finalData: ApplicationData = {
      ...applicationData,
      applicationDate: new Date().toISOString(),
      applicationId: generateApplicationId(),
      legalQuestions: {
        outstandingJudgments: false,
        bankruptcyHistory: false,
        pendingLawsuits: false,
      },
      documents: {
        uploaded: [],
        required: ["bank-statements", "tax-returns", "financial-statements"],
      },
      ownershipInfo: {
        owners: [],
        personalGuarantee: false,
      },
    } as ApplicationData;

    onComplete(finalData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    addMessage("user", userMessage);
    setInputValue("");
    setIsLoading(true);

    try {
      setIsTyping(true);
      const response = await sendMessageToAPI(userMessage);

      setTimeout(() => {
        setIsTyping(false);
        addMessage("bot", response.message);

        if (isSoundEnabled) {
          playBotSound();
        }

        // Update application data if we extracted any
        if (response.extractedData) {
          updateApplicationData(response.extractedData);

          if (response.extractedData.nextStep) {
            setCurrentStep(response.extractedData.nextStep);
          }
        }

        // Check if application is complete
        const updatedData = { ...applicationData };
        if (response.extractedData) {
          // Apply the extracted data to check completeness
          updateApplicationData(response.extractedData);
        }

        if (checkIfApplicationComplete(updatedData)) {
          setTimeout(() => {
            addBotMessage(
              "Perfect! I have all the information I need. Let me prepare your application summary and PDF document..."
            );
            setTimeout(() => {
              completeApplication();
            }, 2000);
          }, 1500);
        }
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
      addMessage(
        "bot",
        "I apologize, but I encountered an error. Please try again or contact support if the issue persists."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h1 className="text-xl font-semibold">
          Blue Ledger Capital - Loan Application
        </h1>
        <p className="text-blue-100">
          Secure • Fast • Professional • AI-Powered
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={() => {
              setIsSoundEnabled(!isSoundEnabled);
              setShowSoundBlockedAlert(false);
            }}
            className="px-3 py-1 bg-blue-700 rounded-md text-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSoundEnabled ? "Sound: On" : "Sound: Off"}
          </button>
          <div className="text-sm text-blue-100">
            Step: {currentStep.replace("_", " ").toUpperCase()}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message: Message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && (
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {showSoundBlockedAlert && (
        <div
          className="p-2 bg-yellow-100 text-yellow-800 text-sm text-center cursor-pointer"
          onClick={() => setShowSoundBlockedAlert(false)}
        >
          Sound might be blocked by your browser. Please check your site
          settings to allow audio autoplay.
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your response..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            disabled={isTyping || isLoading}
          />
          <button
            type="submit"
            disabled={isTyping || isLoading || !inputValue.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
