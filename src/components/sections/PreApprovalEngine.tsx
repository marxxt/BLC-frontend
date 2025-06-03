// components/sections/PreApprovalEngine.tsx
import AnalyticsCard from "../ui/AnalyticsCard";

export default function PreApprovalEngine() {
  const engineVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Probability engine mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Pre-Approval Probability
            </h3>

            {/* Probability Score */}
            <div className="text-center mb-6">
              <div className="relative w-32 h-32 mx-auto">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="82, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    82%
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Approval Probability
              </p>
            </div>

            {/* Lender Match */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Best Match Lender
                </span>
                <span className="text-sm text-green-600 dark:text-green-400">
                  95% match
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Alternative Option
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  78% match
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
        <AnalyticsCard
          icon="🔍"
          title="Know Your Chances Before You Apply"
          description="Our proprietary model compares your borrower profile against active lender criteria to estimate your approval odds before submitting a full application."
          features={[
            "Save time & avoid unnecessary credit pulls",
            "Match with lenders most likely to fund you",
            "Improve your funding readiness score",
            "Update inputs to re-calculate scenarios",
          ]}
          ctaText="Run Pre-Approval Analysis"
          ctaLink="/pre-approval-analysis"
          visual={engineVisual}
          reverse={true}
        />
      </div>
    </section>
  );
}
