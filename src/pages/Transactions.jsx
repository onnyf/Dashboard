import React, { useState, useRef, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import { TbArrowDownFromArc } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const orders = Array.from({ length: 95 }, (_, i) => ({
  id: "090388982",
  investor: "Kingsley Alhaji",
  amount: "500,000.00",
  date: "08-01-2023",
  status: i % 2 === 0 ? "Successful" : "Failed",
  descriptions: [
    "Coco land - Platinum X2",
    "Coco land - Gold X2",
    "Coco land - Gold X2",
  ],
}));

const Transactions = () => {
  const [selectedCard, setSelectedCard] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusFilter = () => {
    switch (selectedCard) {
      case "Completed":
        return { Successful: true, Failed: false };
      case "Failed":
        return { Successful: false, Failed: true };
      default:
        return { Successful: true, Failed: true };
    }
  };

  const statusFilter = getStatusFilter();
  const filteredOrders = orders.filter((order) => statusFilter[order.status]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full xl:pl-[240px] px-4 sm:px-6 lg:px-8 py-6 space-y-6 bg-[#EEF2F1] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-[#4A4A4A] ml-2 lg:ml-0">
          Orders
        </h2>
        <button className="flex gap-2 items-center text-[#00644C] px-3 py-2 bg-white rounded-full shadow-sm">
          <TbArrowDownFromArc className="text-lg" />
          Export
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { key: "All", title: "All Orders", value: 1043 },
          { key: "Completed", title: "Completed Orders", value: 1000 },
          { key: "Failed", title: "Failed Orders", value: 43 },
        ].map(({ key, title, value }) => {
          const isActive = selectedCard === key;

          return (
            <div
              key={key}
              onClick={() => {
                setSelectedCard(key);
                setCurrentPage(1);
              }}
              className={`rounded-xl cursor-pointer transition duration-200 overflow-hidden w-full ${isActive
                  ? "bg-[#003F30] text-white"
                  : "bg-white text-[#101928]"
                }`}
              style={{
                height: "107px",
                boxShadow: "0px 10px 18px -2px #10192812",
              }}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="text-sm font-medium">{title}</div>
                <div className="flex justify-between items-center mt-1">
                  <div className="text-[28px] font-semibold leading-none">
                    {value}
                  </div>
                  <div
                    className={`flex items-center gap-1 text-[12px] font-medium px-2 py-[2px] rounded-full ${isActive
                        ? "bg-white text-[#12B76A]"
                        : "bg-[#12B76A] text-white"
                      }`}
                  >
                    <FaArrowUp className="text-xs" />
                    +10
                  </div>
                </div>
                <div
                  className={`text-xs mt-1 ${isActive ? "text-white/70" : "text-[#8D98A4]"
                    }`}
                >
                  From 0% (last 4 weeks)
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 w-full">
        {/* Transactions Table */}
        <div className="w-full">
          <div className="bg-white shadow-sm rounded-xl w-full overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-xs sm:text-sm text-left border-collapse">
                <thead className="bg-[#FAFBFB] text-[#4B5563]">
                  <tr className="font-medium">
                    <th className="py-3 px-2 sm:px-4 rounded-tl-xl whitespace-nowrap">S/N</th>
                    <th className="py-3 px-2 sm:px-4 whitespace-nowrap">Order ID</th>
                    <th className="py-3 px-2 sm:px-4 whitespace-nowrap">Description</th>
                    <th className="py-3 px-2 sm:px-4 whitespace-nowrap">Investor’s name</th>
                    <th className="py-3 px-2 sm:px-4 whitespace-nowrap">Amount (₦)</th>
                    <th className="py-3 px-2 sm:px-4 whitespace-nowrap">Date</th>
                    <th className="py-3 px-2 sm:px-4 text-right rounded-tr-xl relative whitespace-nowrap">
                      <div
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center gap-1 justify-end cursor-pointer"
                      >
                        Status <IoFilter className="mr-1" />
                      </div>
                      {showDropdown && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 mt-2 w-[116px] h-[107px] p-[12px] rounded-[12px] bg-white z-50"
                          style={{ boxShadow: "0px 10px 18px -2px #10192812" }}
                        >
                          <p className="text-[#8D98A4] text-[12px] font-medium mb-2">
                            Status type
                          </p>
                          <div className="flex flex-col gap-[4px]">
                            {["Successful", "Failed"].map((status) => (
                              <label
                                key={status}
                                className="flex items-center gap-[8px] text-[#101928] text-[12px] font-normal py-1"
                              >
                                <input
                                  type="checkbox"
                                  checked={statusFilter[status]}
                                  readOnly
                                  className="w-4 h-4 border-gray-300 rounded"
                                />
                                <span>{status}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {paginatedOrders.map((order, index) =>
                    order.descriptions.map((desc, i) => (
                      <tr
                        key={`${index}-${i}`}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        {i === 0 && (
                          <>
                            <td
                              rowSpan={order.descriptions.length}
                              className="py-4 px-2 sm:px-4 align-top font-medium text-gray-600 text-xs sm:text-sm whitespace-nowrap"
                            >
                              {String(
                                (currentPage - 1) * itemsPerPage + index + 1
                              ).padStart(2, "0")}
                            </td>
                            <td
                              rowSpan={order.descriptions.length}
                              className="py-4 px-2 sm:px-4 align-top text-xs sm:text-sm whitespace-nowrap"
                            >
                              {order.id}
                            </td>
                          </>
                        )}
                        <td className="py-2 px-2 sm:px-4 align-top text-xs sm:text-sm whitespace-nowrap">
                          {desc}
                        </td>
                        {i === 0 && (
                          <>
                            <td
                              rowSpan={order.descriptions.length}
                              className="py-4 px-2 sm:px-4 align-top text-xs sm:text-sm whitespace-nowrap"
                            >
                              {order.investor}
                            </td>
                            <td
                              rowSpan={order.descriptions.length}
                              className="py-4 px-2 sm:px-4 align-top text-xs sm:text-sm whitespace-nowrap"
                            >
                              {order.amount}
                            </td>
                            <td
                              rowSpan={order.descriptions.length}
                              className="py-4 px-2 sm:px-4 align-top text-xs sm:text-sm whitespace-nowrap"
                            >
                              {order.date}
                            </td>
                            <td
                              rowSpan={order.descriptions.length}
                              className="py-4 px-2 sm:px-4 text-right align-top whitespace-nowrap"
                            >
                              <span
                                className={`text-xs px-2 py-1 rounded-full font-medium ${order.status === "Successful"
                                    ? "bg-[#ECFFEC] text-[#008000]"
                                    : "bg-[#FF00001A] text-[#B30000]"
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
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row text-sm mt-6 text-[#272833] gap-6 md:gap-20">
            <div className="font-semibold">
              <span>{itemsPerPage} Entries ▼</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of{" "}
                {filteredOrders.length} entries.
              </span>
              <div className="flex items-center gap-1 ml-auto md:ml-40">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded hover:bg-gray-100 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  <RiArrowLeftSLine size={16} />
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                  const page = idx + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-2 py-1 rounded ${currentPage === page
                            ? " text-[#6B6C7E]"
                            : "hover:bg-gray-100"
                          }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    (page === currentPage - 2 || page === currentPage + 2) &&
                    totalPages > 5
                  ) {
                    return <span key={page}>...</span>;
                  } else {
                    return null;
                  }
                })}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded hover:bg-gray-100 ${currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                    }`}
                >
                  <RiArrowRightSLine size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Transactions;