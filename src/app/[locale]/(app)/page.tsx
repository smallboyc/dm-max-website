import Education from "@/components/Education";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Join from "@/components/Join";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <Join />
        <Education />
        <About />
        <Tools />
        <Contact />
      </div>
    </>
  );
}
