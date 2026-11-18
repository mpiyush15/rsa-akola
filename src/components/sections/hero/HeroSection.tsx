import React from "react";
import HeroBannerSection, { HeroBannerItem } from "./HeroBannerSection";
import HeroFoundationIntro from "./HeroFoundationIntro";

interface HeroSectionProps {
  bannerSrc?: string;
  banners?: HeroBannerItem[];
}

export default function HeroSection({ bannerSrc, banners }: HeroSectionProps) {
  return (
    <div id="home">
      {/* Edge-to-Edge Banner Graphic Area without background box */}
      <section className="relative w-full">
        <HeroBannerSection imageSrc={bannerSrc} banners={banners} />
      </section>

      {/* Academy Foundation Intro Section */}
      <HeroFoundationIntro />
    </div>
  );
}
