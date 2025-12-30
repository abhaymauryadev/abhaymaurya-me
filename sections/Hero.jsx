import React from "react";
import ColorBends from '../app/ColorBends.jsx';
export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen">
        <ColorBends />

        <div id="home" className="absolute min-h-screen inset-0 z-10 flex items-center justify-center sm:justify-start text-center sm:text-left pl-4 sm:pl-8 md:pl-16 lg:pl-32">

          <div className="flex flex-col">
          <h1 className="text-base font-bold text-white border-black px-6 py-2 w-32 sm:w-40 md:w-48 rounded-full bg-white/10 backdrop-blur-md">
            Available for work
          </h1>

          <div className="mt-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#F8FAF]">I am <br /> <span>Developer</span> </h1>
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}