import React from "react";
import { IoMdClose } from "react-icons/io";

const AddPropertyInvestmentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[360px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <IoMdClose size={20} />
        </button>

        <h3 className="text-lg font-semibold text-center mb-6">
          What would you like to add?
        </h3>

        <div className="flex justify-center gap-4">
          <button className="flex flex-col items-center gap-2 border rounded-lg p-4 hover:shadow-md transition">
            <img src="/apartment.svg" alt="Apartment" className="w-8 h-8" />
            <span className="text-sm">Add an Apartment</span>
          </button>
          <button className="flex flex-col items-center gap-2 border rounded-lg p-4 hover:shadow-md transition">
            <img src="/investment.svg" alt="Investment" className="w-8 h-8" />
            <span className="text-sm">Add Investment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyInvestmentModal;
