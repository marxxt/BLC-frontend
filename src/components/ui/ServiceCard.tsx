// components/ui/ServiceCard.tsx
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  iconBgColor = "bg-indigo-600",
}: ServiceCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div
        className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-sm text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
