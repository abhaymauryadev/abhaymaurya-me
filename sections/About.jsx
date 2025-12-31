import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
   <section id="about" className="min-h-screen  text-neutral-200 px-6 md:px-16 py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT IMAGE */}
        <div className="w-full">
          <div className="relative w-full  h-120 lg:h-220 rounded-2xl overflow-hidden">
            <Image
              src="/videos/about.jpg"
              alt="About me image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">
          
          {/* Big statement */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-neutral-100">
            I'm a software engineer driven by a passion for turning ideas
            into clean, intuitive digital experiences.
          </h2>

          {/* About block */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 text-neutral-400 text-sm leading-relaxed">
            
            <span className="uppercase tracking-widest text-neutral-500">
              (About Me)
            </span>

            <div className="space-y-6 font-medium">
              <p>
                I am a passionate Software Engineer with a knack for building
                full-stack web applications using modern technologies like
                Next.js and Tailwind CSS. My journey in tech began with a
                curiosity for solving real-world problems through innovative
                solutions, which evolved into a love for crafting user-centric
                digital experiences.
              </p>

              <p>
                Beyond coding, I thrive in collaborative environments and enjoy
                tackling challenging problems with creative solutions. I aim to
                contribute to impactful projects that make a difference in
                users' lives.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
