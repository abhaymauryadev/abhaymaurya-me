"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loading() {
  const greetings = [
    "Hello",
    "नमस्ते",
    "Hola",
    "Bonjour",
    "こんにちは",
    "안녕하세요",
    "Ciao",
    "Olá",
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  // Rotate greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 700);

    // Hide preloader after few seconds
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="overflow-hidden h-72 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.span
               
                className="block text-5xl md:text-8xl font-bold text-white "
              >
                {greetings[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
