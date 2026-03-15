import Image, { type ImageProps } from "next/image";

import { getImageFocusData } from "@/lib/image-focus";

type FocalImageProps = ImageProps & {
  applySuggestedFit?: boolean;
};

export function FocalImage({ alt, src, style, applySuggestedFit = true, ...props }: FocalImageProps) {
  const focusKey = typeof src === "string" ? src : undefined;
  const focusData = focusKey ? getImageFocusData(focusKey) : undefined;

  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      style={
        focusData
          ? {
              objectFit: applySuggestedFit ? focusData.suggestedFit : undefined,
              objectPosition: focusData.objectPosition,
              ...style,
            }
          : style
      }
    />
  );
}