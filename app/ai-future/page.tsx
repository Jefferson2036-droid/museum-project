import { ChapterHero, ChapterSection } from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";

const recordCards = [
  {
    label: "ETHOS // SHIFT",
    title: "Probabilistic Syntax",
    summary:
      "The fundamental truth of the AI Future is the definitive move from deterministic, bracket-heavy code to probabilistic generation[cite: 882, 994]. In this era, the 'Veritas' of software is no longer found in perfect syntax but in the latent space of human intent[cite: 894]. We no longer ask if a piece of code is strictly correct according to a rigid compiler, but rather if it is the most likely and effective solution synthesized from a prompt[cite: 886].",
  },
  {
    label: "CONCEPT // AUGMENTATION",
    title: "AI-Augmented Workflows",
    summary:
      "AI-augmented development acts as a multimodal 'partnership' where automated tools reduce the cognitive load of engineers by handling repetitive boilerplate tasks[cite: 769, 771]. This shift allows human experts to focus on the high-level conceptual tasks that computers cannot yet master[cite: 770]. It recognizes that while AI provides exponential speed, humans must remain the essential guides who provide purposeful application and critical critique[cite: 752, 835].",
  },
  {
    label: "ARTIFACT // AGENTS",
    title: "Autonomous Agents",
    summary:
      "The emergence of autonomous multi-agent systems, such as ChatDev, represents a future where the boundaries between design, coding, and testing overlap and eventually disappear[cite: 1008, 1014]. These agentic ecosystems can plan and execute complex software engineering tasks with minimal human oversight, creating a parallelized flow of development[cite: 1008]. This allows for the rapid generation of entire proof-of-concepts, significantly increasing productivity in repetitive or template-based domains[cite: 969, 1001].",
  },
  {
    label: "INTERFACE // HUMAN",
    title: "Natural Language Programming",
    summary:
      "In the next frontier, natural language becomes the ultimate high-level programming language, democratizing the act of creation for millions[cite: 964, 974]. AI enables those without traditional coding skills to manifest software through zero-shot or no-code platforms[cite: 964, 994]. This shift flips the traditional economies of scale in development, allowing human intent to drive the machine directly, though it necessitates new roles focused on the 'Truth' of prompt-driven iterative design[cite: 826, 894].",
  },
  {
    label: "PHASE // SUSTAIN",
    title: "Predictive Maintenance",
    summary:
      "AI-augmented engineering moves beyond reactive bug-fixing into a state of predictive, self-healing sustainment[cite: 892, 995]. Systems can now crawl their own codebases to identify fix patterns, localize potential crashes, and automatically suggest or apply patches before a failure is ever reported by a user[cite: 779, 821]. This 'self-adaptive' process uses historical data to reflect on its own performance, ensuring that the software heals in real-time as the underlying environment evolves[cite: 893].",
  },
  {
    label: "ARTIFACT // TRACEABILITY",
    title: "Synthesized Documentation",
    summary:
      "The AI Future solves the age-old crisis of disconnected information by using Large Language Models to synthesize real-time documentation from raw code[cite: 780, 995]. By improving requirement traceability through natural language processing, LLMs bridge the gap between technical logic and human understanding[cite: 780]. This ensures that the 'Truth' of the system's purpose remains accessible to all stakeholders, even as the underlying code evolves at an exponential and complex pace[cite: 824, 1002].",
  },
  {
    label: "PRINCIPLE // VELOCITY",
    title: "Zero-Shot Construction",
    summary:
      "Zero-shot construction represents a breakthrough where entire functional modules are generated from a single prompt, redefining the speed of software creation[cite: 1001, 1030]. This capability is particularly effective for generating boilerplate and refactoring legacy codebases in seconds[cite: 1001, 1002]. By bypassing weeks of manual construction and design, AI allows for a 'clean slate' approach to development where the machine synthesizes logic based on the vast unlabeled data of its foundation model[cite: 750, 1055].",
  },
  {
    label: "TECH // DISCOVERY",
    title: "Semantic Search & Retrieval",
    summary:
      "Modern code discovery has moved from simple keyword matching to deep semantic understanding[cite: 990, 995]. AI-based tools allow developers to find logic based on the 'meaning' and 'context' of their query rather than specific characters, leveraging neural networks to navigate complex repositories[cite: 990]. This improves developer efficiency by providing contextually relevant recommendations and ensuring that existing digital assets are reused effectively across the organizational ecosystem[cite: 986, 1002].",
  },
  {
    label: "CONCEPT // CHALLENGE",
    title: "The Interpretability Gap",
    summary:
      "A significant challenge in the AI-augmented era is the 'Interpretability Gap,' where the logic generated by foundation models remains hidden within the latent space of a neural network[cite: 750, 829]. This opacity makes it difficult to guarantee security, performance, and conformance to intended architectures[cite: 829, 832]. The Sage warns that we must not lose focus on system quality; we need hybrid tooling that can critique and verify AI-generated output to maintain technical and ethical control[cite: 765, 767].",
  },
  {
    label: "ETHOS // ADAPTATION",
    title: "Continuous Evolution",
    summary:
      "The AI Future envisions a 'self-validating' development process where software is no longer a static product but a continuously evolving entity[cite: 892, 962]. By catching and fixing errors in real-time and recommending improvements during the design phase, the system adapts to user interaction data without extensive manual assurance[cite: 892, 893]. This reflects a turning point where AI empowers improvements in correctness, scale, and timeliness, provided humans remain expert enough to oversee the evolution[cite: 882, 1022].",
  },
];

