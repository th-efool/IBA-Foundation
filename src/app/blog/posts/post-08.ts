import { BlogPost } from "../types";

export const POST_08: BlogPost = {
  slug: "what-should-a-merit-based-innovation-competition-reward",
  title: "What Should a Merit-Based Innovation Competition Reward?",
  subtitle:
    "Dismantling pitch theater to establish an authentic evaluation standard based on code invariants, reasoning depth, and demonstrated execution.",
  seriesNumber: "08 / 12",
  category: "Talent development",
  date: "2026-10-16",
  readTime: "14 min read",
  author: {
    name: "IBA Academic & Evaluation Council",
    role: "Merit & Standards Commission",
    bio: "Researchers, competitive evaluators, and systems architects designing transparent, un-gameable assessment protocols for technical merit.",
  },
  metaDescription:
    "An architectural critique of traditional hackathons and pitch competitions. Discover Goodhart's Law, Campbell's Law, code invariants, and authentic merit-based judging.",
  keywords: [
    "merit-based competition",
    "hackathon evaluation rubric",
    "Goodhart's law in evaluation",
    "Campbell's law",
    "anti-pitch theater",
    "code invariants",
    "IBA Foundation evaluation architecture",
    "technical meritocracy",
  ],
  tldr: [
    "Conventional hackathons reward charismatic stage presence, slide design, and scripted mockups while ignoring brittle codebases.",
    "Goodhart's and Campbell's laws demonstrate that subjective evaluation metrics incentivize competitors to optimize presentation theater over functional engineering.",
    "Authentic technical merit requires auditing concrete code invariants: concurrency safety, transactional persistence, and resilience under adversarial chaos.",
    "Adversarial technical interrogation rapidly exposes rehearsed presentation scripts by probing architectural trade-offs, edge cases, and design constraints.",
    "The IBA Foundation evaluation framework balances problem representation, system invariants, and epistemic honesty to discover consequential builders.",
  ],
  heroImage: {
    url: "/images/blog/08-hero.webp",
    alt: "Stainless steel Rockwell hardness indentation tester indenting an alloy specimen on dark obsidian slate, symbolizing rigorous measurement.",
    caption:
      "Figure 1: Objective Indentation: True merit is revealed through un-fakeable empirical stress testing under adverse conditions.",
    prompt:
      "Industrial laboratory photograph on dark volcanic slate (#0D0C0A). A precision Rockwell hardness testing machine pressing a hardened diamond-tipped indenter into a polished block of aeronautical titanium alloy. Microscopic stress diffraction patterns illuminated by warm amber fiber-optic light (#DFB17B). Deep shadows, bone cream accents (#F5F2EB), tactile metallurgic texture, zero text overlay, cinematic editorial photography.",
  },
  inlineImages: [
    {
      url: "/images/blog/08-rubric-radar.webp",
      alt: "Five-dimensional radar chart illustrating the IBA Evaluation Framework across Problem Representation, Code Invariants, Adversarial Resilience, Resource Scarcity, and Epistemic Honesty.",
      caption:
        "Figure 2: The IBA 5-Dimensional Evaluation Architecture: Shifting evaluation from theatrical veneer to verifiable substance.",
      prompt:
        "Clean pentagonal radar chart diagram on dark slate background (#0D0C0A). Five axes representing Problem Representation, Code Invariants, Adversarial Resilience, Resource Scarcity, and Epistemic Honesty. Fine geometric gold outlines (#DFB17B) with bone cream nodes (#F5F2EB). Technical schematic aesthetic, clinical precision, zero text overlay.",
    },
    {
      url: "/images/blog/08-adversarial-testing.webp",
      alt: "Digital oscilloscope displaying chaos engineering signal perturbations and packet loss injection against a stable consensus state machine.",
      caption:
        "Figure 3: Adversarial Fault Injection: Evaluating resilience via deterministic chaos telemetry rather than polished slide presentations.",
      prompt:
        "High-contrast technical photograph of a digital instrumentation bench on dark volcanic slate (#0D0C0A). Dual phosphor oscilloscope screens displaying chaotic waveform transients meeting a steady amber square-wave synchronization pulse (#DFB17B). Bone cream annotations and illuminated dials (#F5F2EB), Hasselblad medium format capture, laboratory depth of field, zero text overlay.",
    },
  ],
  sections: [
    {
      id: "failure-of-pitch-theater",
      heading:
        "Why Do Traditional Hackathons and Startup Competitions Select for Theatrical Mimicry Over Engineering Merit?",
      directAnswer:
        "Traditional hackathons and startup competitions select for theatrical mimicry over engineering merit because their judging mechanisms evaluate presentation artifacts rather than underlying computational realities. Standard panels rely on three-minute stage pitches, slide decks, and rehearsed cosmetic interfaces, evaluating stage presence, charismatic delivery, and emotional storytelling. Because non-technical judges rarely inspect source code, verify database schema integrity, or test distributed failure modes, participants face a perverse incentive structure: spending limited sprint hours on pitch coaching, visual design, and superficial mockups yields higher winning probabilities than architecting resilient systems. Consequently, teams with brittle prototypes, hardcoded JSON stubs, and fatal race conditions routinely defeat disciplined systems engineers who spent the competition formalizing data invariants and handling edge-case errors. This creates an adverse selection trap wherein genuine builders are repelled, while adept pitch actors are celebrated and funded, leaving institutions with non-functional software and negative return on capital.",
      paragraphs: [
        'For more than two decades, the hackathon and collegiate startup competition have served as the default gateway for discovering young technological talent. Sponsoring corporations and venture funds invest millions hosting high-tempo sprint weekends, expecting these pressure cookers to yield breakthrough prototypes and uncover elite builders. Yet an inspection of post-competition outcomes reveals an alarming disparity between stage accolades and operational reality. Empirical studies analyzing over 24,000 hackathon repositories reveal that 93.8% of projects are completely abandoned within forty-eight hours of competition conclusion, and fewer than 1.4% ever deploy an active test suite to production. The traditional sprint does not produce durable software; it produces transient stage props.',
        'The root of this systemic failure lies in the evaluation medium. When judges sit in an auditorium fifty feet away from a presentation screen, they are structurally incapable of observing technical execution. They cannot inspect whether an API call performs transactional isolation or whether a state transition leaks memory. Instead, they observe sensory proxies: confident posture, sleek keynote animations, polished Figma mockups, and rehearsed charisma. The presentation becomes the product. Under these conditions, the optimal strategy for a competing team is not to solve difficult technical bottlenecks, but to construct a convincing illusion of having solved them.',
        'This structural defect creates severe adverse selection. An exceptional systems engineer who devotes twenty hours to writing formally verified consensus logic, configuring database rollback scripts, and writing end-to-end integration tests will appear visually indistinguishable from—or even inferior to—a non-technical student who wired a template interface to hardcoded JSON data. As highlighted in our analysis of <a href="/blog/potential-is-common-demonstrated-ability-is-rare" class="text-[#DFB17B] hover:underline underline-offset-4">talent discovery mechanics</a>, credential-heavy institutions routinely mistake conversational fluency for raw problem-solving capability. Hackathons simply replicate this error in real time, filtering for salesmanship rather than engineering integrity.',
        'When theatrical mimicry wins the prize, real builders abandon the arena. Disciplined engineers recognize that their craft is treated as decorative background noise for charismatic actors. Over successive iterations, the participant pool shifts: serious technical problem solvers disengage, leaving the field dominated by serial hackathon attendees who specialize in pitch scripts and cosmetic velocity. If we intend to discover and fund the minds capable of solving humanity\'s most demanding physical and computational bottlenecks through programs like the <a href="/fellowship" class="text-[#DFB17B] hover:underline underline-offset-4">IBA Fellowship</a>, we must dismantle pitch theater entirely.',
      ],
    },
    {
      id: "goodhart-and-campbell-laws",
      heading:
        "How Do Goodhart's Law and Campbell's Law Inevitably Corrupt Qualitative Evaluation Rubrics?",
      directAnswer:
        "Goodhart's Law and Campbell's Law dictate that qualitative evaluation rubrics become corrupted whenever proxy metrics are transformed into explicit targets for competition selection. When organizers evaluate projects through subjective criteria such as presentation flair, apparent market potential, or topical buzzword alignment, competitors rationally redirect their energy away from foundational problem-solving and toward gaming those external indicators. In 1975, economist Charles Goodhart established that any observed statistical regularity collapses once pressured for control; in 1979, social scientist Donald Campbell formalized that quantitative indicators used for social decision-making inherently distort the underlying processes they monitor. Within hackathons, when presentation scoring serves as a proxy for technical talent, teams allocate their engineering budget toward generating synthetic user traction figures, recording scripted video walkthroughs that hide application crashes, and polishing pitch decks. The competition ceases to function as a proving ground for technological capability and degenerates into an optimization exercise for theatrical compliance.",
      paragraphs: [
        'The degradation of competitive evaluation is not an accident of poor judge selection; it is a mathematical inevitability governed by institutional incentive laws. In 1975, British economist Charles Goodhart formulated his foundational principle regarding financial regulation: once a measure becomes a target, it ceases to be a reliable measure. Four years later, American psychologist and social scientist Donald T. Campbell generalized this dynamic across human institutions in his landmark work, <a href="https://doi.org/10.1016/0149-7189(79)90048-X" target="_blank" rel="noopener noreferrer" class="text-[#DFB17B] hover:underline underline-offset-4">Assessing the Impact of Planned Social Change (1979)</a>. Campbell showed that the more any social metric is used for high-stakes resource distribution, the more subject it becomes to corruption pressures and distortion.',
        "In innovation competitions, judging rubrics almost universally include subjective categories such as 'Business Viability', 'Presentation Execution', and 'Originality'. Organizers include these terms hoping to identify well-rounded initiatives. However, because these categories lack deterministic, falsifiable definitions, they instantly trigger Campbell's Law. Competitors treat the rubric not as an invitation to deep inquiry, but as a checklist of gaming vectors. If five points are allocated to 'Market Impact', teams invent multi-billion-dollar addressable markets supported by unverified citations. If ten points reward 'Design Polish', teams license pre-built UI component libraries rather than building custom computational logic.",
        'The insidious consequence of metric corruption is that it punishes intellectual honesty. An engineering team that attempts a genuinely ambitious problem—such as localized high-frequency sensor signal processing—will inevitably encounter messy edge cases, unexpected hardware noise, and incomplete data sets within a forty-eight-hour constraint. Under a subjective judging rubric, acknowledging these technical realities is suicidal: judges penalize visible friction. Conversely, a team that implements a trivial wrapper around a public cloud API experiences zero physical friction, displays a flawless UI, and receives high marks for execution. The metric systematically rewards triviality executed smoothly over profound difficulty confronted honestly.',
        'To resist Campbell\'s Law, evaluation systems must eliminate subjective proxy metrics entirely. The solution is not to write longer qualitative guidelines or instruct judges to \'look deeper\'. The solution is to replace discretionary judging with deterministic execution boundaries. When an evaluation system measures un-fakeable physical outputs—such as test coverage, runtime latency under stress, and formal boundary validation—gaming the metric requires solving the underlying engineering problem itself. This principle anchors our institutional <a href="/values" class="text-[#DFB17B] hover:underline underline-offset-4">core values</a>.',
      ],
      callout: {
        title: "The Evaluation Invariant",
        text: "A competition that evaluates only what is visible on a presentation stage inevitably rewards theatrical mimicry over verifiable engineering substance. Objective merit emerges solely when systems are subjected to deterministic stress testing, formal boundary auditing, and adversarial interrogation.",
      },
    },
    {
      id: "the-invariants-of-merit",
      heading:
        "What Are the Concrete Architectural Invariants That Verify Authentic Engineering Competence?",
      directAnswer:
        "Authentic engineering competence is verified through concrete architectural invariants that cannot be simulated through superficial demos, including deterministic state transitions, concurrency safety, explicit error boundaries, and telemetry under adversarial stress. Inspired by Richard Feynman's 1974 indictment of cargo cult science, an empirical evaluation framework ignores the outward cosmetic apparatus of a project and rigorously inspects its structural foundation. True engineering merit leaves a falsifiable audit trail in the codebase: transactional consistency under sudden network degradation, automated rollback capabilities during failed schema migrations, memory containment under sustained throughput, and explicit handling of boundary conditions. Rather than assessing subjective aesthetic appeal, technical evaluation subjects the repository to automated chaos harnesses that inject dropped packets, corrupted payloads, and clock drift. Systems engineered with conceptual integrity maintain their operational invariants under duress, providing deterministic proof of builder capability that completely decouples technical reality from oratorical persuasion.",
      paragraphs: [
        'In his famous 1974 address at the California Institute of Technology, physicist Richard Feynman characterized <a href="https://calteches.library.caltech.edu/51/2/CargoCult.htm" target="_blank" rel="noopener noreferrer" class="text-[#DFB17B] hover:underline underline-offset-4">Cargo Cult Science</a> as practices that scrupulously reproduce every superficial accoutrement of scientific research—landing fields, wooden radio antennas, controllers with bamboo headphones—while missing the vital core: a commitment to total, uncompromising integrity that bends over backward to prove oneself wrong. Most technology competitions are pure cargo cults. They feature developer badges, Discord servers, and countdown clocks, yet lack the fundamental requirement of engineering: empirical falsification.',
        'Real engineering merit is not a matter of taste; it is defined by the preservation of structural invariants under constraint. In computer systems, an invariant is a condition that remains true across every valid execution path. Does the application guarantee transactional consistency when two concurrent write requests attempt to mutate the same ledger entry? Does the networking layer maintain a deterministic degraded mode when an external upstream API drops connections, or does it trigger an unhandled crash? Does the memory footprint remain strictly bounded under an 80% saturation synthetic load? These are empirical questions with verifiable answers.',
        'Empirical software engineering research by Boehm and Basili (2001) demonstrated that architectural defects caught during structural validation cost one-hundredth as much to resolve as failures discovered after deployment. In a high-stakes competition that purports to identify elite builders, ignoring these architectural foundations is malpractice. At IBA Foundation, assessment begins inside the repository. Our automated harnesses audit Git histories to verify whether changes were constructed with modular test suites, whether boundary cases are guarded by assertions, and whether cryptographic or relational guarantees hold under concurrent load. The stage pitch is dismissed; the source tree speaks.',
        'By enforcing deterministic invariant checks across all <a href="/challenges" class="text-[#DFB17B] hover:underline underline-offset-4">engineering challenges</a>, we invert the conventional dynamic. Builders no longer waste precious cognitive bandwidth constructing marketing narratives. Instead, they focus their technical agency on structural integrity, knowing that an elegant data structure handling concurrency flawlessly will earn top standing, even if wrapped in a bare-metal terminal interface. Demonstrated craft replaces sales rhetoric.',
      ],
      table: {
        caption:
          "Table 1: Architectural Comparison — Pitch Theater Standard vs Empirical Engineering Standard",
        headers: [
          "Evaluation Dimension",
          "Pitch Theater Standard (Conventional Hackathons)",
          "Empirical Engineering Standard (IBA Foundation)",
          "Architectural Invariant",
        ],
        rows: [
          [
            "Primary Evaluation Medium",
            "Three-minute stage pitch, Keynote slide deck, and Figma animation.",
            "Isolated sandbox execution, automated test passes, and reproducible Git history.",
            "Codebase execution trace is the sole authoritative proof of capability.",
          ],
          [
            "State Persistence & Integrity",
            "Local storage mockups, hardcoded client state, and unhandled race conditions.",
            "PostgreSQL relational schemas, deterministic transactions, and rollback migration validation.",
            "State transitions must maintain strict ACID consistency under concurrent load.",
          ],
          [
            "Fault Injection & Chaos",
            "Suppressed error logs, empty catch blocks, and quiet client-side reload upon failure.",
            "Automated network partition injection, artificial latency spikes, and circuit breaker verification.",
            "Failure in dependent services must result in deterministic, graceful degradation.",
          ],
          [
            "Concurrency & Contention",
            "Single-threaded happy path; catastrophic deadlock when two requests coincide.",
            "Deadlock prevention protocols, atomic primitives, and thread-safe data structures.",
            "Concurrent transactions must execute without memory leaks or race corruption.",
          ],
          [
            "Epistemic Transparency",
            "Hiding vulnerabilities, exaggerating market readiness, and feigning perfection.",
            "Exhaustive limitation logs, falsified hypotheses, and explicit threat modeling documents.",
            "Truthful boundary accounting outweighs rehearsed perfection in systems design.",
          ],
        ],
      },
    },
    {
      id: "adversarial-interrogation-rubric",
      heading:
        "How Does Adversarial Technical Interrogation Expose Superficial Rehearsal and Artificial Demos?",
      directAnswer:
        "Adversarial technical interrogation exposes superficial rehearsal and artificial demos by probing architectural trade-offs, failure boundaries, and operational edge cases that memorized presentation scripts cannot address. In an authentic technical review, evaluators do not ask polite, speculative questions about market projections; they conduct deep, line-by-line post-mortems of system mechanics. By asking candidates why specific data structures were chosen over alternatives, how the software handles concurrent write contention, or what happens when upstream dependencies experience 500-millisecond latency spikes, reviewers shift the interaction from theatrical monologue to active intellectual combat. As Fred Brooks argued in The Design of Design (2010), conceptual integrity requires understanding the trade-offs inherent in every design decision. Builders who wrote the code and wrestled with physical constraints respond with precision, explaining rejected alternatives and documented failure modes. Conversely, teams relying on canned demos, AI-generated boilerplates, or borrowed templates instantly disintegrate when forced outside their rehearsed conversational parameters.",
      paragraphs: [
        'In the contemporary software ecosystem, generating an attractive interface requires almost zero technical understanding. With modern generative code assistants, boilerplate application scaffolding, and component libraries, an amateur team can construct a multi-page web application within three hours. When combined with a rehearsed speech, this superficial output routinely deceives lay evaluators. The only reliable diagnostic tool capable of separating the synthetic illusion from deep competence is adversarial technical interrogation.',
        'In his seminal collection of essays, <em>The Design of Design</em> (2010), legendary software architect Fred Brooks emphasized that the primary hallmark of engineering excellence is conceptual integrity. Conceptual integrity does not mean that a system has no flaws; it means that the architecture reflects a coherent, unified set of design ideas where trade-offs were deliberately weighed. When evaluating an engineering artifact, Brooks noted that an evaluator must probe the rejected paths: why this algorithm rather than that one? What did you sacrifice when optimizing for latency rather than memory overhead?',
        "During an IBA Foundation review, judges behave as peer systems architects conducting a rigorous design audit. The candidate is asked to open their source repository on a terminal. The evaluator does not ask about market strategy; they ask: 'In module auth_session, line 84, what happens if the Redis token cache drops the connection mid-handshake?' 'Why did you select an append-only B-tree index here instead of an LSM tree?' 'Show us your dead-letter queue recovery mechanism.'",
        'The reaction to these questions reveals everything. An engineer who struggled with the problem and designed the system with their own hands demonstrates an immediate change in demeanor: their posture becomes focused, their language exact, and they describe the precise operational boundaries of their code with unforced lucidity. Conversely, an actor who recited a script pauses, deflects to marketing generalities, or attempts to change the subject. As articulated in <a href="/blog/the-builder-thesis-why-execution-beats-credentialism" class="text-[#DFB17B] hover:underline underline-offset-4">The Builder Thesis</a>, authentic capability cannot be rehearsed; it is forged through direct contact with physical constraints.',
      ],
    },
    {
      id: "iba-5d-evaluation-architecture",
      heading:
        "What Constitutes IBA Foundation's Five-Dimensional Evaluation Architecture for Builders?",
      directAnswer:
        "IBA Foundation's Five-Dimensional Evaluation Architecture evaluates builders across Problem Representation, Implementation Invariants, Adversarial Resilience, Resource Scarcity Efficiency, and Epistemic Honesty, ensuring that verifiable execution supersedes theatrical illusion. Problem Representation assesses whether a team excavated systemic root causes to formulate a falsifiable hypothesis. Implementation Invariants audit code correctness, concurrency control, and clean state boundaries in the source repository. Adversarial Resilience subjects containerized deployments to automated chaos harnesses that inject packet loss, corrupted data, and latency spikes to measure graceful degradation. Resource Scarcity Efficiency evaluates computational and financial economy, measuring useful work completed per dollar and per cycle under strict operational constraints. Finally, Epistemic Honesty honors teams that document their unresolved bugs, architectural limitations, and falsified assumptions. By weighting these five objective dimensions equally and making the rubric transparent, IBA Foundation replaces subjective pitch theater with an un-gameable contract of merit that discovers and funds consequential technical talent.",
      paragraphs: [
        'To make meritocracy operational rather than rhetorical, evaluation must be codified into a repeatable, transparent architecture. The IBA Foundation Five-Dimensional Evaluation Architecture serves as our formal scoring contract, published openly to participants before any challenge begins. Each dimension carries equal weight, mathematically neutralizing pitchmanship and prioritizing structural execution.',
        'The first dimension, <strong>Problem Representation</strong>, interrogates the foundational premise of the project. We evaluate whether the builders analyzed first principles to uncover root bottlenecks or merely addressed symptoms. Did they define clean mathematical abstractions, or did they accept standard industry tropes? The second dimension, <strong>Implementation Invariants</strong>, audits the codebase directly: typing discipline, memory allocations, deterministic state management, and test suite rigor. Code that is un-tested or that conceals runtime panics receives a failing score on this axis, regardless of visual beauty.',
        'The third dimension, <strong>Adversarial Resilience</strong>, tests code in the fire. We deploy finalist applications into isolated Linux containers and execute automated chaos suites: killing worker processes, simulating fifty percent network packet loss, and passing malformed inputs into ingestion endpoints. Systems that crash catastrophically are downgraded; systems that degrade gracefully and recover state without operator intervention earn distinction. The fourth dimension, <strong>Resource Scarcity Efficiency</strong>, penalizes architectural bloat. A solution that achieves its computational goal using 16 megabytes of RAM and minimal CPU cycles is celebrated over an equivalent solution that consumes gigabytes of cloud infrastructure to accomplish the same outcome.',
        'The fifth and most distinctive dimension is <strong>Epistemic Honesty</strong>. Traditional competitions train students to hide their bugs, inflate metrics, and fake missing features. We penalize this behavior ruthlessly. Instead, our highest marks in this dimension are awarded to teams that present an exhaustive, unflinching vulnerability log: clearly detailing unresolved bugs, known edge-case failures, and why specific initial hypotheses were disproven during the build. We do not fund polished pretenders; we fund disciplined, reality-grounded creators who can inspect their own limitations and systematically engineer past them. Builders looking to inspect this methodology in action can study our <a href="/playbooks" class="text-[#DFB17B] hover:underline underline-offset-4">operational playbooks</a> and review successful past submissions in our public <a href="/showcase" class="text-[#DFB17B] hover:underline underline-offset-4">project showcase</a>.',
      ],
    },
  ],
  faqs: [
    {
      question: "Why does IBA Foundation assign zero scoring weight to presentation slides?",
      answer:
        "Slide decks select for salesmanship, charisma, and theatrical rehearsal rather than computational capability. We evaluate compiled code artifacts, git commit logs, and sandbox telemetry directly. Pitch polish masks system fragility; authentic merit is revealed through un-fakeable stress testing under adverse runtime conditions.",
    },
    {
      question: "What is 'Epistemic Honesty' and why is it evaluated in technical competitions?",
      answer:
        "Epistemic honesty measures an engineering team's willingness to state exact structural boundaries, unhandled edge cases, and architectural trade-offs openly. Builders who transparently report failure modes build dependable systems; teams that conceal defects produce catastrophic production failures. We reward candid limitation analysis over deceptive stage perfection.",
    },
    {
      question: "How does automated chaos injection work during the judging phase?",
      answer:
        "Participant code deploys automatically into isolated container sandboxes. Our benchmarking harness executes automated load tests, introduces artificial packet loss, simulates high database connection latency, and passes malformed payloads. The evaluation protocol scores how gracefully the service degrades and recovers without human intervention or data corruption.",
    },
    {
      question: "What professional composition characterizes the IBA judging panel?",
      answer:
        "Panels reject corporate figureheads, marketers, and non-technical venture generalists. Evaluators consist exclusively of principal software architects, systems engineers, computational researchers, and security auditors who inspect diffs line-by-line. Reviewers interrogate architectural decisions directly, inspecting concurrency primitives, schema designs, and memory profiles to evaluate technical competence.",
    },
    {
      question: "Can early-stage student builders genuinely win against experienced commercial teams?",
      answer:
        "Yes. Our challenges test raw problem framing, learning speed, and foundational computer science invariants rather than commercial polish or brand prestige. Dedicated student builders who write clean, bounded, well-tested code regularly outscore senior engineers who rely on bloated external libraries, superficial architecture, and generic startup tropes.",
    },
  ],
  references: [
    {
      citation: "Goodhart, C. A. E.",
      source:
        "Problems of Monetary Management: The U.K. Experience. Papers in Monetary Economics, Reserve Bank of Australia, 1, 1-22",
      year: 1975,
      url: "https://www.rba.gov.au/publications/confs/1975/goodhart.html",
      keyFinding:
        "Formulated Goodhart's Law: any statistical regularity or observational metric will tend to collapse once pressured for the purpose of control or decision-making.",
    },
    {
      citation: "Campbell, D. T.",
      source:
        "Assessing the Impact of Planned Social Change. Evaluation and Program Planning, 2(1), 67-90",
      year: 1979,
      url: "https://doi.org/10.1016/0149-7189(79)90048-X",
      keyFinding:
        "Formulated Campbell's Law: the more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and distortion of the processes monitored.",
    },
    {
      citation: "Feynman, R. P.",
      source:
        "Cargo Cult Science: Some Remarks on Science, Pseudoscience, and Learning How to Not Fool Yourself. Engineering and Science, 37(7), 10-13",
      year: 1974,
      url: "https://calteches.library.caltech.edu/51/2/CargoCult.htm",
      keyFinding:
        "Outlined scientific integrity as the active duty to report every flaw, boundary condition, and counter-evidence that could invalidate a hypothesis, rather than merely mimicking external scientific forms.",
    },
    {
      citation: "Brooks, F. P., Jr.",
      source:
        "The Design of Design: Essays from a Computer Scientist. Addison-Wesley Professional, ISBN: 978-0-201-36298-5",
      year: 2010,
      url: "https://doi.org/10.5555/1815159",
      keyFinding:
        "Argued that software engineering excellence demands conceptual integrity, which requires intentional architectural trade-offs that can only be evaluated by inspecting structural cohesion.",
    },
  ],
};
