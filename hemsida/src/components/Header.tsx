import { useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const location = useLocation();

  const HeaderLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Stack", href: "/tech" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#faf9f6]/85 px-4 font-['Plus_Jakarta_Sans'] tracking-tight backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-0 py-5 sm:px-4">
        <a
          href="/"
          className="flex shrink-0 items-center gap-3 text-[#583e3a] hover:text-[#583e3a]"
          aria-label="Go to home page"
        >
          <span className="grid size-10 place-items-center rounded-md bg-[#583e3a] text-sm font-black text-white">
            <img src="AC.png" alt="AC" className="size-7 object-contain" />
          </span>
          <span className="hidden text-xl font-black tracking-tight sm:block lg:text-2xl">
            aleksandar cesljar
          </span>
        </a>

        <nav className="min-w-0 overflow-x-auto" aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList className="justify-end gap-1 md:gap-4">
              {HeaderLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className={`whitespace-nowrap border-b-2 px-2 py-2 text-sm font-bold transition-colors sm:px-3 ${
                      location.pathname === link.href
                        ? "border-[#944925] text-[#944925] hover:text-[#944925]"
                        : "border-transparent text-[#583e3a]/70 hover:text-[#944925] focus:text-[#944925]"
                    }`}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <a
          href="https://www.linkedin.com/in/aleksandar-cesljar-15a653286/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-[#dbba9b] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#944925] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#944925] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6] md:inline-flex"
        >
          Connect
        </a>
      </div>
    </header>
  );
}
