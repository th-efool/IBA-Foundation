import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/navigation/Header";
import { Footer } from "../components/navigation/Footer";
import { ChallengeInteractiveSection } from "./ChallengeInteractiveSection";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  FileText,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Challenges & Open Innovation Benchmark | IBA Foundation",
  description:
    "IBA Foundation Challenges are open-innovation technical problem-solving competitions offering non-dilutive prize pools of $100,000+, sponsor tracks, institutional mentorship, and concrete submission deadlines.",
  keywords: [
    "IBA Foundation Challenges",
    "Open Innovation Competitions",
    "Non-dilutive Prize Pools",
    "AI Safety Hackathon",
    "Hardware Robotics Challenge",
    "Climate Tech Competitions",
    "Decentralized Systems Hackathon",
    "Engineering Benchmark",
  ],
  openGraph: {
    title: "Technical Challenges & Open Innovation Benchmark | IBA Foundation",
    description:
      "Compete in IBA Foundation's open-innovation engineering challenges with $150,000+ in non-dilutive prize pools across AI, Climate, Robotics, and Decentralized Systems.",
    url: "https://ibafoundation.org/challenges",
    siteName: "IBA Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Challenges & Open Innovation | IBA Foundation",
    description:
      "Open-innovation technical competitions with $150,000+ non-dilutive prize capital and sponsor tracks.",
  },
};

