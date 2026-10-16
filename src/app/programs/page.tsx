import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/navigation/Header";
import { Footer } from "../components/navigation/Footer";
import { ProgramInteractiveSection } from "./ProgramInteractiveSection";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  Hammer,
  Layers,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flagship Program Pathways: Sprints, Tinkering, Hackathons & Fellowships | IBA Foundation",
  description:
    "IBA Foundation offers four flagship program pathways—rapid 48-to-72 hour Sprints, unconstrained Tinkering maker labs, high-stakes multidisciplinary Hackathons, and 12-week funded Fellowships with $15,000–$25,000 grants.",
  keywords: [
    "IBA Foundation Programs",
    "Builder Fellowships",
    "Hardware Tinkering Labs",
    "Product Sprints",
    "Multidisciplinary Hackathons",
    "Non-dilutive Grants",
    "Maker Programs",
    "Deep Tech Engineering Residencies",
  ],
  openGraph: {
    title: "Flagship Program Pathways | IBA Foundation",
    description:
      "Explore IBA Foundation's four flagship builder pathways: Sprints, Tinkering Labs, Hackathons, and 12-week non-dilutive Fellowships.",
    url: "https://ibafoundation.org/programs",
    siteName: "IBA Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flagship Program Pathways | IBA Foundation",
    description:
      "Four non-dilutive pathways from curiosity to institutional backing: Sprints, Tinkering, Hackathons, and Fellowships.",
  },
};

