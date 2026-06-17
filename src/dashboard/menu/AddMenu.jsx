import React, { useState, useEffect } from "react";

const AddMenu = ({ onClose }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    const newItem = {
      name,
      category,
      stock: Number(stock),
      price,
      image,
    };

    try {
      await fetch("http://localhost:5000/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      onClose();
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      {/* HEADER */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="cursor-default">
          <h1 className="text-2xl font-bold text-gray-800">Add Menu Item</h1>
          <p className="text-sm text-gray-500 mt-1">
            Add a new food or beverage item to your menu.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-5 border-b border-gray-200" />

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mt-6 max-w-2xl">

        {/* IMAGE */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Image
          </label>

          <input
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
          />

          {image && (
            <img
              src={image}
              alt="preview"
              className="w-20 h-20 mt-3 rounded-lg object-cover"
            />
          )}
        </div>

        {/* NAME */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            required
            placeholder="Enter item name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring transition"
          />
        </div>

        {/* CATEGORY */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring transition bg-white"
          >
            <option value="">Select category</option>

            {categories.map((cat, index) => (
              <option key={index} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* STOCK */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stock
          </label>
          <input
            type="number"
            value={stock}
            required
            placeholder="Enter stock quantity"
            onChange={(e) => setStock(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring transition"
          />
        </div>

        {/* PRICE */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="text"
            value={price}
            required
            placeholder="Enter price (e.g. ₹120 / per plate)"
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring transition"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition cursor-pointer"
          >
            Save Item
          </button>

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

export default AddMenu;