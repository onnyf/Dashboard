import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

const InviteAdminModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Member",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending invite:", form);
    onClose(); // Close modal after action
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
      <div className="bg-white w-full max-w-md h-full shadow-lg p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Invite an Admin</h2>
          <button onClick={onClose}>
            <MdClose size={24} className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">Invite an admin to your Dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600 block mb-1">Name (Optional)</label>
            <input
              name="name"
              type="text"
              placeholder="Kingsley Alhaj"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="text-sm text-gray-600 block mb-1">Email address</label>
            <input
              name="email"
              type="email"
              placeholder="alhaj@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <FiEyeOff className="absolute right-3 top-[38px] text-gray-400" />
          </div>

          {/* Role */}
          <div className="relative">
            <label className="text-sm text-gray-600 block mb-1">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            >
              <option>Member</option>
              <option>Admin</option>
              <option>Editor</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-3 top-[38px] text-gray-400 pointer-events-none" />
          </div>

          {/* Send Invite */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-full text-sm font-medium hover:bg-green-900 transition"
          >
            Send Invite!
          </button>
        </form>
      </div>
    </div>
  );
};

export default InviteAdminModal;
