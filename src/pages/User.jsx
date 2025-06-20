import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { TbArrowDownFromArc } from "react-icons/tb";

const stats = [
  { title: "All Users", value: 1043, filter: "all" },
  { title: "Verified Users", value: 1000, filter: "verified" },
  { title: "Unverified Users", value: 43, filter: "pending" },
];

const allUsers = Array.from({ length: 8 }, (_, i) => ({
  id: `0${i + 1}`,
  name: "Kingsley Alhaji",
  email: "Kingsley@gmail.com",
  phone: "090378374884",
  date: "08-01-2023",
  status: i % 2 === 0 ? "Verified" : "Pending",
}));

const User = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredUsers =
    activeFilter === "all"
      ? allUsers
      : allUsers.filter((user) =>
          activeFilter === "verified"
            ? user.status === "Verified"
            : user.status !== "Verified"
        );

  const handleActionClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#EEF2F1] pt-[30px] px-4 md:pl-[268px] md:pr-6 pb-6 space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
        <p className="font-medium">All users</p>
        <button className="flex gap-2 items-center text-[#00644C] px-3 py-2 bg-white rounded-full shadow-sm">
          <TbArrowDownFromArc className="text-lg" />
          Export
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg shadow-sm cursor-pointer transition ${
              activeFilter === stat.filter
                ? "bg-green-900 text-white"
                : "bg-white text-gray-900"
            }`}
            onClick={() => setActiveFilter(stat.filter)}
          >
            <p className="text-xs font-medium">{stat.title}</p>
            <div className="flex items-center justify-between mt-2">
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <span className="flex items-center gap-1 bg-[#EBFFEB] text-[#008000] text-[10px] px-2 py-0.5 rounded-full">
                <FaArrowUp size={8} /> +10
              </span>
            </div>
            <p className="text-[10px] opacity-80 mt-1">
              From 0% (last 4 weeks)
            </p>
          </div>
        ))}
      </div>

      {/* Collapsible Filter on Small Screens */}
      <div className="md:hidden flex justify-between items-center mt-4">
        <p className="font-medium">Filter Users</p>
        <button
          className="text-sm text-blue-600"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide" : "Show"}
        </button>
      </div>
      {showFilters && (
        <div className="bg-white rounded-md shadow p-4 mb-4 space-y-2 md:hidden">
          {stats.map((stat, i) => (
            <button
              key={i}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeFilter === stat.filter
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => {
                setActiveFilter(stat.filter);
                setShowFilters(false);
              }}
            >
              {stat.title}
            </button>
          ))}
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-xl p-5 shadow-sm overflow-x-auto">
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
            {filteredUsers.map((user, index) => (
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
                  <FiMoreVertical
                    className="text-gray-600 cursor-pointer"
                    onClick={() => handleActionClick(user)}
                  />
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

      {/* Action Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] sm:w-[400px] p-5 shadow-lg">
            <h3 className="text-lg font-semibold mb-3">User Actions</h3>
            <p className="text-sm mb-2">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="text-sm mb-4">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <div className="space-y-2">
              <button className="w-full py-2 bg-green-700 text-white rounded-lg">
                View Details
              </button>
              <button className="w-full py-2 bg-red-600 text-white rounded-lg">
                Disable Account
              </button>
              <button
                className="w-full py-2 text-gray-700 border rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
