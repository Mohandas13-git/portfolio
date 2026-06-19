"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroScene } from "@/components/3d/HeroScene";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-bg">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              {siteConfig.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="text-xl md:text-2xl text-muted font-light tracking-wide">
              {siteConfig.role}
            </p>
            <p className="mt-2 text-sm text-muted/60 uppercase tracking-[0.3em]">
              AI Builder | Problem Solver
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
