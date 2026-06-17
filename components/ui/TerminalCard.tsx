"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const COMMAND = "whoami --verbose";

const rows: { key: string; value: string }[] = [
  { key: "user", value: "mohandas-rathod" },
  { key: "role", value: siteConfig.role },
  { key: "focus", value: "backend · distributed systems · OS · networks" },
  { key: "status", value: siteConfig.statusLabel },
  { key: "location", value: siteConfig.location },
];

/** Tiny node-graph glyph — a quiet nod to distributed systems, not a logo. */
function NodeGlyph() {
  return (
    <svg width="34" height="28" viewBox="0 0 34 28" fill="none" aria-hidden="true">
      <g stroke="rgb(var(--accent))" strokeWidth="1.2" opacity="0.8">
        <line x1="6" y1="6" x2="17" y2="20" />
        <line x1="28" y1="8" x2="17" y2="20" />
        <line x1="6" y1="6" x2="28" y2="8" />
      </g>
      <circle cx="6" cy="6" r="2.5" fill="rgb(var(--link))" />
      <circle cx="28" cy="8" r="2.5" fill="rgb(var(--link))" />
      <circle cx="17" cy="20" r="3" fill="rgb(var(--accent))" />
    </svg>
  );
}

export function TerminalCard() {
  const [typed, setTyped] = useState("");
  const [showRows, setShowRows] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setShowRows(true), 250);
      }
    }, 48);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-surface/80 p-5 font-mono text-sm shadow-2xl shadow-black/10 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <span className="text-xs text-muted">guest@mohandas — zsh</span>
        <NodeGlyph />
      </div>

      <div className="text-ink">
        <span className="text-link">guest@mohandas</span>
        <span className="text-muted">:~$ </span>
        <span>{typed}</span>
        <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-accent animate-blink" />
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        {rows.map((row, idx) => (
          <motion.div
            key={row.key}
            initial={{ opacity: 0, x: -6 }}
            animate={showRows ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="grid grid-cols-[5.5rem_1fr] gap-3 text-xs sm:text-sm"
          >
            <span className="text-muted">{row.key}</span>
            <span className="text-ink">{row.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
