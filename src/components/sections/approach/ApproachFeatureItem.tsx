import React from "react";
import { LearningFeature } from "@/data/landingData";

interface ApproachFeatureItemProps {
  feature: LearningFeature;
}

export default function ApproachFeatureItem({ feature }: ApproachFeatureItemProps) {
  return (
    <article className="grid grid-cols-[45px_1fr] gap-4 py-6 sm:grid-cols-[60px_1fr] transition-colors hover:bg-black/[0.01]">
      <span className="text-xl font-bold text-[#a8322b]" aria-hidden="true">
        {feature.number}
      </span>
      <div>
        <h3 className="text-base font-bold text-[#192e4b]">
          {feature.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-7 text-[#626b6b]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
