// components/sections/AnalyticsHero.tsx
import Link from "next/link";

export default function AnalyticsHero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Real-Time Lending Insights.
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              Smarter Financial Moves.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our Analytics dashboard puts funding intelligence at your
            fingertips. Make better borrowing decisions, track approvals, and
            optimize your credit strategy—all in one place.
          </p>

          <div className="pt-4">
            <Link
              href="/launch-analytics"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Launch My Analytics
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
