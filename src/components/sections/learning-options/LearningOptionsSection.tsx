import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { LEARNING_OPTIONS } from "@/data/landingData";
import LearningOptionCard from "./LearningOptionCard";

export default function LearningOptionsSection() {
  return (
    <section className="border-t border-[#ded8ca] bg-[#f8f6ef] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Flexible Learning. Consistent Academic Support.</SectionLabel>
            <h2 className="text-3xl font-bold text-[#192e4b] sm:text-4xl lg:text-5xl">
              Choose the Learning Environment That Works for You.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#626b6b]">
            Ramanujan Scholar Academy offers online and offline learning options across our academic programmes.
          </p>
        </div>

        {/* Learning Options Grid */}
        <div className="mt-12 grid border-l border-t border-[#d8d1c2] sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_OPTIONS.map((opt, idx) => (
            <LearningOptionCard key={idx} option={opt} />
          ))}
        </div>

        {/* Admissions notice */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-[#ded8ca] pt-8">
          <div>
            <h4 className="text-base font-bold text-[#192e4b]">
              Regular Batch Admissions
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-[#626b6b]">
              Admissions are offered across applicable programmes, subject to batch availability. Contact the academy for current class timings, fees, and admission procedures.
            </p>
          </div>
          <ActionButton
            href="#admissions"
            variant="navy"
            hasArrow
            diagonalArrow
            className="shrink-0"
          >
            Enquire For Batches
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
