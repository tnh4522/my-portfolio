'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="mb-12"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px w-8 bg-accent-blue" />
        <h2 className="font-display text-h2 text-text-primary font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-text-secondary text-body ml-12">{subtitle}</p>
      )}
    </motion.div>
  );
}
