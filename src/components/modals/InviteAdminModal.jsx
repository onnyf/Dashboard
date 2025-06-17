import React from "react";
import { FiEyeOff } from "react-icons/fi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

const InviteAdminModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
      <div className="bg-white w-full max-w-md h-full shadow-lg p-6 overflow-y-auto">
        {/* Close button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Invite an Admin</h2>
          <button onClick={onClose}>
            <MdClose size={24} className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">Invite an admin to your Dashboard</p>

        {/* Name Field */}
        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">Name (Optional)</label>
          <input
            type="text"
            placeholder="Kingsley Alhaj"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4 relative">
          <label className="text-sm text-gray-600 block mb-1">Email address</label>
          <input
            type="email"
            placeholder="alhaj@gmail.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <FiEyeOff className="absolute right-3 top-9 text-gray-400" />
        </div>

        {/* Role Dropdown */}
        <div className="mb-6 relative">
          <label className="text-sm text-gray-600 block mb-1">Role</label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none text-sm focus:outline-none focus:ring-1 focus:ring-green-600">
            <option>Member</option>
            <option>Admin</option>
            <option>Editor</option>
          </select>
          <MdKeyboardArrowDown className="absolute right-3 top-9 text-gray-400 pointer-events-none" />
        </div>

        {/* Send Invite Button */}
        <button className="w-full bg-green-800 text-white py-2 rounded-full text-sm font-medium hover:bg-green-900 transition">
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default InviteAdminModal;
