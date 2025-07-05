// Sidebar.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(null);

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
      label: "Users",
      path: "/dashboard/users",
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setShowForm(null);
  };

  return (
    <>
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
                  ? "bg-[#014d3a] text-[#e8f0ee] font-semibold"
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
          <div
            onClick={() => setShowModal(true)}
            className="border border-dashed border-[#91BBAE] p-3 rounded-md text-center cursor-pointer hover:bg-[#014d3a] transition text-sm w-[234px] h-[120px]"
          >
            <img
              src="/Properties (1).svg"
              alt=""
              className="mx-auto py-2 mt-4 "
            />
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

      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)} // clicking backdrop closes modal
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-lg w-[360px] relative"
            onClick={(e) => e.stopPropagation()} // clicking inside modal won't close
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-md"
            >
              <IoMdClose size={20} className="text-gray-500 hover:text-black" />
            </button>

            <h3 className="text-sm font-semibold mb-6 ">
              What would you like to add?
            </h3>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowForm("property");
                  setShowModal(false);
                }}
                className="flex flex-col items-center gap-2 border rounded-lg p-4 hover:shadow-md transition w-50"
              >
                <img src="/Apartment.svg" alt="Apartment" className="w-8 h-8" />
                <span className="text-sm whitespace-nowrap">
                  Add an Investment
                </span>
              </button>

              <button
                onClick={() => {
                  setShowForm("investment");
                  setShowModal(false);
                }}
                className="flex flex-col items-center gap-2 border rounded-lg p-4 hover:shadow-md transition w-50"
              >
                <img
                  src="/Investment.svg"
                  alt="Investment"
                  className="w-8 h-8"
                />
                <span className="text-sm">Add Investment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex justify-end items-start pt-20 pr-10"
          onClick={() => setShowForm(null)} // backdrop click closes modal
        >
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-[360px] rounded-xl p-6 relative bottom-14 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // prevents click inside form from closing modal
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                {showForm === "property" ? "Add Property" : "Add Investment"}
              </h2>
              <button
                type="button"
                onClick={() => setShowForm(null)}
                className="text-gray-500 hover:text-black"
              >
                <IoMdClose size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-sm">Name</label>
              <input
                type="text"
                placeholder="Cocoa Land"
                className="border rounded-md p-2 text-sm"
                required
              />

              <label className="text-sm">Property type</label>
              <select className="border rounded-md p-2 text-sm" required>
                <option value="">Select an option</option>
                <option value="apartment">Apartment</option>
                <option value="bungalow">Bungalow</option>
              </select>

              <label className="text-sm">Property location</label>
              <select className="border rounded-md p-2 text-sm" required>
                <option value="">Select a State</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
              </select>

              <label className="text-sm">Description</label>
              <textarea
                placeholder="Write about Property"
                className="border rounded-md p-2 text-sm"
                rows={3}
                required
              ></textarea>

              <label className="text-sm">Amount</label>
              <input
                type="number"
                placeholder="₦0.00"
                className="border rounded-md p-2 text-sm"
                required
              />

              <label className="text-sm">Features</label>
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" /> Kitchen
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" /> Swimming pool
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" /> Car park
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00644C] text-white py-2 rounded-full hover:bg-green-800 mt-4"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Sidebar;
