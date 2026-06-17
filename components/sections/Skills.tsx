"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { interests, skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The stack underneath the projects"
          description="Grouped by what each tool is actually for, not just listed."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: groupIdx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <h3 className="font-display text-base font-medium text-ink">{group.title}</h3>
              <p className="mt-1 text-xs text-muted">{group.blurb}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface2 px-2.5 py-1.5 font-mono text-[11px] text-ink transition-colors group-hover:border-border hover:!border-accent/60 hover:!text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 rounded-xl border border-border bg-surface p-5"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Areas of interest
          </p>
          <div className="flex flex-wrap gap-2.5">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-border px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
