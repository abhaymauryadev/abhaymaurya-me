"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Projects({ direction = "vertical", data }) {
  const sectionRef = useRef(null);

   useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".stack-item");

      // Initial state
      items.forEach((item, index) => {
        if (index !== 0) {
          direction === "horizontal"
            ? gsap.set(item, { xPercent: 100 })
            : gsap.set(item, { yPercent: 100 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: `+=${items.length * 100}%`,
          scrub: 1,
        },
      });

      items.forEach((item, i) => {
        tl.to(item, {
          scale: 0.9,
          borderRadius: "16px",
        });

        if (items[i + 1]) {
          tl.to(
            items[i + 1],
            direction === "horizontal"
              ? { xPercent: 0 }
              : { yPercent: 0 },
            "<"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <>
    <section className='min-h-screen max-w-9xl mx-auto bg-[#0a0a0a] text-white'>
     <div className="min-h-screen max-w-9xl mx-auto">
     <div className="lg:max-w-7xl max-w-104 mx-auto mt-24 ">
          <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-extrabold tracking-tight uppercase  ">selected works/</h1>
      </div>

     <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-6 gap-6 px-4">
          {/* Left side spacing (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Services heading */}
          <div className="md:col-span-1 flex flex-col">
            <h1 className="font-light text-lg sm:text-xl md:text-2xl">(PROJECTS)</h1>
          </div>

          {/* Description */}
          <div className="md:col-span-2 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
             Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
            </p>
          </div>
        </div>

    </div>

    
    </section>

    <section ref={sectionRef} className=" relative h-184 overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 flex ">
        {data && data.map((item, index) => (
          <div
            key={index}
            className="stack-item absolute inset-0 flex items-center justify-center lg:p-10  h-150 "
          >
            <div className="relative lg:w-full w-200 h-180 lg:h-184 rounded-xl overflow-hidden border border-white/30 bg-black gap-12 mt-36">
              {/* Content */}
              <div className="absolute z-10 top-8 left-8 max-w-md">
                <h2 className="text-4xl font-bold opacity-80">
                  {index + 1}
                </h2>
                <h3 className="text-2xl font-semibold mt-2">
                  {item.title}
                </h3>
                <p className="text-white/70 mt-3">
                  {item.desc}
                </p>
              </div>

              {/* Video */}
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover bg-[#0a0a0a] "
              /> 
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
