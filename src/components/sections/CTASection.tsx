// components/sections/CTASection.tsx
export default function CTASection() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Unlock Your Financial Potential
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Partner with Blue Ledger Capital for transformative financing
          solutions and unlock new levels of success for your financial journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
            Start Growing →
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
