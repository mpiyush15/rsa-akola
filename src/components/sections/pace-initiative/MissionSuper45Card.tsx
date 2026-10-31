import React from "react";
import ActionButton from "@/components/ui/ActionButton";
import { PACE_INITIATIVE } from "@/data/landingData";

export default function MissionSuper45Card() {
  const { mission45 } = PACE_INITIATIVE;

  return (
    <div className="border-t border-[#ded8ca] pt-6 lg:border-t-0 lg:border-l lg:border-[#ded8ca] lg:pl-10 lg:pt-0">
      <div className="flex items-center gap-2">
        <span className="h-[2px] w-6 bg-[#a8322b]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8322b]">
          {mission45.tagline}
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#192e4b] sm:text-3xl">
        {mission45.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#626b6b]">
        {mission45.description}
      </p>

      {/* 5 Pillars as simple editorial bullet items */}
      <div className="mt-6 border-t border-[#ded8ca] pt-4">
        <p className="text-xs font-bold uppercase tracking-wider text-[#192e4b] mb-3">
          Core Focus Areas:
        </p>
        <ul className="space-y-2 text-sm text-[#202b35]">
          {mission45.pillars.map((pillar, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-[#a8322b] font-bold">•</span>
              <span>{pillar}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <ActionButton
          href="#admissions"
          variant="primary"
          hasArrow
          diagonalArrow
        >
          {mission45.cta}
        </ActionButton>
      </div>
    </div>
  );
}
