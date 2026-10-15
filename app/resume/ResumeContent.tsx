'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Printer, Download, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { PERSONAL, EXPERIENCES, PROJECTS, AWARDS, SKILLS } from '@/lib/data';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ResumeContent() {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = 'Tran-Ngoc-Huy-CV';
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-base">
      {/* ── Top bar (hidden in print) ── */}
      <div className="print:hidden sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-inner flex items-center justify-between h-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden text-xs">Back</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Tran-Ngoc-Huy-CV.pdf"
              download="Tran-Ngoc-Huy-CV.pdf"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors shadow-xs shrink-0"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-accent-blue border border-accent-blue/40 rounded-lg hover:bg-accent-blue/10 transition-colors cursor-pointer shrink-0"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Resume content ── */}
      <div className="container-inner py-12 print:py-0 print:px-0 print:max-w-none print:m-0">
        <div className="cv-sheet max-w-[800px] mx-auto bg-bg-surface rounded-2xl print:rounded-none print:bg-white print:text-black border print:border-none print:shadow-none print:overflow-visible print:max-w-none print:w-full print:m-0 overflow-hidden" style={{ borderColor: 'var(--border)' }}>
          
          {/* ════════ PAGE 1 ════════ */}
          <div className="cv-page p-8 pb-4 print:p-0">
            {/* Header */}
            <div className="pb-6 print:pb-3 border-b print:border-gray-300 print:mb-3" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-start gap-6 print:gap-4">
                <div className="w-24 h-24 print:w-24 print:h-24 rounded-xl overflow-hidden shrink-0 ring-2 ring-accent-blue/30 ring-offset-2 ring-offset-bg-surface print:ring-0 print:ring-offset-0">
                  <Image
                    src="/images/avatar.jpg"
                    alt={`Photo of ${PERSONAL.name}`}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="font-display text-2xl print:text-[22px] font-bold text-text-primary print:text-black mb-0.5">
                    {PERSONAL.name}
                  </h1>
                  <p className="text-accent-blue font-medium text-lg print:text-[14px] print:text-blue-600">
                    {PERSONAL.role}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2.5 print:mt-1.5 text-text-secondary text-caption print:text-[11.5px] print:text-gray-600">
                    <a
                      href={`mailto:${PERSONAL.email}`}
                      className="inline-flex items-center gap-1 hover:text-accent-blue transition-colors print:text-gray-600"
                    >
                      <Mail size={12} /> {PERSONAL.email}
                    </a>
                    <a
                      href={`tel:${PERSONAL.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 hover:text-accent-blue transition-colors print:text-gray-600"
                    >
                      <Phone size={12} /> {PERSONAL.phone}
                    </a>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> Da Nang, Vietnam
                    </span>
                  </div>
                  <div className="flex gap-4 mt-2 print:mt-1.5 text-caption print:text-[11.5px]">
                    <a
                      href={PERSONAL.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-text-secondary hover:text-accent-blue transition-colors print:text-gray-600"
                    >
                      <LinkedinIcon className="w-3 h-3" /> LinkedIn
                    </a>
                    <a
                      href={PERSONAL.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-text-secondary hover:text-accent-blue transition-colors print:text-gray-600"
                    >
                      <GithubIcon className="w-3 h-3" /> GitHub
                    </a>
                    {PERSONAL.website && (
                      <a
                        href={PERSONAL.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-text-secondary hover:text-accent-blue transition-colors print:text-gray-600"
                      >
                        <Globe className="w-3 h-3" /> Portfolio
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Page 1 Body */}
            <div className="space-y-8 print:space-y-3.5">
              {/* Summary */}
              <section className="cv-avoid-break">
                <h2 className="font-display font-bold text-base print:text-[13px] text-text-primary print:text-black mb-3 print:mb-1.5 uppercase tracking-wider border-b pb-2 print:pb-1 print:border-gray-300 cv-heading" style={{ borderColor: 'var(--border)' }}>
                  Summary
                </h2>
                <p className="text-text-secondary text-sm print:text-[12px] leading-relaxed print:leading-[1.48] print:text-gray-700">
                  {PERSONAL.bio}
                </p>
              </section>

              {/* Experience */}
              <section className="cv-avoid-break">
                <h2 className="font-display font-bold text-base print:text-[13px] text-text-primary print:text-black mb-4 print:mb-1.5 uppercase tracking-wider border-b pb-2 print:pb-1 print:border-gray-300 cv-heading" style={{ borderColor: 'var(--border)' }}>
                  Experience
                </h2>
                <div className="space-y-6 print:space-y-3">
                  {EXPERIENCES.map((exp) => (
                    <div key={`${exp.company}-${exp.period}`} className="cv-avoid-break">
                      <div className="flex items-start justify-between gap-4 mb-1 print:mb-0.5">
                        <div>
                          <h3 className="font-display font-bold text-text-primary print:text-black text-sm print:text-[12.5px]">
                            {exp.role}
                          </h3>
                          <p className="text-accent-blue text-sm print:text-[12px] font-medium print:text-blue-600">
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                        <span className="text-text-muted text-caption print:text-[11px] shrink-0 print:text-gray-500">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-2 print:mt-1 space-y-1 print:space-y-0.5">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-text-secondary text-sm print:text-[12px] print:leading-[1.4] flex gap-2 print:text-gray-700">
                            <span className="text-accent-blue mt-0.5 shrink-0 print:text-blue-600">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 print:gap-1 mt-3 print:mt-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 print:px-1.5 print:py-0.2 rounded-md bg-bg-elevated text-text-secondary text-xs print:text-[10px] font-mono print:bg-gray-100 print:text-gray-700 print:border print:border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="cv-avoid-break">
                <h2 className="font-display font-bold text-base print:text-[13px] text-text-primary print:text-black mb-3 print:mb-1.5 uppercase tracking-wider border-b pb-2 print:pb-1 print:border-gray-300 cv-heading" style={{ borderColor: 'var(--border)' }}>
                  Education
                </h2>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-text-primary print:text-black text-sm print:text-[12.5px]">
                        Da Nang University of Science &amp; Technology (DUT)
                      </h3>
                      <p className="text-accent-blue font-medium text-sm print:text-[12px] print:text-blue-600">
                        Information Technology Engineer — PFIEV (Programme de Formation d&apos;Ingénieurs d&apos;Excellence au Vietnam)
                      </p>
                    </div>
                    <span className="text-text-muted text-caption print:text-[11px] shrink-0 print:text-gray-500 font-mono">
                      09/2020 – 09/2025
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm print:text-[11.5px] mt-1 print:mt-0.5 print:text-gray-700">
                    <span className="font-semibold text-text-primary print:text-black">Degree Classification:</span> Distinction (Giỏi) · <span className="font-semibold text-text-primary print:text-black">GPA:</span> 8.39 / 10 · 303 credits (10 semesters)
                  </p>

                  <div className="mt-2 print:mt-1.5 text-text-secondary text-xs print:text-[11px] print:leading-[1.4] print:text-gray-700 bg-bg-elevated/50 print:bg-gray-50 p-2.5 print:p-2 rounded-lg border border-border/50 print:border-gray-200">
                    <p className="font-semibold text-text-primary print:text-black mb-1 print:mb-0.5 text-caption print:text-[11px]">
                      Core CS &amp; Software Engineering Curriculum:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0.5 list-disc list-inside">
                      <li>Operating Systems, Computer Architecture, System &amp; Linux Programming</li>
                      <li>Computer Networks, Advanced &amp; Mobile Networking, Network Design &amp; QoS</li>
                      <li>Network Security, Information Security &amp; Cryptography</li>
                      <li>Databases, Advanced DB, Data Structures &amp; Data Mining</li>
                      <li>Software Architecture, Distributed Systems &amp; Service-Oriented Architecture (SOA)</li>
                      <li>Software Quality Assurance, Testing &amp; Software Project Management, ERP</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* ════════ PAGE 2 ════════ */}
          <div className="cv-page p-8 pt-4 print:p-0">
            <div className="space-y-8 print:space-y-3.5">
              {/* Projects */}
              <section className="cv-avoid-break">
                <h2 className="font-display font-bold text-base print:text-[13px] text-text-primary print:text-black mb-4 print:mb-1.5 uppercase tracking-wider border-b pb-2 print:pb-1 print:border-gray-300 cv-heading" style={{ borderColor: 'var(--border)' }}>
                  Projects
                </h2>
                <div className="space-y-5 print:space-y-2.5">
                  {PROJECTS.map((project) => (
                    <div key={project.id} className="cv-avoid-break">
                      <div className="flex items-start justify-between gap-4 mb-1 print:mb-0.5">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-text-primary print:text-black text-sm print:text-[12.5px] inline">
                            {project.title}
                          </h3>
                          <span className="text-text-muted text-caption print:text-[11px] ml-2 print:text-gray-500">
                            — {project.role}
                          </span>
                        </div>
                        <span className="text-text-muted text-caption print:text-[11px] shrink-0 print:text-gray-500">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm print:text-[12px] print:leading-[1.4] mb-1 print:mb-0.5 print:text-gray-700">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 print:gap-1 mt-1.5 print:mt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 print:px-1.5 print:py-0.2 rounded-md bg-bg-elevated text-text-secondary text-xs print:text-[10px] font-mono print:bg-gray-100 print:text-gray-700 print:border print:border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Awards */}
              <section className="cv-avoid-break">
                <h2 className="font-display font-bold text-base print:text-[13px] text-text-primary print:text-black mb-3 print:mb-1.5 uppercase tracking-wider border-b pb-2 print:pb-1 print:border-gray-300 cv-heading" style={{ borderColor: 'var(--border)' }}>
                  Awards
                </h2>
                <div className="space-y-2 print:space-y-1">
                  {AWARDS.map((award) => (
                    <div key={award.title} className="flex items-start justify-between gap-4 cv-avoid-break">
                      <div className="min-w-0">
                        <span className="text-sm print:text-[12px] text-text-primary print:text-black font-medium">
                          {award.prize}
                        </span>
                        <span className="text-text-secondary text-sm print:text-[12px] print:text-gray-700">
                          {' '}— {award.title}
                        </span>
                        <span className="text-text-muted text-caption print:text-[11px] print:text-gray-500">
                          {' '}({award.issuer})
                        </span>
                      </div>
                      <span className="text-text-muted text-caption print:text-[11px] shrink-0 print:text-gray-500">
                        {award.date}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="cv-avoid-break">
                <h2 className="font-display font-bold text-base print:text-[13px] text-text-primary print:text-black mb-3 print:mb-1.5 uppercase tracking-wider border-b pb-2 print:pb-1 print:border-gray-300 cv-heading" style={{ borderColor: 'var(--border)' }}>
                  Skills
                </h2>
                <div className="space-y-2 print:space-y-1.5">
                  {SKILLS.map((skill) => (
                    <div key={skill.category} className="flex gap-3 items-baseline cv-avoid-break">
                      <span className="text-sm print:text-[12px] font-semibold text-text-primary print:text-black w-44 shrink-0">
                        {skill.category}:
                      </span>
                      <span className="text-sm print:text-[12px] print:leading-[1.4] text-text-secondary print:text-gray-700">
                        {skill.items.join(' · ')}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
