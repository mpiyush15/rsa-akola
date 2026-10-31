import React from "react";
import TopNoticeBar from "@/components/layout/TopNoticeBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Modular Section Components
import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import AcademicProgrammesSection from "@/components/sections/programmes/AcademicProgrammesSection";
import PaceInitiativeSection from "@/components/sections/pace-initiative/PaceInitiativeSection";
import AcademicApproachSection from "@/components/sections/approach/AcademicApproachSection";
import StudentResultsSection from "@/components/sections/results/StudentResultsSection";
import ScholarshipSection from "@/components/sections/scholarship/ScholarshipSection";
import LearningOptionsSection from "@/components/sections/learning-options/LearningOptionsSection";
import WhyRsaSection from "@/components/sections/why-rsa/WhyRsaSection";
import AdmissionsSection from "@/components/sections/admissions/AdmissionsSection";
import LocationContactSection from "@/components/sections/contact/LocationContactSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6ef] text-[#202b35] selection:bg-[#192e4b] selection:text-white">
      {/* Institutional Top Bar */}
      <TopNoticeBar />

      {/* Main Navigation Header with Mobile Drawer */}
      <Header />

      {/* Main Landing Page Structure */}
      <main id="main-content">
        {/* 1. Hero Area (Banner, Announcement, and Foundation Intro) */}
        <HeroSection />

        {/* 2. About Ramanujan Scholar Academy */}
        <AboutSection />

        {/* 3. Academic Programmes Coverage */}
        <AcademicProgrammesSection />

        {/* 4. PACE IIT & NEET Mumbai Integrated Programme & Mission Super 45 */}
        <PaceInitiativeSection />

        {/* 5. Academic Approach & Pillars */}
        <AcademicApproachSection />

        {/* 6. Dedicated Interactive Student Results Showcase */}
        <StudentResultsSection />

        {/* 7. Scholarship-cum-Entrance Examination 2026 */}
        <ScholarshipSection />

        {/* 8. Regular Batches & Learning Options */}
        <LearningOptionsSection />

        {/* 9. Why Ramanujan Scholar Academy */}
        <WhyRsaSection />

        {/* 10. Admissions & Interactive Enquiry Form */}
        <AdmissionsSection />

        {/* 11. Location & Campus Contact */}
        <LocationContactSection />
      </main>

      {/* 12. Final Footer Message & Quick Links */}
      <Footer />
    </div>
  );
}
