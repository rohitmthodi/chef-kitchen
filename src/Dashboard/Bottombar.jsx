  import React from 'react'

const Bottombar = () => {
  return (
    <div className='px-5'>
      <div className='py-5 px-5 border-t-2 flex justify-between'>
        <p className='text-gray-500 font-medium text-sm'>Showing 1-10 of 6</p>

        <div className='flex gap-2 font-medium text-sm'>
          <button className='px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all'>Prev</button>
          <p className='border border-gray-300 px-3 py-1 rounded-lg bg-gray-300'>1</p>
          <button className='px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Bottombar
