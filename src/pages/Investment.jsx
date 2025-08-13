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
    image: "/Frame 1618873004.png", // Make sure this image exists in public folder
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
    id: "02",
    name: "Cocoa Land",
    image: "/Rectangle 5.svg",
    type: "Apartment",
    investors: 100,
    valuation: "₦8,000,000,000",
    date: "08-01-2023",
    status: "Ongoing",
  },
];

const ActionDropdown = ({ onAction }) => (
  <div className="absolute top-10 right-0 z-10 w-48 bg-white shadow-lg rounded-lg border border-gray-100">
    <ul className="text-sm text-gray-800 py-2">
      <li onClick={() => onAction("view")} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-[#00644C]">
        View Details
      </li>
      <li onClick={() => onAction("edit")} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-[#00644C]">
        Edit Details
      </li>
      <li onClick={() => onAction("status")} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-[#00644C]">
        Edit Status
      </li>
      <li onClick={() => onAction("unpublish")} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-red-600">
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
          email: `${investment.name.replace(/\s/g, "").toLowerCase()}@gmail.com`,
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
        const confirmed = window.confirm(`Un-publish "${investment.name}"?`);
        if (confirmed) {
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
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            className={`text-sm ${
              currentPage === page ? "text-[#00644C] font-semibold" : "text-gray-700"
            } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
          >
            {page}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[1130px] min-h-[943px] p-12 bg-[#EEF2F1] flex flex-col gap-6 relative left-[258px]" ref={dropdownRef}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#4A4A4A]">Investment</h2>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/dashboard/add-investment")}
            className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-2xl bg-[#00644C]"
          >
            <GoPlus /> Investment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const isActive = filter === stat.filter;
          return (
            <div
              key={i}
              onClick={() => setFilter(stat.filter)}
              className={`cursor-pointer p-5 rounded-2xl transition shadow-sm hover:shadow-md ${
                isActive ? "bg-[#003F30] text-white" : "bg-white text-black"
              }`}
            >
              <div className="text-sm font-medium mb-1">{stat.title}</div>
              <div className="text-3xl font-bold flex items-center justify-between">
                {stat.value}
                <span
                  className={`text-xs font-semibold px-2 py-[2px] rounded-full flex items-center gap-1 ${
                    isActive ? "bg-green-200 text-green-800" : "bg-green-100 text-green-700"
                  }`}
                >
                  <FaArrowUp className="text-xs" />
                  {stat.change}
                </span>
              </div>
              <div className={`text-xs mt-1 ${isActive ? "text-white/70" : "text-gray-400"}`}>
                {stat.subtext}
              </div>
            </div>
          );
        })}
      </div>

      {/* Investment Table */}
      <div className="bg-white rounded-xl overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-500">
            <tr>
              <th className="p-4 text-left">S/N</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left flex items-center">Type <IoFilter className="ml-1" /></th>
              <th className="p-4 text-left">No. of Investors</th>
              <th className="p-4 text-left">Total Valuation</th>
              <th className="p-4 text-left">Date Mod.</th>
              <th className="p-4 text-left flex items-center">Status <IoFilter className="ml-1" /></th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvestments.map((inv, index) => (
              <tr key={index} className="hover:bg-gray-50 relative">
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
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{inv.type}</span>
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
                    onClick={() => setDropdownIndex(dropdownIndex === index ? null : index)}
                  />
                  {dropdownIndex === index && (
                    <ActionDropdown onAction={(action) => handleAction(action, inv)} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span>10 Entries</span>
          <RiArrowDownSFill className="w-6 h-6 gap-2" />
        </div>
        <div className="flex items-center gap-12 ml-12">
          <span>Showing 1 to 10 of 95 entries</span>
          <div className="flex gap-40">
            <div className="flex items-center gap-2 ml-32">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-1 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
              >
                <RiArrowLeftSLine size={20} />
              </button>
              {renderPageNumbers()}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-1 ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
              >
                <RiArrowRightSLine size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showUserModal && selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setShowUserModal(false)} />
      )}
    </div>
  );
};

export default Investment;
