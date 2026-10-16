import { ShowcaseProject, ShowcaseStat } from "./types";

export const SHOWCASE_STATS: ShowcaseStat[] = [
  {
    label: "Audited Fellow Projects",
    value: "48+",
    description: "Production-grade artifacts reviewed by technical jury",
  },
  {
    label: "Builder Fellows",
    value: "160+",
    description: "Engineers, researchers, and technical founders funded",
  },
  {
    label: "Venture Capital Unlocked",
    value: "$18.4M",
    description: "Follow-on institutional and angel capital raised",
  },
  {
    label: "Open Source Codebases",
    value: "92%",
    description: "Publicly auditable repositories with reproducible benchmarks",
  },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "aeropulse-swarm",
    slug: "aeropulse-swarm",
    title: "AeroPulse: Micro-UAV Swarm Perception & Decentralized SLAM",
    tagline: "Sub-35ms distributed visual-inertial odometry for autonomous drone swarms in GPS-denied disaster environments.",
    description:
      "AeroPulse solves decentralized cooperative localization across ad-hoc micro-UAV meshes without requiring global positioning or cloud compute. By fusing low-latency optical flow with asynchronous keyframe optimization over peer-to-peer 802.11s radios, it enables sub-decimeter map merging across 8+ concurrent aerial robots in dense smoke and subterranean corridors.",
    problemStatement:
      "Search-and-rescue teams cannot deploy aerial drones inside collapsed concrete or sub-surface infrastructure due to multipath GPS blackout and high-bandwidth RF attenuation preventing centralized telemetry.",
    category: "Robotics",
    cohort: "Fall 2025 Genesis Cohort",
    date: "2025-11-20",
    featured: true,
    award: {
      title: "Grand Prize Winner — Autonomous Systems",
      tier: "grand",
      year: "2025",
    },
    builders: [
      {
        name: "Aris Thorne",
        role: "Robotics Systems Lead",
        universityOrOrg: "Stanford Robotics Lab",
        initials: "AT",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Priya Sen",
        role: "State Estimation Engineer",
        universityOrOrg: "UC Berkeley EECS",
        initials: "PS",
        githubUrl: "https://github.com",
        twitterUrl: "https://twitter.com",
      },
    ],
    judgeNotes: {
      quote:
        "AeroPulse is an extraordinary triumph of edge computing and spatial intelligence. Achieving drift-free multi-agent SLAM on sub-15W Jetson Orin Nano hardware under simulated collapsed mine conditions represents gold-standard robotics engineering.",
      judgeName: "Dr. Elena Vance",
      judgeRole: "Senior Principal Robotics Architect",
      institution: "MIT CSAIL Fellow & Aerial Autonomy Jury Lead",
    },
    techStack: ["ROS 2", "Rust", "C++20", "Jetson Orin Nano", "PX4 Autopilot", "WebRTC", "Eigen3"],
    metrics: [
      { label: "End-to-End Latency", value: "34ms" },
      { label: "Localization Drift", value: "< 0.8%" },
      { label: "Concurrent Swarm", value: "8 Agents" },
    ],
    links: {
      demoUrl: "https://demo.ibafoundation.org/aeropulse",
      githubUrl: "https://github.com/ibafoundation/aeropulse-slam",
      paperUrl: "https://arxiv.org/abs/2501.08921",
      videoUrl: "https://youtube.com/watch?v=iba-aeropulse-demo",
    },
    architectureHighlights: [
      "Zero-copy shared memory IPC ring buffer reducing inter-thread packet overhead to < 2µs",
      "Decentralized pose-graph optimization with robust Huber loss outlier rejection",
      "Dynamic Wi-Fi mesh bandwidth throttle capping telemetry to 480kbps per drone node",
    ],
  },
  {
    id: "synapse-kv",
    slug: "synapse-kv",
    title: "Synapse-KV: Speculative Attention for Ultra-Long Context LLMs",
    tagline: "Sparse key-value cache pruning and speculative kernel synthesis for 1M+ token inferences on consumer hardware.",
    description:
      "Synapse-KV is a hardware-aware speculative attention kernel that drastically cuts VRAM utilization in long-context transformer inference. By tracking attention activation sparsity at runtime using online low-rank singular projections, Synapse-KV discards stale token KV pairs with provable bounds on perplexity, allowing 1M context models to run on single RTX 4090 GPUs.",
    problemStatement:
      "KV cache memory consumption scales linearly with context length, requiring multi-node 80GB H100 clusters to execute document synthesis and agentic planning pipelines.",
    category: "AI",
    cohort: "Winter 2026 Fellow",
    date: "2026-02-14",
    featured: true,
    award: {
      title: "Distinguished Research Honor — Applied AI",
      tier: "distinction",
      year: "2026",
    },
    builders: [
      {
        name: "Liam K. Mercer",
        role: "AI Systems Researcher",
        universityOrOrg: "Carnegie Mellon LTI",
        initials: "LM",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Maya Lin",
        role: "Kernel Optimization Fellow",
        universityOrOrg: "IBA AI Research Cohort",
        initials: "ML",
        githubUrl: "https://github.com",
        twitterUrl: "https://twitter.com",
      },
    ],
    judgeNotes: {
      quote:
        "Synapse-KV re-examines transformer memory bottlenecks from first principles. Slashing VRAM footprint by 78% while preserving needle-in-a-haystack retrieval accuracy unlocks local enterprise deployment for long-horizon autonomous workflows.",
      judgeName: "Marcus Chen",
      judgeRole: "Principal Systems Engineer",
      institution: "ex-DeepMind / AI Hardware Benchmark Chair",
    },
    techStack: ["PyTorch", "OpenAI Triton", "CUDA C++", "vLLM", "HuggingFace", "Next.js"],
    metrics: [
      { label: "Inference Speedup", value: "4.2x" },
      { label: "VRAM Footprint Reduction", value: "78%" },
      { label: "Context Window Evaluated", value: "1.2M tokens" },
    ],
    links: {
      demoUrl: "https://synapsekv.dev",
      githubUrl: "https://github.com/ibafoundation/synapse-kv",
      paperUrl: "https://arxiv.org/abs/2601.12450",
      videoUrl: "https://youtube.com/watch?v=iba-synapsekv-talk",
    },
    architectureHighlights: [
      "Custom fused Triton kernels fusing sparse attention and block-quantized dequantization",
      "Dynamic eviction scheduling with sliding-window temporal preservation guarantees",
      "Drop-in compatibility with vLLM engine and HuggingFace Transformers pipelines",
    ],
  },
  {
    id: "terravolt-grid",
    slug: "terravolt-grid",
    title: "TerraVolt: Microgrid Dynamic Dispatch & Battery Degradation Guard",
    tagline: "Edge reinforcement learning orchestrator optimizing islanded community microgrids with zero-loss renewable curtailment.",
    description:
      "TerraVolt is an embedded cyber-physical energy manager tailored for hybrid solar-storage microgrids in remote and islanded regions. It couples continuous physics-based lithium battery state-of-health estimators with a decentralized multi-objective PPO agent that balances real-time load shedding, thermal regulation, and solar inverter curtailment.",
    problemStatement:
      "Islanded microgrids suffer catastrophic battery capacity loss within 3 years due to unregulated thermal spikes and suboptimal charge cycling under fluctuating solar irradiance.",
    category: "Climate",
    cohort: "Fall 2025 Genesis Cohort",
    date: "2025-10-30",
    featured: true,
    award: {
      title: "Climate Impact Honor & Venture Grant",
      tier: "honor",
      year: "2025",
    },
    builders: [
      {
        name: "Tatsuya Mori",
        role: "Power Electronics Engineer",
        universityOrOrg: "Tokyo Institute of Technology",
        initials: "TM",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Camila Duarte",
        role: "Grid Systems Fellow",
        universityOrOrg: "Imperial College London",
        initials: "CD",
        githubUrl: "https://github.com",
      },
    ],
    judgeNotes: {
      quote:
        "TerraVolt bridges rigorous electrochemical thermodynamics with modern distributed control. In real-world microgrid pilot benchmarks, it sustained a verified 31% diesel displacement and quadrupled simulated pack life.",
      judgeName: "Sarah Al-Mansoor",
      judgeRole: "Director of Energy Transition Ventures",
      institution: "Clean Energy Innovation Forum",
    },
    techStack: ["Julia", "Python", "Embedded C", "TimescaleDB", "MQTT", "React", "ESP32-S3"],
    metrics: [
      { label: "Diesel Generator Offset", value: "31.4%" },
      { label: "Battery Life Extension", value: "+3.8 Years" },
      { label: "Power Continuity SLA", value: "99.98%" },
    ],
    links: {
      demoUrl: "https://terravolt.io",
      githubUrl: "https://github.com/ibafoundation/terravolt-core",
      paperUrl: "https://openreview.net/forum?id=terravolt2025",
    },
    architectureHighlights: [
      "Sub-second state-of-charge Kalman filtering executing on low-cost dual-core ESP32 microcontrollers",
      "Model-predictive neural control trained across 10 years of satellite meteorological timeseries",
      "Air-gapped Modbus-TCP and CAN-bus isolation guaranteeing fail-safe hardware overrides",
    ],
  },
  {
    id: "kryptondb-consensus",
    slug: "kryptondb-consensus",
    title: "KryptonDB: Deterministic Multi-Raft Consensus in Pure Rust",
    tagline: "Microsecond-tail-latency distributed ledger engine for verifiable financial settlement without leader bottlenecks.",
    description:
      "KryptonDB is a modular transactional storage engine built from scratch in Rust, engineered to eliminate the single-leader write serialization bottlenecks that plague conventional Raft clusters. Using partitioned consensus groups, lock-free ring buffers, and Linux io_uring asynchronous block storage, KryptonDB achieves million-scale write throughput with deterministic microsecond tail latencies.",
    problemStatement:
      "High-throughput clearinghouses and exchange backbones face unpredictable P99 latency spikes of 50-100ms during leader heartbeats and log compaction.",
    category: "Systems",
    cohort: "Fall 2025 Genesis Cohort",
    date: "2025-12-05",
    featured: true,
    award: {
      title: "Most Scalable Infrastructure Award",
      tier: "distinction",
      year: "2025",
    },
    builders: [
      {
        name: "David S. Zhao",
        role: "Distributed Systems Architect",
        universityOrOrg: "University of Waterloo",
        initials: "DZ",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Ananya Nair",
        role: "Concurrency & Kernel Fellow",
        universityOrOrg: "IIT Madras Systems Group",
        initials: "AN",
        githubUrl: "https://github.com",
        twitterUrl: "https://twitter.com",
      },
    ],
    judgeNotes: {
      quote:
        "KryptonDB is an engineering masterclass. Between its formal TLA+ protocol verification and zero-allocation io_uring disk scheduler, the architecture demonstrates a level of systems maturity usually reserved for multi-year enterprise teams.",
      judgeName: "Prof. Henrik Vanger",
      judgeRole: "Chair of Distributed Computing",
      institution: "ETH Zürich / Systems Evaluation Board",
    },
    techStack: ["Rust", "Tokio", "io_uring", "Raft Consensus", "WebAssembly", "eBPF", "TLA+"],
    metrics: [
      { label: "Sustained Throughput", value: "1.25M tx/sec" },
      { label: "p99.9 Tail Latency", value: "240µs" },
      { label: "Memory Allocation", value: "Zero in hot path" },
    ],
    links: {
      demoUrl: "https://benchmarks.kryptondb.org",
      githubUrl: "https://github.com/ibafoundation/krypton-db",
      paperUrl: "https://kryptondb.org/whitepaper.pdf",
    },
    architectureHighlights: [
      "Rigorous TLA+ model checked across 4 billion state permutations without livelock or data loss",
      "Hardware-aligned cache-friendly LSM storage engine with vectorized SIMD bloom filters",
      "Pluggable WASM state machines executing sandboxed transactional business logic",
    ],
  },
  {
    id: "biofold-diff",
    slug: "biofold-diff",
    title: "BioFold-Diff: Generative Macro-Molecular Binding Conformation",
    tagline: "Geometric diffusion network predicting ligand-protein allosteric transitions for rapid antibiotic discovery.",
    description:
      "BioFold-Diff is an SO(3)-equivariant geometric diffusion framework designed to model flexible protein-ligand binding pockets under physiological temperatures. Unlike static docking algorithms, BioFold-Diff simultaneously samples the full conformational ensemble of the target receptor, exposing transient cryptic pockets that inhibit antibiotic-resistant bacterial targets.",
    problemStatement:
      "Traditional rigid-body computational docking fails on over 65% of bacterial membrane targets whose binding sites only emerge during dynamic allosteric conformational shifts.",
    category: "AI",
    cohort: "Winter 2026 Fellow",
    date: "2026-01-22",
    featured: false,
    award: {
      title: "Breakthrough Bio-Compute Citation",
      tier: "honor",
      year: "2026",
    },
    builders: [
      {
        name: "Soren Lindqvist",
        role: "Computational Biophysicist",
        universityOrOrg: "Karolinska Institutet",
        initials: "SL",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Chloe Chen",
        role: "Geometric ML Fellow",
        universityOrOrg: "Harvard Biostatistics",
        initials: "CC",
        githubUrl: "https://github.com",
        twitterUrl: "https://twitter.com",
      },
    ],
    judgeNotes: {
      quote:
        "The SO(3) equivariant architecture implemented by Lindqvist and Chen sets a new standard for computational drug design. Wet-lab surface plasmon resonance assays confirmed their predicted cryptic affinities with 94.6% correlation.",
      judgeName: "Dr. Katherine Wu",
      judgeRole: "Structural Biology Division Lead",
      institution: "Broad Institute of MIT and Harvard",
    },
    techStack: ["PyTorch Geometric", "JAX", "BioPython", "OpenMM", "FastAPI", "TailwindCSS"],
    metrics: [
      { label: "Docking Speedup", value: "12x vs AutoDock" },
      { label: "Affinity Correlation (R²)", value: "0.946" },
      { label: "Novel Leads Synthesized", value: "3 Candidates" },
    ],
    links: {
      demoUrl: "https://biofold.ibafoundation.org",
      githubUrl: "https://github.com/ibafoundation/biofold-diffusion",
      paperUrl: "https://biorxiv.org/content/10.1101/iba.biofold2026",
    },
    architectureHighlights: [
      "Equivariant graph message passing respecting SE(3) rototranslational symmetry in 3D Euclidean space",
      "Fine-grained harmonic forcefield conditioning avoiding sterically unfeasible molecular clashes",
      "Interactive 3D WebGL protein-ligand trajectory visualizer rendering 60FPS in-browser",
    ],
  },
  {
    id: "hydragrip-bionics",
    slug: "hydragrip-bionics",
    title: "HydraGrip: Compliant Soft-Actuator Prosthetic with Tactile Haptics",
    tagline: "Closed-loop neuromorphic touch feedback utilizing bio-mimetic pneumatic artificial muscles and fiber optic sensors.",
    description:
      "HydraGrip is an open-source, anthropomorphic upper-limb prosthesis driven by low-pressure elastomeric pneumatic actuators and embedded fiber-optic tactile sensors. By streaming high-speed skin-slip signals directly into a transcutaneous electrical nerve stimulation (TENS) cuff, amputee pilots can discern fragile glassware from solid steel blindfolded with sub-millimeter precision.",
    problemStatement:
      "Current commercial myoelectric hands cost over $45,000, weigh upwards of 700g, and lack sensory feedback, causing high abandonment rates due to frequent dropping of delicate objects.",
    category: "Robotics",
    cohort: "Fall 2025 Genesis Cohort",
    date: "2025-11-04",
    featured: false,
    award: {
      title: "Excellence in Hardware Ergonomics",
      tier: "distinction",
      year: "2025",
    },
    builders: [
      {
        name: "Mateo Rossi",
        role: "Bionics & Actuation Lead",
        universityOrOrg: "Politecnico di Milano",
        initials: "MR",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Zoe Washington",
        role: "Sensory Neuro-Engineer",
        universityOrOrg: "MIT Department of MechE",
        initials: "ZW",
        githubUrl: "https://github.com",
      },
    ],
    judgeNotes: {
      quote:
        "HydraGrip completely overturns the economics of advanced bionics. Delivering true closed-loop haptic proprioception in a featherweight 350-gram assembly produced for under $600 is life-changing humanitarian engineering.",
      judgeName: "Dr. Robert Vance",
      judgeRole: "Director of Neural Interfaces",
      institution: "Johns Hopkins Applied Physics Laboratory",
    },
    techStack: ["Embedded Rust", "STM32H7", "Micro-ROS", "SolidWorks", "Custom Flex PCB", "Swift"],
    metrics: [
      { label: "Total Prosthetic Weight", value: "350g" },
      { label: "Feedback Loop Latency", value: "12ms" },
      { label: "Tactile Array Channels", value: "16 Sensels" },
    ],
    links: {
      demoUrl: "https://hydragrip.org",
      githubUrl: "https://github.com/ibafoundation/hydragrip-bionics",
      videoUrl: "https://youtube.com/watch?v=hydragrip-amputee-trial",
    },
    architectureHighlights: [
      "Custom fiber Bragg grating (FBG) optical sensors impervious to electromagnetic motor interference",
      "Dual-core STM32 running real-time RTOS with deterministic sub-millisecond nerve pulse stimulation",
      "3D-printable TPU compliant lattice digits requiring zero maintenance pin joints",
    ],
  },
  {
    id: "skysiphon-dac",
    slug: "skysiphon-dac",
    title: "SkySiphon: Solar-Thermal Direct Air Carbon Capture Sorbent Desorber",
    tagline: "Low-temperature desorber unit powered by ambient humidity cycling and structured metal-organic frameworks.",
    description:
      "SkySiphon reimagines direct air capture (DAC) by shifting the desorption thermal duty from expensive electrical heaters to low-grade 55°C concentrated solar collectors. Powered by novel moisture-swing amine metal-organic framework (MOF) monoliths, SkySiphon recovers high-purity CO2 at a fraction of thermodynamic enthalpy cost of conventional alkali capture.",
    problemStatement:
      "State-of-the-art direct air capture consumes 2,000+ kWh of electric energy per ton of sequestered CO2, pricing carbon removal at an unsustainable $400-$700/ton.",
    category: "Climate",
    cohort: "Winter 2026 Fellow",
    date: "2026-02-01",
    featured: false,
    award: {
      title: "CleanTech Pioneer Laureate",
      tier: "honor",
      year: "2026",
    },
    builders: [
      {
        name: "Kofi Mensah",
        role: "Chemical Process Engineer",
        universityOrOrg: "University of Toronto",
        initials: "KM",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Leila Rostami",
        role: "Materials Science Fellow",
        universityOrOrg: "Caltech Chemical Engineering",
        initials: "LR",
        githubUrl: "https://github.com",
        twitterUrl: "https://twitter.com",
      },
    ],
    judgeNotes: {
      quote:
        "By dropping desorption thermal requirements to just 55°C, SkySiphon radically shifts the unit economics of carbon capture. Their field reactor in the Mojave desert sustained continuous day-night cycling with outstanding sorbent stability.",
      judgeName: "Dr. Amara Okafor",
      judgeRole: "Fellow in Clean Energy Thermodynamics",
      institution: "Oxford Climate Nanotechnology Institute",
    },
    techStack: ["Python", "SCADA", "OpenFOAM", "Arduino", "Next.js", "Chart.js", "FreeCAD"],
    metrics: [
      { label: "Projected Cost / Ton", value: "$68 / ton" },
      { label: "Desorption Temperature", value: "55°C" },
      { label: "Thermal Efficiency", value: "85.2%" },
    ],
    links: {
      demoUrl: "https://skysiphon.earth",
      githubUrl: "https://github.com/ibafoundation/skysiphon-dac",
      paperUrl: "https://chemrxiv.org/engage/chemrxiv/article-details/skysiphon-dac-2026",
    },
    architectureHighlights: [
      "Concentrated parabolic solar trough providing steady low-temperature thermal heat storage",
      "Moisture-swing MOF monolith achieving 1.8 mmol CO2 / gram uptake in 15-minute contact cycles",
      "Open-source IoT telemetry stack recording continuous sensor log verification to IPFS",
    ],
  },
  {
    id: "vortexflow-ebpf",
    slug: "vortexflow-ebpf",
    title: "VortexFlow: Zero-Overhead eBPF Distributed Telemetry & Kernel Mesh",
    tagline: "Kernel-native distributed telemetry and kernel-bypass network firewall for ultra-dense Kubernetes clusters.",
    description:
      "VortexFlow injects safe JIT-compiled eBPF byte-code directly into the Linux socket layer, capturing distributed trace spans, TCP flow metrics, and TLS handshake latency without injecting sidecar containers or modifying application runtimes. It provides instant root-cause topology maps across 10,000+ microservice pods at line-rate 100GbE speeds.",
    problemStatement:
      "Traditional observability agents and service mesh proxies (Envoy sidecars) consume up to 25% of total cluster vCPU and inflate tail latencies by 3-5ms per network hop.",
    category: "Systems",
    cohort: "Fall 2025 Genesis Cohort",
    date: "2025-12-18",
    featured: false,
    award: {
      title: "Best Open Source Tooling Award",
      tier: "distinction",
      year: "2025",
    },
    builders: [
      {
        name: "Jonas Falk",
        role: "Kernel Network Engineer",
        universityOrOrg: "KTH Royal Institute of Technology",
        initials: "JF",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      },
      {
        name: "Nina Patel",
        role: "Cloud Infrastructure Fellow",
        universityOrOrg: "IBA Systems Research",
        initials: "NP",
        githubUrl: "https://github.com",
        twitterUrl: "https://twitter.com",
      },
    ],
    judgeNotes: {
      quote:
        "VortexFlow achieves what cloud architects have dreamt of for years: true zero-overhead distributed tracing. Processing 100Gbps line-rate traffic with under 0.8% CPU overhead makes this project an instant open-source sensation.",
      judgeName: "Alexey Petrov",
      judgeRole: "Staff Infrastructure Architect",
      institution: "Cloud Native Computing Foundation Contributor",
    },
    techStack: ["eBPF", "C", "Go", "Rust", "Prometheus", "Grafana", "gRPC", "Kubernetes"],
    metrics: [
      { label: "Host CPU Overhead", value: "< 0.8%" },
      { label: "Network Line Speed", value: "100 Gbps" },
      { label: "Span Attribution", value: "100% Kernel-Native" },
    ],
    links: {
      demoUrl: "https://vortexflow.dev",
      githubUrl: "https://github.com/ibafoundation/vortexflow-ebpf",
      paperUrl: "https://vortexflow.dev/architecture-spec.pdf",
    },
    architectureHighlights: [
      "CO-RE (Compile Once — Run Everywhere) eBPF probes compiling dynamically to target kernel version",
      "Ringbuf ring-buffer IPC streaming 2 million tracing events/sec to user-space collectors",
      "Integrated Prometheus metric exporter and OTEL-compatible distributed trace generator",
    ],
  },
];
