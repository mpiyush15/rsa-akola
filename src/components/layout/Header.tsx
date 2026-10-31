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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#192e4b] text-xl font-bold text-[#192e4b] sm:h-12 sm:w-12 sm:text-3xl">
            R<span className="-ml-0.5 mt-2 text-[#a8322b]">.</span>
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Mobile Call Button */}
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="flex h-10 items-center gap-1.5 rounded border border-[#192e4b]/20 bg-white px-2.5 text-[11px] font-bold text-[#192e4b] active:bg-[#f0eee5] sm:hidden"
            aria-label="Call Admissions directly"
          >
            <span>📞</span>
            <span>Call</span>
          </a>

          {/* Desktop Admissions CTA */}
          <ActionButton
            href="#admissions"
            variant="primary"
            hasArrow
            diagonalArrow
            className="hidden sm:inline-flex px-4 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs"
          >
            Admissions Enquiry
          </ActionButton>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center border border-[#ded8ca] bg-white text-[#192e4b] transition-colors hover:bg-[#f0eee5] xl:hidden focus:outline-none focus:ring-2 focus:ring-[#192e4b]"
          >
            {mobileMenuOpen ? (
              <span className="text-base font-bold leading-none">✕</span>
            ) : (
              <div className="flex flex-col gap-1 items-center justify-center w-4">
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
