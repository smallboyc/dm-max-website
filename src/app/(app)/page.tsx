import Education from "@/components/Education";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="my-20 flex flex-col gap-y-20">
      <Education />
      <About />
      <Tools />
      <Contact />
    </div>
  );
}
