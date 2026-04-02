export type Experience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Project = {
  name: string;
  stack: string;
  summary: string;
};

export const profile = {
  name: "Trung Le Huu",
  title: "AI-first Full-stack Engineer",
  location: "Hanoi, Vietnam",
  email: "huutrungle2001@gmail.com",
  phone: "+84 386 218 208",
  linkedin: "https://linkedin.com/in/huutrungle2001",
  github: "https://github.com/huutrungle2001",
  summary:
    "I design and ship practical software systems across agentic AI workflows, web product delivery, and applied optimization research. My work combines context engineering, full-stack implementation, and evidence-based iteration from prototype to production-ready flows.",
};

export const focusAreas = [
  "Agentic AI workflows with tool calling and human-in-the-loop validation",
  "Full-stack product development with Next.js, Node.js, FastAPI, and Supabase",
  "Context engineering for requirement intake, structured outputs, and retrieval",
  "Applied AI research with optimization and experimental evaluation",
];

export const experiences: Experience[] = [
  {
    organization: "ORLab, National Economics University",
    role: "Part-time Researcher",
    period: "Aug 2024 - Present",
    location: "Hanoi, Vietnam",
    highlights: [
      "Researching a 2-index stage-based formulation for the Flying Sidekick Traveling Salesman Problem.",
      "Implementing optimization models and conducting benchmark experiments using CPLEX.",
      "Contributing to modeling design, implementation workflow, and experimental analysis.",
    ],
  },
  {
    organization: "Quantum AI Lab, Phenikaa University",
    role: "Part-time Research Collaborator",
    period: "2024",
    location: "Hanoi, Vietnam",
    highlights: [
      "Explored machine learning approaches for inter-atomic interaction force prediction.",
      "Reviewed quantum physics datasets and force-field modeling literature.",
      "Prototyped and evaluated supervised ML pipelines with PhD researcher guidance.",
    ],
  },
  {
    organization: "Toshiba Software Development Vietnam (TSDV)",
    role: "Software Developer Trainee",
    period: "2023",
    location: "Hanoi, Vietnam",
    highlights: [
      "Maintained and debugged a large-scale C++ enterprise newspaper-composition application.",
      "Worked within a long-lived legacy codebase and internal deployment workflow.",
      "Focused on diagnosing and improving reliability of core C++ UI library components.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "HyperFlow",
    stack:
      "Next.js, shadcn/ui, Node.js, Supabase, LLM APIs, structured output workflows",
    summary:
      "Built AI-first MediaOps modules for structured creative requests, requirement clarification, and pre-review checks against brand-guideline context.",
  },
  {
    name: "LinguaLabs",
    stack:
      "Next.js, shadcn/ui, FastAPI, Supabase, LLM APIs, personalized planning",
    summary:
      "Developed a private tutor platform with entry assessment, CEFR mapping, post-assessment diagnostics, and personalized AI-assisted learning guidance.",
  },
  {
    name: "Global-AD Path",
    stack:
      "Python, PyTorch, XGBoost, audio transformers, 3D MRI modeling, FastAPI",
    summary:
      "Implemented a stratified multi-stage AI screening workflow for Alzheimer risk triage, biomarker validation, and MRI-based prognosis with governed multi-dataset integration.",
  },
  {
    name: "MoralOracle",
    stack: "Next.js, FastAPI, NEO blockchain",
    summary:
      "Created an on-chain moral debate platform with gamified participation, transparent reward logic, and AI-assisted argument analysis.",
  },
  {
    name: "LegalChain",
    stack: "Next.js, Rust, Solana blockchain",
    summary:
      "Delivered a legal-document workflow system for agreement, approval, and signing processes with modern web UX and robust business logic.",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "C/C++", "Java", "C#"],
  },
  {
    title: "Agentic AI",
    items: [
      "Context engineering",
      "Instruction design",
      "Tool and function calling",
      "Multi-step orchestration",
      "State and memory management",
      "Retrieval workflows",
      "Human-in-the-loop validation",
    ],
  },
  {
    title: "Platform Stack",
    items: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "Research and Advanced",
    items: [
      "TensorFlow",
      "PyTorch",
      "ResNet",
      "Vision Transformer (ViT)",
      "CPLEX",
      "Mixed-Integer Programming",
      "Metaheuristics",
      "NEO",
      "Solana",
      "Smart contracts",
    ],
  },
  {
    title: "Languages",
    items: ["Vietnamese (Native)", "English (IELTS 7.5)"],
  },
];

export const publication = {
  title: "A 2-index Stage-based Formulation for the Flying Sidekick Traveling Salesman Problem",
  venue: "CITA 2025",
  contribution: "Research, implementation, and experimental evaluation",
  link: "https://link.springer.com/chapter/10.1007/978-3-032-00972-2_6",
};

export const education = {
  degree: "Bachelor of Information Technology",
  major: "Artificial Intelligence and Data Science",
  school: "Phenikaa University",
  period: "2019 - 2025",
  gpa: "3.15 / 4.0",
  thesis:
    "A Stage-Based Formulation for the Flying Sidekick Traveling Salesman Problem (4.0 / 4.0)",
};

export const awards = [
  "Fourth Prize - Scoop AI Hackathon (2025)",
  "First Prize - Solana Consumer Hack 13 (2024)",
  "Bronze Medal - Vietnamese Student Mathematics Olympiad (2023)",
  "Bronze Medal - National Student Mathematics Olympiad (2022)",
  "Consolation Prize - Vietnamese Student Informatics Olympiad (2022)",
  "Honorable Mention - ICPC Asia Regional Contest (2022)",
  "Honorable Mention - ICPC Vietnam National Programming Contest (2019, 2020, 2022)",
  "Entrance Scholarship - Phenikaa University (2019)",
];

export const certifications = [
  "IELTS Academic 7.5 (Reading 8.5, Listening 8.0, Writing 6.5, Speaking 6.5)",
];

export const activities = [
  "Selected sponsored participant at Vibe Camp Bali 2025 for collaborative agentic AI prototyping.",
  "Selected sponsored delegate at Solana Summit APAC 2024.",
  "Core team member and Algorithm Lead at Google Developer Student Club, Phenikaa University.",
  "Member of Code Mely algorithm team, leading problem design and peer learning sessions.",
  "Volunteer educator at SOS Children's Villages Hanoi (2018 - 2020).",
];
