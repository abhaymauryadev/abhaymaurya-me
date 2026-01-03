"use client";
import React from 'react'

export default function Skill() {
  return (
    <section className="min-h-screen  text-[#E5E7EB] px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="leading-[0.95]">
          <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-extrabold tracking-tight">
            DEVELOPER
            <br />
            DESIGNER
            <br />
            CREATOR<span className="">/</span>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-16">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-12">
            Skills
          </h2>

          {/* Always 3 columns, with responsive spacing */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-sm sm:text-base md:text-lg text-neutral-400">

            {/* Column 1 */}
            <div className="pointer-cursor">
              <h3 className="text-neutral-200 font-medium mb-4 text-base sm:text-lg">
                Languages & Tools
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Python
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Python
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    SQL
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    SQL
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    C++
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    C++
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    TypeScript
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    TypeScript
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    JavaScript
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    JavaScript
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Git
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Git
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Postman
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Postman
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Docker
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Docker
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Firebase
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Firebase
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="pointer-cursor">
              <h3 className="text-neutral-200 font-medium mb-4 text-base sm:text-lg">
                Frameworks & Libraries
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    React
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    React
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Node.js
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Node.js
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Express.js
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Express.js
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Flask
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Flask
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Bootstrap
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Bootstrap
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Next.js
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Next.js
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Tailwind CSS
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Tailwind CSS
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Framer Motion
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Framer Motion
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    GSAP
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    GSAP
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="pointer-cursor">
              <h3 className="text-neutral-200 font-medium mb-4 text-base sm:text-lg">
                IT & Software Foundations
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    DSA & Logical Thinking
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    DSA & Logical Thinking
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Backend & Databases
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Backend & Databases
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Frontend & Web Systems
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Frontend & Web Systems
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Operating Systems
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Operating Systems
                  </span>
                </li>
                <li className="group relative overflow-hidden h-6 cursor-pointer">
                  <span className="block transition-transform duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:-translate-y-6">
                    Software Architecture Basics
                  </span>

                  <span className="absolute top-6 left-0 transition-all duration-[1s]
                   ease-[cubic-bezier(0.19,1,0.22,1)]
                   group-hover:top-0">
                    Software Architecture Basics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
