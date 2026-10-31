import React from "react";
import { TOP_BAR_INFO } from "@/data/landingData";

export default function TopNoticeBar() {
  return (
    <div className="bg-[#192e4b] text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 px-4 py-2 text-center sm:text-left text-[11px] sm:px-8 sm:py-2.5 sm:text-xs">
        <p className="tracking-wide text-white/90">
          {TOP_BAR_INFO.institution} <span className="mx-1.5 text-[#d4bc83]">/</span> {TOP_BAR_INFO.city}
        </p>
        <a
          href={TOP_BAR_INFO.tel}
          className="transition-colors hover:text-[#e7d19d] focus:outline-none focus:underline font-medium text-[#d9c58f] sm:text-white/90"
        >
          Admissions &amp; Enquiries: {TOP_BAR_INFO.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
