"use client";

import { useState } from "react";
import {
  Cpu,
  Zap,
  Bot,
  Shield,
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  FileCode,
  Terminal,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export interface TrackData {
  id: string;
  category: string;
  title: string;
  prizePool: string;
  sponsor: string;
  sponsorLogoText: string;
  icon: any;
  lead: string;
  problemStatement: string;
  technicalRequirements: string[];
  evaluationFocus: string;
  targetDeliverables: string[];
  deadline: string;
  status: "Open" | "In Review" | "Upcoming";
}

export const challengeTracks: TrackData[] = [
  {
    id: "ai-autonomous",
    category: "AI & Autonomous Systems",
    title: "Verifiable Reasoning & Agent Safety Architectures",
    prizePool: "$40,000",
    sponsor: "Autonomous Systems Initiative & Open Compute Alliance",
    sponsorLogoText: "ASI / OCA",
    icon: Cpu,
    lead: "Build verifiable runtime guardrails and execution-trace verifiers for autonomous multi-agent tool chains operating under adversarial failure modes.",
    problemStatement:
      "Contemporary LLM agents exhibit brittle reasoning when interacting with non-deterministic external tools and APIs. Submissions must develop a formal execution verifier that intercepts, validates, and cryptographically signs intermediate agent reasoning steps prior to state-mutating tool execution. The system must operate with under 50ms latency overhead and provide deterministic bounds on agent deviation.",
    technicalRequirements: [
      "Deterministic state-machine or runtime monitor for agent tool-calling",
      "Formal constraint verification under hallucinated or poisoned tool outputs",
      "Benchmarked on at least 1,000 adversarial multi-turn workflow trajectories",
      "Target latency overhead ≤ 50ms per tool interaction step",
    ],
    evaluationFocus:
      "Formal safety bounds, reproducible trajectory benchmarks, and zero false-acceptance rate on adversarial prompts.",
    targetDeliverables: [
      "Open-source runtime library (Rust, Python, or TypeScript)",
      "Reproducible automated test harness with Docker environment",
      "Technical whitepaper (2-4 pages) detailing safety proofs and empirical results",
    ],
    deadline: "July 15, 2026 • 23:59 UTC",
    status: "Open",
  },
  {
    id: "climate-energy",
    category: "Climate & Clean Energy",
    title: "Decentralized Grid Intelligence & Low-Cost Telemetry",
    prizePool: "$35,000",
    sponsor: "Energy Transition Labs",
    sponsorLogoText: "ETL",
    icon: Zap,
    lead: "Engineer low-cost, tamper-resistant edge telemetry nodes and localized control algorithms for real-time grid frequency stabilization and verifiable carbon accounting.",
    problemStatement:
      "As intermittent distributed energy resources (DERs) surge, localized grid micro-instabilities escalate. Traditional PMUs (Phasor Measurement Units) cost upwards of $10,000 per substation. Submissions must deliver a hardware/firmware prototype costing under $120 per node capable of sub-cycle frequency detection (10ms sampling) with cryptographically authenticated time-stamping for zero-trust carbon accounting.",
    technicalRequirements: [
      "Hardware BOM strictly under $120 at 100-unit scale",
      "Sub-cycle frequency telemetry (0.01 Hz accuracy, 10ms sampling rate)",
      "Tamper-resistant cryptographic signing of telemetry packets (Ed25519 or NIST P-256)",
      "Localized peer-to-peer load balancing heuristic requiring zero centralized cloud coordination",
    ],
    evaluationFocus:
      "Measurement accuracy verified against reference signals, BOM cost discipline, and firmware resilience under packet drops.",
    targetDeliverables: [
      "Open hardware schematic and KiCAD PCB layout files",
      "Embedded C / Rust firmware codebase with flashing instructions",
      "Synthetic grid testbench dataset and validation results report",
    ],
    deadline: "July 15, 2026 • 23:59 UTC",
    status: "Open",
  },
  {
    id: "hardware-robotics",
    category: "Hardware & Robotics",
    title: "Precision Actuation & Resilient Edge Telemetry",
    prizePool: "$30,000",
    sponsor: "Deep Tech Consortium",
    sponsorLogoText: "DTC",
    icon: Bot,
    lead: "Design and validate a high-torque, sub-$150 modular cycloidal or strain-wave rotary actuator with integrated closed-loop magnetic encoder feedback.",
    problemStatement:
      "High-precision robotics remains cost-prohibitive due to imported harmonic and cycloidal drives costing thousands of dollars. We challenge builders to design, fabricate, and test a 3D-printable or machineable cycloidal actuator delivering ≥ 35 Nm peak torque, with integrated field-oriented control (FOC) and zero-backlash tuning for field-deployable environmental monitoring robots.",
    technicalRequirements: [
      "Peak torque ≥ 35 Nm with gear reduction ratio between 30:1 and 80:1",
      "Angular backlash under 1.5 arcmin with closed-loop magnetic sensing",
      "Fabrication cost < $150 in off-the-shelf components and raw materials",
      "Continuous thermal stress testing data for 2 hours under 60% rated load",
    ],
    evaluationFocus:
      "Mechanical craftsmanship, thermal dissipation management, precision control smoothness, and bill-of-materials efficiency.",
    targetDeliverables: [
      "Complete 3D CAD models (STEP/STL) and manufacturing documentation",
      "Brushless motor FOC control loop firmware",
      "Bench test video showing load torque dynamometer measurements and encoder telemetry",
    ],
    deadline: "July 15, 2026 • 23:59 UTC",
    status: "Open",
  },
  {
    id: "decentralized",
    category: "Decentralized Systems & Security",
    title: "High-Throughput Cryptographic Primitives & State Verification",
    prizePool: "$25,000",
    sponsor: "Open Compute Alliance & Deep Tech Consortium",
    sponsorLogoText: "OCA / DTC",
    icon: Shield,
    lead: "Implement sub-second zero-knowledge recursive state transition provers optimized for resource-constrained verification nodes without trusted enclaves.",
    problemStatement:
      "Modern zero-knowledge state verifications impose steep computational burdens on edge and validator nodes. We challenge cryptographers and systems engineers to develop a recursive proof generation pipeline that reduces proof verification overhead to under 15ms on standard consumer hardware, achieving state compression for high-throughput fault-tolerant transaction networks.",
    technicalRequirements: [
      "Sub-second proof generation for 10,000 state mutations on consumer CPUs (x86-64 / ARM64)",
      "Proof verification latency under 15ms on single-thread embedded targets",
      "No proprietary hardware enclaves (Intel SGX/AMD SEV) required",
      "Rigorous cryptographic security reduction and sound constraint matrix",
    ],
    evaluationFocus:
      "Mathematical rigor of proof constraints, CPU optimization craftsmanship, and formal soundess guarantees.",
    targetDeliverables: [
      "Rust proof-generation kernel and zero-dependency verification library",
      "Automated benchmark test suite across multi-core and single-core architectures",
      "Formal specification document outlining constraint layout and security bounds",
    ],
    deadline: "July 15, 2026 • 23:59 UTC",
    status: "Open",
  },
  {
    id: "open-track",
    category: "Open Track",
    title: "Radical Exploratory Engineering for Civilizational Bottlenecks",
    prizePool: "$20,000",
    sponsor: "IBA Foundation Endowment",
    sponsorLogoText: "IBA ENDOWMENT",
    icon: Compass,
    lead: "Radical exploratory engineering addressing overlooked civilizational bottlenecks across analog computing, optics, novel materials, or biological toolchains.",
    problemStatement:
      "The most consequential technological breakthroughs often fail to fit neatly into established disciplinary silos. The Open Track invites visionary engineers to tackle a self-identified civilizational bottleneck: whether developing open-source cryo-electron microscopy processing tools, high-speed photonic arithmetic logic units, or distributed decentralized desalination controls.",
    technicalRequirements: [
      "Clear articulation of the civilizational bottleneck being unlocked",
      "Physical working prototype, hardware build, or fully functional software kernel",
      "Rigorous quantitative baseline comparison against existing industry state-of-the-art",
      "100% builder-owned open-source or open-hardware licensing",
    ],
    evaluationFocus:
      "Intellectual courage, fundamental problem depth, elegance of execution, and verifiable demonstration of functional capability.",
    targetDeliverables: [
      "Working prototype with end-to-end execution evidence",
      "Open technical report (maximum 5 pages) detailing methodology, failure modes, and benchmarks",
      "Reproducible build instructions and public repository",
    ],
    deadline: "July 15, 2026 • 23:59 UTC",
    status: "Open",
  },
];

export function ChallengeInteractiveSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>("ai-autonomous");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"register" | "submit">("register");
  const [activeModalTrack, setActiveModalTrack] = useState<string>("ai-autonomous");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
    trackId: "ai-autonomous",
    projectTitle: "",
    repoUrl: "",
    demoUrl: "",
    summary: "",
  });

  const filteredTracks =
    selectedCategory === "all"
      ? challengeTracks
      : challengeTracks.filter((t) => t.id === selectedCategory);

  const openModal = (mode: "register" | "submit", trackId?: string) => {
    setModalMode(mode);
    if (trackId) {
      setActiveModalTrack(trackId);
      setFormData((prev) => ({ ...prev, trackId }));
    }
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="tracks" className="relative py-20 px-6 sm:px-8 lg:px-12 bg-[#0D0C0A]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#DFB17B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFB17B]" />
              Track Directory & Problem Statements
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Consequential Problems. Concrete Criteria.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#E8D8C0]/80 font-sans">
              Every challenge is anchored in a verified industrial or scientific bottleneck. Select
              a track below to inspect technical requirements, sponsors, deliverables, and rubric weights.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openModal("register")}
              className="inline-flex items-center gap-2 rounded-full bg-[#DFB17B] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] hover:shadow-[0_0_20px_rgba(223,177,123,0.3)] active:scale-95"
            >
              <span>Register for Challenge</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => openModal("submit")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-mono tracking-wider uppercase text-white hover:bg-white/10 transition-colors"
            >
              <FileCode className="h-3.5 w-3.5 text-[#DFB17B]" />
              <span>Submit Solution</span>
            </button>
          </div>
        </div>

        {/* Track Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all ${
              selectedCategory === "all"
                ? "bg-[#DFB17B] text-black font-semibold"
                : "border border-white/10 bg-[#161512] text-white/70 hover:text-white"
            }`}
          >
            All Tracks (5)
          </button>
          {challengeTracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedCategory(track.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all ${
                selectedCategory === track.id
                  ? "bg-[#DFB17B] text-black font-semibold"
                  : "border border-white/10 bg-[#161512] text-white/70 hover:text-white"
              }`}
            >
              {track.category}
            </button>
          ))}
        </div>

        {/* Tracks List */}
        <div className="mt-10 space-y-6">
          {filteredTracks.map((track) => {
            const isExpanded = expandedTrackId === track.id;
            const Icon = track.icon;

            return (
              <div
                key={track.id}
                id={track.id}
                className="group rounded-2xl border border-white/10 bg-[#161512] transition-all hover:border-[#DFB17B]/40 hover:bg-[#161512]/90"
              >
                {/* Track Card Header (Always Visible) */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DFB17B]/20 bg-[#DFB17B]/10 text-[#DFB17B]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#DFB17B]">
                            {track.category}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase text-white/60">
                            Sponsor: {track.sponsorLogoText}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-[#2E9B63]/20 px-2 py-0.5 text-[10px] font-mono text-[#2E9B63] border border-[#2E9B63]/30">
                            Status: {track.status}
                          </span>
                        </div>
                        <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#F6F1E5] transition-colors">
                          {track.title}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#E8D8C0]/85 font-sans">
                          {track.lead}
                        </p>
                      </div>
                    </div>

                    <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                      <div className="text-left lg:text-right">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                          Non-Dilutive Track Pool
                        </div>
                        <div className="font-mono text-2xl sm:text-3xl font-bold text-[#DFB17B]">
                          {track.prizePool}
                        </div>
                        <div className="text-[10px] font-mono text-white/50">
                          100% Builder-Owned IP
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openModal("register", track.id)}
                          className="rounded-full bg-[#DFB17B] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] active:scale-95"
                        >
                          Register
                        </button>
                        <button
                          onClick={() =>
                            setExpandedTrackId(isExpanded ? null : track.id)
                          }
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          aria-expanded={isExpanded}
                          aria-label={`Toggle details for ${track.title}`}
                        >
                          <span>{isExpanded ? "Hide Spec" : "View Spec"}</span>
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Technical Details */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#0D0C0A]/60 px-6 sm:px-8 py-8 transition-all">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Col 1: Problem Statement & Sponsor */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-2">
                            Detailed Problem Statement
                          </h4>
                          <p className="text-sm leading-relaxed text-white/85 font-sans">
                            {track.problemStatement}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-3">
                            Technical Requirements & Constraints
                          </h4>
                          <ul className="space-y-2.5">
                            {track.technicalRequirements.map((req, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DFB17B] mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-[#DFB17B] mb-2">
                            Evaluation Focus
                          </h4>
                          <p className="text-xs sm:text-sm text-[#E8D8C0]/80 font-sans italic border-l-2 border-[#DFB17B]/40 pl-3 py-1">
                            {track.evaluationFocus}
                          </p>
                        </div>
                      </div>

                      {/* Col 2: Deliverables, Deadlines & Sponsor Tracks */}
                      <div className="rounded-xl border border-white/10 bg-[#161512] p-5 space-y-5">
                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                            Institutional Sponsor
                          </div>
                          <div className="text-sm font-serif font-medium text-white mt-1">
                            {track.sponsor}
                          </div>
                          <p className="text-xs text-white/60 mt-1 font-sans">
                            Provides compute clusters, testbenches & direct technical office hours.
                          </p>
                        </div>

                        <div className="border-t border-white/10 pt-4">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                            Target Deliverables
                          </div>
                          <ul className="space-y-1.5 text-xs text-white/80">
                            {track.targetDeliverables.map((del, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Terminal className="h-3.5 w-3.5 shrink-0 text-[#DFB17B] mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-white/10 pt-4">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-white/50">Submission Close:</span>
                            <span className="text-[#DFB17B]">{track.deadline}</span>
                          </div>
                        </div>

                        <div className="pt-2 flex flex-col gap-2">
                          <button
                            onClick={() => openModal("submit", track.id)}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#DFB17B] py-2.5 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#CFA066] transition-colors"
                          >
                            <span>Submit Solution for this Track</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Registration / Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-2xl border border-white/20 bg-[#161512] p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E9B63]/20 border border-[#2E9B63]/40 text-[#2E9B63]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-white font-medium">
                  {modalMode === "register"
                    ? "Registration Confirmed"
                    : "Solution Artifact Submitted"}
                </h3>
                <p className="mt-2 text-sm text-[#E8D8C0]/80 font-sans max-w-md mx-auto">
                  {modalMode === "register"
                    ? "Your team has been registered for the 2026 Open Innovation Benchmark. Check your email for track workspace access, Discord community credentials, and sponsor compute tokens."
                    : "Your technical submission has been recorded. The evaluation committee will audit your repository, build reproduction scripts, and notify you before the Semi-Final Review stage."}
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="rounded-full bg-[#DFB17B] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#CFA066]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase text-[#DFB17B]">
                  <span>2026 BENCHMARK INTAKE</span>
                  <span>•</span>
                  <span>{modalMode === "register" ? "TEAM REGISTRATION" : "ARTIFACT SUBMISSION"}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {modalMode === "register"
                    ? "Register for Technical Challenge"
                    : "Submit Challenge Solution"}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-white/70 font-sans mb-6">
                  {modalMode === "register"
                    ? "Register your solo or multi-builder squad to receive mentor office hour invites and track compute tokens."
                    : "Provide your public repository, technical specification, and demo link for review."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      Full Name / Team Lead *
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., Linus Varma"
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono uppercase text-white/60 mb-1">
                        Institutional / Builder Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="linus@research.org"
                        className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono uppercase text-white/60 mb-1">
                        Team / Squad Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        placeholder="e.g., Lattice Dynamics"
                        className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/60 mb-1">
                      Assigned Track *
                    </label>
                    <select
                      name="trackId"
                      value={formData.trackId}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white focus:border-[#DFB17B] focus:outline-none"
                    >
                      {challengeTracks.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.category}: {t.title} ({t.prizePool})
                        </option>
                      ))}
                    </select>
                  </div>

                  {modalMode === "submit" && (
                    <>
                      <div>
                        <label className="block font-mono uppercase text-white/60 mb-1">
                          Project / Solution Title *
                        </label>
                        <input
                          required
                          type="text"
                          name="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleInputChange}
                          placeholder="e.g., Zero-Trace Runtime Verification Kernel"
                          className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono uppercase text-white/60 mb-1">
                            Public Repository URL *
                          </label>
                          <input
                            required
                            type="url"
                            name="repoUrl"
                            value={formData.repoUrl}
                            onChange={handleInputChange}
                            placeholder="https://github.com/..."
                            className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block font-mono uppercase text-white/60 mb-1">
                            Demo Video / Prototype URL
                          </label>
                          <input
                            type="url"
                            name="demoUrl"
                            value={formData.demoUrl}
                            onChange={handleInputChange}
                            placeholder="https://youtu.be/... or loom.com"
                            className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono uppercase text-white/60 mb-1">
                          Brief Technical Architecture Abstract (Max 250 words) *
                        </label>
                        <textarea
                          required
                          rows={3}
                          name="summary"
                          value={formData.summary}
                          onChange={handleInputChange}
                          placeholder="Outline the core engineering mechanism, reproducible benchmark results, and failure bounds..."
                          className="w-full rounded-lg border border-white/10 bg-[#0D0C0A] px-3.5 py-2 text-white placeholder-white/30 focus:border-[#DFB17B] focus:outline-none font-sans"
                        />
                      </div>
                    </>
                  )}

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#DFB17B] py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#CFA066] active:scale-95"
                    >
                      {modalMode === "register"
                        ? "Complete Challenge Registration"
                        : "Submit Solution for Evaluation"}
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
    </section>
  );
}
