import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import {
  RiArrowDownSFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { GoPlus } from "react-icons/go";

const stats = [
  {
    title: "All Properties",
    value: 1043,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "all",
  },
  {
    title: "Available for Rent",
    value: 1000,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "available",
  },
  {
    title: "Rented Properties",
    value: 43,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "rented",
  },
  {
    title: "In Maintenance",
    value: 43,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "maintenance",
  },
];

const images = [
  { id: 1, src: "/Rectangle 36.png", status: "available", name: "Cocoa Land" },
  { id: 2, src: "/Rectangle 36.svg", status: "rented", name: "Beach Villa" },
  { id: 3, src: "/Rectangle 6.svg", status: "maintenance", name: "Sunset Apartment" },
  { id: 4, src: "/Rectangle 5.svg", status: "available", name: "Lakeside Home" },
  { id: 5, src: "/Rectangle 4.svg", status: "rented", name: "Hilltop Bungalow" },
  { id: 6, src: "/Rectangle 3.svg", status: "available", name: "Urban Flat" },
];

const Properties = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleExport = () => {
    console.log("Export triggered");
  };

  const handleStatClick = (filterType) => {
    setFilter(filterType);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [1, 2, 3, "...", totalPages];
    return (
      <div className="flex items-center gap-2">
        {pages.map((page, index) => (
          <span
            key={index}
            className={`text-sm ${currentPage === page
                ? "text-[#00644C] font-semibold"
                : "text-gray-700"
              } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
          >
            {page}
          </span>
        ))}
      </div>
    );
  };

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.status === filter);

  return (
    <div className="w-full xl:pl-[260px] px-4 py-16 lg:py-6 space-y-6 bg-[#EEF2F1] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-[#4A4A4A]">
          Properties
        </h2>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 text-[#00644C] text-sm px-4 py-2 rounded-2xl bg-white"
          >
            <img src="/export.svg" alt="Export" className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={() => navigate(`/dashboard/investment`)}
            className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-2xl bg-[#00644C]"
          >
            <GoPlus /> Investment
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const isActive = filter === stat.filter;
          const cardBg = isActive ? "bg-[#003F30]" : "bg-white";
          const cardText = isActive ? "text-white" : "text-black";
          const subTextColor = isActive ? "text-white/70" : "text-gray-400";

          return (
            <div
              key={index}
              onClick={() => handleStatClick(stat.filter)}
              className={`cursor-pointer w-full max-w-[370px] p-5 rounded-2xl shadow-sm border border-gray-200 transition duration-200 hover:shadow-md ${cardBg} ${cardText}`}
            >
              <div className="text-sm font-medium mb-1">{stat.title}</div>
              <div className="text-2xl sm:text-3xl font-bold flex items-center justify-between">
                {stat.value}
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-[2px] rounded-full flex items-center gap-1">
                  <FaArrowUp className="text-xs" />
                  {stat.change}
                </span>
              </div>
              <div className={`text-xs mt-1 ${subTextColor}`}>{stat.subtext}</div>
            </div>
          );
        })}
      </div>

      {/* Table Section */}
      {/* Table Section - Desktop & Tablet */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-x-auto mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
            <tr>
              <th className="p-4 text-left">S/N</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Price (₦)</th>
              <th className="p-4 text-left">Owner</th>
              <th className="p-4 text-left">Date Mod.</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredImages.map((img, index) => (
              <tr key={img.id} className="hover:bg-gray-50">
                <td className="p-4">0{index + 1}</td>
                <td
                  className="p-4 flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate(`/dashboard/properties/${img.id}`)}
                >
                  <img
                    src={img.src}
                    alt="property"
                    className="h-8 w-8 rounded object-cover"
                  />
                  {img.name}
                </td>
                <td className="p-4">
                  <span className="text-xs px-2 py-1 rounded-full text-[#606060] bg-[#FAFAFA]">
                    {index % 2 === 0
                      ? "Apartment"
                      : index % 3 === 0
                        ? "Flat"
                        : "Bungalow"}
                  </span>
                </td>
                <td className="p-4">₦8,000,000.00</td>
                <td className="p-4">{index < 4 ? "Moses Victor" : "---"}</td>
                <td className="p-4">08-01-2023</td>
                <td className="p-4">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${img.status === "available"
                        ? "bg-[#ECFFEC] text-[#008000]"
                        : img.status === "rented"
                          ? "bg-[#F8F8F8] text-[#4A4A4A]"
                          : "bg-[#FFF5E5] text-[#FF8C00]"
                      }`}
                  >
                    {img.status.charAt(0).toUpperCase() + img.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  <FiMoreVertical className="text-[#4A4A4A] cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4 bg-[#EEF2F1] mt-4">
        {filteredImages.map((img, index) => (
          <div
            key={img.id}
            className="p-4 flex flex-col gap-2 bg-white shadow rounded-lg"
            onClick={() => navigate(`/dashboard/properties/${img.id}`)}
          >
            {/* Image + Name */}
            <div className="flex items-center gap-3">
              <img
                src={img.src}
                alt={img.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{img.name}</p>
                <p className="text-xs text-gray-500">
                  {index % 2 === 0
                    ? "Apartment"
                    : index % 3 === 0
                      ? "Flat"
                      : "Bungalow"}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Price:</span>
              <span className="font-medium">₦8,000,000.00</span>
            </div>

            {/* Owner */}
            <div className="flex justify-between text-xs text-gray-600">
              <span>Owner:</span>
              <span className="font-medium">
                {index < 4 ? "Moses Victor" : "---"}
              </span>
            </div>

            {/* Date */}
            <div className="flex justify-between text-xs text-gray-600">
              <span>Date:</span>
              <span>08-01-2023</span>
            </div>

            {/* Status + Actions */}
            <div className="flex justify-between items-center mt-2">
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${img.status === "available"
                    ? "bg-[#ECFFEC] text-[#008000]"
                    : img.status === "rented"
                      ? "bg-[#F8F8F8] text-[#4A4A4A]"
                      : "bg-[#FFF5E5] text-[#FF8C00]"
                  }`}
              >
                {img.status.charAt(0).toUpperCase() + img.status.slice(1)}
              </span>

              <FiMoreVertical className="text-gray-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>



      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs md:text-sm gap-3">
        {/* Entries Dropdown */}
        <div className="flex items-center gap-1 text-[#272833]">
          <span className="font-semibold">10 Entries</span>
          <RiArrowDownSFill className="w-4 h-4 md:w-6 md:h-6" />
        </div>

        {/* Pagination Info + Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[#6B6C7E] text-center sm:text-left">
          {/* Info */}
          <span className="text-xs md:text-sm">
            Showing 1 to 10 of 95 entries
          </span>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-1 rounded ${currentPage === 1
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
              className={`p-1 rounded ${currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
                }`}
            >
              <RiArrowRightSLine size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;