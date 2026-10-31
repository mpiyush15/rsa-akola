import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { ACHIEVEMENTS } from "@/data/landingData";
import AchievementCard from "./AchievementCard";

export default function AchievementsSection() {
  return (
    <section id="results" className="bg-[#192e4b] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
        {/* Header Subdivision */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <SectionLabel accentColor="bg-[#d9c58f]" textColor="text-[#d9c58f]">
              Student Achievements
            </SectionLabel>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Every achievement has a story.
            </h2>
          </div>
          <p className="text-sm leading-7 text-white/70">
            Celebrate the hard work of students through verified academic results, examination
            achievements, and scholarship recognition.
          </p>
        </div>

        {/* Achievements Subdivision Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard key={item.tag} achievement={item} />
          ))}
        </div>

        {/* Bottom Enquiry CTA Action */}
        <div className="mt-8 border-t border-white/15 pt-6">
          <ActionButton
            href="#contact"
            variant="link"
            hasArrow
            diagonalArrow
            className="text-sm font-bold text-[#e7d19d] hover:text-white"
          >
            Enquire about our programmes
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
