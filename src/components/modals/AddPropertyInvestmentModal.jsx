import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FormModal from "./FormModal";
import UploadImageModal from "./UploadImageModal";

const AddPropertyInvestmentModal = ({ onClose }) => {
  const [view, setView] = useState("selection"); // "selection", "propertyForm", "uploadImage", "investmentForm"

  const handleContinueFromForm = () => {
    setView("uploadImage");
  };

  const handleCloseAll = () => {
    setView("selection");
    onClose();
  };

  const handlePreviousToForm = () => {
    setView("propertyForm");
  };

  return (
    <>
      {view === "selection" && (
        <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[360px] relative">
            <button
              onClick={handleCloseAll}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <IoMdClose size={20} />
            </button>
            <h3 className="text-lg font-semibold text-center mb-6">
              What would you like to add?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setView("propertyForm")}
                className="flex flex-col items-center gap-2 border rounded-lg p-4 hover:shadow-md transition"
              >
                <img src="/apartment.svg" alt="Apartment" className="w-8 h-8" />
                <span className="text-sm">Add an Apartment</span>
              </button>
              <button
                onClick={() => setView("investmentForm")}
                className="flex flex-col items-center gap-2 border rounded-lg p-4 hover:shadow-md transition"
              >
                <img src="/investment.svg" alt="Investment" className="w-8 h-8" />
                <span className="text-sm">Add Investment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {view === "propertyForm" && (
        <FormModal onContinue={handleContinueFromForm} onClose={handleCloseAll} />
      )}

      {view === "uploadImage" && (
        <UploadImageModal onClose={handleCloseAll} onPrevious={handlePreviousToForm} />
      )}

      {view === "investmentForm" && (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl w-[400px] text-center relative">
            <button
              onClick={handleCloseAll}
              className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
            >
              <IoMdClose size={20} className="text-gray-500 hover:text-black" />
            </button>
            <h3 className="text-lg font-semibold mb-4">Add Investment (Coming Soon)</h3>
            <p className="text-sm text-gray-600">This section will allow you to create investment opportunities linked to properties.</p>
            <button
              onClick={handleCloseAll}
              className="mt-6 bg-[#00644C] text-white py-2 px-4 rounded-md text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPropertyInvestmentModal;
