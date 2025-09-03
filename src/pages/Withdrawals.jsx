import React, { useState } from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const disbursementData = Array(95).fill({
  name: "Kingsley Alhaji",
  email: "Kingsley@gmail.com",
  phone: "+5897949488",
  bank: "GTB",
  accountNo: "893793839393",
  investment: "Cocooland Premium x2",
  amount: "300,000.00",
  date: "08-01-2023",
  status: "Paid",
});

const Withdrawals = () => {
  const entriesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalEntries = disbursementData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const currentEntries = disbursementData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Export function
  const handleExport = () => {
    console.log("Export button clicked. Ready to download disbursement data.");
  };

  // Retry function
  const handleRetry = (user) => {
    console.log(`Retrying payment for: ${user.name}`);
  };

  return (
    <div className="w-full xl:pl-[240px] px-4 sm:px-6 lg:px-8 py-6 space-y-6 bg-[#EEF2F1] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-[#4A4A4A]">
          Disbursement Portal
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 text-sm bg-white border border-white shadow px-4 py-2 rounded-full font-medium text-[#00644C]"
        >
          <img src="/export.svg" alt="" className="h-5" /> Export
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white shadow-sm rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#f5f7f7] text-[#4B5563]">
            <tr>
              <th className="px-4 py-3 font-Gilroy-Medium">S/N</th>
              <th className="px-4 py-3 font-Gilroy-Medium">
                <div className="flex items-center gap-1">
                  Investor's Details <TbArrowsUpDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-4 py-3 font-Gilroy-Medium">
                Investment Details
              </th>
              <th className="px-1 py-3 font-Gilroy-Medium">Total Amount(₦)</th>
              <th className="px-1 py-3 font-Gilroy-Medium">
                <div className="flex items-center gap-1">
                  Vested Date <TbArrowsUpDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-4 py-3 font-Gilroy-Medium">
                <div className="flex items-center gap-2">
                  Status <IoFilter className="text-gray-400 w-4 h-4" />
                </div>
              </th>
              <th className="px-4 py-3 font-Gilroy-Medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#6B7280]">
            {currentEntries.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-12">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <img
                      src="/empty-state-icon.svg"
                      alt="Empty state"
                      className="w-16 h-16 opacity-50"
                    />
                    <p className="text-gray-400 text-sm">
                      No disbursement transactions yet.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              currentEntries.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 align-top font-medium">
                    {String(
                      (currentPage - 1) * entriesPerPage + index + 1
                    ).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <div className="flex flex-col gap-1">
                      <span>{item.name}</span>
                      <span>{item.email}</span>
                      <span>{item.phone}</span>
                      <span>Bank: {item.bank}</span>
                      <span>Account no.: {item.accountNo}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top">{item.investment}</td>
                  <td className="px-4 py-4 align-top">₦{item.amount}</td>
                  <td className="px-4 py-4 align-top">{item.date}</td>
                  <td className="px-4 py-4 align-top">
                    <span className="inline-flex items-center gap-1 text-green-700 text-sm font-medium bg-green-100 px-2.5 py-1 rounded-full">
                      <img src="/verify.png" alt="Verified icon" /> Paid
                    </span>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <button
                      onClick={() => handleRetry(item)}
                      className="text-[#458d7d] bg-white flex items-center gap-2 px-3 rounded-full border border-[#E8E8E8] w-[90px] h-[32px] text-sm hover:bg-gray-100"
                    >
                      <img
                        src="/History.svg"
                        alt="Retry icon"
                        className="h-5"
                      />
                      Retry
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {currentEntries.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-gray-800">
                {item.name}
              </p>
              <span className="inline-flex items-center gap-1 text-green-700 text-xs font-medium bg-green-100 px-2.5 py-1 rounded-full">
                <img src="/verify.png" alt="Verified icon" /> {item.status}
              </span>
            </div>

            <p className="text-xs text-gray-500">{item.email}</p>
            <p className="text-xs text-gray-500">{item.phone}</p>
            <p className="text-xs text-gray-500">Bank: {item.bank}</p>
            <p className="text-xs text-gray-500">
              Account No.: {item.accountNo}
            </p>

            <div className="flex justify-between text-xs text-gray-600 pt-2">
              <span>Investment:</span>
              <span className="font-medium">{item.investment}</span>
            </div>

            <div className="flex justify-between text-xs text-gray-600">
              <span>Amount:</span>
              <span className="font-medium">₦{item.amount}</span>
            </div>

            <div className="flex justify-between text-xs text-gray-600">
              <span>Date:</span>
              <span>{item.date}</span>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => handleRetry(item)}
                className="text-[#458d7d] bg-white flex items-center gap-2 px-3 rounded-full border border-[#E8E8E8] h-[32px] text-sm hover:bg-gray-100"
              >
                <img
                  src="/History.svg"
                  alt="Retry icon"
                  className="h-4"
                />
                Retry
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-6 text-sm text-gray-500 gap-4">
        <div className="flex items-center gap-2">
          <div className="relative px-2 py-1 flex items-center gap-1">
            <span className="font-semibold text-[#464a51]">
              {entriesPerPage} Entries
            </span>
            <span className="text-xs">&#9660;</span>
          </div>
          <span>
            Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
            {Math.min(currentPage * entriesPerPage, totalEntries)} of{" "}
            {totalEntries} entries.
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="px-2 py-1 hover:bg-gray-200"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack className="w-[20px] h-[20px]" />
          </button>

          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-2 py-1 ${
                  currentPage === page
                    ? "text-[#6B6C7E] font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          {totalPages > 4 && (
            <>
              <span className="px-2">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`px-2 py-1 ${
                  currentPage === totalPages
                    ? "bg-[#111827] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className="px-2 py-1 hover:bg-gray-200"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;