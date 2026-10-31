import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { LEARNING_FEATURES } from "@/data/landingData";
import ApproachFeatureItem from "./ApproachFeatureItem";

export default function ApproachSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
      <SectionLabel>Our Approach</SectionLabel>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <h2 className="max-w-lg text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl">
          Strong concepts. Consistent practice. Better preparation.
        </h2>

        {/* Learning Features Subdivision List */}
        <div className="divide-y divide-[#ded8ca] border-t border-[#ded8ca]">
          {LEARNING_FEATURES.map((feature) => (
            <ApproachFeatureItem key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
