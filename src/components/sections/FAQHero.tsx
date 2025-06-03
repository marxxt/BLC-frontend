// components/sections/FAQHero.tsx
import { useState } from "react";
import FAQItem from "../ui/FAQItem";

export default function FAQHero() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("general");

  const faqCategories = {
    general: {
      title: "🔹 GENERAL",
      faqs: [
        {
          id: 1,
          question: "What is Blue Ledger Capital?",
          answer:
            "Blue Ledger Capital is a boutique financial brokerage firm helping clients secure real estate investment loans and business credit lines quickly and efficiently.",
        },
        {
          id: 2,
          question: "Who can apply for funding through Blue Ledger Capital?",
          answer:
            "We serve real estate investors (fix & flip, buy & hold, new construction), small business owners, and entrepreneurs across the U.S.",
        },
        {
          id: 3,
          question: "What types of funding do you offer?",
          answer:
            "We broker private money loans, DSCR rental loans, fix & flip loans, new construction loans, business term loans, and unsecured lines of credit.",
        },
        {
          id: 4,
          question: "Are you a direct lender or a broker?",
          answer:
            "We are a broker, which means we match you with the most suitable lending partner from our nationwide lender network.",
        },
        {
          id: 5,
          question:
            "How is Blue Ledger Capital different from a traditional bank?",
          answer:
            "Unlike banks, we offer faster closings, more flexible underwriting, and customized funding solutions that don't rely on your personal credit alone.",
        },
      ],
    },
    realestate: {
      title: "🔹 REAL ESTATE FUNDING",
      faqs: [
        {
          id: 6,
          question: "Do you offer loans for first-time real estate investors?",
          answer:
            "Yes! We work with lenders who fund both experienced and first-time investors.",
        },
        {
          id: 7,
          question:
            "What loan-to-value (LTV) can I get for fix & flip projects?",
          answer:
            "Up to 90% of purchase price and 100% of rehab costs—subject to lender terms and your experience.",
        },
        {
          id: 8,
          question: "What is a DSCR loan and who qualifies?",
          answer:
            "DSCR (Debt Service Coverage Ratio) loans qualify based on property cash flow—not personal income. Great for rental property investors.",
        },
        {
          id: 9,
          question: "How fast can I close on a real estate loan?",
          answer:
            "Many of our private money loans close in as little as 7–10 days.",
        },
        {
          id: 10,
          question: "Do you lend on land or new construction?",
          answer:
            "Yes. We have ground-up construction loans available for qualified builders and developers.",
        },
      ],
    },
    business: {
      title: "🔹 BUSINESS CREDIT",
      faqs: [
        {
          id: 11,
          question: "Can I get business funding if I have bad credit?",
          answer:
            "Yes. Many of our lenders focus on business performance or stated income, not your credit score.",
        },
        {
          id: 12,
          question: "What documents do I need to apply for business credit?",
          answer:
            "Basic documents may include your business entity info, EIN, 3–6 months of bank statements, and a driver's license.",
        },
        {
          id: 13,
          question: "How much can I get in unsecured business credit lines?",
          answer:
            "Clients may qualify for $25,000 to $250,000+ depending on business strength and credit profile.",
        },
        {
          id: 14,
          question:
            "How long does it take to get approved for business funding?",
          answer:
            "Some decisions are made same-day, with funding available within 1–3 days.",
        },
        {
          id: 15,
          question: "Is there a minimum time in business to apply?",
          answer:
            "Many lenders prefer at least 3–6 months in business, but we also have options for startups.",
        },
      ],
    },
    process: {
      title: "🔹 PROCESS & SUPPORT",
      faqs: [
        {
          id: 16,
          question: "How do I get started with Blue Ledger Capital?",
          answer:
            "Click **Get Started** on our homepage to begin the application or speak with a funding advisor.",
        },
        {
          id: 17,
          question: "Can I upload documents securely on your website?",
          answer:
            "Yes. Our platform supports secure document uploads and encrypted communication.",
        },
        {
          id: 18,
          question: "Is there a fee to apply?",
          answer:
            "No upfront fees. If applicable, we only earn a fee upon successful funding (disclosed clearly).",
        },
        {
          id: 19,
          question: "Do you offer support after funding?",
          answer:
            "Absolutely. We provide ongoing advisory for refinancing, scaling, and repeat transactions.",
        },
        {
          id: 20,
          question: "Can I get pre-approved without a hard credit pull?",
          answer:
            "Yes. Most lenders perform a soft pull initially, preserving your credit score.",
        },
      ],
    },
  };

  const handleFAQClick = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const currentFAQs =
    faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - FAQ Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Frequently
                <br />
                Asked Questions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Discover answers to your queries on services, processes, and
                achieving financial success with us.
              </p>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(faqCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setExpandedFAQ(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Current Category Title */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {currentFAQs.title}
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
              {currentFAQs.faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  number={index + 1}
                  question={faq.question}
                  answer={faq.answer}
                  isExpanded={expandedFAQ === faq.id}
                  onClick={() => handleFAQClick(faq.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - City Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 relative">
                {/* City aerial view simulation */}
                <div className="absolute inset-0">
                  {/* Buildings and streets */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-green-200 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 opacity-60"></div>

                  {/* Building blocks */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-20 bg-blue-400 dark:bg-blue-600 opacity-70 rounded-sm"></div>
                  <div className="absolute top-1/3 right-1/4 w-12 h-16 bg-orange-400 dark:bg-orange-600 opacity-70 rounded-sm"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-14 h-18 bg-green-400 dark:bg-green-600 opacity-70 rounded-sm"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-10 h-14 bg-purple-400 dark:bg-purple-600 opacity-70 rounded-sm"></div>

                  {/* Streets/paths */}
                  <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 dark:bg-gray-600 opacity-50"></div>
                  <div className="absolute top-0 left-1/2 w-2 h-full bg-gray-300 dark:bg-gray-600 opacity-50"></div>

                  {/* Green spaces (trees) */}
                  <div className="absolute top-1/5 right-1/5 w-8 h-8 bg-green-500 dark:bg-green-600 rounded-full opacity-60"></div>
                  <div className="absolute bottom-1/5 left-1/5 w-6 h-6 bg-green-500 dark:bg-green-600 rounded-full opacity-60"></div>
                  <div className="absolute top-2/3 right-1/3 w-7 h-7 bg-green-500 dark:bg-green-600 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>

            {/* FAQ Summary Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  20+
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  FAQ Topics
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  4
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  Categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
