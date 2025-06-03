// components/sections/BuildBusinessCredit.tsx
import CreditSolutionCard from "../ui/CreditSolutionCard";

export default function BuildBusinessCredit() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Credit building visualization */}
                <div className="absolute inset-0 p-8">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                      Credit Building Progress
                    </h3>

                    {/* Progress steps */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          EIN Registration
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          DUNS Number Setup
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            3
                          </span>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Vendor Trade Lines
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">
                            4
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Business Credit Cards
                        </span>
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
              icon="🔐"
              title="Build True Business Credit (No Personal Guarantee)"
              description="Establish and grow credit under your business EIN—not your SSN. We help you build vendor accounts, report to the right bureaus, and separate your personal and business credit profiles."
              highlights={[
                "Vendor and net-30 trade line guidance",
                "Business credit bureau setup",
                "EIN + DUNS compliance assistance",
                "Access to no-PG credit card options",
              ]}
              ctaText="Start Building Business Credit"
              ctaLink="/build-credit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
