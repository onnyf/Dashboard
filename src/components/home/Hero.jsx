import React from "react";
import { FaArrowUp } from "react-icons/fa";
import RevenueChart from "../revenue/RevenueChart";
import InvestmentChart from "../revenue/InvestmentChart";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Hero = () => {
  const statTitles = ["Total Investment", "Total Property Sold", "All Users", "All Orders"];
  const statValues = ["₦6.05B", "₦100.05M", "100", "200"];

  return (
    <div className="w-full pl-[268px] pr-4 py-6 space-y-6 bg-[#EEF2F1] min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Welcome Admin</h1>
          <p className="text-sm text-gray-500">Here's a quick update for you</p>
        </div>
        <div className="text-sm text-gray-600 rounded-full px-6 py-2 bg-white shadow">
          January 2025 - February 2025
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statTitles.map((title, index) => (
          <Card key={index}>
            <CardContent>
              <p className="text-xs text-gray-500">{title}</p>
              <div className="flex items-center justify-between mt-1">
                <h2 className="text-lg font-semibold text-gray-800">{statValues[index]}</h2>
                <span className="text-xs text-green-600 flex items-center gap-1">
                  <FaArrowUp size={10} /> +10
                </span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">from 0% (last 4 weeks)</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-3">
          <CardContent>
            <div className="flex items-center justify-between flex-wrap mb-4">
              <h3 className="text-lg font-semibold text-gray-600  rounded-full px-6 py-1 bg-gray-50">Revenue Flow</h3>
              <span className="text-sm text-gray-600 rounded-full px-6 py-1 bg-gray-50">
                January 2025 - February 2025
              </span>
            </div>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Investment Breakdown</h3>
            <InvestmentChart />
          </CardContent>
        </Card>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Signups Table */}
        <Card className="overflow-x-auto">
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <select className="text-sm rounded-3xl p-1 font-light">
                <option>Latest Sign ups</option>
              </select>
            </div>
            <table className="min-w-full mt-2 text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email address</th>
                  <th>Date Reg.</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className=" text-gray-700">
                    <td className="py-8">0{i}</td>
                    <td>Kingsley Alhaji</td>
                    <td>Kingsley@gmail.com</td>
                    <td>08/01/25</td>
                    <td>
                      <span className={`text-xs px-2 py-1 rounded-full ${i % 2 === 0 ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                        {i % 2 === 0 ? "Pending" : "Verified"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Top Investments */}
        <Card className="overflow-y-auto">
          <CardContent>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Top Performing Investments</h3>
            <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-2 text-sm text-gray-600 mb-2">
              <span>Name</span>
              <span>Unit Sold</span>
            </div>
            <ul className="space-y-2">
              {[1200, 800, 640].map((unit, index) => (
                <li key={index} className="flex justify-between items-center px-4 py-2 bg-white rounded shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src="/Rectangle 36.png" alt="land" className="w-8 h-8 rounded object-cover" />
                    <span className="text-sm font-medium text-gray-700">Cocoa Land</span>
                  </div>
                  <span className="font-semibold text-sm text-gray-800">{unit.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
