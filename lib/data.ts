// Central content store. Edit this file to update everything the
// portfolio renders — no content lives inside components.

export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    blurb: "Languages I think and build in.",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Technologies",
    blurb: "For shipping the interfaces on top of the systems.",
    items: ["HTML", "CSS", "React", "Next.js"],
  },
  {
    title: "Database",
    blurb: "Storing and querying state reliably.",
    items: ["SQL"],
  },
  {
    title: "Core Computer Science",
    blurb: "The fundamentals everything else is built on.",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Software Engineering",
    ],
  },
];

export const interests: string[] = [
  "Backend Development",
  "System Design",
  "Distributed Systems",
  "Competitive Programming",
  "Artificial Intelligence",
  "Full Stack Development",
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  description: string;
  features: string[];
  architecture: string;
  challenges: string;
  impact: string;
  stack: string[];
  github?: string;
  demo?: string;
  status: "Production" | "In development" | "Completed";
};

// NOTE: github/demo URLs below are placeholders — swap in your real repo
// links (and a live demo URL, if a project has one) before deploying.
export const projects: Project[] = [
  {
    slug: "quizify",
    title: "Quizify",
    tagline: "Secure online examinations for a closed college community",
    role: "Full Stack Developer",
    description:
      "An online examination mobile application built specifically for BMS College of Engineering. Quizify restricts registration to official BMSCE email addresses, so the exam population is verifiably the student body it's built for, then layers authentication, timed exams, and anti-cheating controls on top.",
    features: [
      "Registration locked to official BMSCE email addresses — students from other institutions cannot sign up",
      "Role-based authentication and authorization for students and faculty",
      "Timer-based examinations with automatic submission on expiry",
      "App-switch, background, and screen-exit detection that auto-submits the exam",
      "Real-time result generation immediately after submission",
      "Faculty-facing question bank and exam management tools",
    ],
    architecture:
      "A client-server split where the exam client enforces session integrity (visibility and focus events) while the server remains the source of truth for timers and submission state, so a client-side bug or manipulation attempt can't extend an exam or fake a score.",
    challenges:
      "The core challenge was distinguishing genuine accidental app-switches from deliberate cheating attempts without over-triggering false positives, while keeping the app usable on lower-end student devices and inconsistent college Wi-Fi.",
    impact:
      "Used to run verifiably integrity-checked exams for an institution-specific student population, reducing the manual proctoring burden on faculty.",
    stack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/your-username/quizify",
    status: "Completed",
  },
  {
    slug: "voluntree",
    title: "Voluntree",
    tagline: "Connecting student volunteers with the events that need them",
    role: "Full Stack Developer",
    description:
      "An event and volunteer management mobile application that connects organizers with student volunteers — handling everything from event creation to attendance and credit tracking once the event is over.",
    features: [
      "Event creation and lifecycle management for organizers",
      "Volunteer registration and a personal volunteer dashboard",
      "Separate organizer dashboard for managing rosters and events",
      "Participation and attendance tracking per event",
      "Academic credit tracking tied to verified attendance",
      "Event scheduling with organizer-side visibility into sign-ups",
    ],
    architecture:
      "Two distinct dashboards (organizer and volunteer) sit on top of a shared events-and-participation data model, so attendance recorded on the organizer side updates a volunteer's credit history without duplicate data entry.",
    challenges:
      "Designing a participation/attendance model that stayed consistent across two different user roles editing the same event record was the central design problem — solved by making attendance state organizer-owned and volunteer-visible, not volunteer-editable.",
    impact:
      "Gives student volunteers a verifiable record of hours and credits, and gives organizers a single place to manage events instead of spreadsheets and forms.",
    stack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/your-username/voluntree",
    status: "Completed",
  },
  {
    slug: "ai-chef",
    title: "AI Chef",
    tagline: "Turning whatever's in your fridge into a recipe",
    role: "AI Application Developer",
    description:
      "An intelligent recipe recommendation system that takes the ingredients a user already has and generates cuisine-appropriate recipes with full cooking instructions, aimed at reducing food waste rather than shopping for a recipe.",
    features: [
      "Ingredient-based recipe generation from a free-text or list input",
      "AI-powered recommendations ranked by ingredient match",
      "Multiple cuisine suggestions for the same ingredient set",
      "Full cooking instructions generated alongside each recipe",
      "Designed explicitly around reducing food waste",
    ],
    architecture:
      "A prompt-orchestration layer translates the user's ingredient list into a structured generation request, constrains the model to ingredients actually on hand (with sensible pantry-staple exceptions), and parses the response into a consistent recipe schema for the UI.",
    challenges:
      "Keeping generated recipes grounded in the ingredients actually provided — rather than the model hallucinating extra ingredients — required tightening the prompt structure and validating the output against the input list before rendering it.",
    impact:
      "Lets users cook from what they already have instead of defaulting to takeout or a grocery run, directly targeting household food waste.",
    stack: ["Python", "JavaScript", "AI/LLM APIs", "REST"],
    github: "https://github.com/your-username/ai-chef",
    status: "Completed",
  },
  {
    slug: "nodeshare",
    title: "NodeShare",
    tagline: "A distributed file-sharing system built to study distributed systems",
    role: "Software Developer",
    description:
      "A distributed file-sharing system designed for efficient file distribution and synchronization across connected nodes — built less to compete with existing tools and more to work through the real mechanics of distributed systems.",
    features: [
      "Distributed architecture across multiple connected nodes",
      "File synchronization between peers",
      "Network communication layer for node-to-node transfer",
      "Resource discovery so nodes can locate files across the network",
      "Design decisions made explicitly for scalability",
      "Reliability concepts applied to handle dropped or slow nodes",
    ],
    architecture:
      "Each node acts as both client and server: it advertises the files it holds, queries peers for resources it doesn't have, and synchronizes state changes outward, avoiding a single central index that would become a bottleneck or single point of failure.",
    challenges:
      "Resource discovery without a central directory was the hardest part — balancing how aggressively nodes broadcast availability against the network chatter that creates, while still keeping file lookups fast.",
    impact:
      "A working demonstration of core distributed-systems concepts — partitioning, synchronization, and discovery — applied to a concrete, runnable system rather than left as theory.",
    stack: ["Java", "Networking (Sockets)", "Distributed Systems", "Multithreading"],
    github: "https://github.com/your-username/nodeshare",
    status: "Completed",
  },
];

