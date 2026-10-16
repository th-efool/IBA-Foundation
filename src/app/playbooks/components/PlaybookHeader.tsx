import Link from "next/link";
import { BookOpen, Sparkles, ChevronRight } from "lucide-react";

interface PlaybookHeaderProps {
  breadcrumbs?: { label: string; href?: string }[];
}

export function PlaybookHeader({ breadcrumbs }: PlaybookHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0D0C0A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Brand Mark and Optional Breadcrumbs */}
        <div className="flex items-center gap-4 sm:gap-6">
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
                className="pointer-events-none absolute -top-2 left-1.5 w-[92%] h-[115%] overflow-visible"
              >
                <path
                  d="M 18 22 C 42 -4, 96 -6, 104 8 C 108 15, 92 28, 72 34"
                  stroke="url(#playbookArcGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="96" cy="4.5" r="2.4" fill="#F5D7A1" />
                <defs>
                  <linearGradient
                    id="playbookArcGrad"
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

              <span className="relative z-10 font-serif text-2xl font-medium leading-none tracking-[0.04em] text-white">
                IBA
              </span>
            </div>
            <span className="mt-0.5 text-[7.5px] font-medium tracking-[0.28em] uppercase text-white/90 pl-[0.28em]">
              FOUNDATION
            </span>
          </Link>

          <div className="hidden h-5 w-px bg-white/15 sm:block" />

          {/* Breadcrumb links */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-text-muted">
            <Link
              href="/playbooks"
              className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Builder Playbooks</span>
            </Link>

            {breadcrumbs?.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-white/30" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-text-muted hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="max-w-[180px] md:max-w-[260px] truncate text-white/80 font-medium">
                    {crumb.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Action Link: Apply or Explore */}
        <div className="flex items-center gap-3">
          <Link
            href="/playbooks"
            className="hidden md:inline-flex items-center text-xs text-text-secondary hover:text-primary transition-colors px-2 py-1"
          >
            All Playbooks
          </Link>
          <a
            href="#venture-fellowship"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-[#CFA066] px-3.5 py-1.5 text-xs font-semibold text-black shadow-lg shadow-primary/20 transition-all duration-200 hover:brightness-110 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Apply to Fellowship</span>
          </a>
        </div>
      </div>
    </header>
  );
}
