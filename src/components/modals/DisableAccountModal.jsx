import React from "react";
import toast from "react-hot-toast";

const DisableAccountModal = ({ onClose, onConfirm }) => {
  const handleConfirm = () => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-xl p-4 flex items-start gap-3 `}
        >
          <div className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#3AB885] flex items-center justify-center text-white text-sm">
              ✓
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#2C2C2C] mb-1">Successful</h2>
            <p className="text-sm text-[#7A7A7A] font-Gilroy-Regular">
              The user's account has been disabled
            </p>
          </div>
        </div>
      ),
      {
        duration: 4000,
        position: 'top-right',
      }
    );

    onConfirm(); // call disable logic
  };

  // ...modal content remains unchanged



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-4xl p-6 w-[460px] h-[210px] shadow-xl animate-fade-in">
        <h2 className="text-lg font-semibold text-[#606060] mb-2">
          Disable Account?
        </h2>
        <p className="text-sm text-[#777777] mb-6 px-1 font-Gilroy-Regular">
          Are you sure you want to delete this account? <br />
          Deleting means you won’t have access to this account <br /> again. 
          This action cannot be undone
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-[154px] h-[42px] rounded-[40px] border border-[#E8E8E8] text-[#777777] hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="w-[198px] h-[42px] rounded-full bg-[#B30000] text-white transition"
          >
            Yes, disable account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisableAccountModal;
