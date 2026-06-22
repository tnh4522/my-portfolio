'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface TimelineItemProps {
  company: string;
  location: string;
  role: string;
  period: string;
  type: 'full-time' | 'internship';
  bullets: string[];
  isActive?: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function TimelineItem({
  company,
  location,
  role,
  period,
  type,
  bullets,
  isActive = false,
}: TimelineItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0 group"
      initial={prefersReducedMotion ? undefined : fadeUp.initial}
      whileInView={prefersReducedMotion ? undefined : fadeUp.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={fadeUp.transition}
    >
      {/* Vertical line */}
      <div
        className="absolute left-[5px] top-[6px] bottom-0 w-[2px] bg-bg-elevated group-last:hidden"
        aria-hidden="true"
      />

      {/* Dot indicator */}
      <div className="absolute left-0 top-[6px]" aria-hidden="true">
        {isActive ? (
          <span className="block w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        ) : (
          <span className="block w-3 h-3 rounded-full border-2 border-text-muted" />
        )}
      </div>

      {/* Content */}
      <div>
        {/* Company */}
        <h3 className="font-display text-h2 text-text-primary font-bold leading-tight">
          {company}
        </h3>

        {/* Role */}
        <p className="text-accent-blue font-medium mt-1">{role}</p>

        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {/* Period badge */}
          <span className="bg-bg-elevated rounded-full px-3 py-1 text-caption text-text-secondary">
            {period}
          </span>

          {/* Type badge */}
          <span className="bg-bg-elevated rounded-full px-3 py-1 text-caption text-text-secondary">
            {type === 'full-time' ? 'Full-time' : 'Internship'}
          </span>
        </div>

        {/* Location */}
        <p className="text-text-muted text-caption mt-2">{location}</p>

        {/* Bullets */}
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-text-secondary text-body pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent-blue before:text-sm"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
