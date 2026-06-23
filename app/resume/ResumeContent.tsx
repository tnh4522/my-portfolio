'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Printer, Mail, MapPin, Phone, Globe } from 'lucide-react';
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
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-base">
      {/* ── Top bar (hidden in print) ── */}
      <div className="print:hidden sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-inner flex items-center justify-between h-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent-blue border border-accent-blue/40 rounded-lg hover:bg-accent-blue/10 transition-colors cursor-pointer"
          >
            <Printer size={16} />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Resume content ── */}
      <div className="container-inner py-12 print:py-0 print:max-w-none">
        <div className="max-w-[800px] mx-auto bg-bg-surface rounded-2xl print:rounded-none print:bg-white print:text-black border print:border-none overflow-hidden" style={{ borderColor: 'var(--border)' }}>
          
          {/* ── Header ── */}
          <div className="p-8 pb-6 border-b print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 ring-2 ring-accent-blue/30 ring-offset-2 ring-offset-bg-surface print:ring-0 print:ring-offset-0">
                <Image
                  src="/images/avatar.jpg"
                  alt={`Photo of ${PERSONAL.name}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-display text-2xl font-bold text-text-primary print:text-black mb-1">
                  {PERSONAL.name}
                </h1>
                <p className="text-accent-blue font-medium text-lg print:text-blue-600">
                  {PERSONAL.role}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-text-secondary text-caption print:text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    <Mail size={12} /> {PERSONAL.email}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Phone size={12} /> {PERSONAL.phone}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> Da Nang, Vietnam
                  </span>
                </div>
                <div className="flex gap-4 mt-2 text-caption">
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

          {/* ── Body ── */}
          <div className="p-8 space-y-8">

            {/* Summary */}
            <section>
              <h2 className="font-display font-bold text-base text-text-primary print:text-black mb-3 uppercase tracking-wider border-b pb-2 print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
                Summary
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed print:text-gray-700">
                {PERSONAL.bio}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="font-display font-bold text-base text-text-primary print:text-black mb-4 uppercase tracking-wider border-b pb-2 print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
                Experience
              </h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={`${exp.company}-${exp.period}`}>
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="font-display font-bold text-text-primary print:text-black text-sm">
                          {exp.role}
                        </h3>
                        <p className="text-accent-blue text-sm font-medium print:text-blue-600">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-text-muted text-caption shrink-0 print:text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-text-secondary text-sm flex gap-2 print:text-gray-700">
                          <span className="text-accent-blue mt-0.5 shrink-0 print:text-blue-600">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-bg-elevated text-text-secondary text-xs font-mono print:bg-gray-100 print:text-gray-700"
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
            <section>
              <h2 className="font-display font-bold text-base text-text-primary print:text-black mb-3 uppercase tracking-wider border-b pb-2 print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
                Education
              </h2>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-text-primary print:text-black text-sm">
                    Da Nang University of Science &amp; Technology
                  </h3>
                  <p className="text-text-secondary text-sm print:text-gray-700">
                    Software Technology Engineer – PFIEV
                  </p>
                  <p className="text-text-muted text-caption mt-0.5 print:text-gray-500">
                    Graduated with Distinction · GPA 8.3/10
                  </p>
                </div>
                <span className="text-text-muted text-caption shrink-0 print:text-gray-500">
                  2020 – 2025
                </span>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="font-display font-bold text-base text-text-primary print:text-black mb-4 uppercase tracking-wider border-b pb-2 print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
                Projects
              </h2>
              <div className="space-y-5">
                {PROJECTS.map((project) => (
                  <div key={project.id}>
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-text-primary print:text-black text-sm inline">
                          {project.title}
                        </h3>
                        <span className="text-text-muted text-caption ml-2 print:text-gray-500">
                          — {project.role}
                        </span>
                      </div>
                      <span className="text-text-muted text-caption shrink-0 print:text-gray-500">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-1 print:text-gray-700">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-bg-elevated text-text-secondary text-xs font-mono print:bg-gray-100 print:text-gray-700"
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
            <section>
              <h2 className="font-display font-bold text-base text-text-primary print:text-black mb-3 uppercase tracking-wider border-b pb-2 print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
                Awards
              </h2>
              <div className="space-y-2">
                {AWARDS.map((award) => (
                  <div key={award.title} className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-sm text-text-primary print:text-black font-medium">
                        {award.prize}
                      </span>
                      <span className="text-text-secondary text-sm print:text-gray-700">
                        {' '}— {award.title}
                      </span>
                      <span className="text-text-muted text-caption print:text-gray-500">
                        {' '}({award.issuer})
                      </span>
                    </div>
                    <span className="text-text-muted text-caption shrink-0 print:text-gray-500">
                      {award.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="font-display font-bold text-base text-text-primary print:text-black mb-3 uppercase tracking-wider border-b pb-2 print:border-gray-200" style={{ borderColor: 'var(--border)' }}>
                Skills
              </h2>
              <div className="space-y-2">
                {SKILLS.map((skill) => (
                  <div key={skill.category} className="flex gap-3">
                    <span className="text-sm font-medium text-text-primary print:text-black w-32 shrink-0">
                      {skill.category}:
                    </span>
                    <span className="text-sm text-text-secondary print:text-gray-700">
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
  );
}
