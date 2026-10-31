import React from "react";
import Arrow from "@/components/ui/Arrow";

export default function HeroAnnouncementBar() {
  return (
    <div className="border-t border-white/10 bg-[#14243a]">
      <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-8 sm:py-3">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-white/90">
          <span className="font-bold text-[#d9c58f]">Admissions Open (2026–27):</span>
          <span className="text-white/95">
            Ramanujan Scholar Academy (Classes 3rd–10th) &amp; PACE IIT &amp; Medical (Classes 11th–12th)
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] sm:text-xs font-bold pt-0.5 sm:pt-0">
          <a
            href="#programmes"
            className="group text-white/80 transition-colors hover:text-white inline-flex items-center gap-1.5"
          >
            <span>Explore Programmes</span>
            <Arrow />
          </a>
          <a
            href="#admissions"
            className="group text-[#e7d19d] transition-colors hover:text-white inline-flex items-center gap-1.5"
          >
            <span>Admissions Enquiry</span>
            <Arrow diagonal />
          </a>
        </div>
      </div>
    </div>
  );
}
