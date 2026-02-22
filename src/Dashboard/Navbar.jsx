  import React from 'react'
import Profile from '../assets/dummyProfile.svg'

const Navbar = () => {
  return (
    <div className='flex py-3 px-3 justify-end border-b border-gray-500/20'>
      <img src={Profile} alt="" className='w-12' />

      <div className='text-xs ml-2 flex flex-col justify-center'>
        <p className='font-medium'>Admin</p>
        <p className='text-gray-500'>admin@gmail.com</p>
      </div>
    </div>
  )
}

export default Navbar
