// components/sections/LendingOverview.tsx
import AnalyticsCard from "../ui/AnalyticsCard";

export default function LendingOverview() {
  const dashboardVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Dashboard mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lending Dashboard
              </h3>
              <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                Live Data
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  $485K
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  Total Approved
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  7
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  Active Loans
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  3
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-400">
                  In Progress
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  2.5%
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400">
                  Avg Interest
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Funding Progress
                </span>
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
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
          icon="📅"
          title="Your Personalized Lending Snapshot"
          description="See a full breakdown of your funding applications, approvals, rejections, and outstanding balances. Stay on top of key metrics so you always know where you stand."
          features={[
            "Applications in progress",
            "Approved amounts vs. funded amounts",
            "Interest rates & payment schedules",
            "Lender response times",
            "Next actions required",
          ]}
          ctaText="View My Loan History"
          ctaLink="/loan-history"
          visual={dashboardVisual}
          featured={true}
        />
      </div>
    </section>
  );
}
