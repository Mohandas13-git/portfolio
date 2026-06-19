"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutMe() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={container} className="relative py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          style={{ y }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Engineering <br />
            <span className="text-muted">the Future.</span>
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-muted leading-relaxed font-light">
            <p>
              I am a Full Stack Developer and AI Builder currently pursuing a Bachelor of Engineering in Computer Science at BMS College of Engineering.
            </p>
            <p>
              My passion lies in building distributed systems, crafting premium user interfaces, and solving complex problems with clean, scalable code. From secure examination platforms to intelligent recipe generators, I build software that makes a tangible impact.
            </p>
          </div>
        </motion.div>
        
        <div className="flex-1 relative aspect-square w-full max-w-md">
          {/* Glassmorphism card or placeholder for an image/abstract visual */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent border border-white/10 rounded-3xl glass shadow-2xl flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
             <div className="w-32 h-32 rounded-full bg-white/10 blur-3xl absolute top-10 left-10"></div>
             <div className="w-40 h-40 rounded-full bg-white/5 blur-3xl absolute bottom-10 right-10"></div>
             <span className="text-white/30 text-6xl font-serif italic">M.R</span>
          </div>
        </div>
      </div>
    </section>
  );
}
