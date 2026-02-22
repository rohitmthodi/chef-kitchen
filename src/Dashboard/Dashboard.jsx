import React from 'react'
import SidebarDB from './SidebarDB'
import Navbar from './Navbar'
import Bottombar from './Bottombar'
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <SidebarDB />

      {/* Right side */}
      <div className='flex flex-col flex-1 h-screen'>
        <Navbar />

        {/* 🔥 Pages will render HERE */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>

        <Bottombar />
      </div>
    </div>
  )
}

export default Dashboard
