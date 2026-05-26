import { Check, Code, Sparkles } from "lucide-react";

import aboutme from "../data/aboutme.json";

const me = aboutme.me[0];

const profileStats = [
  { value: "2+", label: "Years programming" },
  { value: "4", label: "Project focus areas" },
  { value: "100%", label: "Learning mindset" },
];

const focusAreas = [
  "React interfaces",
  "Problem solving",
  "API integrations",
  "Performance minded builds",
];

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
        <div className="rounded-lg border border-[#dbba9b]/30 bg-white p-8 text-left shadow-[0_22px_70px_rgba(120,78,45,0.10)] sm:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#dbba9b]">
            About me
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Developer focused on clean interfaces, steady progress, and useful
            technical solutions.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            I am a React developer with two years of active programming
            experience. I enjoy learning new technology, building from scratch,
            and turning unclear problems into working solutions.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {profileStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-3xl font-black text-[#dbba9b]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg bg-[#dbba9b] p-8 text-left text-white shadow-[0_22px_70px_rgba(120,78,45,0.20)] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
            Current focus
          </p>
          <ul className="mt-8 space-y-4">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white text-sm font-black text-[#8a5f3d]">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-base font-semibold">{area}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-7 text-left shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-[#dbba9b]/20 text-[#8a5f3d]">
              <Code className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#dbba9b]">
                Experience
              </p>
              <h2 className="text-2xl font-black text-slate-950">
                What I bring
              </h2>
            </div>
          </div>
          <p className="text-base leading-8 text-slate-600">{me.merit}</p>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-7 text-left shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-[#dbba9b]/20 text-[#8a5f3d]">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#dbba9b]">
                Interests
              </p>
              <h2 className="text-2xl font-black text-slate-950">
                What keeps me curious
              </h2>
            </div>
          </div>
          <p className="text-base leading-8 text-slate-600">{me.intrestes}</p>
        </article>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-7 text-left shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#dbba9b]">
            Strengths
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">
            How I work
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {me.strength.map((strength) => (
              <li
                key={strength}
                className="flex items-center gap-3 rounded-lg border border-[#dbba9b]/30 bg-[#dbba9b]/10 px-4 py-3 text-sm font-bold capitalize text-slate-800"
              >
                <span className="size-2 rounded-full bg-[#dbba9b]" />
                {strength}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-7 text-left shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#dbba9b]">
            Growth areas
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">
            What I am improving
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
          I am early in my career and actively building experience through projects, feedback and consistent practice. I am improving how I plan, communicate, estimate tasks and deliver work in a team environment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {me.weakness.map((weakness) => (
              <span
                key={weakness}
                className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold capitalize text-slate-600"
              >
                {weakness}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
