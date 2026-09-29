import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-ink/10 py-6 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Meaza Tadele
      </footer>
    </>
  );
}
