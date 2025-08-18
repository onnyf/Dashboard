import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", investment: 7, expenses: 3 },
  { name: "Feb", investment: 4, expenses: 10 },
  { name: "Mar", investment: 7, expenses: 8 },
  { name: "Apr", investment: 2, expenses: 8 },
  { name: "May", investment: 3, expenses: 7 },
  { name: "June", investment: 7, expenses: 3 },
];

const RevenueChart = () => {
  return (
    <div className="w-full max-w-2xl">
      {/* Chart Box */}
      <div className=" rounded-xl p-4 w-full">
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} />
              <Tooltip />
              <Bar
                dataKey="investment"
                name="Investment"
                fill="url(#gradientBlue)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="expenses"
                name="Expenses (Disbursement)"
                fill="url(#gradientGray)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#d8d4fc" />
                </linearGradient>
                <linearGradient id="gradientGray" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#555" />
                  <stop offset="100%" stopColor="#bbb" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Custom Legend outside */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-gradient-to-b from-[#a78bfa] to-[#d8d4fc]" />
          <span>Investment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-gradient-to-b from-[#555] to-[#bbb]" />
          <span>Expenses (Disbursement)</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
