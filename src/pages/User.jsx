import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const stats = [
  {
    title: "All Users",
    value: 1043,
    color: "bg-green-900",
    text: "text-white",
  },
  {
    title: "Verified Users",
    value: 1000,
    color: "bg-white",
    text: "text-gray-900",
  },
  {
    title: "Unverified Users",
    value: 43,
    color: "bg-white",
    text: "text-gray-900",
  },
];

const users = Array.from({ length: 8 }, (_, i) => ({
  id: `0${i + 1}`,
  name: "Kingsley Alhaji",
  email: "Kingsley@gmail.com",
  phone: "090378374884",
  date: "08-01-2023",
  status: i % 2 === 0 ? "Verified" : "Pending",
}));

const User = () => {
  return (
    <div className="min-h-screen bg-[#EEF2F1] p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-[22px] font-semibold text-gray-900">All users</h1>
        <p className="text-xs text-gray-500">Run 0% (last 4 weeks)</p>
      </div>

      {/* Stat Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col justify-between w-full sm:w-[200px] min-h-[100px] p-4 rounded-lg shadow-sm ${stat.color}`}
          >
            <p className={`text-xs font-medium ${stat.text}`}>{stat.title}</p>
            <div className="flex items-center justify-between mt-1">
              <h2 className={`text-2xl font-bold ${stat.text}`}>
                {stat.value}
              </h2>
              <span className="flex items-center gap-1 bg-white/20 text-green-200 text-[10px] px-2 py-0.5 rounded-full">
                <FaArrowUp size={8} />
                +10
              </span>
            </div>
            <p className={`text-[10px] opacity-80 mt-1 ${stat.text}`}>
              From 0% (last 4 weeks)
            </p>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl p-5 shadow-sm overflow-x-auto">
        {/* Export Button */}
        <div className="flex justify-end mb-4">
          <button className="text-sm bg-[#E4F1EE] text-green-900 px-4 py-1 rounded-md font-medium">
            ⬇ Export
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr className="text-xs font-medium">
              <th className="py-2">S/N</th>
              <th className="py-2">Name ⬍</th>
              <th className="py-2">Email address</th>
              <th className="py-2">Phone number</th>
              <th className="py-2">Date Reg. ⬍</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
                <td>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      user.status === "Verified"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="text-right">
                  <FiMoreVertical className="text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-6 text-gray-600 gap-3">
          <span>10 Entries ▼</span>
          <div className="flex items-center gap-2">
            <span>Showing 1 to 10 of 95 entries.</span>
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

export default User;
