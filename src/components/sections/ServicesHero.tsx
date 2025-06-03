// components/sections/ServicesHero.tsx
export default function ServicesHero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Star Rating */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          Unlock Your
          <br />
          Financial Potential
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          We offer tailored financial solutions for businesses of every scale,
          including loans, credit lines, and innovative financing options.
          Explore how we can help you discover new opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Learn More →
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
            <div className="aspect-[16/10] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 relative">
              {/* Office Scene Simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Person working */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-gray-700 dark:bg-gray-600 rounded-full opacity-40"></div>
                  </div>

                  {/* Blue accent shape */}
                  <div className="absolute top-1/4 right-1/4 w-48 h-32 bg-blue-600 rounded-lg opacity-60 transform rotate-12"></div>

                  {/* Desk elements */}
                  <div className="absolute bottom-1/4 left-1/4 w-24 h-16 bg-white dark:bg-gray-200 rounded-lg shadow-lg opacity-80"></div>
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
              Snapshot
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              Streamlr
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              etc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
