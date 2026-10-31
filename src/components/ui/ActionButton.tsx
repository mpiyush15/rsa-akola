import React from "react";
import Arrow from "./Arrow";

export type ButtonVariant = "primary" | "navy" | "outline" | "translucent" | "link";

interface ActionButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  hasArrow?: boolean;
  diagonalArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function ActionButton({
  href,
  onClick,
  variant = "primary",
  hasArrow = false,
  diagonalArrow = false,
  children,
  className = "",
  external = false,
  type = "button",
  ariaLabel,
}: ActionButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer select-none";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[#a8322b] text-white hover:bg-[#872720] shadow-sm hover:shadow active:scale-[0.99] px-5 py-3 text-xs sm:text-sm",
    navy:
      "bg-[#192e4b] text-white hover:bg-[#294665] shadow-sm hover:shadow active:scale-[0.99] px-6 py-3.5 text-xs sm:text-sm",
    outline:
      "border border-[#d5cbbc] bg-transparent text-[#192e4b] hover:border-[#a8322b] hover:text-[#a8322b] px-6 py-3.5 text-xs sm:text-sm",
    translucent:
      "bg-white/10 text-white hover:bg-white/20 border border-white/10 px-4 py-2 text-xs",
    link:
      "bg-transparent text-[#192e4b] hover:text-[#a8322b] p-0 text-sm",
  };

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${
    hasArrow ? "gap-2.5 sm:gap-3" : ""
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        <span>{children}</span>
        {hasArrow && <Arrow diagonal={diagonalArrow} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {hasArrow && <Arrow diagonal={diagonalArrow} />}
    </button>
  );
}
