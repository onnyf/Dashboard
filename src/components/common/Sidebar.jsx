import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <img src="/grid-5 (1).svg" alt="Dashboard" className="w-5 h-5" />,
    },
    {
      label: "Investment",
      path: "/dashboard/investment",
      icon: <img src="/moneys.svg" alt="Investment" className="w-5 h-5" />,
    },
    {
      label: "Property",
      path: "/dashboard/properties",
      icon: <img src="/building-4.svg" alt="Property" className="w-5 h-5" />,
    },
    {
      label: "User",
      path: "/dashboard/user",
      icon: <HiMiniUserGroup className="text-lg" />,
    },
    {
      label: "Transactions",
      path: "/dashboard/transactions",
      icon: <img src="/box.svg" alt="Transactions" className="w-5 h-5" />,
    },
    {
      label: "Withdrawals",
      path: "/dashboard/withdrawals",
      icon: <img src="/wallet.svg" alt="Withdrawals" className="w-5 h-5" />,
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <IoSettingsOutline className="text-lg" />,
    },
  ];

  return (
    <div className="hidden md:flex flex-col fixed top-0 left-0 w-[268px] min-h-screen bg-[#003A2B] text-white px-5 py-6 z-30 shadow-md overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center justify-center mb-10">
        <img src="/Group.svg" alt="Caerus" className="h-6" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition ${
              location.pathname === item.path
                ? "bg-green-900 text-[#e8f0ee] font-semibold"
                : "hover:bg-[#014d3a] hover:text-white"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* CTA & Logout */}
      <div className="mt-10 space-y-4">
        <div className="border border-dashed border-[#91BBAE] p-3 rounded-md text-center cursor-pointer hover:bg-[#014d3a] transition text-sm w-[234px] h-[120px]">
          <FaPlusCircle className="mx-auto mb-6" size={20} />
          <span>Add a Property/Investment</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full border border-[#91BBAE] rounded-md py-2 text-sm hover:bg-[#014d3a] transition"
        >
          <FaSignOutAlt size={16} />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
