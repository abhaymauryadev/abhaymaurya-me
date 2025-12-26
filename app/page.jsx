
import Hero from "@/components/Hero";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <Footer />
    </>
  );
}
