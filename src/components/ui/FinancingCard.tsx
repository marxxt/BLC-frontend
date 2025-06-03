// components/ui/FinancingCard.tsx
interface FinancingCardProps {
  icon: React.ReactNode;
  amount: string;
  description: string;
  highlight?: boolean;
}

export default function FinancingCard({
  icon,
  amount,
  description,
  highlight = false,
}: FinancingCardProps) {
  return (
    <div
      className={`p-6 rounded-lg border-2 ${highlight ? "border-blue-600 dark:border-blue-500" : "border-gray-200 dark:border-gray-700"} bg-white dark:bg-gray-800`}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4">
        {icon}
      </div>
      <div
        className={`text-4xl font-bold mb-2 ${highlight ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}
      >
        {amount}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}