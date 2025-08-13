import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const InvestmentBreakdown = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [dropdownValue, setDropdownValue] = useState("Investment Breakdown");

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setDropdownValue(value);

    if (value === "Investment Progress") {
      navigate("/dashboard/investment/:id");
    } else if (value === "Investment Breakdown") {
      navigate("/dashboard/investment/:id");
    }
  };

  return (
    <div className="pt-6 px-12 pb-6 bg-[#EEF2F1] min-h-screen ml-[238px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-semibold text-[#4A4A4A]">Cocoa Land</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-[#00644C] bg-white rounded-full px-4 py-2 text-sm font-semibold">
            <img src="/export.svg" alt="export" className="w-4 h-4" />
            Edit Property
          </button>
          <button className="bg-[#FF00001A] text-[#B30000] px-4 py-2 rounded-full text-sm">
            Un-publish Investment
          </button>
        </div>
      </div>

      {/* Top Image Banner */}
      <div className="w-[1020px]">
        <img
          src="/Frame 1618873004.png"
          alt="Cocoa Land"
          className="rounded-t-2xl w-full h-[260px] object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="bg-white p-6 shadow-sm w-[1020px]">
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-[#F5F5F5] pb-4 mb-4 text-sm">
          {[
            { key: "overview", label: "Overview" },
            { key: "investors", label: "Investors" },
            { key: "disbursement", label: "Disbursement Transaction" },
            { key: "orders", label: "Orders" },
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

        {/* Dropdown */}
        <div className="mb-6">
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="w-[200px] border border-[#E8E8E8] text-sm rounded-md px-3 py-2"
          >
            <option value="Investment Breakdown">Investment Breakdown</option>
            <option value="Investment Progress">Investment Progress</option>
          </select>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <>
            {/* Investment Breakdown */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 w-[940px]">
              <label className="text-sm block mb-2 text-gray-600 font-medium">
                Investment Breakdown
              </label>

              {/* Legend */}
              <div className="flex justify-end gap-6 mb-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-[27px] h-[12px] bg-[#9B51E0]" /> Platinum
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[27px] h-[12px] bg-[#00644C]" /> Diamond
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[27px] h-[12px] bg-[#DFB400]" /> Gold
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-[#9B51E0]" style={{ width: "60%" }} />
                <div className="h-full bg-[#00644C]" style={{ width: "25%" }} />
                <div className="h-full bg-[#DFB400]" style={{ width: "15%" }} />
              </div>

              {/* Totals */}
              <div className="flex justify-between text-sm mt-2 text-[#4A4A4A]">
                <p>Total Investment: ₦5,000,000,000.00</p>
                <p>No. of Investors: 102</p>
              </div>
            </div>

            {/* Latest Orders Table */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-[#4A4A4A]">
                Latest Orders
              </h3>
              <table className="w-[940px] text-sm text-left border border-[#E8E8E8]">
                <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-3">S/N</th>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Investor's name</th>
                    <th className="p-3">Amount (₦)</th>
                    <th className="p-3">Date</th>
                    <th className="p-3 flex items-center gap-1">
                      Status
                      <IoFilter className="text-[#4A4A4A] w-4 h-4" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "01",
                      status: "Successful",
                      classes: "text-[#008000] bg-[#ECFFEC]",
                    },
                    {
                      id: "02",
                      status: "Successful",
                      classes: "text-[#008000] bg-[#ECFFEC]",
                    },
                    {
                      id: "03",
                      status: "Failed",
                      classes: "text-[#B30000] bg-[#FF00001A]",
                    },
                  ].map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-3">{item.id}</td>
                      <td className="p-3">070398912</td>
                      <td className="p-3">
                        Cocoa land - Platinum X2 <br />
                        Cocoa land - Gold X2 <br />
                        Cocoa land - Gold X2
                      </td>
                      <td className="p-3">Kingsley Alhaji</td>
                      <td className="p-3">500,000.00</td>
                      <td className="p-3">08-01-2023</td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[24px] ${item.classes}`}
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

        {activeTab === "about" && (
          <>
            {/* About Investment Property */}
            <h3 className="text-sm font-semibold mb-4 text-[#4A4A4A]">
              About Investment Property
            </h3>
            <div className="flex gap-6 mb-6">
              <div className="bg-[#FAFAFA] rounded-lg p-4 w-[303.33px]">
                <p className="text-xs text-gray-500">
                  Total Property Valuation
                </p>
                <h2 className="text-lg font-semibold">₦10,000,000.00</h2>
              </div>
              <div className="bg-[#FAFAFA] rounded-lg p-4 w-[303.33px]">
                <p className="text-xs text-gray-500">Unit Sold</p>
                <h2 className="text-lg font-semibold">1002</h2>
              </div>
              <div className="bg-[#FAFAFA]  rounded-lg p-4 w-[303.33px]">
                <p className="text-xs text-gray-500">No. of Investors</p>
                <h2 className="text-lg font-semibold">1250</h2>
              </div>
            </div>

            {/* Info List */}
            <div className="grid grid-cols-2 gap-y-8 text-sm">
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Name:
                </span>
                <p>Kingsley Alhaji</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Location:
                </span>
                <p>Lagos State</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Property Type:
                </span>
                <p>09040944885</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Date Created:
                </span>
                <p>29-01-2024</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Description:
                </span>
                <p>09040944885</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Last Modified:
                </span>
                <p>29-01-2024</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Status:
                </span>
                <p className="text-[#008000] py-4 font-semibold">Completed</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
                  Completion Progress:
                </span>
                <p>29-01-2024</p>
              </div>
              <div>
                <span className="text-[#8E8E8E] py-4 font-semibold block">
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

export default InvestmentBreakdown;
