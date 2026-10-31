import React from "react";
import { LearningOption } from "@/data/landingData";

interface LearningOptionCardProps {
  option: LearningOption;
}

export default function LearningOptionCard({ option }: LearningOptionCardProps) {
  return (
    <div className="flex flex-col justify-between border-b border-r border-[#d8d1c2] bg-[#f8f6ef] p-6 transition-colors hover:bg-white sm:p-7 lg:p-8">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#a8322b]">
          {option.tag}
        </span>
        <h3 className="mt-3 text-xl font-bold text-[#192e4b]">
          {option.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
          {option.description}
        </p>

        {/* Feature bullets */}
        <div className="mt-5 border-t border-[#ded8ca] pt-4">
          <ul className="space-y-2 text-xs text-[#202b35]">
            {option.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-[#496b58] font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
