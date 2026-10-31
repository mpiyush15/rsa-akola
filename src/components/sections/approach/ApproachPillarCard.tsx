import React from "react";
import { ApproachPillar } from "@/data/landingData";

interface ApproachPillarCardProps {
  pillar: ApproachPillar;
}

export default function ApproachPillarCard({ pillar }: ApproachPillarCardProps) {
  return (
    <article className="grid grid-cols-[45px_1fr] gap-4 py-6 sm:grid-cols-[60px_1fr]">
      <span className="text-xl font-bold text-[#a8322b]">
        {pillar.number}
      </span>
      <div>
        <h3 className="text-base font-bold text-[#192e4b]">
          {pillar.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-[#626b6b]">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}
