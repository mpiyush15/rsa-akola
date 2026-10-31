import React from "react";
import { StudentResult } from "@/data/studentResultsData";

interface ResultCardProps {
  student: StudentResult;
}

export default function ResultCard({ student }: ResultCardProps) {
  // Extract initials for clean placeholder avatar (no photos as requested)
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const isRsa = student.institution === "Ramanujan Scholar Academy";

  return (
    <article className="group flex flex-col justify-between border-b border-r border-[#d8d1c2] bg-[#f8f6ef] p-5 transition-colors hover:bg-white sm:p-6">
      <div>
        {/* Top Header: Institution & Score Tag */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[9px] font-bold uppercase tracking-wider ${
              isRsa ? "text-[#a8322b]" : "text-[#192e4b]"
            }`}
          >
            {student.institution}
          </span>
          <span className="rounded bg-[#192e4b] px-2 py-0.5 text-xs font-black text-white">
            {student.score}
          </span>
        </div>

        {/* Student Name & Initials Avatar */}
        <div className="mt-4 flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              isRsa
                ? "bg-[#a8322b]/10 text-[#a8322b] border border-[#a8322b]/20"
                : "bg-[#192e4b]/10 text-[#192e4b] border border-[#192e4b]/20"
            }`}
            aria-hidden="true"
          >
            {initials}
          </div>
          <div className="min-w-0">
            <h4 className="text-base font-bold text-[#192e4b] truncate transition-colors group-hover:text-[#a8322b]">
              {student.name}
            </h4>
            <p className="text-[11px] font-medium text-[#65706c]">
              {student.exam}
            </p>
          </div>
        </div>

        {/* Achievement Detail */}
        <p className="mt-3 text-xs leading-relaxed text-[#626b6b] border-t border-[#ded8ca] pt-3">
          {student.detail}
        </p>
      </div>

      {/* Category Pill */}
      <div className="mt-4 pt-2">
        <span className="text-[10px] font-semibold text-[#496b58] uppercase tracking-wider">
          {student.categoryLabel}
        </span>
      </div>
    </article>
  );
}
