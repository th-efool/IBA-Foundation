import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
  Terminal,
  Cpu,
  ShieldCheck,
  HelpCircle,
  FileText,
  Flame,
  Zap,
} from "lucide-react";

import {
  getAllPlaybooks,
  getPlaybookBySlug,
  getRelatedPlaybooks,
} from "../playbooks-data";
import { PlaybookHeader } from "../components/PlaybookHeader";
import {
  CodeBlock,
  PlaybookActionButtons,
  TableOfContents,
  DownloadResourceButton,
} from "./PlaybookClientInteractions";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Next.js 15/16 Static Generation
export async function generateStaticParams() {
  const playbooks = getAllPlaybooks();
  return playbooks.map((p) => ({
    slug: p.slug,
  }));
}

// 2. Next.js 15/16 Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    return {
      title: "Playbook Not Found | IBA Foundation",
      description: "The requested builder playbook could not be found.",
    };
  }

  const pageUrl = `https://ibafoundation.org/playbooks/${slug}`;

  return {
    title: `${playbook.title} | IBA Builder Playbooks`,
    description: playbook.summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: `${playbook.title} | IBA Builder Playbooks`,
      description: playbook.summary,
      siteName: "IBA Foundation",
      publishedTime: "2026-10-01T00:00:00.000Z",
      modifiedTime: "2026-10-16T00:00:00.000Z",
      authors: [playbook.author.name],
      tags: [playbook.category, "IBA Foundation", "Builder Playbook", "Startup Engineering"],
      images: [
        {
          url: "/images/hero-poster.webp",
          width: 1280,
          height: 720,
          alt: playbook.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${playbook.title} | IBA Builder Playbooks`,
      description: playbook.summary,
      images: ["/images/hero-poster.webp"],
    },
  };
}

export default async function PlaybookDetailPage({ params }: Props) {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  const related = getRelatedPlaybooks(slug, 3);

  // Table of Contents navigation items
  const tocHeadings = [
    { id: "overview", label: "Overview & Outcomes" },
    { id: "roadmap", label: "Phased Roadmap" },
    { id: "failure-modes", label: "Failure Modes & Traps" },
    { id: "rubric", label: "The IBA Rubric" },
    { id: "tech-stack", label: "Tools & Stack" },
    { id: "resources", label: "Starter Kits & Downloads" },
    { id: "author", label: "Mentor & Author" },
    { id: "faqs", label: "Frequently Asked Questions" },
    { id: "venture-fellowship", label: "Venture Fellowship" },
  ];

  // Structured Data Schema (TechArticle + HowTo)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://ibafoundation.org/playbooks/${slug}#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://ibafoundation.org/#website",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
        },
        headline: playbook.title,
        description: playbook.summary,
        inLanguage: "en-US",
        mainEntityOfPage: `https://ibafoundation.org/playbooks/${slug}`,
        datePublished: "2026-10-01T00:00:00Z",
        dateModified: "2026-10-16T00:00:00Z",
        author: {
          "@type": "Person",
          name: playbook.author.name,
          jobTitle: playbook.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
          logo: {
            "@type": "ImageObject",
            url: "https://ibafoundation.org/icon.svg",
          },
        },
      },
      {
        "@type": "HowTo",
        "@id": `https://ibafoundation.org/playbooks/${slug}#howto`,
        name: playbook.title,
        description: playbook.summary,
        totalTime: "P90D",
        step: playbook.phases.flatMap((phase) =>
          phase.steps.map((s, idx) => ({
            "@type": "HowToStep",
            position: idx + 1,
            name: s.title,
            text: s.description,
          }))
        ),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-text antialiased selection:bg-primary/30 selection:text-white">
      {/* JSON-LD Rich Snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Navigation Header */}
      <PlaybookHeader
        breadcrumbs={[
          { label: playbook.category, href: `/playbooks?category=${encodeURIComponent(playbook.category)}` },
          { label: playbook.title },
        ]}
      />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-surface via-background to-background py-12 md:py-16 lg:py-20">
        {/* Subtle background ambient glow */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/playbooks"
              className="inline-flex items-center gap-2 text-xs font-medium text-text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all Playbooks</span>
            </Link>

            <PlaybookActionButtons slug={playbook.slug} title={playbook.title} />
          </div>

          {/* Badges & Meta Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" />
              {playbook.category}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-subtle px-3 py-1 text-xs font-medium text-text-secondary">
              <Layers className="h-3 w-3 text-primary" />
              Level: {playbook.difficulty}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-subtle px-3 py-1 text-xs font-medium text-text-secondary">
              <Clock className="h-3 w-3 text-primary" />
              {playbook.readingTime}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-subtle px-3 py-1 text-xs font-medium text-text-muted">
              <Calendar className="h-3 w-3" />
              Updated {playbook.lastUpdated}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] max-w-5xl">
            {playbook.title}
          </h1>

          <p className="mt-5 max-w-4xl text-base sm:text-lg leading-relaxed text-text-secondary">
            {playbook.subtitle}
          </p>

          {/* Author Badge */}
          <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 font-serif text-sm font-bold text-primary">
              {playbook.author.avatar}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {playbook.author.name}
              </div>
              <div className="text-xs text-text-muted">
                {playbook.author.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-16">
            {/* Section 1: Overview & Key Outcomes */}
            <section id="overview" className="scroll-mt-24 space-y-6">
              <div className="rounded-2xl border border-white/15 bg-surface p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 bg-primary/10 blur-3xl" />

                <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  <Award className="h-4 w-4" />
                  <span>Executive Playbook Overview</span>
                </div>

                <p className="text-base leading-relaxed text-text-secondary">
                  {playbook.summary}
                </p>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                    Key Outcomes You Will Achieve
                  </h3>
                  <ul className="space-y-3">
                    {playbook.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="leading-normal">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Phased Step-by-Step Roadmap */}
            <section id="roadmap" className="scroll-mt-24 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <Flame className="h-4 w-4" />
                  <span>Systematic Implementation</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  Phased Step-by-Step Roadmap
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  Follow this structured sequence to eliminate architectural ambiguity and de-risk your deployment timeline.
                </p>
              </div>

              <div className="space-y-10">
                {playbook.phases.map((phase) => (
                  <div
                    key={phase.phaseNumber}
                    className="relative rounded-2xl border border-white/12 bg-surface/80 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-primary/30"
                  >
                    {/* Phase Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 border border-primary/30 text-xs font-bold text-primary">
                          {phase.phaseNumber}
                        </span>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white">
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      <span className="rounded-full bg-surface-subtle border border-white/10 px-3 py-1 text-xs font-medium text-primary">
                        {phase.timeframe}
                      </span>
                    </div>

                    {/* Phase Goal Banner */}
                    <div className="my-5 rounded-lg bg-surface-subtle/80 border-l-2 border-primary p-3.5 text-xs text-text-secondary">
                      <span className="font-semibold text-white">Strategic Objective: </span>
                      {phase.goal}
                    </div>

                    {/* Steps within Phase */}
                    <div className="space-y-6">
                      {phase.steps.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-xl border border-white/8 bg-[#12110E] p-4 sm:p-5 transition-colors hover:border-white/15"
                        >
                          <h4 className="text-sm font-semibold text-white">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-muted">
                            {step.description}
                          </p>

                          {/* Code Snippet if present */}
                          {step.codeSnippet && (
                            <CodeBlock
                              code={step.codeSnippet.code}
                              language={step.codeSnippet.language}
                              filename={step.codeSnippet.filename}
                            />
                          )}

                          {/* Key Deliverable badge */}
                          <div className="mt-3 flex items-center gap-2 text-xs text-primary font-medium">
                            <span className="rounded bg-primary/10 px-2 py-0.5 border border-primary/20 text-[10px] uppercase font-bold tracking-wider">
                              Deliverable
                            </span>
                            <span>{step.keyDeliverable}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Common Failure Modes & Traps */}
            <section id="failure-modes" className="scroll-mt-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Post-Mortem Analysis</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  Common Failure Modes & Mitigations
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  These fatal traps sink over 80% of technical projects. Learn to identify symptoms early and apply proven IBA operational countermeasures.
                </p>
              </div>

              <div className="space-y-4">
                {playbook.failureModes.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-red-500/20 bg-[#161211] p-5 sm:p-6 transition-all hover:border-red-500/40"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
                        <h3 className="text-base font-semibold text-white">
                          {item.trap}
                        </h3>
                      </div>
                      <span
                        className={`rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          item.severity === "Critical"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {item.severity} Severity
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs sm:text-sm">
                      <p className="text-text-muted">
                        <strong className="text-red-300/90 font-medium">Symptom: </strong>
                        {item.symptom}
                      </p>
                      <p className="text-text-secondary">
                        <strong className="text-primary font-medium">IBA Mitigation: </strong>
                        {item.mitigation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: The IBA Evaluation Rubric */}
            <section id="rubric" className="scroll-mt-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Venture Standards</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  The IBA Evaluation Rubric
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  How IBA investment partners and technical committee members score candidate systems during demo days and cohort reviews.
                </p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-surface p-6 sm:p-8 space-y-6">
                {playbook.rubric.map((item, idx) => (
                  <div key={idx} className="space-y-2 border-b border-white/8 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {item.criterion}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary font-mono">
                        {item.weight}% Weight
                      </span>
                    </div>

                    {/* Progress Bar Visual */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[#F3DFC1]"
                        style={{ width: `${item.weight * 2.5}%` }}
                      />
                    </div>

                    <p className="text-xs text-text-muted pt-1">
                      {item.description}
                    </p>

                    <div className="rounded bg-surface-subtle px-3 py-2 text-xs text-white/90">
                      <span className="text-primary font-semibold">Target Benchmark: </span>
                      {item.targetBenchmark}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Recommended Tools & Stack */}
            <section id="tech-stack" className="scroll-mt-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <Terminal className="h-4 w-4" />
                  <span>Curated Infrastructure</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  Tools & Production Stack Recommendations
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  Battle-tested technologies selected for developer velocity, operational stability, and predictable cloud economics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {playbook.toolsStack.map((stack, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/12 bg-surface p-5 transition-all hover:border-primary/30"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      {stack.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {stack.recommended.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-white/8 border border-white/10 px-2.5 py-1 text-xs font-medium text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-text-muted">
                      {stack.notes}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Downloadable Resources & Starter Kits */}
            <section id="resources" className="scroll-mt-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <FileText className="h-4 w-4" />
                  <span>Ready-To-Deploy Assets</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  Downloadable Resources & Starter Kits
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  Production-grade starter boilerplates, legal templates, and checklists directly utilized by IBA cohorts.
                </p>
              </div>

              <div className="space-y-4">
                {playbook.resources.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-white/12 bg-surface p-5 transition-all hover:border-primary/40"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                          {res.type}
                        </span>
                        {res.badge && (
                          <span className="rounded bg-primary/20 text-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-primary/30">
                            {res.badge}
                          </span>
                        )}
                        <span className="text-xs text-text-muted">
                          Format: {res.format}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        {res.title}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {res.description}
                      </p>
                    </div>

                    <div className="shrink-0 self-end sm:self-center">
                      <DownloadResourceButton title={res.title} format={res.format} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Lead Author & Mentor Profile */}
            <section id="author" className="scroll-mt-24 space-y-6">
              <div className="rounded-2xl border border-white/12 bg-surface p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 font-serif text-xl font-bold text-primary">
                    {playbook.author.avatar}
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-xl font-medium text-white">
                        {playbook.author.name}
                      </h3>
                      {playbook.author.credentials && (
                        <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                          {playbook.author.credentials}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-text-muted">
                      {playbook.author.role}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-text-secondary pt-1">
                      {playbook.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Founder Dilemmas</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {playbook.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/12 bg-surface p-5 space-y-2"
                  >
                    <h3 className="text-sm font-semibold text-white flex items-start gap-2">
                      <span className="text-primary font-bold">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-text-muted pl-5">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Venture Fellowship CTA Banner */}
            <section
              id="venture-fellowship"
              className="scroll-mt-24 rounded-2xl border border-primary/40 bg-gradient-to-br from-[#1E1B15] via-surface to-[#12110E] p-8 sm:p-10 relative overflow-hidden shadow-2xl"
            >
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

              <div className="max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  IBA Venture Fellowship 2026
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight">
                  Ready to Turn Your Prototype into a Venture-Backed Company?
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Join the next IBA Builder Cohort. Receive up to $100,000 in non-dilutive grant funding, 1-on-1 mentorship with Silicon Valley EIRs, lab compute credits, and direct introductions to leading global seed funds.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://ibafoundation.org/#initiatives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[#CFA066] px-6 py-3 text-sm font-bold text-black shadow-lg shadow-primary/25 transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Apply for Next Cohort</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                    href="/playbooks"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-surface px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-surface-subtle"
                  >
                    <span>Browse All Playbooks</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* Sticky Sidebar Column */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents Card */}
              <div className="rounded-2xl border border-white/12 bg-surface p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    On This Page
                  </h3>
                  <span className="text-[11px] text-text-muted">Quick Jump</span>
                </div>
                <TableOfContents headings={tocHeadings} />
              </div>

              {/* Quick Specs Card */}
              <div className="rounded-2xl border border-white/12 bg-surface p-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3">
                  Playbook Metadata
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Target Audience</span>
                    <span className="font-medium text-white">Founders & Architects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Difficulty</span>
                    <span className="font-medium text-primary">{playbook.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Estimated Duration</span>
                    <span className="font-medium text-white">14 – 90 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Verification Rubric</span>
                    <span className="font-medium text-white">4 Pillars (100 pts)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Code Samples</span>
                    <span className="font-medium text-primary">Production Tested</span>
                  </div>
                </div>
              </div>

              {/* Mini CTA Fellowship Sidebar Card */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 via-surface to-surface p-6 text-center space-y-3">
                <Zap className="h-6 w-6 text-primary mx-auto" />
                <h4 className="font-serif text-lg font-medium text-white">
                  Join IBA Fellowship
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Fast-track your venture with non-dilutive grants and dedicated technical advisory.
                </p>
                <a
                  href="#venture-fellowship"
                  className="block w-full rounded-lg bg-primary py-2 text-xs font-bold text-black transition-all hover:bg-primary-hover"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Playbooks Row */}
        <section className="mt-20 border-t border-white/10 pt-14 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-1">
                <Cpu className="h-4 w-4" />
                <span>Next in Curriculum</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Related Builder Playbooks
              </h2>
            </div>
            <Link
              href="/playbooks"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>View Catalog</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/playbooks/${rel.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-white/12 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                      {rel.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-muted">
                      <Clock className="h-3 w-3" />
                      {rel.readingTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-primary transition-colors leading-snug">
                    {rel.title}
                  </h3>

                  <p className="mt-2 text-xs text-text-muted line-clamp-3 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary pt-4 border-t border-white/8">
                  <span>Read Playbook</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
