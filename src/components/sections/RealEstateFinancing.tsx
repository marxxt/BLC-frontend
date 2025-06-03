// components/sections/RealEstateCredit.tsx
import CreditSolutionCard from "../ui/CreditSolutionCard";

export default function RealEstateCredit() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <CreditSolutionCard
              icon="🏗️"
              title="Real Estate Investor Credit Facilities"
              description="Investors can secure revolving rehab credit lines, acquisition credit, or bridge capital for value-add projects and cash-out refis. We broker custom facilities to support fix & flip pros, landlords, and builders."
              highlights={[
                "Fix & Flip Lines",
                "New Construction Credit",
                "DSCR Rental Credit Facilities",
                "Up to 90% LTC, 100% rehab financing",
                "Nationwide lending partners",
              ]}
              ctaText="See Investor Loan Programs"
              ctaLink="/investor-loans"
              featured={true}
            />
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Real estate portfolio mockup */}
                <div className="absolute inset-0 p-6">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Property 1 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                      <div className="w-full h-16 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
                        Fix & Flip
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        $150K LTC
                      </div>
                    </div>
                    {/* Property 2 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                      <div className="w-full h-16 bg-green-200 dark:bg-green-800 rounded mb-2"></div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
                        Rental
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        DSCR 1.25x
                      </div>
                    </div>
                    {/* Property 3 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                      <div className="w-full h-16 bg-purple-200 dark:bg-purple-800 rounded mb-2"></div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
                        Construction
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Ground Up
                      </div>
                    </div>
                    {/* Property 4 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                      <div className="w-full h-16 bg-yellow-200 dark:bg-yellow-800 rounded mb-2"></div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
                        Bridge
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        90% LTV
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
