import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "crimson" | "green" | "muted" | "navy";
  className?: string;
}

export default function Badge({
  children,
  variant = "muted",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    gold: "text-[#d9c58f] bg-[#d9c58f]/10 border border-[#d9c58f]/30",
    crimson: "text-[#a8322b] bg-[#a8322b]/10 border border-[#a8322b]/20",
    green: "text-[#496b58] bg-[#496b58]/10 border border-[#496b58]/20",
    muted: "text-[#65706c] bg-[#ded8ca]/40 border border-[#ded8ca]",
    navy: "text-[#192e4b] bg-[#192e4b]/10 border border-[#192e4b]/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
