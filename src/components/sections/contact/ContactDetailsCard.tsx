import React from "react";
import Arrow from "@/components/ui/Arrow";
import { BRAND_INFO } from "@/data/landingData";

export default function ContactDetailsCard() {
  return (
    <div className="border border-[#ded8ca] bg-white p-5 sm:p-9">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#496b58]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#496b58]">
          Akola Campus
        </p>
      </div>

      <h3 className="mt-2.5 text-xl sm:text-2xl font-bold text-[#192e4b]">
        {BRAND_INFO.name}
      </h3>
      <p className="mt-2 text-sm text-[#626b6b]">
        {BRAND_INFO.address}
      </p>

      {/* Contact Channels */}
      <div className="mt-7 space-y-3 border-t border-[#ded8ca]/60 pt-6">
        {/* Primary Phone */}
        <a
          href={`tel:${BRAND_INFO.phonePrimary}`}
          className="group flex items-center justify-between border-b border-[#ded8ca]/40 pb-3 text-sm font-semibold text-[#192e4b] transition-colors hover:text-[#a8322b]"
        >
          <span className="flex items-center gap-2">
            <span>Phone:</span>
            <span className="text-[#a8322b]">+91 {BRAND_INFO.phonePrimaryDisplay}</span>
          </span>
          <Arrow diagonal />
        </a>

        {/* Secondary Phone */}
        <a
          href={`tel:${BRAND_INFO.phoneSecondary}`}
          className="group flex items-center justify-between border-b border-[#ded8ca]/40 pb-3 text-sm font-semibold text-[#192e4b] transition-colors hover:text-[#a8322b]"
        >
          <span className="flex items-center gap-2">
            <span>Phone:</span>
            <span className="text-[#a8322b]">+91 {BRAND_INFO.phoneSecondaryDisplay}</span>
          </span>
          <Arrow diagonal />
        </a>

        {/* Website */}
        <a
          href={BRAND_INFO.websiteUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center justify-between border-b border-[#ded8ca]/40 pb-3 text-sm font-semibold text-[#192e4b] transition-colors hover:text-[#a8322b]"
        >
          <span>Website: ramanujanakola.com</span>
          <Arrow diagonal />
        </a>

        {/* Instagram */}
        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center justify-between pb-1 text-sm font-semibold text-[#192e4b] transition-colors hover:text-[#a8322b]"
        >
          <span>Instagram: {BRAND_INFO.instagramHandle}</span>
          <Arrow diagonal />
        </a>
      </div>
    </div>
  );
}
