'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SKILLS } from '@/lib/data';
import SkillBadge from '@/components/ui/SkillBadge';
import SectionHeading from '@/components/ui/SectionHeading';

const containerVariants = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills">
      <div className="container-inner">
        <SectionHeading title="Skills" index={5} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SKILLS.map((skill, index) => {
            /* Frontend & Backend get double-wide treatment */
            const isWide =
              skill.category === 'Frontend' || skill.category === 'Backend';

            return (
              <motion.div
                key={skill.category}
                className={`card-surface rounded-2xl p-6 ${isWide ? 'md:col-span-2' : ''}`}
                variants={prefersReducedMotion ? undefined : fadeUp}
                style={{
                  /* Stagger glow accents between cards */
                  ...(index === 0
                    ? { borderColor: 'rgba(79,156,249,0.15)' }
                    : {}),
                }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-1 h-4 rounded-full shrink-0"
                    style={{ background: 'var(--accent-primary)' }}
                    aria-hidden="true"
                  />
                  <h3
                    className="font-mono text-[11px] uppercase tracking-[0.2em] font-medium"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {skill.category}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
