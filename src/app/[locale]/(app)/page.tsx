"use client";
import Education from "@/components/Education";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 ">
      <Hero />
      <Education />
      <About />
      <Tools />
      <Contact />
    </div>
  );
}
