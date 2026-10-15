'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import SkillBadge from './SkillBadge';

interface ProjectCardProps {
  project: Project;
  /** When true the card receives the "hero" treatment (larger, more detail) */
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        group relative card-surface rounded-2xl transition-all duration-300
        flex flex-col h-full overflow-hidden cursor-default
        hover:-translate-y-1
        ${featured ? 'p-7' : 'p-5'}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? '0 12px 40px rgba(79,156,249,0.12), 0 2px 8px rgba(0,0,0,0.2)'
          : '0 2px 8px rgba(0,0,0,0.1)',
        borderColor: hovered ? 'var(--accent-primary)' : undefined,
      }}
    >
      {/* Hover gradient reveal — subtle top-left bloom */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(79,156,249,0.06) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-4 gap-2">
        <div className="flex flex-col gap-1">
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            {project.period}
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--accent-primary)' }}
          >
            {project.role}
          </span>
        </div>
        {/* Arrow indicator on hover */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: hovered ? 'var(--accent-primary)' : 'var(--bg-elevated)',
            transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3.5 h-3.5"
            style={{ color: hovered ? 'white' : 'var(--text-muted)' }}
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* ── Title ── */}
      <h3
        className="font-display font-extrabold text-text-primary mb-1 transition-colors duration-200"
        style={{
          fontSize: featured ? 'var(--text-h2)' : '1.05rem',
          letterSpacing: '-0.015em',
          color: hovered ? 'var(--accent-primary)' : undefined,
        }}
      >
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="font-mono text-[11px] text-text-muted mb-3 italic">
        {project.subtitle}
      </p>

      {/* ── Description ── */}
      <p className="text-text-secondary text-sm mb-4 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* ── Key bullets (shown in featured card) ── */}
      {featured && project.bullets && project.bullets.length > 0 && (
        <ul className="space-y-2 mb-5">
          {project.bullets.slice(0, 3).map((bullet, i) => (
            <li
              key={i}
              className="text-text-secondary text-sm flex gap-2 leading-relaxed"
            >
              <span
                className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent-primary)' }}
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* ── Tags ── */}
      <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <SkillBadge key={tag} name={tag} compact />
          ))}
        </div>
      </div>
    </div>
  );
}
