import Link from "next/link";

// components/sections/WhyWorkWithUs.tsx
export default function WhyWorkWithUs() {
  const advantages = [
    {
      icon: "🎯",
      title: "10+ years experience in small biz + real estate lending",
      description: "Deep industry knowledge across multiple sectors",
    },
    {
      icon: "🌐",
      title: "Nationwide lender network",
      description: "Access to hundreds of funding sources",
    },
    {
      icon: "🎨",
      title: "Non-cookie-cutter advisory",
      description: "Customized strategies for your unique situation",
    },
    {
      icon: "⚡",
      title: "Actionable plans, not theory",
      description: "Practical steps you can implement immediately",
    },
    {
      icon: "🎯",
      title: "Focused on results, not retainers",
      description: "Success-driven approach with clear outcomes",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            👥 A Partner, Not Just a Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            When you hire Blue Ledger Consulting, you get insider guidance from
            professionals who understand lending—and how to help you stand out.
            We offer transparent advice, no fluff, and deep experience across
            both real estate and small business finance.
          </p>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
            What Sets Us Apart:
          </h3>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{advantage.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/free-consultation"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Book My Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
