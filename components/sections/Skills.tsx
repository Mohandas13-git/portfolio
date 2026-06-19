"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SkillSpheres } from "@/components/3d/SkillSpheres";
import { skillGroups } from "@/lib/data";

export function Skills() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={container} className="relative py-32 px-6 md:px-20 overflow-hidden bg-surface-2/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="flex-1 space-y-12">
          <motion.div style={{ y }}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Technical <br />
              <span className="text-muted">Arsenal.</span>
            </h2>
            <p className="text-lg text-muted/80 max-w-md">
              The tools and technologies I use to bring ideas to life. From low-level systems to high-end interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-white/90">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:bg-white/10 hover:border-white/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <SkillSpheres />
        </div>

      </div>
    </section>
  );
}
