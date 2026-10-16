"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Hammer,
  Trophy,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Compass,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export interface ProgramPathway {
  id: string;
  name: string;
  badge: string;
  duration: string;
  commitment: string;
  funding: string;
  icon: any;
  lead: string;
  description: string;
  whoItsFor: string;
  whatYouBuild: string;
  whatYouGain: string[];
  ctaLabel: string;
  ctaAction: "sprint" | "tinker" | "hackathon" | "fellowship";
  nextDate: string;
}

export const programPathways: ProgramPathway[] = [
  {
    id: "sprints",
    name: "Rapid Product-Building Sprints",
    badge: "Velocity & Peer Momentum",
    duration: "48 to 72 Hours",
    commitment: "Weekend Intensive",
    funding: "Cloud Credits & Project Grants ($1k–$5k)",
    icon: Zap,
    lead: "Turning napkin sketches into functional, testable prototypes with intense peer momentum and rapid user feedback loops.",
    description:
      "Sprints eliminate endless brainstorming and force immediate execution. Over 48 to 72 hours, multidisciplinary builders lock in, build in public, deploy live software, and gather initial telemetry. There are no slides—only running code and real user interactions.",
    whoItsFor:
      "Full-stack developers, frontend engineers, product designers, and AI tinkerers who want to stop theorizing and start shipping.",
    whatYouBuild:
      "Deployed web applications, autonomous agent workflows, developer tools, or interactive micro-products ready for real traffic.",
    whatYouGain: [
      "Functional, production-deployed prototype in 72 hours",
      "Immediate peer critique and user testing sessions",
      "Portfolio proof-of-work link recognized across our network",
      "Fast-track invitation into IBA Hackathons & Fellowships",
    ],
    ctaLabel: "Join Next Sprint",
    ctaAction: "sprint",
    nextDate: "May 16–18, 2026 • Global / Hybrid",
  },
  {
    id: "tinkering",
    name: "Tinkering Programs & Hardware Labs",
    badge: "Unconstrained Exploration",
    duration: "Ongoing Weekly Residencies",
    commitment: "Flexible 6–10 hrs/week",
    funding: "$500 Monthly Materials Stipend per builder",
    icon: Hammer,
    lead: "Hands-on maker sessions and hardware lab access. Unconstrained exploratory engineering, hardware hacking, and experimenting without predetermined outcomes to spark raw curiosity.",
    description:
      "Curiosity requires permission to fail without commercial consequence. Our Tinkering Programs provide physical bench space, oscilloscopes, 3D printers, CNC mills, and microcontrollers. Builders are encouraged to dismantle, rebuild, test novel sensors, and build physical intuition.",
    whoItsFor:
      "Hardware hackers, embedded engineers, roboticists, students, and curious makers who learn by bending metal, soldering circuits, and flashing firmware.",
    whatYouBuild:
      "Custom PCB boards, robotic joints, acoustic telemetry arrays, low-power edge microcontrollers, and physical mechanical prototypes.",
    whatYouGain: [
      "Dedicated hardware lab bench & rapid fabrication tooling access",
      "$500 monthly unconstrained components and materials stipend",
      "Guidance from senior master technicians and lab stewards",
      "Complete freedom to experiment without commercial milestones",
    ],
    ctaLabel: "Reserve Lab Bench",
    ctaAction: "tinker",
    nextDate: "Rolling Weekly Cohorts • Lab Access",
  },
  {
    id: "hackathons",
    name: "Multidisciplinary Hackathons",
    badge: "Competitive Excellence",
    duration: "36 to 48 Hours",
    commitment: "High-Intensity Competition",
    funding: "$50,000+ Non-Dilutive Prize Pools",
    icon: Trophy,
    lead: "High-stakes institutional competitions where cross-functional teams tackle real-world sponsor problem statements under deadline with comprehensive judging.",
    description:
      "Where talent proves itself. Multidisciplinary teams assemble across software, mechanical design, cryptography, and systems engineering to solve consequential sponsor tracks. Work is judged on technical rigor, proof-of-concept functionality, and original problem comprehension.",
    whoItsFor:
      "Cross-functional squads combining systems programmers, domain scientists, mechanical engineers, and product architects ready to test their limits.",
    whatYouBuild:
      "Substantial technical artifacts: verified ZK provers, autonomous agent guardrails, microgrid telemetry nodes, or precision robotic actuators.",
    whatYouGain: [
      "Non-dilutive prize capital ($50k+ pools per competition)",
      "Direct evaluation by engineering directors and research fellows",
      "Institutional credential that elevates participant portfolios",
      "Direct pathway into funded IBA Builder Fellowships",
    ],
    ctaLabel: "Register for Hackathon",
    ctaAction: "hackathon",
    nextDate: "April 15 – August 08, 2026 (Benchmark Live)",
  },
  {
    id: "fellowships",
    name: "Builder Fellowships",
    badge: "Institutional Backing",
    duration: "12-Week Intensive Residency",
    commitment: "Full-Time or Intensive Track",
    funding: "$15,000 – $25,000 Non-Dilutive Grant (Zero Equity)",
    icon: GraduationCap,
    lead: "12-week intensive non-dilutive funded residencies ($15,000–$25,000 grants, direct mentorship, long-term pathway into research, startups, or institutional roles).",
    description:
      "Our flagship institutional commitment. We select exceptional, high-agency builders with demonstrated proof-of-work and fund their runway completely equity-free. Fellows receive weekly 1:1 mentorship from veteran technical directors, dedicated compute resources, and permanent institutional backing.",
    whoItsFor:
      "Visionary independent builders, graduate researchers, and technical founders pursuing high-conviction frontiers in AI, deep-tech, or decentralized systems.",
    whatYouBuild:
      "Enduring civilizational technology: production-grade open-source libraries, novel hardware architectures, or foundational research papers.",
    whatYouGain: [
      "$15,000 to $25,000 direct non-dilutive grant (100% builder-owned IP)",
      "Weekly 1:1 mentorship from veteran CTOs and principal researchers",
      "Up to $50,000 in dedicated cloud, compute, and lab fabrication credits",
      "Permanent institutional network bridging to venture capital or academic labs",
    ],
    ctaLabel: "Apply to Fellowship Cohort",
    ctaAction: "fellowship",
    nextDate: "Autumn 2026 Cohort • Applications Open",
  },
];

