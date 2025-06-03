// components/sections/CapitalTracker.tsx
import AnalyticsCard from "../ui/AnalyticsCard";

export default function CapitalTracker() {
  const trackerVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Capital allocation mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Capital Allocation
            </h3>

            {/* Pie Chart Simulation */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32" viewBox="0 0 42 42">
                {/* Marketing - 35% */}
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="35 65"
                  strokeDashoffset="25"
                />
                {/* Inventory - 25% */}
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="25 75"
                  strokeDashoffset="-10"
                />
                {/* Payroll - 20% */}
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="20 80"
                  strokeDashoffset="-35"
                />
                {/* Other - 20% */}
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeDasharray="20 80"
                  strokeDashoffset="-55"
                />
              </svg>
            </div>

            {/* Legend */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Marketing (35%)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Inventory (25%)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Payroll (20%)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Other (20%)
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
          icon="💼"
          title="Where Your Capital Is Going"
          description="Track how and where your funding is being deployed across business or investment categories. Visualize ROI, segment costs, and plan more effectively."
          features={[
            "Fund usage breakdown (inventory, marketing, payroll, rehab, etc.)",
            "Cost-per-dollar-deployed insights",
            "ROI tagging by funding source",
            "Dynamic charts & exports",
          ]}
          ctaText="View Funding Usage Dashboard"
          ctaLink="/funding-dashboard"
          visual={trackerVisual}
          reverse={true}
        />
      </div>
    </section>
  );
}
