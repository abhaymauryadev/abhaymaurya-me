"use client"
import React from 'react'
import ColorBends from '../app/ColorBends';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <ColorBends 
        
        />
      </div>

      {/* Content Layer */}
      <div
        id="home"
        className="relative z-50 flex flex-col items-start justify-center text-left px-4 border"
      >
        {/* Badge */}
        <h1 className="text-sm sm:text-base md:text-lg font-bold text-white px-6 py-2 rounded-full bg-white/10 backdrop-blur-md">
          Available for work
        </h1>

        {/* Heading */}
        <div className="mt-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#F8FAF] leading-tight">
            I am <br /> <span>Developer</span>
          </h1>
        </div>
      </div>
    </section>
  )
}