import Link from "next/link";

interface InstitutionalNavbarProps {
  currentPage?: "fellowship" | "values" | "challenges" | "programs";
}

export function InstitutionalNavbar({ currentPage }: InstitutionalNavbarProps) {
  const navLinks = [
    { href: "/fellowship", label: "Fellowship", id: "fellowship" },
    { href: "/values", label: "Values & Ethos", id: "values" },
    { href: "/challenges", label: "Challenges", id: "challenges" },
    { href: "/programs", label: "Programs", id: "programs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0D0C0A]/90 backdrop-blur-md transition-all">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-md bg-[#DFB17B] px-4 py-2 text-sm font-semibold text-black shadow-2xl transition-all"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Official IBA Foundation Brand Mark with Golden Orbital Swoosh */}
        <Link
          href="/"
          className="group relative inline-flex flex-col items-center shrink-0 select-none"
          aria-label="IBA Foundation Home"
        >
          <div className="relative flex items-baseline">
            {/* Golden Orbital Swoosh Arc */}
            <svg
              viewBox="0 0 120 42"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute -top-2.5 sm:-top-3 left-1.5 sm:left-2 w-[92%] h-[115%] overflow-visible"
            >
              <path
                d="M 18 22 C 42 -4, 96 -6, 104 8 C 108 15, 92 28, 72 34"
                stroke="url(#ibaNavbarArcGrad)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="96" cy="4.5" r="2.6" fill="#F5D7A1" />
              <defs>
                <linearGradient
                  id="ibaNavbarArcGrad"
                  x1="18"
                  y1="22"
                  x2="104"
                  y2="8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#DFB17B" stopOpacity="0.15" />
                  <stop offset="55%" stopColor="#DFB17B" stopOpacity="0.95" />
                  <stop offset="85%" stopColor="#F7E1B5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#DFB17B" stopOpacity="0.35" />
                </linearGradient>
              </defs>
            </svg>

            <span className="relative z-10 font-serif text-2xl sm:text-3xl font-medium leading-none tracking-[0.04em] text-white">
              IBA
            </span>
          </div>

          <span className="mt-1 text-[7.5px] sm:text-[8.5px] font-medium tracking-[0.28em] uppercase text-white/80 pl-[0.28em]">
            FOUNDATION
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-normal tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#DFB17B] font-medium"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-[#DFB17B]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/fellowship#apply"
            className="inline-flex items-center justify-center rounded-full bg-[#DFB17B] px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-[#CFA066] hover:shadow-[0_0_24px_rgba(223,177,123,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB17B]"
          >
            Apply for Fellowship
          </Link>
        </div>
      </div>
    </header>
  );
}
