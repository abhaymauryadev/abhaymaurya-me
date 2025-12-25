import React from 'react'
import ColorBends from '../app/ColorBends.jsx'
export default function Hero() {
  return (
    <>
    <div className='relative'>
      <ColorBends />
  

    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-4xl font-bold text-white'>Hero</h1>
    </div>

      </div>
    </>
  )
}
