import React, { useEffect, useState, useRef } from "react";
import { GoBell } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dropdownRef = useRef();
  const notificationsRef = useRef();
  const mobileMenuRef = useRef();
  const navigate = useNavigate();

  // ✅ corrected paths to match your sidebar
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Investment", path: "/dashboard/investment" },
    { name: "Property", path: "/dashboard/properties" },
    { name: "Users", path: "/dashboard/user" },
    { name: "Transactions", path: "/dashboard/transactions" },
    { name: "Withdrawals", path: "/dashboard/withdrawals" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  const investmentOptions = [
    "Cocoa Land",
    "Emerald Estate",
    "Platinum Villa",
    "Sunset Court",
    "Diamond Residency",
    "Ocean View Heights",
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    if (storedName) setAdminName(storedName);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = investmentOptions.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchText]);

  const handleSelect = (value) => {
    setSearchText(value);
    setSearchResults([]);
  };

  const initials = adminName?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 lg:left-[240px] right-0 bg-white shadow-sm border-b border-gray-200 z-40 px-3 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-[#00644C] rounded-lg text-white"
        >
          <HiMenu className="text-xl" />
        </button>

        {/* Search Input */}
        <div className="flex-1 relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#D2D2D2] text-lg">
            <RiSearch2Line />
          </span>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for any member and properties"
            className="w-full h-[40px] sm:h-[44px] pl-10 pr-4 border border-gray-300 text-[#4A4A4A] rounded-full focus:outline-none text-sm"
          />

          {searchResults.length > 0 && (
            <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {searchResults.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Notification Bell */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#E8E8E8]"
            >
              <GoBell className="text-gray-700 text-lg sm:text-xl" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#920E0E] text-white text-[9px] sm:text-[10px] font-semibold px-[5px] sm:px-[6px] py-[1px] rounded-full">
                  {notificationCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute top-12 right-0 w-[300px] max-h-[500px] bg-white rounded-[20px] shadow-lg z-50 overflow-y-auto">
                <div className="w-full h-[70px] bg-[#FAFAFA] px-4 flex items-center justify-between rounded-t-[20px]">
                  <h2 className="text-base font-semibold">Notifications</h2>
                  <IoMdClose
                    className="text-xl cursor-pointer text-gray-500"
                    onClick={() => setShowNotifications(false)}
                  />
                </div>

                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="text-5xl text-[#DCA332]">
                    <GoBell />
                  </div>
                  <p className="mt-4 font-medium">No Notifications!</p>
                  <p className="text-[#8E8E8E] text-sm">
                    It is still empty here!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center border border-[#E8E8E8] rounded-lg px-2 sm:px-3 py-2 gap-1 hover:bg-gray-50 transition"
            >
              <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center text-white text-xs">
                {initials}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#000000] hidden sm:block">
                {adminName}
              </span>
              <MdOutlineKeyboardArrowDown className="text-gray-500 text-sm" />
            </button>

            {showDropdown && (
              <div className="absolute top-12 right-0 bg-white shadow-md border border-gray-200 rounded-md w-44 z-50">
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
                    onClick={() => {
                      handleLogout();
                      setShowDropdown(false);
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile + Tablet Dropdown Sidebar */}
      {showMobileMenu && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-[60px] left-0 w-full bg-[#00644C] shadow-md rounded-b-xl z-50"
        >
          <ul className="flex flex-col py-3">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setShowMobileMenu(false); // closes menu after navigation
                }}
                className="px-4 py-3 text-sm font-medium text-center text-white hover:bg-emerald-50 hover:text-[#00644C] cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;