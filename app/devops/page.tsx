import { ChapterHero, ChapterSection } from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";

const recordCards = [
  {
    label: "ETHOS // CONTINUITY",
    title: "The Infinite Loop",
    summary:
      "The fundamental truth of the DevOps era is encapsulated in the infinity loop, a symbol representing the total collapse of traditional boundaries between development and operations. It suggests that software is never truly finished, but exists in a state of constant, rhythmic evolution—a single, breathing organism where planning, coding, and deployment occur in a seamless, recurring cycle that eliminates the wasteful siloes of previous industrial software decades.",
  },
  {
    label: "ARTIFACT // AUTOMATION",
    title: "Infrastructure as Code",
    summary:
      "Infrastructure has transitioned from the physical burden of manual server management to a digital, script-based reality. In this ethos, environments are no longer hand-crafted artifacts but are summoned and destroyed with mathematical precision using code. This automation ensures that the environment itself is a version-controlled truth, allowing for rapid scaling and the elimination of human inconsistency in the provisioning of global digital infrastructure.",
  },
  {
    label: "PHASE // MERGE",
    title: "Continuous Integration",
    summary:
      "Continuous Integration serves as the daily ritual of frequent code merging, designed to prevent the 'integration hell' that plagued the long-cycle Waterfall era. By integrating multiple times a day into a shared repository, developers ensure their logic is constantly validated against the work of the collective. This practice relies on automated builds and tests to identify conflicts immediately, maintaining a state of perpetual readiness and high-quality logic.",
  },
  {
    label: "PHASE // RELEASE",
    title: "Continuous Deployment",
    summary:
      "Continuous Deployment represents the ultimate realization of velocity, where a code change from a developer's workstation is automatically carried through a rigorous pipeline into a live production environment without human hesitation. This automated flow relies on a series of sophisticated gates that verify the 'Truth' of the code's performance and security before it reaches the end-user, ensuring that value is delivered at the speed of modern digital commerce.",
  },
  {
    label: "PHASE // OBSERVE",
    title: "The Monitoring Pulse",
    summary:
      "DevOps demands a state of constant observation through real-time telemetry, where the system perpetually reports its own health, performance metrics, and internal truth to its creators. This pulse acts as a critical feedback loop, informing the next planning cycle and allowing teams to identify and remediate issues before they manifest as outages. It is the practice of listening to the machine to ensure it remains true to its intended purpose.",
  },
  {
    label: "CONCEPT // MODULARITY",
    title: "Microservices Architecture",
    summary:
      "The shift to microservices involved breaking the massive, rigid monolith into a collection of small, independent services that communicate across the digital void. Each service owns a specific functional truth and can be deployed, scaled, and updated without affecting the entire system. This modularity allows for greater agility and resilience, as the failure of one small component no longer necessitates the collapse of the entire software ecosystem.",
  },
  {
    label: "ARTIFACT // DOCKER",
    title: "Containerization",
    summary:
      "Containerization established the 'Truth' of portable environments, ensuring that software behaves identically regardless of the underlying infrastructure it inhabits. By packaging code with its exact dependencies and configurations into a single container, developers finally solved the age-old crisis of environmental drift. This consistency is the backbone of modern cloud-native development, allowing for the fluid movement of logic between different providers and edge computing environments worldwide.",
  },
  {
    label: "PRINCIPLE // VELOCITY",
    title: "Shift Left Testing",
    summary:
      "The 'Shift Left' principle dictates that quality assurance and security must move to the very beginning of the development lifecycle, rather than being an afterthought at the end of the project. By embedding tests into the initial coding steps, developers catch flaws before they manifest into reality. This proactive approach reduces rework and ensures that the final output is secure and functional by design, increasing the overall velocity of the pipeline.",
  },
  {
    label: "CONCEPT // RESILIENCE",
    title: "Automated Rollbacks",
    summary:
      "Automated rollbacks represent the power of resilience within production, where failure is accepted as a possibility but is immediately corrected by automated logic. If a new deployment triggers an error, the system automatically reverts to the last known 'True' state without human intervention. This mechanism minimizes downtime and protects the user experience, allowing teams to deploy with confidence knowing the system can self-heal in the face of unexpected conflicts.",
  },
  {
    label: "ETHOS // UNITY",
    title: "The Silo Collapse",
    summary:
      "The cultural heart of DevOps is the collapse of the historical silos that once separated developers from operations teams. It represents a transformation where everyone shares the same burden of truth and responsibility for the system's success. This unity fosters a culture of shared knowledge and collective accountability, ensuring that the 'Truth' of the software is understood from both a creative and an operational perspective throughout its entire lifespan.",
  },
];

