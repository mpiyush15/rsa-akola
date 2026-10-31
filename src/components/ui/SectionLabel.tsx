import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  accentColor?: string;
  textColor?: string;
  className?: string;
}

export default function SectionLabel({
  children,
  accentColor = "bg-[#a8322b]",
  textColor = "text-[#496b58]",
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${className}`}>
      <span className={`h-[2px] w-8 shrink-0 ${accentColor}`} aria-hidden="true" />
      <span className={`text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs ${textColor}`}>
        {children}
      </span>
    </div>
  );
}
