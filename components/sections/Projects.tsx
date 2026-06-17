import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built end to end"
          description="Four projects, each picked to show a different part of the stack — from security-conscious full-stack apps to a distributed system built from sockets up."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
