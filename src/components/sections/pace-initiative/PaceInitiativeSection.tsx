import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { PACE_INITIATIVE } from "@/data/landingData";
import MissionSuper45Card from "./MissionSuper45Card";

export default function PaceInitiativeSection() {
  return (
    <section id="pace-initiative" className="border-t border-[#ded8ca] bg-[#f0eee5] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          {/* Left Information Subdivision */}
          <div>
            <SectionLabel>{PACE_INITIATIVE.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              {PACE_INITIATIVE.headline}
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed sm:leading-8 text-[#626b6b]">
              {PACE_INITIATIVE.description}
            </p>
            <div className="mt-5 sm:mt-6 border-t border-[#ded8ca] pt-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#65706c]">
              <span>Engineering &amp; Medical Entrances</span>
              <span className="mx-2 sm:mx-3 text-[#a8322b]">·</span>
              <span>In Collaboration with AIM in Akola</span>
            </div>
          </div>

          {/* Right Mission Super 45 Subdivision */}
          <MissionSuper45Card />
        </div>
      </div>
    </section>
  );
}
