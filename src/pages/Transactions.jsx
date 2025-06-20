import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { TbArrowDownFromArc } from "react-icons/tb";

// Stat filters
const stats = [
  { title: "All Orders", count: 1043, filter: "all" },
  { title: "Completed Orders", count: 1000, filter: "Successful" },
  { title: "Failed Orders", count: 43, filter: "Failed" },
];

// Sample orders
const orders = Array.from({ length: 5 }, (_, i) => ({
  id: `090388982`,
  investor: "Kingsley Alhaji",
  amount: "500,000.00",
  date: "08-01-2023",
  status: i === 2 ? "Failed" : "Successful",
  descriptions: [
    "Coco land - Platinum X2",
    "Coco land - Gold X2",
    "Coco land - Gold X2",
  ],
}));

const Transactions = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter orders by activeFilter
  const filteredOrders =
    activeFilter === "all"
      ? orders
      : orders.filter((order) => order.status === activeFilter);

  return (
    <div className="bg-[#EEF2F1] min-h-screen pt-[30px] px-4 md:pl-[268px] md:pr-6 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
        <p className="font-medium text-lg">Orders</p>
        <button className="flex gap-2 items-center text-[#00644C] px-3 py-2 bg-white rounded-full shadow-sm">
          <TbArrowDownFromArc className="text-lg" />
          Export
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => {
          const isActive = activeFilter === stat.filter;
          return (
            <div
              key={i}
              onClick={() => setActiveFilter(stat.filter)}
              className={`p-4 rounded-lg shadow-sm cursor-pointer transition ${
                isActive
                  ? "bg-green-900 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              <p className="text-sm">{stat.title}</p>
              <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl font-bold">{stat.count}</h2>
                <span className="flex items-center gap-1 bg-[#EBFFEB] text-[#008000] text-[10px] px-2 py-0.5 rounded-full">
                  <FaArrowUp size={8} /> +10
                </span>
              </div>
              <p className="text-[10px] opacity-80 mt-1">
                From 0% (last 4 weeks)
              </p>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl p-5 shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr className="text-xs font-medium">
              <th className="py-2">S/N</th>
              <th className="py-2">Order ID</th>
              <th className="py-2">Description</th>
              <th className="py-2">Investor’s name</th>
              <th className="py-2">Amount (₦)</th>
              <th className="py-2">Date</th>
              <th className="py-2 flex justify-end items-center gap-1">
                Status <FiFilter />
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredOrders.map((order, index) =>
              order.descriptions.map((desc, i) => (
                <tr key={`${index}-${i}`} className="border-b border-gray-100 hover:bg-gray-50">
                  {i === 0 && (
                    <>
                      <td rowSpan={order.descriptions.length} className="py-4 align-top">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td rowSpan={order.descriptions.length} className="align-top">
                        {order.id}
                      </td>
                    </>
                  )}
                  <td className="py-2">{desc}</td>
                  {i === 0 && (
                    <>
                      <td rowSpan={order.descriptions.length} className="align-top">
                        {order.investor}
                      </td>
                      <td rowSpan={order.descriptions.length} className="align-top">
                        {order.amount}
                      </td>
                      <td rowSpan={order.descriptions.length} className="align-top">
                        {order.date}
                      </td>
                      <td rowSpan={order.descriptions.length} className="text-right align-top">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            order.status === "Successful"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-6 text-gray-600 gap-3">
          <span>10 Entries ▼</span>
          <div className="flex items-center gap-2">
            <span>Showing 1 to 10 of {filteredOrders.length} entries.</span>
            <div className="flex items-center gap-1 ml-4">
              <button className="px-2 py-1 rounded hover:bg-gray-100">←</button>
              {[1, 2, 3, "...", 5].map((n, idx) => (
                <button
                  key={idx}
                  className={`px-2 py-1 rounded ${
                    n === 2 ? "bg-green-800 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="px-2 py-1 rounded hover:bg-gray-100">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
