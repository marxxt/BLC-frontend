// components/sections/WhyChooseUs.tsx
export default function WhyChooseUs() {
  const benefits = [
    {
      icon: "⚡",
      title: "Faster decisions",
      description: "Get approvals in hours, not weeks",
    },
    {
      icon: "🎯",
      title: "More flexible approval criteria",
      description: "We work with your unique situation",
    },
    {
      icon: "🔗",
      title: "Access to niche lenders",
      description: "Exclusive partnerships you can't find elsewhere",
    },
    {
      icon: "🤝",
      title: "Guidance from day 1 to funded",
      description: "Support throughout your entire journey",
    },
    {
      icon: "💎",
      title: "Transparent process with no junk fees",
      description: "Clear pricing with no hidden surprises",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Why Blue Ledger Capital?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just brokers—we're advocates. We navigate the maze of
            lenders for you, tailoring every offer to your goals and timeline.
            Whether you need a quick approval or long-term growth capital, we're
            your competitive edge.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Us For Header */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            Trust Us For:
          </h3>
        </div>
      </div>
    </section>
  );
}
