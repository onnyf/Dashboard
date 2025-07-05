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

  const totalOrders = 1043;
  const successfulOrders = 1000;
  const failedOrders = 43;

  return (
    <div className="bg-[#EEF2F1] min-h-screen pt-[30px] px-4 md:pl-[268px] md:pr-6 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
        <p className="font-medium text-lg">Transactions</p>
        <button className="flex gap-2 items-center text-[#00644C] px-3 py-2 bg-white rounded-full shadow-sm">
          <TbArrowDownFromArc className="text-lg" />
          Export
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            key: "All",
            title: "All Transactions",
            value: 1043,
          },
          {
            key: "Completed",
            title: "Completed Transactions",
            value: 1000,
          },
          {
            key: "Failed",
            title: "Failed Transactions",
            value: 43,
          },
        ].map(({ key, title, value }) => {
          const isActive = selectedCard === key;

          return (
            <div
              key={key}
              onClick={() => {
                setSelectedCard(key);
                setCurrentPage(1);
              }}
              className={`rounded-xl cursor-pointer transition duration-200 overflow-hidden ${
                isActive ? "bg-[#003F30] text-white" : "bg-white text-[#101928]"
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
                    className={`flex items-center gap-1 text-[12px] font-medium px-2 py-[2px] rounded-full ${
                      isActive
                        ? "bg-white text-[#12B76A]"
                        : "bg-[#12B76A] text-white"
                    }`}
                  >
                    <FaArrowUp
                      className={`text-xs ${
                        isActive ? "text-[#12B76A]" : "text-white"
                      }`}
                    />
                    +10
                  </div>
                </div>
                <div
                  className={`text-xs mt-1 ${
                    isActive ? "text-white/70" : "text-[#8D98A4]"
                  }`}
                >
                  From 0% (last 4 weeks)
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl p-5 shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 relative">
            <tr className="text-xs font-medium bg-[#FAFBFB]">
              <th className="py-2">S/N</th>
              <th className="py-2">Transaction ID</th>
              <th className="py-2 relative ml-4">Description</th>
              <th className="py-2">Investor’s name</th>
              <th className="py-2">Amount (₦)</th>
              <th className="py-2">Date</th>
              <th className="py-2 text-right relative">
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 justify-end cursor-pointer"
                >
                  Status <IoFilter />
                </div>
                {showDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-[116px] h-[107px] p-[12px] rounded-[12px] bg-white z-50"
                    style={{ boxShadow: "0px 10px 18px -2px #10192812" }}
                  >
                    <p className="text-[#8D98A4] text-[12px] font-medium mb-2 mr-5">
                      Status type
                    </p>
                    <div className="flex flex-col gap-[4px]">
                      {["Successful", "Failed"].map((status) => (
                        <label
                          key={status}
                          className="flex items-center gap-[8px] text-[#101928] text-[12px] font-normal py-2"
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
          <tbody className="text-gray-700 relative top-6">
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
                        className="py-4 px-4 align-top font-medium text-sm text-gray-600"
                      >
                        {String(
                          (currentPage - 1) * itemsPerPage + index + 1
                        ).padStart(2, "0")}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="py-4 px-4 align-top"
                      >
                        {order.id}
                      </td>
                    </>
                  )}
                  <td className="py-2 px-4">{desc}</td>
                  {i === 0 && (
                    <>
                      <td
                        rowSpan={order.descriptions.length}
                        className="py-4 px-4 align-top"
                      >
                        {order.investor}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="py-4 px-4 align-top"
                      >
                        {order.amount}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="py-4 px-4 align-top"
                      >
                        {order.date}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="py-4 px-4 text-right align-top"
                      >
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
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row text-sm mt-6 text-gray-600 gap-20 relative">
        <span>{itemsPerPage} Entries ▼</span>
        <div className="flex items-center gap-2 mb-6">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of{" "}
            {filteredOrders.length} entries.
          </span>
          <div className="flex items-center gap-1 ml-40">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded hover:bg-gray-100 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RiArrowLeftSLine size={16} />
            </button>

            {/* Smart pagination */}
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
                    className={`px-2 py-1 rounded ${
                      currentPage === page
                        ? "bg-green-800 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (
                (page === currentPage -2  || page === currentPage + 2) &&
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
              className={`p-2 rounded hover:bg-gray-100 ${
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
    </div>
  );
};

export default Transactions;
