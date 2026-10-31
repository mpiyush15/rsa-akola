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
      <div className="flex items-center gap-2.5">
        {/* Direct Phone Dial */}
        <a
          href={`tel:${BRAND_INFO.phonePrimary}`}
          className="flex-1 inline-flex h-10 items-center justify-center gap-2 border border-[#192e4b] bg-white px-3 text-xs font-bold text-[#192e4b] active:bg-[#f0eee5] whitespace-nowrap"
        >
          <svg
            className="h-3.5 w-3.5 shrink-0 text-[#192e4b]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="leading-none">Call: {BRAND_INFO.phonePrimaryDisplay}</span>
        </a>

        {/* Quick Admissions Enquiry */}
        <a
          href="#admissions"
          className="group flex-1 inline-flex h-10 items-center justify-center gap-1.5 bg-[#a8322b] px-3 text-xs font-bold text-white shadow-xs active:bg-[#872720] whitespace-nowrap"
        >
          <span className="leading-none">Enquire Now</span>
          <svg
            className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 10L10 4M10 4H5.5M10 4V8.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
