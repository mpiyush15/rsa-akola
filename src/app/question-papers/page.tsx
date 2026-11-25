import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TopNoticeBar from "@/components/layout/TopNoticeBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyActionBar from "@/components/layout/MobileStickyActionBar";
import {
  QUESTION_PAPER_SECTIONS,
  QuestionPaperSection,
} from "@/data/questionPapersData";
import { BRAND_INFO } from "@/data/landingData";

export const metadata: Metadata = {
  title: "NMTC Question Papers & Answer Keys | Ramanujan Scholar Academy",
  description:
    "Download official NMTC question papers and answer keys for Primary, Sub-junior, Junior, and Inter levels at Ramanujan Scholar Academy Akola.",
};

export default function QuestionPapersPage() {
  const sections: QuestionPaperSection[] = QUESTION_PAPER_SECTIONS;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6ef] text-[#202b35] selection:bg-[#192e4b] selection:text-white pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] sm:pb-0">
      {/* Institutional Top Bar */}
      <TopNoticeBar />

      {/* Main Navigation Header */}
      <Header />

      <main id="main-content">
        {/* Simple Clean Header */}
        <section className="border-b border-[#ded8ca] bg-[#eee9df] py-10 sm:py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-xs font-semibold text-[#65706c]">
                <li>
                  <Link href="/" className="hover:text-[#a8322b] transition-colors">
                    Home
                  </Link>
                </li>
                <li>·</li>
                <li className="text-[#192e4b] font-bold" aria-current="page">
                  Question Papers
                </li>
              </ol>
            </nav>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a8322b]">
              AMTI · Ramanujan Scholar Academy
            </span>
            <h1 className="mt-2 text-2xl font-black tracking-tight text-[#192e4b] sm:text-4xl lg:text-5xl">
              NMTC Question Papers &amp; Answer Keys
            </h1>
            <p className="mt-2.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#626b6b]">
              Download official AMTI NMTC examination question papers and answer keys for all competition levels.
            </p>
          </div>
        </section>

        {/* Question Papers by Year/Session */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-10 space-y-12 sm:space-y-16">
            {sections.map((section) => (
              <div key={section.id} className="space-y-4">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#192e4b] pb-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#192e4b]">
                      {section.title}
                    </h2>
                    <span className="bg-[#192e4b] text-white text-[10px] sm:text-xs font-bold uppercase px-2.5 py-0.5 tracking-wider">
                      {section.badge}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#626b6b]">
                    AMTI Examination · All Levels
                  </span>
                </div>

                {/* Desktop Table */}
                <div className="hidden sm:block overflow-hidden border border-[#ded8ca] bg-white shadow-xs">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#ded8ca] bg-[#f0eee5] text-xs font-bold uppercase tracking-wider text-[#192e4b]">
                        <th className="px-6 py-4">Level / Group</th>
                        <th className="px-6 py-4 w-[240px] text-center">Question Paper</th>
                        <th className="px-6 py-4 w-[240px] text-center">Answer Key</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ded8ca]">
                      {section.items.map((paper, idx) => (
                        <tr key={paper.id} className="transition-colors hover:bg-[#faf8f4]">
                          {/* Level Heading */}
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#192e4b] text-xs font-bold text-white">
                                0{idx + 1}
                              </span>
                              <div>
                                <h3 className="text-base font-extrabold text-[#192e4b]">
                                  {paper.name}
                                </h3>
                                <p className="text-xs text-[#626b6b] mt-0.5">
                                  {paper.examTitle}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Question Paper Button */}
                          <td className="px-6 py-5 text-center">
                            <a
                              href={paper.questionPaperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 bg-[#192e4b] text-white px-4 py-2.5 text-xs font-bold transition-colors hover:bg-[#a8322b] active:bg-[#872720] shadow-xs w-full max-w-[200px]"
                            >
                              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span>Download Paper (PDF)</span>
                            </a>
                          </td>

                          {/* Answer Key Button or Blank */}
                          <td className="px-6 py-5 text-center">
                            {paper.answerKeyUrl ? (
                              <a
                                href={paper.answerKeyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#496b58] text-white px-4 py-2.5 text-xs font-bold transition-colors hover:bg-[#395646] active:bg-[#2c4436] shadow-xs w-full max-w-[200px]"
                              >
                                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Answer Key (PDF)</span>
                              </a>
                            ) : (
                              <span className="text-xs text-[#8a9494] font-medium">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="grid gap-4 sm:hidden">
                  {section.items.map((paper, idx) => (
                    <div
                      key={paper.id}
                      className="border border-[#ded8ca] bg-white p-5 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#192e4b] text-[11px] font-bold text-white">
                          0{idx + 1}
                        </span>
                        <h3 className="text-base font-extrabold text-[#192e4b]">
                          {paper.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#626b6b] mt-1 ml-8.5">
                        {paper.examTitle}
                      </p>

                      <div className="mt-4 pt-3.5 border-t border-[#ded8ca] flex items-center gap-2.5">
                        <a
                          href={paper.questionPaperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#192e4b] text-white px-3 py-2.5 text-xs font-bold active:bg-[#a8322b]"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>Paper PDF</span>
                        </a>

                        {paper.answerKeyUrl ? (
                          <a
                            href={paper.answerKeyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#496b58] text-white px-3 py-2.5 text-xs font-bold active:bg-[#395646]"
                          >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Answer Key</span>
                          </a>
                        ) : (
                          <div className="flex-1 text-center py-2 text-xs text-[#8a9494] font-medium border border-dashed border-[#ded8ca]">
                            Key: —
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Helpline Bar */}
            <div className="mt-8 border border-[#ded8ca] bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#202b35]">
              <p className="text-[#626b6b]">
                For questions regarding evaluation or marks submission, contact Ramanujan Scholar Academy.
              </p>
              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="font-bold text-[#192e4b] hover:text-[#a8322b] shrink-0"
              >
                Helpdesk: +91 {BRAND_INFO.phonePrimaryDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyActionBar />
    </div>
  );
}
