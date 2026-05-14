'use client';
const ProgressBar = ({ percent, label }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-white text-xl mb-2">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-700"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;