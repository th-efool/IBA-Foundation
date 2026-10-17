import Link from "next/link";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";
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
          {/* Official IBA Foundation Brand Mark (03 / COMMON GROUND) */}
          <CommonGroundLogo
            href="/"
            size="sm"
            theme="dark"
            className="transition-transform duration-200 hover:scale-[1.02]"
          />

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
