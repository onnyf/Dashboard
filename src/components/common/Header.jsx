// Header.jsx
import React from "react";
import { GoBell } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed top-0 left-[268px] right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-200 h-[72px]">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
            <RiSearch2Line />
          </span>
          <input
            type="text"
            placeholder="Search for any member and properties"
            className="w-[341px] h-[44px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6 ml-4">
        <button className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 hover:bg-gray-100">
          <GoBell className="text-gray-700 text-xl" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm">
            A
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg w-[113px] h-[40px] px-3 py-2 gap-2">
            <div className="text-sm font-medium text-gray-800">Admin</div>
            <MdOutlineKeyboardArrowDown className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;