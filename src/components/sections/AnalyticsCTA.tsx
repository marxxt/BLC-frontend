import Link from "next/link";

// components/sections/AnalyticsCTA.tsx
export default function AnalyticsCTA() {
  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Put Your Credit Data
            <br />
            to Work
          </h2>
          <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Log in to your Blue Ledger Capital dashboard to start using your
            analytics today—or sign up to get your first funding scenario
            analyzed free.
          </p>

          <div className="pt-4">
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 dark:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Access My Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
