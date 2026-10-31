import React from "react";
import { RIBBON_METRICS } from "@/data/landingData";
import RibbonItem from "./RibbonItem";

export default function AcademicRibbon() {
  return (
    <div className="bg-[#192e4b] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-white/15 sm:grid-cols-4">
        {RIBBON_METRICS.map((item) => (
          <RibbonItem key={item.number} item={item} />
        ))}
      </div>
    </div>
  );
}
