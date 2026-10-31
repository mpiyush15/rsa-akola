import React from "react";
import Arrow from "@/components/ui/Arrow";
import { CourseItem } from "@/data/landingData";

interface CourseCardProps {
  course: CourseItem;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex min-h-[265px] flex-col border-b border-r border-[#d8d1c2] bg-[#f8f6ef] p-6 transition-all duration-300 hover:bg-white hover:shadow-sm sm:p-7 lg:p-6 xl:p-8">
      {/* Top Number & Class Tag */}
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-[#a8322b]">
          {course.number}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#65706c] bg-[#ded8ca]/30 px-2 py-0.5 rounded-sm">
          {course.classes}
        </span>
      </div>

      {/* Course Title */}
      <h3 className="mt-8 text-xl font-bold text-[#192e4b] sm:text-2xl transition-colors group-hover:text-[#a8322b]">
        {course.title}
      </h3>

      {/* Course Description */}
      <p className="mt-3 text-sm leading-7 text-[#626b6b]">
        {course.description}
      </p>

      {/* Action / Enquiry Link */}
      <a
        href={course.href || "#contact"}
        className="mt-auto flex items-center justify-between border-t border-[#e4dfd3] pt-5 text-xs font-bold text-[#192e4b] transition-colors group-hover:text-[#a8322b]"
      >
        <span>Course Enquiry</span>
        <Arrow diagonal />
      </a>
    </article>
  );
}
