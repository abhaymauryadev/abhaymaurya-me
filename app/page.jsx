
import Hero from "@/components/Hero";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Works />
      <Projects/>
      {/* <Footer /> */}
    </>
  );
}
