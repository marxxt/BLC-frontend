// components/sections/RevenueBasedFinancing.tsx
import LoanProductCard from "../ui/LoanProductCard";

export default function RevenueBasedFinancing() {
  const revenueVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Revenue tracking mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Revenue Analysis
            </h3>

            {/* Revenue Chart */}
            <div className="mb-6">
              <div className="flex items-end space-x-2 h-24 mb-3">
                {[65, 72, 58, 81, 76, 88, 92].map((height, index) => (
                  <div
                    key={index}
                    className="bg-orange-500 rounded-t flex-1"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                Last 7 months
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-orange-50 dark:bg-orange-900 rounded-lg">
                <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  $84K
                </div>
                <div className="text-xs text-orange-600 dark:text-orange-400">
                  Avg Monthly Revenue
                </div>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  12%
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  Growth Rate
                </div>
              </div>
            </div>

            {/* Qualification Status */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Qualification Status
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  ✓ Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <LoanProductCard
          icon="📊"
          title="Revenue-Based Loans with No Collateral Needed"
          description="If your business generates consistent sales, we can help you qualify for funding based on cash flow—not credit. Perfect for e-commerce, service businesses, and entrepreneurs in need of quick liquidity."
          highlights={[
            "No collateral required",
            "Based on business revenue, not FICO",
            "Approval based on recent bank statements",
            "Ideal for lower credit scores",
            "Fast-track funding up to $250K+",
          ]}
          ctaText="Check Revenue-Based Options"
          ctaLink="/revenue-based-financing"
          visual={revenueVisual}
          reverse={true}
        />
      </div>
    </section>
  );
}
