"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function FeaturedProjects() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section ref={container} className="relative py-32 px-6 md:px-20 bg-bg">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Featured <span className="text-muted">Work.</span>
          </motion.h2>
          <p className="text-lg text-muted/80 max-w-2xl mx-auto">
            Selected projects that showcase my ability to build complex, full-stack applications.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale: smoothScale, opacity }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
    >
      {/* Project Visual */}
      <div className="flex-1 w-full aspect-[4/3] group perspective-1000">
        <motion.div 
          className="relative w-full h-full glass rounded-3xl overflow-hidden transition-transform duration-700 ease-out group-hover:rotate-x-2 group-hover:rotate-y-[-2deg] group-hover:scale-[1.02]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
          {/* Decorative elements representing the project */}
          <div className="absolute inset-0 flex flex-col p-8 justify-between opacity-30 group-hover:opacity-60 transition-opacity duration-500">
             <div className="text-4xl font-mono opacity-20">{project.slug.toUpperCase()}</div>
             <div className="flex gap-2">
               {project.stack.slice(0,3).map((s: string) => (
                 <div key={s} className="h-2 w-12 bg-white/20 rounded-full" />
               ))}
             </div>
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <span className="text-accent uppercase tracking-widest text-xs font-bold">{project.status}</span>
          <h3 className="text-3xl md:text-5xl font-bold">{project.title}</h3>
          <p className="text-xl text-white/60 font-light">{project.tagline}</p>
        </div>

        <p className="text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4">
          {project.stack.map((tech: string) => (
            <span key={tech} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/70">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-6">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <Github size={18} /> Source Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
