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
  const featuredAward = AWARDS.find((a) => a.tier === 'gold') || AWARDS[0];
  const regularAwards = AWARDS.filter((a) => a !== featuredAward);

  return (
    <section id="awards">
      <div className="container-inner">
        <SectionHeading title="Awards" index={5} />

        {/* ── Featured Gold Award Banner ── */}
        {featuredAward && (
          <motion.div
            className="mb-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <AwardBadge award={featuredAward} featured />
          </motion.div>
        )}

        {/* ── Remaining Awards Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {regularAwards.map((award) => (
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
