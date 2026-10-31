import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { APPROACH_PILLARS } from "@/data/landingData";
import ApproachPillarCard from "./ApproachPillarCard";

export default function AcademicApproachSection() {
  return (
    <section id="approach" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
      <SectionLabel>Our Approach</SectionLabel>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <h2 className="max-w-lg text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl">
            Strong concepts. Consistent practice. Better performance.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#626b6b]">
            We believe academic success is built through consistent effort, systematic syllabus coverage, and the right learning environment.
          </p>
        </div>

        {/* 5 Approach Pillars with clean hairline dividers */}
        <div className="divide-y divide-[#ded8ca] border-t border-[#ded8ca]">
          {APPROACH_PILLARS.map((pillar) => (
            <ApproachPillarCard key={pillar.number} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
