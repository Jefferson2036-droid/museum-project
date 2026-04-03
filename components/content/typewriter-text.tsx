"use client";

interface TypewriterTextProps {
  text: string;
}

export function TypewriterText({ text }: TypewriterTextProps) {
  return <span>{text}</span>;
}
