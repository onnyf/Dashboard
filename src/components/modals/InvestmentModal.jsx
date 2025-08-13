// src/components/InvestmentModal.jsx
import React from "react";
import cocoaImg from "../assets/cocoa_land.png";

const InvestmentModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-start pt-10 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-6xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cocoa Land</h2>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm">
              Edit Property
            </button>
            <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm">
              Un-publish Investment
            </button>
          </div>
        </div>

        <img src={cocoaImg} alt="Cocoa Land" className="rounded-xl mb-4" />

        {/* Tabs */}
        <div className="flex gap-4 border-b pb-2 text-sm font-medium text-gray-600">
          <button className="text-[#0E9F6E] border-b-2 border-[#0E9F6E] pb-1">Overview</button>
          <button>Investors</button>
          <button>Disbursement Transaction</button>
          <button>Orders</button>
          <button>About Investment Property</button>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <label className="block text-sm text-gray-500 mb-2">Investment Progress</label>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-1">
            <div className="bg-yellow-500 h-full w-[70%]"></div>
          </div>
          <div className="text-xs text-gray-500 flex justify-between">
            <span>Total sold: 2,000,000,000.00</span>
            <span>No. of Investors: 192</span>
          </div>
        </div>

        {/* Orders Table */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Latest Orders</h3>
          <table className="w-full text-sm text-left border-t">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">S/N</th>
                <th>Order ID</th>
                <th>Description</th>
                <th>Investor’s name</th>
                <th>Amount (₦)</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2">{`0${idx + 1}`}</td>
                  <td>079638912</td>
                  <td>
                    Cocoa Land - Platinum X2 <br /> Cocoa Land - Gold X2
                  </td>
                  <td>Kingsley Alhaji</td>
                  <td>500,000.00</td>
                  <td>08-01-2023</td>
                  <td>
                    <span className="text-green-600">Successful</span>
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

export default InvestmentModal;
