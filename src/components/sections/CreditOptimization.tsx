// components/sections/CreditOptimization.tsx
import AnalyticsCard from "../ui/AnalyticsCard";

export default function CreditOptimization() {
  const optimizationVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Credit optimization mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Credit Optimization
            </h3>

            {/* Credit Score */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Business Credit Score
                </span>
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  742
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Reduce Credit Utilization
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Could improve score by 15-25 points
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Add Trade Lines
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    3 vendor accounts recommended
                  </div>
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
        <AnalyticsCard
          icon="🧩"
          title="Unlock Better Terms with AI-Powered Credit Guidance"
          description="Our analytics engine scans your profile for credit optimization opportunities. Get clear, actionable tips to improve approval odds, reduce rates, or unlock higher limits."
          features={[
            "Soft-pull credit review",
            "Credit utilization analysis",
            "Business credit-building roadmap",
            "Auto-tracked improvement suggestions",
          ]}
          ctaText="See My Credit Recommendations"
          ctaLink="/credit-recommendations"
          visual={optimizationVisual}
          featured={true}
        />
      </div>
    </section>
  );
}
