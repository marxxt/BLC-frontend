import LoanProductCard from "../ui/LoanProductCard";
import LoanCalculator from "../ui/LoanCalculator";

export default function TermLoansSection() {
  const termLoanVisual = (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Interactive loan calculator */}
        <div className="absolute inset-0 p-6">
          <LoanCalculator />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <LoanProductCard
          icon="📈"
          title="Business Term Loans for Growth Projects"
          description="Ideal for equipment, renovations, marketing, or expansion—business term loans give you a fixed lump sum with predictable repayment and competitive rates."
          highlights={[
            "6 to 60 month terms",
            "Monthly payments",
            "Fixed or variable rates",
            "Up to $1 million+",
            "Ideal for growing, not just surviving",
          ]}
          ctaText="Explore Term Loan Options"
          ctaLink="/term-loans"
          visual={termLoanVisual}
          reverse={true}
        />
      </div>
    </section>
  );
}
