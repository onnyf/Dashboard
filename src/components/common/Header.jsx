import React, { useEffect, useState, useRef } from "react";
import { GoBell } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef();
  const notificationsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    if (storedName) setAdminName(storedName);

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }

      if (
        notificationsRef.current && !notificationsRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = adminName?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 md:left-[268px] right-0 flex items-center justify-between px-4 md:px-6 py-3 bg-white shadow-sm border-b border-gray-200 h-[72px] z-40">
      {/* Search Input */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
            <RiSearch2Line />
          </span>
          <input
            type="text"
            placeholder="Search for any member and properties"
            className="w-full h-[44px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4 md:space-x-6 ml-4 relative">
        {/* Notification Bell */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 hover:bg-gray-100"
        >
          <GoBell className="text-gray-700 text-xl" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div
            ref={notificationsRef}
            className="absolute top-14 right-8 w-[380px] h-[500px] bg-white  rounded-[24px] shadow-lg z-50 overflow-y-auto"
          >
            <div className="w-full h-[80px] bg-[#FAFAFA] px-6 flex items-center justify-between rounded-t-[24px]">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <IoMdClose
                className="text-2xl cursor-pointer text-gray-500"
                onClick={() => setShowNotifications(false)}
              />
            </div>

            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl text-yellow-600">
                <GoBell />
              </div>
              <p className="mt-4 font-medium">No Notifications!</p>
              <p className="text-gray-400 text-sm">It is still empty here!</p>
            </div>
          </div>
        )}

        {/* Profile Dropdown Trigger */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2 hover:bg-gray-50 transition"
          >
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-sm">
              {initials}
            </div>
            <span className="text-sm font-medium text-gray-800 hidden sm:block">
              {adminName}
            </span>
            <MdOutlineKeyboardArrowDown className="text-gray-500" />
          </button>

          {showDropdown && (
            <div className="absolute top-[60px] right-0 bg-white shadow-md border rounded-md w-48 z-50">
              <ul className="text-sm text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate("/dashboard/settings");
                    setShowDropdown(false);
                  }}
                >
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
