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
      gsap.fromTo(
        card1Ref.current,
        { y: 200, opacity: 0 },
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
            // markers: true,
          },
        },
      );

      // Card 2 animation - stacks on top
      gsap.fromTo(
        card2Ref.current,
        { y: 200, opacity: 0 },
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
            // markers: true,
          },
        },
      );

      // Card 3 animation - stacks on top
      gsap.fromTo(
        card3Ref.current,
        { y: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card3Ref.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
            // markers: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section  id="work" className="min-h-screen max-w-9xl mx-auto bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6 text-white">
          <h1 className="font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6.5rem]">
            WHAT I DO /
          </h1>
        </div>

        <div className=" text-white max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-6 gap-8"
        >
          {/* Spacer (desktop only) */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Services heading */}
          <div className="md:col-span-1 flex items-start">
            <h2
              className=" font-light text-sm sm:text-base md:text-lg uppercase tracking-wide">
              (Services)
            </h2>
          </div>

          {/* Description */}
          <div className="md:col-span-3">
            <p
              className=" text-base sm:text-lg md:text-xl leading-relaxed max-w-prose">
              I specialize in building full-stack web applications that are
              fast, reliable, and user-friendly. With a solid foundation in both
              frontend and backend technologies, I help bring ideas to life
              whether it's for a business, a startup, or a product team.
            </p>
          </div>
        </div>
        <div
          className="relative h-184 max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-16 text-neutral-200"
          ref={card1Ref}>
          {/* Top divider */}
          <div className="absolute top-0 left-0 w-full h-px bg-neutral-600" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT – Section Number */}
            <div className="flex items-start">
              <span className="text-3xl sm:text-4xl md:text-6xl font-light text-neutral-300">
                (01)
              </span>
            </div>

            {/* RIGHT – Content */}
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-neutral-100">
                Full-Stack Development
              </h2>
              <p className="mt-4 text-neutral-400 leading-relaxed text-sm sm:text-base md:text-lg">
                From frontend interactions to backend APIs, I build complete web
                solutions. I work with modern stacks to deliver apps that are
                scalable, maintainable, and ready for real-world users.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">01</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    React, Node.js, Express.js, Next.js
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">02</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    REST APIs, Firebase, Docker
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">03</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    Git, GitHub, Postman
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" relative h-184 max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-16 text-neutral-200"
          ref={card2Ref}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-neutral-600" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex items-start">
              <span className="text-3xl sm:text-4xl md:text-6xl font-light text-neutral-300">
                (02)
              </span>
            </div>

            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-neutral-100">
                UX/UI Designer
              </h2>
              <p className="mt-4 text-neutral-400 leading-relaxed text-sm sm:text-base md:text-lg">
                From wireframes to polished interfaces, I craft experiences that
                feel intuitive and engaging. I work with modern design systems
                to deliver products that are user‑centered, visually striking,
                and ready for real‑world use.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">01</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    Figma, FiJam, Color Theory, Typography
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">02</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    User Research, Wireframing, Prototyping
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">03</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    Problem Solving, Communication, Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-184 -mt-40 max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-16 text-neutral-200"
          ref={card3Ref}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-neutral-600" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex items-start">
              <span className="text-3xl sm:text-4xl md:text-6xl font-light text-neutral-300">
                (03)
              </span>
            </div>

            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-neutral-100">
                DevOps Engineer
              </h2>
              <p className="mt-4 text-neutral-400 leading-relaxed text-sm sm:text-base md:text-lg">
                From infrastructure automation to continuous delivery, I
                streamline the software lifecycle. I work with modern DevOps
                practices to ensure systems are scalable, resilient, and ready
                for real-world demands.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">01</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    Linux, Bash, Shell Scripting
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">02</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    CI/CD Pipelines, Jenkins, GitHub Actions
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-500 text-sm">03</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-100">
                    Networking, Security, Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
