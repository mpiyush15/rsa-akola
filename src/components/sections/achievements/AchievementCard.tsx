import React from "react";
import { AchievementItem } from "@/data/landingData";

interface AchievementCardProps {
  achievement: AchievementItem;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="border border-white/15 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] sm:p-8">
      {/* Category Tag */}
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9c58f]">
        {achievement.tag}
      </p>

      {/* Card Title */}
      <h3 className="mt-4 text-xl font-bold text-white">
        {achievement.title}
      </h3>

      {/* Card Description */}
      <p className="mt-3 text-sm leading-7 text-white/65">
        {achievement.description}
      </p>
    </div>
  );
}
