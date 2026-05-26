import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import aboutme from "../data/aboutme.json";

type Project = {
  title: string;
  tech: string[];
  img?: string;
  description: string;
  link?: string;
};

const projects = aboutme.projects as Project[];

const formatTitle = (title: string) =>
  title
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const isGithubLink = (link?: string) => link?.includes("github.com") ?? false;

function ProjectPlaceholder({ project }: { project: Project }) {
  return (
    <div
      className="relative min-h-[160px] overflow-hidden rounded-md bg-[#101817] sm:min-h-[180px]"
      aria-label={`${formatTitle(project.title)} placeholder preview`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(116,194,180,0.22),transparent_26%),linear-gradient(135deg,rgba(14,26,25,0.25),rgba(7,12,12,0.95))]" />
      <div className="relative z-10 flex min-h-[160px] flex-col justify-between p-4 text-[#d9f5ee] sm:min-h-[180px]">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fccc1]">
          <span>{project.tech[0] ?? "Project"}</span>
          <span className="rounded-full bg-[#74c2b4]/15 px-2 py-1">
            Build
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-end gap-1.5">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="w-full rounded-sm bg-[#3e978b]"
                style={{
                  height: `${18 + ((index * 11) % 54)}px`,
                  opacity: 0.28 + ((index % 4) * 0.13),
                }}
              />
            ))}
          </div>
          <div className="grid grid-cols-[1fr_0.72fr] gap-3">
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#74c2b4]/40" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#74c2b4]/25" />
            </div>
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index} className="h-4 rounded-sm bg-[#174b47]" />
              ))}
            </div>
          </div>
        </div>

        <p className="max-w-[13rem] text-sm font-semibold leading-tight text-[#eefcf8]">
          {formatTitle(project.title)}
        </p>
      </div>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.link) {
    return (
      <span className="inline-flex h-10 items-center rounded-full border border-[#eee9e4] px-5 text-sm font-medium text-[#7a6a62]">
        Link unavailable
      </span>
    );
  }

  return (
    <Button
      asChild
      className="h-10 rounded-full bg-[#dbba9b] px-5 text-white shadow-none hover:bg-[#4b3935]"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {isGithubLink(project.link) ? (
          <Github className="size-4" aria-hidden="true" />
        ) : (
          <ExternalLink className="size-4" aria-hidden="true" />
        )}
        {isGithubLink(project.link) ? "Source Code" : "View Project"}
      </a>
    </Button>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#faf9f7] px-4 py-7 text-[#4e3d38] sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c7e65]">
            Selected projects
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-normal text-[#4e3d38] sm:text-4xl">
            Practical builds from my portfolio.
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-4 rounded-lg border border-[#eee9e4] bg-white p-3 shadow-[0_10px_32px_rgba(73,55,48,0.055)] sm:p-4 lg:grid-cols-[320px_1fr] lg:items-center"
            >
              <ProjectPlaceholder project={project} />

              <div className="flex h-full flex-col justify-center text-left">
                <h2 className="text-xl font-bold leading-tight text-[#5b4540] sm:text-2xl">
                  {formatTitle(project.title)}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#635853]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#f5e8ba] px-2.5 py-1 text-[11px] font-medium text-[#5f5235]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <ProjectActions project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
