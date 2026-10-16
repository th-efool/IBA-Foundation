import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalNavbar } from "../components/InstitutionalNavbar";
import { InstitutionalFooter } from "../components/InstitutionalFooter";

export const metadata: Metadata = {
  title: "Values & Institutional Ethos | Potential, Put into Practice | IBA Foundation",
  description:
    "Explore the five foundational pillars, institutional positioning, and design culture of IBA Foundation. We build an enduring institution for the next generation of builders.",
  keywords: [
    "IBA Foundation values",
    "potential put into practice",
    "institutional builder ethos",
    "5 pillars of IBA",
    "tech institution not event company",
    "student builder platform",
    "first-principles engineering",
  ],
  alternates: {
    canonical: "https://ibafoundation.org/values",
  },
  openGraph: {
    title: "Values & Institutional Ethos | IBA Foundation",
    description:
      "Potential is everywhere. Opportunity isn't. Explore the five foundational pillars and institutional positioning of the IBA Foundation.",
    url: "https://ibafoundation.org/values",
    siteName: "IBA Foundation",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "IBA Foundation Values & Institutional Ethos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Values & Institutional Ethos | IBA Foundation",
    description:
      "An institution, not an event company. Potential, put into practice. Read our foundational creed.",
    images: ["/images/hero-poster.webp"],
  },
};

