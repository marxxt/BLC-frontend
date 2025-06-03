// app/chat-apply/page.tsx
"use client";

import { useState } from "react";
import ChatFlow from "@/components/chatbot/ChatFlow";
import PdfReview from "@/components/pdf/PdfReview";
import { ApplicationData } from "@/types/application";

export default function ChatApplyPage() {
  const [applicationData, setApplicationData] =
    useState<ApplicationData | null>(null);
  const [showPdfReview, setShowPdfReview] = useState(false);

  const handleApplicationComplete = (data: ApplicationData) => {
    setApplicationData(data);
    setShowPdfReview(true);
  };

  const handleStartOver = () => {
    setApplicationData(null);
    setShowPdfReview(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!showPdfReview ? (
            <ChatFlow onComplete={handleApplicationComplete} />
          ) : (
            <PdfReview
              applicationData={applicationData!}
              onStartOver={handleStartOver}
            />
          )}
        </div>
      </div>
    </div>
  );
}
