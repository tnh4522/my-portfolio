'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index?: number;
}

export default function SectionHeading({ title, subtitle, index }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionNum = index !== undefined
    ? String(index).padStart(2, '0')
    : null;

  return (
    <motion.div
      className="mb-14"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="flex items-baseline gap-3 mb-2">
        {sectionNum && (
          <span
            className="font-mono text-[11px] tracking-[0.18em] uppercase select-none"
            style={{ color: 'var(--accent-primary)', opacity: 0.7 }}
          >
            {sectionNum} /
          </span>
        )}
        <h2
          className="font-display font-extrabold text-text-primary tracking-tight"
          style={{ fontSize: 'var(--text-h1)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          {title}
        </h2>
      </div>
      {/* Decorative rule */}
      <div className="flex items-center gap-2 mt-3">
        <div className="h-[2px] w-10 rounded-full" style={{ background: 'var(--accent-primary)' }} />
        <div className="h-px flex-1 rounded-full" style={{ background: 'var(--border)' }} />
      </div>
      {subtitle && (
        <p className="text-text-secondary text-body mt-4 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
