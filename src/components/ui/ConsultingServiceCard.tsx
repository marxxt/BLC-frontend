import Link from "next/link";

// components/ui/ConsultingServiceCard.tsx
interface ConsultingServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  visual?: React.ReactNode;
  featured?: boolean;
  reverse?: boolean;
}

export default function ConsultingServiceCard({
  icon,
  title,
  description,
  features,
  ctaText,
  ctaLink,
  visual,
  featured = false,
  reverse = false,
}: ConsultingServiceCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
    >
      {/* Content Side */}
      <div className={`space-y-6 ${reverse ? "lg:col-start-2" : ""}`}>
        <div
          className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 ${
            featured
              ? "border-blue-600 dark:border-blue-500"
              : "border-gray-200 dark:border-gray-700"
          }`}
        >
          {/* Icon and Title */}
          <div className="mb-6">
            <div className="text-3xl mb-4">{icon}</div>
            <h3
              className={`text-2xl font-bold ${
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

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  {feature}
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
      </div>

      {/* Visual Side */}
      <div className={`relative ${reverse ? "lg:col-start-1" : ""}`}>
        {visual}
      </div>
    </div>
  );
}
