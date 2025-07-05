// DisableAccountModal.js
import React from "react";

const DisableAccountModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Disable Account?</h2>
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to disable this account? <br />
          Disabling means the user won’t be able to access the account again. This action cannot be undone.
        </p>

        <div className="flex justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Yes, disable account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisableAccountModal;
