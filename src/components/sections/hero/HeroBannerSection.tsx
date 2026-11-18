"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface HeroBannerItem {
  src: string;
  alt?: string;
}

export const DEFAULT_HERO_BANNERS: HeroBannerItem[] = [
  {
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/2025+5th+schoalrship.png",
    alt: "5th Scholarship Examination Results 2025 - Ramanujan Scholar Academy Akola",
  },
  {
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/2025+8th+schoalr.png",
    alt: "8th Scholarship Examination Results 2025 - Ramanujan Scholar Academy Akola",
  },
  {
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/pace.png?v=2",
    alt: "PACE IIT & Medical Mumbai Selections & Results - Akola",
  },
];

interface HeroBannerSectionProps {
  banners?: HeroBannerItem[];
  imageSrc?: string;
  altText?: string;
  intervalMs?: number;
}

export default function HeroBannerSection({
  banners = DEFAULT_HERO_BANNERS,
  imageSrc,
  altText = "Academic Achievements & Examination Results - Ramanujan Scholar Academy Akola",
  intervalMs = 5000,
}: HeroBannerSectionProps) {
  const bannerList: HeroBannerItem[] = imageSrc
    ? [{ src: imageSrc, alt: altText }]
    : banners;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerList.length);
  }, [bannerList.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerList.length) % bannerList.length);
  }, [bannerList.length]);

  useEffect(() => {
    if (isPaused || bannerList.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, intervalMs, bannerList.length]);

  const hasMultiple = bannerList.length > 1;

  return (
    <div
      className="group relative w-full overflow-hidden bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Highlights Banner"
    >
      {/* Sliding Horizontal Banner Track (1920x720 aspect ratio) */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerList.map((banner, index) => (
          <div
            key={banner.src + index}
            className="w-full shrink-0 aspect-[1920/720] max-h-[720px] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banner.src}
              alt={banner.alt || altText}
              className="w-full h-full object-cover block"
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls (active when multiple banners exist) */}
      {hasMultiple && (
        <>
          {/* Slide Indicator Pill */}
          <div className="absolute right-4 top-4 z-20 rounded bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm sm:right-6 sm:top-6">
            {String(currentIndex + 1).padStart(2, "0")} / {String(bannerList.length).padStart(2, "0")}
          </div>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous banner"
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105 sm:left-6 sm:h-11 sm:w-11"
          >
            <span className="text-sm font-bold sm:text-base">←</span>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next banner"
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105 sm:right-6 sm:h-11 sm:w-11"
          >
            <span className="text-sm font-bold sm:text-base">→</span>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {bannerList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  dotIdx === currentIndex
                    ? "w-7 bg-white shadow-md"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
