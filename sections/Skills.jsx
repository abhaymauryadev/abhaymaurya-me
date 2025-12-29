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
        <div>
          <h2 className="text-4xl text-center font-semibold mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg text-neutral-400">
            
            {/* Column 1 */}
            <div>
              <h3 className="text-neutral-200 font-medium mb-4">
                Languages & Tools
              </h3>
              <ul className="space-y-2">
                <li>Python</li>
                <li>SQL</li>
                <li>C++</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>Postman</li>
                <li>Docker</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-neutral-200 font-medium mb-4">
                Frameworks & Libraries
              </h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>GSAP</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-neutral-200 font-medium mb-4">
                Core CS Concepts
              </h3>
              <ul className="space-y-2">
                <li>DSA</li>
                <li>DBMS</li>
                <li>OOP</li>
                <li>Operating Systems</li>
                <li>System Design</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
