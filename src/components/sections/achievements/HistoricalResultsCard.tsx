import React from "react";
import { ACHIEVEMENTS_DATA } from "@/data/landingData";

export default function HistoricalResultsCard() {
  const { paceRecord, institutes, scholarshipRecord } = ACHIEVEMENTS_DATA;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* PACE Historical Milestone */}
      <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#d9c58f]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9c58f]">
            PACE IIT & Medical Akola Legacy
          </p>
        </div>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-4xl font-extrabold text-white sm:text-5xl">
            {paceRecord.stat}
          </span>
          <span className="text-sm font-semibold text-white/90">
            {paceRecord.title}
          </span>
        </div>

        <p className="mt-2 text-xs text-white/60">
          {paceRecord.attribution}
        </p>

        {/* Leading Institutes */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-2">
            Admissions in Leading Institutions:
          </p>
          <div className="flex flex-wrap gap-2">
            {institutes.map((inst) => (
              <span
                key={inst}
                className="rounded border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/90"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scholarship & School Merit Record */}
      <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#496b58]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#496b58]">
            School Foundation & Merits
          </p>
        </div>

        <h4 className="mt-4 text-xl font-bold text-white sm:text-2xl">
          {scholarshipRecord.title}
        </h4>

        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/80">
          {scholarshipRecord.points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-[#d9c58f] font-bold">•</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
