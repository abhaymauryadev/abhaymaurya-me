
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import Hero from "@/sections/Hero";
import Works from "@/sections/Works";
import Projects from "@/sections/Project";
import Skill from "@/sections/Skills";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Loading from "@/app/loading";

export default function Home() {
  return (
    <>
      <Loading />
      <Navbar />
      <Hero />
      <Works />
     
      <Projects  direction="vertical"  data={[
        {
          title: "E-Commerce Platform",
          desc: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and real-time inventory management.",
          video: "/videos/ecommerce-demo.mp4"
        },
        {
          title: "Task Management App",
          desc: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
          video: "/videos/taskapp-demo.mp4"
        }
      ]} />
     

      <Skill />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
