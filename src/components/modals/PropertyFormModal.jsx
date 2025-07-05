import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";

const PropertyFormModal = ({ showForm, setShowForm, handleFormSubmit }) => {
  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
    setShowForm(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex justify-end"
      onClick={() => setShowForm(null)}
    >
      <form
        onSubmit={step === 1 ? handleNext : handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-[400px] md:w-[460px] h-full overflow-y-auto p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
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

        {/* Step 1 - Property Details */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                placeholder="Cocoa Land"
                className="border rounded-md p-2 text-sm w-full"
                required
              />
            </div>

            <div>
              <label className="text-sm">Property type</label>
              <select className="border rounded-md p-2 text-sm w-full" required>
                <option value="">Select an option</option>
                <option value="apartment">Apartment</option>
                <option value="bungalow">Bungalow</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Property location</label>
              <select className="border rounded-md p-2 text-sm w-full" required>
                <option value="">Select a State</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Description</label>
              <textarea
                placeholder="Write about Property"
                className="border rounded-md p-2 text-sm w-full"
                rows={3}
                required
              ></textarea>
            </div>

            <div>
              <label className="text-sm">Amount</label>
              <input
                type="number"
                placeholder="₦0.00"
                className="border rounded-md p-2 text-sm w-full"
                required
              />
            </div>

            <div>
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
            </div>

            <button
              type="submit"
              className="w-full bg-[#00644C] text-white py-2 rounded-full hover:bg-green-800 mt-4 font-medium"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2 - Upload Image */}
        {step === 2 && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-medium mb-1">B. Images</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center text-center">
                <FiUploadCloud className="text-3xl text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  <span className="text-green-800 font-medium cursor-pointer hover:underline">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </p>
                <button className="mt-4 px-4 py-2 text-sm rounded-full bg-[#00644C] text-white">
                  Browse Files
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full border border-gray-300 py-2 rounded-full font-medium"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-full bg-[#00644C] text-white py-2 rounded-full hover:bg-green-800 ml-2 font-medium"
              >
                Add Property
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PropertyFormModal;
