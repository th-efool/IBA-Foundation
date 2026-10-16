import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Bookmark, Quote, ExternalLink, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "../blog-data";
import { InstitutionalNavbar } from "@/src/app/components/InstitutionalNavbar";
import { InstitutionalFooter } from "@/src/app/components/InstitutionalFooter";
import { BreadcrumbSchema } from "@/src/app/components/seo/BreadcrumbSchema";
import { TableOfContents, FAQAccordion, CitationCopyButton, ShareActions } from "./BlogClientInteractions";


interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Essay Not Found | IBA Foundation",
    };
  }

  const canonicalUrl = `https://ibafoundation.org/blog/${post.slug}`;

  return {
    title: `${post.title} | IBA Foundation Monograph Series`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: "/images/hero-poster.webp",
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/images/hero-poster.webp"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dual Schema.org: Article + FAQPage
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://ibafoundation.org",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ibafoundation.org/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#F6F1E5] antialiased selection:bg-[#DFB17B]/20 selection:text-[#DFB17B]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Essays & Research", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <InstitutionalNavbar />


      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb & Series Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#DFB17B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Monograph Curriculum</span>
            </Link>

            <div className="flex items-center gap-3 text-xs font-mono text-white/50">
              <span className="text-[#DFB17B] font-semibold">{post.seriesNumber}</span>
              <span>&bull;</span>
              <span>{post.category}</span>
            </div>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/70 font-sans leading-relaxed">
              {post.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
              <div className="flex items-center gap-4">
                <span className="text-white font-medium">{post.author.name}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <ShareActions title={post.title} />
            </div>
          </header>

          {/* Article Layout Grid */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <article className="lg:col-span-8 space-y-16">
              {/* TL;DR Executive Summary */}
              <div className="rounded-2xl border border-[#DFB17B]/30 bg-[#161512] p-8 sm:p-10 shadow-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#DFB17B]">
                  <Quote className="w-4 h-4" />
                  <span>Executive Thesis &bull; Core Takeaways</span>
                </div>
                <ul className="space-y-3 font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                  {post.tldr.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-[#DFB17B] mt-1 shrink-0">
                        [{idx + 1}]
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Figure 1: Hero Concept Illustration */}
              <figure className="rounded-2xl border border-white/10 bg-[#141310] p-6 sm:p-8 space-y-4">
                <div className="relative aspect-[16/9] w-full rounded-xl border border-white/10 bg-gradient-to-br from-[#1B1916] via-[#11100E] to-[#0A0908] p-8 flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Abstract SVG representation of Credential Grid vs Living Brass Mechanism */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#DFB17B_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/40 border-b border-white/10 pb-4">
                    <span>SYSTEM DICHOTOMY</span>
                    <span>FIGURE 01 &bull; PARADIGM SHIFT</span>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 my-auto">
                    <div className="rounded-lg border border-white/10 bg-black/40 p-5 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-rose-400">
                        Traditional Credential Signal
                      </div>
                      <div className="font-serif text-lg text-white font-medium">Institutional Compliance</div>
                      <p className="text-xs text-white/60 leading-relaxed font-sans">
                        Deterministic curriculum &bull; Closed-book exams &bull; Socioeconomic pedigree sorting &bull; 0.10 performance correlation.
                      </p>
                    </div>

                    <div className="rounded-lg border border-[#DFB17B]/30 bg-[#DFB17B]/[0.03] p-5 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#DFB17B]">
                        Demonstrated Proof of Work
                      </div>
                      <div className="font-serif text-lg text-white font-medium">Tangible Execution</div>
                      <p className="text-xs text-white/60 leading-relaxed font-sans">
                        Ambiguous problem states &bull; 48-hour prototype delivery &bull; Unforgeable git commit history &bull; 0.54 performance correlation.
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 text-[11px] font-mono text-white/40 pt-4 border-t border-white/5">
                    SOURCE: IBA FOUNDATION RESEARCH GROUP &bull; LABOR ECONOMICS MONOGRAPH 2026
                  </div>
                </div>

                <figcaption className="text-xs text-white/55 font-mono leading-relaxed">
                  {post.heroImage.caption}
                </figcaption>
              </figure>

              {/* Essay Sections */}
              {post.sections.map((sec, secIdx) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#DFB17B]">
                    <span>SECTION 0{secIdx + 1}</span>
                    <span className="w-8 h-px bg-[#DFB17B]/40" />
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-snug">
                    {sec.heading}
                  </h2>

                  {/* Self-Contained Citable Answer Block (GEO-Optimized) */}
                  <div className="rounded-xl border-l-2 border-[#DFB17B] bg-[#161512] px-6 py-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#DFB17B]">
                      <span>Core Direct Answer</span>
                      <CitationCopyButton text={sec.directAnswer} />
                    </div>
                    <p className="font-sans text-sm sm:text-base font-medium text-white/90 leading-relaxed italic">
                      &ldquo;{sec.directAnswer}&rdquo;
                    </p>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Section Callout if present */}
                  {sec.callout && (
                    <div className="rounded-xl border border-white/10 bg-[#141310] p-6 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#DFB17B]">
                        {sec.callout.title}
                      </div>
                      <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Comparison Table if present */}
                  {sec.table && (
                    <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#141310]">
                      <div className="px-6 py-4 border-b border-white/10 bg-[#161512]">
                        <div className="text-xs font-mono text-[#DFB17B]">
                          {sec.table.caption}
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm font-sans">
                          <thead>
                            <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-mono text-white/60">
                              {sec.table.headers.map((h, i) => (
                                <th key={i} className="px-5 py-3 font-medium">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {sec.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/[0.01] transition-colors">
                                <td className="px-5 py-3.5 font-medium text-white/90 font-mono text-xs">
                                  {row[0]}
                                </td>
                                <td className="px-5 py-3.5 text-white/70 text-xs sm:text-sm">
                                  {row[1]}
                                </td>
                                <td className="px-5 py-3.5 text-white/70 text-xs sm:text-sm">
                                  {row[2]}
                                </td>
                                <td className="px-5 py-3.5 text-[#DFB17B] font-medium text-xs sm:text-sm">
                                  {row[3]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </section>
              ))}

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-28 space-y-6 pt-8 border-t border-white/10">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#DFB17B]">
                    Community Inquiries &bull; Researched Synthesis
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                    Frequently Asked Questions
                  </h2>
                </div>

                <FAQAccordion faqs={post.faqs} />
              </section>

              {/* References & Academic Bibliography */}
              <section id="references" className="scroll-mt-28 space-y-6 pt-8 border-t border-white/10">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#DFB17B]">
                    Evidence Ledger &bull; Academic Citations
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                    References &amp; Empirical Sources
                  </h2>
                </div>

                <div className="space-y-4">
                  {post.references.map((ref, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-[#161512] p-5 space-y-2 transition-colors hover:border-white/20"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/60">
                        <span className="text-[#DFB17B] font-semibold">{ref.citation} ({ref.year})</span>
                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#DFB17B] hover:underline"
                          >
                            <span>Primary Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="text-xs font-sans text-white/80 italic">
                        {ref.source}
                      </div>
                      <p className="text-xs text-white/60 font-sans leading-relaxed pt-1">
                        <strong className="text-white/80 font-mono">Finding:</strong> {ref.keyFinding}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Next Essay Teaser */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#161512] to-[#0F0E0C] p-8 sm:p-10 space-y-4 mt-16">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#DFB17B]">
                  Next in Monograph Series &bull; Essay 02 / 12
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Ideas Are Cheap. Execution Is a Discipline.
                </h3>
                <p className="text-sm text-white/70 font-sans leading-relaxed max-w-2xl">
                  Exploring the canyon between ideation and working systems: mechanical constraints, architectural trade-offs, and why finishing matters more than inspiration.
                </p>
                <div className="pt-2">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFB17B] hover:underline"
                  >
                    <span>View 12-Part Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Sticky Table of Contents */}
              <div className="sticky top-28 space-y-8">
                <TableOfContents sections={post.sections} />

                {/* Author Card */}
                <div className="rounded-xl border border-white/10 bg-[#161512] p-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFB17B]">
                    Author Credentials
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-white/60 font-mono">
                    {post.author.role}
                  </p>
                  <p className="text-xs text-white/75 font-sans leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>

                {/* Program Cross-Links */}
                <div className="rounded-xl border border-white/10 bg-[#141310] p-6 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFB17B]">
                    Put Potential Into Practice
                  </div>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    Ready to move past credentials and build real technology? Explore active institutional opportunities:
                  </p>
                  <ul className="space-y-2 text-xs font-mono">
                    <li>
                      <Link
                        href="/fellowship"
                        className="text-white/80 hover:text-[#DFB17B] flex items-center justify-between"
                      >
                        <span>&bull; $25k Builder Fellowship</span>
                        <ArrowRight className="w-3 h-3 text-[#DFB17B]" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/challenges"
                        className="text-white/80 hover:text-[#DFB17B] flex items-center justify-between"
                      >
                        <span>&bull; $150k Open Challenges</span>
                        <ArrowRight className="w-3 h-3 text-[#DFB17B]" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/showcase"
                        className="text-white/80 hover:text-[#DFB17B] flex items-center justify-between"
                      >
                        <span>&bull; Fellow Project Showcase</span>
                        <ArrowRight className="w-3 h-3 text-[#DFB17B]" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
