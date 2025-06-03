// components/sections/ServicesSection.tsx
import MetricCard from "../ui/MetricCard";
import SimpleBarChart from "../ui/SimpleBarChart";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Dashboard mockup */}
          <div className="space-y-6">
            {/* Header card with chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total hours
                  </h3>
                  <p className="text-3xl font-bold text-gray-900">53.28</p>
                </div>
                <div className="text-xs text-gray-400">
                  <div>Mo. 20</div>
                  <div>Dec 31, 2024</div>
                </div>
              </div>
              <div className="mb-4">
                <SimpleBarChart />
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom metrics row */}
            <div className="grid grid-cols-3 gap-4">
              <MetricCard value="24" label="Projects" />
              <MetricCard value="12" label="Clients" />
              <MetricCard value="48h" label="This week" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-blue-600 font-medium">
                Service Overview
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Business Credit Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlock breakthrough solutions to enhance financial growth and
                streamline your business workflow.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <h3 className="font-semibold text-gray-900">
                    Identify business credit opportunities with optimal business
                    credit
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Leverage cutting-edge technology to boost your credit score
                    and unlock new financing opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <h3 className="font-semibold text-gray-900">
                    Receive a proposal through the entire business workflow
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Streamline your entire business process with our
                    comprehensive workflow management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <h3 className="font-semibold text-gray-900">
                    Optimize real-time landing possibilities
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Investment with our investment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
