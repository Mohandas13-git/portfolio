"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { education } from "@/lib/data";

export function Experience() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" ref={container} className="relative py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Education <span className="text-zinc-500">&amp; Journey.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            The academic foundation that drives my engineering thinking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-white to-white/20"
            />
          </div>

          <div className="space-y-24">
            {education.map((entry, i) => (
              <motion.div
                key={entry.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-zinc-900 z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass rounded-2xl p-8 space-y-4 hover:border-white/20 transition-colors duration-500">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                      {entry.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {entry.degree}
                    </h3>
                    <p className="text-zinc-400 font-medium">
                      {entry.institution}
                    </p>
                    <ul className="space-y-2">
                      {entry.details.map((detail) => (
                        <li key={detail} className="text-sm text-zinc-500 leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
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
