import Link from "next/link";

// components/sections/BusinessLoansCTA.tsx
export default function BusinessLoansCTA() {
  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Let's Fund Your
            <br />
            Business Today
          </h2>
          <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Apply in minutes with no obligation. Our advisors will match you
            with the best business loan option based on your unique goals and
            financials.
          </p>

          <div className="pt-4">
            <Link
              href="/loan-match"
              className="bg-white text-blue-600 dark:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Get a Free Loan Match
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
