import React from "react";

interface ExamRow {
  grade: string;
  academic: string[];
  additional?: string[];
  note?: string;
}

const FOUNDATION_EXAM_ROWS: ExamRow[] = [
  {
    grade: "Class 3rd",
    academic: ["BDS", "Mathematics & Science Wisdom", "MTS"],
    additional: ["IMO", "NSO", "IEO"],
  },
  {
    grade: "Class 4th",
    academic: ["Scholarship Preparation", "Mathematics & Science Wisdom"],
    additional: ["MTS", "BDS", "IMO", "NSO", "IEO"],
  },
  {
    grade: "Class 5th",
    academic: ["Navodaya (JNV) Entrance Preparation", "Mathematics & Science Wisdom", "MTS"],
    additional: ["BDS", "IMO", "NSO", "IEO"],
  },
  {
    grade: "Class 6th",
    academic: ["Homi Bhabha Examination Preparation", "Mathematics & Science Wisdom", "Foundation Programme", "MTS"],
    additional: ["BDS", "IMO", "NSO", "IEO"],
  },
  {
    grade: "Class 7th",
    academic: ["Scholarship Preparation", "Mathematics & Science Wisdom", "Foundation Programme"],
    additional: ["MTS", "BDS", "IMO", "NSO", "IEO"],
  },
  {
    grade: "Class 8th",
    academic: ["Foundation Programme", "MTS"],
    additional: ["NMTC", "Pre-RMO", "BDS", "IMO", "NSO", "IEO"],
  },
  {
    grade: "Classes 9th & 10th",
    academic: ["CBSE & State Board Prep", "Pre-Foundation"],
    additional: ["IMO", "NSO", "IEO"],
  },
];

const COMPETITIVE_EXAM_ROWS: ExamRow[] = [
  {
    grade: "Classes 11 & 12 (Engg)",
    academic: ["JEE Main", "JEE Advanced", "MHT-CET"],
    additional: ["RMO", "IMO"],
  },
  {
    grade: "Classes 11 & 12 (Medical)",
    academic: ["NEET", "MHT-CET"],
    additional: ["NSO", "IMO", "IEO"],
  },
  {
    grade: "Mission Super 45",
    academic: ["JEE Advanced", "NEET"],
    note: "Top 45 Cohort · 1-on-1 Mentorship",
  },
];

export default function HeroBatchesShowcase() {
  return (
    <div className="border-t border-[#ded8ca] pt-8 lg:border-t-0 lg:border-l lg:border-[#ded8ca] lg:pl-10 lg:pt-0">
      {/* 01: Ramanujan Scholar Academy */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold tracking-wide text-[#a8322b]">
            01 · Foundation &amp; School Boards
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#192e4b]">
            Classes 3rd to 10th
          </span>
        </div>

        <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#192e4b] sm:text-3xl">
          Ramanujan Scholar Academy
        </h3>

        {/* Foundation Classes & Exams Table */}
        <div className="mt-3.5 overflow-hidden border border-[#ded8ca] bg-white shadow-xs">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#ded8ca] bg-[#eee9df] font-semibold text-[#192e4b]">
                <th className="w-[105px] sm:w-[130px] border-r border-[#ded8ca] px-3 py-2 text-left font-semibold">
                  Class
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  Target Exams &amp; Programmes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ded8ca]">
              {FOUNDATION_EXAM_ROWS.map((row) => (
                <tr key={row.grade} className="transition-colors hover:bg-[#faf8f4]">
                  <td className="border-r border-[#ded8ca] px-3 py-2 font-bold text-[#192e4b] whitespace-nowrap bg-[#faf8f4]/60">
                    {row.grade}
                  </td>
                  <td className="px-3 py-2 text-[#192e4b] leading-relaxed">
                    <span className="font-semibold">{row.academic.join(", ")}</span>
                    {row.additional && row.additional.length > 0 && (
                      <span className="ml-1.5 font-normal text-[#5b6875]">
                        ({row.additional.join(", ")})
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hairline Divider */}
      <div className="my-6 h-[1px] bg-[#ded8ca]" />

      {/* 02: PACE IIT & Medical Mumbai */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold tracking-wide text-[#496b58]">
            02 · Competitive Entrance Wing
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#192e4b]">
            Classes 11th &amp; 12th
          </span>
        </div>

        <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#192e4b] sm:text-3xl">
          PACE IIT &amp; Medical Mumbai
        </h3>

        {/* 3 Days Online + 3 Days Classroom Highlights */}
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-xs font-semibold text-[#192e4b]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-[#496b58]" aria-hidden="true" />
            3 Days Online Integrated Programme
          </span>
          <span className="hidden sm:inline text-[#ded8ca]">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-[#a8322b]" aria-hidden="true" />
            3 Days Classroom Programme
          </span>
        </div>

        {/* Senior Secondary & Competitive Table */}
        <div className="mt-3.5 overflow-hidden border border-[#ded8ca] bg-white shadow-xs">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#ded8ca] bg-[#eee9df] font-semibold text-[#192e4b]">
                <th className="w-[105px] sm:w-[130px] border-r border-[#ded8ca] px-3 py-2 text-left font-semibold">
                  Stream / Wing
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  Target Competitive Exams
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ded8ca]">
              {COMPETITIVE_EXAM_ROWS.map((row) => (
                <tr key={row.grade} className="transition-colors hover:bg-[#faf8f4]">
                  <td className={`border-r border-[#ded8ca] px-3 py-2 font-bold whitespace-nowrap bg-[#faf8f4]/60 ${row.note ? "text-[#a8322b]" : "text-[#192e4b]"}`}>
                    {row.grade}
                  </td>
                  <td className="px-3 py-2 text-[#192e4b] leading-relaxed">
                    <span className="font-semibold">{row.academic.join(", ")}</span>
                    {row.additional && row.additional.length > 0 && (
                      <span className="ml-1.5 font-normal text-[#5b6875]">
                        ({row.additional.join(", ")})
                      </span>
                    )}
                    {row.note && (
                      <span className="ml-1.5 font-normal text-[#626b6b] italic">
                        ({row.note})
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
