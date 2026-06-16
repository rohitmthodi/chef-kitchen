import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddProducts from "./AddProducts";

const Products = () => {
  const [open, setOpen] = useState(false);

  // dummy static data (UI only)
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "s",
      category: "Pizza",
      price: { s: 100, m: 200, l: 300 },
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "m",
      category: "Burger",
      price: { s: 120, m: 220, l: 320 },
    },
  ];

  return (
    <div className="relative w-full bg-[#f3f4f6] p-6 rounded-xl border border-[#e5e7eb] shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-[#111827]">
          Products
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 rounded-lg hover:bg-[#1f2937] transition"
        >
          <FaPlus />
          Add Product
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#e5e7eb] rounded-lg overflow-hidden">

          <thead className="bg-[#e5e7eb] text-[#111827]">
            <tr>
              <th className="p-3 font-medium">Image</th>
              <th className="p-3 font-medium">Name</th>
              <th className="p-3 font-medium">Category</th>
              <th className="p-3 font-medium">Sizes & Prices</th>
              <th className="p-3 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white">

            {products.map((item) => (
              <tr
                key={item.id}
                className="border-t border-[#e5e7eb] hover:bg-[#f9fafb] transition"
              >
                {/* IMAGE */}
                <td className="p-3">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-12 h-12 rounded-lg object-cover border"
                  />
                </td>

                {/* NAME */}
                <td className="p-3 font-medium text-[#111827]">
                  {item.name}
                </td>

                {/* CATEGORY */}
                <td className="p-3 font-medium text-[#111827]">
                  {item.category}
                </td>

                {/* PRICE */}
                <td className="p-3">
                  <div className="flex flex-wrap gap-2 text-sm text-[#374151] font-medium">

                    <span className="px-2 py-1 bg-gray-100 rounded-md">
                      S: ₹{item.price.s}
                    </span>

                    <span className="px-2 py-1 bg-gray-100 rounded-md">
                      M: ₹{item.price.m}
                    </span>

                    <span className="px-2 py-1 bg-gray-100 rounded-md">
                      L: ₹{item.price.l}
                    </span>

                  </div>
                </td>

                {/* ACTIONS */}
                <td className="p-3 text-right">
                  <div className="flex justify-end gap-4 text-sm font-medium">
                    <button className="text-blue-600">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {open && (
        <AddProducts onClose={() => setOpen(false)} />
      )}

    </div>
  );
};

export default Products;