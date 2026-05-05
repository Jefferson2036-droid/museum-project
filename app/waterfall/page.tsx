import type { Metadata } from "next";

import { ChapterHero, ChapterSection } from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";

export const metadata: Metadata = {
  title: "Waterfall: The Linear SDLC",
  description:
    "A focused gallery on the Waterfall method: its phases, artifacts, and institutional setting.",
};

const recordCards = [
  {
    eraLabel: "ETHOS // STRUCTURE",
    title: "Sequential Flow",
    summary:
      "Sequential flow is the founding gesture of Waterfall: a belief that software work gains credibility when it moves in a fixed order and each handoff closes the previous chapter. The model turns uncertainty into a sequence of approvals, where analysis, design, coding, testing, and release are treated as separate rooms in one museum of process. That structure brought clarity to large projects, but it also made discovery expensive, because every new insight had to travel back through a chain that preferred completion over revision.",
  },
  {
    eraLabel: "PHASE // ANALYSIS",
    title: "Requirements Analysis [cite: 3]",
    summary:
      "Requirements analysis treated the project brief as the most authoritative object in the room. Teams gathered interviews, regulations, workflows, and exceptions, then converted that material into a document meant to survive the entire lifecycle unchanged. The promise was certainty: if every need was captured early, the rest of the project could proceed like a solved equation. In practice, the phase created a powerful illusion of completeness, because real users, business priorities, and technical limits continued to evolve after the paper had already been signed.",
  },
  {
    eraLabel: "PHASE // DESIGN",
    title: "Technical Design [cite: 3]",
    summary:
      "Technical design translated the approved requirements into an architecture that could be handed to implementation teams as a precise blueprint. Its strength was discipline: interfaces, data flows, modules, and dependencies were defined before code existed, which reduced improvisation and made ownership legible. The weakness was distance from the running system. A design could appear perfectly rational on paper while still hiding awkward constraints, integration gaps, or assumptions that only become visible when the software is actually assembled and used.",
  },
  {
    eraLabel: "PHASE // CODING",
    title: "Coding Implementation [cite: 3]",
    summary:
      "Coding implementation was framed as disciplined transcription rather than exploration. Once the design was approved, developers were expected to realize it faithfully and avoid re-litigating earlier decisions. That expectation produced a clear chain of responsibility and made schedule planning easier, yet it also suppressed the feedback that emerges when programmers notice flaws in the model itself. The codebase became the place where abstraction met reality, and any mismatch between the two often stayed hidden until much later phases exposed it under pressure.",
  },
  {
    eraLabel: "PHASE // TESTING",
    title: "Verification Testing [cite: 3]",
    summary:
      "Verification testing acted as the last formal gate before a system could claim readiness. Its job was to prove that the delivered product matched the approved specification, not to rethink the specification itself. That made testing a powerful quality filter, but also a stressful moment of revelation, because the team often encountered the first complete integration only after months of isolated work. When failures surfaced, they frequently traced back not to a single defect, but to silent disagreements between phases that had never been challenged earlier.",
  },
  {
    eraLabel: "PHASE // DEPLOYMENT",
    title: "System Deployment [cite: 3]",
    summary:
      "System deployment in Waterfall was a ceremonial moment that marked the end of the project rather than the beginning of ongoing delivery. The software crossed a boundary from controlled development into live use, and that crossing was supposed to validate the entire upstream process. Because everything had been planned in advance, deployment was imagined as a clean arrival. Yet the moment a system entered the world, it confronted messy operational conditions, user behavior, and institutional constraints that no specification could fully predict.",
  },
  {
    eraLabel: "PHASE // MAINTENANCE",
    title: "Long-term Maintenance [cite: 3]",
    summary:
      "Long-term maintenance revealed the real lifespan of Waterfall systems. After deployment, teams were responsible for correcting defects, adapting to hardware shifts, and keeping the original architecture alive long after its assumptions had aged. This phase often became the most expensive part of the lifecycle because the system had to be altered without the benefit of the original context, the original team, or the original documentation fidelity. Maintenance therefore exposed the cost of treating software as finished, even though it kept changing under operational pressure.",
  },
  {
    eraLabel: "ARTIFACT // EVIDENCE",
    title: "Documentation Evidence [cite: 3]",
    summary:
      "Documentation evidence was the museum object Waterfall trusted most. Plans, specifications, review minutes, and manuals stood in for the software itself, proving that work had happened even when the system was not yet visible or usable. That archive created accountability and continuity, especially on large projects with many stakeholders. It also encouraged a culture where the proof of progress mattered as much as the progress itself, which meant teams could become highly skilled at producing artifacts while remaining distant from the behavior of the running program.",
  },
  {
    eraLabel: "PRINCIPLE // RIGIDITY",
    title: "Cost of Change [cite: 3]",
    summary:
      "The cost of change was the economic logic that justified Waterfall’s rigidity. A late correction could ripple through documents, designs, code, tests, schedules, and procurement, so the model tried to push uncertainty into the earliest possible phase. That philosophy was useful in environments where mistakes were extraordinarily expensive, but it also turned adaptation into a threat. The deeper a project advanced, the more change felt like damage control instead of learning, which made the process stable but slow to respond to reality.",
  },
  {
    eraLabel: "CONCEPT // SCOPE",
    title: "System Boundaries [cite: 3]",
    summary:
      "System boundaries defined the visible edge of the project: what the software would include, what it would exclude, and which responsibilities belonged elsewhere. By freezing that edge early, Waterfall made budgeting and planning feel controllable, which was crucial for institutions that needed clear commitments. The tradeoff was that boundaries were treated as fixed even when the work itself discovered adjacent needs, overlooked users, or dependencies that should have been inside the frame from the beginning. The boundary became both a guide and a constraint on imagination.",
  },
];

