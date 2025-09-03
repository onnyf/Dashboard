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
    <div className="w-full">
      {/* Chart Box */}
      <div className="rounded-xl p-4 w-full">
        <div className="w-full h-60 sm:h-72 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
              <YAxis
                domain={[0, 10]}
                ticks={[0, 2, 4, 6, 8, 10]}
                tick={{ fontSize: 12 }}
              />
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
    </div>
  );
};

export default RevenueChart;
