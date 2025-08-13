import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { PiKeyThin } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("security");
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setNewPassword("");
    setConfirmPassword("");
  };

  const togglePermission = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  return (
    <div className="absolute left-0 md:left-[282px] top-[68px] w-full md:w-[1110px] bg-[#EEF2F1] p-4 md:p-6 rounded-lg overflow-y-auto min-h-screen">
      <h1 className="text-[400] font-semibold mb-6">Settings</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-[341px] h-fit lg:h-[432px] rounded-[24px] bg-white p-6 flex flex-col justify-between shadow">
          <div className="space-y-6">
            <div
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
                activeTab === "security" ? "bg-[#F5FCFB]" : ""
              }`}
              onClick={() => setActiveTab("security")}
            >
              <PiKeyThin className="text-[#2C3E50]" />
              <div>
                <p className="font-medium">Security</p>
                <p className="text-sm text-gray-500">Set your password</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
                activeTab === "admin" ? "bg-[#F5FCFB]" : ""
              }`}
              onClick={() => setActiveTab("admin")}
            >
              <HiOutlineUser className="text-[#2C3E50]" />
              <div>
                <p className="font-medium">Admin Management</p>
                <p className="text-sm text-gray-500">Manage all admins</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 mt-10 w-full py-3 rounded-full bg-[#FEECEC] text-[#B42318] font-medium text-sm hover:bg-red-100 transition"
          >
            <FiLogOut />
            Log Out
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[700px] rounded-[16px] bg-white p-6 shadow">
          {activeTab === "security" ? (
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Password Setting
                </h2>
                <p className="text-sm text-gray-500">
                  Reset your login Password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNew ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800 bg-gray-50"
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                      onClick={() => setShowNew(!showNew)}
                    >
                      {showNew ? <FiEye /> : <FiEyeOff />}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800 bg-gray-50"
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      {showConfirm ? <FiEye /> : <FiEyeOff />}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#00644c] text-white py-3 rounded-full font-semibold disabled:opacity-50"
                  disabled={
                    !newPassword ||
                    !confirmPassword ||
                    newPassword !== confirmPassword
                  }
                >
                  Update Password
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Admin Management</h2>
                <div className="flex gap-2">
                  <button
                    className="text-sm rounded-full px-4 py-1 text-gray-500 border"
                    onClick={() => setShowRoleModal(true)}
                  >
                    Role settings
                  </button>
                  <button className="text-sm bg-green-900 text-white rounded-full px-4 py-1">
                    Invite Admin
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 text-sm font-medium text-gray-500 bg-[#FAFBFB] rounded pb-2">
                <span>Name</span>
                <span>Role</span>
                <span>Date Added</span>
                <span>Status</span>
              </div>

              {[
                {
                  name: "Caerus",
                  role: "Superadmin",
                  date: "29-01-2024",
                  status: "Active",
                },
                {
                  name: "Kingsley",
                  role: "Member",
                  date: "29-01-2024",
                  status: "Active",
                },
                {
                  name: "Victor",
                  role: "Member",
                  date: "29-01-2024",
                  status: "Active",
                },
                {
                  name: "Chioma",
                  role: "Member",
                  date: "29-01-2024",
                  status: "Inactive",
                },
              ].map((admin, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 items-center py-2 text-sm"
                >
                  <span>{admin.name}</span>
                  <span>{admin.role}</span>
                  <span>{admin.date}</span>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        admin.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {admin.status}
                    </span>
                    <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showRoleModal && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div
            className="absolute bg-white shadow-lg overflow-y-auto"
            style={{
              width: "340px",
              height: "550px",
              top: "22px",
              left: "880px",
              borderRadius: "24px",
            }}
          >
            {/* Header */}
            <div className="w-[450px] h-[80px] bg-[#FAFAFA] px-4 flex items-center justify-between rounded-t-[24px]">
              <h2 className="text-lg font-semibold">Role Settings</h2>
              <IoClose
                className="text-xl text-gray-500 cursor-pointer"
                onClick={() => setShowRoleModal(false)}
              />
            </div>

            {/* Description */}
            <div className="px-6 pt-4">
              <p className="text-sm text-gray-700 mb-4">
                Admin member should be able to
              </p>

              {/* Permissions */}
              <div className="space-y-4 text-sm text-gray-800">
                {[
                  "Create a Property",
                  "Create an Investment",
                  "Edit/delete/modify an investment",
                  "Edit/delete/modify a Property",
                  "View a User details",
                ].map((perm, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-green-600"
                      checked={permissions.includes(perm)}
                      onChange={() => togglePermission(perm)}
                    />
                    {perm}
                  </label>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => {
                  alert("Permissions updated!");
                  setShowRoleModal(false);
                }}
                className="mt-46 w-full bg-green-900 text-white py-3 rounded-full font-semibold"
              >
                Update Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
