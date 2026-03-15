import Link from "next/link";

import { cn } from "@/lib/utils";

const sequenceStages = [
  {
    era: "Era 1",
    title: "Logic and machinery",
    years: "1830s-1940s",
    href: "/eras/precursors-to-machine-intelligence",
  },
  {
    era: "Era 2",
    title: "Field formation",
    years: "1940s-1950s",
    href: "/eras/computation-information-field-formation",
  },
  {
    era: "Era 3",
    title: "Symbolic optimism",
    years: "1956-1970s",
    href: "/eras/symbolic-optimism-and-early-ai-programs",
  },
  {
    era: "Era 4",
    title: "Critique and winter",
    years: "1970s-1980s",
    href: "/eras/knowledge-systems-critique-and-the-first-ai-winter",
  },
  {
    era: "Era 5",
    title: "Statistical revival",
    years: "1980s-2000s",
    href: "/eras/statistical-learning-and-network-revival",
  },
  {
    era: "Era 6",
    title: "Deep learning scale",
    years: "2010s",
    href: "/eras/deep-learning-breakthroughs",
  },
  {
    era: "Era 7",
    title: "Public AI",
    years: "2020s",
    href: "/eras/foundation-models-and-generative-ai",
  },
];

const supportLayers = [
  {
    label: "Texts",
    href: "/reading-maps/intellectual-lineage",
    description:
      "Papers and source documents explain why each era hands its methods forward.",
  },
  {
    label: "Cast",
    href: "/people-and-institutions",
    description:
      "Researchers, labs, and public institutions make the sequence inhabited instead of abstract.",
  },
  {
    label: "Concepts",
    href: "/guides/embeddings-latent-space-and-llm-math",
    description:
      "Guides such as embeddings and latent space slow the modern story down at the right point.",
  },
];

type HomeSequenceChartProps = {
  compact?: boolean;
};

export function HomeSequenceChart({ compact = false }: HomeSequenceChartProps) {
  return (
    <figure
      className={cn(
        "home-sequence-chart",
        compact && "home-sequence-chart--compact"
      )}
      aria-labelledby="home-sequence-chart-title"
    >
      <div className="home-sequence-chart__header">
        <p className="content-card__meta">Sequence chart</p>
        <h3 id="home-sequence-chart-title">
          The site teaches one long handoff, not disconnected islands
        </h3>
        <p>
          The chronology is the spine. The paper map, cast page, and concept
          guides keep changing the scale without breaking that sequence.
        </p>
      </div>

      <ol className="home-sequence-chart__stages">
        {sequenceStages.map((stage) => (
          <li key={stage.era} className="home-sequence-chart__stage">
            <Link href={stage.href} className="home-sequence-chart__stage-link">
              <p className="home-sequence-chart__eyebrow">{stage.era}</p>
              <h4>{stage.title}</h4>
              <p>{stage.years}</p>
            </Link>
          </li>
        ))}
      </ol>

      {compact ? null : (
        <div
          className="home-sequence-chart__layers"
          aria-label="Companion layers around the chronology"
        >
          {supportLayers.map((layer) => (
            <Link
              key={layer.label}
              href={layer.href}
              className="home-sequence-chart__layer"
            >
              <p className="content-card__meta">{layer.label}</p>
              <p>{layer.description}</p>
            </Link>
          ))}
        </div>
      )}
    </figure>
  );
}