const storyCards = [
  {
    title: "Industrial Mirror",
    meta: "NARRATIVE // ORIGIN",
    description:
      "The industrial mirror story explains why Waterfall felt so persuasive to early software organizations. Managers borrowed the mental model of factories, bridges, and assembly lines because those systems were already understood as reliable, inspectable, and governable. Software was recast as if it were another manufactured artifact that could be specified in advance and then assembled in sequence. That analogy provided legitimacy and confidence, but it also blurred the difference between physical materials, which resist change, and code, which can be reworked instantly.",
  },
  {
    title: "Royce's Warning [cite: 4]",
    meta: "NARRATIVE // TRUTH",
    description:
      "Royce’s warning remains one of the most important ironies in software history because the model that became famous was also the one its own source cautioned against. His paper did not simply bless a straight line from requirements to release; it described the danger of such a line and pointed toward iteration as a necessary corrective. The warning mattered because it named the failure mode in advance: a process can appear orderly while quietly accumulating assumptions that only become visible after momentum has made them costly to change.",
  },
  {
    title: "Architect-Coder Divide [cite: 4]",
    meta: "NARRATIVE // ROLES",
    description:
      "The architect-coder divide turned software development into a hierarchy of thought and execution. Architectural work was treated as the prestigious act of making decisions, while coding was treated as the lower-status task of carrying them out. That split could clarify responsibility on large teams, but it also isolated the people nearest to technical reality from the decisions that shaped their work. The result was a weakened feedback loop, because the developers who understood implementation constraints best were often the least empowered to influence the design itself.",
  },
  {
    title: "Integration Crisis [cite: 3]",
    meta: "NARRATIVE // CONFLICT",
    description:
      "Integration crisis is the moment when Waterfall’s silence becomes expensive. Separate teams may have implemented their modules faithfully, yet the interfaces between those modules often contain incompatible assumptions, naming mismatches, timing errors, or hidden dependencies. Because the system is only assembled late, these disagreements erupt all at once and are hard to localize. The crisis is not just technical; it is organizational, because the process has delayed cross-team learning until the cost of coordination is already at its peak.",
  },
  {
    title: "The Long Wait [cite: 4]",
    meta: "NARRATIVE // EXPERIENCE",
    description:
      "The long wait shaped the emotional experience of Waterfall for everyone outside the core project team. Users could spend months or years discussing needs, then see no working software until very late in the schedule. That delay made the delivered system feel like a reveal rather than a collaboration, and it often meant the organization had changed before the product arrived. The wait was tolerable only when the project’s certainty was valued more than its responsiveness, which is why it became a defining cost of the model.",
  },
  {
    title: "The Frozen Requirement [cite: 4]",
    meta: "NARRATIVE // STASIS",
    description:
      "The frozen requirement is the cautionary image of a plan that has been protected for so long that it no longer reflects the world it is meant to serve. Waterfall often encouraged teams to defend the document instead of the product, because admitting change could threaten budget, schedule, and authority. That created perverse incentives: a requirement might remain in place simply because it was approved early, even if every later signal suggested it was wrong. The freeze preserved order, but often at the expense of usefulness.",
  },
];

