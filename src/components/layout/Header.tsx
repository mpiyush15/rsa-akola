"use client";

import React, { useState } from "react";
import { NAV_LINKS, BRAND_INFO } from "@/data/landingData";
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
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4 lg:py-5"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#192e4b]"
          onClick={closeMobileMenu}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#192e4b] text-lg font-bold text-[#192e4b] sm:h-11 sm:w-11 sm:text-2xl">
            R<span className="-ml-0.5 mt-1 text-[#a8322b]">.</span>
          </div>
          <div className="truncate">
            <p className="text-xs sm:text-base font-bold uppercase leading-tight tracking-[0.06em] text-[#192e4b] truncate">
              Ramanujan
            </p>
            <p className="mt-0.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#496b58] truncate">
              Scholar Academy
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 text-[12px] font-semibold text-[#46515a] xl:flex">
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
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Quick Call Button with SVG Phone Icon */}
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="inline-flex h-9 items-center justify-center gap-1.5 border border-[#192e4b] bg-white px-2.5 sm:px-3 text-xs font-bold text-[#192e4b] transition-colors hover:bg-[#f0eee5] active:bg-[#e4decb] whitespace-nowrap"
            aria-label="Call Admissions directly"
          >
            <svg
              className="h-3.5 w-3.5 shrink-0 text-[#192e4b]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="leading-none">Call</span>
          </a>

          {/* Admissions Enquiry CTA - Single-line on mobile ("Enquire ↗") and full on desktop */}
          <a
            href="#admissions"
            className="group inline-flex h-9 items-center justify-center gap-1.5 bg-[#a8322b] px-3 sm:px-4 text-xs font-bold text-white transition-colors hover:bg-[#872720] active:bg-[#72201a] shadow-xs whitespace-nowrap"
          >
            <span className="leading-none sm:hidden">Enquire</span>
            <span className="leading-none hidden sm:inline">Admissions Enquiry</span>
            <svg
              className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#ded8ca] bg-white text-[#192e4b] transition-colors hover:bg-[#f0eee5] xl:hidden focus:outline-none focus:ring-2 focus:ring-[#192e4b] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#ded8ca] bg-[#f8f6ef] px-5 py-6 shadow-xl xl:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-3 text-sm font-semibold text-[#192e4b]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-[#ded8ca]/50 py-2.5 transition-colors hover:text-[#a8322b]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#a8322b]">→</span>
              </a>
            ))}

            {/* Mobile Contact Helpline info inside drawer */}
            <div className="mt-3 rounded border border-[#ded8ca] bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#496b58]">
                Admissions Helpline:
              </p>
              <div className="mt-2 flex flex-col gap-1.5 text-xs font-bold text-[#192e4b]">
                <a href={`tel:${BRAND_INFO.phonePrimary}`} className="hover:text-[#a8322b]">
                  +91 {BRAND_INFO.phonePrimaryDisplay}
                </a>
                <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="hover:text-[#a8322b]">
                  +91 {BRAND_INFO.phoneSecondaryDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <ActionButton
                href="#admissions"
                variant="primary"
                hasArrow
                diagonalArrow
                onClick={closeMobileMenu}
                className="w-full text-center py-3.5"
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
