"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
            Let&apos;s Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Something Great.
            </span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            I&apos;m open to internships, SWE roles, and interesting collaboration opportunities.
            Let&apos;s connect.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactLink
            href={`mailto:${siteConfig.email}`}
            icon={<Mail size={24} />}
            label="Email"
            value={siteConfig.email}
            delay={0}
          />
          <ContactLink
            href={siteConfig.github}
            icon={<Github size={24} />}
            label="GitHub"
            value="@Mohandas13-git"
            delay={0.1}
          />
          <ContactLink
            href={siteConfig.linkedin}
            icon={<Linkedin size={24} />}
            label="LinkedIn"
            value="Mohandas Rathod"
            delay={0.2}
          />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton href={`mailto:${siteConfig.email}`}>
            <span className="flex items-center gap-3">
              <Send size={18} />
              Get in Touch
            </span>
          </MagneticButton>
        </motion.div>

      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}

function ContactLink({ href, icon, label, value, delay }: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-2xl p-8 flex items-center gap-6 group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-widest text-zinc-600 mb-1">{label}</p>
        <p className="text-white font-medium truncate">{value}</p>
      </div>
      <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </motion.a>
  );
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-500"
    >
      {children}
    </motion.a>
  );
}
