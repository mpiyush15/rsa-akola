import React from "react";
import { StarAchiever } from "@/data/landingData";

interface StarAchieverCardProps {
  achiever: StarAchiever;
}

export default function StarAchieverCard({ achiever }: StarAchieverCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#d9c58f]/50 hover:bg-white/[0.08] hover:shadow-lg">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#d9c58f]">
          {achiever.exam}
        </span>
        <span className="rounded bg-[#a8322b] px-2 py-0.5 text-xs font-bold text-white shadow-xs">
          {achiever.rank}
        </span>
      </div>

      <h4 className="mt-4 text-base font-bold text-white">
        {achiever.name}
      </h4>

      {achiever.institute && (
        <p className="mt-1 text-xs text-white/65">
          {achiever.institute}
        </p>
      )}
    </div>
  );
}
