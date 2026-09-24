export const personalInfo = {
  name: "Riya Rathod",
  location: "Pune, Maharashtra",
  email: "riyarathod415@gmail.com",
  github: "https://github.com/riyaayay",
  linkedin: "https://linkedin.com/in/riya-rathod-75651a282",
  resumeUrl: "/resume.pdf",
  tagline:
    "CS engineer building AI systems that verify themselves before trusting their own output.",
};

export const about = {
  paragraph:
    "I'm a Computer Science engineer pursuing a dual degree — a B.Tech in CSE (AI & ML) at VIT Bhopal University and a BS in Data Science and Applications at IIT Madras. I'm genuinely drawn to AI systems that check their own reliability before anyone trusts their output, whether that's a RAG pipeline verifying its own answers or a statistical audit catching bias in a model's decisions. Alongside that, I build real, production engineering — full-stack apps, databases with real transactional guarantees, and cloud-deployed services — because I like shipping things that actually have to hold up.",
  focusAreas: [
    "RAG verification",
    "Statistical bias auditing",
    "Full-stack engineering",
    "Cloud deployment",
  ],
};

export const experience = [
  {
    id: "pragati",
    role: "Full-Stack Software Engineering Intern",
    org: "Pragati Machinery Groups",
    location: "Pune, India — Hybrid",
    period: "June 2026 – Present",
    stack: ["Next.js (App Router)", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM"],
    bullets: [
      "Built an event-driven status ledger and reactive projection engine tracking 350+ fleet machines.",
      "Used atomic PostgreSQL transactions via Prisma ORM with Serializable isolation to prevent concurrency conflicts.",
      "Designed versioned snapshot models and immutable audit trails to track equipment history without mutating past records.",
      "Diagnosed and fixed a silent UTC/IST timestamp bug that was quietly corrupting submission dates in production.",
    ],
  },
  {
    id: "nfc",
    role: "AI / Deep Learning Intern",
    org: "Nuclear Fuel Complex, Department of Atomic Energy",
    location: "Hyderabad, India — Onsite",
    period: "Dec 2025 – Jan 2026",
    stack: ["Python", "Computer Vision"],
    bullets: [
      "Refactored an existing computer-vision pipeline into modular, testable components.",
      "Contributed preprocessing and validation improvements within a fixed 6-week engagement in a compliance-heavy, government-sector environment.",
    ],
  },
];

export const projects = [
  {
    id: "voltagent",
    name: "VoltAgent",
    size: "lg",
    tagline: "A verified RAG system for EV charging technicians",
    description:
      "Hybrid retrieval — Elasticsearch and Qdrant vector search — orchestrated with LangGraph, paired with a verifier agent that cross-checks generated answers against source chunks before they reach a technician. Tested against 10 deliberately wrong answers, it correctly flagged 8 as low-confidence.",
    stack: ["Python", "LangGraph", "Elasticsearch", "Qdrant", "FastAPI"],
    github: "https://github.com/riyaayay",
  },
  {
    id: "nyaya",
    name: "NYAYA",
    size: "md",
    tagline: "An AI compliance and bias-auditing platform",
    description:
      "Built solo, end-to-end. Applies statistical hypothesis testing — Pearson correlation, VIF, Disparate Impact Ratio — with SHAP explainability to evaluate ML model decisions for bias, behind a role-differentiated REST API.",
    stack: ["Python", "React", "SHAP"],
    github: "https://github.com/riyaayay",
  },
  {
    id: "nudgebot",
    name: "NudgeBot",
    size: "sm",
    tagline: "A Telegram agent built solo in one sitting",
    description:
      "Polls Google Classroom and diffs each check against the last, so it only pings on genuinely new assignments or grades. Built to fix a real, personally-felt annoyance.",
    stack: ["Python", "Telegram Bot API", "Google Classroom API"],
    github: "https://github.com/riyaayay",
  },
];

export const achievements = [
  {
    id: "amazon-mlss",
    title: "Amazon ML Summer School",
    detail: "Shortlisted — top 3,000 of 134,000+ applicants after a technical assessment.",
  },
  {
    id: "nasscom",
    title: "NASSCOM Tech Developers Hackathon 2025",
    detail: "Top 10 Finalist (AI Track), among 3,800+ teams.",
  },
  {
    id: "oci",
    title: "Oracle Cloud Infrastructure Certifications",
    detail: "OCI Foundations Associate and OCI AI Foundations Associate, certified.",
  },
];