const storyCards = [
  {
    label: "NARRATIVE // LIBERATION",
    title: "The End of 'Boilerplate'",
    summary:
      "For decades, software engineers were burdened by the mechanical labor of writing repetitive, manual boilerplate code[cite: 936, 1001]. The 'Truth' of the AI Future is the liberation of these developers, as LLMs take over the mundane tasks of generation and configuration[cite: 972, 988]. This allows humans to ascend to the role of the 'Reflective Engineer,' focusing on the high-level creativity and complex orchestration that remains beyond the current reach of generative AI[cite: 894, 1003].",
  },
  {
    label: "NARRATIVE // WARNING",
    title: "The Hallucination Incident",
    summary:
      "Despite the promise of 10x productivity, the Sage offers a stern warning: 'A fool with a tool is still a fool'[cite: 738, 753]. The narrative of the AI era includes instances of 'hallucination,' where probabilistic logic generates plausible but entirely incorrect or insecure code[cite: 822, 938]. This historical lesson teaches us that AI is an intern we do not yet entirely trust; it requires an expert human hand to critique the output and anchor it to reality[cite: 772, 835].",
  },
  {
    label: "NARRATIVE // ROLE",
    title: "The Rise of the Prompt Engineer",
    summary:
      "A new role has emerged in the museum of process: the master of the instruction[cite: 965, 1022]. As AI assumes more roles in implementation and testing, the developer's primary tool becomes the prompt[cite: 894, 1020]. Success in this era is defined by the ability to orchestrate multi-agent workflows and design prompts that lead to deterministic results from probabilistic models, marking a definitive shift from syntax mastery to architectural intent[cite: 894, 1008].",
  },
  {
    label: "NARRATIVE // SCALE",
    title: "The Open Source Explosion",
    summary:
      "AI-augmented tools have lowered the barriers to entry so dramatically that the world has seen an explosion in open-source contributions[cite: 855, 964]. By providing real-time assistance and code completion capabilities, AI has enabled a new generation of 'citizen developers' to participate in the digital economy[cite: 822, 964]. This democratization ensures that the creation of software is no longer a walled garden, but a global collective effort powered by shared foundation models[cite: 750, 974].",
  },
  {
    label: "NARRATIVE // VISION",
    title: "The Automated Architect",
    summary:
      "The 'Automated Architect' is a vision of a future where AI understands the deep contextual interdependencies of a system better than any single human could[cite: 832, 1021]. This agentic entity can manage ripple effects across decision boundaries and manage complexity at a scale of 10x or more[cite: 825, 832]. It represents the move toward a 'self-adaptive' frontier where the machine and human work in a collaborative partnership to maintain long-term integrity[cite: 771, 893].",
  },
  {
    label: "NARRATIVE // RECOVERY",
    title: "The Technical Debt Purge",
    summary:
      "In the AI Future, the decades of 'spaghetti code' and legacy technical debt that slowed global progress are finally being purged[cite: 1053, 1089]. Generative AI tools are uniquely suited to refactoring old, undocumented systems into modern, efficient architectures[cite: 1002, 1053]. By interpreting the 'Truth' hidden in legacy APIs and outdated languages, AI serves as the ultimate renewal tool, allowing organizations to leap from the Waterfall past into an automated future[cite: 1053, 1054].",
  },
];