export function ProgramInteractiveSection() {
  const [activeTab, setActiveTab] = useState<string>("sprints");
  const [applicationModalOpen, setApplicationModalOpen] = useState<boolean>(false);
  const [selectedPathwayForApp, setSelectedPathwayForApp] = useState<string>("fellowships");
  const [appSubmitted, setAppSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    githubOrPortfolio: "",
    pathway: "fellowships",
    projectVision: "",
  });

  const activePathway =
    programPathways.find((p) => p.id === activeTab) || programPathways[0];

  const handleOpenModal = (pathwayId: string) => {
    setSelectedPathwayForApp(pathwayId);
    setFormData((prev) => ({ ...prev, pathway: pathwayId }));
    setAppSubmitted(false);
    setApplicationModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppSubmitted(true);
  };

  return (
    <div className="relative">
      {/* =========================================================================
          THE 4 PROGRAM PATHWAYS DETAIL VIEWER
      ========================================================================= */}
      <section id="pathways" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#0D0C0A]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-10 border-b border-white/10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DFB17B]" />
                Four Flagship Pathways
              </div>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Engineered for Every Stage of Building
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#E8D8C0]/80 font-sans">
                Whether you have 48 hours to validate a prototype or 12 weeks to build a
                foundational architecture, each pathway offers structured runway and non-dilutive backing.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenModal("fellowships")}
                className="inline-flex items-center gap-2 rounded-full bg-[#DFB17B] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] hover:shadow-[0_0_20px_rgba(223,177,123,0.3)] active:scale-95"
              >
                <span>Apply to Fellowship</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway Tab Switcher */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {programPathways.map((pathway) => {
              const isSelected = activeTab === pathway.id;
              const Icon = pathway.icon;
              return (
                <button
                  key={pathway.id}
                  onClick={() => setActiveTab(pathway.id)}
                  className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "border-[#DFB17B] bg-[#161512] shadow-[0_0_25px_rgba(223,177,123,0.12)]"
                      : "border-white/10 bg-[#161512]/50 hover:border-white/20 hover:bg-[#161512]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isSelected
                          ? "bg-[#DFB17B] text-black"
                          : "bg-white/5 text-white/70"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        isSelected ? "text-[#DFB17B]" : "text-white/40"
                      }`}
                    >
                      {pathway.duration}
                    </span>
                  </div>
                  <div className="mt-3 font-serif text-lg font-medium text-white">
                    {pathway.name}
                  </div>
                  <div className="mt-1 text-xs text-white/50 font-sans line-clamp-1">
                    {pathway.badge}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pathway Detail Card */}
          <div className="mt-8 rounded-3xl border border-white/15 bg-[#161512] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Left 2 Cols: Comprehensive Overview */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                      {activePathway.badge}
                    </span>
                    <span className="rounded border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-white/70">
                      Duration: {activePathway.duration}
                    </span>
                    <span className="rounded border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-white/70">
                      Commitment: {activePathway.commitment}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-medium text-white">
                    {activePathway.name}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-[#E8D8C0]/90 font-sans leading-relaxed">
                    {activePathway.lead}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-2">
                    Program Philosophy & Operational Model
                  </h4>
                  <p className="text-sm leading-relaxed text-white/80 font-sans">
                    {activePathway.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-2">
                      Who This Is For
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                      {activePathway.whoItsFor}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-2">
                      What You Build
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                      {activePathway.whatYouBuild}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-3">
                    What Builders Gain
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePathway.whatYouGain.map((gain, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DFB17B] mt-0.5" />
                        <span>{gain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Col: Logistics, Funding & Action Box */}
              <div className="rounded-2xl border border-white/10 bg-[#0D0C0A] p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                      Funding & Capital
                    </span>
                    <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-[#DFB17B]">
                      {activePathway.funding}
                    </div>
                    <div className="mt-1 text-xs text-white/50 font-sans">
                      100% Non-Dilutive • Zero Equity Taken
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                      Next Cohort / Milestone
                    </span>
                    <div className="mt-1 font-mono text-sm text-white font-medium">
                      {activePathway.nextDate}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-mono text-white/70">
                    <div className="flex items-center justify-between">
                      <span className="text-white/50">Application:</span>
                      <span className="text-[#2E9B63]">Active & Open</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50">Location:</span>
                      <span className="text-white">Global / Distributed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50">IP Ownership:</span>
                      <span className="text-[#DFB17B]">Builder Retains 100%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => handleOpenModal(activePathway.id)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#DFB17B] py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] active:scale-95"
                  >
                    <span>{activePathway.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  {activePathway.id === "hackathons" ? (
                    <Link
                      href="/challenges"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-mono text-white/70 hover:text-white transition-colors"
                    >
                      <span>View Open Innovation Benchmark</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#DFB17B]" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BUILDER JOURNEY / PROGRESSION MATRIX SECTION
      ========================================================================= */}
      <section id="matrix" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#161512]/60">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
              The Growth Arc
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
              The Builder Progression Matrix
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#E8D8C0]/80 font-sans">
              We design our pathways not as isolated events, but as an institutional continuum that
              accompanies emerging builders from spark of curiosity to institutional backing.
            </p>
          </div>

          {/* 4-Stage Visual Continuum */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1: Curiosity */}
            <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#DFB17B]">STAGE 01</span>
                  <span className="font-mono text-[10px] text-white/50">TINKERING LABS</span>
                </div>
                <div className="mt-4 font-serif text-2xl font-medium text-white">
                  Curiosity
                </div>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Question assumptions, explore unfamiliar disciplines, and dismantle hardware
                  without commercial stakes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#DFB17B]">
                Milestone: Benchtop Working Prototype
              </div>
            </div>

            {/* Stage 2: Rapid Execution */}
            <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#DFB17B]">STAGE 02</span>
                  <span className="font-mono text-[10px] text-white/50">BUILD SPRINTS</span>
                </div>
                <div className="mt-4 font-serif text-2xl font-medium text-white">
                  Rapid Execution
                </div>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Master rapid 48-to-72 hour shipping loops, peer collaboration, and immediate user
                  interaction cycles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#DFB17B]">
                Milestone: Deployed, Tested Software MVP
              </div>
            </div>

            {/* Stage 3: Competitive Excellence */}
            <div className="rounded-2xl border border-white/10 bg-[#161512] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#DFB17B]">STAGE 03</span>
                  <span className="font-mono text-[10px] text-white/50">HACKATHONS</span>
                </div>
                <div className="mt-4 font-serif text-2xl font-medium text-white">
                  Competitive Rigor
                </div>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Prove technical depth under real-world constraints against industry-sponsored
                  engineering problem statements.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#DFB17B]">
                Milestone: Audited Code & Track Award
              </div>
            </div>

            {/* Stage 4: Institutional Backing */}
            <div className="rounded-2xl border border-[#DFB17B]/40 bg-[#161512] p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(223,177,123,0.1)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#DFB17B]">STAGE 04</span>
                  <span className="font-mono text-[10px] text-[#DFB17B]">FELLOWSHIPS</span>
                </div>
                <div className="mt-4 font-serif text-2xl font-medium text-white">
                  Institutional Backing
                </div>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Receive $15k–$25k non-dilutive living grant, dedicated 1:1 mentorship, and long-term
                  pathway to startup or research.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#DFB17B]">
                Milestone: Civilizational Technology / Spinout
              </div>
            </div>
          </div>

          {/* Detailed Matrix Comparison Table */}
          <div className="mt-14 overflow-x-auto rounded-2xl border border-white/10 bg-[#0D0C0A]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-white/10 bg-white/5 text-white/70">
                <tr>
                  <th className="py-4 px-6 uppercase tracking-wider">Pathway</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Duration</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Time Commitment</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Non-Dilutive Funding</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Mentorship Level</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Primary Deliverable</th>
                  <th className="py-4 px-6 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Tinkering Programs</td>
                  <td className="py-4 px-6">Ongoing</td>
                  <td className="py-4 px-6">6–10 hrs / week</td>
                  <td className="py-4 px-6 text-[#DFB17B]">$500/mo Stipend</td>
                  <td className="py-4 px-6">Lab Stewards & Bench Support</td>
                  <td className="py-4 px-6">Working Hardware Breadboard</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleOpenModal("tinkering")}
                      className="text-[#DFB17B] hover:underline"
                    >
                      Reserve Bench →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Rapid Sprints</td>
                  <td className="py-4 px-6">48–72 Hours</td>
                  <td className="py-4 px-6">Intensive Weekend</td>
                  <td className="py-4 px-6 text-[#DFB17B]">$1k–$5k Credits</td>
                  <td className="py-4 px-6">Peer Review & Rapid Feedback</td>
                  <td className="py-4 px-6">Deployed Web Application / MVP</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleOpenModal("sprints")}
                      className="text-[#DFB17B] hover:underline"
                    >
                      Join Sprint →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Multidisciplinary Hackathons</td>
                  <td className="py-4 px-6">36–48 Hours</td>
                  <td className="py-4 px-6">Full Weekend Sprint</td>
                  <td className="py-4 px-6 text-[#DFB17B]">$50,000+ Pools</td>
                  <td className="py-4 px-6">Consortium Technical Leads</td>
                  <td className="py-4 px-6">Audited Code & Public Defense</td>
                  <td className="py-4 px-6 text-right">
                    <Link href="/challenges" className="text-[#DFB17B] hover:underline">
                      Benchmark Portal →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] bg-[#DFB17B]/5">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#DFB17B]" />
                    <span>Builder Fellowships</span>
                  </td>
                  <td className="py-4 px-6">12 Weeks</td>
                  <td className="py-4 px-6">Full-Time / Intensive</td>
                  <td className="py-4 px-6 text-[#DFB17B] font-bold">$15,000–$25,000</td>
                  <td className="py-4 px-6">Dedicated 1:1 CTO Mentorship</td>
                  <td className="py-4 px-6">Deep-Tech System / Spinout</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleOpenModal("fellowships")}
                      className="text-[#DFB17B] font-bold hover:underline"
                    >
                      Apply Now →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          APPLICATION / FAST-TRACK MODAL
      ========================================================================= */}
      {applicationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#161512] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {appSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E9B63]/20 border border-[#2E9B63]/40 text-[#2E9B63]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-white font-medium">
                  Application Logged
                </h3>
                <p className="mt-2 text-sm text-[#E8D8C0]/80 font-sans max-w-sm mx-auto">
                  Thank you for applying to IBA Foundation's programs. Our review board assesses
                  builders purely on proof-of-work and technical curiosity. You will receive an
                  onboarding update within 5 business days.
                </p>
                <button
                  onClick={() => setApplicationModalOpen(false)}
                  className="mt-6 rounded-full bg-[#DFB17B] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#CFA066]"
                >
                  Return to Programs
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase text-[#DFB17B]">
                  <span>IBA FOUNDATION</span>
                  <span>•</span>
                  <span>PROGRAM INTAKE</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium">
                  Initiate Builder Pathway
                </h3>
                <p className="mt-1 text-xs text-white/70 font-sans mb-6">
                  Select your desired pathway. All IBA programs are 100% non-dilutive and builder-owned.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Ada Lovelace"
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ada@domain.org"
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      Program Pathway *
                    </label>
                    <select
                      value={formData.pathway}
                      onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white focus:border-[#DFB17B] focus:outline-none"
                    >
                      <option value="fellowships">Builder Fellowships (12-Week, $15k–$25k Grant)</option>
                      <option value="hackathons">Multidisciplinary Hackathons ($50k+ Pools)</option>
                      <option value="sprints">Rapid Product Sprints (48–72h Intensives)</option>
                      <option value="tinkering">Tinkering Programs & Hardware Bench ($500/mo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      GitHub / Portfolio / Demonstration Link *
                    </label>
                    <input
                      required
                      type="url"
                      value={formData.githubOrPortfolio}
                      onChange={(e) =>
                        setFormData({ ...formData, githubOrPortfolio: e.target.value })
                      }
                      placeholder="https://github.com/... or portfolio URL"
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      What do you want to build? (1–3 sentences) *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.projectVision}
                      onChange={(e) =>
                        setFormData({ ...formData, projectVision: e.target.value })
                      }
                      placeholder="Describe your thesis, the bottleneck you want to crack, or hardware you need to build..."
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#DFB17B] py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] active:scale-95"
                    >
                      Submit Pathway Intake
                    </button>
                    <p className="mt-2 text-center text-[10px] text-white/50">
                      Zero equity taken. 100% builder ownership of all code and IP.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
