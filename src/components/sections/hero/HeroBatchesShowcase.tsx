import React from "react";

export default function HeroBatchesShowcase() {
  return (
    <div className="border-t border-[#ded8ca] pt-8 lg:border-t-0 lg:border-l lg:border-[#ded8ca] lg:pl-12 lg:pt-0">
      {/* 01: Ramanujan Scholar Academy */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8322b]">
            01 · Foundation &amp; School Boards
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#192e4b]">
            Classes 3rd to 10th
          </span>
        </div>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#192e4b] sm:text-3xl">
          Ramanujan Scholar Academy
        </h3>
        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
          Building deep conceptual clarity in Mathematics and Science, school curriculum excellence, and competitive scholarship readiness.
        </p>

        {/* Big Bold Classes Breakdown */}
        <div className="mt-4 divide-y divide-[#ded8ca] border-y border-[#ded8ca]">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-sm font-bold text-[#192e4b]">
              Classes 3rd, 4th &amp; 5th
            </span>
            <span className="text-xs text-[#626b6b]">
              Junior Foundation · Maths &amp; Science Wisdom · Ganit Pravinaya &amp; Pradnya
            </span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-sm font-bold text-[#192e4b]">
              Classes 6th, 7th &amp; 8th
            </span>
            <span className="text-xs text-[#626b6b]">
              Middle School Foundation · State Scholarship Exams · National Olympiads
            </span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-sm font-bold text-[#192e4b]">
              Classes 9th &amp; 10th
            </span>
            <span className="text-xs text-[#626b6b]">
              CBSE &amp; Maharashtra State Board Prep · Pre-Foundation Analytical Skills
            </span>
          </div>
        </div>

        <p className="mt-2 text-[11px] font-semibold text-[#496b58]">
          English &amp; Semi-English Medium · Offline Classroom &amp; Live Online Batches
        </p>
      </div>

      {/* Hairline Divider */}
      <div className="my-8 h-[1px] bg-[#ded8ca]" />

      {/* 02: PACE IIT & Medical Mumbai */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#496b58]">
            02 · Competitive Entrance Wing
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#192e4b]">
            Classes 11th &amp; 12th
          </span>
        </div>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#192e4b] sm:text-3xl">
          PACE IIT &amp; Medical Mumbai
        </h3>
        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
          Integrated engineering and medical entrance coaching in Akola with AIM, backed by a proven legacy of 721+ selections to IITs.
        </p>

        {/* Big Bold Classes Breakdown */}
        <div className="mt-4 divide-y divide-[#ded8ca] border-y border-[#ded8ca]">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-sm font-bold text-[#192e4b]">
              IIT-JEE (Advanced &amp; Mains)
            </span>
            <span className="text-xs text-[#626b6b]">
              Classes 11th &amp; 12th · Physics, Chemistry &amp; Mathematics
            </span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-sm font-bold text-[#192e4b]">
              NEET (Medical Entrance)
            </span>
            <span className="text-xs text-[#626b6b]">
              Classes 11th &amp; 12th · NCERT Physics, Chemistry &amp; Biology
            </span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-sm font-bold text-[#a8322b]">
              Mission Super 45
            </span>
            <span className="text-xs text-[#626b6b]">
              Exclusive High-Achievement Cohort · 1-on-1 Mentorship
            </span>
          </div>
        </div>

        <p className="mt-2 text-[11px] font-semibold text-[#496b58]">
          PACE Online Integrated Programme with AIM in Akola · Regular Tests &amp; Analysis
        </p>
      </div>
    </div>
  );
}