export default function ChallengesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ibafoundation.org/challenges#webpage",
        url: "https://ibafoundation.org/challenges",
        name: "Technical Challenges & Open Innovation Benchmark | IBA Foundation",
        description:
          "IBA Foundation Challenges are open-innovation technical problem-solving competitions offering non-dilutive prize pools of $100,000+, sponsor tracks, institutional mentorship, and concrete submission deadlines.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://ibafoundation.org/#website",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
        },
      },
      {
        "@type": "Hackathon",
        "@id": "https://ibafoundation.org/challenges#2026-benchmark",
        name: "IBA Foundation 2026 Open Innovation Benchmark",
        description:
          "Open-innovation engineering competition offering $150,000 in non-dilutive prize capital across 5 technical tracks including AI, Climate, Robotics, and Decentralized Systems.",
        startDate: "2026-04-15T00:00:00Z",
        endDate: "2026-08-08T23:59:59Z",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
        organizer: {
          "@type": "Organization",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2026-04-15",
          url: "https://ibafoundation.org/challenges#register",
        },
        award: "$150,000 Non-Dilutive Prize Pool",
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
            name: "Challenges",
            item: "https://ibafoundation.org/challenges",
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
      <Header activePage="challenges" />

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
              <span>2026 Open Innovation Benchmark • $150,000 Non-Dilutive Pool</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white max-w-4xl leading-[1.08]">
              Technical Challenges for Serious Builders.
            </h1>

            {/* FIRST 50 WORDS: DIRECT SEARCH INTENT ANSWER (42 Words) */}
            <div className="mt-6 max-w-3xl">
              <p className="text-lg sm:text-xl text-[#E8D8C0] font-sans leading-relaxed">
                <strong className="text-white font-medium">IBA Foundation Challenges</strong> are
                open-innovation technical problem-solving competitions offering non-dilutive prize
                pools of $100,000+, sponsor tracks, institutional mentorship, and concrete
                submission deadlines. We bring multidisciplinary builders together to solve critical
                real-world bottlenecks across artificial intelligence, climate systems, hardware,
                and decentralized protocols.
              </p>
            </div>

            {/* Primary Action Buttons (Prominent CTAs) */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#tracks"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#DFB17B] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:bg-[#CFA066] hover:shadow-[0_0_25px_rgba(223,177,123,0.35)] active:scale-95"
              >
                <span>Register for Challenge</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#submit"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-mono tracking-wider uppercase text-white hover:bg-white/10 transition-colors"
              >
                <Code2 className="h-4 w-4 text-[#DFB17B]" />
                <span>Submit Solution</span>
              </Link>
              <Link
                href="#rubric"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-mono text-white/70 hover:text-white transition-colors"
              >
                <span>Evaluation Rubric</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#DFB17B]" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8 border-t border-white/10 pt-8">
              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#DFB17B]">
                  $150,000
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-white/60">
                  Total Non-Dilutive Pool
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">Zero equity taken</div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white">5 Tracks</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-white/60">
                  Core Engineering Domains
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">AI to Physical Robotics</div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white">4 Consortia</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-white/60">
                  Institutional Sponsors
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">Compute & Hardware Grants</div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#161512]/60 p-4 sm:p-5">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#2E9B63]">
                  May 30, 2026
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-white/60">
                  Registration Close
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">Submissions due July 15</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE TRACKS, PROBLEM STATEMENTS & SUBMISSION DIALOG
        ========================================================================= */}
        <ChallengeInteractiveSection />

        {/* =========================================================================
            SPONSOR TRACKS & INSTITUTIONAL PARTNERS
        ========================================================================= */}
        <section id="sponsors" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#161512]/40">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                Institutional Industry Tracks
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                Backed by Research & Industry Leaders
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#E8D8C0]/80 font-sans">
                Each challenge track is co-designed and supported by industrial consortia that
                supply real testbenches, compute resources, hardware fabrication access, and
                direct advisory hours.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sponsor 1: Deep Tech Consortium */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 hover:border-[#DFB17B]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                      Hardware & Robotics
                    </span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/60">
                      Silicon & Lab
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-white">
                    Deep Tech Consortium
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    Provides precision CNC milling slots, micro-actuator testing rigs, and rapid
                    PCB turnaround credits for hardware challengers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                  Allocation: $30,000 Grant Pool + $10,000 Fab Credits
                </div>
              </div>

              {/* Sponsor 2: Energy Transition Labs */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 hover:border-[#DFB17B]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                      Climate & Energy
                    </span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/60">
                      Grid Telemetry
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-white">
                    Energy Transition Labs
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    Supplies real-time substation phase datasets, synthetic microgrid simulators,
                    and field-deployment opportunities for top teams.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                  Allocation: $35,000 Grant Pool + Testbed Access
                </div>
              </div>

              {/* Sponsor 3: Autonomous Systems Initiative */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 hover:border-[#DFB17B]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                      AI & Systems
                    </span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/60">
                      H100 Clusters
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-white">
                    Autonomous Systems Initiative
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    Provides dedicated GPU cluster access, trajectory simulation sandboxes, and
                    safety alignment mentorship from frontier labs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                  Allocation: $40,000 Grant Pool + Compute Tokens
                </div>
              </div>

              {/* Sponsor 4: Open Compute Alliance */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 hover:border-[#DFB17B]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                      Decentralized Tech
                    </span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/60">
                      ZK Testnets
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-white">
                    Open Compute Alliance
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    Supplies verification benchmark infrastructure, cryptographic audit tooling,
                    and open specification advisory.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                  Allocation: $25,000 Grant Pool + Audit Grants
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            KEY DATES & TIMELINE STAGES
        ========================================================================= */}
        <section id="timeline" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#0D0C0A]">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                Competition Cadence & Deadlines
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                Four Stages. One Rigorous Standard.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#E8D8C0]/80 font-sans">
                A disciplined engineering schedule designed to give builders structured runway,
                continuous technical feedback, and a transparent evaluation window.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stage 1 */}
              <div className="relative rounded-2xl border border-white/10 bg-[#161512] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#DFB17B]">
                    STAGE 01
                  </span>
                  <span className="rounded bg-[#2E9B63]/20 border border-[#2E9B63]/30 px-2 py-0.5 text-[10px] font-mono text-[#2E9B63]">
                    Active Now
                  </span>
                </div>
                <div className="mt-3 font-mono text-sm text-white font-medium">
                  April 15 – May 30, 2026
                </div>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">
                  Registration & Team Formation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Builder profile registration, squad formation, compute allocation issuance, and
                  technical track onboarding. Registration closes May 30 at 23:59 UTC.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#DFB17B]">
                  Action: Submit Team Profile
                </div>
              </div>

              {/* Stage 2 */}
              <div className="relative rounded-2xl border border-white/10 bg-[#161512] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-white/60">
                    STAGE 02
                  </span>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/50">
                    Upcoming
                  </span>
                </div>
                <div className="mt-3 font-mono text-sm text-white font-medium">
                  June 01 – July 15, 2026
                </div>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">
                  Technical Build & Mentorship
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  6-week intensive engineering sprint. Bi-weekly office hours with consortium
                  engineers, interim architecture reviews, and prototype integration.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-white/50">
                  Action: Codebase & Telemetry Build
                </div>
              </div>

              {/* Stage 3 */}
              <div className="relative rounded-2xl border border-white/10 bg-[#161512] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-white/60">
                    STAGE 03
                  </span>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/50">
                    Code Freeze
                  </span>
                </div>
                <div className="mt-3 font-mono text-sm text-[#DFB17B] font-medium">
                  July 16 – July 25, 2026
                </div>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">
                  Semi-Final Review & Audits
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Automated test harnesses execute submissions. Code audits, safety checks, and
                  reproducibility verification by the technical evaluation board.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-white/50">
                  Action: Automated Test Execution
                </div>
              </div>

              {/* Stage 4 */}
              <div className="relative rounded-2xl border border-[#DFB17B]/30 bg-[#161512] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#DFB17B]">
                    STAGE 04
                  </span>
                  <span className="rounded bg-[#DFB17B]/20 border border-[#DFB17B]/40 px-2 py-0.5 text-[10px] font-mono text-[#DFB17B]">
                    Grand Finale
                  </span>
                </div>
                <div className="mt-3 font-mono text-sm text-white font-medium">
                  August 08, 2026
                </div>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">
                  Grand Exhibition & Awards
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Final live defenses, public architectural demonstrations, and announcement of the
                  $150,000 non-dilutive awards and fellowship fast-tracks.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#DFB17B]">
                  Outcome: Non-Dilutive Capital Distributed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            EVALUATION RUBRIC: RIGOROUS INSTITUTIONAL STANDARDS
        ========================================================================= */}
        <section id="rubric" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#161512]/60">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-12 border-b border-white/10">
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                  Meritocratic Evaluation Standard
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                  Four-Pillar Evaluation Rubric
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#E8D8C0]/80 font-sans">
                  "IBA rewards more than polished pitch decks. Evaluation accounts for problem
                  understanding, critical thinking, technical execution, and verifiable quality."
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0D0C0A] p-4 text-xs font-mono text-white/70">
                <div className="text-[#DFB17B] font-semibold mb-1">
                  Institutional Guarantee:
                </div>
                <div>Evaluated by domain researchers & systems engineers. Zero hype bias.</div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-[#DFB17B]">25%</span>
                  <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono uppercase text-white/70">
                    Pillar 01
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium text-white">
                  Problem Comprehension & Bottleneck Depth
                </h3>
                <p className="mt-3 text-sm text-white/80 font-sans leading-relaxed">
                  Does the team truly grasp the fundamental physics, computational constraints, or
                  economic limits of the problem? We penalize superficial wrappers and reward teams
                  that pinpoint exact root causes.
                </p>
                <div className="mt-5 space-y-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Clear articulation of existing baseline failures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Identification of boundary constraints and trade-offs</span>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#DFB17B]/30 bg-[#161512] p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-[#DFB17B]">30%</span>
                  <span className="rounded border border-[#DFB17B]/30 bg-[#DFB17B]/10 px-2.5 py-1 text-xs font-mono uppercase text-[#DFB17B]">
                    Highest Weight
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium text-white">
                  Technical Craftsmanship & Architectural Rigor
                </h3>
                <p className="mt-3 text-sm text-white/80 font-sans leading-relaxed">
                  Code cleanliness, defensive systems engineering, documentation, memory
                  efficiency, and hardware mechanical robustness. Submissions must build cleanly
                  and pass automated test suites.
                </p>
                <div className="mt-5 space-y-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Automated test coverage and deterministic build scripts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Clean modular interfaces and documentation of edge cases</span>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-[#DFB17B]">25%</span>
                  <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono uppercase text-white/70">
                    Pillar 03
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium text-white">
                  Rigorous Proof-of-Concept & Empirical Validation
                </h3>
                <p className="mt-3 text-sm text-white/80 font-sans leading-relaxed">
                  Working execution beats theoretical conjecture. Does the hardware actuate? Does
                  the cryptographic prover output valid proofs? Are benchmark figures backed by
                  verifiable logs and test sets?
                </p>
                <div className="mt-5 space-y-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Reproducible benchmark harness and telemetry data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Unedited demonstration video showing live functionality</span>
                  </div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-white/10 bg-[#161512] p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-[#DFB17B]">20%</span>
                  <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono uppercase text-white/70">
                    Pillar 04
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium text-white">
                  Originality & Civilizational Value
                </h3>
                <p className="mt-3 text-sm text-white/80 font-sans leading-relaxed">
                  Has the team explored a novel approach or creatively unified disparate fields?
                  Does this artifact have the potential to seed an enduring open-source standard,
                  academic paper, or venture?
                </p>
                <div className="mt-5 space-y-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Novel engineering methodology or synthesis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <span>Plausible long-term open-source or commercial trajectory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SUBMIT SOLUTION & SPECIFICATION GUIDELINES SECTION
        ========================================================================= */}
        <section id="submit" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#0D0C0A]">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-white/15 bg-[#161512] p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                    Submission Requirements & Guidelines
                  </span>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                    Submit Your Solution
                  </h2>
                  <p className="mt-4 text-base text-[#E8D8C0]/85 font-sans leading-relaxed">
                    Submissions are evaluated through automated code review, benchmark reproduction,
                    and blinded technical scrutiny. Review the mandatory submission artifacts below
                    before lodging your entry.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFB17B]/20 text-[#DFB17B] text-xs font-mono font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Public Git Repository
                        </div>
                        <p className="text-xs text-white/70 font-sans">
                          Permissive open-source license (MIT, Apache 2.0, or dual). Must contain a
                          detailed README with reproduction steps.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFB17B]/20 text-[#DFB17B] text-xs font-mono font-bold">
                        2
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Technical Specification Document (2–4 Pages)
                        </div>
                        <p className="text-xs text-white/70 font-sans">
                          Structured abstract, system architecture, mathematical derivations or
                          schematics, benchmark results, and failure bounds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFB17B]/20 text-[#DFB17B] text-xs font-mono font-bold">
                        3
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          3-Minute Unedited Demonstration Video
                        </div>
                        <p className="text-xs text-white/70 font-sans">
                          Walkthrough of working hardware, software CLI/GUI, or physical telemetry.
                          No marketing hype or slide decks allowed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFB17B]/20 text-[#DFB17B] text-xs font-mono font-bold">
                        4
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Reproducible Build Container (Dockerfile / Nix)
                        </div>
                        <p className="text-xs text-white/70 font-sans">
                          Single command build: our evaluation cluster must reproduce your benchmarks
                          with zero manual intervention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0D0C0A] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                        Ready to Lodge Entry?
                      </span>
                      <span className="font-mono text-xs text-white/50">
                        Deadline: July 15, 2026
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 text-xs font-mono text-white/80">
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span className="text-white/50">Registration Status:</span>
                        <span className="text-[#2E9B63]">OPEN & UNRESTRICTED</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span className="text-white/50">Eligibility:</span>
                        <span className="text-white">Global Builders, Students, Makers</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span className="text-white/50">IP Ownership:</span>
                        <span className="text-[#DFB17B]">100% BUILDER-OWNED</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span className="text-white/50">Entry Fee:</span>
                        <span className="text-white">Zero ($0.00)</span>
                      </div>
                    </div>

                    <p className="mt-6 text-xs text-white/60 font-sans leading-relaxed">
                      Need a teammate or computing tokens? Registering unlocks our private builder
                      network, Discord staging server, and sponsor API credits.
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Link
                      href="#tracks"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#DFB17B] py-3.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] active:scale-95"
                    >
                      <span>Open Submission Portal</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/values"
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors"
                    >
                      <span>Read the Institutional Values & IP Policy</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
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
