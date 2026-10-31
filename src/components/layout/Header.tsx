"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/data/landingData";
import ActionButton from "@/components/ui/ActionButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#e4dfd3] bg-[#f8f6ef]/95 backdrop-blur-md">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:py-5"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#192e4b]"
          onClick={closeMobileMenu}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#192e4b] text-2xl font-bold text-[#192e4b] sm:h-12 sm:w-12 sm:text-3xl">
            R<span className="-ml-0.5 mt-2.5 text-[#a8322b]">.</span>
          </div>
          <div>
            <p className="text-sm font-bold uppercase leading-tight tracking-[0.06em] text-[#192e4b] sm:text-base">
              Ramanujan
            </p>
            <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#496b58] sm:text-[10px]">
              Scholar Academy
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 text-[12px] font-semibold text-[#46515a] xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#a8322b] focus:outline-none focus:text-[#a8322b]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <ActionButton
            href="#admissions"
            variant="primary"
            hasArrow
            diagonalArrow
            className="hidden sm:inline-flex px-4 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs"
          >
            Admissions Enquiry
          </ActionButton>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center border border-[#ded8ca] bg-white text-[#192e4b] transition-colors hover:bg-[#f0eee5] xl:hidden focus:outline-none focus:ring-2 focus:ring-[#192e4b]"
          >
            {mobileMenuOpen ? (
              <span className="text-lg font-bold leading-none">✕</span>
            ) : (
              <div className="flex flex-col gap-1 items-center justify-center w-5">
                <span className="h-0.5 w-full bg-[#192e4b]" />
                <span className="h-0.5 w-full bg-[#192e4b]" />
                <span className="h-0.5 w-full bg-[#192e4b]" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#ded8ca] bg-[#f8f6ef] px-5 py-6 shadow-lg xl:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-[#192e4b]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="border-b border-[#ded8ca]/50 pb-2 transition-colors hover:text-[#a8322b]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <ActionButton
                href="#contact"
                variant="primary"
                hasArrow
                diagonalArrow
                onClick={closeMobileMenu}
                className="w-full text-center"
              >
                Admissions Enquiry
              </ActionButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
