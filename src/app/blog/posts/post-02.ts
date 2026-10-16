import { BlogPost } from "../types";

export const POST_02: BlogPost = {
  "slug": "ideas-are-cheap-execution-is-a-discipline",
  "title": "Ideas Are Cheap. Execution Is a Discipline.",
  "subtitle": "Why unexecuted concepts carry zero economic value, how the Brooksian 9x factor separates prototypes from products, and why disciplined finishing is the ultimate engineering virtue.",
  "seriesNumber": "02 / 12",
  "category": "Builder's Journal",
  "date": "2026-10-16",
  "readTime": "12 min read",
  "author": {
    "name": "IBA Builder Guild & Systems Cohort",
    "role": "Engineering Systems Division",
    "bio": "The engineering and prototyping division of IBA Foundation, analyzing execution architectures, production constraints, and technical meritocracy."
  },
  "metaDescription": "A deep engineering treatise on why ideation carries zero value without execution discipline. Analyzing Brooks' 9x factor, Bhidé's empirical strategy pivots, and Gall's Law.",
  "keywords": [
    "execution discipline",
    "ideas are cheap",
    "Fred Brooks Mythical Man-Month",
    "Amar Bhide entrepreneurial execution",
    "John Gall Systemantics",
    "Theodore Levitt Creativity Is Not Enough",
    "prototype to product engineering",
    "engineering constraints",
    "finishing software systems",
    "IBA Foundation builder methodology"
  ],
  "tldr": [
    "Ideas lack intrinsic value until tested against mechanical constraints, compilers, and live traffic.",
    "Amar Bhidé proved 93% of successful ventures abandoned their founding concepts during operational execution.",
    "Fred Brooks demonstrated that productizing a prototype requires a ninefold increase in disciplined effort.",
    "John Gall established that working complex systems exclusively evolve from simple systems that worked.",
    "Finishing is an ethical engineering discipline separating consequential builders from armchair spectators."
  ],
  "heroImage": {
    "url": "/images/blog/02-hero.webp",
    "alt": "High-precision wire EDM machine cutting hardened tool steel in dielectric fluid bath, with electric sparks sculpting metal to micron tolerances.",
    "caption": "Figure 1: The physical reality of execution—shaping raw material under unyielding micron tolerances where rhetoric cannot displace mechanical friction.",
    "prompt": "Cinematic macro photograph of a wire EDM electrical discharge machining cutting through hardened block of tool steel submerged in dielectric fluid bath. Microscopic glowing amber electrical sparks (#DFB17B), razor-precise cutline, dark volcanic slate background (#0D0C0A), deep shadows, bone cream specular highlights (#F5F2EB), shot on Hasselblad H6D-100c, 120mm macro lens, f/4, editorial industrial engineering aesthetic, zero text overlay, no typography."
  },
  "inlineImages": [
    {
      "url": "/images/blog/02-brooks-matrix.webp",
      "alt": "Architectural blueprint visualization of Fred Brooks' two-dimensional programming systems product matrix.",
      "caption": "Figure 2: The Brooksian Multiplier Matrix: The exponential engineering cost divergence between an isolated script and a production programming systems product (Brooks, 1975).",
      "prompt": "Clean technical architectural schematic diagram on deep obsidian slate background (#0D0C0A). Two-by-two engineering matrix showing the 3x axes compounding into a central glowing warm amber 9x multiplier node (#DFB17B). Bone cream drafting lines (#F5F2EB), subtle technical gridlines, clean Bauhaus vector geometry, balanced composition, no text labels, zero typography."
    },
    {
      "url": "/images/blog/02-galls-law.webp",
      "alt": "Technical evolution schematic contrasting an incremental simple working system expanding into stability versus a monolithic design failing under load.",
      "caption": "Figure 3: Gall's Law of Complex Systems: Evolutionary stability achieved through working atomic kernels versus monolithic de novo collapse (Gall, 1975).",
      "prompt": "Architectural systems engineering diagram on dark volcanic slate (#0D0C0A). Left side shows an elegant glowing amber seed node (#DFB17B) methodically branching into an ordered, resilient network. Right side displays a chaotic, fractured monolithic lattice collapsing under stress vectors. Bone cream accent highlights (#F5F2EB), sharp vector precision, minimal editorial visual, zero text overlay."
    }
  ],
  "sections": [
    {
      "id": "epistemic-myth-of-ideation",
      "heading": "Why Do Abstract Ideas Hold Zero Intrinsic Value in Engineering Systems?",
      "directAnswer": "Abstract ideas possess zero intrinsic value in engineering systems because conceptual hypotheses remain frictionless until forced to absorb the physical constraints of reality. In software and hardware development, a conceptual architecture cannot experience memory allocation failures, network packet loss, race conditions, or thermal throttling. It exists in an idealized vacuum where trade-offs do not bite. Value originates exclusively when a builder subjects an abstract premise to operational friction, translating speculative intention into runnable code or physical mechanisms that function deterministically under adverse conditions. As Harvard Business School scholar Theodore Levitt established in his classic 1963 treatise, creativity without operational execution functions as an organizational liability rather than an asset. Ideation without implementation consumes cognitive capital while producing zero functional output. Consequently, durable engineering value is not a function of conceptual novelty; it is the mathematical quotient of disciplined execution applied to unyielding constraints.",
      "paragraphs": [
        "In the popular mythology of innovation, the spark of inspiration is celebrated as the crowning achievement of the creative intellect. Academic symposia, venture pitch forums, and corporate offsites devote boundless hours to brainstorming exercises, whiteboard diagrams, and speculative market projections. Aspiring founders hoard hypothetical concepts behind mutual non-disclosure agreements, operating under the delusion that an untested idea constitutes defensible intellectual property. Yet across seven decades of commercial computing and industrial engineering, reality consistently demonstrates the opposite: ideas are computationally free, infinitely reproducible, and structurally uninformative until tested against compiler passes, physical tolerances, and adversarial users.",
        "In his seminal 1963 analysis [Creativity Is Not Enough](https://hbr.org/1963/05/creativity-is-not-enough), published in the Harvard Business Review, Theodore Levitt launched an uncompromising critique against corporate fascination with ideation. Levitt observed that individuals who specialize strictly in generating ideas routinely mistake conceptual novelty for economic progress. He documented how ungrounded ideation introduces acute operational drag: every speculative proposal demands cognitive evaluation, architectural review, and committee cycles, draining executive attention from the grueling work of shipping production systems. Without an operational champion willing to absorb the disciplinary cost of implementation—debugging boundary conditions, managing supply chains, and resolving latency anomalies—creative ideation acts as organizational entropy.",
        "Consider the structural difference between an abstract architectural blueprint and an operational system. A diagram drawn in a digital design tool can effortlessly connect a client application, an artificial intelligence agent, and a globally distributed ledger with neat vector arrows. In the vector diagram, bandwidth is instantaneous, network partitions never occur, Byzantine actors do not exist, and serialization costs are zero. The moment that blueprint is translated into running software, however, the engineer encounters the cold physics of computation: packet fragmentation, cache invalidation, deadlocks, disk I/O bottlenecks, and unhandled runtime exceptions. The conceptual diagram did not solve these problems; it merely concealed them.",
        "This epistemic divide is why the [IBA Core Values](/values) establish execution as the sole valid currency of technical merit. As established in our opening institutional monograph, [Potential Is Common. Demonstrated Ability Is Rare.](/blog/potential-is-common-demonstrated-ability-is-rare), latent capability remains unproven until it survives collision with concrete engineering bottlenecks. Speculation requires neither capital discipline nor intellectual humility. The compiler, the oscilloscope, and the production profiler do not respect visionary eloquence; they recognize only executable order."
      ]
    },
    {
      "id": "empirical-reality-strategy-evolution",
      "heading": "What Does Amar Bhidé's Research Reveal About the Failure Rate of Founding Hypotheses?",
      "directAnswer": "Amar Bhidé's empirical research reveals that founding business and technological hypotheses fail at an overwhelming rate, with more than 93 percent of successful high-growth enterprises abandoning or radically altering their initial concepts during market execution. In his comprehensive Oxford University Press investigation of 500 Inc. enterprises, Bhidé demonstrated that foundational breakthroughs rarely stem from proprietary flashes of visionary insight. Instead, 71 percent of successful founders extracted their baseline concepts directly from previous employment, discovering viable systems only after colliding with operational realities, customer resistance, and technical failure modes. The primary determinant of enterprise survival was not the intellectual purity of the initial blueprint, but the speed with which the engineering cohort executed iterative diagnostic cycles in response to disconfirming evidence. Abstract planning without execution produces sterile dogma, whereas disciplined execution continuously generates empirical signal, transforming flawed initial assumptions into viable, hardened operating systems.",
      "paragraphs": [
        "The conviction that successful enterprises originate from pristine, immutable business plans is decisively dismantled by empirical data. In his landmark study [The Origin and Evolution of New Businesses](https://doi.org/10.1093/0195131444.001.0001), published by Oxford University Press in 2000, Harvard Business School professor Amar Bhidé conducted an exhaustive investigation into the genesis and operational history of 500 Inc. high-growth companies. His data revealed a striking divergence between academic models of strategic planning and the gritty reality of technical enterprise formation.",
        "Bhidé discovered that over 93 percent of successful venture cohorts abandoned or fundamentally altered their original concepts during early deployment. Even more striking, 71 percent of founders did not invent a revolutionary technology out of thin air; they identified an operational defect or inefficiency while working in standard industry roles and addressed it with disciplined tactical execution. Only 12 percent reported that unusual foresight or proprietary technological discovery served as their primary competitive moat. The decisive differentiator between enterprises that achieved durability and those that liquidated was not initial conceptual brilliance, but execution velocity: the capacity to adjust tactical operations in direct response to disconfirming market signals.",
        "This empirical finding illuminates what we call the 'Ideation Trap.' Novice engineers and founders often spend months polishing speculative pitch decks, building intricate financial models, and patenting unvalidated mechanisms. They treat their founding idea as sacred scripture, resisting any modification that contradicts their initial vision. In doing so, they convert what should be a disposable hypothesis into an article of faith. When the system inevitably fails upon contact with live users or production workloads, they blame market immaturity or user ignorance rather than acknowledging that their abstract model was flawed from inception.",
        "In contrast, disciplined engineering cohorts treat every technical premise as provisional. They deploy instrumented prototypes into hostile environments precisely to discover where the architecture fractures. This philosophy directly guides the [IBA Open Challenges](/challenges), where participants are not scored on rhetorical presentations or business plan elegance, but on how rapidly their runnable codebases incorporate feedback, remediate defect logs, and sustain load under competitive stress."
      ],
      "table": {
        "caption": "Table 1: Systemic Divergence — Speculative Ideation vs Disciplined Systems Execution",
        "headers": [
          "Engineering Dimension",
          "Speculative Ideation Paradigm",
          "Disciplined Execution Paradigm",
          "Architectural Invariant"
        ],
        "rows": [
          [
            "Foundational Hypothesis",
            "Visionary concept treated as protected intellectual property",
            "Provisional guess subjected to immediate disconfirmation",
            "Bhidé's Law: 93% of initial strategies fail in production"
          ],
          [
            "Verification Mechanism",
            "Pitch slide decks, Figma mocks, and narrative persuasion",
            "Runnable integration test suites, fuzzing, and live telemetry",
            "Uncompiled claims carry zero epistemic status"
          ],
          [
            "Response to Failure Modes",
            "Defensive rationalization; accuses market of lacking vision",
            "Root-cause postmortem; stack trace dissection and patching",
            "Defects reflect boundary condition oversights, not user ignorance"
          ],
          [
            "Scope & Complexity Control",
            "Expands feature set to defer public release dates",
            "Aggressively trims non-essential surface area to guarantee shipment",
            "Gall's Law: Complex systems must evolve from working simple cores"
          ],
          [
            "Production Cost Awareness",
            "Equates prototype completion with 90% of total product delivery",
            "Accounts for the Brooksian 9x factor in testing and integration",
            "Brooks' Multiplier: Products demand ninefold discipline over hacks"
          ],
          [
            "Latency & Error Budgets",
            "Ignored until imaginary future scaling bottlenecks occur",
            "Enforced as non-negotiable p99 SLA thresholds at inception",
            "A system that fails silently under load is non-functional"
          ],
          [
            "Institutional Status Currency",
            "Elevator pitch charisma, investor hype, and academic titles",
            "Deployable code, verified hardware tolerances, and shipping velocity",
            "Meritocracy is defined solely by demonstrated proof of work"
          ]
        ]
      }
    },
    {
      "id": "brooksian-multiplier-last-mile",
      "heading": "How Does Fred Brooks' 9x System Factor Explain the Cost of Production Engineering?",
      "directAnswer": "Fred Brooks' 9x system factor establishes that converting an isolated software script into a production-grade programming systems product requires nine times the engineering effort and operational discipline. In his 1975 foundational work The Mythical Man-Month, Brooks articulated that an unconstrained program written by a single developer occupies only one corner of a two-dimensional matrix. To transform that hack into a programming product demands a three-fold effort dedicated to comprehensive edge-case testing, exhaustive documentation, and long-term maintenance. Concurrently, converting that same script into a programming system requires another independent three-fold investment to establish rigid interface contracts, clean inter-process communication, and strict memory budgets. Compounding both dimensions yields a ninefold multiplier (3x multiplied by 3x). Novice engineers habitually confuse completing the initial prototype script with finishing the project, abandoning the build precisely when the unglamorous 90 percent of production hardening begins.",
      "paragraphs": [
        "In 1975, software engineering pioneer Fred Brooks published [The Mythical Man-Month](https://dl.acm.org/doi/10.5555/800027.808439), synthesizing lessons extracted from directing the design of IBM's Operating System/360. Among its enduring architectural contributions is Brooks' taxonomy of software development cost multipliers. Brooks distinguished between four distinct software artifacts organized across two intersecting axes: domain generality and system integration.",
        "At the origin sits the simple 'Program'—an idiosyncratic script authored by a single engineer for private use on a single computer. It runs when fed clean inputs by its creator, who understands its unspoken assumptions and undocumented quirks. To convert that program into a 'Programming Product'—an artifact capable of being run, tested, repaired, and extended by any developer on arbitrary hardware—requires a three-fold increase in labor (a 3x multiplier). The code must be documented, validated against anomalous inputs, packaged for automated installation, and fortified with regression tests.",
        "Along the horizontal axis, transforming that initial program into a 'Programming System'—a module that coordinates deterministically with other programs through strict interfaces, bounded memory pools, and formal protocols—requires an independent three-fold multiplier (3x). It must honor execution schedules, yield resources cleanly, and preserve system invariants across concurrent operations. When an engineering team aims for the ultimate target—a 'Programming Systems Product' that is simultaneously generalized for third-party operation and integrated into a broader platform—the two multipliers compound. The total effort required is not 1x or 2x, but 9x (3 × 3 = 9).",
        "This mathematical reality explains why amateur software teams routinely stall at the 90 percent mark. The initial prototype—the demo that dazzles onlookers and secures preliminary accolades—represents roughly one-ninth of the total engineering discipline required to achieve production integrity. The remaining 89 percent consists of boundary-condition audits, fault-injection tests, backward-compatible schema migrations, telemetry instrumentation, and memory leak mitigation. At IBA Foundation, our [Engineering Playbooks](/playbooks) train builders to anticipate this 9x multiplier, instilling the stamina necessary to bridge the gulf between a proof of concept and a production engine."
      ],
      "callout": {
        "title": "The Execution Invariant",
        "text": "An unexecuted concept is an uncollateralized option whose economic value decays exponentially with time. Engineering reality acknowledges only the executable artifact: that which compiles, actuates under physical resistance, processes hostile inputs without panic, and persists across system restarts. All prestige resides in the finished build."
      }
    },
    {
      "id": "galls-law-incremental-construction",
      "heading": "Why Does John Gall's Law Mandate Incremental Building from Operational Simplicity?",
      "directAnswer": "John Gall's law mandates incremental construction because complex systems designed de novo never function in production and cannot be patched to achieve stability. Formulated in Gall's 1975 systems classic Systemantics, the law dictates that every successful complex system operating today was constructed by expanding an already operational simple system. When engineers attempt to architect an intricate, multi-layered apparatus from an abstract whiteboard blueprint, they inevitably miscalculate combinatorial failure states, hidden dependencies, and nonlinear feedback loops. These unmodeled dynamics cause greenfield architectures to catastrophically destabilize upon initial deployment. Execution discipline demands that builders reject grand architectural hubris. Builders must establish a minimal end-to-end loop that runs, processes telemetry, and survives adverse input before introducing incremental layers of capability. Simplicity is not merely aesthetic elegance; it is the prerequisite structural foundation that allows an engineering system to endure the thermodynamic friction of real-world operation.",
      "paragraphs": [
        "In his 1975 systems treatise Systemantics: How Systems Work and Especially How They Fail, pediatrician and systems philosopher John Gall articulated an axiom that has become an article of faith among veteran distributed systems architects. Gall's Law states: 'A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system.'",
        "Gall's insight strikes at the core defect of ideation-centric cultures. Speculative thinkers love complexity. They draft sprawling enterprise microservice meshes, multi-token economic flywheels, and elaborate cross-platform state machines before verifying whether a single synchronous socket connection can transfer ten megabytes of data reliably. When this greenfield monolith is finally brought online, it fails catastrophically. The failure is rarely attributable to a single bug; rather, it emerges from the unmodeled combinatorial interactions among dozens of unproven components. Because the system never worked in a simpler state, the engineering team possesses no baseline of deterministic behavior against which to diagnose the breakdown.",
        "Disciplined builders invert this approach entirely. They construct what Gall termed the 'operational kernel'—the smallest possible end-to-end implementation that executes a real transaction from origin to destination. In a database engine, this is not a distributed consensus cluster; it is an append-only log writing bytes to disk. In an edge-computing drone, it is not autonomous swarm routing; it is a stable PID loop keeping four motors spinning level. Once this primitive kernel functions with total predictability, the builder cautiously adds a single layer of capability, stress-tests the new boundary, and verifies that systemic invariants remain intact.",
        "This evolutionary approach is the core pedagogy of the [IBA Builder Fellowship](/fellowship). Rather than allowing fellows to hide behind multi-month architectural roadmaps, the fellowship enforces continuous weekly shipment cycles. Builders must demonstrate runnable increments at each review milestone. As we explore in [The Art of Asking Better Questions](/blog/the-art-of-asking-better-questions), learning to frame problems through minimal, falsifiable technical experiments is what enables an engineering team to evolve intricate systems without succumbing to architectural collapse."
      ]
    },
    {
      "id": "measuring-execution-rigor",
      "heading": "How Can Engineering Institutions Measure and Reward Execution Discipline Over Rhetoric?",
      "directAnswer": "Engineering institutions can measure and reward execution discipline by replacing pitch presentations and credentials with automated benchmark harnesses, reproducible git telemetry, and stress-tested operational demonstrations. Traditional academic accelerators and hackathons routinely fall prey to presentation bias, rewarding charismatic oratory and superficial user-interface mockups over functional systems engineering. To dismantle this distortion, evaluation protocols must interrogate technical invariants: deterministic build pipelines, mean time to failure under synthetic load, latency profiles across network partitions, and systematic test coverage. Evaluators should ignore uncompiled slide decks, auditing instead the developer's version-control cadence, commit atomicity, and architectural justifications under resource constraints. Rewarding tangible proof of work over rhetorical persuasion forces builders to treat finishing as a non-negotiable professional discipline. When capital, fellowship support, and institutional honors are tied strictly to runnable software and verified hardware mechanics, engineering cultures systematically select for builders who construct durable technology.",
      "paragraphs": [
        "The contemporary technology landscape suffers from a profound evaluation crisis. From collegiate innovation contests to venture capital demo days, the institutional mechanisms designed to identify promising technology are systematically captured by rhetorical showmanship. A team that spends four days polishing a dramatic keynote slide deck with high-fidelity 3D animations routinely sweeps prize pools, while a quiet engineering pair that constructed a novel, highly optimized consensus engine is passed over because their terminal interface appears Spartan. This incentive structure trains an entire generation of technical students to optimize for theatrical presentation rather than systems integrity.",
        "To build an authentic engineering meritocracy, institutions must design evaluation environments that are fundamentally immune to rhetoric. This requires shifting from subjective human juries to objective, automated benchmark harnesses. When code is submitted to an evaluation matrix, the scoring pipeline should compile the binaries, execute deterministic unit test suites, deploy synthetic workloads to measure throughput under packet loss, and inspect memory allocation profiles under adversarial stress. Under this regime, verbal charm provides zero defensive cover; the system either processes the transactions within the designated latency envelope or it registers a build failure.",
        "Beyond automated test matrices, evaluators must inspect the forensic signature of the development process itself: the git commit log. A disciplined builder commits early and often, writes atomic changes with precise commit messages, structures pull requests with clear boundary definitions, and documents design trade-offs directly in the code comments. Conversely, an ideation-heavy team dumps an eleventh-hour monolithic commit containing thousands of unvetted lines scraped from disparate libraries. The commit log does not lie; it exposes the author's cognitive discipline and respect for technical craft.",
        "This uncompromising methodology is visible across our public [Fellow Project Showcase](/showcase). Every project exhibited by IBA Foundation fellows represents a battle-tested technical artifact backed by open source repositories, public deployment endpoints, and reproducible benchmark data. We believe that finishing is an ethical act. Starting a project provides the emotional gratification of creative vanity; finishing a project requires the stoic willingness to confront edge cases, optimize assembly routines, and debug race conditions until the system stands unshakeable. By celebrating builders who finish, we restore dignity to the craft of execution."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Why does IBA Foundation prioritize working code over pitch presentations?",
      "answer": "Presentations conceal engineering flaws behind rhetorical confidence. Empirical data demonstrates that slide decks correlate poorly with technical execution. IBA Foundation evaluates runnable software, git telemetry, and operational edge-case resilience because working code exposes trade-offs immediately. An uncompiled concept carries zero credibility; only tested implementations prove engineering competence."
    },
    {
      "question": "What is the difference between a functional prototype and a finished product?",
      "answer": "A prototype demonstrates conceptual feasibility under controlled, favorable inputs on an author's workstation. A finished product delivers deterministic reliability across hostile conditions, handling race conditions, malformed packets, network latency, security vectors, and backward compatibility. As Fred Brooks documented, bridging that gap requires nine times the initial engineering effort."
    },
    {
      "question": "How does Gall's Law prevent catastrophic architectural failure in early builds?",
      "answer": "Gall's Law warns that complex systems constructed from scratch inevitably fail because unexpected systemic interactions multiply exponentially. By enforcing the creation of a minimal working kernel first, builders verify core assumptions in production. Incremental expansion from this stable foundation ensures that errors remain isolated, diagnosable, and architecturally manageable."
    },
    {
      "question": "Why do most founders overvalue their founding ideas and fear theft?",
      "answer": "Amateur founders conflate the emotional high of conceptual discovery with commercial defensibility. In reality, Amar Bhidé proved that 93 percent of successful ventures abandoned their founding ideas. Execution details—operational discipline, unit economics, supply-chain constraints, and software telemetry—create defensibility. Unexecuted ideas carry zero market risk, making protectionism an illusion of insecure founders."
    },
    {
      "question": "How do time-boxed engineering challenges cultivate real execution discipline?",
      "answer": "Strict deadlines eliminate scope creep and force ruthlessly honest trade-offs. When builders cannot postpone delivery dates, they must decide which features are essential and which are ornamental distractions. This constraint replicates the reality of capital constraints and production deadlines, training engineers to ship working artifacts rather than rationalizing unfinished abstractions."
    }
  ],
  "references": [
    {
      "citation": "Brooks, F. P.",
      "source": "The Mythical Man-Month: Essays on Software Engineering. Addison-Wesley",
      "year": 1975,
      "url": "https://dl.acm.org/doi/10.5555/800027.808439",
      "keyFinding": "Demonstrated that converting an isolated personal program into a production-grade programming systems product requires a 9x increase in development, testing, and integration effort."
    },
    {
      "citation": "Bhidé, A.",
      "source": "The Origin and Evolution of New Businesses. Oxford University Press",
      "year": 2000,
      "url": "https://doi.org/10.1093/0195131444.001.0001",
      "keyFinding": "Empirical study of 500 high-growth enterprises revealing that 93% succeeded through operational adaptation rather than founding ideas, with 71% extracting concepts directly from prior jobs."
    },
    {
      "citation": "Levitt, T.",
      "source": "Creativity Is Not Enough. Harvard Business Review, 41(3), 72–83",
      "year": 1963,
      "url": "https://hbr.org/1963/05/creativity-is-not-enough",
      "keyFinding": "Proved that unconstrained ideation without implementation discipline destabilizes enterprises by generating cognitive friction, establishing that execution is the sole differentiator of productive innovation."
    },
    {
      "citation": "Gall, J.",
      "source": "Systemantics: How Systems Work and Especially How They Fail. Quadrangle / The New York Times Book Co.",
      "year": 1975,
      "url": "https://en.wikipedia.org/wiki/Systemantics",
      "keyFinding": "Formulated Gall's Law: every functioning complex system evolved from an operational simple system; complex systems designed de novo inevitably fail and cannot be patched to achieve stability."
    }
  ]
};
