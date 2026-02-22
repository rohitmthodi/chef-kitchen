import React from 'react'

const Orders = () => {
  return (
    <div className='flex flex-col'>
        <p className="text-xl font-medium px-10 py-2">Admin Orders</p>

        <div className='mt-10 mb-10 px-10 py-2'>
          <table className="w-full border">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-2 py-2 text-center">Customer</th>
              <th className="px-2 py-2 text-center">Address</th>
              <th className="px-2 py-2 text-center">Items</th>
              <th className="px-2 py-2 text-center">Order Type</th>
              <th className="px-2 py-2 text-center">Payment</th>
              <th className="px-2 py-2 text-center">Total</th>
              <th className="px-2 py-2 text-center">Time</th>
            </tr>
          </thead>

          <tbody>

          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Orders
