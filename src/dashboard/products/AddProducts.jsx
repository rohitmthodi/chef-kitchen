import React from "react";

const AddProducts = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative w-full max-w-lg bg-[#f3f4f6] p-6 rounded-xl border border-[#e5e7eb] shadow-xl">

        <div className="flex justify-between mb-5">
          <h2 className="text-xl font-semibold text-[#111827]">
            Add Product
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        {/* dummy form UI */}
        <div className="space-y-4">

          {/* IMAGE INPUT (UI only) */}
          <input type="file" />

          {/* NAME */}
          <input
            type="text"
            placeholder="Product name"
            className="w-full px-4 py-3 bg-white border rounded-lg"
          />

          {/* CATEGORY */}
          <select className="w-full px-4 py-3 bg-white border rounded-lg">
            <option value="">Select category</option>
            <option>Pizza</option>
            <option>Burger</option>
            <option>Drinks</option>
          </select>

          {/* PRICE */}
          <div className="grid grid-cols-3 gap-2">
            {["S", "M", "L"].map((size) => (
              <input
                key={size}
                type="number"
                placeholder={size}
                className="px-3 py-2 border rounded-lg"
              />
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 bg-black text-white py-2 rounded-lg"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddProducts;