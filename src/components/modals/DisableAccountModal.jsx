import React from "react";

const DisableAccountModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl animate-fade-in">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Disable Account?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to disable this account? <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-between gap-3">
          <button
            onClick={onClose}
            className="w-[124px] h-[32px] rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-[178px] h-[32px] rounded-full bg-red-600 text-white transition"
          >
            Yes, disable account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisableAccountModal;