export type AcademicProject = {
  title: string;
  description: string;
  concepts: string[];
};

export const academicProjects: AcademicProject[] = [
  {
    title: "CPU Scheduling Simulator",
    description:
      "A simulator implementing FCFS, SJF, Round Robin, and Priority scheduling, visualizing Gantt charts and computing waiting/turnaround time across algorithms.",
    concepts: ["Process Scheduling", "Operating Systems", "Gantt Charts"],
  },
  {
    title: "Memory Management Simulator",
    description:
      "Simulates paging and segmentation strategies, including page replacement algorithms (FIFO, LRU, Optimal), to compare fault rates under different memory pressure scenarios.",
    concepts: ["Paging", "Page Replacement", "Operating Systems"],
  },
  {
    title: "File System Simulator",
    description:
      "Models file allocation methods (contiguous, linked, indexed) on a simulated disk to compare fragmentation and access-time trade-offs.",
    concepts: ["File Allocation", "Disk Scheduling", "Operating Systems"],
  },
  {
    title: "Network Packet Analyzer",
    description:
      "Captures and parses network packets to inspect protocol headers and traffic patterns, built to reinforce how data actually moves across the OSI stack.",
    concepts: ["Packet Parsing", "Protocols", "Computer Networks"],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "Secondary School Leaving Certificate (SSLC) - 10th Grade",
    institution: "Government High School Rummanagud, Taluka Chincholi, Dist Kalaburagi",
    period: "Completed with 90.88%",
    details: [
      "Karnataka State Board",
    ],
  },
  {
    degree: "Pre-University Course (PUC) - 12th Grade Science",
    institution: "Shree Guru PU Independent College of Science, Kalaburagi",
    period: "Completed with 91.66%",
    details: [
      "Karnataka State Board",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "BMS College of Engineering",
    period: "2024 — 2028",
    details: [
      "Relevant coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Software Engineering",
      "Academic interests: distributed systems, backend architecture, and systems-level programming",
      "Core CS subjects form the basis for all four flagship projects in this portfolio",
    ],
  },
];

export const focusAreas: string[] = [
  "Operating Systems",
  "Computer Networks",
  "Distributed Systems",
  "Backend Development",
  "Artificial Intelligence",
];
