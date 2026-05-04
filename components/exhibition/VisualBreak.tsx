import Image from "next/image";

export default function VisualBreak({
  src,
  alt,
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <section className="w-full bg-transparent">
      <div className="w-full h-[420px] relative">
        <Image
          src={src}
          alt={alt ?? "Visual break"}
          fill
          className="object-cover"
        />
      </div>

      <div className="container mt-4">
        {caption ? <p className="text-sm text-slate-600">{caption}</p> : null}
      </div>
    </section>
  );
}
