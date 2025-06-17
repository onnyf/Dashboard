import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaPlusCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiMiniUserGroup } from 'react-icons/hi2';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication (example: localStorage)
    localStorage.removeItem('token'); // or sessionStorage.clear()

    // Redirect to login page
    navigate('/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/', icon: <img src="/grid-5 (1).svg" alt="Dashboard" className="w-5 h-5" /> },
    { label: 'Investment', path: '/investment', icon: <img src="/moneys.svg" alt="Investment" className="w-5 h-5" /> },
    { label: 'Property', path: '/properties', icon: <img src="/building-4.svg" alt="Property" className="w-5 h-5" /> },
    { label: 'User', path: '/user', icon: <HiMiniUserGroup className="text-lg" /> },
    { label: 'Transactions', path: '/transactions', icon: <img src="/box.svg" alt="Transactions" className="w-5 h-5" /> },
    { label: 'Withdrawals', path: '/withdrawals', icon: <img src="/wallet.svg" alt="Withdrawals" className="w-5 h-5" /> },
    { label: 'Settings', path: '/settings', icon: <IoSettingsOutline className="text-lg" /> },
  ];

  return (
    <div className="w-[268px] h-screen bg-[#003A2B] text-white flex flex-col justify-between px-5 py-6 fixed top-0 left-0">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-10 pl-1">
          <img src="/Group.svg" alt="Caerus" className="h-6 ml-12" />
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm cursor-pointer transition ${
                  location.pathname === item.path
                    ? 'bg-green-900 text-[#e8f0ee] font-semibold'
                    : 'hover:bg-[#014d3a]'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-10 border border-dashed border-[#91BBAE] p-3 rounded-md text-center cursor-pointer hover:bg-[#014d3a] transition text-sm w-[234px] h-[120px]">
          <FaPlusCircle className="mx-auto mb-6" size={20} />
          <span>Add a Property/Investment</span>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-10 flex items-center justify-center gap-2 border border-[#91BBAE] rounded-md py-2 text-sm hover:bg-[#014d3a] transition"
      >
        <FaSignOutAlt size={16} />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
