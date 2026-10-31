import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { COURSES } from "@/data/landingData";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  return (
    <section id="courses" className="border-y border-[#e4dfd3] bg-[#f0eee5]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
        {/* Section Header Subdivision */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Academic Programmes</SectionLabel>
            <h2 className="text-3xl font-bold text-[#192e4b] sm:text-4xl">
              The right path, at every stage.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#626b6b]">
            Explore learning pathways designed for different stages of a student&apos;s academic journey.
          </p>
        </div>

        {/* Courses Subdivision Grid */}
        <div className="mt-12 grid border-l border-t border-[#d8d1c2] sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => (
            <CourseCard key={course.number} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
