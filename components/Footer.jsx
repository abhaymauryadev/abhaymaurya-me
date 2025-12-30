"use client"

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Footer() {

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
          markers:false,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [])
  return (
    <footer ref={Dock} className="bg-black text-neutral-400 px-6 md:px-16 pt-24 pb-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left */}
          <p className="text-sm leading-relaxed max-w-md">
            Designed and built with care using modern web technologies.
            Focused on creating meaningful, user-centric digital experiences.
          </p>

          {/* Right - Social */}
          <div className="flex md:justify-end">
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="hover:text-neutral-200 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="hover:text-neutral-200 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  className="hover:text-neutral-200 transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:youremail@example.com"
                  className="hover:text-neutral-200 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-neutral-800" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <span>
            © {new Date().getFullYear()} Abhay Maurya. All rights reserved.
          </span>

          <span>
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
