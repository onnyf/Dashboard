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
  const [notificationCount, setNotificationCount] = useState(3);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef();
  const notificationsRef = useRef();
  const navigate = useNavigate();

  // Sample investment options
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
      if (notificationsRef.current && !notificationsRef.current.contains(e.target)) {
        setShowNotifications(false);
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
    // Optional: navigate(`/investment/${value}`); if routing is needed
  };

  const initials = adminName?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 md:left-[268px] right-0 flex items-center justify-between px-4 md:px-6 py-3 bg-white shadow-sm border-b border-gray-200 h-[72px] z-40">
      {/* Search Input with Dropdown */}
      <div className="flex-1 max-w-md relative">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#D2D2D2] text-lg">
            <RiSearch2Line />
          </span>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for any member and properties"
            className="w-full h-[44px] pl-10 pr-4 py-2 border border-gray-300 text-[#4A4A4A] rounded-full focus:outline-none text-sm"
          />
        </div>

        {/* Search Suggestions Dropdown */}
        {searchResults.length > 0 && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
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
      <div className="flex items-center space-x-4 md:space-x-6 ml-4 relative">
        {/* Notification Bell */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-[#E8E8E8]"
        >
          <GoBell className="text-gray-700 text-xl" />
          {notificationCount > 0 && (
            <span className="absolute -top-0 -right-0 bg-[#920E0E] text-white text-[10px] font-semibold px-[6px] py-[1px] rounded-full mb-2">
              {notificationCount}
            </span>
          )}
        </button>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div
            ref={notificationsRef}
            className="absolute top-14 right-8 w-[380px] h-[500px] bg-white rounded-[24px] shadow-lg z-50 overflow-y-auto"
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
            className="flex items-center border border-[#E8E8E8] rounded-lg px-3 py-2 gap-2 hover:bg-gray-50 transition"
          >
            <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center text-white text-sm">
              {initials}
            </div>
            <span className="text-sm font-medium text-[#000000] hidden sm:block">
              {adminName}
            </span>
            <MdOutlineKeyboardArrowDown className="text-gray-500" />
          </button>

          {showDropdown && (
            <div className="absolute top-[60px] right-0 bg-white shadow-md border-[#E8E8E8] rounded-md w-48 z-50">
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
