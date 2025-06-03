// components/pdf/PdfReview.tsx
"use client";

import { useState } from "react";
import { ApplicationData } from "../../types/application";
import { generatePDF } from "../../lib/pdfGenerator";

interface PdfReviewProps {
  applicationData: ApplicationData;
  onStartOver: () => void;
}

export default function PdfReview({
  applicationData,
  onStartOver,
}: PdfReviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      const pdfBlob = await generatePDF(applicationData);
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `blue-ledger-application-${applicationData.applicationId}.pdf`;
      link.click();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Application Complete! 🎉
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Review your information and download your application PDF
        </p>
      </div>

      {/* Application Summary */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Application Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Applicant Information
            </h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {applicationData.applicantInfo?.fullName}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {applicationData.applicantInfo?.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {applicationData.applicantInfo?.phone}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Business Information
            </h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-medium">Business:</span>{" "}
                {applicationData.businessInfo?.legalName}
              </p>
              <p>
                <span className="font-medium">Type:</span>{" "}
                {applicationData.businessInfo?.businessType}
              </p>
              <p>
                <span className="font-medium">Tax ID:</span>{" "}
                {applicationData.businessInfo?.taxId}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Financing Request
            </h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-medium">Type:</span>{" "}
                {applicationData.financingInfo?.loanType}
              </p>
              <p>
                <span className="font-medium">Amount:</span> $
                {applicationData.financingInfo?.requestedAmount?.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Use:</span>{" "}
                {applicationData.financingInfo?.useOfFunds?.[0]}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Application Details
            </h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-medium">ID:</span>{" "}
                {applicationData.applicationId}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(applicationData.applicationDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleGeneratePDF}
          disabled={isGenerating}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? "Generating PDF..." : "Generate Application PDF"}
        </button>

        {pdfUrl && (
          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Download PDF
          </button>
        )}

        <button
          onClick={onStartOver}
          className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Start New Application
        </button>
      </div>

      {/* Next Steps */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Next Steps:
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
          <li>Download and review your application PDF</li>
          <li>Sign the application electronically or by hand</li>
          <li>
            Gather required documents (bank statements, tax returns, etc.)
          </li>
          <li>Submit everything to Blue Ledger Capital for review</li>
          <li>Our team will contact you within 1-2 business days</li>
        </ol>
      </div>
    </div>
  );
}
