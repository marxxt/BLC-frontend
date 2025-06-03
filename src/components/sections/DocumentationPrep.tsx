// components/sections/DocumentationPrep.tsx
import ConsultingServiceCard from "../ui/ConsultingServiceCard";

export default function DocumentationPrep() {
  const documentationVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Documentation checklist */}
        <div className="absolute inset-0 p-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Document Review
            </h3>

            {/* Document Checklist */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Bank Statements
                  </span>
                </div>
                <span className="text-green-600 dark:text-green-400 text-xs">
                  Optimized
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    P&L Statements
                  </span>
                </div>
                <span className="text-green-600 dark:text-green-400 text-xs">
                  Ready
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    !
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Funding Narrative
                  </span>
                </div>
                <span className="text-blue-600 dark:text-blue-400 text-xs">
                  In Review
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ?
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Tax Documents
                  </span>
                </div>
                <span className="text-orange-600 dark:text-orange-400 text-xs">
                  Needs Work
                </span>
              </div>
            </div>

            {/* Compliance Score */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Compliance Score
                </span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  85%
                </span>
              </div>
              <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
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
          icon="🗂️"
          title="Lender-Ready Documentation Support"
          description="Many borrowers get denied not because they're unqualified—but because their documents aren't. We offer document review and coaching to make sure you look fundable before you apply."
          features={[
            "Organize bank statements, P&Ls, and tax docs",
            "Write strong funding narratives",
            "Package real estate deal decks",
            "Avoid red flags that get deals rejected",
            'Build "lender language" confidence',
          ]}
          ctaText="Request Compliance Coaching"
          ctaLink="/compliance-coaching"
          visual={documentationVisual}
          reverse={true}
        />
      </div>
    </section>
  );
}
