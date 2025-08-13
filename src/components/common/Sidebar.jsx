// Sidebar.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbArrowRightToArc } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    description: "",
    valuation: "",
    projected: "",
    platinum: "",
    platinumROI: "",
    diamond: "",
    diamondROI: "",
    gold: "",
    goldROI: "",
    rollOver: false,
    image: null,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

 const handleSubmit = (e) => {
  e.preventDefault(); // ⛔ Prevent form from submitting

  if (step < 3) {x1
    setStep(step + 1); // move to the next step
  } else {
    handleAddProperty(); // submit data
  }
};




  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: <img src="/grid-5 (1).svg" className="w-5 h-5" alt="" /> },
    { label: "Investment", path: "/dashboard/investment", icon: <img src="/moneys.svg" className="w-5 h-5" alt="" /> },
    { label: "Property", path: "/dashboard/properties", icon: <img src="/building-4.svg" className="w-5 h-5" alt="" /> },
    { label: "Users", path: "/dashboard/user", icon: <HiMiniUserGroup className="text-lg" /> },
    { label: "Transactions", path: "/dashboard/transactions", icon: <img src="/box.svg" className="w-5 h-5" alt="" /> },
    { label: "Withdrawals", path: "/dashboard/withdrawals", icon: <img src="/wallet.svg" className="w-5 h-5" alt="" /> },
    { label: "Settings", path: "/dashboard/settings", icon: <IoSettingsOutline className="text-lg" /> },
  ];

  return (
    <>
      {/* Sidebar content */}
      <div className={`fixed top-0 left-0 w-[268px] min-h-screen bg-[#003A2B] text-white px-5 py-6 z-50 shadow-md overflow-y-auto transform transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between mb-10">
          <img src="/Group.svg" alt="Caerus" className="h-6" />
          <button className="md:hidden" onClick={toggleSidebar}>
            <IoMdClose className="text-white text-xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition ${location.pathname === item.path ? "bg-[#014d3a] text-[#e8f0ee] font-semibold" : "hover:bg-[#014d3a] hover:text-white"}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-10 space-y-4">
          <div onClick={() => setShowModal(true)} className="border border-dashed border-[#91BBAE] p-3 rounded-md text-center cursor-pointer hover:bg-[#014d3a] transition text-sm">
            <img src="/Properties (1).svg" alt="" className="mx-auto py-2 mt-4" />
            <span>Add a Property/Investment</span>
          </div>

          <button onClick={handleLogout} className="flex items-center justify-center text-[#FFCDCD] gap-2 w-full border border-[#FFFFFF] rounded-md py-4 text-sm hover:bg-[#014d3a] transition">
            <TbArrowRightToArc size={16} />
            Log Out
          </button>
        </div>
      </div>

      {/* Mobile toggle */}
      <button className="fixed top-4 left-4 z-50 p-2 bg-[#00644C] text-white rounded-md shadow-md md:hidden" onClick={toggleSidebar}>
        <FiMenu size={22} />
      </button>

      {/* Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setShowModal(false)}>
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[373px] h-[205px] relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute -top-5 -right-7 bg-white rounded-full p-1 shadow-md">
              <IoMdClose size={20} className="text-gray-500 hover:text-black" />
            </button>
            <h3 className="text-sm text-[#212121] font-medium mt-1">What would you like to add?</h3>
            <div className="flex justify-center gap-4 mt-9">
              <button
                onClick={() => {
                  setShowForm("property");
                  setShowModal(false);
                }}
                className="flex flex-col items-center gap-2 border border-[#d7d7d7] rounded-lg w-[152px] h-[97px] p-4 hover:shadow-sm transition"
              >
                <img src="/Apartment.svg" alt="Apartment" className="w-8 h-8" />
                <span className="text-sm whitespace-nowrap pt-1 text-[#606060]">Add an Investment</span>
              </button>

              <button
                onClick={() => {
                  setShowForm("investment");
                  setShowModal(false);
                }}
                className="flex flex-col items-center gap-2 border border-[#d7d7d7] rounded-lg w-[152px] h-[97px] p-4 hover:shadow-sm transition"
              >
                <img src="/Investment.svg" alt="Investment" className="w-8 h-8" />
                <span className="text-sm text-[#606060] p-1">Add Investment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex justify-end items-start pt-4 pr-10"
          onClick={() => setShowForm(null)}
        >
          <div
            className="bg-white w-[400px] h-[760px] rounded-xl overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#f6f6f6] rounded-t-xl">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-sm font-medium text-[#4A4A4A]">Add an Investment Property</h2>
              </div>
              <p className="text-xs font-semibold text-[#00644C]">STEP {step} OF 3</p>
            </div>

            {/* Form */}
            <div className="px-5 pt-6 pb-4">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <p className="text-xs font-semibold text-[#4A4A4A] ">A. Property Description</p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Name</label>
                        <input
                          name="name"
                          placeholder="Cocoa Land"
                          className="w-full border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Property type</label>
                        <select
                          name="type"
                          className="w-full border border-[#E0E0E0] rounded-md p-2.5 text-sm text-gray-500 focus:outline-1 focus:outline-emerald-700"
                          value={formData.type}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="apartment">Apartment</option>
                          <option value="bungalow">Bungalow</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Property location</label>
                        <select
                          name="location"
                          className="w-full border border-[#E0E0E0] rounded-md p-2.5 text-sm text-gray-500 focus:outline-1 focus:outline-emerald-700"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a State</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Description</label>
                        <textarea
                          name="description"
                          rows="3"
                          placeholder="Write about Property"
                          className="w-full border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <p className="text-xs font-semibold text-[#4A4A4A]">B. Property Valuation</p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Total Valuation</label>
                        <input
                          name="valuation"
                          type="number"
                          placeholder="₦0.00"
                          className="w-full border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.valuation}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Projected Valuation (%)</label>
                        <input
                          name="projected"
                          type="number"
                          placeholder="%"
                          className="w-full border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.projected}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <p className="text-xs font-semibold text-[#4A4A4A] mt-4">Investment Settings</p>

                      <div className="text-xs flex gap-[60px] text-gray-500 mb-2">
                        <p>Platinum investment</p>
                        <p>ROI</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          name="platinum"
                          placeholder="₦100,000.00"
                          className="border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.platinum}
                          onChange={handleChange}
                        />
                        <input
                          name="platinumROI"
                          placeholder="3%"
                          className="border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.platinumROI}
                          onChange={handleChange}
                        />

                        <input
                          name="diamond"
                          placeholder="₦100,000.00"
                          className="border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.diamond}
                          onChange={handleChange}
                        />
                        <input
                          name="diamondROI"
                          placeholder="5%"
                          className="border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.diamondROI}
                          onChange={handleChange}
                        />

                        <input
                          name="gold"
                          placeholder="₦50,000.00"
                          className="border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700 "
                          value={formData.gold}
                          onChange={handleChange}
                        />
                        <input
                          name="goldROI"
                          placeholder="2%"
                          className="border border-[#E0E0E0] rounded-md p-2.5 text-sm focus:outline-1 focus:outline-emerald-700"
                          value={formData.goldROI}
                          onChange={handleChange}
                        />
                      </div>

                      <label className="flex items-center gap-3 mt-3 text-sm text-[#4A4A4A]">
                        <input
                          type="checkbox"
                          name="rollOver"
                          checked={formData.rollOver}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        Enable Roll Over Option
                      </label>
                    </div>
                  </>
                )}
                {/* STEP 3 */}
                {step === 3 && (
                  <div className="px- pb-4">
                    <p className="text-xs font-semibold text-[#3e3e3e] mb-4 ">C. Images</p>

                    <div className="border border-dashed border-[#C4C4C4] h-[250px] rounded-xl bg-[#F9FAFB] px-6 py-10 text-center">
                      <div className="flex flex-col items-center space-y-4">
                        
                          <img src="/file upload states.svg" alt=""/>
                        

                        <div>
                          <label htmlFor="file-upload" className="cursor-pointer text-sm text-[#00644C] font-semibold">
                            Click to upload
                          </label>
                          <p className="text-xs text-[#667085] mt-1">
                            or drag and drop<br />
                            <span className="text-[#98A2B3]">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                          </p>
                        </div>

                        <div className="mt-2">
                          <label
                            htmlFor="file-upload"
                            className="bg-[#00644C] text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-[#02603B] transition"
                          >
                            Browse Files
                          </label>
                          <input
                            id="file-upload"
                            name="image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex gap-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-[120px] border border-[#E0E0E0] text-[#4A4A4A] bg-white rounded-full py-2 text-sm mt-40"
                    >
                      Previous
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-[#00644C] text-white rounded-full py-2.5 text-sm mt-40"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 bg-[#00644C] text-white rounded-full py-2.5 text-sm mt-40"
                    >
                      Add Investment Property
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
