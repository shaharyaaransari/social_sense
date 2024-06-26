import React from 'react'

export const UpperHeader = () => {
  return (
    <div className='flex justify-between mt-2'>
  <h4 className="font-bold text-2xl">Theme</h4>
  <div className='flex items-center border-2 mr-2 bg-gray-100 rounded-lg p-2 space-x-4' style={{ width: "200px", height: "50px" }}>
    <span className='mt-1 text-gray-500 font-bold'>Shaharyaar</span>
    <img className='w-10 h-10 rounded-full ml-2' src="https://images3.alphacoders.com/644/thumbbig-644161.webp" alt="itachi-pic" />
  </div>
</div>

  )
}
