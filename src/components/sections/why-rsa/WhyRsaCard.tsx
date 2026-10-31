import React from "react";
import { WhyRsaPoint } from "@/data/landingData";

interface WhyRsaCardProps {
  point: WhyRsaPoint;
}

export default function WhyRsaCard({ point }: WhyRsaCardProps) {
  return (
    <div className="group flex flex-col justify-between border-b border-r border-[#d8d1c2] bg-[#f8f6ef] p-6 transition-colors hover:bg-white sm:p-7">
      <div>
        <span className="font-mono text-xs font-bold text-[#a8322b]">
          {point.number}
        </span>

        <h3 className="mt-3 text-base font-bold text-[#192e4b] transition-colors group-hover:text-[#a8322b]">
          {point.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
          {point.description}
        </p>
      </div>
    </div>
  );
}
