import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { RiArrowDownSFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

const stats = [
  {
    title: "All Properties",
    value: 1043,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "all"
  },
  {
    title: "Available for Rent",
    value: 1000,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "available"
  },
  {
    title: "Rented Properties",
    value: 43,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "rented"
  },
  {
    title: "In Maintenance",
    value: 43,
    change: "+10",
    subtext: "From 0% (last 4 weeks)",
    filter: "maintenance"
  },
];


const images = [
  { src: "/Rectangle 36.png", status: "available" },
  { src: "/Rectangle 36.svg", status: "rented" },
  { src: "/Rectangle 6.svg", status: "maintenance" },
  { src: "/Rectangle 5.svg", status: "available" },
  { src: "/Rectangle 4.svg", status: "rented" },
  { src: "/Rectangle 3.svg", status: "available" },
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
    const pages = [1, 2, 3, '...', totalPages];
    return (
      <div className="flex items-center gap-2">
        {pages.map((page, index) => (
          <span
            key={index}
            className={`text-sm ${currentPage === page ? 'text-[#00644C] font-semibold' : 'text-gray-700'} ${page === '...' ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
          >
            {page}
          </span>
        ))}
      </div>
    );
  };

  const filteredImages = filter === "all" ? images : images.filter(img => img.status === filter);

  return (
    <div className="w-[1000px] h-[943px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] bg-[#EEF2F1] flex flex-col gap-[24px] relative top-[2px] left-[238px]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#4A4A4A]">Properties</h2>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 text-[#00644C] text-sm px-4 py-2 rounded-2xl border bg-white"
          >
            <img src="/export.svg" alt="Export" className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={() => navigate("/dashboard/add-investment")}
            className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-2xl bg-[#00644C]"
          >
            <GoPlus /> Investment
          </button>
        </div>
      </div>

      {/* Stats Section */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {stats.map((stat, index) => {
    const isActive = filter === stat.filter;
    const cardBg = isActive ? "bg-[#003F30]" : "bg-white";
    const cardText = isActive ? "text-white" : "text-black";
    const subTextColor = isActive ? "text-white/70" : "text-gray-400";

    return (
      <div
        key={index}
        onClick={() => handleStatClick(stat.filter)}
        className={`cursor-pointer p-5 rounded-2xl shadow-sm border border-gray-200 transition duration-200 hover:shadow-md ${cardBg} ${cardText}`}
      >
        <div className="text-sm font-medium mb-1">{stat.title}</div>
        <div className="text-3xl font-bold flex items-center justify-between">
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-auto mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-500">
            <tr>
              <th className="p-4 text-left">S/N</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left flex items-center gap-1">
                Type <img src="/liner.svg" alt="liner" className="w-4 h-3 mt-2" />
              </th>
              <th className="p-4 text-left">Price (₦)</th>
              <th className="p-4 text-left">Owner</th>
              <th className="p-4 text-left">Date Mod.</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left flex items-center gap-1">
                Action <img src="/liner.svg" alt="liner" className="w-4 h-3 mt-2" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredImages.map((img, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4">0{index + 1}</td>
                <td className="p-4 flex items-center gap-2">
                  <img src={img.src} alt="property" className="h-8 w-8 rounded object-cover" />
                  Cocoa Land
                </td>
                <td className="p-4">
                  <span className="text-xs px-2 py-1 border rounded-full text-gray-600">
                    {index % 2 === 0 ? "Apartment" : index % 3 === 0 ? "Flat" : "Bungalow"}
                  </span>
                </td>
                <td className="p-4">₦8,000,000.00</td>
                <td className="p-4">{index < 4 ? "Moses Victor" : "---"}</td>
                <td className="p-4">08-01-2023</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${img.status === "available" ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-500"}`}>
                    {img.status.charAt(0).toUpperCase() + img.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  <FiMoreVertical className="text-gray-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center w-[760px] h-8 gap-12 p-4 text-sm text-gray-500 mb-8">
        <div className="flex items-center gap-1">
          <span>10 Entries</span>
          <RiArrowDownSFill className="text-lg" />
        </div>
        <div className="flex items-center gap-2">
          <span>Showing 1 to 10 of 95 entries.</span>
          <div className="ml-24 flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`p-2  ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
              }`}
            >
              <RiArrowLeftSLine size={20} />
            </button>
            {renderPageNumbers()}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`p-2  ${
                currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
              }`}
            >
              <RiArrowRightSLine size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
