import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalNavbar } from "../components/InstitutionalNavbar";
import { InstitutionalFooter } from "../components/InstitutionalFooter";
import { BreadcrumbSchema } from "../components/seo/BreadcrumbSchema";


export const metadata: Metadata = {
  title: "IBA Fellowship Cohort '26 | $25,000 Non-Dilutive Grant & Residency",
  description:
    "A 12-week, equity-free institutional fellowship providing $15,000–$25,000 living grants, $10,000 compute stipends, and 1:1 faculty mentorship for technical builders.",
  keywords: [
    "IBA Fellowship",
    "IBA Foundation",
    "tech fellowship 2026",
    "non-dilutive grants",
    "equity-free builder residency",
    "student hacker grant",
    "hardware research residency",
    "Cohort 26",
  ],
  alternates: {
    canonical: "https://ibafoundation.org/fellowship",
  },
  openGraph: {
    title: "IBA Fellowship Cohort '26 | $25,000 Non-Dilutive Grant & Residency",
    description:
      "A 12-week, equity-free institutional fellowship providing $15,000–$25,000 living grants, $10,000 compute stipends, and 1:1 faculty mentorship for technical builders.",
    url: "https://ibafoundation.org/fellowship",
    siteName: "IBA Foundation",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "IBA Fellowship Cohort '26",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IBA Fellowship Cohort '26 | $25,000 Non-Dilutive Grant",
    description:
      "12-week equity-free residency for student builders, hackers, and researchers. $15k-$25k grants + $10k compute.",
    images: ["/images/hero-poster.webp"],
  },
};

