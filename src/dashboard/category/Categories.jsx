import React from "react";
import { categoriesData } from "../../constants";

const Categories = () => {
  return (
    <div className="p-6">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="cursor-default">
          <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
          <p className="text-sm text-gray-500 mt-1">
            Organize your menu offerings into logical sections for guests and
            staff.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition duration-200 cursor-pointer">
          + Add Category
        </button>
      </div>

      {/* DIVIDER */}
      <div className="mt-5 border-b border-gray-200" />

      {/* CATEGORY TABLE */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse cursor-default">
          {/* HEADER */}
          <thead className="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Category Name
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Description
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black">
                Status
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-black text-right">
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-100">
            {categoriesData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-all duration-150"
              >
                <td className="py-4 px-4 text-gray-900">{item.name}</td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {item.description}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1">
                    {item.status}
                  </span>
                </td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
