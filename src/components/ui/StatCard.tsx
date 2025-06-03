// components/ui/StatCard.tsx
interface StatCardProps {
  icon: React.ReactNode;
  percentage: string;
  description: string;
  highlight?: boolean;
}

export default function StatCard({
  icon,
  percentage,
  description,
  highlight = false,
}: StatCardProps) {
  return (
    <div
      className={`text-center p-8 ${highlight ? "border-l-4 border-blue-600" : ""}`}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div
        className={`text-4xl md:text-5xl font-bold mb-4 ${highlight ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}
      >
        {percentage}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
