import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { BRAND_INFO } from "@/data/landingData";
import HeroBatchesShowcase from "./HeroBatchesShowcase";

export default function HeroFoundationIntro() {
  return (
    <section className="border-b border-[#ded8ca] bg-[#f8f6ef]">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Narrative Subdivision */}
          <div>
            <SectionLabel>
              Ramanujan Scholar Academy × PACE IIT &amp; Medical · Akola
            </SectionLabel>

            <h1 className="max-w-[620px] text-[28px] font-bold leading-[1.15] tracking-tight text-[#192e4b] sm:text-5xl lg:text-6xl">
              Building Strong Foundations.{" "}
              <span className="mt-1 block font-bold text-[#496b58]">
                Creating Academic Excellence.
              </span>
            </h1>

            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#a8322b]">
              {BRAND_INFO.tagline}
            </p>

            <div className="mt-5 space-y-3.5 max-w-xl text-xs sm:text-base leading-relaxed text-[#626b6b]">
              <p>
                From school-level Mathematics and Science to scholarship examinations, Olympiads, and competitive entrance preparation, Ramanujan Scholar Academy helps students build strong concepts, disciplined study habits, and academic confidence.
              </p>
              <p>
                In partnership with PACE IIT &amp; Medical Mumbai, students in Akola gain a seamless pathway from school foundations (Classes 3rd–10th) to comprehensive IIT-JEE and NEET coaching (Classes 11th–12th), including the targeted Mission Super 45 initiative.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              <ActionButton
                href="#programmes"
                variant="navy"
                hasArrow
                className="w-full sm:w-auto text-center"
              >
                Explore Our Courses
              </ActionButton>
              <ActionButton
                href="#admissions"
                variant="primary"
                hasArrow
                diagonalArrow
                className="w-full sm:w-auto text-center"
              >
                Admissions Enquiry
              </ActionButton>
            </div>

            {/* Subtle bottom meta */}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#ded8ca] pt-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#65706c]">
              <span>Classes 3rd to 12th</span>
              <span className="h-1 w-1 rounded-full bg-[#a8322b]" aria-hidden="true" />
              <span>English &amp; Semi-English</span>
              <span className="h-1 w-1 rounded-full bg-[#a8322b]" aria-hidden="true" />
              <span>Offline &amp; Online in Akola</span>
            </div>
          </div>

          {/* Right Subdivision: Clean Editorial Batches & Classes */}
          <HeroBatchesShowcase />
        </div>
      </div>
    </section>
  );
}
