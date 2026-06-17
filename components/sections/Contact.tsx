"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

type Status = "idle" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to internships, placements, and software engineering roles — reach out directly or use the form."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface2 text-accent">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">Email</p>
                <p className="font-mono text-xs text-muted">{siteConfig.email}</p>
              </div>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface2 text-accent">
                <Github size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">GitHub</p>
                <p className="font-mono text-xs text-muted">{siteConfig.github.replace("https://", "")}</p>
              </div>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface2 text-accent">
                <Linkedin size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">LinkedIn</p>
                <p className="font-mono text-xs text-muted">{siteConfig.linkedin.replace("https://", "")}</p>
              </div>
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="resize-none rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
                placeholder="What would you like to talk about?"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent/90"
            >
              <Send size={14} />
              Send message
            </button>

            {status === "sent" ? (
              <p className="mt-3 font-mono text-xs text-signal">
                Opening your email client with this message pre-filled.
              </p>
            ) : (
              <p className="mt-3 text-xs text-muted">
                Submitting opens your email client with this pre-filled. Replace with a
                Formspree/Resend endpoint for a backend-free send.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