export default function ProgramsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ibafoundation.org/programs#webpage",
        url: "https://ibafoundation.org/programs",
        name: "Flagship Program Pathways | IBA Foundation",
        description:
          "IBA Foundation offers four flagship program pathways—rapid 48-to-72 hour Sprints, unconstrained Tinkering maker labs, high-stakes multidisciplinary Hackathons, and 12-week funded Fellowships with $15,000–$25,000 grants.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://ibafoundation.org/#website",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://ibafoundation.org/programs#pathways-list",
        name: "IBA Foundation Flagship Pathways",
        itemListElement: [
          {
            "@type": "EducationalOccupationalProgram",
            position: 1,
            name: "Rapid Product-Building Sprints",
            description:
              "48-to-72 hour rapid product-building sprints turning napkin sketches into functional, testable prototypes with intense peer momentum.",
            timeToComplete: "P3D",
            provider: {
              "@type": "Organization",
              name: "IBA Foundation",
              url: "https://ibafoundation.org",
            },
            financialAid: "Cloud credits and project grants ($1,000–$5,000)",
          },
          {
            "@type": "EducationalOccupationalProgram",
            position: 2,
            name: "Tinkering Programs & Hardware Labs",
            description:
              "Hands-on maker sessions and hardware lab access with unconstrained exploratory engineering and $500 monthly materials stipends.",
            timeToComplete: "P3M",
            provider: {
              "@type": "Organization",
              name: "IBA Foundation",
              url: "https://ibafoundation.org",
            },
            financialAid: "$500 Monthly Materials Stipend per builder",
          },
          {
            "@type": "EducationalOccupationalProgram",
            position: 3,
            name: "Multidisciplinary Hackathons",
            description:
              "High-stakes institutional competitions where cross-functional squads tackle real-world sponsor problem statements under deadline.",
            timeToComplete: "P2D",
            provider: {
              "@type": "Organization",
              name: "IBA Foundation",
              url: "https://ibafoundation.org",
            },
            financialAid: "$50,000+ Non-Dilutive Prize Pools",
          },
          {
            "@type": "EducationalOccupationalProgram",
            position: 4,
            name: "Builder Fellowships",
            description:
              "12-week intensive non-dilutive funded residencies offering $15,000–$25,000 equity-free grants and 1:1 mentorship from veteran technical directors.",
            timeToComplete: "P12W",
            provider: {
              "@type": "Organization",
              name: "IBA Foundation",
              url: "https://ibafoundation.org",
            },
            financialAid: "$15,000–$25,000 Non-Dilutive Living Grants",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ibafoundation.org",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Programs",
            item: "https://ibafoundation.org/programs",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-white flex flex-col font-sans selection:bg-[#DFB17B] selection:text-black">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation Header */}
      <Header activePage="programs" />

      <main id="main-content" className="flex-1">
        {/* =========================================================================
            HERO SECTION WITH FIRST 50 WORDS SEARCH INTENT ANSWER
        ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 px-6 sm:px-8 lg:px-12 border-b border-white/10">
          {/* Subtle Ambient Background Grid & Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(223,177,123,0.12),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
          />

          <div className="mx-auto max-w-7xl">
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFB17B]/30 bg-[#DFB17B]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#DFB17B]">
              <span className="h-2 w-2 rounded-full bg-[#DFB17B] animate-pulse" />
              <span>Builder Talent Architecture • 100% Non-Dilutive</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white max-w-4xl leading-[1.08]">
              Four Pathways. Zero Dilution. Real Engineering.
            </h1>

            {/* FIRST 50 WORDS: DIRECT SEARCH INTENT ANSWER (48 Words) */}
            <div className="mt-6 max-w-3xl">
              <p className="text-lg sm:text-xl text-[#E8D8C0] font-sans leading-relaxed">
                <strong className="text-white font-medium">IBA Foundation</strong> offers four
                flagship program pathways—rapid 48-to-72 hour Sprints, unconstrained Tinkering maker
                labs, high-stakes multidisciplinary Hackathons, and 12-week funded Fellowships with
                $15,000–$25,000 grants. Designed for emerging technical builders, each program
                delivers hands-on execution, rigorous institutional mentorship, and tangible pathways
                into research, startups, and engineering careers.
              </p>
            </div>

            {/* Prominent Hero CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#pathways"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#DFB17B] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:bg-[#CFA066] hover:shadow-[0_0_25px_rgba(223,177,123,0.35)] active:scale-95"
              >
                <span>Explore Active Programs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#matrix"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-mono tracking-wider uppercase text-white hover:bg-white/10 transition-colors"
              >
                <Layers className="h-4 w-4 text-[#DFB17B]" />
                <span>Progression Matrix</span>
              </Link>
              <Link
                href="/challenges"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-mono text-white/70 hover:text-white transition-colors"
              >
                <span>Participate in Challenges</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#DFB17B]" />
              </Link>
            </div>

            {/* Program Highlights Strip */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8 border-t border-white/10 pt-8">
              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                  Pathway 01
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-medium text-white">
                  Sprints
                </div>
                <div className="text-xs font-mono text-[#DFB17B] mt-1">48–72 Hours</div>
                <div className="text-[11px] text-white/40 mt-1">Napkin sketch to deployed MVP</div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                  Pathway 02
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-medium text-white">
                  Tinkering
                </div>
                <div className="text-xs font-mono text-[#DFB17B] mt-1">Maker Labs & Bench</div>
                <div className="text-[11px] text-white/40 mt-1">$500/mo materials stipend</div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                  Pathway 03
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-medium text-white">
                  Hackathons
                </div>
                <div className="text-xs font-mono text-[#DFB17B] mt-1">$50k+ Prize Pools</div>
                <div className="text-[11px] text-white/40 mt-1">Cross-disciplinary teams</div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                  Pathway 04
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-medium text-white">
                  Fellowships
                </div>
                <div className="text-xs font-mono text-[#DFB17B] mt-1">12-Week Residency</div>
                <div className="text-[11px] text-white/40 mt-1">$15k–$25k Equity-Free Grant</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE PATHWAYS & PROGRESSION MATRIX
        ========================================================================= */}
        <ProgramInteractiveSection />

        {/* =========================================================================
            INSTITUTIONAL CREDIBILITY & VALUES PHILOSOPHY (Values.md)
        ========================================================================= */}
        <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#0D0C0A]">
          <div className="mx-auto max-w-7xl">
            {/* The Visionary Quote from Values.md */}
            <div className="rounded-3xl border border-[#DFB17B]/20 bg-[#161512] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#DFB17B]/5 blur-3xl"
              />

              <div className="max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                  Our Institutional Positioning
                </span>

                <blockquote className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed">
                  "We create opportunities for the next generation of builders to discover what they
                  can do."
                </blockquote>

                <p className="mt-6 text-sm sm:text-base text-[#E8D8C0]/85 font-sans leading-relaxed">
                  IBA Foundation is an institution—not an event company. Hackathons and sprints are
                  not disposable weekends; they are the experimental proving grounds where raw
                  intellectual initiative transforms into tangible civilizational progress. We
                  believe potential should have the opportunity to prove itself through unencumbered
                  execution.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-white/60">
                  <span className="text-[#DFB17B] font-semibold">
                    100% Builder-Owned IP Policy
                  </span>
                  <span>•</span>
                  <span>Zero Equity Confiscation</span>
                  <span>•</span>
                  <span>Research-Institution Credibility</span>
                </div>
              </div>
            </div>

            {/* The 5 Pillars from Values.md */}
            <div className="mt-16">
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                  Foundational Architecture
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-white">
                  The Five Pillars of IBA Foundation
                </h2>
                <p className="mt-2 text-sm text-[#E8D8C0]/80 font-sans">
                  The unifying idea: IBA creates the conditions in which potential becomes visible.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Pillar 1 */}
                <div className="rounded-2xl border border-white/10 bg-[#161512] p-6">
                  <div className="font-mono text-xs text-[#DFB17B] font-semibold">PILLAR 01</div>
                  <h3 className="mt-3 font-serif text-xl font-medium text-white">Spark Curiosity</h3>
                  <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
                    Create opportunities for young people to question assumptions, explore unfamiliar
                    disciplines, and experiment boldly.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="rounded-2xl border border-white/10 bg-[#161512] p-6">
                  <div className="font-mono text-xs text-[#DFB17B] font-semibold">PILLAR 02</div>
                  <h3 className="mt-3 font-serif text-xl font-medium text-white">Make Building Happen</h3>
                  <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
                    Give people a compelling reason to stop consuming information and start creating
                    real systems under structured deadlines.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="rounded-2xl border border-white/10 bg-[#161512] p-6">
                  <div className="font-mono text-xs text-[#DFB17B] font-semibold">PILLAR 03</div>
                  <h3 className="mt-3 font-serif text-xl font-medium text-white">Discover Potential</h3>
                  <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
                    Identify technical ability, original thinking, and resourcefulness through open,
                    meritocratic proof-of-work.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="rounded-2xl border border-white/10 bg-[#161512] p-6">
                  <div className="font-mono text-xs text-[#DFB17B] font-semibold">PILLAR 04</div>
                  <h3 className="mt-3 font-serif text-xl font-medium text-white">Connect Ambitious People</h3>
                  <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
                    Bring together complementary skills across software, hardware, and science to
                    form enduring builder squads.
                  </p>
                </div>

                {/* Pillar 5 */}
                <div className="rounded-2xl border border-[#DFB17B]/30 bg-[#161512] p-6">
                  <div className="font-mono text-xs text-[#DFB17B] font-semibold">PILLAR 05</div>
                  <h3 className="mt-3 font-serif text-xl font-medium text-white">Create Pathways Forward</h3>
                  <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
                    Turn participation into enduring outcomes: builder grants, fellowships, venture
                    incubation, or research labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FINAL BOTTOM CALL TO ACTION
        ========================================================================= */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#161512]/40">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 rounded-3xl border border-white/10 bg-[#161512] p-8 sm:p-12">
              <div className="max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                  Join the Builder Network
                </span>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-medium text-white">
                  Ready to Put Your Potential into Practice?
                </h2>
                <p className="mt-3 text-sm text-[#E8D8C0]/80 font-sans">
                  Whether you are an aspiring maker, a seasoned competitive hacker, or a deep-tech
                  founder, an IBA Foundation pathway is open for your proof-of-work.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <Link
                  href="/challenges#register"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#DFB17B] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] active:scale-95"
                >
                  <span>Participate in Challenges</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/values"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  <span>Read Institutional Charter</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#DFB17B]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
}
