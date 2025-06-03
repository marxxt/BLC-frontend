// components/sections/ClientTestimonials.tsx
export default function ClientTestimonials() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
            Real Financial Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            What Our
            <br />
            Clients Say
            <br />
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg">
            Our clients have experienced significant growth and success with
            effective and reliable financial solutions that suit their business
            requirements.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-gray-900 dark:text-white leading-relaxed mb-4">
                  "The service transformed my business! I never imagined
                  acquiring funding could be this simple and effective."
                </blockquote>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Sarah Smith
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-gray-900 dark:text-white leading-relaxed mb-4">
                  "Outstanding results and professional service. Blue Ledger
                  Capital exceeded our expectations."
                </blockquote>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Michael Johnson
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
