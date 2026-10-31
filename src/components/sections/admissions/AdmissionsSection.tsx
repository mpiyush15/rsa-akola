import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Arrow from "@/components/ui/Arrow";
import { ADMISSIONS_CONTENT } from "@/data/landingData";
import AdmissionEnquiryForm from "./AdmissionEnquiryForm";

export default function AdmissionsSection() {
  const { eyebrow, headline, lead, phones } = ADMISSIONS_CONTENT;

  return (
    <section id="admissions" className="border-t border-[#ded8ca] bg-[#f8f6ef] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Information & Call Lines Subdivision */}
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed sm:leading-8 text-[#626b6b]">
              {lead}
            </p>

            {/* Direct Phone Dials without heavy card container */}
            <div className="mt-6 sm:mt-10 border-t border-[#ded8ca] pt-5 sm:pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#496b58]">
                Direct Academic Assistance
              </p>
              <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-[#192e4b]">
                Call the Academy
              </h3>
              <p className="mt-1 sm:mt-2 text-xs text-[#626b6b]">
                Available Monday to Saturday for immediate batch counselling and seat guidance.
              </p>

              <div className="mt-4 sm:mt-6 divide-y divide-[#ded8ca] border-y border-[#ded8ca]">
                {phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={phone.tel}
                    className="group flex items-center justify-between py-3.5 text-sm font-semibold text-[#192e4b] transition-colors hover:text-[#a8322b]"
                  >
                    <span>+91 {phone.formatted}</span>
                    <Arrow diagonal />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Interactive Form Subdivision */}
          <div>
            <AdmissionEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
