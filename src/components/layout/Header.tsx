"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS, BRAND_INFO } from "@/data/landingData";
import ActionButton from "@/components/ui/ActionButton";

const emptySubscribe = () => () => {};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Lock background body scroll when mobile overlay menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

          {/* Admissions Enquiry CTA */}
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
          </button>
        </div>
      </nav>

      {/* Offcanvas Mobile Menu Drawer (Mounted to document.body, slides over background) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex justify-end xl:hidden overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Dim Dark Backdrop over the background page - Tap to dismiss */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Offcanvas Drawer Panel: Slides in from the right over the background */}
            <aside className="relative z-10 flex h-full w-[82%] max-w-[340px] flex-col bg-[#f8f6ef] shadow-2xl border-l border-[#ded8ca] transition-transform duration-300 ease-out">
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#ded8ca] bg-[#f8f6ef] px-4 py-3.5">
                <a
                  href="#home"
                  onClick={closeMobileMenu}
                  className="flex min-w-0 items-center gap-2"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#192e4b] text-base font-bold text-[#192e4b]">
                    R<span className="-ml-0.5 mt-0.5 text-[#a8322b]">.</span>
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold uppercase leading-tight tracking-[0.06em] text-[#192e4b] truncate">
                      Ramanujan
                    </p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#496b58] truncate">
                      Scholar Academy
                    </p>
                  </div>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                  className="inline-flex h-8 w-8 items-center justify-center border border-[#ded8ca] bg-white text-[#192e4b] hover:bg-[#ded8ca]/40 cursor-pointer"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Quick Actions Row */}
              <div className="flex items-center gap-2 border-b border-[#ded8ca]/60 bg-white/70 p-3">
                <a
                  href={`tel:${BRAND_INFO.phonePrimary}`}
                  className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 border border-[#192e4b] bg-white text-[11px] font-bold text-[#192e4b] active:bg-[#f0eee5]"
                >
                  <svg
                    className="h-3 w-3 shrink-0 text-[#192e4b]"
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
                  <span>Call Us</span>
                </a>

                <a
                  href="#admissions"
                  onClick={closeMobileMenu}
                  className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 bg-[#a8322b] text-[11px] font-bold text-white shadow-xs active:bg-[#872720]"
                >
                  <span>Enquire Now</span>
                  <svg
                    className="h-3 w-3 shrink-0"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10L10 4M10 4H5.5M10 4V8.5" />
                  </svg>
                </a>
              </div>

              {/* Scrollable Navigation Area */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65706c] mb-2 px-1">
                  Navigation
                </p>
                <div className="flex flex-col text-sm font-semibold text-[#192e4b]">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between border-b border-[#ded8ca]/50 py-3 px-1 transition-colors hover:text-[#a8322b] active:text-[#a8322b]"
                    >
                      <span className="font-bold tracking-tight text-sm">{link.label}</span>
                      <span className="text-xs text-[#a8322b]">→</span>
                    </a>
                  ))}
                </div>

                {/* Admissions Helpline Box */}
                <div className="mt-5 border border-[#ded8ca] bg-white p-3.5">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#496b58]">
                    Admissions Helpline:
                  </p>
                  <div className="mt-1.5 flex flex-col gap-1 text-xs font-bold text-[#192e4b]">
                    <a href={`tel:${BRAND_INFO.phonePrimary}`} className="hover:text-[#a8322b]">
                      +91 {BRAND_INFO.phonePrimaryDisplay}
                    </a>
                    <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="hover:text-[#a8322b]">
                      +91 {BRAND_INFO.phoneSecondaryDisplay}
                    </a>
                  </div>
                </div>

                {/* Admissions CTA */}
                <div className="pt-4 pb-8">
                  <ActionButton
                    href="#admissions"
                    variant="primary"
                    hasArrow
                    diagonalArrow
                    onClick={closeMobileMenu}
                    className="w-full text-center py-3 text-xs"
                  >
                    Admissions Enquiry
                  </ActionButton>
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}
