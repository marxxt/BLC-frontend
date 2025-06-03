// components/ui/FAQItem.tsx
import { useState } from "react";

interface FAQItemProps {
  number: number;
  question: string;
  answer?: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

export default function FAQItem({
  number,
  question,
  answer,
  isExpanded = false,
  onClick,
}: FAQItemProps) {
  return (
    <div
      className={`border-l-4 ${isExpanded ? "border-blue-600" : "border-gray-200 dark:border-gray-700"} pl-6 py-4 cursor-pointer transition-all duration-200`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-8 h-8 rounded border-2 ${isExpanded ? "border-blue-600 bg-blue-50 dark:bg-blue-900" : "border-gray-300 dark:border-gray-600"} flex items-center justify-center flex-shrink-0`}
        >
          <span
            className={`text-sm font-semibold ${isExpanded ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
          >
            {number}
          </span>
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold ${isExpanded ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
          >
            {question}
          </h3>
          {isExpanded && answer && (
            <div className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