const storyCards = [
  {
    label: "NARRATIVE // CONFLICT",
    title: "The Wall of Confusion",
    summary:
      "Historically, the relationship between development and operations was defined by a 'Wall of Confusion' where code was simply thrown over the barrier once completed. Developers focused on change and features, while operations focused on stability and uptime, leading to intense conflict and a total lack of empathy. DevOps was born as a direct solution to this crisis, aiming to tear down that wall and replace it with shared goals.",
  },
  {
    label: "NARRATIVE // BREAKTHROUGH",
    title: "The 10 Deploys a Day",
    summary:
      "In 2009, a landmark presentation at the Velocity conference challenged the industry's perception of what was humanly possible by demonstrating ten successful deploys in a single day. This breakthrough shattered the Waterfall belief that frequent changes invited disaster. It proved that through automation and collaboration, high-frequency releases could actually lead to more stable systems, marking a turning point in the history of software delivery.",
  },
  {
    label: "NARRATIVE // ANALOGY",
    title: "The Phoenix Project",
    summary:
      "Drawing on the logic of manufacturing plants, the DevOps movement adopted 'The Three Ways'—Flow, Feedback, and Continual Learning—as described in the influential narrative of The Phoenix Project. This story reframes software development not as a craft project but as an industrial process that can be optimized through the removal of bottlenecks and the management of work-in-progress. It applies the 'Truth' of Lean manufacturing to digital workflows.",
  },
  {
    label: "NARRATIVE // STRENGTH",
    title: "The Chaos Monkey",
    summary:
      "Netflix pioneered the 'Truth' that the only way to ensure a system is truly resilient is to constantly try to break it in production. By unleashing the 'Chaos Monkey'—a tool that randomly shuts down services—engineers are forced to build systems that can withstand failure automatically. This radical transparency ensures that the system is always prepared for the worst-case scenario, turning unpredictable chaos into a controlled and understood variable.",
  },
  {
    label: "NARRATIVE // CULTURE",
    title: "The Blameless Post-Mortem",
    summary:
      "The transition to DevOps introduced the narrative of the 'Blameless Post-Mortem,' shifting the focus from finding 'who' failed to understanding 'how' the system failed. This cultural truth acknowledges that human error is often a symptom of a deeper systemic flaw. By removing the fear of punishment, teams can speak the truth about technical failures, leading to better root-cause analysis and long-term prevention of recurring issues.",
  },
  {
    label: "NARRATIVE // EXPERIENCE",
    title: "The Burnout Era",
    summary:
      "Before the rise of DevOps and automated pipelines, the era was defined by the human cost of 'death marches' and 3 AM pager calls. Software releases were rare, high-stress events that often required entire weekends of manual labor and debugging. The 'Sage' looks back on this era as a warning, emphasizing that automation is not just about speed, but about preserving the health and creativity of the humans who build the world.",
  },
];

