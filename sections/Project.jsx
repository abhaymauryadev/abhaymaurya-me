"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "@/components/Video";
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
        <div className="min-h-screen max-w-9xl mx-auto text-white">
  {/* Section Title */}
  <div className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6">
    <h1
      className="
        font-extrabold tracking-tight uppercase
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        xl:text-[6.5rem]
      "
    >
      Selected Works /
    </h1>
  </div>

  {/* Content Grid */}
  <div
    className="
      max-w-7xl
      mx-auto
      mt-12 sm:mt-16 lg:mt-24
      px-4 sm:px-6
      grid
      grid-cols-1
      md:grid-cols-6
      gap-8
    "
  >
    {/* Spacer (desktop only) */}
    <div className="hidden md:block md:col-span-2"></div>

    {/* Projects label */}
    <div className="md:col-span-1 flex items-start">
      <h2
        className="
          font-light
          uppercase
          tracking-wide
          text-sm
          sm:text-base
          md:text-lg
        "
      >
        (Projects)
      </h2>
    </div>

    {/* Description */}
    <div className="md:col-span-3">
      <p
        className="
          text-base
          sm:text-lg
          md:text-xl
          leading-relaxed
          max-w-prose
        "
      >
        Thoughtfully crafted digital experiences that blend utility and
        aesthetics into something functional, memorable, and refined.
      </p>
    </div>
  </div>
</div>



      </section>

      <section ref={sectionRef} className=" relative h-184 overflow-hidden bg-[#0a0a0a] text-black">
        <div className="absolute inset-0 flex ">
          {data && data.map((item, index) => (
            <div
              key={index}
              className="stack-item absolute inset-0 flex items-center justify-center lg:p-10 h-screen lg:h-150"
            >
              <div className="relative w-[90vw] lg:w-full h-[60vh] lg:h-184 rounded-xl overflow-hidden border border-white/30 bg-black text-black gap-12 mt-24 lg:mt-36">
                {/* Content */}
                <div className="absolute z-10 top-8 left-8 max-w-md text-black">
                  <h2 className="text-4xl font-bold opacity-80">
                    {index + 1}
                  </h2>
                  <h3 className="text-2xl font-semibold mt-2">
                    {item.title}
                  </h3>
                  <p className="text-black/70 mt-3 ">
                    {item.desc}
                  </p>
                </div>

                {/* Video */}
                <Video
                  src={item.video}
                  className="absolute inset-0 w-full h-full object-cover bg-[#0a0a0a]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
