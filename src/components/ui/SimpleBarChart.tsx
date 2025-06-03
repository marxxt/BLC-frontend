// components/ui/SimpleBarChart.tsx
export default function SimpleBarChart() {
  return (
    <div className="flex items-end space-x-1 h-12">
      {[40, 60, 45, 70, 55, 80, 65, 75, 50, 85, 60, 70].map((height, index) => (
        <div
          key={index}
          className="bg-blue-500 rounded-sm flex-1"
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
  );
}
