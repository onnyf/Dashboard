import React from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";

const CocoaLandDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-6 px-12 pb-6 bg-[#EEF2F1] min-h-screen ml-[238px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-semibold text-[#4A4A4A]">Cocoa Land</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-[#00644C] bg-white rounded-full px-4 py-2 text-sm font-semibold">
            <img
              src="/Frame 1618873004.png"
              alt="export"
              className="w-4 h-4 font-semibold"
            />
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
        <div className="flex items-center gap-6 border-b border-[#F5F5F5] pb-4 mb-4 text-sm">
          <button
            onClick={() => navigate("/dashboard/investment/overview")}
            className="text-[#009773] bg-[#E5FAF9] px-4 py-2 rounded-full font-medium"
          >
            Overview
          </button>
          <button
            onClick={() => navigate("/dashboard/investment/investors")}
            className="text-[#606060] px-4 py-2 rounded-full font-medium border border-[#E8E8E8]"
          >
            Investors
          </button>
          <button
            onClick={() => navigate("/dashboard/investment/disbursement")}
            className="text-[#606060] px-4 py-2 rounded-full font-medium border border-[#E8E8E8]"
          >
            Disbursement Transaction
          </button>
          <button
            onClick={() => navigate("/dashboard/investment/order")}
            className="text-[#606060] px-4 py-2 rounded-full font-medium border border-[#E8E8E8]"
          >
            Order
          </button>
          <button
            onClick={() => navigate("/dashboard/investment/about")}
            className="text-[#606060] px-4 py-2 rounded-full font-medium border border-[#E8E8E8]"
          >
            About Investment Property
          </button>
        </div>

        {/* Dropdown */}
        <div className="mb-6">
          <select
            className="w-[200px] border border-[#E8E8E8] text-sm rounded-md px-3 py-2"
            onChange={(e) => {
              if (e.target.value === "Investment Breakdown") {
                navigate("/dashboard/investment-breakdown");
              }
            }}
          >
            <option value="Investment Progress">Investment Progress</option>
            <option value="Investment Breakdown">Investment Breakdown</option>
          </select>
        </div>

        {/* Investment Progress */}
        <div className="mb-8 border border-[#FFFFFF] w-[982px] h-[132px] p-6 rounded-xl shadow-sm bg-white">
          <label className="text-sm block mb-4 text-gray-600 font-medium">
            Investment Progress
          </label>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="h-full bg-[#DCA332] w-[70%]" />
          </div>

          {/* Progress Info */}
          <div className="relative w-full mt-4 text-sm text-[#4A4A4A]">
            <div className="flex justify-between">
              <p>
                Total sold:{" "}
                <span className="font-medium">2,000,000,000.00</span>
              </p>
              <p>64% completed</p>
            </div>

            {/* Aligned "No. of Investors" text at end of yellow bar */}
            <div className="absolute top-0 left-[64%] -translate-x-1/2">
              <p>
                No. of Investors: <span className="font-medium">102</span>
              </p>
            </div>
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
                    Cocoa land - Platinum X2
                    <br />
                    Cocoa land - Gold X2
                    <br />
                    Cocoa land - Gold X2
                  </td>
                  <td className="p-3">Kingsley Alhaji</td>
                  <td className="p-3">500,000.00</td>
                  <td className="p-3">08-01-2023</td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[24px] opacity-100 ${item.classes}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CocoaLandDetails;
