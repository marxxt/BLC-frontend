"use client";
// components/ui/LoanCalculator.tsx
import { useState, useEffect } from "react";

interface LoanCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
}

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(36);
  const [calculation, setCalculation] = useState<LoanCalculation | null>(null);

  // Calculate loan payments
  const calculateLoan = () => {
    const principal = loanAmount;
    const annualRate = interestRate / 100;
    const monthlyRate = annualRate / 12;
    const totalPayments = loanTerm;

    // Monthly payment formula: M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1]
    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - principal;

    setCalculation({
      monthlyPayment,
      totalInterest,
      totalPayment,
    });
  };

  // Recalculate when inputs change
  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Loan Calculator
      </h3>

      {/* Input Controls */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Loan Amount:
            </label>
            <span className="font-semibold text-gray-900 dark:text-white">
              {formatCurrency(loanAmount)}
            </span>
          </div>
          <input
            type="range"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            min="10000"
            max="1000000"
            step="10000"
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Interest Rate:
            </label>
            <span className="font-semibold text-gray-900 dark:text-white">
              {interestRate}%
            </span>
          </div>
          <input
            type="range"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            min="3"
            max="25"
            step="0.1"
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Term:
            </label>
            <span className="font-semibold text-gray-900 dark:text-white">
              {loanTerm} months
            </span>
          </div>
          <input
            type="range"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            min="6"
            max="60"
            step="6"
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {calculation && (
        <>
          {/* Monthly Payment */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg mb-4">
            <div className="text-center">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                Monthly Payment
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {formatCurrency(calculation.monthlyPayment)}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg text-center">
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                Total Interest
              </div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                {formatCurrency(calculation.totalInterest)}
              </div>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg text-center">
              <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Total Payment
              </div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {formatCurrency(calculation.totalPayment)}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Use Cases */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-center">
          <div className="font-medium text-gray-900 dark:text-white">
            Equipment
          </div>
        </div>
        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-center">
          <div className="font-medium text-gray-900 dark:text-white">
            Expansion
          </div>
        </div>
        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-center">
          <div className="font-medium text-gray-900 dark:text-white">
            Marketing
          </div>
        </div>
        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-center">
          <div className="font-medium text-gray-900 dark:text-white">
            Inventory
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
