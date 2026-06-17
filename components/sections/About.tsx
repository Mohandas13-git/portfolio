import { Brain, Cpu, Network, Server, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/constants";
import { focusAreas } from "@/lib/data";

const focusIcons: Record<string, typeof Cpu> = {
  "Operating Systems": Cpu,
  "Computer Networks": Network,
  "Distributed Systems": Share2,
  "Backend Development": Server,
  "Artificial Intelligence": Brain,
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="What I'm building toward"
          description="Where I'm focused, what I'm working on, and why."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} who cares less about
              the framework of the week and more about what happens underneath it: how a process
              gets scheduled, how a packet finds its way across a network, how a system keeps
              working when one of its nodes doesn&apos;t.
            </p>
            <p>
              That curiosity is what pulled me toward backend development, distributed systems,
              operating systems, and computer networks — the layers that decide whether software
              is actually reliable, not just functional in a demo. Quizify and NodeShare exist
              because I wanted to build real answers to &quot;what happens when this fails,&quot;
              not just read about it.
            </p>
            <p>
              My goal is to become a software engineer who builds efficient, scalable, and
              genuinely useful systems — and who keeps getting measurably better at
              problem-solving and engineering practice along the way, whether that&apos;s through
              competitive programming, AI experimentation, or full-stack work end to end.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Focus areas
              </p>
              <ul className="flex flex-col gap-4">
                {focusAreas.map((area) => {
                  const Icon = focusIcons[area] ?? Cpu;
                  return (
                    <li key={area} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface2 text-accent">
                        <Icon size={16} />
                      </span>
                      <span className="text-sm text-ink sm:text-base">{area}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
