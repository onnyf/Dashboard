// Sidebar.jsx
import React from 'react';
import {
  FaTachometerAlt,
  FaBriefcase,
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaWallet,
  FaCog,
  FaPlusCircle,
  FaSignOutAlt,
} from 'react-icons/fa';

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm cursor-pointer transition ${
      active ? 'bg-green-900 text-[#e8f0ee] font-semibold' : 'hover:bg-[#014d3a]'
    }`}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-[268px] h-screen bg-[#003A2B] text-white flex flex-col justify-between px-5 py-6 fixed top-0 left-0">
      <div>
        <div className="flex items-center space-x-2 mb-10 pl-1">
          <img src="/Group.svg" alt="Caerus" className="h-6 ml-12" />
        </div>

        <nav className="space-y-2">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" active />
          <SidebarItem icon={<FaBriefcase />} label="Investment" />
          <SidebarItem icon={<FaHome />} label="Property" />
          <SidebarItem icon={<FaUsers />} label="Users" />
          <SidebarItem icon={<FaShoppingCart />} label="Orders" />
          <SidebarItem icon={<FaWallet />} label="Withdrawals" />
          <SidebarItem icon={<FaCog />} label="Settings" />
        </nav>

        <div className="mt-10 border border-dashed border-[#91BBAE] p-3 rounded-md text-center cursor-pointer hover:bg-[#014d3a] transition text-sm">
          <FaPlusCircle className="mx-auto mb-1" size={20} />
          <span>Add a Property/Investment</span>
        </div>
      </div>

      <button className="mt-10 flex items-center justify-center gap-2 border border-[#91BBAE] rounded-md py-2 text-sm hover:bg-[#014d3a] transition">
        <FaSignOutAlt size={16} />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;