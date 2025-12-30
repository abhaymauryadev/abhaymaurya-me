"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Works() {

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card 1 animation
      gsap.fromTo(card1Ref.current, 
        { y: 200, opacity: 0,},
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        }
      );

      // Card 2 animation - stacks on top
      gsap.fromTo(card2Ref.current, 
        { y: 200, opacity: 0},
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        }
      );

      // Card 3 animation - stacks on top
      gsap.fromTo(card3Ref.current, 
        { y: 200, opacity: 0,},
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card3Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    <section id="work"  className="min-h-screen max-w-9xl mx-auto">
      <div className=" max-w-7xl  mx-auto mt-24 ">
        <h1 className="text-8xl font-bold">WHAT I DO /</h1>
      </div>

      <div className=" max-w-7xl  mx-auto mt-24 grid grid-cols-6 gap-4 ">
        <div></div>
        <div></div>
        <div></div>

        <div>
          <h1 className="font-light">(SERVICES)</h1>
        </div>

        <div className="w-120 text-xl">
          <p>
            I specialize in building full-stack web applications that are
            fast,reliable,and user-friendly.With a solid foundation in both
            frontend and backend technologies,I help bring ideas to life whether
            it's for a business, a startup,or a product team.
          </p>
        </div>
      </div>

    </section>


  
    <section className="relative min-h-screen max-w-348 mx-auto  -mt-96 text-neutral-200 px-6 md:px-16 py-20" ref={card1Ref}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full -pt-12 h-px bg-neutral-800" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT – Section Number */}
        <div className="flex items-start">
          <span className="text-5xl md:text-6xl font-light text-neutral-300">
            (01)
          </span>
        </div>

        {/* RIGHT – Content */}
        <div className="max-w-2xl  ">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
            Full-Stack Development
          </h2>

          {/* Description */}
          <p className="mt-6 text-neutral-400 leading-relaxed text-base md:text-lg">
            From frontend interactions to backend APIs, I build complete web
            solutions. I work with modern stacks to deliver apps that are
            scalable, maintainable, and ready for real-world users.
          </p>

          {/* List */}
          <div className="mt-10 space-y-6">
            {/* Item 01 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">01</span>
              <span className="text-lg md:text-xl font-medium  text-neutral-100">
                React, Node.js, Express.js, Next.js
              </span>
            </div>

            {/* Item 02 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">02</span>
              <span className="text-lg md:text-xl font-medium text-neutral-100">
                REST APIs, Firebase, Docker
              </span>
            </div>

            {/* Item 03 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">03</span>
              <span className="text-lg md:text-xl font-medium text-neutral-100">
                Git, GitHub, Postman
              </span>
            </div>
          </div>
        </div>
      </div>

      
    </section>

     <section className="relative min-h-screen max-w-348 mx-auto   -mt-44  text-neutral-200 px-6 md:px-16 py-20" ref={card2Ref}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full -pt-12 h-px bg-neutral-800" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT – Section Number */}
        <div className="flex items-start">
          <span className="text-5xl md:text-6xl font-light text-neutral-300">
            (02)
          </span>
        </div>

        {/* RIGHT – Content */}
        <div className="max-w-2xl  ">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
            UX/UI Designer
          </h2>

          {/* Description */}
          <p className="mt-6 text-neutral-400 leading-relaxed text-base md:text-lg">
            From wireframes to polished interfaces, I craft experiences that feel
            intuitive and engaging. I work with modern design systems to deliver
          products that are user‑centered, visually striking, and ready for real‑world use.
          </p>

          {/* List */}
          <div className="mt-10 space-y-6">
            {/* Item 01 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">01</span>
              <span className="text-lg md:text-xl font-medium  text-neutral-100">
                Figma, FiJam, Color Theory, Typography.
              </span>
            </div>

            {/* Item 02 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">02</span>
              <span className="text-lg md:text-xl font-medium text-neutral-100">
                User Research, Wireframing, Prototyping.
              </span>
            </div>

            {/* Item 03 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">03</span>
              <span className="text-lg md:text-xl font-medium text-neutral-100">
                Problem Solving, Communication, Collaboration.
              </span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
     <section className="relative min-h-screen max-w-348 mx-auto   -mt-44  text-neutral-200 px-6 md:px-16 py-20" ref={card3Ref}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full -pt-12 h-px bg-neutral-800" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT – Section Number */}
        <div className="flex items-start">
          <span className="text-5xl md:text-6xl font-light text-neutral-300">
            (03)
          </span>
        </div>

        {/* RIGHT – Content */}
        <div className="max-w-2xl  ">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
            DevOps Engineer
          </h2>

          {/* Description */}
          <p className="mt-6 text-neutral-400 leading-relaxed text-base md:text-lg">
            From infrastructure automation to continuous delivery, I streamline the
            software lifecycle. I work with modern DevOps practices to ensure systems
            are scalable, resilient, and ready for real-world demands..
          </p>

          {/* List */}
          <div className="mt-10 space-y-6">
            {/* Item 01 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">01</span>
              <span className="text-lg md:text-xl font-medium  text-neutral-100">
                 Linux, Bash, Shell Scripting
              </span>
            </div>

            {/* Item 02 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">02</span>
              <span className="text-lg md:text-xl font-medium text-neutral-100">
                  CI/CD Pipelines, Jenkins, GitHub Actions
              </span>
            </div>

            {/* Item 03 */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-neutral-500 text-sm">03</span>
              <span className="text-lg md:text-xl font-medium text-neutral-100">
                 Networking, Security, Monitoring
              </span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
    </>
  );
}
