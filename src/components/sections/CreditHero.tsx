// components/sections/CreditHero.tsx
import Link from "next/link";

export default function CreditHero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Flexible Credit Solutions
            <br />
            Built for Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're scaling a business or investing in real estate, Blue
            Ledger Capital delivers tailored credit strategies that open doors
            to opportunity—without the red tape.
          </p>

          <div className="pt-4">
            <Link
              href="/get-pre-qualified"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Get Pre-Qualified Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
