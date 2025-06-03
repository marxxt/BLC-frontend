// components/sections/TermLoans.tsx
import CreditSolutionCard from "../ui/CreditSolutionCard";

export default function TermLoans() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Dashboard mockup */}
                <div className="absolute inset-0 p-8">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Loan Dashboard
                      </h3>
                      <div className="text-green-600 dark:text-green-400 text-sm font-medium">
                        ✓ Approved
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Application Progress
                        </span>
                        <span className="text-sm text-gray-900 dark:text-white font-medium">
                          100%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          $75,000
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Approved Amount
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          12 months
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Term Length
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <CreditSolutionCard
              icon="📈"
              title="Business Term Loans & Working Capital"
              description="Short-term business loans designed for speed. Get the working capital you need for operations, expansion, or emergencies—with clear terms and quick access to cash."
              highlights={[
                "Same-day decisions",
                "6–24 month terms",
                "No hard credit inquiry required to start",
                "Daily or weekly repayment options",
              ]}
              ctaText="Explore Term Loan Options"
              ctaLink="/term-loans"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
