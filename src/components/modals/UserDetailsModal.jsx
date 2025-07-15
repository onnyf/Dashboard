import React, { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const UserDetailsModal = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");
  const isVerified = user.status === "Verified";

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>

            {/* Dynamic Status Badge */}
            {isVerified ? (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                Verified
              </span>
            ) : (
              <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-[#DE940B]">
                <FaClock className="text-[#DE940B]" />
                <span>Pending</span>
              </div>
            )}
          </div>

          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoClose size={22} />
          </button>
        </div>

        {/* Info Section */}
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
                className={`capitalize text-sm px-4 py-2 rounded-full border ${
                  activeTab === tab
                    ? "bg-[#EAF9F5] text-[#00644C] border-[#00644C]"
                    : "text-gray-500 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
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
                  className={`font-medium ${
                    isVerified ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isVerified ? "Verified" : "Not Verified"}
                </p>
              </div>

              {/* Bank Info */}
              <div className="col-span-full">
                <p className="text-gray-700 mb-2 font-medium">BANK DETAILS</p>
                {isVerified ? (
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                    <div>
                      <p className="text-gray-500">Bank</p>
                      <p className="font-medium">GTBank</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Account Number</p>
                      <p className="font-medium">0123456789</p>
                    </div>
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

          {activeTab === "investments" && (
            <div className="text-center text-gray-500 py-16">
              No investments yet.
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="text-center text-gray-500 py-16">
              No transactions available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
