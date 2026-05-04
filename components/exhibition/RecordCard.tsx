import ExhibitionCard from "./ExhibitionCard";

type RecordCardProps = {
  eraLabel?: string;
  title: string;
  summary: string;
  href?: string;
};

export default function RecordCard({
  eraLabel,
  title,
  summary,
  href,
}: RecordCardProps) {
  return (
    <ExhibitionCard
      category={eraLabel ?? "Record"}
      title={title}
      summary={summary}
      href={href}
    />
  );
}
