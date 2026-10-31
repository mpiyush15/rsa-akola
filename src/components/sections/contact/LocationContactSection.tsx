import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { BRAND_INFO } from "@/data/landingData";
import ContactDetailsCard from "./ContactDetailsCard";

export default function LocationContactSection() {
  return (
    <section id="contact" className="border-t border-[#ded8ca] bg-[#f8f6ef] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Location Description Subdivision */}
          <div>
            <SectionLabel>Location & Contact</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              Visit Ramanujan Scholar Academy
            </h2>
            <p className="mt-6 text-base leading-8 text-[#626b6b]">
              For admissions, scholarship examination information, batch schedules and course details, contact or visit our academy at Rautwadi, Akola.
            </p>

            <div className="mt-8 border border-[#ded8ca] bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8322b]">
                Campus Address
              </p>
              <p className="mt-2 text-base font-bold text-[#192e4b]">
                {BRAND_INFO.name}
              </p>
              <p className="mt-1 text-sm text-[#626b6b]">
                {BRAND_INFO.address}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#496b58] font-semibold">
                <span>• Admissions Office</span>
                <span>• Classroom Center</span>
                <span>• Library & Test Cell</span>
              </div>
            </div>
          </div>

          {/* Right Contact Details Card Subdivision */}
          <div>
            <ContactDetailsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
