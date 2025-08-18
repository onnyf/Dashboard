import React, { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const UserDetailsModal = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");
  const isVerified = user.status === "Pending";

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl h-[750px] rounded-xl shadow-lg relative p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>

            {isVerified ? (
              <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                <FaCheckCircle className="text-green-600" />
                <span>Verified</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-[#DE940B]">
                <FaClock className="text-[#DE940B]" />
                <span>Pending</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-4">
            <img
              src="/Ellipse 35.svg"
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <button className="text-sm px-4 py-1.5 rounded-full bg-[#FFECEC] text-[#D1293D] border border-[#FFD3D8]">
            Suspend Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-6">
          <div className="flex gap-3">
            {["details", "investments", "transactions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize text-sm px-4 py-2 rounded-full border ${activeTab === tab
                  ? "bg-[#EAF9F5] text-[#00644C] border-[#00644C]"
                  : "text-gray-500 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "investments" && (
          <div className="space-y-6 px-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[24px]">
              <div className="bg-[#FAFAFA] rounded-md  p-[24px]  border h-[102px] border-[#E8E8E8] hover:shadow">
                <p className="text-gray-500 text-sm">No. of Investment</p>
                <h2 className="text-2xl font-bold text-gray-800">10</h2>
              </div>
              <div className="bg-[#FAFAFA] rounded-md p-[24px]  border border-[#E8E8E8] hover:shadow">
                <p className="text-gray-500 text-sm">Active Investment</p>
                <h2 className="text-2xl font-bold text-gray-800">8</h2>
              </div>
              <div className="bg-[#FAFAFA] rounded-md  p-[24px]  border border-[#E8E8E8] hover:shadow">
                <p className="text-gray-500 text-sm">Completed Investment</p>
                <h2 className="text-2xl font-bold text-gray-800">2</h2>
              </div>
              <div className="bg-[#FAFAFA] rounded-md  p-[24px]  border border-[#E8E8E8] hover:shadow">
                <p className="text-gray-500 text-sm">Roll-over Investment</p>
                <h2 className="text-2xl font-bold text-gray-800">4</h2>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-[#4A4A4A] text-xs ">
                  <tr>
                    <th className="px-4 py-3 font-medium text-[14px]">S/N</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Name</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Investment Type</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Unit Bought</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Amount(₦)</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Date</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Vested Date</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sn: "01", name: "Cocoa House", type: "Platinum", unit: 2, amount: "200,000.00", date: "29-12-2024", vested: "29-12-2024", status: "Active" },
                    { sn: "02", name: "Cocoa House", type: "Gold", unit: 2, amount: "50,000.00", date: "29-12-2024", vested: "29-12-2024", status: "Active" },
                    { sn: "03", name: "Cocoa House", type: "Diamond", unit: 2, amount: "10,000.00", date: "29-12-2024", vested: "29-12-2024", status: "Active" },
                    { sn: "04", name: "Cocoa House", type: "Diamond", unit: 2, amount: "10,000.00", date: "29-12-2024", vested: "29-12-2024", status: "Active" },
                  ].map((inv, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A] ">{inv.sn}</td>
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A] ">{inv.name}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium">
                          {inv.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A]">{inv.amount}</td>
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A]">{inv.unit}</td>
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A]">{inv.date}</td>
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A]">{inv.vested}</td>
                      <td className="px-4 py-3 font-medium text-[14px] text-[#4A4A4A]">
                        <span className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {activeTab === "transactions" && (
          <div className="space-y-6 px-6">

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-md p-6 border border-gray-200 hover:shadow">
                <p className="text-gray-500 text-[14px]">Amount Invested</p>
                <h2 className="text-2xl font-semibold text-gray-800">₦10,000,000.00</h2>
              </div>
              <div className="bg-white rounded-md p-6 border border-gray-200 hover:shadow">
                <p className="text-gray-500 text-[14px]">Total ROI</p>
                <h2 className="text-2xl font-semibold text-gray-800">₦3,800,000.00</h2>
              </div>
              <div className="bg-white rounded-md p-6 border border-gray-200 hover:shadow">
                <p className="text-gray-500 text-[14px]">Amount Withdrawn</p>
                <h2 className="text-2xl font-semibold text-gray-800">₦0.00</h2>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto bg-white rounded-lg  border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 text-xs">
                  <tr>
                    <th className="px-4 py-3 font-medium text-[14px]">Transaction ID</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Transaction Type</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Amount(₦)</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Description</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Date</th>
                    <th className="px-4 py-3 font-medium text-[14px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "687396776XD", type: "Investment", amount: "200,000.00", desc: "Money paid for investment", date: "29-12-2024", status: "Successful" },
                    { id: "687396776XD", type: "Withdrawal", amount: "200,000.00", desc: "ROI", date: "29-12-2024", status: "Successful" },
                    { id: "687396776XD", type: "Withdrawal", amount: "200,000.00", desc: "ROI", date: "29-12-2024", status: "Successful" },
                    { id: "687396776XD", type: "Withdrawal", amount: "200,000.00", desc: "ROI", date: "29-12-2024", status: "Successful" },
                  ].map((tx, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-[14px] text-gray-700">{tx.id}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${tx.type === "Investment"
                              ? "bg-purple-50 text-purple-600"
                              : "bg-red-50 text-red-600"
                            }`}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[14px] text-gray-700">{tx.amount}</td>
                      <td className="px-4 py-3 text-[14px] text-gray-700 truncate max-w-[200px]">{tx.desc}</td>
                      <td className="px-4 py-3 text-[14px] text-gray-700">{tx.date}</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}


        {/* Content */}
        <div className="px-6 py-8 text-sm">
          {activeTab === "details" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <p className="text-gray-500">Name</p>
                <p className="text-gray-900 font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Email address</p>
                <p className="text-gray-900 font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone number</p>
                <p className="text-gray-900 font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Date joined</p>
                <p className="text-gray-900 font-medium">{user.date}</p>
              </div>
              <div>
                <p className="text-gray-500">Verification Status</p>
                <p
                  className={`font-medium ${isVerified ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {isVerified ? "Verified" : "Not Verified"}
                </p>
              </div>

              {/* Bank Details */}
              <div className="col-span-full">
                <p className="text-gray-700 mb-2 font-medium">BANK DETAILS</p>
                {isVerified && user.bankDetails?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6">
                    {user.bankDetails.map((bank, idx) => (
                      <React.Fragment key={idx}>
                        <div>
                          <p className="text-gray-500">Bank name</p>
                          <p className="text-gray-900 font-medium">
                            {bank.bankName}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Account Number</p>
                          <p className="text-gray-900 font-medium">
                            {bank.accountNumber}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Account name</p>
                          <p className="text-gray-900 font-medium">
                            {bank.accountName}
                          </p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-32 rounded-md text-gray-400 text-sm">
                    <img src="/bank.svg" alt="bank icon" />
                    <p className="mt-1">No bank added!!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* {activeTab === "investments" && (
            <div className="text-center text-gray-500 py-16">
              No investments yet.
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="text-center text-gray-500 py-16">
              No transactions available.
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;