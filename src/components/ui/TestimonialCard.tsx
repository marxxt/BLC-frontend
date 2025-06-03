// components/ui/TestimonialCard.tsx
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  logo?: React.ReactNode;
  featured?: boolean;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  logo,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border-2 ${featured ? "border-blue-600 dark:border-blue-500" : "border-gray-200 dark:border-gray-700"} p-6 h-full flex flex-col`}
    >
      {/* Logo Section 
      <div className="mb-6 flex items-center justify-center h-16">
        {logo ? (
          logo
        ) : (
          <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">
            LOGO
          </div>
        )}
      </div>*/}

      {/* Quote */}
      <blockquote
        className={`text-lg ${featured ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"} leading-relaxed mb-6 flex-grow`}
      >
        {quote}
      </blockquote>

      {/* Author Info */}
      <div className="mt-auto">
        <div
          className={`font-semibold ${featured ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}
        >
          {author}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </div>
  );
}
