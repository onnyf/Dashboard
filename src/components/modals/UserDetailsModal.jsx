import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";

const mockInvestments = [
  {
    id: "01",
    name: "Cocoa House",
    type: "Platinum",
    units: 2,
    amount: "200,000.00",
    date: "29-12-2024",
    vestedDate: "29-12-2024",
    status: "Active",
  },
  {
    id: "02",
    name: "Cocoa House",
    type: "Gold",
    units: 2,
    amount: "50,000.00",
    date: "29-12-2024",
    vestedDate: "29-12-2024",
    status: "Active",
  },
  {
    id: "03",
    name: "Cocoa House",
    type: "Diamond",
    units: 2,
    amount: "10,000.00",
    date: "29-12-2024",
    vestedDate: "29-12-2024",
    status: "Active",
  },
  {
    id: "04",
    name: "Cocoa House",
    type: "Diamond",
    units: 2,
    amount: "10,000.00",
    date: "29-12-2024",
    vestedDate: "29-12-2024",
    status: "Active",
  },
  {
    id: "05",
    name: "Cocoa House",
    type: "Diamond",
    units: 2,
    amount: "10,000.00",
    date: "29-12-2024",
    vestedDate: "29-12-2024",
    status: "Active",
  },
  {
    id: "06",
    name: "Cocoa House",
    type: "Diamond",
    units: 2,
    amount: "10,000.00",
    date: "29-12-2024",
    vestedDate: "29-12-2024",
    status: "Active",
  },
];

const UserDetailsModal = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState("Details");
  const isVerified = user.status === "Verified";

  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 overflow-y-auto py-10">
      <div className="w-[880px] max-w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-6 relative scrollbar-thin scrollbar-thumb-gray-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex px-8 py-4 bg-[#FAFAFA] pb-4">
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
              {user.status}
            </span>
          </div>
        </div>

        {/* Profile Info */}
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
          <div className="ml-auto mt-10">
            <button className="text-sm text-red-600 rounded-full h-[40px] w-[131px] hover:bg-red-50 bg-[#FF00001A]">
              Suspend Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-6">
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

        {/* Tab Content */}
        <div className="mt-8 text-sm px-2 pb-4">
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

              {/* BANK DETAILS */}
              <div className="mt-10">
                <p className="text-gray-500 text-sm font-medium mb-4">
                  BANK DETAILS
                </p>

                {isVerified ? (
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
                ) : (
                  <div className="text-center mt-4">
                    <img
                      src="/bank.svg"
                      alt="No bank"
                      className="mx-auto w-6 h-6 mb-2 opacity-50"
                    />
                    <p className="text-gray-400 text-sm">No bank added!!</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "Investments" && (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-gray-100 rounded-md  shadow">
                  <p className="text-sm text-gray-400">No. of Investment</p>
                  <h3 className="text-xl font-semibold">10</h3>
                </div>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p className="text-sm text-gray-400">Active Investment</p>
                  <h3 className="text-xl font-semibold">8</h3>
                </div>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p className="text-sm text-gray-400">Completed Investment</p>
                  <h3 className="text-xl font-semibold">2</h3>
                </div>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p className="text-sm text-gray-400">Roll-over Investment</p>
                  <h3 className="text-xl font-semibold">4</h3>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="text-gray-600 text-xs">
                    <tr>
                      <th className="py-2">S/N</th>
                      <th className="py-2">Name</th>
                      <th className="py-2">Investment Type</th>
                      <th className="py-2">Unit bought</th>
                      <th className="py-2">Amount(₦)</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Vested Date</th>
                      <th className="py-2 flex items-center gap-1">
                        Status <IoFilter className="text-gray-400" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockInvestments.map((item, idx) => (
                      <tr key={idx} className=" hover:bg-gray-50">
                        <td className="py-6">{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                            {item.type}
                          </span>
                        </td>
                        <td>{item.units}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                        <td>{item.vestedDate}</td>
                        <td>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
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

          {activeTab === "Transactions" && (
            <div className="text-center mt-10 text-gray-400 text-sm">
              No transactions available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
