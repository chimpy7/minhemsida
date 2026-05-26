import {
  Box,
  Braces,
  Cloud,
  Code,
  Database,
  DatabaseZap,
  Gauge,
  GitBranch,
  Network,
  Palette,
  PanelLeft,
  Plug,
  RefreshCw,
  Server,
  ServerCog,
  Share2,
  ShieldCheck,
  Terminal,
  Triangle,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import aboutme from "../data/aboutme.json";

type SkillCategory = (typeof aboutme.skills)[number]["category"];

type TechMeta = {
  title?: string;
  Icon: LucideIcon;
  description: string;
};

const skills = aboutme.skills;

const cleanSkillItems = (items: string[] | string) =>
  (Array.isArray(items) ? items : [items]).map((item) =>
    String(item).trim().replace(/^\{/, "").replace(/\}$/, "")
  );

const techMeta: Record<string, TechMeta> = {
  vue: {
    title: "Vue",
    Icon: Triangle,
    description: "Progressive frontend framework for structured interfaces.",
  },
  react: {
    title: "React",
    Icon: Code,
    description: "Component-driven architecture for dynamic user interfaces.",
  },
  typescript: {
    title: "TypeScript",
    Icon: Braces,
    description: "Typed JavaScript for clearer contracts and safer refactors.",
  },
  tailwind: {
    title: "Tailwind CSS",
    Icon: Palette,
    description: "Utility-first styling for fast, consistent UI development.",
  },
  "next.js": {
    title: "Next.js",
    Icon: PanelLeft,
    description: "React framework for routed apps and full-stack features.",
  },
  vite: {
    title: "Vite",
    Icon: Zap,
    description: "Fast local tooling for modern React builds.",
  },
  redux: {
    title: "Redux",
    Icon: Workflow,
    description: "Predictable state management for complex UI flows.",
  },
  "node.js": {
    title: "Node.js",
    Icon: Terminal,
    description: "JavaScript runtime for server-side application logic.",
  },
  express: {
    title: "Express",
    Icon: Server,
    description: "Minimal backend framework for APIs and middleware.",
  },
  mongodb: {
    title: "MongoDB",
    Icon: Database,
    description: "Document database for flexible data models.",
  },
  mysql: {
    title: "MySQL",
    Icon: DatabaseZap,
    description: "Relational database for structured SQL-backed systems.",
  },
  graphql: {
    title: "GraphQL",
    Icon: Share2,
    description: "API query layer for precise data fetching.",
  },
  prisma: {
    title: "Prisma",
    Icon: Network,
    description: "Type-aware database toolkit for application data access.",
  },
  git: {
    title: "Git",
    Icon: GitBranch,
    description: "Version control for code history and collaboration.",
  },
  docker: {
    title: "Docker",
    Icon: Box,
    description: "Containerization for consistent development environments.",
  },
  aws: {
    title: "AWS",
    Icon: Cloud,
    description: "Cloud services for hosting and application infrastructure.",
  },
  "ci/cd": {
    title: "CI/CD",
    Icon: RefreshCw,
    description: "Automated checks and delivery workflows.",
  },
  "rest apis": {
    title: "REST APIs",
    Icon: ServerCog,
    description: "Resource-based API design for predictable integrations.",
  },
  "api integrations": {
    title: "API Integrations",
    Icon: Plug,
    description: "Connecting services and workflows through external APIs.",
  },
  authentication: {
    title: "Authentication",
    Icon: ShieldCheck,
    description: "Identity-aware flows for protected application features.",
  },
  "performance optimization": {
    title: "Performance Optimization",
    Icon: Gauge,
    description: "Improving load behavior, responsiveness, and efficiency.",
  },
};

const categoryBadgeClasses: Record<SkillCategory, string> = {
  Frontend: "bg-[#f3e2ac] text-[#231b00]",
  Backend: "bg-[#e3e2e0] text-[#583e3a]",
  Other: "bg-[#ffdbcd] text-[#360f00]",
  Architecture: "bg-[#baab79] text-white",
};

const techCards = skills.flatMap((skill) =>
  cleanSkillItems(skill.items).map((item) => {
    const key = item.toLowerCase();
    const meta = techMeta[key] ?? {
      Icon: Wrench,
      description: "A practical tool in my current development workflow.",
    };

    return {
      category: skill.category,
      description: meta.description,
      Icon: meta.Icon,
      title: meta.title ?? item,
    };
  })
);

export default function Tech() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-10 font-['Manrope'] sm:px-8 lg:py-14">
      <header className="mb-14 max-w-3xl text-left lg:mb-20">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#944925]">
          Core Technologies
        </p>
        <h1 className="font-['Plus_Jakarta_Sans'] text-5xl font-extrabold leading-tight tracking-tight text-[#583e3a] md:text-6xl">
          The Arsenal.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53433f]">
          A curated selection of the tools, frameworks, databases, and
          architecture practices I currently use while building full-stack
          projects.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {techCards.map((tech) => {
          const Icon = tech.Icon;

          return (
            <article
              key={`${tech.category}-${tech.title}`}
              className="group flex aspect-square flex-col justify-between rounded-xl border border-[#d9c1bc]/40 bg-white p-8 text-left transition-colors duration-300 hover:bg-[#e9e8e5]"
            >
              <div className="flex w-full items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-lg bg-[#efeeeb] text-[#583e3a] transition-colors group-hover:text-[#944925]">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${categoryBadgeClasses[tech.category]}`}
                >
                  {tech.category}
                </span>
              </div>

              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#583e3a]">
                  {tech.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#53433f]">
                  {tech.description}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
