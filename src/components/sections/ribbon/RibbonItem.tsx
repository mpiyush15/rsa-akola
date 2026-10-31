import React from "react";
import { RibbonMetric } from "@/data/landingData";

interface RibbonItemProps {
  item: RibbonMetric;
}

export default function RibbonItem({ item }: RibbonItemProps) {
  return (
    <div className="px-5 py-5 sm:px-7 sm:py-6 transition-colors duration-200 hover:bg-white/[0.03]">
      <p className="text-[10px] font-bold text-[#d9c58f] tracking-wider">{item.number}</p>
      <p className="mt-2 text-xs font-bold sm:text-sm text-white">{item.title}</p>
      <p className="mt-1 text-[10px] text-white/65 sm:text-xs">{item.detail}</p>
    </div>
  );
}
