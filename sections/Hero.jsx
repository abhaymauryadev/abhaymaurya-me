"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorBends from "../app/ColorBends";

export default function Hero() {
  const roles = ["DevOps Engineer", "Designer", "Developer"];
  const [index, setIndex] = useState(0);

  // Cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <ColorBends />
      </div>

      {/* Content Layer */}
      <div
        id="home"
        className="relative z-50 flex flex-col items-start justify-center text-left px-4 sm:px-8 md:px-16 max-w-screen-xl"
      >
        {/* Badge */}
        <h1 className="text-[9px] sm:text-sm md:text-base font-bold text-white px-6 py-2 rounded-full bg-white/10 backdrop-blur-md">
          Available for work
        </h1>

        {/* Heading */}
        <div className="mt-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-[#F8FAF] leading-tight">
            I am
          </h1>

          {/* Animated Role */}
          <div className="overflow-hidden h-[2.2em] sm:h-[2.4em] md:h-[4.6em] lg:h-[8rem] mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 40 }}   // start below
                animate={{ opacity: 1, y: 0 }}    // slide up into place
                exit={{ opacity: 0, y: -40 }}     // slide out upward
                transition={{ duration: 0.6 }}
                className="block text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#F8FAF]"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}