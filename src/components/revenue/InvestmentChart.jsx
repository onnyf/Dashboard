import React from "react";

const InvestmentChart = () => {
  return (
    <div className="flex items-center justify-center p-4 min-h-[400px] sm:min-h-[500px] md:min-h-screen">
      <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-gray-800">
          All Investments
        </h3>

        {/* Donut Chart */}
        <div className="flex justify-center relative">
          <div className="relative w-48 sm:w-56 h-48 sm:h-56">
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full transform rotate-90"
            >
              {/* Gold Investment - 45% */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#ca8a04"
                strokeWidth="6"
                strokeDasharray="45 55"
                strokeDashoffset="0"
              />
              {/* Platinum Investment - 40% */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="6"
                strokeDasharray="40 60"
                strokeDashoffset="-45"
              />
              {/* Diamond Investment - 15% */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#064e3b"
                strokeWidth="6"
                strokeDasharray="15 85"
                strokeDashoffset="-85"
              />
            </svg>

            {/* Center Value */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] sm:text-xs text-gray-500">
                Total Investment Sold
              </span>
              <span className="text-xl sm:text-3xl font-bold text-[#064e3b]">
                1210
              </span>
            </div>

            {/* Percentage Bubbles */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-white shadow px-2 py-0.5 text-[10px] sm:text-xs rounded-full">
                45%
              </div>
            </div>
            <div className="absolute -bottom-2 right-0">
              <div className="bg-white shadow px-2 py-0.5 text-[10px] sm:text-xs rounded-full">
                15%
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="bg-white shadow px-2 py-0.5 text-[10px] sm:text-xs rounded-full">
                40%
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-6 text-xs sm:text-sm gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ca8a04]" />
            <span>Gold Investment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
            <span>Platinum Investment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#064e3b]" />
            <span>Diamond Investment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentChart;