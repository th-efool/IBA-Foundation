import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, Terminal, Award, ArrowRight } from "lucide-react";
import { getAllPlaybooks } from "./playbooks-data";
import { PlaybookHeader } from "./components/PlaybookHeader";
import { PlaybooksCatalogClient } from "./PlaybooksCatalogClient";

export const metadata: Metadata = {
  title: "Builder Playbooks & Engineering Blueprints | IBA Foundation",
  description:
    "Actionable, battle-tested engineering and venture formation playbooks. From 48-hour hackathon prototypes to distributed systems scalability and autonomous AI agents in production.",
  alternates: {
    canonical: "https://ibafoundation.org/playbooks",
  },
  openGraph: {
    type: "website",
    url: "https://ibafoundation.org/playbooks",
    title: "Builder Playbooks & Engineering Blueprints | IBA Foundation",
    description:
      "Actionable, battle-tested engineering and venture formation playbooks. From 48-hour hackathon prototypes to distributed systems scalability and autonomous AI agents in production.",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1280,
        height: 720,
        alt: "IBA Foundation Builder Playbooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Playbooks & Engineering Blueprints | IBA Foundation",
    description:
      "Actionable, battle-tested engineering and venture formation playbooks.",
    images: ["/images/hero-poster.webp"],
  },
};

export default function PlaybooksIndexPage() {
  const playbooks = getAllPlaybooks();

  // JSON-LD ItemList Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IBA Foundation Builder Playbooks",
    description:
      "Curated engineering guides and venture roadmaps for technical founders and builders.",
    numberOfItems: playbooks.length,
    itemListElement: playbooks.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://ibafoundation.org/playbooks/${p.slug}`,
      name: p.title,
      description: p.summary,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-text antialiased selection:bg-primary/30 selection:text-white">
      {/* Rich Snippets Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PlaybookHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-surface via-background to-background py-16 md:py-24">
        <div className="pointer-events-none absolute -top-40 right-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>IBA Engineering & Venture Knowledge Base</span>
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
            Programmatic Blueprints for World-Class Builders
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
            Battle-tested operational architectures, hardware sprints, and systems scaling guides synthesized from 14 cohorts of IBA founders and Silicon Valley technical mentors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Battle-tested with $18M+ spinout capital</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary" />
              <span>Production code snippets & benchmarks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <PlaybooksCatalogClient playbooks={playbooks} />
      </section>

      {/* Venture Fellowship Callout */}
      <section className="border-t border-white/10 bg-surface/50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Cohorts Enrolling Now
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
            Have an MVP You Want to Scale?
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            The IBA Venture Fellowship provides founders with up to $100k non-dilutive capital, lab access, and direct operational guidance to reach product-market fit.
          </p>
          <div className="pt-2">
            <a
              href="https://ibafoundation.org/#initiatives"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[#CFA066] px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-primary/25 transition-all hover:brightness-110 active:scale-95"
            >
              <span>Apply for Venture Fellowship</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
