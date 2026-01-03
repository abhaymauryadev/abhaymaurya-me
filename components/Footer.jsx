"use client"

import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
 

 

  return (
    <footer  className="footer bg-black text-neutral-400 px-6 md:px-16 pt-24 pb-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left */}
          <p className="text-sm font-medium leading-relaxed max-w-md">
            Designed and built with care using modern web technologies.
            Focused on creating meaningful, user-centric digital experiences.
          </p>

          {/* Right - Social */}
          <div className="flex font-medium md:justify-end">
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <a
                  href="https://github.com/abhaymauryadev"
                  target="_blank"
                  className="hover:text-neutral-200 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhaymauryawebdeveloper/"
                  target="_blank"
                  className="hover:text-neutral-200 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/theabhaywebdev"
                  target="_blank"
                  className="hover:text-neutral-200 transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:theabhaywebdev@gmail.com"
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
        <div className="flex font-medium flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <span>
            © {new Date().getFullYear()} Abhay Maurya. All rights reserved.
          </span>

          <span>
            Code.Build.Win. 🚀
            Every line code is a step forward.
          </span>
        </div>
      </div>
    </footer>
  );
}
