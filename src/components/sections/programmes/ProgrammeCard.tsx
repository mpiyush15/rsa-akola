import React from "react";
import Arrow from "@/components/ui/Arrow";
import { ProgrammeCoverage } from "@/data/landingData";

interface ProgrammeCardProps {
  programme: ProgrammeCoverage;
}

export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  return (
    <article className="group flex flex-col justify-between border-b border-r border-[#d8d1c2] bg-[#f8f6ef] p-6 transition-colors hover:bg-white sm:p-7 lg:p-8">
      <div>
        {/* Classes Tag */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#a8322b]">
            {programme.classes}
          </span>
          {programme.badge && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#65706c]">
              {programme.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-[#192e4b] sm:text-2xl transition-colors group-hover:text-[#a8322b]">
          {programme.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
          {programme.description}
        </p>

        {/* Coverage Checklist */}
        <div className="mt-5 border-t border-[#ded8ca] pt-4">
          <ul className="space-y-1.5 text-xs text-[#202b35]">
            {programme.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#a8322b] font-bold leading-none mt-0.5">•</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action / Enquiry Link */}
      <div className="mt-6 border-t border-[#ded8ca] pt-4">
        <a
          href="#admissions"
          className="flex items-center justify-between text-xs font-bold text-[#192e4b] transition-colors group-hover:text-[#a8322b]"
        >
          <span>Enquire for this programme</span>
          <Arrow diagonal />
        </a>
      </div>
    </article>
  );
}
