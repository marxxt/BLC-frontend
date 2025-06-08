// components/chatbot/ChatFlow.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ApplicationData } from "@/types/application";
import MessageBubble from "./MessageBubble";
import HelenAvatar from "./HelenAvatar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { generateApplicationId } from "@/lib/utils";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [cancelPending, setCancelPending] = useState(false);

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

  const initializeChat = async () => {
    const welcomeMessage =
      "👋 Hi there! I'm Helen, your personal loan application assistant here at Blue Ledger Capital. I'm excited to help you with your funding application today!";
    // addMessage("bot", welcomeMessage);

    try {
      setIsTyping(true);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "assistant", content: welcomeMessage },
            {
              role: "user",
              content:
                "Hello Helen, I would like to start my loan application.",
            },
          ],
          applicationData: {},
          currentStep: "loan_type",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setTimeout(() => {
          setIsTyping(false);
          addMessage("bot", result.message);
          if (isSoundEnabled) {
            playBotSound();
          }
        }, 1500);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          addBotMessage(
            "Perfect! Let's get started. I'll guide you through this step by step, and don't worry - I'm here to help if you have any questions along the way.\n\nFirst, I need to know what type of funding you're looking for:\n\n1️⃣ Business Credit Line\n2️⃣ Real Estate Investment Loan\n3️⃣ Merchant Cash Advance\n\nJust type 1, 2, or 3, or feel free to tell me in your own words!"
          );
        }, 1500);
      }
    } catch (error) {
      console.error("Error initializing chat:", error);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "Perfect! Let's get started. I'll guide you through this step by step, and don't worry - I'm here to help if you have any questions along the way.\n\nFirst, I need to know what type of funding you're looking for:\n\n1️⃣ Business Credit Line\n2️⃣ Real Estate Investment Loan\n3️⃣ Merchant Cash Advance\n\nJust type 1, 2, or 3, or feel free to tell me in your own words!"
        );
      }, 1500);
    }
  };

  const sendMessageToAPI = async (
    userMessage: string
  ): Promise<ChatResponse> => {
    const chatMessages = [
      ...messages,
      {
        id: generateId(),
        type: "user",
        content: userMessage,
        timestamp: new Date(),
      },
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

    console.log("Updating application data:", { field, value });

    setApplicationData((prev) => {
      const updated = { ...prev };

      // Ensure nested objects are initialized
      if (!updated.applicantInfo) {
        updated.applicantInfo = {
          fullName: "",
          email: "",
          phone: "",
          ssn: "",
          address: { street: "", city: "", state: "", zip: "" },
        };
      }
      if (!updated.businessInfo) {
        updated.businessInfo = {
          legalName: "",
          businessType: "sole-proprietorship",
          taxId: "",
          established: "",
          natureOfBusiness: "",
          phone: "",
          employees: 0,
          annualSales: 0,
          annualProfit: 0,
          address: { street: "", city: "", state: "", zip: "" },
          bankInfo: {
            bankName: "",
            accountNumber: "",
            bankContact: "",
            bankPhone: "",
          },
        };
      }
      if (!updated.financingInfo) {
        updated.financingInfo = {
          loanType: "business-credit",
          requestedAmount: 0,
          useOfFunds: [],
        };
      }
      if (!updated.legalQuestions) {
        updated.legalQuestions = {
          outstandingJudgments: false,
          bankruptcyHistory: false,
          pendingLawsuits: false,
        };
      }

      // Handle field updates
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
          const cleanPhone = String(value).replace(/\D/g, "");
          let formattedPhone = value;
          if (cleanPhone.length === 10) {
            formattedPhone = `(${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6)}`;
          }
          updated.applicantInfo.phone = formattedPhone;
          break;
        case "address":
          if (typeof value === "string") {
            const parts = value.split(",").map((p) => p.trim());
            updated.applicantInfo.address = {
              street: parts[0] || "",
              city: parts[1] || "",
              state: parts[2] || "",
              zip: parts[3] || "",
            };
          } else {
            updated.applicantInfo.address = value;
          }
          break;
        case "businessName":
          let detectedBusinessType: string | null = null;
          let cleanBusinessName = String(value).trim();

          const businessTypeSuffixes: { [key: string]: string } = {
            llc: "llc",
            "l.l.c.": "llc",
            "l.l.c": "llc",
            inc: "corporation",
            "inc.": "corporation",
            incorporated: "corporation",
            corp: "corporation",
            "corp.": "corporation",
            corporation: "corporation",
            ltd: "corporation",
            "ltd.": "corporation",
            limited: "corporation",
            "co.": "corporation",
            company: "corporation",
            lp: "partnership",
            "l.p.": "partnership",
            llp: "partnership",
            "l.l.p.": "partnership",
            pllc: "llc",
            "p.l.l.c.": "llc",
            pc: "corporation",
            "p.c.": "corporation",
            pa: "corporation",
            "p.a.": "corporation",
          };

          const lowerName = cleanBusinessName.toLowerCase();
          for (const [suffix, type] of Object.entries(businessTypeSuffixes)) {
            if (
              lowerName.endsWith(` ${suffix}`) ||
              lowerName.endsWith(suffix)
            ) {
              detectedBusinessType = type;
              const regex = new RegExp(
                `\\s*${suffix.replace(/\./g, "\\.")}\\s*$`,
                "i"
              );
              cleanBusinessName = cleanBusinessName.replace(regex, "").trim();
              break;
            }
          }

          updated.businessInfo.legalName = cleanBusinessName;

          if (detectedBusinessType) {
            updated.businessInfo.businessType = detectedBusinessType as
              | "corporation"
              | "llc"
              | "partnership"
              | "sole-proprietorship"
              | "individual";
            console.log(
              `Auto-detected business type: ${detectedBusinessType} from name: ${value}`
            );
          }
          break;
        case "businessType":
          updated.businessInfo.businessType = value;
          break;
        case "taxId":
          const cleanEIN = String(value).replace(/\D/g, "");
          let formattedEIN = value;
          if (cleanEIN.length === 9) {
            formattedEIN = `${cleanEIN.slice(0, 2)}-${cleanEIN.slice(2)}`;
          }
          updated.businessInfo.taxId = formattedEIN;
          break;
        case "businessEstablished":
          updated.businessInfo.established = value;
          break;
        case "natureOfBusiness":
          updated.businessInfo.natureOfBusiness = value;
          break;
        case "businessAddress":
          if (typeof value === "string") {
            const parts = value.split(",").map((p) => p.trim());
            updated.businessInfo.address = {
              street: parts[0] || "",
              city: parts[1] || "",
              state: parts[2] || "",
              zip: parts[3] || "",
            };
          } else {
            updated.businessInfo.address = value;
          }
          break;
        case "businessPhone":
          const cleanBusinessPhone = String(value).replace(/\D/g, "");
          let formattedBusinessPhone = value;
          if (cleanBusinessPhone.length === 10) {
            formattedBusinessPhone = `(${cleanBusinessPhone.slice(0, 3)}) ${cleanBusinessPhone.slice(3, 6)}-${cleanBusinessPhone.slice(6)}`;
          }
          updated.businessInfo.phone = formattedBusinessPhone;
          break;
        case "employees":
          updated.businessInfo.employees =
            typeof value === "number" ? value : parseInt(value) || 0;
          break;
        case "annualSales":
          updated.businessInfo.annualSales =
            typeof value === "number"
              ? value
              : parseFloat(String(value).replace(/[$,]/g, "")) || 0;
          break;
        case "annualProfit":
          updated.businessInfo.annualProfit =
            typeof value === "number"
              ? value
              : parseFloat(String(value).replace(/[$,]/g, "")) || 0;
          break;
        case "bankName":
          updated.businessInfo.bankInfo.bankName = value;
          break;
        case "accountNumber":
          updated.businessInfo.bankInfo.accountNumber = value;
          break;
        case "requestedAmount":
          updated.financingInfo.requestedAmount =
            typeof value === "number"
              ? value
              : parseFloat(String(value).replace(/[$,]/g, "")) || 0;
          break;
        case "useOfFunds":
          updated.financingInfo.useOfFunds = Array.isArray(value)
            ? value
            : [value];
          break;
        case "outstandingJudgments":
          const outstandingJudgments =
            String(value).toLowerCase().includes("yes") ||
            String(value).toLowerCase().includes("true");
          updated.legalQuestions.outstandingJudgments = outstandingJudgments;
          break;
        case "bankruptcyHistory":
          const bankruptcyHistory =
            String(value).toLowerCase().includes("yes") ||
            String(value).toLowerCase().includes("true");
          updated.legalQuestions.bankruptcyHistory = bankruptcyHistory;
          break;
        case "pendingLawsuits":
          const pendingLawsuits =
            String(value).toLowerCase().includes("yes") ||
            String(value).toLowerCase().includes("true");
          updated.legalQuestions.pendingLawsuits = pendingLawsuits;
          break;
        default:
          console.log("Unhandled field:", field, value);
      }

      return updated;
    });
  };

  const checkIfApplicationComplete = (
    data: Partial<ApplicationData>
  ): boolean => {
    const loanType = data.financingInfo?.loanType;

    const baseRequirements = !!(
      data.financingInfo?.loanType &&
      data.financingInfo?.requestedAmount &&
      data.financingInfo?.useOfFunds &&
      data.financingInfo.useOfFunds.length > 0 &&
      data.applicantInfo?.fullName &&
      data.applicantInfo?.email &&
      data.applicantInfo?.phone &&
      data.applicantInfo?.address?.street &&
      data.legalQuestions?.outstandingJudgments !== undefined &&
      data.legalQuestions?.bankruptcyHistory !== undefined &&
      data.legalQuestions?.pendingLawsuits !== undefined
    );

    if (!baseRequirements) return false;

    switch (loanType) {
      case "business-credit":
        return !!(
          data.businessInfo?.legalName &&
          data.businessInfo?.businessType &&
          data.businessInfo?.taxId &&
          data.businessInfo?.established &&
          data.businessInfo?.natureOfBusiness &&
          data.businessInfo?.address?.street &&
          data.businessInfo?.phone &&
          data.businessInfo?.employees !== undefined &&
          data.businessInfo?.annualSales &&
          data.businessInfo?.annualProfit !== undefined &&
          data.businessInfo?.bankInfo?.bankName &&
          data.businessInfo?.bankInfo?.accountNumber
        );
      case "real-estate":
        return !!(
          data.businessInfo?.legalName &&
          data.businessInfo?.businessType &&
          data.businessInfo?.taxId &&
          data.businessInfo?.established &&
          data.businessInfo?.address?.street &&
          data.businessInfo?.phone &&
          data.businessInfo?.annualSales &&
          data.businessInfo?.bankInfo?.bankName &&
          data.businessInfo?.bankInfo?.accountNumber
        );
      case "mca":
        return !!(
          data.businessInfo?.legalName &&
          data.businessInfo?.businessType &&
          data.businessInfo?.taxId &&
          data.businessInfo?.established &&
          data.businessInfo?.address?.street &&
          data.businessInfo?.phone &&
          data.businessInfo?.annualSales &&
          data.businessInfo?.bankInfo?.bankName &&
          data.businessInfo?.bankInfo?.accountNumber
        );
      default:
        return !!(
          data.businessInfo?.legalName &&
          data.businessInfo?.businessType &&
          data.businessInfo?.taxId &&
          data.businessInfo?.established &&
          data.businessInfo?.natureOfBusiness &&
          data.businessInfo?.address?.street &&
          data.businessInfo?.phone &&
          data.businessInfo?.employees !== undefined &&
          data.businessInfo?.annualSales &&
          data.businessInfo?.annualProfit !== undefined &&
          data.businessInfo?.bankInfo?.bankName &&
          data.businessInfo?.bankInfo?.accountNumber
        );
    }
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
        ...applicationData.legalQuestions,
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

    if (confirmCancel) {
      const lastMsg = inputValue.trim().toLowerCase();

      if (["yes", "y"].includes(lastMsg)) {
        setCancelPending(true);
        addBotMessage("Saving your application for later...");
        setTimeout(() => {
          console.log("Application saved:", applicationData);
          router.push("/"); // ✅ Will not refresh if default is prevented
        }, 1000);
      } else if (["no", "n"].includes(lastMsg)) {
        addBotMessage("No problem. Exiting now...");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        addBotMessage("Just reply with 'yes' or 'no' so I can proceed.");
      }

      setInputValue("");
      return;
    }

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

        if (
          response.extractedData &&
          response.extractedData.isValid !== false
        ) {
          updateApplicationData(response.extractedData);

          if (response.extractedData.nextStep) {
            setCurrentStep(response.extractedData.nextStep);
          }

          setTimeout(() => {
            setApplicationData((currentData) => {
              if (checkIfApplicationComplete(currentData)) {
                setTimeout(() => {
                  addBotMessage(
                    "🎉 Fantastic! We did it! I have all the information I need for your loan application. You've been wonderful to work with!\n\nLet me prepare your complete application summary and generate your PDF document. This will just take a moment..."
                  );
                  setTimeout(() => {
                    completeApplication();
                  }, 2000);
                }, 1000);
              }
              return currentData;
            });
          }, 500);
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

  const handleCancelApplication = () => {
    if (!confirmCancel) {
      setConfirmCancel(true);
      addBotMessage(
        "😢 I'm sorry to see you go. Would you like to save your application and finish later? Just type **yes** or **no**."
      );
      return;
    }

    const lastMsg = inputValue.trim().toLowerCase();
    if (["yes", "y"].includes(lastMsg)) {
      setCancelPending(true);
      // simulate saving
      setTimeout(() => {
        console.log("Application saved:", applicationData);
        router.push("/"); // or router.push("/dashboard")
      }, 1000);
    } else if (["no", "n"].includes(lastMsg)) {
      router.push("/"); // skip saving
    } else {
      addBotMessage("Just reply with 'yes' or 'no' so I can proceed.");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Left Sidebar */}
      <div className="w-80 bg-white/20 dark:bg-black/20 backdrop-blur-xl border-r border-gray-200/20 dark:border-white/10 flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200/20 dark:border-white/10">
          <div className="flex items-center space-x-4">
            <HelenAvatar
              size="lg"
              imageURL="/images/avatars/helen-chat-bubble.png"
              className="border-blue-400/30 dark:border-purple-400/30"
            />
            <div>
              <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                Helen
              </h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Loan Assistant
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                Blue Ledger Capital
              </p>
            </div>
          </div>
        </div>

        {/* Application Progress */}
        <div className="p-6 flex-1">
          <h3 className="text-gray-900 dark:text-white font-medium mb-4">
            Application Progress
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                Personal Information
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 dark:bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-900 dark:text-white text-sm">
                Business Details
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              <span className="text-gray-500 text-sm">
                Financial Information
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              <span className="text-gray-500 text-sm">Legal Questions</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 border-t border-gray-200/20 dark:border-white/10 space-y-3">
          <ThemeToggle />

          <button
            onClick={() => {
              setIsSoundEnabled(!isSoundEnabled);
              setShowSoundBlockedAlert(false);
            }}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 rounded-lg transition-colors text-gray-900 dark:text-white text-sm"
          >
            <span>{isSoundEnabled ? "🔊" : "🔇"}</span>
            <span>Sound {isSoundEnabled ? "On" : "Off"}</span>
          </button>

          <button
            onClick={handleCancelApplication}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors"
          >
            <span className="font-bold">
              {" "}
              {confirmCancel ? "Confirm Cancel" : "Cancel Application"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-200/20 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-900 dark:text-white text-xl font-semibold">
                Loan Application Chat
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Secure • Fast • Personal
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-gray-900 dark:text-white text-sm font-medium">
                  Step: {currentStep.replace("_", " ").toUpperCase()}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                  {messages.length} messages
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message: Message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2">
              <HelenAvatar
                size="sm"
                imageURL="/images/avatars/helen-chat-bubble.png"
              />
              <div className="bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-4 max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 dark:bg-purple-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-blue-400 dark:bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-400 dark:bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-gray-200/20 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl">
          {showSoundBlockedAlert && (
            <div
              className="mb-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-800 dark:text-yellow-200 text-sm text-center cursor-pointer"
              onClick={() => setShowSoundBlockedAlert(false)}
            >
              Sound might be blocked by your browser. Click to dismiss.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your response..."
              className="flex-1 px-6 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-gray-200/30 dark:border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none"
              disabled={isTyping || isLoading}
            />
            <button
              type="submit"
              disabled={isTyping || isLoading || !inputValue.trim()}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-purple-500 dark:to-pink-500 hover:from-blue-600 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl text-white font-medium transition-all shadow-lg"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
