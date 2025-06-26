// FormModal.js
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const FormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    description: "",
    amount: "",
    features: {
      kitchen: false,
      swimmingPool: false,
      carPark: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name in formData.features) {
      setFormData({
        ...formData,
        features: {
          ...formData.features,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-[24px] shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
        >
          <IoMdClose size={20} className="text-gray-500 hover:text-black" />
        </button>

        <h3 className="text-lg font-semibold text-center mb-6">Add Property</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md p-2 text-sm"
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border rounded-md p-2 text-sm"
            required
          >
            <option value="">Select type</option>
            <option value="Apartment">Apartment</option>
            <option value="Flat">Flat</option>
            <option value="Bungalow">Bungalow</option>
          </select>

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded-md p-2 text-sm"
            required
          >
            <option value="">Select a State</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
          </select>

          <textarea
            name="description"
            placeholder="Write about Property"
            value={formData.description}
            onChange={handleChange}
            className="border rounded-md p-2 text-sm"
            rows="3"
            required
          ></textarea>

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border rounded-md p-2 text-sm"
            required
          />

          <div className="text-sm font-medium">Features</div>
          <div className="flex flex-col gap-2 pl-2">
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="kitchen"
                checked={formData.features.kitchen}
                onChange={handleChange}
              />
              Kitchen
            </label>
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="swimmingPool"
                checked={formData.features.swimmingPool}
                onChange={handleChange}
              />
              Swimming Pool
            </label>
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="carPark"
                checked={formData.features.carPark}
                onChange={handleChange}
              />
              Car Park
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#00644C] text-white py-2 rounded-md text-sm mt-4"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
