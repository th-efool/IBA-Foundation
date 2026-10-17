import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Terminal, Award, Sparkles } from "lucide-react";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D0C0A] text-white">
      {/* Top Banner: Core Belief */}
      <div className="border-b border-white/10 bg-[#161512]/60 px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DFB17B]/10 text-[#DFB17B] border border-[#DFB17B]/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="font-serif text-lg text-white font-medium">
                "Where potential becomes progress."
              </p>
              <p className="text-xs font-sans text-white/60">
                100% Builder-Owned IP Policy • Non-Dilutive Grant Capital • Meritocratic Evaluation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/challenges#register"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#DFB17B] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066]"
            >
              <span>Join Challenge Benchmark</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1 & 2: Institutional Brand */}
          <div className="lg:col-span-2">
            <CommonGroundLogo
              href="/"
              layout="horizontal"
              size="lg"
              theme="dark"
              className="transition-transform duration-200 hover:scale-[1.02]"
            />

            <p className="mt-4 max-w-sm text-sm font-sans leading-relaxed text-[#E8D8C0]/80">
              IBA Foundation exists to foster innovation among emerging builders by creating
              opportunities to think critically, experiment boldly, and turn ambitious ideas into
              tangible technological outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-white/60">
              <span className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1">
                <ShieldCheck className="h-3 w-3 text-[#DFB17B]" />
                Zero-Equity
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1">
                <Terminal className="h-3 w-3 text-[#DFB17B]" />
                Open Weights / Source
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1">
                <Award className="h-3 w-3 text-[#DFB17B]" />
                $150k+ Grants
              </span>
            </div>
          </div>

          {/* Col 3: Pathways */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
              Program Pathways
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/programs#sprints"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Rapid Sprints (48–72h)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#tinkering"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Tinkering Labs & Maker Bench
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#hackathons"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Multidisciplinary Hackathons
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#fellowships"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Builder Fellowships ($25k)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#matrix"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Builder Progression Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Challenge Tracks */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
              Challenge Tracks
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/challenges#ai-autonomous"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  AI & Autonomous Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges#climate-energy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Climate & Clean Energy
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges#hardware-robotics"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Hardware & Robotics
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges#decentralized"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Decentralized Systems & Security
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges#open-track"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Open Exploratory Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Institutional & Research */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
              Institution & Governance
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/values" className="text-white/70 hover:text-white transition-colors">
                  Values & Positioning Charter
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges#rubric"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Four-Pillar Evaluation Rubric
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges#sponsors"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Sponsor Consortia
                </Link>
              </li>
              <li>
                <Link
                  href="/llms.txt"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                >
                  <span>LLM Knowledge Base</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <span className="text-xs text-white/50">
                  IP Policy: 100% Builder-Owned
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <p>© {new Date().getFullYear()} IBA Foundation. Potential, put into practice.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#DFB17B]">Status: 2026 Open Innovation Benchmark Live</span>
            <span>Non-Dilutive • Research Credibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
