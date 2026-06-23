'use client';

import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-bg-surface rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue flex flex-col h-full"
      style={{
        borderColor: 'var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,156,249,0.15)';
        e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.backgroundColor = '';
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-caption text-text-muted font-mono bg-bg-elevated px-2.5 py-1 rounded-md">
          {project.period}
        </span>
        <span className="text-caption text-accent-blue font-medium">
          {project.role}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-text-primary text-lg mb-1 group-hover:text-accent-blue transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-caption italic mb-3">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-text-secondary text-body text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Bullets */}
      <ul className="space-y-2 mb-5 flex-1">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="text-text-secondary text-sm flex gap-2">
            <span className="text-accent-blue mt-1.5 shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-bg-elevated text-text-secondary text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
