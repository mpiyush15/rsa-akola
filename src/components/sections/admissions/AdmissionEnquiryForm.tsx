"use client";

import React, { useState } from "react";
import Arrow from "@/components/ui/Arrow";
import { ADMISSIONS_CONTENT } from "@/data/landingData";

export default function AdmissionEnquiryForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    mobileNumber: "",
    standard: "Class 7th",
    board: "CBSE Board",
    medium: "English Medium",
    programme: "School Foundation (Class 3–8)",
    learningPreference: "Offline Classroom (Akola)",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant secure form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="border border-[#496b58]/40 bg-[#f8f6ef] p-6 sm:p-8 text-center shadow-xs">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#496b58] text-xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#192e4b]">
          Thank You, {formData.parentName || "Parent"}!
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#626b6b]">
          Your admission enquiry for student <strong className="text-[#192e4b]">{formData.studentName || "your child"}</strong> has been received. Our counsellors will contact you on <strong className="text-[#192e4b]">{formData.mobileNumber}</strong> shortly.
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold uppercase tracking-wider text-[#a8322b] underline hover:text-[#872720] cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#ded8ca] bg-white p-5 sm:p-9"
      aria-label="Admissions Enquiry Form"
    >
      <div className="border-b border-[#ded8ca]/60 pb-4">
        <h3 className="text-xl font-bold text-[#192e4b] sm:text-2xl">
          Online Admission Enquiry
        </h3>
        <p className="mt-1 text-xs text-[#626b6b]">
          Fill in your details below and our team will get in touch with batch schedules and guidance.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Parent Name */}
        <div>
          <label
            htmlFor="parentName"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Parent / Guardian Name *
          </label>
          <input
            id="parentName"
            type="text"
            required
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#192e4b]"
          />
        </div>

        {/* Student Name */}
        <div>
          <label
            htmlFor="studentName"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Student Name *
          </label>
          <input
            id="studentName"
            type="text"
            required
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="e.g. Aarav Sharma"
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#192e4b]"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Mobile Number *
          </label>
          <input
            id="mobileNumber"
            type="tel"
            required
            pattern="[0-9]{10}"
            title="10-digit mobile number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#192e4b]"
          />
        </div>

        {/* Current Standard */}
        <div>
          <label
            htmlFor="standard"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Current Standard *
          </label>
          <select
            id="standard"
            name="standard"
            value={formData.standard}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none"
          >
            {ADMISSIONS_CONTENT.standardOptions.map((std) => (
              <option key={std} value={std}>
                {std}
              </option>
            ))}
          </select>
        </div>

        {/* School Board */}
        <div>
          <label
            htmlFor="board"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            School Board
          </label>
          <select
            id="board"
            name="board"
            value={formData.board}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none"
          >
            {ADMISSIONS_CONTENT.boardOptions.map((bd) => (
              <option key={bd} value={bd}>
                {bd}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Medium */}
        <div>
          <label
            htmlFor="medium"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Preferred Medium
          </label>
          <select
            id="medium"
            name="medium"
            value={formData.medium}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none"
          >
            {ADMISSIONS_CONTENT.mediumOptions.map((med) => (
              <option key={med} value={med}>
                {med}
              </option>
            ))}
          </select>
        </div>

        {/* Programme of Interest */}
        <div>
          <label
            htmlFor="programme"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Programme of Interest
          </label>
          <select
            id="programme"
            name="programme"
            value={formData.programme}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none"
          >
            {ADMISSIONS_CONTENT.programmesOfInterest.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Learning Preference */}
        <div>
          <label
            htmlFor="learningPreference"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#192e4b]"
          >
            Learning Preference
          </label>
          <select
            id="learningPreference"
            name="learningPreference"
            value={formData.learningPreference}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-[#ded8ca] bg-[#f8f6ef]/50 px-3.5 py-3 text-base sm:text-xs text-[#192e4b] transition focus:border-[#192e4b] focus:bg-white focus:outline-none"
          >
            {ADMISSIONS_CONTENT.learningPreferences.map((pref) => (
              <option key={pref} value={pref}>
                {pref}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 border-t border-[#ded8ca]/60 pt-5">
        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-3 bg-[#a8322b] py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#872720] disabled:opacity-60 cursor-pointer"
        >
          <span>{loading ? "Submitting..." : "Submit Admission Enquiry"}</span>
          {!loading && <Arrow diagonal />}
        </button>
      </div>
    </form>
  );
}
