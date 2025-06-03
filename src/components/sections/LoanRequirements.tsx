import Link from "next/link";

// components/sections/LoanRequirements.tsx
export default function LoanRequirements() {
  const requirements = [
    {
      icon: "📅",
      title: "Minimum 3–6 months in business",
      description: "We work with both new and established businesses",
    },
    {
      icon: "💰",
      title: "$5,000+ in monthly business revenue",
      description: "Consistent income shows your ability to repay",
    },
    {
      icon: "🏢",
      title: "Valid EIN + business checking account",
      description: "Legitimate business entity with banking relationship",
    },
    {
      icon: "📊",
      title: "Last 3–6 months of bank statements",
      description: "Recent financial activity for approval decision",
    },
    {
      icon: "🆔",
      title: "Driver's license",
      description: "Valid identification for verification",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📋 Simple Requirements to Get Started
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We make it easy to apply, with minimal paperwork and fast decisions.
          </p>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
            You'll Typically Need:
          </h3>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{requirement.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {requirement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {requirement.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/submit-info"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors inline-block"
          >
            Submit My Info
          </Link>
        </div>
      </div>
    </section>
  );
}