export default function ValuesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "IBA Foundation Values & Institutional Ethos",
        description:
          "IBA Foundation is an institutional platform dedicated to 'Potential, put into practice.' Because potential is everywhere but opportunity isn't, IBA provides ambitious student builders, researchers, and creators with rigorous technical challenges, zero-equity grants, elite mentorship, and clear pathways to build consequential technologies.",
        url: "https://ibafoundation.org/values",
        mainEntity: {
          "@type": "Organization",
          name: "IBA Foundation",
          slogan: "Potential, put into practice.",
          url: "https://ibafoundation.org",
          description:
            "IBA Foundation exists to foster innovation among young people by creating opportunities to think critically, experiment boldly, and turn ideas into tangible outcomes.",
          knowsAbout: [
            "Technical talent discovery",
            "Non-dilutive research fellowship grants",
            "Multidisciplinary innovation challenges",
            "Hardware and systems prototyping",
          ],
        },
      },
    ],
  };

  const pillars = [
    {
      number: "01",
      title: "Spark curiosity",
      quote: "Question assumptions, explore unfamiliar disciplines, and experiment boldly.",
      description:
        "Create opportunities for young people to question assumptions, explore unfamiliar disciplines, and experiment with ideas they might never have pursued independently. True innovation begins at the intersection of disciplines where consensus has not yet settled.",
    },
    {
      number: "02",
      title: "Make building happen",
      quote: "Give people a compelling reason to stop merely consuming information and start creating things.",
      description:
        "Provide a concrete challenge, an unforgiving deadline, teammates, tools, mentorship, and a tangible goal. The difference between an idea and an artifact is disciplined execution under constraints.",
    },
    {
      number: "03",
      title: "Discover potential",
      quote: "Give emerging talent a way to demonstrate what it can do, regardless of how well it is already known.",
      description:
        "Identify people with technical ability, original thinking, initiative, resourcefulness, and the capacity to execute. We bypass traditional pedigree filters to reward verifiable proof-of-work and genuine capability.",
    },
    {
      number: "04",
      title: "Connect ambitious people",
      quote: "Bring together complementary skills, shared obsessions, and high agency.",
      description:
        "Help builders find collaborators, research mentors, peers, academic chairs, and institutional sponsors. Ambitious talent thrives when placed inside an environment of high intellectual density and mutual standards.",
    },
    {
      number: "05",
      title: "Create pathways forward",
      quote: "Turn participation into something that continues far beyond an event.",
      description:
        "Provide lasting recognition, meaningful rewards, stronger portfolios, research pathways, and the seeds of enduring startups. An IBA milestone should remain an enduring, credible mark on a builder's trajectory for years to come.",
    },
  ];

  const narrativeBeats = [
    {
      step: "01 — The belief",
      headline: "Potential is everywhere. Opportunity isn't.",
      body: "Talent is evenly distributed across geography and social backgrounds, but access to resources, labs, mentors, and high-stakes problems is not. Ambitious minds languish simply because they lack the environment, collaborators, or compelling reason to start.",
    },
    {
      step: "02 — The method",
      headline: "Give people a reason to build.",
      body: "Passive education teaches people to memorize answers; real engineering begins when there is no textbook answer. We introduce rigorous challenges, multidisciplinary teams, real-world constraints, and strict deadlines that demand genuine invention.",
    },
    {
      step: "03 — The opportunity",
      headline: "Make good work count.",
      body: "We replace vanity participation with meaningful non-dilutive capital, peer critique from domain masters, project showcases, and connections to people who have the institutional power to advance a builder's career.",
    },
    {
      step: "04 — The long-term vision",
      headline: "What you build here can take you further.",
      body: "IBA is not a temporary weekend diversion. It is an enduring platform connecting builders, mentors, research institutions, and industry pioneers into a permanent fabric of technological progress.",
    },
  ];

  const designPrinciples = [
    {
      name: "Apple-like Restraint",
      summary:
        "Extremely deliberate typography, whitespace, composition, and transitions. Every element earns its place.",
      quote:
        "The website feels expensive because it is controlled, not because it contains many effects.",
    },
    {
      name: "Research-Institution Credibility",
      summary:
        "Clear articulation of purpose, thoughtful editorial content, rigorous presentation of outcomes, and visualizations that communicate ideas rather than decorate the page.",
      quote:
        "Intellectual seriousness, verifiable data, and reproducible benchmarks over hollow marketing jargon.",
    },
    {
      name: "Cultural-Institution Permanence",
      summary:
        "A strong identity system, distinctive art direction, a sense of longevity, and a presentation that would remain credible ten years from now.",
      quote:
        "Built to outlast transitory consumer trends, establishing an enduring civic home for technological capability.",
    },
  ];

  const horizonAreas = [
    {
      title: "Multidisciplinary Hackathons & Ideathons",
      desc: "Cross-pollinating computer science, electrical engineering, biology, and materials science around grand challenges.",
    },
    {
      title: "Innovation Challenges with Industry",
      desc: "Partnering with research labs and institutions to pose consequential, unsolved engineering bottlenecks.",
    },
    {
      title: "Tinkering Programs & Maker Sprints",
      desc: "Hands-on hardware labs, prototyping intensives, and physical fabrication sprints.",
    },
    {
      title: "Competitive Fellowships & Showcases",
      desc: "Equity-free residencies, living grants, compute access, and symposium presentations.",
    },
    {
      title: "Mentorship & Academic Pathways",
      desc: "Direct bridges to academic research chairs, university labs, incubation, and deep-tech venture sponsors.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#F6F1E5]">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <InstitutionalNavbar currentPage="values" />

      <main id="main-content" className="relative">
        {/* ============================================================
            HERO SECTION: First 50 words answer search intent directly
            ============================================================ */}
        <section className="relative overflow-hidden border-b border-white/[0.08] pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#DFB17B]/10 blur-[140px]"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFB17B]/30 bg-[#161512] px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-[#DFB17B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFB17B]" />
              INSTITUTIONAL CREED &bull; FOUNDED ON PURPOSE
            </div>

            {/* Headline */}
            <h1 className="mt-8 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08]">
              Potential, Put into Practice.
            </h1>

            {/* Vision Quote Subhead */}
            <p className="mt-4 font-serif text-xl sm:text-2xl text-[#DFB17B] italic">
              &ldquo;We believe potential should have the opportunity to prove itself.&rdquo;
            </p>

            {/* ============================================================
                CRITICAL REQUIREMENT: SEARCH INTENT ANSWER (EXACTLY 44 WORDS)
                Must answer search intent within the first 50 words of body.
                ============================================================ */}
            <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-[#F6F1E5] leading-relaxed">
              IBA Foundation is an institutional platform dedicated to &ldquo;Potential, put into practice.&rdquo; Because potential is everywhere but opportunity isn&apos;t, IBA provides ambitious student builders, researchers, and creators with rigorous technical challenges, zero-equity grants, elite mentorship, and clear pathways to build consequential technologies.
            </p>

            {/* Prominent CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/fellowship"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#DFB17B] px-8 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:bg-[#CFA066] hover:shadow-[0_0_30px_rgba(223,177,123,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB17B]"
              >
                Explore Programs
              </Link>
              <Link
                href="/challenges"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.04]"
              >
                View Open Challenges
              </Link>
              <a
                href="mailto:partners@ibafoundation.org"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#DFB17B]/40 bg-[#DFB17B]/[0.05] px-8 py-3.5 text-base font-medium text-[#DFB17B] transition-all duration-200 hover:bg-[#DFB17B]/10 hover:border-[#DFB17B]"
              >
                Partner With Us
              </a>
            </div>

            {/* Unifying Idea Callout */}
            <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#161512]/60 p-6 sm:p-8 backdrop-blur-sm text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                The Unifying Idea
              </span>
              <p className="mt-2 font-serif text-xl sm:text-2xl text-white">
                IBA creates the conditions in which potential becomes visible.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            THE FIVE CORE PILLARS (Direct from Values.md Section 1)
            ============================================================ */}
        <section id="pillars" className="py-24 sm:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Foundational Architecture
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                The Five Pillars of IBA Foundation
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                What the IBA Foundation actually stands for. Every initiative, competition, residency, and grant is designed to operationalize these five commitments.
              </p>
            </div>

            <div className="mt-16 space-y-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#161512] p-8 sm:p-10 transition-all duration-300 hover:border-[#DFB17B]/40 hover:bg-[#191714]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-1">
                      <span className="font-mono text-3xl font-light text-[#DFB17B]/60 group-hover:text-[#DFB17B] transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#DFB17B] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 font-serif text-sm text-[#DFB17B]/80 italic">
                        &ldquo;{pillar.quote}&rdquo;
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <p className="text-base text-white/75 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            INSTITUTIONAL POSITIONING: An Institution, Not an Event Company
            ============================================================ */}
        <section id="positioning" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0908]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Institutional Positioning
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                An Institution, Not an Event Company
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                The difference between an ephemeral weekend organizer and a long-term foundation lies in how we define our mission. Hackathons are merely one mechanism; building the future is the purpose.
              </p>
            </div>

            {/* Contrast Comparison Grid */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Weaker Positioning Card */}
              <div className="rounded-2xl border border-red-500/20 bg-[#161512] p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-red-400">
                    Weaker Positioning (Activity-Focused)
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium text-white/90">
                  &ldquo;We organize hackathons for students.&rdquo;
                </h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed font-sans">
                  Describes an isolated activity. Makes the organization interchangeable with hundreds of transient event organizers. Work built over the weekend is abandoned by Monday, leaving participants with pizza boxes rather than enduring career trajectories.
                </p>
              </div>

              {/* Stronger Positioning Card */}
              <div className="rounded-2xl border border-[#DFB17B]/40 bg-[#161512] p-8 relative overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#DFB17B]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#DFB17B]">
                    Stronger Positioning (Purpose-Focused)
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium text-white">
                  &ldquo;We create opportunities for the next generation of builders to discover what they can do.&rdquo;
                </h3>
                <p className="mt-4 text-sm text-white/80 leading-relaxed font-sans">
                  Describes an enduring purpose. Hackathons become one of several ways IBA fulfills it. The organization can grow and expand without ever outgrowing its institutional identity.
                </p>
              </div>
            </div>

            {/* Expansion Horizons Strip */}
            <div className="mt-16">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/60 mb-6">
                Our Expanding Horizon of Institutional Programs:
              </h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {horizonAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/[0.08] bg-[#161512] p-5 hover:border-[#DFB17B]/30 transition-colors"
                  >
                    <span className="font-mono text-xs text-[#DFB17B] block">
                      0{idx + 1}
                    </span>
                    <h5 className="mt-2 font-serif text-base font-medium text-white">
                      {area.title}
                    </h5>
                    <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            THE 4 NARRATIVE BEATS (Values.md Section 6)
            ============================================================ */}
        <section id="narrative" className="py-24 sm:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                The Narrative Arc
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                How Potential Becomes Reality
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                The four movements governing how IBA Foundation welcomes, tests, elevates, and accelerates emerging technical minds.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {narrativeBeats.map((beat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#161512] p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-medium text-[#DFB17B]">
                      {beat.step}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-medium text-white">
                      {beat.headline}
                    </h3>
                    <p className="mt-3 text-sm text-white/70 font-sans leading-relaxed">
                      {beat.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            DESIGN PRINCIPLES & INSTITUTIONAL CULTURE (Values.md Section 3)
            ============================================================ */}
        <section id="design-culture" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0908]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Aesthetic & Cultural Standards
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                The Brand Identity: Quiet Precision
              </h2>
              <p className="mt-4 text-base text-white/75 font-sans leading-relaxed">
                Not a college club. Not a startup landing page template. Not an esports tournament. And not a generic nonprofit. Our visual language communicates institutional credibility, intellectual ambition, and the seriousness of making things.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {designPrinciples.map((dp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#161512] p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#DFB17B] block uppercase tracking-wider">
                      Principle 0{idx + 1}
                    </span>
                    <h3 className="mt-3 font-serif text-xl font-medium text-white">
                      {dp.name}
                    </h3>
                    <p className="mt-4 text-sm text-white/75 font-sans leading-relaxed">
                      {dp.summary}
                    </p>
                  </div>
                  <blockquote className="mt-8 border-l-2 border-[#DFB17B]/40 pl-4 font-serif text-xs text-[#E8D8C0] italic">
                    &ldquo;{dp.quote}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Design Restraint Manifesto Box */}
            <div className="mt-12 rounded-2xl border border-[#DFB17B]/20 bg-[#DFB17B]/[0.02] p-8 text-sm text-white/80 font-sans leading-relaxed">
              <strong className="text-white font-medium block font-mono text-xs uppercase tracking-wider text-[#DFB17B] mb-2">
                Our Aesthetic Manifesto:
              </strong>
              Predominantly warm-white and deep-ink surfaces with restrained amber-gold accents. Precise grid systems, generous negative space, deliberate typography, and zero gimmicks. We avoid defaulting to neon gradients, floating glass cards, or excessive glowing borders that dilute institutional credibility.
            </div>
          </div>
        </section>

        {/* ============================================================
            STRATEGIC EVALUATION PRINCIPLE (Values.md Section 7)
            ============================================================ */}
        <section id="rubric-ethos" className="py-24 sm:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
              The Strategic Evaluation Principle
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              Why We Reward Substance Over Pitching
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-white/75 font-sans leading-relaxed">
              The competitive element is not at odds with our mission; it is one of its strongest mechanisms. However, IBA must reward more than polished presentations. If an organization only judges pitch charisma, it risks selecting for salesmanship rather than identifying genuinely promising engineering talent.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 text-left">
              <div className="rounded-xl border border-white/[0.08] bg-[#161512] p-5">
                <span className="font-mono text-xs text-[#DFB17B] block">Criterion 1</span>
                <span className="font-serif text-base font-medium text-white mt-1 block">
                  Problem Depth
                </span>
                <span className="text-xs text-white/60 mt-1 block">
                  Consequential, verified failure modes
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#161512] p-5">
                <span className="font-mono text-xs text-[#DFB17B] block">Criterion 2</span>
                <span className="font-serif text-base font-medium text-white mt-1 block">
                  Technical Rigor
                </span>
                <span className="text-xs text-white/60 mt-1 block">
                  Working code, physical prototypes
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#161512] p-5">
                <span className="font-mono text-xs text-[#DFB17B] block">Criterion 3</span>
                <span className="font-serif text-base font-medium text-white mt-1 block">
                  Originality
                </span>
                <span className="text-xs text-white/60 mt-1 block">
                  First-principles critical inquiry
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#161512] p-5">
                <span className="font-mono text-xs text-[#DFB17B] block">Criterion 4</span>
                <span className="font-serif text-base font-medium text-white mt-1 block">
                  Agency & Grit
                </span>
                <span className="text-xs text-white/60 mt-1 block">
                  Relentless shipping under constraints
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            OFFICIAL MISSION STATEMENT (Values.md Section 5)
            ============================================================ */}
        <section id="mission" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0908]">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
              The Official Mission
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              The IBA Foundation Mission Statement
            </h2>

            <div className="mt-12 rounded-3xl border border-white/[0.08] bg-[#161512] p-8 sm:p-12 text-left shadow-2xl">
              <p className="font-serif text-2xl sm:text-3xl font-light text-white leading-snug">
                IBA Foundation exists to foster innovation among young people by creating opportunities to think critically, experiment boldly, and turn ideas into tangible outcomes.
              </p>

              <p className="mt-6 text-base sm:text-lg text-white/80 font-sans leading-relaxed">
                Through challenges, competitions, collaborative building experiences, and meaningful connections, we help young people discover their capabilities, demonstrate their talent, and find pathways to grow.
              </p>

              <p className="mt-6 text-base sm:text-lg text-white/80 font-sans leading-relaxed">
                We believe potential should have the opportunity to prove itself. By bringing people together around problems worth solving, we aim to make innovation more accessible, talent more visible, and meaningful work the beginning of something greater.
              </p>

              <div className="mt-8 border-t border-white/[0.08] pt-6 flex items-center justify-between">
                <div>
                  <span className="font-serif text-base font-medium text-white block">
                    IBA Foundation
                  </span>
                  <span className="font-mono text-xs text-[#DFB17B]">
                    Institutional Charter &bull; Est. 2026
                  </span>
                </div>
                <div className="font-serif text-lg italic text-[#DFB17B]">
                  &ldquo;Potential, put into practice.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CALL TO ACTION & DUAL-PATHWAY ENGAGEMENT
            ============================================================ */}
        <section id="engage" className="py-24 sm:py-32 relative overflow-hidden bg-[#0D0C0A]">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#DFB17B]/10 blur-[120px]"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#DFB17B]">
                Take Part in the Movement
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white">
                How Will You Put Your Potential into Practice?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/75 font-sans">
                Whether you are a builder with code to test or an institution seeking to support ambitious talent, IBA offers an enduring foundation.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Pathway 1: For Builders */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#161512] p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-medium text-[#DFB17B]">
                    FOR BUILDERS & RESEARCHERS
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-white">
                    Apply for Fellowship Cohort &apos;26
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed font-sans">
                    Receive up to $25,000 in non-dilutive living grants, $10,000 compute stipends, and dedicated faculty mentorship. Zero equity taken.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/fellowship"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#DFB17B] px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-[#CFA066]"
                  >
                    Explore Fellowship & Apply &rarr;
                  </Link>
                </div>
              </div>

              {/* Pathway 2: For Institutions & Sponsors */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#161512] p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-medium text-[#DFB17B]">
                    FOR INSTITUTIONS & PARTNERS
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-white">
                    Sponsor Consequential Challenges
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed font-sans">
                    Partner with IBA to pose authentic technical bottlenecks to top builders, provide compute infrastructure, or host residency chapters.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="mailto:partners@ibafoundation.org?subject=IBA%20Foundation%20Partnership%20Inquiry"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/[0.04]"
                  >
                    Contact Institutional Partnerships &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <InstitutionalFooter />
    </div>
  );
}
