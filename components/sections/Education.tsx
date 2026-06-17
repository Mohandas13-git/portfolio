"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="relative ml-3 border-l border-border pl-8">
          {education.map((entry, idx) => (
            <motion.div
              key={entry.degree}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-accent">
                <GraduationCap size={16} />
              </span>

              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-ink">{entry.degree}</h3>
                  <span className="font-mono text-xs text-muted">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-accent">{entry.institution}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-link" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <div className="relative flex items-center gap-3 pt-1">
            <span className="absolute -left-[2.15rem] flex h-3 w-3 items-center justify-center rounded-full border-2 border-bg bg-signal" />
            <span className="font-mono text-xs uppercase tracking-wide text-muted">currently here</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
