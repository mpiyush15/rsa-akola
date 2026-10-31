import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT_INFO } from "@/data/landingData";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        {/* Left Information & Address Subdivision */}
        <div>
          <SectionLabel>Admissions & Enquiries</SectionLabel>
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl">
            Let&apos;s plan the next step in your child&apos;s education.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#626b6b]">
            Talk to the academy about course options, available batches, preferred learning medium,
            and admission procedures.
          </p>

          <div className="mt-9 border-t border-[#ded8ca] pt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#496b58]">
              Visit Our Academy
            </p>
            <p className="mt-3 text-xl font-bold text-[#192e4b]">
              {CONTACT_INFO.academyName}
            </p>
            <p className="mt-2 text-sm text-[#626b6b]">
              {CONTACT_INFO.addressLine1}, {CONTACT_INFO.postalInfo}
            </p>
          </div>
        </div>

        {/* Right Contact Card Subdivision */}
        <ContactCard />
      </div>
    </section>
  );
}
