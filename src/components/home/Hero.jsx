import React from "react";
import { FaArrowUp, FaUsers, FaBoxOpen, FaHome } from "react-icons/fa";
import RevenueChart from "../revenue/RevenueChart";
import InvestmentChart from "../revenue/InvestmentChart";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl border bg-white p-4 shadow ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

const Progress = ({ value, max = 100 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid p-4 space-y-4 lg:ml-[282px] bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl font-semibold">Welcome Admin</h1>
          <p className="text-sm text-gray-500">Here's a quick update for you</p>
        </div>
        <div className="text-sm text-gray-500">
          January 2025 - February 2025
        </div>
      </div>

      {/* Stats Cards */}

      <div className="w-[1060px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Total Investment</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">₦6.05B</h2>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <FaArrowUp className="ml-16" /> +10
              </span>
            </div>
            <p className="text-xs text-gray-500">from 0% (last 4 weeks)</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Total Property Sold</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">₦100.05M</h2>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <FaArrowUp className="ml-10" /> +10
              </span>
            </div>
            <p className="text-xs text-gray-500">from 0% (last 4 weeks)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">All User</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">100</h2>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <FaArrowUp className="ml-16" /> +10
              </span>
            </div>
            <p className="text-xs text-gray-500">from 0% (last 4 weeks)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">All Order</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">200</h2>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <FaArrowUp className="ml-16" /> +10
              </span>
            </div>
            <p className="text-xs text-gray-500">from 0% (last 4 weeks)</p>
          </CardContent>
        </Card>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Flow */}
        <Card className="lg:col-span-2">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Revenue Flow</h3>
              <span className="text-sm text-gray-500">
                January 2025 - February 2025
              </span>
            </div>
            <div className="w-full mt-2">
              <RevenueChart />
            </div>
          </CardContent>
        </Card>

        {/* All Investments */}
        <Card>
          <CardContent className="p-4">
            <InvestmentChart />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 overflow-x-auto">
            <div className="flex justify-between items-center">
              <select className="text-sm border rounded-3xl p-1 font-light">
                <option>Latest Sign ups</option>
              </select>
            </div>
            <table className="min-w-full mt-4 text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="">S/N</th>
                  <th>Name</th>
                  <th>Email address</th>
                  <th>Date Reg.</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="">
                    <td className="py-8 font-serif">0{i}</td>
                    <td>Kingsley Alhaji</td>
                    <td>Kingsley@gmail.com</td>
                    <td>08/01/25</td>
                    <td>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          i % 2 === 0
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {i % 2 === 0 ? "Pending" : "Verified"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="max-h-80 overflow-y-auto">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Top Performing Investments
            </h3>

            <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-2 text-sm font-medium text-gray-600 mb-3">
              <span>Name</span>
              <span>Unit Sold</span>
            </div>

            <ul className="space-y-3 text-sm">
              {[1200, 800, 640].map((unit, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-2 bg-white rounded shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/public/Rectangle 36.png"
                      alt="land"
                      className="w-8 h-8 rounded object-cover"
                    />
                    <span>Cocoa Land</span>
                  </div>
                  <span className="font-medium">{unit.toLocaleString()}</span>
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
