"use client";
// components/ui/ContactFAQItem.tsx
import { useState } from "react";

interface ContactFAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ContactFAQItem({
  question,
  answer,
  isOpen = false,
  onToggle,
}: ContactFAQItemProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <div
          className={`w-6 h-6 flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}
        >
          <svg
            className="w-4 h-4 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}
