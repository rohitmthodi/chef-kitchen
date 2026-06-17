import React, { useState, useEffect } from "react";
import AddMenu from "./AddMenu";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("http://localhost:5000/menu");
        const data = await res.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl h-full overflow-y-auto relative">
      {/* HEADER */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="cursor-default">
          <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your food and beverage items with stock and pricing details.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white px-4 py-2 rounded-lg shadow-sm transition"
        >
          ADD MENU
        </button>
      </div>

      {/* DIVIDER */}
      <div className="mt-5 border-b border-gray-200" />

      {/* TABLE */}
      <div className="mt-6 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse cursor-default">
          <thead className="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Image
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Name
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Category
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Stock
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Price
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {menuData.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-10 text-center text-gray-500">
                  No menu items added yet
                </td>
              </tr>
            ) : (
              menuData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all duration-150"
                >
                  <td className="py-4 px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="py-4 px-4 text-gray-900 font-medium">
                    {item.name}
                  </td>

                  <td className="py-4 px-4 text-gray-500">{item.category}</td>

                  <td className="py-4 px-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.stock > 5
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {item.stock} in stock
                    </span>
                  </td>

                  <td className="py-4 px-4 text-gray-700 text-sm font-medium">${item.price} / unit</td>

                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-indigo-600 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 hover:text-indigo-800 cursor-pointer">
                        ✏️
                      </button>

                      <button className="text-red-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 hover:text-red-700 cursor-pointer">
                        🗑️
                      </button>
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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-full max-w-2xl">
            <AddMenu onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
