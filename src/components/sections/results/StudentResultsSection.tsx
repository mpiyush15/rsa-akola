"use client";

import React, { useState, useMemo } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionButton from "@/components/ui/ActionButton";
import { STUDENT_RESULTS, RESULT_CATEGORIES } from "@/data/studentResultsData";
import ResultCard from "./ResultCard";

export default function StudentResultsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredResults = useMemo(() => {
    return STUDENT_RESULTS.filter((student) => {
      const matchesCategory =
        activeCategory === "all" || student.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.exam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.score.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.detail.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="results" className="border-t border-[#ded8ca] bg-[#f0eee5] py-14 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-14">
        {/* Header Subdivision */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Proven Track Record · Akola Achievements</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              Celebrating Academic Milestones.
            </h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#626b6b]">
              A curated showcase of verified top performers across IIT-JEE, NEET, Maharashtra State Scholarships, and Maths &amp; Science Wisdom examinations.
            </p>
          </div>

          {/* Search Box with 16px mobile font to prevent auto-zoom */}
          <div className="w-full sm:w-72">
            <label htmlFor="results-search" className="sr-only">
              Search rankers or exams
            </label>
            <input
              id="results-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by student or exam..."
              className="w-full rounded border border-[#ded8ca] bg-white px-3.5 py-2.5 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:outline-none focus:ring-1 focus:ring-[#192e4b]"
            />
          </div>
        </div>

        {/* Mobile Swipeable / Desktop Wrapped Filter Tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap border-b border-[#ded8ca]">
          {RESULT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? STUDENT_RESULTS.length
                : STUDENT_RESULTS.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#192e4b] text-white"
                    : "bg-[#f8f6ef] text-[#192e4b] border border-[#ded8ca] hover:bg-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-[#d9c58f]" : "text-[#65706c]"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        {filteredResults.length > 0 ? (
          <div className="mt-6 sm:mt-8 grid border-l border-t border-[#d8d1c2] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredResults.map((student) => (
              <ResultCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className="mt-10 py-10 text-center text-xs sm:text-sm text-[#626b6b]">
            No results match your search criteria. Try selecting &ldquo;All Results&rdquo;.
          </div>
        )}

        {/* Bottom Achievement Milestones Banner */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-[#ded8ca] pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-2xl font-black text-[#192e4b]">721+</p>
              <p className="mt-0.5 text-xs text-[#626b6b]">
                Total Selections to IITs (PACE Programme Record)
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#a8322b]">District 1st Ranks</p>
              <p className="mt-0.5 text-xs text-[#626b6b]">
                Maharashtra State Scholarship Exams (Ramanujan)
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#496b58]">100 / 100</p>
              <p className="mt-0.5 text-xs text-[#626b6b]">
                State Merit 1st in Maths &amp; Science Wisdom
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <ActionButton
              href="#admissions"
              variant="primary"
              hasArrow
              diagonalArrow
              className="w-full sm:w-auto"
            >
              Enquire For Admissions
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
