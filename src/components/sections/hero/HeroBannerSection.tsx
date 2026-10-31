import React from "react";

interface HeroBannerSectionProps {
  imageSrc?: string;
  altText?: string;
}

export default function HeroBannerSection({
  imageSrc = "/images/rsa-hero-banner.png",
  altText = "JEE Advanced Results 2026 Selections - Ramanujan Scholar Academy Akola",
}: HeroBannerSectionProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] items-center justify-center px-2 py-2 sm:px-4 sm:py-3 lg:px-6">
      <div className="flex max-h-[62vh] sm:max-h-[70vh] lg:max-h-[74vh] w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0f1d30] shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={altText}
          className="max-h-[62vh] sm:max-h-[70vh] lg:max-h-[74vh] w-full object-contain"
        />
      </div>
    </div>
  );
}