const profileCards = [
  {
    label: "INSTITUTION // ORIGIN",
    title: "The Agile Manifesto Group",
    summary:
      "In 2001, a group of seventeen thinkers met to define a more iterative 'Truth' for software development, planting the seeds for what would eventually become the DevOps movement. Their manifesto prioritized individuals and interactions over processes and tools, and responding to change over following a plan. This institutional shift provided the philosophical foundation for the agile, feedback-driven workflows that define modern software engineering today.",
  },
  {
    label: "INSTITUTION // PIONEERS",
    title: "The Puppet & Chef Labs",
    summary:
      "Early startups like Puppet and Chef were the first institutions to prove the 'Truth' that infrastructure could—and should—be managed like code. They provided the tools that allowed system administrators to automate their repetitive tasks and version-control their server configurations. These pioneers effectively turned the manual labor of the 'SysAdmin' into the automated discipline of the 'DevOps Engineer,' changing the industry's workforce and expectations forever.",
  },
  {
    label: "INSTITUTION // INFRASTRUCTURE",
    title: "Amazon Web Services (AWS)",
    summary:
      "AWS provided the infinite playground of compute that made the DevOps movement a global reality. By offering infrastructure as a utility, they allowed teams to move with a speed and scale previously reserved for giant tech firms. The 'Truth' of the cloud—elasticity, pay-as-you-go, and API-driven everything—became the fundamental infrastructure that enabled the continuous delivery pipelines and rapid experimentation of the modern era.",
  },
  {
    label: "INSTITUTION // DISCIPLINE",
    title: "Google SRE Teams",
    summary:
      "Google formalized the 'Truth' of managing complex systems at scale through the discipline of Site Reliability Engineering (SRE). By defining reliability as a feature and using error budgets to balance speed and stability, Google provided a blueprint for how organizations can implement the DevOps ethos with mathematical rigor. SRE remains the ultimate institutional implementation of the idea that operations is essentially a software engineering problem.",
  },
];

const devopsRecordArtwork = [
  "/media/wikimedia/hero-1.webp",
  "/media/wikimedia/hero-2.webp",
  "/media/wikimedia/hero-3.webp",
  "/media/wikimedia/gettyimages-2165671866-640x640.jpg",
  "/media/generated/era-7-foundation-models.webp",
  "/media/generated/transformer-paper.webp",
  "/media/generated/backpropagation-paper.webp",
  "/media/generated/representation-learning-bridge.webp",
  "/media/generated/latent-space-landscape-v1.webp",
  "/media/generated/imagenet-moment.webp",
];

const devopsStoryArtwork = [
  "/media/generated/section-divider-chronology.webp",
  "/media/generated/era-1-visual-break.webp",
  "/media/generated/era-2-visual-break.webp",
  "/media/generated/era-3-visual-break.webp",
  "/media/generated/era-4-visual-break.webp",
  "/media/generated/era-5-visual-break.webp",
];

const devopsProfileArtwork = [
  "/media/generated/openai-public-ai.webp",
  "/media/generated/era-6-deep-learning.webp",
  "/media/generated/era-5-statistical-revival.webp",
  "/media/generated/era-4-expert-systems.webp",
];

const devopsRecordItems = recordCards.map((card, index) => ({
  key: card.title,
  meta: card.label,
  title: card.title,
  description: card.summary,
  imageUrl: devopsRecordArtwork[index],
  imageAlt: `DevOps image for ${card.title}`,
}));

const devopsStoryItems = storyCards.map((card, index) => ({
  key: card.title,
  meta: card.label,
  title: card.title,
  description: card.summary,
  imageUrl: devopsStoryArtwork[index],
  imageAlt: `DevOps story image for ${card.title}`,
}));

const devopsProfileItems = profileCards.map((card, index) => ({
  key: card.title,
  meta: card.label,
  title: card.title,
  description: card.summary,
  imageUrl: devopsProfileArtwork[index],
  imageAlt: `DevOps institutional image for ${card.title}`,
}));

export default function DevopsPage() {
  return (
    <main
      className="container mx-auto py-12 px-6"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <ChapterHero
        eyebrow="DevOps"
        title="DEVOPS"
        lede="This page covers the DevOps chapter in the Museum of Modern Lab archive."
      />

      <ChapterSection
        id="era-records"
        eyebrow="ERA RECORDS"
        title="ERA RECORDS"
      >
        <EditorialCardGrid items={devopsRecordItems} cardClassName="p-8" />
      </ChapterSection>

      <ChapterSection
        id="story-cards"
        eyebrow="STORY CARDS"
        title="STORY CARDS"
      >
        <EditorialCardGrid items={devopsStoryItems} cardClassName="p-8" />
      </ChapterSection>

      <ChapterSection
        id="institutional-profiles"
        eyebrow="INSTITUTIONAL PROFILES"
        title="INSTITUTIONAL PROFILES"
      >
        <EditorialCardGrid items={devopsProfileItems} cardClassName="p-8" />
      </ChapterSection>
    </main>
  );
}
