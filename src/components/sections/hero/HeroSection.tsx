import React from "react";
import HeroBannerSection from "./HeroBannerSection";
import HeroAnnouncementBar from "./HeroAnnouncementBar";
import HeroFoundationIntro from "./HeroFoundationIntro";

interface HeroSectionProps {
  bannerSrc?: string;
}

export default function HeroSection({ bannerSrc }: HeroSectionProps) {
  return (
    <div id="home">
      {/* Banner Graphic Area */}
      <section className="relative w-full bg-[#192e4b]">
        <HeroBannerSection imageSrc={bannerSrc} />
        <HeroAnnouncementBar />
      </section>

      {/* Academy Foundation Intro Section */}
      <HeroFoundationIntro />
    </div>
  );
}
