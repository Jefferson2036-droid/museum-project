import Image from "next/image";
import ExhibitionCard from "./ExhibitionCard";

type ProfileCardProps = {
  name: string;
  role?: string;
  summary: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
};

export default function ProfileCard({
  name,
  role,
  summary,
  imageUrl,
  imageAlt,
  href,
}: ProfileCardProps) {
  return (
    <ExhibitionCard
      category={role ?? "Profile"}
      title={name}
      summary={summary}
      href={href}
    >
      {imageUrl ? (
        <div className="mt-3 h-28 w-full relative overflow-hidden rounded-sm">
          <Image
            src={imageUrl}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
          />
        </div>
      ) : null}
    </ExhibitionCard>
  );
}
