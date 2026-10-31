"use client";

import React, { useState, useEffect } from "react";
import { BRAND_INFO } from "@/data/landingData";

export default function MobileStickyActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past top 150px
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 border-t border-[#ded8ca] bg-[#f8f6ef]/95 backdrop-blur-md px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-lg sm:hidden transition-transform duration-300"
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="flex items-center gap-3">
        {/* Direct Phone Dial */}
        <a
          href={`tel:${BRAND_INFO.phonePrimary}`}
          className="flex-1 flex items-center justify-center gap-2 rounded border border-[#192e4b] bg-white py-2.5 text-xs font-bold text-[#192e4b] active:bg-[#f0eee5]"
        >
          <span>📞</span>
          <span>Call: {BRAND_INFO.phonePrimaryDisplay}</span>
        </a>

        {/* Quick Admissions Enquiry */}
        <a
          href="#admissions"
          className="flex-1 flex items-center justify-center gap-1.5 rounded bg-[#a8322b] py-2.5 text-xs font-bold text-white shadow-xs active:bg-[#872720]"
        >
          <span>Enquire Now</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
