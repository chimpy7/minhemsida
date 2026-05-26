import aboutme from "../data/aboutme.json";

const home = aboutme.home[0];
const homeDescription = home.description.replace(/I[^\sA-Za-z0-9]{1,16}m/g, "I'm").replace(
  /I[^\sA-Za-z0-9]{1,16}ve/g,
  "I've"
);


const stackItems = ["React", "Node.js", "TypeScript"];

const codeLines = [
  "const developer = 'Aleksandar';",
  "build.interface({ tactile: true });",
  "ship.api('clean', 'scalable');",
  "learn.everyDay();",
];

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-14rem)] w-full max-w-7xl items-center px-5 py-12 font-['Manrope'] sm:px-8 lg:py-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="relative z-10 flex flex-col gap-6 text-left md:col-span-8">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#944925]">
              chimpy
             </span>
            <h1 className="max-w-4xl font-['Plus_Jakarta_Sans'] text-5xl font-extrabold leading-[0.95] tracking-tight text-[#1a1c1a] sm:text-6xl lg:text-7xl">
              Aleksandar Cesljar,
              <br />
              Full Stack
              <br />
              Developer.
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#53433f]">
            {homeDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#dbba9b] px-8 py-4 text-sm font-extrabold tracking-wide text-white shadow-[0_8px_40px_-12px_rgba(26,28,26,0.25)] transition-colors hover:bg-[#944925] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#944925] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6]"
            >
              View My Work
            </a>
            <a
              href="/about"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d9c1bc] bg-transparent px-8 py-4 text-sm font-extrabold tracking-wide text-[#583e3a] transition-colors hover:bg-[#efeeeb] hover:text-[#583e3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#944925] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6]"
            >
              Read the Manifest
            </a>
          </div>
        </div>

        <div className="relative pb-12 md:col-span-4 md:pb-10">
          <div className="relative z-0 aspect-3/4 w-full overflow-hidden rounded-xl bg-[#efeeeb] shadow-[0_8px_40px_-12px_rgba(26,28,26,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(148,73,37,0.24),transparent_34%),linear-gradient(135deg,rgba(88,62,58,0.92),rgba(26,28,26,0.96))]" />
            <div className="relative flex h-full flex-col justify-between p-6 text-left">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#fe9e72]" />
                <span className="size-3 rounded-full bg-[#baab79]" />
                <span className="size-3 rounded-full bg-[#e3beb8]" />
              </div>


              <div className="grid grid-cols-3 gap-2 text-center text-xs font-extrabold text-[#ffdbcd]">
                <span className="rounded-md border border-white/10 bg-white/5 py-3">
                  UI
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 py-3">
                  API
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 py-3">
                  DB
                </span>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
