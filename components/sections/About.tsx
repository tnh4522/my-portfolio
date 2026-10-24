'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { PERSONAL, CERTIFICATIONS, VOLUNTEERING } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

/* ── animation presets ── */
const containerVariants = {
  animate: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── quick-stats data ── */
const stats = [
  { value: '2+', label: 'Years Experience', sub: 'ERP, CRM & E-commerce' },
  { value: '10+', label: 'Projects & Integrations', sub: 'Production & Full-stack' },
  { value: '6', label: 'Awards Won', sub: 'Regional & University' },
  { value: '8.39', label: 'GPA / 10', sub: 'Graduated w/ Distinction' },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const skip = !!prefersReducedMotion;

  return (
    <section id="about">
      <div className="container-inner">
        <SectionHeading title="About Me" index={1} />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12"
          variants={skip ? undefined : containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ── Left: bio + education ── */}
          <div className="flex flex-col gap-8">
            {/* Avatar + name card */}
            <motion.div
              className="flex items-center gap-5"
              variants={skip ? undefined : fadeUp}
            >
              <div
                className="w-20 h-20 rounded-2xl overflow-hidden shrink-0"
                style={{ boxShadow: '0 0 0 2px var(--accent-primary), 0 4px 20px var(--glow)' }}
              >
                <Image
                  src="/images/avatar.jpg"
                  alt={`Photo of ${PERSONAL.name}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3
                  className="font-display font-extrabold text-text-primary"
                  style={{ fontSize: 'var(--text-h2)', letterSpacing: '-0.01em' }}
                >
                  {PERSONAL.name}
                </h3>
                <p
                  className="font-mono text-[11px] uppercase tracking-widest mt-1"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {PERSONAL.role}
                </p>
                <div className="text-text-muted text-caption mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {PERSONAL.location}
                  </span>
                  {PERSONAL.dob && (
                    <span className="font-mono text-[11px]">
                      · DOB: {PERSONAL.dob}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-text-secondary text-body leading-relaxed"
              variants={skip ? undefined : fadeUp}
            >
              {PERSONAL.bio}
            </motion.p>

            {/* Education card */}
            <motion.div
              className="card-surface rounded-2xl p-6"
              style={{ borderLeft: '3px solid var(--accent-primary)' }}
              variants={skip ? undefined : fadeUp}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-widest mb-2 block"
                style={{ color: 'var(--text-muted)' }}
              >
                Education
              </span>
              <h3
                className="font-display font-extrabold text-text-primary text-base mb-1"
                style={{ letterSpacing: '-0.01em' }}
              >
                Da Nang University of Science &amp; Technology — UD
              </h3>
              <p className="text-text-secondary text-sm">
                Information Technology Engineer — High-Quality Vietnamese–French Engineering Program (PFIEV)
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['09/2020 – 09/2025', 'Graduated with Distinction (Giỏi)', 'GPA 8.39 / 10', '303 Credits · 10 Semesters'].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full"
                    style={{
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: stats grid + certifications & volunteering ── */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4 content-start">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="card-surface rounded-2xl p-5 flex flex-col gap-1.5 transition-all duration-300 hover:-translate-y-1"
                  variants={skip ? undefined : fadeUp}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px var(--glow)';
                    e.currentTarget.style.borderColor = 'rgba(79,156,249,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <span
                    className="font-display font-extrabold leading-none"
                    style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                      letterSpacing: '-0.03em',
                      color: i === 0 ? 'var(--accent-primary)' : 'var(--text-primary)',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-text-secondary text-caption font-medium">
                    {stat.label}
                  </span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {stat.sub}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Certifications & Volunteering card */}
            <motion.div
              className="card-surface rounded-2xl p-5 flex flex-col gap-4"
              variants={skip ? undefined : fadeUp}
            >
              <div>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest mb-2.5 block"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Certifications
                </span>
                <div className="flex flex-col gap-2.5">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="flex flex-col gap-0.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-text-primary text-xs font-semibold">
                          {cert.name.split('–')[0].trim()}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted shrink-0">
                          {cert.date}
                        </span>
                      </div>
                      <span className="text-text-secondary text-xs">
                        {cert.issuer} · {cert.details[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pt-3"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-widest mb-2 block"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Volunteering
                </span>
                {VOLUNTEERING.map((vol) => (
                  <div key={vol.id} className="flex flex-col gap-0.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-text-primary text-xs font-semibold">
                        {vol.role} — UD Summer Campaign
                      </span>
                      <span className="font-mono text-[10px] text-text-muted shrink-0">
                        {vol.date}
                      </span>
                    </div>
                    <span className="text-text-secondary text-xs leading-relaxed">
                      {vol.organization}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

