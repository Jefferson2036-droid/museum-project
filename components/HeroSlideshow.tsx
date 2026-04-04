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
    <div className="h-full w-full px-4 pb-4 pt-0">
      <div className="relative h-[calc(100%-44px)] w-full overflow-hidden border border-slate-200 bg-slate-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              className="relative h-full w-full"
              animate={{ scale: [1, 1.1] }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image
                src={slideshowImages[index]}
                alt="Archival History"
                fill
                priority={index === 0} // Only priority load the first image
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex w-full items-center justify-center gap-4 mt-8">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative flex h-4 w-4 items-center justify-center focus:outline-none"
          >
            <div
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#0047AB] scale-125" : "bg-slate-200"
              }`}
            />

            {i === index && (
              <motion.div
                layoutId="activeBubble"
                className="absolute h-4 w-4 rounded-full border border-[#0047AB]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
