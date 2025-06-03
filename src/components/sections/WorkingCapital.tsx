// components/sections/WorkingCapital.tsx
import LoanProductCard from "../ui/LoanProductCard";

export default function WorkingCapital() {
  const workingCapitalVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Fast funding mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Application
              </h3>
              <div className="text-green-600 dark:text-green-400 text-sm font-medium">
                ⚡ Fast Track
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
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
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Application Submitted
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    2 minutes ago
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
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
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Pre-Approved
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Within 2 hours
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Funding Available
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Next business day
                  </div>
                </div>
              </div>
            </div>

            {/* Amount */}
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  $75,000
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  Working Capital Available
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
          icon="⚡"
          title="Fast Working Capital for Daily Operations"
          description="Need cash for expenses, payroll, or growth? Our working capital loans deliver quick approvals and flexible repayments so you can stay focused on running your business."
          highlights={[
            "Decisions in as little as 2–24 hours",
            "Funding from $10K to $500K",
            "Short-term options: 3 to 18 months",
            "Daily or weekly repayment schedules",
            "Easy online process",
          ]}
          ctaText="Apply for Working Capital"
          ctaLink="/apply-working-capital"
          visual={workingCapitalVisual}
          featured={true}
        />
      </div>
    </section>
  );
}
