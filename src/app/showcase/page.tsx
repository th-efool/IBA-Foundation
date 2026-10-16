import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  FileCheck2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { ShowcaseGallery } from "./ShowcaseGallery";
import { SHOWCASE_PROJECTS, SHOWCASE_STATS } from "./data";

export const metadata: Metadata = {
  title: "Student Project Showcase & Proof of Work | IBA Foundation",
  description:
    "Explore groundbreaking projects built by IBA Foundation fellows across AI, Robotics, Climate Tech, and Distributed Systems with judge evaluations and live demos.",
  keywords: [
    "IBA Foundation Showcase",
    "Student Innovation Directory",
    "Fellowship Proof of Work",
    "Open Source Deep Tech",
    "AI Systems Projects",
    "Robotics Autonomous Systems",
    "Clean Climate Tech",
    "Distributed Systems Raft",
    "Hardware Hackathon Winners",
  ],
  openGraph: {
    title: "Student Project Showcase & Proof of Work | IBA Foundation",
    description:
      "Explore groundbreaking projects built by IBA Foundation fellows across AI, Robotics, Climate Tech, and Distributed Systems with judge evaluations and live demos.",
    url: "https://ibafoundation.org/showcase",
    siteName: "IBA Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "IBA Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Project Showcase & Proof of Work | IBA Foundation",
    description:
      "Explore groundbreaking projects built by IBA Foundation fellows across AI, Robotics, Climate Tech, and Distributed Systems with judge evaluations and live demos.",
    images: ["/images/hero-poster.webp"],
  },
  alternates: {
    canonical: "https://ibafoundation.org/showcase",
  },
};