const profileCards = [
  {
    name: "Dept of Defense [cite: 4]",
    role: "INSTITUTION // MILITARY",
    summary:
      "The Department of Defense helped transform Waterfall from a management idea into a contractual expectation. By requiring traceable documentation, milestone reviews, and formal approvals, the DoD created a world in which software vendors had to speak the language of process in order to win work. That pressure made Waterfall feel like the responsible choice for large, high-stakes systems. It was especially attractive in defense contexts because auditability and predictability mattered as much as raw technical elegance.",
  },
  {
    name: "IBM Labs [cite: 4]",
    role: "INSTITUTION // INDUSTRY",
    summary:
      "IBM Labs embodied the scale and discipline that made Waterfall feel normal inside enterprise computing. Mainframe projects demanded coordination across large teams, expensive hardware, and long development timelines, so formal planning and review structures became valuable tools for reducing chaos. IBM’s influence mattered not just because of the software it built, but because it modeled a professional identity around rigor, documentation, and centralized control. That identity spread widely across the industry and helped define what serious software engineering looked like.",
  },
  {
    name: "Academic Formalism [cite: 4]",
    role: "INSTITUTION // ACADEMIA",
    summary:
      "Academic formalism gave Waterfall a theory of legitimacy. Universities treated software more and more like a branch of engineering that could be reasoned about through proofs, models, and well-structured plans. That intellectual posture encouraged students to believe that a system could be mastered through sufficient analysis before implementation began. The approach was valuable for teaching rigor and precision, but it also reinforced the idea that execution should merely confirm earlier reasoning rather than continuously reshape it through contact with reality.",
  },
  {
    name: "Enterprise Banking [cite: 4]",
    role: "INSTITUTION // CORPORATE",
    summary:
      "Enterprise banking was a natural habitat for Waterfall because the sector values trust, auditability, and predictable delivery more than experimentation. When systems manage money, compliance, and customer records, leaders often prefer a process that promises formal control and clear sign-off chains. Waterfall matched that appetite by making change visible and costly, which reassured executives even when the market was moving quickly. The approach did not eliminate risk, but it made the risk legible in a way banking institutions were designed to understand.",
  },
];

const waterfallArtwork = [
  "/media/generated/dartmouth-proposal.webp",
  "/media/generated/lighthill-report.webp",
  "/media/generated/shannon-theseus-maze.webp",
  "/media/generated/era-1-precursors.webp",
  "/media/generated/era-2-field-formation.webp",
  "/media/generated/era-3-symbolic-programs.webp",
  "/media/generated/era-4-expert-systems.webp",
  "/media/generated/era-5-statistical-revival.webp",
  "/media/generated/era-6-deep-learning.webp",
  "/media/generated/era-7-foundation-models.webp",
];

const waterfallStoryArtwork = [
  "/media/generated/section-divider-chronology.webp",
  "/media/generated/era-1-visual-break.webp",
  "/media/generated/era-2-visual-break.webp",
  "/media/generated/era-3-visual-break.webp",
  "/media/generated/era-4-visual-break.webp",
  "/media/generated/era-5-visual-break.webp",
];

const waterfallProfileArtwork = [
  "/media/generated/openai-public-ai.webp",
  "/media/generated/representation-learning-bridge.webp",
  "/media/generated/latent-space-landscape-v1.webp",
  "/media/generated/transformer-paper.webp",
];

const waterfallRecordItems = recordCards.map((card, index) => ({
  key: card.title,
  meta: card.eraLabel,
  title: card.title,
  description: card.summary,
  imageUrl: waterfallArtwork[index],
  imageAlt: `Waterfall archive image for ${card.title}`,
}));

const waterfallStoryItems = storyCards.map((card, index) => ({
  key: card.title,
  meta: card.meta,
  title: card.title,
  description: card.description,
  imageUrl: waterfallStoryArtwork[index],
  imageAlt: `Waterfall narrative image for ${card.title}`,
}));

const waterfallProfileItems = profileCards.map((card, index) => ({
  key: card.name,
  meta: card.role,
  title: card.name,
  description: card.summary,
  imageUrl: waterfallProfileArtwork[index],
  imageAlt: `Waterfall institutional image for ${card.name}`,
}));

export default function WaterfallPage() {
  return (
    <main className="container mx-auto py-12 px-6">
      <ChapterHero
        eyebrow="Waterfall"
        period="1970s–1990s"
        title="The Waterfall Method"
        lede="A linear, sequential software development life cycle model where each phase is completed before the next begins. Emphasizes upfront specification, handed-off responsibilities, and milestone-driven reviews."
      />

      <ChapterSection
        id="era-records"
        eyebrow="ERA RECORDS"
        title="ERA RECORDS"
      >
        <EditorialCardGrid items={waterfallRecordItems} cardClassName="p-8" />
      </ChapterSection>

      <ChapterSection
        id="story-cards"
        eyebrow="STORY CARDS"
        title="STORY CARDS"
      >
        <EditorialCardGrid items={waterfallStoryItems} cardClassName="p-8" />
      </ChapterSection>

      <ChapterSection
        id="institutional-profiles"
        eyebrow="INSTITUTIONAL PROFILES"
        title="INSTITUTIONAL PROFILES"
      >
        <EditorialCardGrid items={waterfallProfileItems} cardClassName="p-8" />
      </ChapterSection>
    </main>
  );
}
