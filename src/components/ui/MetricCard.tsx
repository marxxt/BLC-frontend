interface MetricCardProps {
  value: string;
  label: string;
  chart?: React.ReactNode;
}

export default function MetricCard({ value, label, chart }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <p className="text-sm text-gray-500 mb-3">{label}</p>
      {chart && <div className="h-12">{chart}</div>}
    </div>
  );
}
