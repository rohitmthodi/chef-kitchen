import React, { useState } from "react";

const AddCategory = ({ onClose, existingCategories = [] }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    // ✅ check duplicate (case-insensitive + trimmed)
    const alreadyExists = existingCategories.some(
      (cat) => cat.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (alreadyExists) {
      alert("Category already exists!");
      return;
    }

    const newCategory = {
      name,
      description,
    };

    try {
      await fetch("http://localhost:5000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      onClose(); // close modal after saving
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="cursor-default">
          <h1 className="text-2xl font-bold text-gray-800">
            Add Category
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a new category to organize your menu items.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-5 border-b border-gray-200" />

      {/* FORM */}
      <form className="mt-6 max-w-2xl" onSubmit={handleSubmit}>
        
        {/* NAME */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring transition"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter category description"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring transition resize-none"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          
          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition cursor-pointer"
          >
            Save Category
          </button>

          {/* CANCEL BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg transition cursor-pointer"
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
};

export default AddCategory;