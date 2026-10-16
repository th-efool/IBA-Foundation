import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, ArrowRight, Clock, Award, Compass, Lightbulb, Users, Cpu, ShieldCheck } from "lucide-react";
import { getAllBlogPosts } from "./blog-data";
import { InstitutionalNavbar } from "@/src/app/components/InstitutionalNavbar";
import { InstitutionalFooter } from "@/src/app/components/InstitutionalFooter";

export const metadata: Metadata = {
  title: "Essays & Research | IBA Foundation",
  description:
    "Rigorous institutional essays on talent discovery, empirical meritocracy, builder philosophy, applied AI, and multidisciplinary innovation.",
  alternates: {
    canonical: "https://ibafoundation.org/blog",
  },
  openGraph: {
    type: "website",
    url: "https://ibafoundation.org/blog",
    title: "Essays & Research | IBA Foundation",
    description:
      "Rigorous institutional essays on talent discovery, empirical meritocracy, builder philosophy, applied AI, and multidisciplinary innovation.",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1280,
        height: 720,
        alt: "IBA Foundation Essays & Research",
      },
    ],
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  // Full 12-part syllabus definition
  const syllabus = [
    { num: "01", title: "Potential Is Common. Demonstrated Ability Is Rare.", category: "Institutional essay", published: true, slug: "potential-is-common-demonstrated-ability-is-rare", desc: "Why talent remains undiscovered, why credentials are incomplete signals, and how practical challenges reveal ability." },
    { num: "02", title: "Ideas Are Cheap. Execution Is a Discipline.", category: "Builder's Journal", published: true, slug: "ideas-are-cheap-execution-is-a-discipline", desc: "Explore the gap between ideation and implementation, including constraints, iteration, and technical trade-offs." },

    { num: "03", title: "The Art of Asking Better Questions", category: "Critical thinking", published: false, desc: "How problem framing changes the quality of solutions, turning vague objectives into testable questions." },
    { num: "04", title: "AI Is Changing What It Means to Be a Builder", category: "Technology", published: false, desc: "How AI-assisted development alters prototyping velocity, verification requirements, and engineering judgment." },
    { num: "05", title: "How to Solve Problems Nobody Has Defined for You", category: "Competition strategy", published: false, desc: "A framework for handling ambiguous briefs, identifying constraints, testing assumptions, and scoping MVPs." },
    { num: "06", title: "The Prototype Is Not the Product", category: "Engineering", published: false, desc: "The gap between a compelling demo and a reliable production system, including testing, maintainability, and security." },
    { num: "07", title: "Constraints Are a Design Tool", category: "Innovation", published: false, desc: "How tight bounds on time, compute, and budget sharpen architectural decisions when handled deliberately." },
    { num: "08", title: "What Should a Merit-Based Innovation Competition Reward?", category: "Talent development", published: false, desc: "Originality, reasoning, implementation, and avoiding the trap of rewarding superficial presentations." },
    { num: "09", title: "Learning by Building: Why Feedback Matters More Than Perfect Plans", category: "Learning", published: false, desc: "The cycle of hypothesis, rapid prototype, adversarial testing, and revision over passive studying." },
    { num: "10", title: "FinTech Is More Than Putting Banking on a Screen", category: "Applied research", published: false, desc: "Deep systems examination of trust, fraud detection, decentralized identity, and low-latency settlement." },
    { num: "11", title: "Why the Hardest Problems Need People From Different Disciplines", category: "Open innovation", published: false, desc: "Why breakthrough engineering requires fusing hardware, economics, biology, and domain mechanics." },
    { num: "12", title: "From Competition to Opportunity: What Happens After the Winners Are Announced?", category: "Vision", published: false, desc: "How competition prototypes transition into venture-scale companies, open-source standards, and fellowships." },
  ];

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#F6F1E5] antialiased selection:bg-[#DFB17B]/20 selection:text-[#DFB17B]">
      <InstitutionalNavbar />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Subtle background ambient gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#DFB17B]/[0.03] blur-[140px] rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161512] px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#DFB17B]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Institutional Monograph Series</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
              Essays on Talent, Craft, &amp; Consequential Engineering
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-sans max-w-2xl">
              A 12-part intellectual curriculum investigating why traditional credentials fail, how high-agency builders execute under pressure, and what an authentic meritocracy requires.
            </p>
          </div>

          {/* Featured Article Card */}
          {posts.length > 0 && (
            <div className="mt-16 sm:mt-20">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#DFB17B] mb-4">
                Latest Release &bull; Essay 01 of 12
              </div>

              <Link
                href={`/blog/${posts[0].slug}`}
                className="group relative block rounded-2xl border border-white/10 bg-[#161512] p-8 sm:p-12 transition-all duration-300 hover:border-[#DFB17B]/40 hover:bg-[#1A1815] shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:text-[#DFB17B]/20 transition-colors">
                  <Compass className="w-24 h-24 stroke-[1]" />
                </div>

                <div className="relative z-10 max-w-3xl space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/50">
                    <span className="text-[#DFB17B] font-semibold">{posts[0].seriesNumber}</span>
                    <span>&bull;</span>
                    <span>{posts[0].category}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {posts[0].readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white group-hover:text-[#DFB17B] transition-colors leading-snug">
                    {posts[0].title}
                  </h2>

                  <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
                    {posts[0].subtitle}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-sm font-medium text-[#DFB17B] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Complete 12-Part Series Syllabus */}
          <div className="mt-24 sm:mt-32">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-10">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  The 12-Part Curriculum
                </h2>
                <p className="text-sm text-white/60 mt-1 font-sans">
                  Systematic exploration of talent economics, engineering rigor, and builder agency.
                </p>
              </div>
              <div className="text-xs font-mono text-white/50">
                2 PUBLISHED &bull; 10 IN PRODUCTION
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {syllabus.map((item) => (
                <div
                  key={item.num}
                  className={`relative rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                    item.published
                      ? "border-white/15 bg-[#161512] hover:border-[#DFB17B]/40"
                      : "border-white/5 bg-[#11100E] opacity-75"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={item.published ? "text-[#DFB17B] font-semibold" : "text-white/40"}>
                        {item.num} / 12
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-white/40">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-medium text-white leading-snug">
                      {item.published ? (
                        <Link href={`/blog/${item.slug}`} className="hover:text-[#DFB17B] transition-colors">
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </h3>

                    <p className="text-xs text-white/65 leading-relaxed font-sans line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    {item.published ? (
                      <Link
                        href={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-[#DFB17B] hover:underline"
                      >
                        <span>Read Essay</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-white/40 italic">Coming Next in Series</span>
                    )}

                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      item.published ? "bg-[#DFB17B]/10 text-[#DFB17B]" : "bg-white/5 text-white/30"
                    }`}>
                      {item.published ? "AVAILABLE" : "IN REVIEW"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
