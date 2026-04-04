"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slideshowImages = [
  "/media/wikimedia/hero-1.webp",
  "/media/wikimedia/hero-2.webp",
  "/media/wikimedia/hero-3.webp",
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Only start timer if we actually have images
    if (slideshowImages.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Safety: If no images, don't break the page
  if (slideshowImages.length === 0) {
    return (
      <div className="h-full w-full bg-slate-100 flex items-center justify-center font-mono text-xs">
        NO_IMAGES_FOUND
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-50 border border-slate-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.98 }} // Slight scale-in for a "gallery" feel
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }} // Slight scale-out
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slideshowImages[index]}
            alt="Archival History"
            fill
            priority={index === 0} // Only priority load the first image
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-6 flex gap-2 z-10">
        {slideshowImages.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-10 transition-all duration-700 ease-in-out ${
              i === index ? "bg-[#0047AB]" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
