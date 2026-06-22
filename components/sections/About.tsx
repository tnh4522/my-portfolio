'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

/* ── animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

/* ── quick-stats data ── */
const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5', label: 'Projects Shipped' },
  { value: '6', label: 'Awards' },
  { value: 'B1 · 610', label: 'French B1 · English TOEIC 610' },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const skip = !!prefersReducedMotion;

  return (
    <section id="about">
      <div className="container-inner">
        <SectionHeading title="About Me" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={skip ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* ── Left column: bio + education ── */}
          <div className="flex flex-col gap-8">
            {/* Bio */}
            <motion.p
              className="text-text-secondary text-body leading-relaxed"
              variants={skip ? undefined : fadeUp}
              transition={fadeUp.transition}
            >
              {PERSONAL.bio}
            </motion.p>

            {/* Education card */}
            <motion.div
              className="rounded-xl bg-bg-surface p-5 border-l-[3px] border-l-accent-blue"
              style={{ border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--color-accent-blue)' }}
              variants={skip ? undefined : fadeUp}
              transition={fadeUp.transition}
            >
              <h3 className="font-display text-text-primary font-bold text-base mb-1">
                Da Nang University of Science &amp; Technology
              </h3>
              <p className="text-text-secondary text-sm">
                Software Technology Engineer – PFIEV
              </p>
              <p className="text-text-muted text-caption mt-1">2020 – 2025</p>
            </motion.div>
          </div>

          {/* ── Right column: stats grid ── */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-xl bg-bg-surface p-5 flex flex-col gap-1"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                variants={skip ? undefined : fadeUp}
                transition={fadeUp.transition}
              >
                <span className="font-display text-accent-blue text-h2 font-bold">
                  {stat.value}
                </span>
                <span className="text-text-secondary text-caption">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
