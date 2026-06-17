import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded-xl h-full overflow-y-auto">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of your restaurant performance and activity.
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-sm text-blue-600">Total Categories</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">12</h2>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-sm text-emerald-600">Total Menu Items</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">48</h2>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
          <p className="text-sm text-orange-600">Orders Today</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">26</h2>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-sm text-purple-600">Revenue</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">₹8,450</h2>
        </div>
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="border rounded-xl p-4 bg-gray-50 h-64">
          <h3 className="font-semibold text-gray-700 mb-2">
            Weekly Orders
          </h3>
          <div className="h-full flex items-center justify-center text-gray-400">
            📊 Chart Placeholder
          </div>
        </div>

        <div className="border rounded-xl p-4 bg-gray-50 h-64">
          <h3 className="font-semibold text-gray-700 mb-2">
            Popular Items
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>🍔 Burger - 120 sold</li>
            <li>🍕 Pizza - 98 sold</li>
            <li>🍜 Noodles - 75 sold</li>
            <li>🍗 Fried Chicken - 60 sold</li>
          </ul>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="mt-6 border rounded-xl p-4 bg-white">
        <h3 className="font-semibold text-gray-700 mb-3">
          Recent Activity
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>New order received</span>
            <span>2 min ago</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>New menu item added</span>
            <span>20 min ago</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Category updated</span>
            <span>1 hr ago</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;