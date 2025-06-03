import Link from "next/link";

// components/ui/CreditSolutionCard.tsx
interface CreditSolutionCardProps {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

export default function CreditSolutionCard({
  icon,
  title,
  description,
  highlights,
  ctaText,
  ctaLink,
  featured = false,
}: CreditSolutionCardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 ${
        featured
          ? "border-blue-600 dark:border-blue-500"
          : "border-gray-200 dark:border-gray-700"
      } hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
    >
      {/* Icon and Title */}
      <div className="mb-6">
        <div className="text-3xl mb-4">{icon}</div>
        <h3
          className={`text-xl font-bold ${
            featured
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-900 dark:text-white"
          } mb-4`}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Highlights */}
      <ul className="space-y-3 mb-8">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={ctaLink}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          featured
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
