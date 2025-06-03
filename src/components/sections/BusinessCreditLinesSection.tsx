// components/sections/BusinessCreditLinesSection.tsx
import LoanProductCard from "../ui/LoanProductCard";

export default function BusinessCreditLinesSection() {
  const creditLineVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Credit line mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Credit Line Status
            </h3>

            {/* Credit Usage */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available Credit
                </span>
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  $175,000 / $250,000
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full w-3/4"></div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                70% utilized
              </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Recent Activity
              </div>

              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Payment Received
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    2 days ago
                  </div>
                </div>
                <div className="text-green-600 dark:text-green-400 font-medium">
                  +$15,000
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Marketing Campaign
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    1 week ago
                  </div>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">
                  -$8,500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <LoanProductCard
          icon="💳"
          title="Revolving Business Lines of Credit"
          description="Get flexible access to capital as you need it—without reapplying. Business lines of credit are great for managing cash flow, seizing new opportunities, or building business credit over time."
          highlights={[
            "Revolving access to capital",
            "Only pay interest on what you use",
            "Credit limits up to $250,000",
            "Reuse funds without reapplying",
            "Great for marketing, seasonal inventory, or vendor payments",
          ]}
          ctaText="See Credit Line Options"
          ctaLink="/credit-lines"
          visual={creditLineVisual}
          featured={true}
        />
      </div>
    </section>
  );
}
