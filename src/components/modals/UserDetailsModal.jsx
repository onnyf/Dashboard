import React, { useState } from "react";
import { FaUniversity } from "react-icons/fa";

const UserDetailsModal = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState("Details");

  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 mt-6">
      <div className="w-[880px] max-w-full bg-white rounded-2xl shadow-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        {/* Top Header */}
        <div className="flex px-8 py-4 w-full top-8 bg-[#FAFAFA] pb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1 bg-[#F7F1E5] text-[#DE940B]">
              <span className="w-2 h-2 rounded-full bg-[#DE940B] inline-block" />
              Pending
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex gap-4">
          <img
            src="/Ellipse 35.svg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mt-6"
          />
          <div className="mt-10">
            <p className="font-medium text-lg">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <div className="relative left-[460px] top-[35px]">
            <button className="text-sm text-[#B30000] rounded-full h-[40px] w-[131px] hover:bg-red-50 bg-[#FF00001A]">
              Suspend Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col mt-6">
          <div className="flex gap-2 flex-wrap mt-4">
            {["Details", "Investments", "Transactions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm px-4 py-1.5 border rounded-full transition ${
                  activeTab === tab
                    ? "bg-[#E6F4F1] text-[#00644C] border-[#00644C]"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 text-sm px-2">
          {activeTab === "Details" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#8E8E8E]">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-[#8E8E8E]">Email address</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-[#8E8E8E]">Phone number</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
                <div>
                  <p className="text-[#8E8E8E]">Date joined</p>
                  <p className="font-medium">{user.date}</p>
                </div>
                <div>
                  <p className="text-[#8E8E8E]">Verification Status</p>
                  <p className="font-medium text-[#B30000]">Not Verified</p>
                </div>
              </div>

              {/* Bank Details - Empty State */}
              <div className="mt-10">
                <p className="text-[#000000] text-sm font-medium mb-4">
                  BANK DETAILS
                </p>
                <div className="flex flex-col items-center justify-center text-[#8E8E8E] mt-10 mb-6">
                  <FaUniversity className="text-xl mb-2" />
                  <p>No bank added!!</p>
                </div>
              </div>
            </>
          )}

          {activeTab === "Investments" && (
            <div className="text-center mt-10 text-[#8E8E8E] text-sm">
              No investments available.
            </div>
          )}

          {activeTab === "Transactions" && (
            <div className="text-center mt-10 text-[#8E8E8E] text-sm">
              No transactions available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
