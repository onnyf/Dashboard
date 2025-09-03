import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import {
  RiArrowDownSFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const CocoaLandDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`p-1 rounded ${
            currentPage === i
              ? "bg-[#009773] text-white"
              : "text-[#6B6C7E] hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pt-6 px-4 md:px-12 pb-6 bg-[#EEF2F1] min-h-screen md:ml-[230px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-[20px] font-semibold text-[#4A4A4A]">Cocoa Land</h2>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 text-[#00644C] bg-white rounded-full px-4 py-2 text-sm font-semibold">
            <img src="/export.svg" alt="export" className="w-4 h-4 font-semibold" />
            Edit Property
          </button>
          <button className="bg-[#FF00001A] text-[#B30000] px-4 py-2 rounded-full text-sm">
            Un-publish Investment
          </button>
        </div>
      </div>

      {/* Banner Image */}
      <img
        src="/Frame 1618873004.png"
        alt="Cocoa Land"
        className="rounded-t-2xl w-full h-[260px] object-cover"
      />

      {/* Tabbed Section */}
      <div className="bg-white p-6 rounded shadow-sm">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 border-b border-[#F5F5F5] pb-4 mb-4 text-sm">
          {[
            { key: "overview", label: "Overview" },
            { key: "investors", label: "Investors" },
            { key: "disbursement", label: "Disbursement Transaction" },
            { key: "orders", label: "Order" },
            { key: "about", label: "About Investment Property" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === tab.key
                  ? "text-[#009773] bg-[#E5FAF9]"
                  : "text-[#606060] border border-[#E8E8E8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Show Dropdown ONLY in Overview Tab */}
        {activeTab === "overview" && (
          <div className="mb-6">
            <select
              className="w-full md:w-[200px] border border-[#E8E8E8] text-sm rounded-md px-3 py-2"
              onChange={(e) => {
                if (e.target.value === "Investment Breakdown") {
                  window.location.href = "/dashboard/investment-breakdown";
                }
              }}
            >
              <option value="Investment Progress">Investment Progress</option>
              <option value="Investment Breakdown">Investment Breakdown</option>
            </select>
          </div>
        )}

        {/* Overview */}
        {activeTab === "overview" && (
          <>
            {/* Investment Progress */}
            <div className="mb-8 border border-[#FFFFFF] w-full p-6 rounded-xl shadow-sm bg-white">
              <label className="text-sm block mb-4 text-gray-600 font-medium">
                Investment Progress
              </label>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden relative">
                <div className="h-full bg-[#DCA332] w-[70%]" />
              </div>
              <div className="relative w-full mt-4 text-sm text-[#4A4A4A]">
                <div className="flex justify-between flex-wrap gap-2">
                  <p>
                    Total sold:{" "}
                    <span className="font-medium">2,000,000,000.00</span>
                  </p>
                  <p>64% completed</p>
                </div>
                <div className="absolute top-0 left-[64%] -translate-x-1/2 whitespace-nowrap">
                  <p>
                    No. of Investors: <span className="font-medium">102</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Latest Orders */}
            <div className="overflow-x-auto">
              <h3 className="text-sm font-semibold mb-3 text-[#4A4A4A]">
                Latest Orders
              </h3>
              <table className="w-full min-w-[600px] text-xs md:text-sm text-left border border-[#E8E8E8]">
                <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-2 md:p-3">S/N</th>
                    <th className="p-2 md:p-3">Order ID</th>
                    <th className="p-2 md:p-3">Description</th>
                    <th className="p-2 md:p-3">Investor's name</th>
                    <th className="p-2 md:p-3">Amount (₦)</th>
                    <th className="p-2 md:p-3">Date</th>
                    <th className="p-2 md:p-3 flex items-center gap-1">
                      Status
                      <IoFilter className="text-[#4A4A4A] w-3 h-3 md:w-4 md:h-4" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "01", status: "Successful", classes: "text-[#008000] bg-[#ECFFEC]" },
                    { id: "02", status: "Successful", classes: "text-[#008000] bg-[#ECFFEC]" },
                    { id: "03", status: "Failed", classes: "text-[#B30000] bg-[#FF00001A]" },
                  ].map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-2 md:p-3">{item.id}</td>
                      <td className="p-2 md:p-3">070398912</td>
                      <td className="p-2 md:p-3">
                        Cocoa land - Platinum X2 <br />
                        Cocoa land - Gold X2 <br />
                        Cocoa land - Gold X2
                      </td>
                      <td className="p-2 md:p-3">Kingsley Alhaji</td>
                      <td className="p-2 md:p-3">500,000.00</td>
                      <td className="p-2 md:p-3">08-01-2023</td>
                      <td className="p-2 md:p-3">
                        <span
                          className={`inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[20px] md:h-[24px] ${item.classes}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Investors */}
        {activeTab === "investors" && (
          <>
          
           <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-xs md:text-sm text-left border border-[#E8E8E8]">
                <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-2 md:p-3">S/N</th>
                    <th className="p-2 md:p-3">Investor's name</th>
                    <th className="p-2 md:p-3">Investment type</th>
                    <th className="p-2 md:p-3">Unit</th>
                    <th className="p-2 md:p-3">Amount (₦)</th>
                    <th className="p-2 md:p-3">Date</th>
                    <th className="p-2 md:p-3">Vested Date</th>
                    <th className="p-2 md:p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, idx) => (
                    <tr key={idx} className="border-b border-[#E8E8E8]">
                      <td className="p-2 md:p-3">{idx + 1}</td>
                      <td className="p-2 md:p-3">Kingsley Alhaji</td>
                      <td className="p-2 md:p-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-[#008000] bg-[#ECFFEC]">
                          Platinum
                        </span>
                      </td>
                      <td className="p-2 md:p-3">2</td>
                      <td className="p-2 md:p-3">500,000.00</td>
                      <td className="p-2 md:p-3">08-01-2023</td>
                      <td className="p-2 md:p-3">08-01-2023</td>
                      <td className="p-2 md:p-3">
                        <span className="inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[20px] md:h-[24px] text-[#008000] bg-[#ECFFEC]">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination visible here */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs md:text-sm gap-3">
              <div className="flex items-center gap-1 text-[#272833]">
                <span className="font-semibold">10 Entries</span>
                <RiArrowDownSFill className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[#6B6C7E]">
                <span className="block md:mr-40 text-center md:text-left">
                  Showing 1 to 10 of 95 entries
                </span>
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
          </>
        )}

        {/* Disbursement */}
        {activeTab === "disbursement" && (
          <>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-xs md:text-sm text-left border border-[#E8E8E8]">
                <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-2 md:p-3">S/N</th>
                    <th className="p-2 md:p-3">Investor's name</th>
                    <th className="p-2 md:p-3">Investment type</th>
                    <th className="p-2 md:p-3">Unit</th>
                    <th className="p-2 md:p-3">Amount (₦)</th>
                    <th className="p-2 md:p-3">Date</th>
                    <th className="p-2 md:p-3">Vested Date</th>
                    <th className="p-2 md:p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, idx) => (
                    <tr key={idx} className="border-b border-[#E8E8E8]">
                      <td className="p-2 md:p-3">{idx + 1}</td>
                      <td className="p-2 md:p-3">Kingsley Alhaji</td>
                      <td className="p-2 md:p-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-[#008000] bg-[#ECFFEC]">
                          Platinum
                        </span>
                      </td>
                      <td className="p-2 md:p-3">2</td>
                      <td className="p-2 md:p-3">500,000.00</td>
                      <td className="p-2 md:p-3">08-01-2023</td>
                      <td className="p-2 md:p-3">08-01-2023</td>
                      <td className="p-2 md:p-3">
                        <span className="inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[20px] md:h-[24px] text-[#008000] bg-[#ECFFEC]">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            {/* Pagination visible here */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs md:text-sm gap-3">
              <div className="flex items-center gap-1 text-[#272833]">
                <span className="font-semibold">10 Entries</span>
                <RiArrowDownSFill className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[#6B6C7E]">
                <span className="block md:mr-40 text-center md:text-left">
                  Showing 1 to 10 of 95 entries
                </span>
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
          </>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <>
            
             <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-xs md:text-sm text-left border border-[#E8E8E8]">
                <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-2 md:p-3">S/N</th>
                    <th className="p-2 md:p-3">Order ID</th>
                    <th className="p-2 md:p-3">Description</th>
                    <th className="p-2 md:p-3">Investor's name</th>
                    <th className="p-2 md:p-3">Amount (₦)</th>
                    <th className="p-2 md:p-3">Date</th>
                    <th className="p-2 md:p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, idx) => (
                    <tr key={idx} className="border-b border-[#E8E8E8]">
                      <td className="p-2 md:p-3">{idx + 1}</td>
                      <td className="p-2 md:p-3">070398912</td>
                      <td className="p-2 md:p-3">
                        Cocoa land - Platinum X2 <br />
                        Cocoa land - Gold X2
                      </td>
                      <td className="p-2 md:p-3">Kingsley Alhaji</td>
                      <td className="p-2 md:p-3">500,000.00</td>
                      <td className="p-2 md:p-3">08-01-2023</td>
                      <td className="p-2 md:p-3">
                        <span className="inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[20px] md:h-[24px] text-[#008000] bg-[#ECFFEC]">
                          Successful
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
            {/* Pagination visible here */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs md:text-sm gap-3">
              <div className="flex items-center gap-1 text-[#272833]">
                <span className="font-semibold">10 Entries</span>
                <RiArrowDownSFill className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[#6B6C7E]">
                <span className="block md:mr-40 text-center md:text-left">
                  Showing 1 to 10 of 95 entries
                </span>
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
          </>
        )}

        {/* About */}
        {activeTab === "about" && (
          <>
         <h3 className="text-sm font-semibold mb-4 text-[#4A4A4A]">
              About Investment Property
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-[#FAFAFA] rounded-lg p-3 md:p-4">
                <p className="text-xs text-gray-500">
                  Total Property Valuation
                </p>
                <h2 className="text-base md:text-lg font-semibold">₦10,000,000.00</h2>
              </div>
              <div className="bg-[#FAFAFA] rounded-lg p-3 md:p-4">
                <p className="text-xs text-gray-500">Unit Sold</p>
                <h2 className="text-base md:text-lg font-semibold">1002</h2>
              </div>
              <div className="bg-[#FAFAFA] rounded-lg p-3 md:p-4">
                <p className="text-xs text-gray-500">No. of Investors</p>
                <h2 className="text-base md:text-lg font-semibold">1250</h2>
              </div>
            </div>

            {/* Info List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4 md:gap-x-8 text-sm">
              <div>
                <span className="text-[#8E8E8E] font-medium block">Name:</span>
                <p>Kingsley Alhaji</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Location:
                </span>
                <p>Lagos State</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Property Type:
                </span>
                <p>Residential</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Date Created:
                </span>
                <p>29-01-2024</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Description:
                </span>
                <p>A premium cocoa land investment</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Last Modified:
                </span>
                <p>29-01-2024</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Status:
                </span>
                <p className="text-[#008000] font-medium">Completed</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] font-medium block">
                  Completion Progress:
                </span>
                <p>100%</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-[#8E8E8E] font-medium block">
                  Features:
                </span>
                <p>---</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CocoaLandDetails;
