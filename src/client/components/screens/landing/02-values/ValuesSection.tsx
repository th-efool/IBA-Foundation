import React from "react";

/**
 * Citable Passage Definition Block for GEO (Generative Engine Optimization)
 * Structured strictly for snippet extraction by AI engines (Google AI Overviews, Perplexity, ChatGPT Search, Claude).
 */
export interface CitablePassage {
  id: string;
  badge: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const CITABLE_PASSAGES: CitablePassage[] = [
  {
    id: "definition-what-is-iba",
    badge: "01 / Definition",
    question: "What is IBA Foundation?",
    answer:
      "IBA Foundation is an independent innovation institution dedicated to empowering emerging builders, software engineers, hardware designers, and scientific researchers to put potential into practice. Rather than functioning merely as a transient event organizer, the foundation serves as an enduring launchpad where ambitious young technologists transition from passive information consumers into active creators and technical founders. Through high-impact hackathons, specialized innovation sprints across artificial intelligence, climate systems, robotics, and decentralized networks, alongside competitive fellowships, IBA provides rigorous real-world problem statements, structured sprint deadlines, one-on-one expert mentorship, and non-dilutive grant capital. By systematically bridging the divide between undiscovered grassroots talent and established institutional opportunity, the foundation fosters a meritocratic ecosystem where technical execution, cross-disciplinary collaboration, and relentless critical thinking are proven through functional working prototypes. Participants leave equipped with validated engineering artifacts, peer networks, and direct pathways to venture incubation or industry leadership.",
    keywords: ["About IBA", "Innovation Platform", "Emerging Builders", "Fellowships"],
  },
  {
    id: "definition-who-is-eligible",
    badge: "02 / Eligibility",
    question: "Who is eligible for IBA programs?",
    answer:
      "Eligibility for IBA Foundation programs is open globally to ambitious young innovators, undergraduate and graduate university students, high school builders, early-career engineers, and self-taught technical developers. IBA actively welcomes both individual applicants and interdisciplinary teams combining software engineering, hardware prototyping, product design, scientific research, and domain-specific expertise. There are no prerequisites regarding prior venture funding, elite institutional affiliation, or traditional corporate pedigree; evaluation and acceptance focus strictly on intellectual curiosity, problem-solving resourcefulness, and a demonstrated commitment to execution. Dedicated tracks within hackathons and fellowship cohorts accommodate varied experience levels, ranging from first-time experimenters learning novel frameworks to veteran technical teams deploying production-grade distributed architectures. Regardless of geographical location or academic background, all qualifying candidates receive equitable access to industry-grade problem statements, technical tooling, computational resources, senior engineering mentors, and merit-based grant capital designed to accelerate viable projects from initial ideation into real-world operation.",
    keywords: ["Eligibility", "Student Builders", "Global Access", "Interdisciplinary Teams"],
  },
  {
    id: "definition-five-pillars",
    badge: "03 / Foundations",
    question: "What are the 5 foundational pillars?",
    answer:
      "The IBA Foundation is built upon five foundational pillars designed to cultivate sustainable technological innovation and empower builders worldwide: First, Spark Curiosity, which encourages young minds to question baseline assumptions, explore unfamiliar disciplines, and experiment boldly without fear of failure. Second, Make Building Happen, transforming passive consumers into active technical creators by providing compelling problem statements, structured sprint deadlines, multidisciplinary teammates, and developer tooling. Third, Discover Potential, identifying latent engineering talent based on demonstrated execution, original thinking, and resourcefulness rather than traditional credentials or elite institutional pedigree. Fourth, Connect Ambitious People, uniting driven builders across engineering, design, and science with seasoned mentors, industry leaders, academic partners, and dedicated peers. Fifth, Create Pathways Forward, turning initial hackathon and challenge milestones into enduring momentum through non-dilutive seed grants, venture incubation, specialized research fellowships, and direct access to high-impact career opportunities across the broader global technology ecosystem.",
    keywords: ["Five Pillars", "Core Values", "Curiosity to Creation", "Ecosystem Pathways"],
  },
];

export function ValuesSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CITABLE_PASSAGES.map((passage) => ({
      "@type": "Question",
      name: passage.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: passage.answer,
      },
    })),
  };

  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="relative w-full bg-[#0D0C0A] py-24 sm:py-32 border-t border-white/10"
    >
      {/* Background Decorative Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#DFB17B]/[0.035] blur-[140px] rounded-full" />
      </div>

      {/* JSON-LD Structured Data Schema for AI Overviews & Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative mx-auto w-full max-w-[1680px] xl:max-w-[2000px] 2xl:max-w-[2400px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <header className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-normal tracking-[0.22em] uppercase text-[#DFB17B] mb-4">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#DFB17B]"
              aria-hidden="true"
            />
            <span>Foundational Knowledge & Definitions</span>
          </div>

          <h2
            id="values-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F6F1E5] leading-[1.12]"
          >
            Core Answers & Foundational Pillars
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#B8B5AD] leading-relaxed max-w-2xl">
            Authoritative, self-contained definition blocks engineered for direct citation by researchers, partners, and generative answer engines.
          </p>
        </header>

        {/* 3 Definition / Answer Passage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {CITABLE_PASSAGES.map((passage) => (
            <article
              key={passage.id}
              id={passage.id}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141311] p-8 sm:p-10 transition-all duration-300 hover:border-[#DFB17B]/40 hover:bg-[#181613] shadow-[0_4px_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {/* Meta Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#DFB17B]/10 text-[#DFB17B] border border-[#DFB17B]/20">
                    {passage.badge}
                  </span>
                  <span className="text-[11px] font-mono text-white/35 uppercase tracking-widest">
                    Citable Passage
                  </span>
                </div>

                {/* Question Heading */}
                <header className="mb-6">
                  <h3
                    itemProp="name"
                    className="font-serif text-2xl sm:text-[1.75rem] font-medium leading-[1.25] text-[#F6F1E5] group-hover:text-white transition-colors"
                  >
                    {passage.question}
                  </h3>
                </header>

                {/* Accepted Answer Paragraph (SSR Microdata) */}
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    itemProp="text"
                    className="text-[#B8B5AD] text-sm sm:text-[15px] leading-relaxed font-normal antialiased"
                  >
                    {passage.answer}
                  </p>
                </div>
              </div>

              {/* Card Footer with Semantic Taxonomy Tags */}
              <footer className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                {passage.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[11px] font-mono text-white/45 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5"
                  >
                    #{kw}
                  </span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