const profileCards = [
  {
    label: "INSTITUTION // FOUNDATION",
    title: "OpenAI & The Model Labs",
    summary:
      "OpenAI and other research laboratories defined the initial 'Veritas' of the AI era through the release of foundational models like GPT-3 and GPT-4[cite: 967, 974]. These institutions catalyzed a phenomenal adoption speed within the software community, proving that foundation models could be adapted to hundreds of diverse applications[cite: 750, 1091]. Their research into generative AI has forced every organization to re-evaluate their expectations and shift toward AI-augmented development[cite: 747, 750].",
  },
  {
    label: "INSTITUTION // PLATFORM",
    title: "GitHub & The Copilot Era",
    summary:
      "GitHub, alongside Microsoft, institutionalized AI-augmented programming by integrating LLMs directly into the developer's fingers through Copilot[cite: 835, 988]. This platform proved that AI could act as a sophisticated pair programmer, providing 'on-the-fly' code completion and ideation[cite: 773, 822]. By scaling these tools to millions, they have effectively flipped the economies of scale, making expertise more accessible while emphasizing the need for critical human critique[cite: 826, 835].",
  },
  {
    label: "INSTITUTION // SCHOLARSHIP",
    title: "IEEE & The Research Collectives",
    summary:
      "Professional bodies like the IEEE and ACM have become the curators of the AI transition, documenting the record number of submissions and shifts in software engineering conferences[cite: 745, 755]. Through peer-reviewed scholarship, they address the critical questions of security, ethics, and the evolution of skills required in an AI-augmented world[cite: 751, 829]. They provide the reliable information needed to navigate this 'we don't know what we do not know' period[cite: 746, 755].",
  },
  {
    label: "INSTITUTION // DEMOCRACY",
    title: "The Open Source AI Community",
    summary:
      "The global Open Source community, through decentralized collectives and repositories, ensures that the 'Truth' of AI remains democratized and transparent[cite: 855, 1086]. By developing open versions of LLMs and multi-agent frameworks like ChatDev, they prevent the future of software from being controlled by a few corporate entities[cite: 1008, 1086]. This collective institution ensures that the ethical, social, and technical implications of AI are evaluated by a diverse audience[cite: 938, 1023].",
  },
];

const aiFutureRecordArtwork = [
  "/media/generated/openai-public-ai.webp",
  "/media/generated/era-7-foundation-models.webp",
  "/media/generated/transformer-paper.webp",
  "/media/generated/backpropagation-paper.webp",
  "/media/generated/representation-learning-bridge.webp",
  "/media/generated/latent-space-landscape-v1.webp",
  "/media/generated/imagenet-moment.webp",
  "/media/generated/era-6-deep-learning.webp",
  "/media/generated/era-5-statistical-revival.webp",
  "/media/generated/era-4-expert-systems.webp",
];

const aiFutureStoryArtwork = [
  "/media/generated/section-divider-chronology.webp",
  "/media/generated/era-1-visual-break.webp",
  "/media/generated/era-2-visual-break.webp",
  "/media/generated/era-3-visual-break.webp",
  "/media/generated/era-4-visual-break.webp",
  "/media/generated/era-5-visual-break.webp",
];

const aiFutureProfileArtwork = [
  "/media/generated/era-7-visual-break.webp",
  "/media/generated/era-6-visual-break.webp",
  "/media/generated/dartmouth-proposal.webp",
  "/media/generated/lighthill-report.webp",
];

const aiFutureRecordItems = recordCards.map((card, index) => ({
  key: card.title,
  meta: card.label,
  title: card.title,
  description: card.summary,
  imageUrl: aiFutureRecordArtwork[index],
  imageAlt: `AI Future image for ${card.title}`,
}));

const aiFutureStoryItems = storyCards.map((card, index) => ({
  key: card.title,
  meta: card.label,
  title: card.title,
  description: card.summary,
  imageUrl: aiFutureStoryArtwork[index],
  imageAlt: `AI Future story image for ${card.title}`,
}));

const aiFutureProfileItems = profileCards.map((card, index) => ({
  key: card.title,
  meta: card.label,
  title: card.title,
  description: card.summary,
  imageUrl: aiFutureProfileArtwork[index],
  imageAlt: `AI Future institutional image for ${card.title}`,
}));

export default function AiFuturePage() {
  return (
    <main
      className="container mx-auto py-12 px-6"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <ChapterHero
        eyebrow="AI Future"
        title="AI FUTURE"
        lede="This page explores forward-looking ideas in the AI Future section of the Museum of Modern Lab archive."
      />

      <ChapterSection
        id="era-records"
        eyebrow="ERA RECORDS"
        title="ERA RECORDS"
      >
        <EditorialCardGrid items={aiFutureRecordItems} cardClassName="p-8" />
      </ChapterSection>

      <ChapterSection
        id="story-cards"
        eyebrow="STORY CARDS"
        title="STORY CARDS"
      >
        <EditorialCardGrid items={aiFutureStoryItems} cardClassName="p-8" />
      </ChapterSection>

      <ChapterSection
        id="institutional-profiles"
        eyebrow="INSTITUTIONAL PROFILES"
        title="INSTITUTIONAL PROFILES"
      >
        <EditorialCardGrid items={aiFutureProfileItems} cardClassName="p-8" />
      </ChapterSection>
    </main>
  );
}
