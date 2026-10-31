import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROGRAMMES } from "@/data/landingData";
import ProgrammeCard from "./ProgrammeCard";

export default function AcademicProgrammesSection() {
  return (
    <section id="programmes" className="border-t border-[#ded8ca] bg-[#f0eee5] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Academic Programmes</SectionLabel>
            <h2 className="text-3xl font-bold text-[#192e4b] sm:text-4xl lg:text-5xl">
              The Right Preparation at Every Academic Stage.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#626b6b]">
            Ramanujan Scholar Academy offers a range of academic programmes for school students, scholarship aspirants, and competitive examination candidates.
          </p>
        </div>

        {/* Programmes Architectural Grid */}
        <div className="mt-12 grid border-l border-t border-[#d8d1c2] sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMMES.map((prog, idx) => (
            <ProgrammeCard key={idx} programme={prog} />
          ))}
        </div>
      </div>
    </section>
  );
}
