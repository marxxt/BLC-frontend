// components/sections/BusinessCreditCoaching.tsx
import ConsultingServiceCard from "../ui/ConsultingServiceCard";

export default function BusinessCreditCoaching() {
  const creditCoachingVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Credit building roadmap */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Credit Building Roadmap
            </h3>

            {/* Progress Timeline */}
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
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    EIN & Entity Setup
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Business foundation complete
                  </div>
                </div>
                <div className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Complete
                </div>
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
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    DUNS Registration
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Business credit bureau setup
                  </div>
                </div>
                <div className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Complete
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    Trade Line Setup
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    5 vendor accounts in progress
                  </div>
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  60% Complete
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm font-bold">
                  4
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-500 dark:text-gray-400">
                    Business Credit Cards
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    No-PG card applications
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  Pending
                </div>
              </div>
            </div>

            {/* Current Score */}
            <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                  Business Credit Score
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  Building...
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
        <ConsultingServiceCard
          icon="💼"
          title="Business Credit Buildout (With or Without PG)"
          description="We'll help you build a fundable business profile that unlocks access to large lines of credit under your EIN—no personal guarantee needed. Perfect for founders, consultants, and service-based businesses."
          features={[
            "Entity & EIN optimization",
            "Trade line & vendor setup",
            "DUNS & Experian business registration",
            "Business credit card strategies",
            "Tier-based credit-building roadmap",
          ]}
          ctaText="Start Building Business Credit Now"
          ctaLink="/build-business-credit"
          visual={creditCoachingVisual}
          featured={true}
        />
      </div>
    </section>
  );
}
