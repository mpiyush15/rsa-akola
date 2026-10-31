import React from "react";
import { BRAND_INFO, NAV_LINKS } from "@/data/landingData";

export default function Footer() {
  return (
    <footer className="bg-[#14243a] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-10 sm:py-12 lg:px-14">
        {/* Main Footer Grid */}
        <div className="grid gap-8 sm:gap-10 border-b border-white/15 pb-8 sm:pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Column 1: Brand & Positioning */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 text-xl font-bold text-white">
                R<span className="-ml-0.5 mt-2 text-[#d9c58f]">.</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                  {BRAND_INFO.name}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#d9c58f]">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="mt-3.5 max-w-md text-xs sm:text-sm leading-relaxed text-white/70">
              School Foundation | Scholarship Preparation | Olympiads | IIT-JEE | NEET
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] sm:text-xs text-white/60">
              <span className="rounded bg-white/5 px-2.5 py-1">Online & Offline Batches</span>
              <span className="rounded bg-white/5 px-2.5 py-1">English & Semi-English Medium</span>
            </div>

            <p className="mt-3 text-xs text-white/60">
              {BRAND_INFO.address}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9c58f]">
              Quick Links
            </p>
            <div className="mt-3 sm:mt-4 flex flex-col items-start gap-2.5 text-xs sm:text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white focus:outline-none focus:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9c58f]">
              Admissions & Contact
            </p>
            <div className="mt-4 flex flex-col items-start gap-2 text-xs sm:text-sm text-white/70">
              <span>{BRAND_INFO.address}</span>
              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="transition-colors hover:text-white font-semibold text-[#d9c58f]"
              >
                +91 {BRAND_INFO.phonePrimaryDisplay}
              </a>
              <a
                href={`tel:${BRAND_INFO.phoneSecondary}`}
                className="transition-colors hover:text-white font-semibold text-[#d9c58f]"
              >
                +91 {BRAND_INFO.phoneSecondaryDisplay}
              </a>
              <a
                href={BRAND_INFO.websiteUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-white mt-1 text-xs"
              >
                ramanujanakola.com ↗
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-white text-xs"
              >
                Instagram: {BRAND_INFO.instagramHandle} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col justify-between gap-3 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center">
          <p>© {BRAND_INFO.name}, Akola. All Rights Reserved.</p>
          <p>{BRAND_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
