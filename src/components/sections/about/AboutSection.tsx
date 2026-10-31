import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { ABOUT_CONTENT } from "@/data/landingData";
import AboutPillarItem from "./AboutPillarItem";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-4 py-12 sm:px-10 sm:py-20 lg:px-14 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left Headline & Philosophy Subdivision */}
        <div>
          <SectionLabel>{ABOUT_CONTENT.eyebrow}</SectionLabel>
          <h2 className="text-2xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
            {ABOUT_CONTENT.title}
            <span className="mt-2 block text-[#496b58] font-bold">
              {ABOUT_CONTENT.titleAccent}
            </span>
          </h2>

          <div className="mt-5 inline-flex items-center gap-2 rounded border border-[#a8322b]/20 bg-[#a8322b]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#a8322b]">
            <span>Our Philosophy:</span>
            <span className="text-[#192e4b]">{ABOUT_CONTENT.philosophy}</span>
          </div>

          <div className="mt-6 sm:mt-8 border-t border-[#ded8ca] pt-5 sm:pt-6">
            <ActionButton
              href="#programmes"
              variant="navy"
              hasArrow
              className="w-full sm:w-auto text-center"
            >
              Explore Our Programmes
            </ActionButton>
          </div>
        </div>

        {/* Right Paragraphs & Focus Areas Subdivision */}
        <div className="space-y-6">
          <div className="space-y-3 text-base leading-8 text-[#626b6b]">
            {ABOUT_CONTENT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#192e4b] mb-4">
              We focus on developing:
            </p>
            <div className="grid gap-3 sm:grid-cols-1">
              {ABOUT_CONTENT.focusAreas.map((area, idx) => (
                <AboutPillarItem key={idx} text={area} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
