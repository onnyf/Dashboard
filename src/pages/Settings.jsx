import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiEyeOff, FiEye } from 'react-icons/fi';
import { HiOutlineUser } from "react-icons/hi2";
import { PiKeyThin } from "react-icons/pi";

const Settings = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert('Password updated successfully!');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="absolute left-0 md:left-[282px] top-[68px] w-full md:w-[960px] bg-[#EEF2F1] p-4 md:p-6 rounded-lg overflow-y-auto min-h-screen">
      <h1 className="text-xl font-serif mb-6">Settings</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-[341px] h-fit lg:h-[432px] rounded-[24px] bg-white p-6 flex flex-col justify-between shadow">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <PiKeyThin className="text-[#2C3E50]" />
              <div>
                <p className="font-medium">Security</p>
                <p className="text-sm text-gray-500">Set your password</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
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

        {/* Password Form */}
        <div className="w-full lg:w-[700px] rounded-[16px] bg-white p-6 flex flex-col gap-6 shadow">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Password Setting</h2>
            <p className="text-sm text-gray-500">Reset your login Password</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
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
                  type={showConfirm ? 'text' : 'password'}
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
              disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
