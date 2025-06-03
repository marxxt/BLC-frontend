// components/sections/BusinessCreditLines.tsx
import CreditSolutionCard from "../ui/CreditSolutionCard";

export default function BusinessCreditLines() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <CreditSolutionCard
              icon="💳"
              title="Unsecured Business Lines of Credit"
              description="Grow your business with revolving lines of credit that don't require collateral. Perfect for startups and seasoned businesses alike, our credit lines offer flexibility, fast approvals, and zero obligation to use funds until needed."
              highlights={[
                "$25,000–$250,000+ approvals",
                "0% intro APR options available",
                "Only a soft credit pull to pre-qualify",
                "No income verification in some cases",
                "Great for marketing, inventory, payroll, and more",
              ]}
              ctaText="Apply for Business Credit"
              ctaLink="/apply-business-credit"
              featured={true}
            />
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Credit cards mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Card 1 */}
                    <div className="w-64 h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg transform rotate-6">
                      <div className="p-6 text-white">
                        <div className="text-sm opacity-80 mb-2">
                          Business Credit Line
                        </div>
                        <div className="text-xl font-bold">$250,000</div>
                        <div className="text-xs opacity-60 mt-4">
                          Available Credit
                        </div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="w-64 h-40 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg transform -rotate-3 -mt-32 ml-8">
                      <div className="p-6 text-white">
                        <div className="text-sm opacity-80 mb-2">Term Loan</div>
                        <div className="text-xl font-bold">$150,000</div>
                        <div className="text-xs opacity-60 mt-4">
                          Working Capital
                        </div>
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
