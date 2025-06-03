import Link from "next/link";

export default function WhoWeHelp() {
  const industries = [
    { name: "Service-based businesses", icon: "🛠️" },
    { name: "E-commerce stores", icon: "🛒" },
    { name: "Contractors & construction", icon: "🏗️" },
    { name: "Trucking & logistics", icon: "🚛" },
    { name: "Salons & retail", icon: "💄" },
    { name: "Real estate companies", icon: "🏢" },
    { name: "Restaurants & food", icon: "🍽️" },
    { name: "Healthcare practices", icon: "🏥" },
    { name: "And more", icon: "➕" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ✅ We Fund Businesses of All Types
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you're a solo entrepreneur or managing a team of 50+, we
            work with hundreds of industries nationwide. Don't worry if you've
            been declined by a bank—we specialize in finding creative funding
            fits.
          </p>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
            We Frequently Fund:
          </h3>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{industry.icon}</div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {industry.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/pre-qualify"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Pre-Qualify Without a Hard Pull
          </Link>
        </div>
      </div>
    </section>
  );
}
