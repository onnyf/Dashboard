import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import RevenueChart from "../revenue/RevenueChart";
import InvestmentChart from "../revenue/InvestmentChart";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Hero = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(
    "January 2025-February 2025"
  );

  const statData = [
    { title: "Total Investment", value: "₦6.05B" },
    { title: "Total Property Sold", value: "₦100.05M" },
    { title: "All Users", value: "100" },
    { title: "All Orders", value: "200" },
  ];

  return (
    <div className="w-full xl:pl-[260px] px-4 py-6 space-y-6 bg-[#EEF2F1] min-h-screen">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-4">
        <div>
          <h1 className="text-[18px] font-semibold text-[#4A4A4A] mt-2">
            Welcome Admin
          </h1>
          <p className="text-[14px] font-normal text-[#4A4A4A]">
            Here's a quick update for you
          </p>
        </div>
        {/* Date Picker */}
        <div className="relative w-full sm:w-[263px] h-[36px] flex items-center gap-2 text-sm text-[#333333] bg-white border border-gray-200 rounded-full px-4 py-2">
          <img src="/calendar.svg" alt="calendar" className="w-4 h-4" />
          <select
            value={selectedDateRange}
            onChange={(e) => setSelectedDateRange(e.target.value)}
            className="bg-transparent focus:outline-none pr-2 appearance-none w-full"
          >
            <option>January 2025-February 2025</option>
            <option>March 2025-April 2025</option>
            <option>May 2025-June 2025</option>
            <option>July 2025-August 2025</option>
            <option>September 2025-October 2025</option>
            <option>November 2025-December 2025</option>
          </select>
          <div className="absolute right-2 pointer-events-none">
            <MdOutlineKeyboardArrowDown className="text-lg text-[#606060]" />
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {statData.map((item, i) => (
          <Card key={i}>
            <CardContent>
              <p className="text-xs text-[#4A4A4A]">{item.title}</p>
              <div className="flex justify-between items-center mt-3">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4A4A4A]">
                  {item.value}
                </h2>
                <span className="w-[50px] h-[24px] text-xs text-[#008000] rounded-full bg-[#EBFFEB] flex items-center gap-1 justify-center">
                  <FaArrowUp size={10} /> +10
                </span>
              </div>
              <p className="text-[11px] text-[#9CA3AF] mt-4">
                from 0% (last 4 weeks)
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 w-full">
        {/* Revenue Chart */}
        <Card className="xl:col-span-3 h-[445px] w-full">
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
              <div className="flex text-[14px] text-[#9CA3AF] rounded-full px-6 py-1 bg-gray-50 w-fit gap-2">
                <h3>Revenue Flow</h3>
                <MdOutlineKeyboardArrowDown className="text-lg text-[#606060] ml-2" />
              </div>
              <div className="relative w-full sm:w-[263px] h-[32px] flex items-center gap-2 text-sm text-[#333333] bg-gray-50 border border-gray-200 rounded-full px-4 py-1">
                <img src="/calendar.svg" alt="calendar" className="w-4 h-4" />
                <select
                  value={selectedDateRange}
                  onChange={(e) => setSelectedDateRange(e.target.value)}
                  className="bg-transparent focus:outline-none pr-4 appearance-none w-full"
                >
                  <option>January 2025-February 2025</option>
                  <option>March 2025-April 2025</option>
                  <option>May 2025-June 2025</option>
                  <option>July 2025-August 2025</option>
                  <option>September 2025-October 2025</option>
                  <option>November 2025-December 2025</option>
                </select>
                <div className="absolute right-4 pointer-events-none">
                  <MdOutlineKeyboardArrowDown className="text-lg text-[#606060]" />
                </div>
              </div>
            </div>
            <RevenueChart />

            {/* Legend at Bottom */}
            <div className="flex flex-col sm:flex-row justify-center sm:gap-6 gap-3 mb-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-b from-[#a78bfa] to-[#d8d4fc]" />
                <span>Investment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-b from-[#555] to-[#bbb]" />
                <span>Expenses (Disbursement)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Chart */}
        <Card className="xl:col-span-2 h-[445px] w-full">
          <CardContent>
            <h3 className="text-lg font-medium mb-4 text-[#000000]">
              All Investments
            </h3>
            <InvestmentChart />
          </CardContent>
        </Card>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full">
        {/* Sign Ups Table */}
        <Card className="xl:col-span-2 w-full overflow-x-auto">
          <CardContent>
            <div className="flex justify-between items-center mb-3">
              <select className="text-sm rounded-full px-4 py-2 bg-gray-100 focus:outline-none shadow-sm cursor-pointer">
                <option>Latest Sign ups</option>
                <option>Top Investors</option>
                <option>Recent Properties</option>
              </select>
            </div>

            <div className="w-full rounded-xl border border-gray-100 bg-white overflow-x-auto">
              <table className="w-full text-sm table-auto min-w-[549px]">
                <thead className="bg-gray-50 text-left text-gray-500">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">S/N</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email Address</th>
                    <th className="px-4 py-3">Date Reg.</th>
                    <th className="px-4 py-3 rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[#4A4A4A]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-4">0{i}</td>
                      <td className="px-4 py-4 font-medium">Kingsley Alhaji</td>
                      <td className="px-4 py-4 break-words">
                        Kingsley@gmail.com
                      </td>
                      <td className="px-4 py-4">08/01/25</td>
                      <td className="px-4 py-4">
                        {i % 2 === 0 ? (
                          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium bg-yellow-100 text-[#DE940B]">
                            <img
                              src="/clock.svg"
                              alt="pending"
                              className="w-3 h-3"
                            />
                            Pending
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-[#008000]">
                            <img
                              src="/verify.png"
                              alt="verified"
                              className="w-3 h-3"
                            />
                            Verified
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top Investments */}
        <Card className="w-full">
          <CardContent>
            <h3 className="text-[16px] font-medium mb-3 text-[#000000]">
              Top Performing Investments
            </h3>
            <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-2 text-sm text-gray-600 mb-2">
              <span>Name</span>
              <span>Unit Sold</span>
            </div>
            <ul className="space-y-2">
              {[1200, 800, 640].map((unit, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-2 bg-white rounded shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/Rectangle 36.png"
                      alt="land"
                      className="w-8 h-8 rounded object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Cocoa Land
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-gray-800">
                    {unit.toLocaleString()}
                  </span>
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
