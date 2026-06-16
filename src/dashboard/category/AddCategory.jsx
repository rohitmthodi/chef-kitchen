import React, { useState } from "react";

const AddCategory = ({ onClose, onSuccess }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmed = name.trim();
    if (!trimmed) return;

    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();

    const exists = data.some(
      (cat) => cat.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (exists) {
      alert("Category already exists!");
      return;
    }

    await fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: trimmed }),
    });

    setName("");
    onSuccess?.();
    onClose?.();
  };

  return (
    // 🌟 FULL SCREEN OVERLAY (IMPORTANT FIX)
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200 p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add Category
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-3">

            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2.5 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddCategory;