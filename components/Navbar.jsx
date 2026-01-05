"use client"

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/components/LenisProvider";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const lenis = useLenis();

  const handleScroll = (id) => {
    if (!lenis) return;
    lenis.scrollTo(id);
  };
  const Dock = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      Dock.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        scrollTrigger: {
          trigger: Dock.current,
          start: "top 80%",
          end: "bottom 30%",
          markers: false,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [])
  return (
    <section ref={Dock} className="  fixed lg:fixed bottom-2 md:bottom-16 left-1/2 transform -translate-x-1/2 flex justify-between items-center  md:w-auto lg:max-w-225 gap-4 md:gap-20 m-auto px-7 md:px-4 py-4 rounded-2xl bg-[black]/30 z-30 text-[12px] md:text-[13px] leading-5 backdrop-blur-md shadow-lg">

      <div className="flex items-center gap-2 md:gap-4 list-none  text-white lg:text-lg md:text-[13px] font-inter font-bold">

        <a href="#home" onClick={() => handleScroll("#home")} className='group cursor-pointer relative overflow-hidden '>
          <div className=" group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Home
          </div>
          <div className=" absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Home
          </div>
        </a>

        <a href="#about" onClick={() => handleScroll("#about")} className='group cursor-pointer relative overflow-hidden '>
          <div className=" group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            About
          </div>
          <div className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            About
          </div>
        </a>


        <a href="#work" onClick={() => handleScroll("#work")} className='group cursor-pointer relative overflow-hidden '>
          <div className=" group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Work
          </div>
          <div className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Work
          </div>
        </a>

        <a href="#contact" onClick={() => handleScroll("#contact")} className='group cursor-pointer relative overflow-hidden'>
          <div className=" group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Contact
          </div>
          <div className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Contact
          </div>
        </a>
      </div>


    </section>
  )
}
