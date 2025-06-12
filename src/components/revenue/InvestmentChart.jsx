import React from "react";

const InvestmentChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm mx-auto">
      <h3 className="text-lg font-semibold mb-4">All Investments</h3>

      <div className="flex justify-center relative">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            {/* Platinum - 40% */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="6"
              strokeDasharray="40 60"
            />
            {/* Diamond - 15% */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#064e3b"
              strokeWidth="6"
              strokeDasharray="15 85"
              strokeDashoffset="-40"
            />
            {/* Gold - 45% */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="6"
              strokeDasharray="45 55"
              strokeDashoffset="-55"
            />
          </svg>

          {/* Center value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-green-900">1210</span>
            <span className="text-xs text-gray-500">Total Investment sold</span>
          </div>

          {/* % bubbles */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-white shadow px-2 py-1 text-xs rounded-full">40%</div>
          </div>
          <div className="absolute -bottom-1 right-0">
            <div className="bg-white shadow px-2 py-1 text-xs rounded-full">15%</div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="bg-white shadow px-2 py-1 text-xs rounded-full">45%</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row justify-around items-center mt-6 text-sm gap-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          <span>Platinum Investment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-900" />
          <span>Diamond Investment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-800" />
          <span>Gold Investment</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentChart;
