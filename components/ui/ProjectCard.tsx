'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';
import SkillBadge from './SkillBadge';

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
            className="font-mono text-[10px] uppercase tracking-widest font-semibold"
            style={{ color: 'var(--accent-primary)' }}
          >
            {project.role}
          </span>
        </div>

        {/* Action Links (GitHub & Live Demo) */}
        <div className="flex items-center gap-1.5 shrink-0 z-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              title="View Source on GitHub"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-text-secondary hover:text-white hover:bg-white/10"
              style={{ background: 'var(--bg-elevated)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              title="Open Live Demo"
              className="h-8 px-2.5 rounded-full flex items-center gap-1.5 transition-all duration-200 text-xs font-mono font-medium text-white hover:brightness-110 shadow-xs"
              style={{ background: 'var(--accent-primary)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* ── Title ── */}
      <h3
        className="font-display font-extrabold text-text-primary mb-1 transition-colors duration-200"
        style={{
          fontSize: featured ? 'var(--text-h2)' : '1.1rem',
          letterSpacing: '-0.015em',
          color: hovered ? 'var(--accent-primary)' : undefined,
        }}
      >
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      {/* Subtitle */}
      <p className="font-mono text-[11px] text-text-muted mb-3 italic">
        {project.subtitle}
      </p>

      {/* ── Description ── */}
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* ── Key bullets ── */}
      {project.bullets && project.bullets.length > 0 && (
        <ul className="space-y-2 mb-5 flex-1">
          {project.bullets.slice(0, featured ? 4 : 2).map((bullet, i) => (
            <li
              key={i}
              className="text-text-secondary text-xs sm:text-sm flex gap-2 leading-relaxed"
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
