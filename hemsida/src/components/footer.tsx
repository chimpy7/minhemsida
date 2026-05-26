export default function Footer() {
  const FooterLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com",
      icon: "bi-facebook",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aleksandar-cesljar-15a653286/",
      icon: "bi-linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/chimpy7",
      icon: "bi-github",
    },
  ];

  return (
    <footer className="fixed inset-x-0 bottom-3 z-50 px-4">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-lg border border-[#dbba9b]/30 bg-white/95 px-4 py-3 shadow-[0_-16px_45px_rgba(120,78,45,0.14)] backdrop-blur-md sm:px-5">
        <p className="hidden text-sm font-semibold text-[#8a5f3d] sm:block">
          Building a good experiences.
        </p>

        <nav aria-label="Social links">
          <ul className="flex items-center justify-center gap-2">
            {FooterLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="group grid size-11 place-items-center rounded-md border border-[#dbba9b]/30 bg-white text-[#8a5f3d] shadow-sm transition-colors hover:border-[#dbba9b] hover:bg-[#dbba9b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbba9b] focus-visible:ring-offset-2"
                >
                  <i className={`bi ${link.icon} text-lg`} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://www.linkedin.com/in/aleksandar-cesljar-15a653286/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md bg-[#dbba9b] px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#caa685] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbba9b] focus-visible:ring-offset-2 md:inline-flex"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
