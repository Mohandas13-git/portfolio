"use client";

import { motion } from "framer-motion";
import { focusAreas, interests, academicProjects } from "@/lib/data";
import { Award, Zap, BookOpen } from "lucide-react";

export function Achievements() {
  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden bg-zinc-950/50">
      <div className="max-w-7xl mx-auto space-y-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Achievements <span className="text-zinc-500">&amp; Focus.</span>
          </h2>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Zap size={18} className="text-white/60" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Areas of Interest
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-white/25 transition-all cursor-default"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Academic Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 space-y-4 group hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <BookOpen size={18} className="text-white/60" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-500"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
