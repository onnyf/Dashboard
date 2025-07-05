// UserDetailsModal.js
import React, { useState, useEffect, useRef } from "react";

const UserDetailsModal = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState("Details");
  const isVerified = user.status === "Verified";
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div
        ref={modalRef}
        className="w-[880px] max-h-[90vh] max-w-full bg-white rounded-2xl shadow-xl p-6 relative overflow-y-auto"
      >
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
            <span
              className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                isVerified
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isVerified ? "bg-green-500" : "bg-yellow-500"
                } inline-block`}
              />
              {isVerified ? "Verified" : "Pending"}
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
            <button className="text-sm text-red-600 rounded-full h-[40px] w-[131px] hover:bg-red-50 bg-[#FF00001A]">
              Suspend Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col mt-6">
          <div className="flex gap-2 flex-wrap mt-4">
            {["Details", "Investment", "Transactions"].map((tab) => (
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
          <div className="max-w-4xl mx-auto">
            {activeTab === "Details" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400">Name</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Email address</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone number</p>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Date joined</p>
                    <p className="font-medium">{user.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Verification Status</p>
                    <p
                      className={`font-medium ${
                        isVerified ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isVerified ? "Verified" : "Not Verified"}
                    </p>
                  </div>
                </div>

                {isVerified ? (
                  <div className="mt-10">
                    <p className="text-gray-500 text-sm font-medium mb-4">
                      BANK DETAILS
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {[0, 1].map((_, idx) => (
                        <React.Fragment key={idx}>
                          <div>
                            <p className="text-gray-400">Bank name</p>
                            <p className="font-medium">Wema</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Account Number</p>
                            <p className="font-medium">89804067759</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Account name</p>
                            <p className="font-medium">{user.name}</p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center mt-10">
                    <img
                      src="/bank.svg"
                      alt="No bank"
                      className="mx-auto w-6 h-6 mb-2 opacity-50"
                    />
                    <p className="text-gray-400 text-sm">No bank added!!</p>
                  </div>
                )}
              </>
            )}

            {activeTab === "Investment" && (
              <div className="mt-6 ml-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="border rounded-lg py-3">
                    <p className="text-gray-400 text-sm ml-3">
                      No. of Investment
                    </p>
                    <p className="font-bold text-lg ml-3">10</p>
                  </div>
                  <div className="border rounded-lg py-3">
                    <p className="text-gray-400 text-sm ml-3">
                      Active Investment
                    </p>
                    <p className="font-bold text-lg ml-3">8</p>
                  </div>
                  <div className="border rounded-lg py-3">
                    <p className="text-gray-400 text-sm ml-3">
                      Completed Investment
                    </p>
                    <p className="font-bold text-lg ml-3">2</p>
                  </div>
                  <div className="border rounded-lg py-3">
                    <p className="text-gray-400 text-sm ml-3">
                      Roll-over Investment
                    </p>
                    <p className="font-bold text-lg ml-3">4</p>
                  </div>
                </div>

                <table className="w-full text-left mt-6">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3">S/N</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Investment Type</th>
                      <th className="p-3">Unit bought</th>
                      <th className="p-3">Amount(₦)</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Vested Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Platinum", "Gold", "Diamond", "Diamond", "Platinum"].map(
                      (type, idx) => (
                        <tr key={idx}>
                          <td className="p-3">0{idx + 1}</td>
                          <td className="p-3">Cocoa House</td>
                          <td className="p-3">
                            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                              {type}
                            </span>
                          </td>
                          <td className="p-3">2</td>
                          <td className="p-3">
                            {[200000, 50000, 10000, 10000, 200000][
                              idx
                            ].toLocaleString()}
                          </td>
                          <td className="p-3">29-12-2024</td>
                          <td className="p-3">29-12-2024</td>
                          <td className="p-3">
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              Active
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "Transactions" && (
              <div className="overflow-x-auto mt-6">
                <div className="flex justify-between mb-4">
                  <div className="bg-white shadow rounded-lg p-4 w-1/3">
                    <p className="text-sm text-gray-500">Amount Invested</p>
                    <p className="text-xl font-semibold">₦10,000,000.00</p>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 w-1/3">
                    <p className="text-sm text-gray-500">Total ROI</p>
                    <p className="text-xl font-semibold">₦3,800,000.00</p>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 w-1/3">
                    <p className="text-sm text-gray-500">Amount Withdrawn</p>
                    <p className="text-xl font-semibold">₦0.00</p>
                  </div>
                </div>
                <table className="w-full text-left mt-4">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3">Transaction ID</th>
                      <th className="p-3">Transaction Type</th>
                      <th className="p-3">Amount(₦)</th>
                      <th className="p-3">Description</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((_, idx) => (
                      <tr key={idx}>
                        <td className="p-3">687396776XD</td>
                        <td className="p-3">
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                            {idx === 0 ? "Investment" : "Withdrawal"}
                          </span>
                        </td>
                        <td className="p-3">200,000.00</td>
                        <td className="p-3">
                          {idx === 0 ? "Money paid for investment" : "ROI"}
                        </td>
                        <td className="p-3">29-12-2024</td>
                        <td className="p-3">
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                            Successful
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
