import React from "react";

const courses = [
  {
    number: "01",
    title: "Foundation",
    classes: "Classes 3–5",
    description: "Build strong fundamentals in Mathematics and Science.",
  },
  {
    number: "02",
    title: "Middle School",
    classes: "Classes 6–8",
    description: "Develop conceptual clarity and problem-solving skills.",
  },
  {
    number: "03",
    title: "Board Preparation",
    classes: "Classes 9–10",
    description: "Strengthen subject knowledge and examination readiness.",
  },
  {
    number: "04",
    title: "JEE & NEET",
    classes: "Classes 11–12",
    description: "Prepare for competitive examinations with focused practice.",
  },
];

const learningFeatures = [
  {
    number: "01",
    title: "Expert Faculty",
    description: "Guidance from experienced teachers, with subject-focused learning.",
  },
  {
    number: "02",
    title: "Regular Tests",
    description: "Practice, assessment and analysis to identify learning gaps.",
  },
  {
    number: "03",
    title: "Doubt Solving",
    description: "Dedicated support to help students strengthen their understanding.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-[2px] w-8 bg-[#a8322b]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#496b58] sm:text-xs">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6ef] text-[#202b35]">

      {/* Top information strip */}
      <div className="bg-[#192e4b] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-5 py-2.5 text-[10px] sm:px-8 sm:text-xs">
          <p className="tracking-wide text-white/90">
            RAMANUJAN SCHOLAR ACADEMY <span className="mx-2 text-[#d4bc83]">/</span> AKOLA
          </p>
          <a
            href="tel:9823079945"
            className="transition hover:text-[#e7d19d]"
          >
            Admissions & Enquiries: 98230 79945
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-[#e4dfd3] bg-[#f8f6ef]">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:py-6">

          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#192e4b] text-3xl font-bold text-[#192e4b]">
              R<span className="-ml-1 mt-3 text-[#a8322b]">.</span>
            </div>
            <div>
              <p className="text-sm font-bold uppercase leading-tight tracking-[0.06em] text-[#192e4b] sm:text-base">
                Ramanujan
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#496b58] sm:text-[10px]">
                Scholar Academy
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-[12px] font-semibold text-[#46515a] xl:flex">
            <a href="#home" className="transition hover:text-[#a8322b]">Home</a>
            <a href="#about" className="transition hover:text-[#a8322b]">About Us</a>
            <a href="#courses" className="transition hover:text-[#a8322b]">Courses</a>
            <a href="#results" className="transition hover:text-[#a8322b]">Achievements</a>
            <a href="#scholarship" className="transition hover:text-[#a8322b]">Scholarship Exam</a>
          </div>

          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-3 bg-[#a8322b] px-4 py-3 text-[11px] font-bold text-white transition hover:bg-[#872720] sm:px-5 sm:text-xs"
          >
            Admissions Enquiry <Arrow diagonal />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[600px] lg:grid-cols-[1.04fr_0.96fr]">

          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <SectionLabel>Academic Excellence · Akola</SectionLabel>

            <h1 className="max-w-[680px] text-4xl font-bold leading-[1.15] tracking-tight text-[#192e4b] sm:text-5xl xl:text-6xl">
              A Strong Foundation
              <span className="mt-2 block font-bold text-[#496b58]">
                for a Brighter Future.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#626b6b] sm:text-base sm:leading-8">
              Helping students develop strong concepts, disciplined study
              habits and the confidence to aim higher — from school
              foundations to JEE and NEET preparation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                className="group inline-flex items-center gap-4 bg-[#192e4b] px-6 py-4 text-xs font-bold text-white transition hover:bg-[#294665] sm:text-sm"
              >
                Explore Our Courses <Arrow />
              </a>
              <a
                href="#scholarship"
                className="inline-flex items-center gap-3 border border-[#d5cbbc] px-6 py-4 text-xs font-bold text-[#192e4b] transition hover:border-[#a8322b] hover:text-[#a8322b] sm:text-sm"
              >
                Scholarship Exam <Arrow diagonal />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#ded8ca] pt-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#65706c] sm:gap-x-7">
              <span>Foundation Courses</span>
              <span className="h-1 w-1 rounded-full bg-[#a8322b]" />
              <span>JEE & NEET</span>
              <span className="h-1 w-1 rounded-full bg-[#a8322b]" />
              <span>Scholarships</span>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative min-h-[390px] overflow-hidden bg-[#eae3d3] sm:min-h-[500px] lg:min-h-full">

            <div className="absolute inset-0 bg-[linear-gradient(135deg,#eae3d3_0%,#d8d8c8_100%)]" />

            <div className="absolute right-0 top-0 h-full w-[22%] border-l border-[#192e4b]/10 bg-[#192e4b]/[0.025]" />

            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 sm:left-10 sm:top-10">
              <span className="h-2 w-2 rounded-full bg-[#496b58]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#192e4b]">
                Learning With Purpose
              </p>
            </div>

            <div className="absolute inset-x-5 bottom-5 top-20 sm:inset-x-10 sm:bottom-10 sm:top-24">
              <div className="relative h-full overflow-hidden border border-white/70 bg-[#f8f6ef]">

                {/* Academy result poster */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rsa-results-poster.jpg"
                  alt="Ramanujan Scholar Academy student achievements"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 bg-[#192e4b]/95 px-5 py-5 text-white sm:px-7 sm:py-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9c58f]">
                    The Journey of Learning
                  </p>
                  <p className="mt-2 text-xl font-bold sm:text-2xl">
                    Every student. Every milestone.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] lg:block">
              <p className="px-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#192e4b]/60">
                Ramanujan Scholar Academy · Akola
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic information ribbon */}
      <div className="bg-[#192e4b] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-white/15 sm:grid-cols-4">
          {[
            ["01", "School Foundation", "Classes 3–8"],
            ["02", "Board Preparation", "Classes 9–10"],
            ["03", "Competitive Exams", "JEE & NEET"],
            ["04", "Learning Options", "Online & Offline"],
          ].map(([number, title, detail]) => (
            <div key={number} className="px-5 py-5 sm:px-7 sm:py-6">
              <p className="text-[10px] font-bold text-[#d9c58f]">{number}</p>
              <p className="mt-2 text-xs font-bold sm:text-sm">{title}</p>
              <p className="mt-1 text-[10px] text-white/65 sm:text-xs">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About the academy */}
      <section id="about" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel>About The Academy</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl">
              Education that goes beyond the classroom.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#626b6b]">
              At Ramanujan Scholar Academy, learning is about building
              understanding step by step. Our academic programmes support
              students through school foundations, board preparation and
              competitive examination pathways.
            </p>

            <div className="mt-8 border-t border-[#ded8ca] pt-5">
              <a href="#courses" className="group inline-flex items-center gap-3 text-sm font-bold text-[#192e4b] hover:text-[#a8322b]">
                Discover our academic programmes <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="border-y border-[#e4dfd3] bg-[#f0eee5]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Academic Programmes</SectionLabel>
              <h2 className="text-3xl font-bold text-[#192e4b] sm:text-4xl">
                The right path, at every stage.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#626b6b]">
              Explore learning pathways designed for different stages of
              a student's academic journey.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d8d1c2] sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article
                key={course.number}
                className="group flex min-h-[265px] flex-col border-b border-r border-[#d8d1c2] bg-[#f8f6ef] p-6 transition-colors hover:bg-white sm:p-7 lg:p-6 xl:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#a8322b]">
                    {course.number}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#65706c]">
                    {course.classes}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-[#192e4b] sm:text-2xl">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#626b6b]">
                  {course.description}
                </p>

                <a
                  href="#contact"
                  className="mt-auto flex items-center justify-between border-t border-[#e4dfd3] pt-5 text-xs font-bold text-[#192e4b] group-hover:text-[#a8322b]"
                >
                  Course Enquiry <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning approach */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
        <SectionLabel>Our Approach</SectionLabel>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <h2 className="max-w-lg text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl">
            Strong concepts. Consistent practice. Better preparation.
          </h2>

          <div className="divide-y divide-[#ded8ca] border-t border-[#ded8ca]">
            {learningFeatures.map((feature) => (
              <article key={feature.number} className="grid grid-cols-[45px_1fr] gap-4 py-6 sm:grid-cols-[60px_1fr]">
                <span className="text-xl font-bold text-[#a8322b]">{feature.number}</span>
                <div>
                  <h3 className="text-base font-bold text-[#192e4b]">{feature.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-[#626b6b]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="results" className="bg-[#192e4b] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionLabel>Student Achievements</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Every achievement has a story.
              </h2>
            </div>
            <p className="text-sm leading-7 text-white/70">
              Celebrate the hard work of students through verified academic
              results, examination achievements and scholarship recognition.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-white/15 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9c58f]">
                JEE & NEET
              </p>
              <h3 className="mt-4 text-xl font-bold">Competitive Results</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Student achievements and examination outcomes.
              </p>
            </div>

            <div className="border border-white/15 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9c58f]">
                School Academics
              </p>
              <h3 className="mt-4 text-xl font-bold">Academic Excellence</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Recognising achievement in school and subject examinations.
              </p>
            </div>

            <div className="border border-white/15 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9c58f]">
                Scholarships
              </p>
              <h3 className="mt-4 text-xl font-bold">Student Recognition</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                A dedicated space for scholarship examination results.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <a href="#contact" className="group inline-flex items-center gap-3 text-sm font-bold text-[#e7d19d] hover:text-white">
              Enquire about our programmes <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      {/* Scholarship CTA */}
      <section id="scholarship" className="border-b border-[#ded8ca] bg-[#e9e2d2]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-10 md:grid-cols-[1fr_auto] md:items-center lg:px-14 lg:py-20">
          <div>
            <SectionLabel>Scholarship Cum Entrance Exam</SectionLabel>
            <h2 className="max-w-2xl text-2xl font-bold leading-tight text-[#192e4b] sm:text-3xl">
              Give your child the opportunity to move forward.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#626b6b]">
              Contact the academy for the latest examination dates,
              eligibility, registration process and scholarship details.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-4 bg-[#a8322b] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#872720]"
          >
            Register Your Interest <Arrow diagonal />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <SectionLabel>Admissions & Enquiries</SectionLabel>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#192e4b] sm:text-4xl">
              Let's plan the next step in your child's education.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#626b6b]">
              Talk to the academy about course options, available batches,
              preferred learning medium and admission procedures.
            </p>

            <div className="mt-9 border-t border-[#ded8ca] pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#496b58]">
                Visit Our Academy
              </p>
              <p className="mt-3 text-xl font-bold text-[#192e4b]">
                Ramanujan Scholar Academy
              </p>
              <p className="mt-2 text-sm text-[#626b6b]">
                Rautwadi, Akola, Maharashtra
              </p>
            </div>
          </div>

          <div className="border border-[#ded8ca] bg-white p-6 sm:p-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#496b58]">
              Speak With Our Team
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[#192e4b]">
              Admissions Enquiry
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#626b6b]">
              Get in touch for course information and registration guidance.
            </p>

            <div className="mt-7 space-y-3">
              {[
                ["9823079945", "tel:9823079945"],
                ["7057616718", "tel:7057616718"],
              ].map(([number, href]) => (
                <a
                  key={number}
                  href={href}
                  className="group flex items-center justify-between border-b border-[#e7e2d7] py-4 text-sm font-semibold text-[#192e4b] transition hover:text-[#a8322b]"
                >
                  <span>+91 {number}</span>
                  <Arrow diagonal />
                </a>
              ))}
            </div>

            <a
              href="https://ramanujanakola.com"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 text-xs font-bold text-[#496b58] hover:text-[#a8322b]"
            >
              Visit Academy Website <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14243a] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-10 lg:px-14">
          <div className="grid gap-10 border-b border-white/15 pb-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="text-xl font-bold">Ramanujan Scholar Academy</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
                Supporting students through school foundations,
                competitive preparation and scholarship examinations.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9c58f]">
                Explore
              </p>
              <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/70">
                <a href="#about" className="hover:text-white">About the Academy</a>
                <a href="#courses" className="hover:text-white">Academic Programmes</a>
                <a href="#results" className="hover:text-white">Student Achievements</a>
                <a href="#scholarship" className="hover:text-white">Scholarship Exam</a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9c58f]">
                Contact
              </p>
              <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/70">
                <span>Rautwadi, Akola</span>
                <a href="tel:9823079945" className="hover:text-white">9823079945</a>
                <a href="tel:7057616718" className="hover:text-white">7057616718</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-white/45 sm:flex-row sm:items-center">
            <p>© 2026 Ramanujan Scholar Academy, Akola.</p>
            <p>Built for learning, achievement and opportunity.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
