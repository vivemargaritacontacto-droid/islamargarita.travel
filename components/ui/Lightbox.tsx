"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxPhoto {
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const total = photos.length;

  const prev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const next = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, prev, next]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentIndex !== null && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex shrink-0 items-center justify-between px-5 py-4">
            <span className="text-sm font-medium text-white/60">
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main image */}
          <div
            className="relative flex flex-1 items-center justify-center px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full"
              >
                <Image
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex shrink-0 justify-center gap-2 overflow-x-auto px-4 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => onNavigate(i)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                  i === currentIndex
                    ? "ring-2 ring-coral ring-offset-2 ring-offset-black opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
                aria-label={photo.alt}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
