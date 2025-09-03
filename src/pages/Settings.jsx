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

  // Invite admin modal
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

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

  const handleInvite = () => {
    if (!inviteEmail) {
      alert("Please enter an email!");
      return;
    }

    fetch("/api/admins/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: inviteEmail }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Admin invited successfully!");
        setInviteEmail("");
        setShowInviteModal(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to invite admin");
      });
  };

  return (
    <div className="w-full max-w-5xl bg-[#EEF2F1] p-4 md:p-6 rounded min-h-screen lg:absolute left-[230px]">
      <h1 className="text-2xl font-semibold text-[#4A4A4A] md:mb-14 ">Settings</h1>

      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 h-fit rounded-2xl bg-white p-6 flex flex-col justify-between shadow-md">
          <div className="space-y-4">
            <div
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${activeTab === "security"
                ? "bg-[#E6F8F6] text-[#00644C]"
                : "hover:bg-gray-100"
                }`}
              onClick={() => setActiveTab("security")}
            >
              <PiKeyThin className="text-lg" />
              <div>
                <p className="font-medium">Security</p>
                <p className="text-xs text-[#8E8E8E]">Set your password</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${activeTab === "admin"
                ? "bg-[#E6F8F6] text-[#00644C]"
                : "hover:bg-gray-100"
                }`}
              onClick={() => setActiveTab("admin")}
            >
              <HiOutlineUser className="text-lg" />
              <div>
                <p className="font-medium">Admin Management</p>
                <p className="text-xs text-[#8E8E8E]">Manage all admins</p>
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
        <div className="w-full lg:w-[600px]  rounded-2xl bg-white p-6 shadow-md">
          {activeTab === "security" ? (
            // Security tab
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Password Setting
                </h2>
                <p className="text-sm text-[#8E8E8E]">
                  Reset your login password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#777777] mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNew ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 bg-gray-50"
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A4A4A4] cursor-pointer"
                      onClick={() => setShowNew(!showNew)}
                    >
                      {showNew ? <FiEye /> : <FiEyeOff />}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#777777] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 bg-gray-50"
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A4A4A4] cursor-pointer"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      {showConfirm ? <FiEye /> : <FiEyeOff />}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#00644C] text-white py-3 rounded-full font-semibold hover:bg-[#00513d] transition disabled:opacity-50"
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
            // Admin management tab
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-3">
                <h2 className="text-lg text-[#000000] font-semibold">
                  Admin Management
                </h2>
                <div className="flex gap-2">
                  <button
                    className="text-sm rounded-full px-4 py-2 text-[#4A4A4A] bg-[#F5F5F5] border hover:bg-gray-100"
                    onClick={() => setShowRoleModal(true)}
                  >
                    Role Settings
                  </button>
                  <button
                    className="text-sm bg-[#00644C] text-white rounded-full px-4 py-2 hover:bg-[#00513d]"
                    onClick={() => setShowInviteModal(true)}
                  >
                    Invite Admin
                  </button>
                </div>
              </div>

              {/* Admin list */}
              <div className="w-full">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-4 text-sm font-medium text-[#4A4A4A] bg-[#FAFBFB] rounded-md px-3 py-2">
                  <span>Name</span>
                  <span>Role</span>
                  <span>Date Added</span>
                  <span>Status</span>
                </div>

                {/* Admin Rows */}
                {[
                  { name: "Caerus", role: "Superadmin", date: "29-01-2024", status: "Active" },
                  { name: "Kingsley", role: "Member", date: "29-01-2024", status: "Active" },
                  { name: "Victor", role: "Member", date: "29-01-2024", status: "Active" },
                  { name: "Chioma", role: "Member", date: "29-01-2024", status: "Inactive" },
                ].map((admin, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center px-3 py-3 text-sm gap-2"
                  >
                    <span className="font-medium">{admin.name}</span>
                    <span>{admin.role}</span>
                    <span className="text-gray-600">{admin.date}</span>
                    <div className="flex items-center justify-between md:justify-start gap-2">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${admin.status === "Active"
                            ? "bg-[#ECFFEC] text-[#008000]"
                            : "bg-[#FAFAFA] text-[#606060]"
                          }`}
                      >
                        {admin.status}
                      </span>
                      <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          )}
        </div>
      </div>

      {/* Role Settings Modal */}
      {showRoleModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
          <div
            className="bg-white shadow-lg overflow-y-auto rounded-2xl w-[90%] max-w-sm h-[550px]"
          >
            {/* Header */}
            <div className="w-full h-[70px] bg-[#FAFAFA] px-4 flex items-center justify-between rounded-t-2xl border-b">
              <h2 className="text-lg font-semibold">Role Settings</h2>
              <IoClose
                className="text-xl text-gray-500 cursor-pointer"
                onClick={() => setShowRoleModal(false)}
              />
            </div>

            {/* Permissions */}
            <div className="px-6 pt-4">
              <p className="text-sm text-gray-700 mb-4">
                Admin member should be able to:
              </p>
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
              <button
                onClick={() => {
                  alert("Permissions updated!");
                  setShowRoleModal(false);
                }}
                className="mt-12 w-full bg-green-800 text-white py-3 rounded-full font-semibold hover:bg-green-900"
              >
                Update Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invite Admin Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4  pb-2">
              <h2 className="text-lg text-[#000000] font-semibold">
                Invite Admin
              </h2>
              <IoClose
                className="text-xl text-[#4A4A4A] cursor-pointer"
                onClick={() => setShowInviteModal(false)}
              />
            </div>

            <input
              type="email"
              placeholder="Enter admin email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className="w-full border px-4 py-3 rounded-lg mb-4 outline-none text-sm text-gray-700"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => setShowInviteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#00644C] text-white rounded-lg hover:bg-[#00513d]"
                onClick={handleInvite}
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;