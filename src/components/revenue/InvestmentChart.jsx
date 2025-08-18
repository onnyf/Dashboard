import React from "react";

const InvestmentChart = () => {
  return (
    <div className=" rounded-xl  p-6 w-full max-w-sm">
      {/* Title */}
      

     {/* Donut Chart */}
        <div className="flex justify-center relative">
          <div className="relative w-48 ">
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full transform rotate-55"
            >
              {/* Gold Investment - 45% */}
              <circle
                cx="18"
                cy="18"
                r="14"
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
                r="14"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="6"
                strokeDasharray="37 60"
                strokeDashoffset="-45"
              />
              {/* Diamond Investment - 15% */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#064e3b"
                strokeWidth="6"
                strokeDasharray="30 75"
                strokeDashoffset="-78"
              />
            </svg>

            {/* Center Value */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[11px]  text-gray-500">
                Total Investment Sold
              </span>
              <span className="text-xl sm:text-3xl font-textFont2 text-[#064e3b]">
                1210
              </span>
            </div>

            {/* Percentage Bubbles */}
            <div className="absolute bottom-[180px] left-1/2 -translate-x-1/2">
              <div className="bg-white shadow px-2 py-0.5 text-[10px] sm:text-xs rounded-full">
                40%
              </div>
            </div>
            <div className="absolute top-[150px] right-0">
              <div className="bg-white shadow px-2 py-0.5 text-[10px] sm:text-xs rounded-full">
                15%
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="bg-white shadow px-2 py-0.5 text-[10px] sm:text-xs rounded-full">
                45%
              </div>
            </div>
          </div>
        </div>

      {/* Legend */}
      <div className="justify-center mt-6 text-xs sm:text-sm gap-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
          <span className="w-4 h-3 sm:w-5 sm:h-4 rounded bg-[#8b5cf6]" />
          <span>Platinum Investment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-3 sm:w-5 sm:h-4 rounded bg-[#064e3b]" />
          <span>Diamond Investment</span>
        </div>
        </div>
        <div className="flex items-center gap-2 py-4">
          <span className="w-4 h-3 sm:w-5 sm:h-4 rounded bg-[#ca8a04]" />
          <span>Gold Investment</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentChart;
