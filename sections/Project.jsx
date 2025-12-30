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
    <section className='min-h-screen max-w-9xl mx-auto '>
     <div className="min-h-screen max-w-9xl mx-auto">
      <div className=" max-w-7xl  mx-auto mt-24 ">
        <h1 className="text-8xl font-bold tracking-tighter">SELECTED WORKS /</h1>
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

    </div>

    
    </section>

    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        {data && data.map((item, index) => (
          <div
            key={index}
            className="stack-item absolute inset-0 flex items-center justify-center p-10"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black">
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
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
