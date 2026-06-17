"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AcademicProjects() {
  return (
    <section id="academic-projects" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Roadmap"
          title="Systems Projects: Learning by Building"
          description="Reading theory gives you the vocabulary, but building a system from scratch gives you the intuition. When you build a stripped-down version of a complex system, you strip away production-grade optimizations and focus entirely on the core algorithm or architecture."
        />

        <div className="mt-12 space-y-16">
          <RoadmapSection
            number="1"
            title="Operating Systems & Low-Level"
            description="Instead of just reading about memory management and concurrency, write code that interacts directly with the hardware or simulates it."
            items={[
              {
                title: "A Custom Memory Allocator (malloc and free)",
                concept: "Memory management, heap structure, fragmentation.",
                build: "Implement your own malloc, calloc, and free in C using system calls like sbrk. Implement a free list (linked list) and strategies like First-Fit or Best-Fit to manage memory blocks.",
              },
              {
                title: "A User-Space Thread Library",
                concept: "Context switching, CPU scheduling, green threads.",
                build: "Use POSIX functions like getcontext and setcontext in C to implement your own cooperative thread scheduler. Write code where threads yield control to each other voluntarily.",
              }
            ]}
          />

          <RoadmapSection
            number="2"
            title="Computer Networks"
            description="Abstract away the browser and look at how bytes actually travel across the wire."
            items={[
              {
                title: "A Single-Threaded HTTP/1.1 Server",
                concept: "TCP sockets, protocol parsing, stateless communication.",
                build: "Using raw TCP sockets (in Python, Go, or C), listen on a port, accept a connection, parse an incoming HTTP request string, read a file from disk, and format a proper HTTP response (with headers and status codes).",
              },
              {
                title: "A Custom DNS Resolver",
                concept: "UDP, binary packet parsing, bitwise operations, DNS tree hierarchy.",
                build: "Send a raw UDP binary packet to 8.8.8.8 querying a domain name, parse the binary response packet by reading the exact byte flags, and print out the IP address.",
              }
            ]}
          />

          <RoadmapSection
            number="3"
            title="Databases & Storage"
            description="Move past SQL queries and look at how data is safely stored on a spinning disk or SSD."
            items={[
              {
                title: "A Key-Value Store with an LSM Tree",
                concept: "Write-ahead logging (WAL), memtables, SSTables, serialization.",
                build: "Write an in-memory map (MemTable) that flushes to disk as a sorted file (SSTable) when it gets too big. Every write goes to an append-only log first for crash recovery.",
              },
              {
                title: "A B-Tree From Scratch",
                concept: "Disk-backed data structures, node splitting, indexing.",
                build: "Implement a standard B-Tree or B+-Tree. Understand exactly why databases use wide, shallow trees instead of deep binary trees to minimize disk I/O.",
              }
            ]}
          />

          <RoadmapSection
            number="4"
            title="Compilers & Language Runtimes"
            description="Stop treating your programming language like a black box."
            items={[
              {
                title: "A Tree-Walk Interpreter",
                concept: "Lexing, parsing, Abstract Syntax Trees (ASTs), evaluation.",
                build: "Follow the first half of Crafting Interpreters. Turn a string of code into tokens, parse those tokens into a tree structure, and recursively evaluate that tree to execute code.",
              },
              {
                title: "A Virtual Machine (VM)",
                concept: "Bytecode, stack-based vs. register-based architectures, instruction sets.",
                build: "Define your own simple bytecode (e.g., PUSH 5, ADD). Write a loop that reads an array of these bytes, maintains a program counter, and updates a virtual CPU stack.",
              }
            ]}
          />

          <RoadmapSection
            number="5"
            title="Distributed Systems"
            description="What happens when one computer isn't enough, or when computers inevitably fail?"
            items={[
              {
                title: "A Toy MapReduce Framework",
                concept: "Data partitioning, parallel processing, fault tolerance.",
                build: "Write a master process that splits a massive text file, assigns 'Map' tasks to worker processes, collects the intermediate keys, and assigns 'Reduce' tasks to aggregate the results.",
              },
              {
                title: "A Basic RPC (Remote Procedure Call) Library",
                concept: "Serialization/Deserialization, network abstraction.",
                build: "Make a client call a function that executes on a server machine as if it were local, handling the object serialization under the hood.",
              }
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-medium text-accent">Pro-Tips for System Builds</h3>
            <ol className="mt-4 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted sm:text-base">
              <li>
                <strong className="text-ink">Don't use high-level frameworks:</strong> If you are building a web server, don't use Express or Flask; use raw TCP sockets. If you are building a database, use raw file I/O operations (open, read, write).
              </li>
              <li>
                <strong className="text-ink">Embrace the constraints:</strong> Try writing these in systems languages like <strong className="text-ink">C, C++, Rust, or Go</strong>. Managing your own bytes, pointers, or concurrency primitives forces you to understand why modern languages do what they do.
              </li>
            </ol>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function RoadmapSection({
  number,
  title,
  description,
  items,
}: {
  number: string;
  title: string;
  description: string;
  items: { title: string; concept: string; build: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-display text-lg font-medium text-ink">
          {number}
        </div>
        <div>
          <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
      </div>
      <div className="grid gap-4 pl-14 sm:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-surface p-5">
            <h4 className="font-medium text-ink">{item.title}</h4>
            <div className="mt-3 space-y-2 text-sm">
              <p>
                <strong className="text-ink">The Concept:</strong> <span className="text-muted">{item.concept}</span>
              </p>
              <p>
                <strong className="text-ink">The Build:</strong> <span className="text-muted">{item.build}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
