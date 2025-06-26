import React, { useState, useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { TbArrowDownFromArc } from "react-icons/tb";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import UserDetailsModal from "../components/modals/UserDetailsModal";

const stats = [
  { title: "All Users", value: 1043, filter: "all" },
  { title: "Verified Users", value: 1000, filter: "verified" },
  { title: "Unverified Users", value: 43, filter: "pending" },
];

const allUsers = Array.from({ length: 95 }, (_, i) => ({
  id: `${i + 1}`.padStart(2, "0"),
  name: "Kingsley Alhaji",
  email: "Kingsley@gmail.com",
  phone: "090378374884",
  date: "08-01-2023",
  status: i % 2 === 0 ? "Verified" : "Pending",
}));

const User = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionMenu, setActionMenu] = useState({
    open: false,
    userId: null,
    position: { top: 0, left: 0 },
  });
  const actionMenuRef = useRef(null);
  const itemsPerPage = 10;

  const filteredUsers =
    activeFilter === "all"
      ? allUsers
      : allUsers.filter((user) =>
          activeFilter === "verified"
            ? user.status === "Verified"
            : user.status !== "Verified"
        );

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const buildPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleActionClick = (e, userId) => {
    const rect = e.target.getBoundingClientRect();
    setActionMenu({
      open: true,
      userId,
      position: {
        top: rect.bottom + window.scrollY - 5,
        left: rect.left + window.scrollX - 150,
      },
    });
  };

  const closeActionMenu = () => {
    setActionMenu({ open: false, userId: null, position: { top: 0, left: 0 } });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(e.target)) {
        closeActionMenu();
      }
    };

    if (actionMenu.open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionMenu.open]);

  return (
    <div className="min-h-screen bg-[#EEF2F1] pt-[30px] px-4 md:pl-[268px] md:pr-6 pb-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
        <p className="font-medium">All users</p>
        <button className="flex gap-2 items-center text-[#00644C] px-3 py-2 bg-white rounded-full shadow-sm">
          <TbArrowDownFromArc className="text-lg" />
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => {
          const isActive = activeFilter === stat.filter;
          return (
            <div
              key={i}
              className={`p-4 rounded-lg shadow-sm cursor-pointer transition ${
                isActive ? "bg-green-900 text-white" : "bg-white text-gray-900"
              }`}
              onClick={() => setActiveFilter(stat.filter)}
            >
              <p className="text-xs font-medium">{stat.title}</p>
              <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <span
                  className={`flex items-center gap-1 text-xs font-medium rounded-full border px-2 py-0.5 ${
                    isActive
                      ? "bg-white text-green-700 border-green-700"
                      : "bg-[#EBFFEB] text-[#008000] border-transparent"
                  }`}
                >
                  <FaArrowUp className="text-[10px]" /> +10
                </span>
              </div>
              <p
                className={`text-[10px] mt-1 ${
                  isActive ? "text-white/80" : "text-gray-500"
                }`}
              >
                From 0% (last 4 weeks)
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl px-4 shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600">
            <tr className="text-xs font-medium bg-[#FAFBFB]">
              <th className="py-2">S/N</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email address</th>
              <th className="py-2">Phone number</th>
              <th className="py-2">Date Reg.</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {paginatedUsers.map((user, index) => (
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
                    {user.status === "Verified" ? "Verified" : "Pending"}
                  </span>
                </td>
                <td className="text-right">
                  <button
                    onClick={(e) => handleActionClick(e, user.id)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row text-sm mt-6 text-gray-600 gap-3">
        <span>{itemsPerPage} Entries ▼</span>
        <div className="flex items-center ml-4">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(
              currentPage * itemsPerPage,
              totalItems
            )} of {totalItems} entries.
          </span>
          <div className="flex items-center gap-1 ml-40">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-2 py-1 rounded hover:bg-gray-100 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RiArrowLeftSLine size={16} />
            </button>
            {buildPages().map((n, idx) =>
              n === "..." ? (
                <span key={idx} className="px-2">...</span>
              ) : (
                <button
                  key={idx}
                  onClick={() => goToPage(n)}
                  className={`px-2 py-1 rounded ${
                    currentPage === n
                      ? "bg-green-800 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              )
            )}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-2 py-1 rounded hover:bg-gray-100 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <RiArrowRightSLine size={16} />
            </button>
          </div>
        </div>
      </div>

      {actionMenu.open && (
        <div
          ref={actionMenuRef}
          className="fixed z-50 bg-white rounded-md shadow-lg border border-gray-200 w-48"
          style={{
            top: `${actionMenu.position.top}px`,
            left: `${actionMenu.position.left}px`,
          }}
        >
          <div className="p-2 space-y-1">
            <button
              className="w-full text-left px-4 py-2 text-sm text-[#00644C] hover:bg-gray-100 rounded"
              onClick={() => {
                const user = allUsers.find((u) => u.id === actionMenu.userId);
                setSelectedUser(user);
                closeActionMenu();
              }}
            >
              View Details
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-[#B30000] hover:bg-gray-100 rounded">
              Disable account
            </button>
          </div>
        </div>
      )}

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default User;
