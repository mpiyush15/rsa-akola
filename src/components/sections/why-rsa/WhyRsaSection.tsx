import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { WHY_RSA_POINTS } from "@/data/landingData";
import WhyRsaCard from "./WhyRsaCard";

export default function WhyRsaSection() {
  return (
    <section id="why-rsa" className="border-t border-[#ded8ca] bg-[#f0eee5] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Your Child&apos;s Academic Growth Matters</SectionLabel>
            <h2 className="text-3xl font-bold text-[#192e4b] sm:text-4xl lg:text-5xl">
              Why Ramanujan Scholar Academy?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#626b6b]">
            Choosing the right academic institution is an important decision for every parent. Our programmes bring together rigorous conceptual training and personal guidance.
          </p>
        </div>

        {/* 8 Advantage Cards in Architectural Grid */}
        <div className="mt-12 grid border-l border-t border-[#d8d1c2] sm:grid-cols-2 lg:grid-cols-4">
          {WHY_RSA_POINTS.map((pt) => (
            <WhyRsaCard key={pt.number} point={pt} />
          ))}
        </div>
      </div>
    </section>
  );
}
