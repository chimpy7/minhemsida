import aboutme from "../data/aboutme.json";

type SkillCategory = (typeof aboutme.skills)[number]["category"];

type TechMeta = {
  title?: string;
  icon: string;
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
    icon: "bi-triangle",
    description: "Progressive frontend framework for structured interfaces.",
  },
  react: {
    title: "React",
    icon: "bi-code-slash",
    description: "Component-driven architecture for dynamic user interfaces.",
  },
  typescript: {
    title: "TypeScript",
    icon: "bi-braces",
    description: "Typed JavaScript for clearer contracts and safer refactors.",
  },
  tailwind: {
    title: "Tailwind CSS",
    icon: "bi-palette",
    description: "Utility-first styling for fast, consistent UI development.",
  },
  "next.js": {
    title: "Next.js",
    icon: "bi-window-sidebar",
    description: "React framework for routed apps and full-stack features.",
  },
  vite: {
    title: "Vite",
    icon: "bi-lightning-charge",
    description: "Fast local tooling for modern React builds.",
  },
  redux: {
    title: "Redux",
    icon: "bi-diagram-3",
    description: "Predictable state management for complex UI flows.",
  },
  "node.js": {
    title: "Node.js",
    icon: "bi-terminal",
    description: "JavaScript runtime for server-side application logic.",
  },
  express: {
    title: "Express",
    icon: "bi-hdd-network",
    description: "Minimal backend framework for APIs and middleware.",
  },
  mongodb: {
    title: "MongoDB",
    icon: "bi-database",
    description: "Document database for flexible data models.",
  },
  mysql: {
    title: "MySQL",
    icon: "bi-database-check",
    description: "Relational database for structured SQL-backed systems.",
  },
  graphql: {
    title: "GraphQL",
    icon: "bi-share",
    description: "API query layer for precise data fetching.",
  },
  prisma: {
    title: "Prisma",
    icon: "bi-diagram-2",
    description: "Type-aware database toolkit for application data access.",
  },
  git: {
    title: "Git",
    icon: "bi-git",
    description: "Version control for code history and collaboration.",
  },
  docker: {
    title: "Docker",
    icon: "bi-box",
    description: "Containerization for consistent development environments.",
  },
  aws: {
    title: "AWS",
    icon: "bi-cloud",
    description: "Cloud services for hosting and application infrastructure.",
  },
  "ci/cd": {
    title: "CI/CD",
    icon: "bi-arrow-repeat",
    description: "Automated checks and delivery workflows.",
  },
  "rest apis": {
    title: "REST APIs",
    icon: "bi-hdd-rack",
    description: "Resource-based API design for predictable integrations.",
  },
  "api integrations": {
    title: "API Integrations",
    icon: "bi-plug",
    description: "Connecting services and workflows through external APIs.",
  },
  authentication: {
    title: "Authentication",
    icon: "bi-shield-lock",
    description: "Identity-aware flows for protected application features.",
  },
  "performance optimization": {
    title: "Performance Optimization",
    icon: "bi-speedometer2",
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
      icon: "bi-tools",
      description: "A practical tool in my current development workflow.",
    };

    return {
      category: skill.category,
      description: meta.description,
      icon: meta.icon,
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
        {techCards.map((tech) => (
          <article
            key={`${tech.category}-${tech.title}`}
            className="group flex aspect-square flex-col justify-between rounded-xl border border-[#d9c1bc]/40 bg-white p-8 text-left transition-colors duration-300 hover:bg-[#e9e8e5]"
          >
            <div className="flex w-full items-start justify-between gap-4">
              <span className="grid size-12 place-items-center rounded-lg bg-[#efeeeb] text-[#583e3a] transition-colors group-hover:text-[#944925]">
                <i className={`bi ${tech.icon} text-3xl`} aria-hidden="true" />
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
        ))}
      </section>
    </div>
  );
}
