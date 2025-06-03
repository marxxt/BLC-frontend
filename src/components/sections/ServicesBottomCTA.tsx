// components/sections/ServicesBottomCTA.tsx
export default function ServicesBottomCTA() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          Unlock Your
          <br />
          Financial
          <br />
          Potential
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Our diverse selection of financial services empowers businesses to
          achieve their goals with customized solutions that deliver results and
          exceed expectations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Learn More →
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 relative p-8">
              {/* Dashboard Mockup */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Good morning
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    2,851.29
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-400">📊</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      $250k
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Revenue
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      $180k
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex justify-center items-center space-x-8 mt-12 opacity-60">
            <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              Cobalt
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              ShipShape
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              Streamlr
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              Pitchbay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
