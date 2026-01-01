const StatBar = ({ label, value }) => {
  const maxStat = 150;
  const width = Math.min((value / maxStat) * 100, 100);

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="capitalize">{label}</span>
        <span>{value}</span>
      </div>

      <div className="w-full bg-gray-300 h-2 rounded">
        <div
          className="h-2 bg-red-500 rounded"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default StatBar;