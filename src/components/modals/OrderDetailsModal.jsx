import React from "react";
import { IoClose } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null; // no order, don't render modal

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center overflow-y-auto">
      <div className="bg-[#EEF2F1] w-full max-w-[1280px] min-h-screen relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          onClick={onClose}
        >
          <IoClose size={20} />
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 px-12 pt-6">
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

        {/* Banner */}
        <div className="w-[1020px] mx-auto">
          <img
            src="/Frame 1618873004.png"
            alt="Cocoa Land"
            className="rounded-t-2xl w-full h-[260px] object-cover"
          />
        </div>

        {/* Table */}
        <div className="bg-white p-6 shadow-sm w-[1020px] mx-auto mt-4">
          <h3 className="text-sm font-semibold mb-3 text-[#4A4A4A]">
            Order #{order.id}
          </h3>
          <table className="w-full text-sm text-left border border-[#E8E8E8]">
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
              <tr>
                <td className="p-3">{order.id}</td>
                <td className="p-3">070398912</td>
                <td className="p-3">
                  Cocoa land - Platinum X2 <br />
                  Cocoa land - Gold X2 <br />
                  Cocoa land - Gold X2
                </td>
                <td className="p-3">{order.investor}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <span
                    className={`inline-flex items-center justify-center rounded-full text-xs font-medium w-[68px] h-[24px] ${order.classes}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
