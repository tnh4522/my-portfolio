'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import SkillBadge from './SkillBadge';

interface TimelineItemProps {
  company: string;
  location: string;
  role: string;
  period: string;
  type: 'full-time' | 'internship';
  bullets: string[];
  techStack?: string[];
  isActive?: boolean;
  logo?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TimelineItem({
  company,
  location,
  role,
  period,
  type,
  bullets,
  techStack,
  isActive = false,
  logo,
}: TimelineItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative pl-9 pb-14 last:pb-0 group"
      variants={prefersReducedMotion ? undefined : fadeUp}
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Gradient vertical line */}
      <div
        className="absolute left-[6px] top-3 bottom-0 w-px group-last:hidden"
        style={{
          background: 'linear-gradient(to bottom, var(--accent-primary) 0%, var(--border) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Dot indicator */}
      <div className="absolute left-0 top-[6px]" aria-hidden="true">
        {isActive ? (
          <span
            className="relative flex w-3 h-3"
            title="Current role"
          >
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ background: 'var(--accent-primary)' }}
            />
            <span
              className="relative inline-flex rounded-full w-3 h-3"
              style={{ background: 'var(--accent-primary)' }}
            />
          </span>
        ) : (
          <span
            className="block w-3 h-3 rounded-full border-2"
            style={{ borderColor: 'var(--text-muted)', background: 'var(--bg-base)' }}
          />
        )}
      </div>

      {/* Content card */}
      <div
        className="card-surface rounded-2xl p-6 transition-all duration-300 hover:border-accent-blue/40"
        style={{
          boxShadow: isActive ? '0 4px 24px var(--glow)' : undefined,
          borderColor: isActive ? 'rgba(79,156,249,0.2)' : undefined,
        }}
      >
        {/* Company + Logo */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3
              className="font-display font-extrabold text-text-primary leading-tight"
              style={{ fontSize: 'var(--text-h2)', letterSpacing: '-0.01em' }}
            >
              {company}
            </h3>
            <p
              className="font-mono text-[11px] uppercase tracking-widest mt-0.5"
              style={{ color: 'var(--accent-primary)' }}
            >
              {role}
            </p>
          </div>
          {logo && (
            <div
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 shrink-0 bg-white"
              style={{ border: '1px solid var(--border)' }}
            >
              <Image
                src={logo}
                alt={`${company} logo`}
                width={90}
                height={28}
                className="object-contain h-7 w-auto"
              />
            </div>
          )}
        </div>

        {/* Meta badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="font-mono text-[11px] px-3 py-1 rounded-full"
            style={{
              background: 'var(--bg-elevated)',
              color: 'var(--text-secondary)',
            }}
          >
            {period}
          </span>
          <span
            className="font-mono text-[11px] px-3 py-1 rounded-full"
            style={{
              background: type === 'full-time'
                ? 'rgba(79,156,249,0.1)'
                : 'var(--bg-elevated)',
              color: type === 'full-time'
                ? 'var(--accent-primary)'
                : 'var(--text-secondary)',
              border: type === 'full-time' ? '1px solid rgba(79,156,249,0.2)' : undefined,
            }}
          >
            {type === 'full-time' ? 'Full-time' : 'Internship'}
          </span>
          <span
            className="font-mono text-[11px]"
            style={{ color: 'var(--text-muted)' }}
          >
            📍 {location}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-5">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-text-secondary text-sm flex gap-3 leading-relaxed">
              <span
                className="shrink-0 mt-[7px] w-1 h-1 rounded-full"
                style={{ background: 'var(--accent-primary)' }}
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack tags */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            {techStack.map((tech) => (
              <SkillBadge key={tech} name={tech} compact />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
