import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import {
  RiArrowDownSFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { IoFilter } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import UserDetailsModal from "../components/modals/UserDetailsModal";

const stats = [
  {
    title: "All Investment",
    value: 1043,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "all",
  },
  {
    title: "Platinum Investment",
    value: 1000,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "ongoing",
  },
  {
    title: "Diamond Investment",
    value: 43,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "completed",
  },
  {
    title: "Gold Investment",
    value: 43,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "completed",
  },
];

const investments = [
  {
    id: "01",
    name: "Cocoa Land",
    image: "/Frame 1618873004.png",
    type: "Land",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Completed",
  },
  {
    id: "02",
    name: "Cocoa Land",
    image: "/Rectangle 5.svg",
    type: "Apartment",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Ongoing",
  },
  {
    id: "03",
    name: "Cocoa Land",
    image: "/Rectangle 3.svg",
    type: "Bungalow",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Completed",
  },
  {
    id: "04",
    name: "Cocoa Land",
    image: "/Rectangle 5.svg",
    type: "Apartment",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Completed",
  },
  {
    id: "05",
    name: "Cocoa Land",
    image: "/Rectangle 5.svg",
    type: "Apartment",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Completed",
  },
  {
    id: "06",
    name: "Cocoa Land",
    image: "/Rectangle 5.svg",
    type: "Flat",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Completed",
  },
];

const ActionDropdown = ({ onAction }) => (
  <div className="absolute top-10 right-0 z-20 w-52 bg-white shadow-lg rounded-xl border border-gray-200">
    <ul className="text-sm text-gray-700 py-2">
      <li
        onClick={() => onAction("view")}
        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-[#00644C]"
      >
        View Details
      </li>
      <li
        onClick={() => onAction("edit")}
        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-[#00644C]"
      >
        Edit Details
      </li>
      <li
        onClick={() => onAction("status")}
        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-[#00644C]"
      >
        Edit Status
      </li>
      <li
        onClick={() => onAction("unpublish")}
        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-red-600"
      >
        Un-publish Investment
      </li>
    </ul>
  </div>
);

const Investment = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dropdownRef = useRef(null);
  const totalPages = 5;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredInvestments =
    filter === "all"
      ? investments
      : investments.filter((inv) => inv.status.toLowerCase() === filter);

  const handleAction = (action, investment) => {
    switch (action) {
      case "view":
        setSelectedUser({
          name: investment.name,
          email: `${investment.name
            .replace(/\s/g, "")
            .toLowerCase()}@gmail.com`,
          phone: "+2348099999999",
          date: investment.date,
          status: investment.status === "Completed" ? "Verified" : "Pending",
        });
        setShowUserModal(true);
        break;
      case "edit":
        navigate(`/dashboard/edit-investment/${investment.id}`);
        break;
      case "status":
        alert(`Edit status of "${investment.name}"`);
        break;
      case "unpublish":
        if (window.confirm(`Un-publish "${investment.name}"?`)) {
          alert(`"${investment.name}" has been unpublished.`);
        }
        break;
      default:
        break;
    }
  };

  const renderPageNumbers = () => {
    const pages = [1, 2, 3, "...", totalPages];
    return (
      <div className="flex items-center gap-2">
        {pages.map((page, i) => (
          <span
            key={i}
            onClick={() =>
              typeof page === "number" && setCurrentPage(page)
            }
            className={`text-sm ${
              currentPage === page
                ? "text-[#00644C] font-semibold border border-[#00644C] rounded px-2 py-1"
                : "text-gray-600"
            } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
          >
            {page}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full xl:pl-[240px] px-4 sm:px-6 lg:px-8 py-6 space-y-6 bg-[#EEF2F1] min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 bg-[#EEF2F1] p-4 rounded-lg ">
        <h2 className="text-lg md:text-xl font-semibold text-[#4A4A4A]">
          Investment
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => alert("Export triggered")}
            className="flex items-center gap-2 text-[#00644C] border border-[#00644C] text-sm px-4 py-2 rounded-xl hover:bg-[#F5FFFA]"
          >
            <LuDownload size={16} /> Export
          </button>
          <button
            onClick={() => navigate("/dashboard/add-investment")}
            className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-xl bg-[#00644C] hover:bg-[#004d3a]"
          >
            <GoPlus /> Investment
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const isActive = filter === stat.filter;
          return (
            <div
              key={i}
              onClick={() => setFilter(stat.filter)}
              className={`cursor-pointer p-4 rounded-xl transition shadow-sm hover:shadow-md ${
                isActive ? "bg-[#003F30] text-white" : "bg-white"
              }`}
            >
              <p className="text-xs md:text-sm font-medium mb-1">
                {stat.title}
              </p>
              <div className="text-xl md:text-2xl font-bold flex items-center justify-between">
                {stat.value}
                <span
                  className={`text-xs font-semibold px-2 py-[2px] rounded-full flex items-center gap-1 ${
                    isActive
                      ? "bg-green-200 text-green-800"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  <FaArrowUp className="text-xs" />
                  {stat.change}
                </span>
              </div>
              <p
                className={`text-[10px] md:text-xs mt-1 ${
                  isActive ? "text-white/70" : "text-gray-400"
                }`}
              >
                {stat.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* Investment Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-xs md:text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr className="text-left">
              <th className="p-4">S/N</th>
              <th className="p-4">Name</th>
              <th className="p-4 flex items-center">
                Type <IoFilter className="ml-1" />
              </th>
              <th className="p-4">No. of Investors</th>
              <th className="p-4">Total Valuation</th>
              <th className="p-4">Date Mod.</th>
              <th className="p-4 flex items-center">
                Status <IoFilter className="ml-1" />
              </th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvestments.map((inv, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50  last:border-0"
              >
                <td className="p-4">{inv.id}</td>
                <td className="p-4 flex items-center gap-2">
                  <Link to={`/dashboard/investment/${inv.id}`}>
                    <img
                      src={inv.image}
                      alt={inv.name}
                      className="w-10 h-10 rounded object-cover cursor-pointer"
                    />
                  </Link>
                  {inv.name}
                </td>
                <td className="p-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {inv.type}
                  </span>
                </td>
                <td className="p-4">{inv.investors}</td>
                <td className="p-4 font-medium">{inv.valuation}</td>
                <td className="p-4">{inv.date}</td>
                <td className="p-4">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      inv.status === "Ongoing"
                        ? "bg-[#FFF9DB] text-yellow-600"
                        : "bg-[#ECFFEC] text-green-600"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="p-4 relative">
                  <FiMoreVertical
                    className="text-gray-600 cursor-pointer"
                    onClick={() =>
                      setDropdownIndex(dropdownIndex === index ? null : index)
                    }
                  />
                  {dropdownIndex === index && (
                    <ActionDropdown
                      onAction={(action) => handleAction(action, inv)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs md:text-sm gap-3">
        <div className="flex items-center gap-1 text-[#272833]">
          <span className="font-semibold">10 Entries</span>
          <RiArrowDownSFill className="w-4 h-4 md:w-6 md:h-6" />
        </div>
        <div className="flex items-center gap-4 text-[#6B6C7E] mr-70">
          <span className="mr-40">Showing 1 to 10 of 95 entries</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-1 rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <RiArrowLeftSLine size={18} />
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-1 rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <RiArrowRightSLine size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showUserModal && selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setShowUserModal(false)}
        />
      )}
    </div>
  );
};

export default Investment;
