import React from "react";

const CocoaLandModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 w-[600px] max-h-[80vh] "
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cocoa Land Investment</h2>
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>
        <img
          src="/Frame 1618873004.png"
          alt="Cocoa Land Details"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default CocoaLandModal;
