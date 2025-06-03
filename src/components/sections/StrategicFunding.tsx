// components/sections/StrategicFunding.tsx
import ConsultingServiceCard from "../ui/ConsultingServiceCard";

export default function StrategicFunding() {
  const strategyVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Strategy session mockup */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Strategy Session
              </h3>
              <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                🎯 Consultation
              </div>
            </div>

            {/* Strategy Steps */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Goal Assessment
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Define funding objectives
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Capital Readiness
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Evaluate current position
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Lender Matching
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with best options
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Action Plan
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Custom roadmap delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Next Session */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                  Next Available
                </div>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  Tomorrow 2:00 PM
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
          icon="📞"
          title="One-on-One Capital Strategy Sessions"
          description="Our consulting engagements start with a deep dive into your goals. Whether you're seeking funding, building business credit, or scaling your real estate portfolio, we'll map a personalized strategy to get you funded fast—with clarity and confidence."
          features={[
            "Capital readiness evaluation",
            "Lender-matching strategy",
            "Business credit structuring",
            "Application documentation review",
            "Personal and business credit improvement plan",
          ]}
          ctaText="Schedule My Strategy Call"
          ctaLink="/schedule-strategy-call"
          visual={strategyVisual}
          featured={true}
        />
      </div>
    </section>
  );
}
