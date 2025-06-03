// components/sections/SecuritySection.tsx
export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: "🔒",
      title: "Encrypted dashboards",
      description: "Bank-grade encryption protects all your data",
    },
    {
      icon: "🛡️",
      title: "SOC 2-compliant partners",
      description: "Industry-standard security compliance",
    },
    {
      icon: "🤝",
      title: "Data never sold or shared without consent",
      description: "Your privacy is our priority",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🔐 Data-Backed. Privacy-First.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We protect your data using bank-grade encryption. Only you can see
            your analytics, and you control what's shared with lenders.
            Transparency is built into everything we do.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
