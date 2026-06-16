import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const Orders = ({ orders = [] }) => {
  return (
    <div className="w-full bg-[#f3f4f6] p-6 rounded-xl border border-[#e5e7eb] shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-[#111827]">
          Orders
        </h2>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full text-left border border-[#e5e7eb] rounded-lg overflow-hidden">

          {/* HEAD */}
          <thead className="bg-[#e5e7eb] text-[#111827]">
            <tr>
              <th className="p-3 font-medium">Order ID</th>
              <th className="p-3 font-medium">Customer</th>
              <th className="p-3 font-medium">Items</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium text-right">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="bg-white">

            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-[#6b7280]">
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-[#e5e7eb] hover:bg-[#f9fafb] transition"
                >

                  {/* ORDER ID */}
                  <td className="p-3 text-[#111827] font-medium">
                    #{order.id || index + 1}
                  </td>

                  {/* CUSTOMER */}
                  <td className="p-3 text-[#111827]">
                    {order.customer}
                  </td>

                  {/* ITEMS */}
                  <td className="p-3 text-[#374151]">
                    {order.items}
                  </td>

                  {/* TOTAL */}
                  <td className="p-3 text-[#111827] font-medium">
                    ₹{order.total}
                  </td>

                  {/* STATUS */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium
                        ${
                          order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "Preparing"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-4">
                      <FaEye className="text-[#2563eb] hover:text-[#1d4ed8] cursor-pointer" />
                      <FaTrash className="text-[#dc2626] hover:text-[#b91c1c] cursor-pointer" />
                    </div>
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

export default Orders;