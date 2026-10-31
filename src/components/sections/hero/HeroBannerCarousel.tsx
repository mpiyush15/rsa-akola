"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface BannerSlide {
  src: string;
  fallbackSrc: string;
  alt: string;
  tag: string;
  caption: string;
}

const DEFAULT_SLIDES: BannerSlide[] = [
  {
    src: "/images/hero-banner-1.jpeg",
    fallbackSrc:
      "https://pixels-official.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2026-10-26+at+18.01.54+(1).jpeg",
    alt: "Ramanujan Scholar Academy Academic Highlights",
    tag: "Academic Excellence",
    caption: "Strong foundation for school boards, JEE & NEET preparation.",
  },
  {
    src: "/images/hero-banner-2.jpeg",
    fallbackSrc:
      "https://pixels-official.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2026-10-27+at+19.59.45+(1).jpeg",
    alt: "Ramanujan Scholar Academy Student Achievements & Admissions",
    tag: "Admissions Open",
    caption: "Every student. Every milestone. Proven excellence in Akola.",
  },
];

interface HeroBannerCarouselProps {
  slides?: BannerSlide[];
  intervalMs?: number;
}

export default function HeroBannerCarousel({
  slides = DEFAULT_SLIDES,
  intervalMs = 4500,
}: HeroBannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide, intervalMs, slides.length]);

  return (
    <div
      className="group/carousel relative h-full w-full overflow-hidden border border-white/70 bg-[#f8f6ef]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Academy Highlights Carousel"
    >
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "z-10 opacity-100 scale-100"
                  : "z-0 opacity-0 scale-[1.02] pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== slide.fallbackSrc) {
                    target.src = slide.fallbackSrc;
                  }
                }}
                className="h-full w-full object-cover object-top"
              />
            </div>
          );
        })}
      </div>

      {/* Slide Badge (Top Right) */}
      <div className="absolute right-3 top-3 z-20 rounded bg-[#192e4b]/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm sm:right-4 sm:top-4">
        {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#192e4b]/75 text-white shadow-md backdrop-blur-sm transition-all hover:bg-[#192e4b] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d9c58f] sm:left-4 sm:h-10 sm:w-10"
      >
        <span className="text-sm font-bold sm:text-base">←</span>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#192e4b]/75 text-white shadow-md backdrop-blur-sm transition-all hover:bg-[#192e4b] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d9c58f] sm:right-4 sm:h-10 sm:w-10"
      >
        <span className="text-sm font-bold sm:text-base">→</span>
      </button>

      {/* Bottom Content & Indicator Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#192e4b]/95 via-[#192e4b]/85 to-transparent px-5 pb-5 pt-12 text-white sm:px-7 sm:pb-6">
        <div className="flex flex-col gap-2">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9c58f]">
            {slides[currentIndex].tag}
          </p>
          <p className="text-base font-bold leading-snug sm:text-lg">
            {slides[currentIndex].caption}
          </p>
        </div>

        {/* Carousel Dots */}
        <div className="mt-4 flex items-center gap-2">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                dotIdx === currentIndex
                  ? "w-7 bg-[#d9c58f]"
                  : "w-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
