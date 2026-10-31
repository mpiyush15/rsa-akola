import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { ACHIEVEMENTS_DATA } from "@/data/landingData";
import StarAchieverCard from "./StarAchieverCard";
import HistoricalResultsCard from "./HistoricalResultsCard";

export default function AchievementsGallerySection() {
  const { eyebrow, headline, leadText, starAchievers, closingQuote } = ACHIEVEMENTS_DATA;

  return (
    <section id="achievements" className="bg-[#192e4b] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        {/* Header Subdivision */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel accentColor="bg-[#d9c58f]" textColor="text-[#d9c58f]">
              {eyebrow}
            </SectionLabel>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
          </div>
          <p className="text-sm leading-7 text-white/75">
            {leadText}
          </p>
        </div>

        {/* Historical Results Overview Subdivision */}
        <div className="mt-12">
          <HistoricalResultsCard />
        </div>

        {/* Selected Historical Rankers Showcase */}
        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9c58f] mb-5">
            Selected Historical Rankers (Akola Results):
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {starAchievers.map((achiever) => (
              <StarAchieverCard key={achiever.name} achiever={achiever} />
            ))}
          </div>
        </div>

        {/* Closing Quote Banner */}
        <div className="mt-12 rounded-lg border border-white/15 bg-white/5 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-xs sm:text-sm italic leading-relaxed text-white/85 max-w-3xl">
            &ldquo;{closingQuote}&rdquo;
          </p>
          <ActionButton
            href="#admissions"
            variant="primary"
            hasArrow
            diagonalArrow
            className="shrink-0"
          >
            Admissions Enquiry
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
