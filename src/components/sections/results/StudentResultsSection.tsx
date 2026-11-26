"use client";

import React, { useState, useEffect, useCallback } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export interface ResultGalleryItem {
  id: string;
  src: string;
  title?: string;
}

export const RESULT_GALLERY_IMAGES: ResultGalleryItem[] = [
  {
    id: "gallery-1",
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/navoday.png",
    title: "Navodaya (JNV) Selection & Results - Ramanujan Scholar Academy",
  },
  {
    id: "gallery-2",
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/jee+akolyat.png",
    title: "JEE Advanced & Mains Selections in Akola - PACE & Ramanujan",
  },
  {
    id: "gallery-3",
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/homi+bhabha+2024.png",
    title: "Dr. Homi Bhabha Balvaidyanik Competition 2024 Results - Ramanujan Scholar Academy",
  },
  {
    id: "gallery-4",
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/ganit+pradnya+shodh+.png",
    title: "Ganit Pradnya Shodh Pariksha Results - Ramanujan Scholar Academy",
  },
  {
    id: "gallery-5",
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/mw+sate.png",
    title: "State Merit List & Scholarship Achievers - Ramanujan Scholar Academy",
  },
  {
    id: "gallery-6",
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/scholar+res+1.png",
    title: "Scholarship Examination Top Rankers - Ramanujan Scholar Academy",
  },
];

export default function StudentResultsSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const images = RESULT_GALLERY_IMAGES;

  const handleOpen = (index: number) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % images.length);
    setIsZoomed(false);
  }, [selectedImageIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev ?? 0) - 1 + images.length) % images.length);
    setIsZoomed(false);
  }, [selectedImageIndex, images.length]);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImageIndex, handleNext, handlePrev]);

  const currentItem = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <section id="results" className="border-t border-[#ded8ca] bg-[#f0eee5] py-14 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-14">
        {/* Header Subdivision */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Proven Track Record · Akola Achievements</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              Celebrating Academic Milestones.
            </h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#626b6b]">
              Browse verified top achievers, merit lists, and result publications across school scholarship examinations, Olympiads, and competitive entrance coaching.
            </p>
          </div>

          <div className="text-xs font-semibold text-[#496b58] sm:text-right">
            <span>Click image to view &amp; zoom</span>
          </div>
        </div>

        {/* Gallery Grid (720x480 aspect, 4 images in a row on desktop) */}
        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpen(index)}
              className="cursor-pointer overflow-hidden transition-opacity hover:opacity-90 aspect-[720/480] w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title || "Academic Result Milestone"}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Zoom & Full View */}
      {selectedImageIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-6 backdrop-blur-md transition-opacity duration-300"
          onClick={handleClose}
        >
          {/* Controls Bar */}
          <div
            className="absolute top-0 right-0 z-20 flex items-center gap-3 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoom In/Out Toggle */}
            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 focus:outline-none"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              <span className="text-xl font-bold leading-none">
                {isZoomed ? "−" : "+"}
              </span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close image viewer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-[#a8322b] focus:outline-none"
            >
              <span className="text-2xl font-bold leading-none">&times;</span>
            </button>
          </div>

          {/* Image Container */}
          <div
            className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentItem.src}
              alt={currentItem.title || "Academic Result Milestone"}
              onClick={() => setIsZoomed((prev) => !prev)}
              className={`max-h-[88vh] max-w-[92vw] select-none object-contain shadow-2xl transition-transform duration-300 ${
                isZoomed
                  ? "scale-150 cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              }`}
            />
          </div>

          {/* Navigation Arrows (if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#192e4b] focus:outline-none"
              >
                <span className="text-base sm:text-xl font-bold">←</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#192e4b] focus:outline-none"
              >
                <span className="text-base sm:text-xl font-bold">→</span>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
