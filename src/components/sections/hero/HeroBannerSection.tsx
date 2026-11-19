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
    src: "https://pixels-official.s3.ap-south-1.amazonaws.com/rsa-akola/pace+bnner+imp.png",
    alt: "PACE IIT & Medical Integrated Programme - Ramanujan Scholar Academy Akola",
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Lightbox Zoom Modal State
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const minSwipeDistance = 45;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerList.length);
  }, [bannerList.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerList.length) % bannerList.length);
  }, [bannerList.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
    if (touchStartX && Math.abs(e.targetTouches[0].clientX - touchStartX) > 8) {
      setIsSwiping(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Continuous auto-play timer (keeps auto-scrolling at all times, only pauses if zoom modal is open)
  useEffect(() => {
    if (selectedImageIndex !== null || bannerList.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [selectedImageIndex, nextSlide, intervalMs, bannerList.length, currentIndex]);

  // Modal keyboard listeners
  const handleCloseZoom = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseZoom();
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => ((prev ?? 0) - 1 + bannerList.length) % bannerList.length);
        setIsZoomed(false);
      }
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % bannerList.length);
        setIsZoomed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImageIndex, bannerList.length]);

  const hasMultiple = bannerList.length > 1;
  const currentZoomBanner = selectedImageIndex !== null ? bannerList[selectedImageIndex] : null;

  const handleBannerClick = (index: number) => {
    if (isSwiping) return;
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  return (
    <>
      <div
        className="group relative w-full overflow-hidden bg-transparent select-none cursor-pointer"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
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
              onClick={() => handleBannerClick(index)}
              className="w-full shrink-0 aspect-[1920/720] max-h-[720px] overflow-hidden"
              title="Click to view & zoom"
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

        {/* Navigation Controls (Arrows hidden on mobile where users swipe, visible on desktop) */}
        {hasMultiple && (
          <>
            {/* Left Arrow (Desktop only - mobile scrolls by swiping) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous banner"
              className="hidden sm:flex absolute left-4 top-1/2 z-20 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105"
            >
              <span className="text-base font-bold">←</span>
            </button>

            {/* Right Arrow (Desktop only - mobile scrolls by swiping) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next banner"
              className="hidden sm:flex absolute right-4 top-1/2 z-20 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105"
            >
              <span className="text-base font-bold">→</span>
            </button>

            {/* Dots Indicator */}
            <div
              className="absolute bottom-2.5 sm:bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 sm:gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {bannerList.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    dotIdx === currentIndex
                      ? "w-5 sm:w-7 bg-white shadow-md"
                      : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal for Banner Click-to-Zoom */}
      {selectedImageIndex !== null && currentZoomBanner && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-6 backdrop-blur-md transition-opacity duration-300"
          onClick={handleCloseZoom}
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
              onClick={handleCloseZoom}
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
              src={currentZoomBanner.src}
              alt={currentZoomBanner.alt || altText}
              onClick={() => setIsZoomed((prev) => !prev)}
              className={`max-h-[88vh] max-w-[92vw] select-none object-contain shadow-2xl transition-transform duration-300 ${
                isZoomed
                  ? "scale-150 cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              }`}
            />
          </div>

          {/* Navigation Arrows in modal */}
          {bannerList.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(
                    (prev) => ((prev ?? 0) - 1 + bannerList.length) % bannerList.length
                  );
                  setIsZoomed(false);
                }}
                aria-label="Previous banner"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#192e4b] focus:outline-none"
              >
                <span className="text-base sm:text-xl font-bold">←</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(
                    (prev) => ((prev ?? 0) + 1) % bannerList.length
                  );
                  setIsZoomed(false);
                }}
                aria-label="Next banner"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#192e4b] focus:outline-none"
              >
                <span className="text-base sm:text-xl font-bold">→</span>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
