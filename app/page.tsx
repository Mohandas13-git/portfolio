import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}
