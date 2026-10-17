import Link from "next/link";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";

export function InstitutionalFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0A0908] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <CommonGroundLogo
              href="/"
              layout="horizontal"
              size="lg"
              theme="dark"
              className="transition-transform duration-200 hover:scale-[1.02]"
            />

            <p className="max-w-md text-sm leading-relaxed text-white/75 font-sans">
              IBA Foundation is an institutional platform dedicated to putting potential into practice. We fund and support ambitious technical talent through non-dilutive fellowship grants, rigorous challenges, and permanent research pathways.
            </p>

            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#161512] px-3.5 py-1.5 text-xs font-mono text-[#E8D8C0]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E9B63] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2E9B63]" />
              </span>
              <span>COHORT &apos;26 APPLICATIONS: ACTIVE</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Fellowship & Programs */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#DFB17B]">
                Programs
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/fellowship"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Fellowship Cohort &apos;26
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fellowship#stipend"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    $25,000 Living Grants
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fellowship#rubric"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Evaluation Rubric
                  </Link>
                </li>
                <li>
                  <Link
                    href="/challenges"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Open Challenges
                  </Link>
                </li>
              </ul>
            </div>

            {/* Institution & Ethos */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#DFB17B]">
                Institution
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/values"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Values & Ethos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/values#pillars"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    The 5 Pillars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/values#positioning"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Institutional Positioning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/values#mission"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Mission Statement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect & Governance */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#DFB17B]">
                Engagement
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="mailto:partners@ibafoundation.org"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Partner Inquiries
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:fellowship@ibafoundation.org"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Admissions Desk
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <Link
                    href="/fellowship#faq"
                    className="transition-colors hover:text-[#DFB17B]"
                  >
                    Admissions FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} IBA Foundation. Zero equity taken. All fellow intellectual property is 100% builder-owned.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <span>Potential, put into practice.</span>
            <span>&bull;</span>
            <span>San Francisco &bull; Global Distributed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
