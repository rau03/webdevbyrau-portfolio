import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AboutContact from "@/components/AboutContact";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <AboutContact />
      </main>
    </>
  );
}
