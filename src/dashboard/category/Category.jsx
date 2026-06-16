import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import AddCategory from "./AddCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchCategories = () => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="relative w-full bg-[#f3f4f6] p-6 rounded-xl border border-[#e5e7eb] shadow-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-[#111827]">Categories</h2>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 rounded-lg hover:bg-[#1f2937] transition"
        >
          <FaPlus />
          Add Category
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#e5e7eb] rounded-lg overflow-hidden">
          <thead className="bg-[#e5e7eb] text-[#111827]">
            <tr>
              <th className="p-3 font-medium">Category Name</th>
              <th className="p-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {categories.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center py-6 text-[#6b7280]">
                  No categories found
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr
                  key={cat.id}
                  className="border-t border-[#e5e7eb] hover:bg-[#f9fafb] transition"
                >
                  <td className="p-3 text-[#111827]">{cat.name}</td>

                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-4">
                      <FaEdit className="text-[#2563eb] hover:text-[#1d4ed8] cursor-pointer" />
                      <FaTrash className="text-[#dc2626] hover:text-[#b91c1c] cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {open && (
        <AddCategory
          onClose={() => setOpen(false)}
          onSuccess={fetchCategories}
        />
      )}
    </div>
  );
};

export default Category;
