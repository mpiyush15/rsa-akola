import React from "react";

interface AboutPillarItemProps {
  text: string;
}

export default function AboutPillarItem({ text }: AboutPillarItemProps) {
  return (
    <div className="flex items-start gap-3 py-2 text-sm leading-relaxed text-[#202b35]">
      <span className="text-[#a8322b] font-bold text-base leading-none mt-0.5">•</span>
      <span>{text}</span>
    </div>
  );
}