export default function FellowshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOccupationalProgram",
        name: "IBA Fellowship Cohort '26",
        description:
          "The IBA Fellowship is a 12-week, equity-free institutional residency providing $15,000 to $25,000 in non-dilutive living grants, $10,000 compute stipends, and dedicated faculty mentorship for undergraduate builders, open-source hackers, and technical researchers accepted into Cohort '26.",
        provider: {
          "@type": "Organization",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
          sameAs: ["https://twitter.com/ibafoundation", "https://github.com/ibafoundation"],
        },
        timeToComplete: "P12W",
        educationalProgramMode: "blended",
        occupationalCategory: "Software Engineering, Hardware Architecture, Applied AI, Robotics",
        startDate: "2026-01-19",
        endDate: "2026-04-10",
        programPrerequisites:
          "Demonstrable proof-of-work in software systems, hardware prototyping, or applied technical research.",
        financialAidEligible: "True",
      },
      {
        "@type": "MonetaryGrant",
        name: "IBA Fellowship Non-Dilutive Builder Grant",
        amount: {
          "@type": "MonetaryAmount",
          currency: "USD",
          minValue: 15000,
          maxValue: 25000,
        },
        funder: {
          "@type": "Organization",
          name: "IBA Foundation",
        },
        description:
          "Non-dilutive living stipend and compute grant awarded to selected fellows. 0% equity, 100% fellow IP retention.",
      },
    ],
  };

  const stipendItems = [
    {
      badge: "NON-DILUTIVE CAPITAL",
      amount: "$15,000 – $25,000",
      label: "Living Grant (Zero Equity)",
      desc: "Disbursed upfront in three monthly tranches directly to fellows. No equity taken, no warrants, no debt, and no strings attached. You focus 100% on building.",
    },
    {
      badge: "INFRASTRUCTURE",
      amount: "$10,000",
      label: "Compute & Lab Prototyping",
      desc: "High-throughput GPU clusters (H100/A100 instances on AWS, GCP, and Modal), specialized hardware lab budgets, sensors, CNC, and PCB manufacturing credits.",
    },
    {
      badge: "COMMUNITY & SPACE",
      amount: "Fully Covered",
      label: "Residency Housing & Lab Access",
      desc: "Subsidized private accommodations during the 4-week in-person residency, with 24/7 keycard access to our hardware fabrication and systems engineering labs.",
    },
    {
      badge: "ACADEMIC & INDUSTRY GUIDANCE",
      amount: "Weekly 1:1",
      label: "EIR & Faculty Advisory",
      desc: "Direct technical counsel from principal architects, university research chairs, and open-source pioneers with deep domain expertise in your specific stack.",
    },
  ];

  const timelinePhases = [
    {
      phase: "01",
      title: "Applications Open & Rolling Review",
      date: "October 15 – November 30, 2025",
      status: "Active",
      desc: "Submissions evaluated on a rolling basis. Early submissions receive expedited review within 10 business days.",
    },
    {
      phase: "02",
      title: "Technical Review & System Whiteboard",
      date: "December 01 – December 10, 2025",
      status: "Upcoming",
      desc: "Shortlisted candidates participate in a 45-minute live code walkthrough and architectural whiteboard with IBA technical fellows.",
    },
    {
      phase: "03",
      title: "Cohort '26 Final Selection",
      date: "December 15, 2025",
      status: "Upcoming",
      desc: "24 fellows across 8–12 teams announced. Initial grant disbursement and travel logistics arranged.",
    },
    {
      phase: "04",
      title: "Residency Kickoff & Sprint 1 (Weeks 1–4)",
      date: "January 19 – February 13, 2026",
      status: "Upcoming",
      desc: "In-person residency. Deep problem validation, architecture locking, and rapid hardware/software prototyping in shared labs.",
    },
    {
      phase: "05",
      title: "Deep Execution & Alpha Testing (Weeks 5–10)",
      date: "February 16 – March 27, 2026",
      status: "Upcoming",
      desc: "Distributed sprint with weekly milestone check-ins, compute allocation scale-ups, and user trials.",
    },
    {
      phase: "06",
      title: "Symposium & Demo Showcase (Weeks 11–12)",
      date: "March 30 – April 10, 2026",
      status: "Upcoming",
      desc: "Final on-site demonstration in front of top research chairs, deep-tech venture partners, and institutional grantmakers.",
    },
  ];

  const eligibilityGroups = [
    {
      role: "Undergraduate & Graduate Builders",
      icon: "01",
      desc: "Students in Computer Science, Electrical Engineering, Mechanical Design, Applied Physics, or Mathematics who prioritize shipping real systems over theoretical coursework.",
    },
    {
      role: "Independent Hackers & Tinkerers",
      icon: "02",
      desc: "Self-directed developers and autonomous builders with a track record of building prototypes, deploying tools, or modifying firmware on nights and weekends.",
    },
    {
      role: "Open-Source Contributors",
      icon: "03",
      desc: "Maintainers and core contributors advancing foundational developer tools, operating system components, distributed protocols, or machine learning infrastructure.",
    },
    {
      role: "Early-Stage Technical Researchers",
      icon: "04",
      desc: "Scientists and inventors transitioning experimental lab research, pre-print papers, or hardware patents into functional real-world deployments.",
    },
  ];

  const rubricCriteria = [
    {
      percent: "30%",
      title: "Problem Understanding & Depth",
      summary:
        "Did you identify a consequential, authentic problem? Nuanced understanding of domain friction and physical constraints over surface-level market slides.",
      details: [
        "First-principles analysis of why existing solutions fail",
        "Clear demarcation of technical vs. organizational bottlenecks",
        "Direct domain empathy and grounded user or systems insight",
      ],
    },
    {
      percent: "30%",
      title: "Technical Rigor & Execution",
      summary:
        "Verifiable proof of capacity to build working systems. Algorithmic soundness, clean architecture, and tangible artifacts over slide decks.",
      details: [
        "Functional codebase, bench prototype, or simulation",
        "Thoughtful architectural choices and edge-case handling",
        "Commitment to testing, reliability, and reproducible benchmarks",
      ],
    },
    {
      percent: "20%",
      title: "Originality & Critical Thinking",
      summary:
        "Unconventional inquiry questioning standard industry dogma. Rejecting derivative wrappers in favor of foundational advances.",
      details: [
        "Novel synthesis across intersecting disciplines",
        "Willingness to explore non-consensus technical vectors",
        "Depth of intellectual curiosity and questioning assumptions",
      ],
    },
    {
      percent: "20%",
      title: "Agency & Resourcefulness",
      summary:
        "Demonstrable shipping velocity, high grit, and the rare ability to overcome dead ends without waiting for external permission.",
      details: [
        "High iteration frequency and rapid prototyping cycles",
        "Resourcefulness when facing hardware or tooling constraints",
        "Demonstrated resilience and completion stamina",
      ],
    },
  ];

  const faqs = [
    {
      q: "Does the IBA Foundation take any equity, intellectual property, or board seats?",
      a: "No. The IBA Foundation is an institution, not a venture accelerator. We take 0% equity, zero warrants, and claim zero rights to your intellectual property. You retain 100% of your patents, source code, and commercial rights.",
    },
    {
      q: "Can I apply as a solo builder, or do I need a co-founder?",
      a: "Both solo builders and pre-formed teams of up to 3 people are encouraged to apply. Grants are scaled according to team size ($15,000 for solo fellows, and up to $25,000 for teams). We also facilitate team formation during the review cycle.",
    },
    {
      q: "Is the fellowship in-person or remote?",
      a: "The fellowship follows a high-impact hybrid structure: 4 weeks on-site during the January kickoff, 6 weeks of distributed sprint with weekly 1:1 check-ins, and 2 final weeks on-site for the Demo & Research Symposium. Subsidized housing is provided for all on-site residency periods.",
    },
    {
      q: "Can I participate if I am currently enrolled in university or employed?",
      a: "Yes. The program is specifically structured to accommodate academic schedules, winter terms, and independent schedules. Fellows are expected to dedicate at least 30 hours per week to their project.",
    },
    {
      q: "What domains and technical disciplines are supported?",
      a: "We fund ambitious technical projects across systems programming, high-performance computing, AI architecture & model inference, robotics & cybernetics, hardware fabrication, decentralized protocols, and bio-computational tools.",
    },
    {
      q: "What happens after the 12-week fellowship ends?",
      a: "Fellows present their working systems at the IBA Demo Day & Institutional Symposium to premier research chairs, deep-tech investors, and foundation partners. Fellows become permanent members of the IBA Alumni Network, with continued access to lab facilities, follow-on grant pools, and institutional sponsorship.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#F6F1E5]">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={[{ name: "Fellowship Cohort '26", url: "/fellowship" }]} />

      {/* Navigation */}
      <InstitutionalNavbar currentPage="fellowship" />


      <main id="main-content" className="relative">
        {/* ============================================================
            HERO SECTION: First 50 words answer search intent directly
            ============================================================ */}
        <section className="relative overflow-hidden border-b border-white/[0.08] pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          {/* Subtle Ambient Light Gradients matching IBA brand */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#DFB17B]/10 blur-[140px]"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFB17B]/30 bg-[#161512] px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-[#DFB17B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFB17B]" />
              COHORT &apos;26 APPLICATIONS OPEN &bull; 12-WEEK RESIDENCY
            </div>

            {/* Headline */}
            <h1 className="mt-8 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08]">
              Build Consequential Systems.
              <br />
              <span className="text-[#DFB17B] italic">Zero Equity Taken.</span>
            </h1>

            {/* ============================================================
                CRITICAL REQUIREMENT: SEARCH INTENT ANSWER (EXACTLY 37 WORDS)
                Must answer search intent within the first 50 words of body.
                ============================================================ */}
            <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-[#F6F1E5] leading-relaxed">
              The IBA Fellowship is a 12-week, equity-free institutional residency providing $15,000 to $25,000 in non-dilutive living grants, $10,000 compute stipends, and dedicated faculty mentorship for undergraduate builders, open-source hackers, and technical researchers accepted into Cohort &apos;26.
            </p>

            {/* Prominent Call to Action Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#DFB17B] px-8 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:bg-[#CFA066] hover:shadow-[0_0_30px_rgba(223,177,123,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB17B]"
              >
                Apply for Fellowship
              </a>
              <a
                href="#rubric"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.04]"
              >
                View Evaluation Rubric
              </a>
            </div>

            {/* Key Fact Strip / Quick Answer Bento */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6 border-t border-white/[0.08] pt-12 text-left">
              <div className="rounded-lg border border-white/[0.06] bg-[#161512]/60 p-4 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#DFB17B] uppercase tracking-wider block">
                  Living Grant
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-white mt-1 block">
                  $25,000
                </span>
                <span className="text-xs text-white/60 mt-1 block font-sans">
                  Non-dilutive living stipend
                </span>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-[#161512]/60 p-4 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#DFB17B] uppercase tracking-wider block">
                  Equity Stake
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-white mt-1 block">
                  0%
                </span>
                <span className="text-xs text-white/60 mt-1 block font-sans">
                  You own 100% of your IP
                </span>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-[#161512]/60 p-4 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#DFB17B] uppercase tracking-wider block">
                  Compute & Lab
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-white mt-1 block">
                  $10,000
                </span>
                <span className="text-xs text-white/60 mt-1 block font-sans">
                  GPU clusters & prototyping
                </span>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-[#161512]/60 p-4 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#DFB17B] uppercase tracking-wider block">
                  Duration
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-white mt-1 block">
                  12 Wks
                </span>
                <span className="text-xs text-white/60 mt-1 block font-sans">
                  Hybrid residency model
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STIPEND & GRANT BREAKDOWN
            ============================================================ */}
        <section id="stipend" className="py-24 sm:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Institutional Funding Architecture
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Capital Designed for Pure Technical Velocity
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                Traditional incubators demand significant equity before you have verified your system. IBA Foundation provides unconditional, non-dilutive grant capital so ambitious builders can pursue high-risk, consequential work with complete autonomy.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {stipendItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#161512] p-8 transition-all duration-300 hover:border-[#DFB17B]/40 hover:bg-[#1a1815]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium tracking-wider text-[#DFB17B]">
                      {item.badge}
                    </span>
                    <span className="font-mono text-2xl font-bold text-white group-hover:text-[#DFB17B] transition-colors">
                      {item.amount}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-white font-serif">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-[#DFB17B]/20 bg-[#DFB17B]/[0.03] p-6 text-sm text-[#E8D8C0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <strong className="text-white block font-medium">Non-Dilutive Guarantee:</strong>
                <span>
                  No SAFE agreements, no convertible notes, no board oversight. The IP, the codebase, and all downstream value remain 100% yours.
                </span>
              </div>
              <a
                href="#apply"
                className="shrink-0 font-mono text-xs font-semibold text-[#DFB17B] underline underline-offset-4 hover:text-[#CFA066]"
              >
                Review Grant Agreement Terms &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            COHORT '26 TIMELINE
            ============================================================ */}
        <section id="timeline" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0908]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Cohort &apos;26 Milestone Schedule
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                From Problem Teardown to Working System
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                Twelve structured weeks engineered to eliminate friction, instill disciplined engineering velocity, and place your work in front of institutions that can champion its progress.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {timelinePhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#161512] p-6"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-light text-[#DFB17B]/60">
                        {phase.phase}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                          phase.status === "Active"
                            ? "bg-[#2E9B63]/20 text-[#2E9B63] border border-[#2E9B63]/30"
                            : "bg-white/[0.05] text-white/60 border border-white/10"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-white font-serif">
                      {phase.title}
                    </h3>
                    <div className="mt-1 font-mono text-xs text-[#DFB17B]">
                      {phase.date}
                    </div>
                    <p className="mt-3 text-sm text-white/70 font-sans leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ELIGIBILITY CRITERIA ("WHO THIS IS FOR")
            ============================================================ */}
        <section id="eligibility" className="py-24 sm:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Candidate Profile
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Who We Are Looking For
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                We select builders based on verifiable capability, curiosity, and relentless agency—not the prestige of your credentials or how well you rehearse a pitch deck.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {eligibilityGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#161512] p-6 hover:border-[#DFB17B]/30 transition-colors"
                >
                  <span className="font-mono text-sm font-semibold text-[#DFB17B]">
                    [{group.icon}]
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-medium text-white">
                    {group.role}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed font-sans">
                    {group.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            THE EVALUATION RUBRIC (Grounded directly in Values.md)
            ============================================================ */}
        <section id="rubric" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0908]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                The Evaluation Rubric
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Rewarding More Than Polished Presentations
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                As articulated in the IBA Foundation Creed: &ldquo;Evaluation should account for problem understanding, critical thinking, originality, execution, and the quality of the solution. Otherwise, an institution risks selecting for presentation ability rather than identifying genuinely promising talent.&rdquo;
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {rubricCriteria.map((criterion, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#161512] p-8"
                >
                  <div>
                    <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-4">
                      <h3 className="font-serif text-xl font-medium text-white">
                        {criterion.title}
                      </h3>
                      <span className="font-mono text-xl font-bold text-[#DFB17B]">
                        {criterion.percent}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/80 font-sans">
                      {criterion.summary}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/50 block">
                        Evaluation Signals:
                      </span>
                      {criterion.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/70">
                          <span className="text-[#DFB17B] font-mono">&bull;</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FREQUENTLY ASKED QUESTIONS (Structured Q&A Accordion)
            ============================================================ */}
        <section id="faq" className="py-24 sm:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Frequently Asked Questions
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Everything You Need to Know
              </h2>
              <p className="mt-4 text-base text-white/70 font-sans">
                Direct answers to common queries regarding equity, residency commitments, and intellectual property.
              </p>
            </div>

            <div className="mt-14 space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-white/[0.08] bg-[#161512] p-6 transition-all duration-200 open:border-[#DFB17B]/40 open:bg-[#1a1815]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base sm:text-lg font-medium text-white focus:outline-none">
                    <span className="pr-4">{faq.q}</span>
                    <span className="shrink-0 font-mono text-xl text-[#DFB17B] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 border-t border-white/[0.06] pt-4 text-sm sm:text-base leading-relaxed text-white/75 font-sans">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            APPLICATION PORTAL CTA & FINAL CONVERSION
            ============================================================ */}
        <section id="apply" className="py-24 sm:py-32 relative overflow-hidden bg-[#0D0C0A]">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#DFB17B]/10 blur-[120px]"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
              Ready to Put Your Potential into Practice?
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
              Apply for Fellowship Cohort &apos;26
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/75 font-sans leading-relaxed">
              We evaluate applications continuously. Priority review is given to submissions completed before November 30, 2025. What you build here can take you further.
            </p>

            {/* Application Checklist */}
            <div className="mx-auto mt-10 max-w-lg rounded-xl border border-white/[0.08] bg-[#161512] p-6 text-left text-xs sm:text-sm text-white/80">
              <span className="font-mono font-semibold text-[#DFB17B] uppercase tracking-wider block mb-3">
                Application Requirements:
              </span>
              <ul className="space-y-2 font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#2E9B63] font-bold">&check;</span>
                  <span>GitHub profile or portfolio of built systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2E9B63] font-bold">&check;</span>
                  <span>1-page problem teardown & technical spec</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2E9B63] font-bold">&check;</span>
                  <span>2-minute unedited demonstration or architecture outline</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:fellowship@ibafoundation.org?subject=IBA%20Fellowship%20Cohort%2026%20Application"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#DFB17B] px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-[#CFA066] hover:shadow-[0_0_32px_rgba(223,177,123,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB17B]"
              >
                Submit Application via Admissions Desk
              </a>
              <Link
                href="/values"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.04]"
              >
                Read Institutional Ethos
              </Link>
            </div>

            <p className="mt-6 text-xs text-white/50 font-mono">
              Direct inquiries: fellowship@ibafoundation.org &bull; 0% Equity &bull; 100% Builder IP
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <InstitutionalFooter />
    </div>
  );
}
