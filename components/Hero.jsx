import React from 'react'
import ColorBends from '../app/ColorBends.jsx'
export default function Hero() {
  return (
    <>
      <div className='relative'>
        <ColorBends className=' lg:min-h-screen md:h-[90vh] sm:h-[0vh] w-full justify-center items-center' />


        <div className='absolute top-1/2 left-1/2 transform -translate-x-160'>
          <h1 className='text-base font-bold text-white border-black px-6 py-2 w-48 rounded-full bg-white/10 backdrop-blur-md'>Available for work</h1>


          <div className='mt-4'>
            <h1 className='text-9xl font-bold text-[#F8FAF]'>I am Developer</h1>
          </div>
        </div>

      </div>
    </>
  )
}
