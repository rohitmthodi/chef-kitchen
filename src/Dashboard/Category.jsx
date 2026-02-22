import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { useCategory } from "../Contexts/CategoryContext";

const Products = () => {
  const [isShow, setIsShow] = useState(false);

  const {
    categories,
    addCategory,
    deleteCategory,
    updateCategory,
    editingCategory,
    setEditingCategory,
  } = useCategory();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-10">
        <p className="text-xl font-medium">Categories</p>
        <button
          className="font-semibold px-3 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-950 transition-all"
          onClick={() => {
            setEditingCategory(null);
            setIsShow(true);
          }}
        >
          Add Category
        </button>
      </div>

      {isShow && (
        <AddCategory
          isShow={setIsShow}
          onAdd={addCategory}
          onUpdate={updateCategory}
          editingCategory={editingCategory}
        />
      )}

      <div className="mt-10 mb-10 px-10 py-2">
        {/* ✅ Added same border style as Products table */}
        <table className="w-full border">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-2 py-2 text-center">Name</th>
              <th className="px-2 py-2 text-center">Products</th>
              <th className="px-2 py-2 text-center">Stock</th>
              <th className="px-2 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No categories added
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                // ✅ Same row border style as Products
                <tr key={cat.id} className="border text-center">
                  <td className="px-2 py-2">{cat.name}</td>
                  <td className="px-2 py-2">{cat.products}</td>
                  <td className="px-2 py-2">{cat.stock}</td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => {
                        setEditingCategory(cat);
                        setIsShow(true);
                      }}
                      className="text-blue-600 font-medium"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="text-red-600 font-medium ml-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
