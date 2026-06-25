'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { DrupalProject } from '@/lib/types';
import SkillBadge from './SkillBadge';

interface DrupalCardProps {
  project: DrupalProject;
  onClick?: () => void;
}

export default function DrupalCard({ project, onClick }: DrupalCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-bg-surface rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      style={{
        borderColor: isHovered ? 'var(--accent-primary)' : 'var(--border)',
        boxShadow: isHovered
          ? '0 20px 60px rgba(79,156,249,0.2), 0 0 0 1px rgba(79,156,249,0.1)'
          : '0 1px 3px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: isHovered
              ? 'linear-gradient(to top, rgba(13,15,20,0.95) 0%, rgba(13,15,20,0.7) 40%, rgba(13,15,20,0.2) 100%)'
              : 'linear-gradient(to top, rgba(13,15,20,0.6) 0%, rgba(13,15,20,0) 50%)',
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md"
            style={{
              background: 'rgba(79,156,249,0.2)',
              color: '#4F9CF9',
              border: '1px solid rgba(79,156,249,0.3)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Hover Description */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 z-10"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <p className="text-white/90 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-display font-bold text-text-primary text-base mb-3 group-hover:text-accent-blue transition-colors duration-300">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <SkillBadge
              key={tag}
              name={tag}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
}