export default function ShowcasePage() {
  // Generate comprehensive JSON-LD Schema for rich search engine results
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ibafoundation.org/showcase#webpage",
        url: "https://ibafoundation.org/showcase",
        name: "Student Project Showcase & Proof of Work | IBA Foundation",
        description:
          "Explore groundbreaking projects built by IBA Foundation fellows across AI, Robotics, Climate Tech, and Distributed Systems with judge evaluations and live demos.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://ibafoundation.org/#website",
          name: "IBA Foundation",
          url: "https://ibafoundation.org",
        },
        breadcrumb: {
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
              name: "Showcase",
              item: "https://ibafoundation.org/showcase",
            },
          ],
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://ibafoundation.org/showcase#itemlist",
        name: "IBA Foundation Fellows Audited Projects",
        numberOfItems: SHOWCASE_PROJECTS.length,
        itemListElement: SHOWCASE_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.title,
            abstract: project.tagline,
            description: project.description,
            programmingLanguage: project.techStack.join(", "),
            codeRepository: project.links.githubUrl,
            url: project.links.demoUrl || `https://ibafoundation.org/showcase#${project.slug}`,
            datePublished: project.date,
            author: project.builders.map((builder) => ({
              "@type": "Person",
              name: builder.name,
              jobTitle: builder.role,
              affiliation: {
                "@type": "Organization",
                name: builder.universityOrOrg,
              },
            })),
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: project.judgeNotes.judgeName,
                jobTitle: project.judgeNotes.judgeRole,
              },
              reviewBody: project.judgeNotes.quote,
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="min-h-screen bg-[#0D0C0A] text-white flex flex-col selection:bg-[#DFB17B]/30 selection:text-[#F3DFC1]">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0D0C0A]/80 border-b border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* IBA Foundation Brand Mark */}
            <Link
              href="/"
              className="group relative inline-flex flex-col items-center select-none"
              aria-label="IBA Foundation Home"
            >
              <div className="relative flex items-baseline">
                {/* Golden Orbital Swoosh Arc */}
                <svg
                  viewBox="0 0 120 42"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2 left-2 w-[92%] h-[115%] overflow-visible"
                >
                  <path
                    d="M 18 22 C 42 -4, 96 -6, 104 8 C 108 15, 92 28, 72 34"
                    stroke="url(#ibaShowcaseArcGrad)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx="96" cy="4.5" r="2.6" fill="#F5D7A1" />
                  <defs>
                    <linearGradient
                      id="ibaShowcaseArcGrad"
                      x1="18"
                      y1="22"
                      x2="104"
                      y2="8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#DFB17B" stopOpacity="0.2" />
                      <stop offset="55%" stopColor="#DFB17B" stopOpacity="0.95" />
                      <stop offset="85%" stopColor="#F7E1B5" stopOpacity="1" />
                      <stop offset="100%" stopColor="#DFB17B" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="relative z-10 font-serif text-2xl sm:text-3xl font-medium tracking-[0.04em] text-white">
                  IBA
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[8.5px] font-medium tracking-[0.28em] uppercase text-white/90 pl-[0.28em]">
                FOUNDATION
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
              <Link
                href="/#about"
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/#competitions"
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                Competitions
              </Link>
              <Link
                href="/#initiatives"
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                Initiatives
              </Link>
              <Link
                href="/showcase"
                className="text-sm font-semibold text-[#DFB17B] transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-[#DFB17B]"
                aria-current="page"
              >
                Showcase
              </Link>
              <Link
                href="/#community"
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                Community
              </Link>
            </nav>

            {/* Header Right Action */}
            <div className="flex items-center gap-3">
              <a
                href="#submit-cta"
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-[#DFB17B] hover:bg-[#CFA066] text-black font-semibold text-xs tracking-wider uppercase
                  transition-all shadow-[0_0_15px_rgba(223,177,123,0.2)]
                "
              >
                <span>Submit Work</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li className="text-[#DFB17B] font-medium" aria-current="page">
                Showcase & Proof of Work
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <section className="relative pb-10 sm:pb-12 border-b border-white/10 mb-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161512] border border-[#DFB17B]/40 text-[#DFB17B] text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fellows Proof-of-Work Registry</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
                Engineered for Impact. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB17B] via-[#F3DFC1] to-amber-200">
                  Proven in Production.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Explore the technical artifacts engineered by IBA Foundation fellows. Every project
                in this registry has undergone independent code audits, hardware-in-the-loop stress
                tests, and academic jury defense across AI, Robotics, Climate, and Systems.
              </p>
            </div>

            {/* Stats Summary Counter Bar */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {SHOWCASE_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#161512] border border-white/10 hover:border-[#DFB17B]/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#DFB17B]/10 to-transparent pointer-events-none rounded-bl-full" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-[#DFB17B] tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Showcase Gallery (Client Component) */}
          <ShowcaseGallery initialProjects={SHOWCASE_PROJECTS} />

          {/* Call to Action Section for Builders */}
          <section
            id="submit-cta"
            className="mt-24 relative rounded-3xl bg-gradient-to-b from-[#161512] to-[#0D0C0A] border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#DFB17B]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#DFB17B]/5 blur-3xl" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22201B] border border-white/10 text-xs font-mono text-[#F3DFC1]">
                <FileCheck2 className="w-3.5 h-3.5 text-[#DFB17B]" />
                <span>Open for Applications & Peer Review</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
                Have you engineered something remarkable?
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                The IBA Foundation invites student engineers, university researchers, and independent
                fellows to submit their technical repositories for our next grant and showcase cycle.
                Accepted projects receive non-dilutive compute grants up to $50,000, venture capital
                introductions, and permanent indexing in our open registry.
              </p>

              {/* Requirement Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB17B] shrink-0" />
                  <span>Reproducible code repository & hardware bill of materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB17B] shrink-0" />
                  <span>Verified latency, accuracy, or efficiency benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB17B] shrink-0" />
                  <span>Public research whitepaper or interactive live demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB17B] shrink-0" />
                  <span>Commitment to open source or open scientific licensing</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:grants@ibafoundation.org?subject=IBA%20Showcase%20Submission"
                  className="
                    inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                    bg-[#DFB17B] hover:bg-[#CFA066] text-black font-semibold text-xs sm:text-sm tracking-wider uppercase
                    transition-all shadow-[0_4px_24px_rgba(223,177,123,0.3)]
                  "
                >
                  <span>Submit Project For Review</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  href="/#competitions"
                  className="
                    inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                    bg-[#22201B] hover:bg-[#2c2822] text-white text-xs sm:text-sm font-medium
                    border border-white/15 hover:border-[#DFB17B]/40 transition-all
                  "
                >
                  <span>Explore Fellowship Tracks</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Global Footer */}
        <footer className="w-full border-t border-white/10 bg-[#0A0908] py-12 px-4 sm:px-6 lg:px-8 mt-16 text-xs text-white/60">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <Link href="/" className="font-serif text-lg font-medium text-white tracking-wider">
                IBA FOUNDATION
              </Link>
              <span className="hidden sm:inline-block text-white/30">&bull;</span>
              <p className="text-white/50">Potential, put into practice.</p>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/#about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#competitions" className="hover:text-white transition-colors">
                Competitions
              </Link>
              <Link href="/showcase" className="text-[#DFB17B] hover:text-[#CFA066] transition-colors">
                Showcase
              </Link>
              <Link href="/#initiatives" className="hover:text-white transition-colors">
                Initiatives
              </Link>
              <a
                href="https://github.com/ibafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="text-white/40 text-center md:text-right">
              &copy; {new Date().getFullYear()} IBA Foundation. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
