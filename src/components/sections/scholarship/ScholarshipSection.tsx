import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { SCHOLARSHIP_SECTION } from "@/data/landingData";

export default function ScholarshipSection() {
  const { eyebrow, headline, lead, highlights, targetAudience, ctaText } = SCHOLARSHIP_SECTION;

  return (
    <section id="scholarship" className="border-t border-[#ded8ca] bg-[#e9e2d2] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          {/* Information & Highlights Subdivision */}
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#626b6b]">
              {lead}
            </p>

            {/* Examination Key Points */}
            <div className="mt-8 border-t border-[#ded8ca] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#192e4b] mb-4">
                Scholarship Examination Highlights:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#202b35]">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#a8322b] font-bold">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registration Details Subdivision */}
          <div className="border-t border-[#ded8ca] pt-8 lg:border-t-0 lg:border-l lg:border-[#ded8ca] lg:pl-12 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-wider text-[#496b58]">
              Who Can Participate?
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
              {targetAudience}
            </p>

            <div className="mt-6 border-t border-[#ded8ca] pt-5 text-xs text-[#202b35] space-y-2">
              <p className="font-bold text-[#192e4b]">Contact the academy to obtain:</p>
              <ul className="space-y-1.5 text-xs text-[#626b6b]">
                <li>• Examination schedule &amp; syllabus</li>
                <li>• Eligibility requirements &amp; instructions</li>
                <li>• Scholarship percentage benefits</li>
              </ul>
            </div>

            <div className="mt-8">
              <ActionButton
                href="#admissions"
                variant="primary"
                hasArrow
                diagonalArrow
                className="px-6 py-4 text-sm"
              >
                {ctaText}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
