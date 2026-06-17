"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChefHat, ChevronDown, ExternalLink, Github, Network, ShieldCheck, Users } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof ShieldCheck> = {
  quizify: ShieldCheck,
  voluntree: Users,
  "ai-chef": ChefHat,
  nodeshare: Network,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = icons[project.slug] ?? ShieldCheck;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div className="relative flex h-32 items-center justify-center overflow-hidden bg-grid bg-surface2 sm:h-36">
        <span className="absolute select-none font-display text-5xl font-semibold uppercase tracking-tight text-border sm:text-6xl">
          {project.title}
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg text-accent shadow-lg">
          <Icon size={26} />
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-border bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted">
          {project.status}
        </span>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">{project.title}</h3>
          <span className="font-mono text-xs uppercase tracking-wide text-accent">{project.role}</span>
        </div>
        <p className="mt-1 text-sm text-muted sm:text-base">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">{project.description}</p>

        <ul className="mt-5 flex flex-col gap-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm text-ink/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-5 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-link transition-colors hover:text-accent"
        >
          {expanded ? "Hide" : "Architecture & challenges"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                    Architecture
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{project.architecture}</p>
                </div>
                <div>
                  <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                    Challenges solved
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{project.challenges}</p>
                </div>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">Impact</p>
                <p className="text-sm leading-relaxed text-muted">{project.impact}</p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-surface2 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
              )}
            >
              <Github size={14} />
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-xs font-medium text-bg transition-colors hover:bg-accent/90"
            >
              <ExternalLink size={14} />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
