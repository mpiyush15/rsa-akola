import React from "react";
import { TOP_BAR_INFO } from "@/data/landingData";

export default function TopNoticeBar() {
  return (
    <div className="bg-[#192e4b] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center sm:justify-between px-4 py-2 sm:px-8 sm:py-2 text-[11px] sm:text-xs">
        <p className="hidden sm:block tracking-wide text-white/80">
          Admissions Open · Foundation &amp; Competitive Entrance Coaching <span className="mx-1.5 text-[#d4bc83]">·</span> Akola
        </p>
        <a
          href={TOP_BAR_INFO.tel}
          className="transition-colors hover:text-[#e7d19d] focus:outline-none focus:underline font-medium text-[#d9c58f] sm:text-white/90"
        >
          Admissions &amp; Enquiries: {TOP_BAR_INFO.phoneDisplay}
          <span className="sm:hidden text-white/70 ml-1.5">· Akola</span>
        </a>
      </div>
    </div>
  );
}
