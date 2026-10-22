'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AWARDS } from '@/lib/data';
import AwardBadge from '@/components/ui/AwardBadge';
import SectionHeading from '@/components/ui/SectionHeading';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Awards() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="awards">
      <div className="container-inner">
        <SectionHeading title="Awards" index={4} />

        {/* 6 evenly distributed award cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {AWARDS.map((award) => (
            <motion.div
              key={award.title}
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="h-full"
            >
              <AwardBadge award={award} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
