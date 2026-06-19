"use client";

import { siteConfig } from "@/lib/constants";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030303] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Designed &amp; Built with precision.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300">
            <Github size={18} />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="text-zinc-600 hover:text-white transition-colors duration-300">
            <Mail size={18} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-600 hover:text-white transition-colors duration-300"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
