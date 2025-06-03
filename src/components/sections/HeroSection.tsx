// components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Capitalize on
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Transform your financial landscape with innovative solutions
                designed to accelerate your business growth and maximize
                opportunities.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Main image placeholder matching the workspace scene */}
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative">
                {/* Simulating the workspace image from the original */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">
                  {/* Person silhouette */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 dark:bg-gray-600 rounded-full opacity-30"></div>
                  {/* Laptop */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gray-300 dark:bg-gray-600 rounded-lg opacity-60"></div>
                  {/* Desk items */}
                  <div className="absolute bottom-12 left-8 w-8 h-12 bg-green-300 dark:bg-green-600 rounded opacity-40"></div>
                  <div className="absolute bottom-12 right-8 w-6 h-8 bg-yellow-300 dark:bg-yellow-600 rounded opacity-40"></div>
                </div>

                {/* Text overlay matching the original */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-4xl lg:text-5xl font-bold drop-shadow-lg">
                    Capitalize on
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
