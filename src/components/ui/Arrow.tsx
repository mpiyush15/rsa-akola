import React from "react";

interface ArrowProps {
  diagonal?: boolean;
  className?: string;
}

export default function Arrow({ diagonal = false, className = "" }: ArrowProps) {
  if (diagonal) {
    return (
      <svg
        className={`inline-block h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 10L10 4M10 4H5.5M10 4V8.5" />
      </svg>
    );
  }

  return (
    <svg
      className={`inline-block h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" />
    </svg>
  );
}
