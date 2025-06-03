// components/sections/RealEstateAdvisory.tsx
import ConsultingServiceCard from "../ui/ConsultingServiceCard";

export default function RealEstateAdvisory() {
  const realEstateVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Real estate portfolio dashboard */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Portfolio Advisory
            </h3>

            {/* Portfolio Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  $2.4M
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  Portfolio Value
                </div>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  12
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  Active Properties
                </div>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900 rounded-lg">
                <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  1.35x
                </div>
                <div className="text-xs text-orange-600 dark:text-orange-400">
                  Avg DSCR
                </div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  75%
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400">
                  Avg LTV
                </div>
              </div>
            </div>

            {/* Strategy Items */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-700 dark:text-gray-300">
                  Fix & Flip Strategy
                </span>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  ✓ Optimized
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-700 dark:text-gray-300">
                  BRRRR Analysis
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  In Progress
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-700 dark:text-gray-300">
                  Exit Planning
                </span>
                <span className="text-orange-600 dark:text-orange-400 font-medium">
                  Scheduled
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
        <ConsultingServiceCard
          icon="🏡"
          title="Real Estate Capital Advisory"
          description="We help investors—from solo flippers to mid-sized developers—optimize loan structuring, stack capital, and prepare bankable packages that close. Consulting available for deal-specific or portfolio-wide needs."
          features={[
            "Fix & flip finance strategy",
            "BRRRR/DSCR underwriting optimization",
            "Land & construction structuring",
            "Deal analysis and lender prep",
            "Exit strategy and refinance planning",
          ]}
          ctaText="Talk to a Real Estate Funding Expert"
          ctaLink="/real-estate-expert"
          visual={realEstateVisual}
          reverse={true}
        />
      </div>
    </section>
  );
}
