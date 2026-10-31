import React from "react";

interface ArrowProps {
  diagonal?: boolean;
  className?: string;
}

export default function Arrow({ diagonal = false, className = "" }: ArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block transition-transform duration-200 group-hover:translate-x-1 ${
        diagonal ? "group-hover:-translate-y-0.5" : ""
      } ${className}`}
    >
      {diagonal ? "↗" : "→"}
    </span>
  );
}
