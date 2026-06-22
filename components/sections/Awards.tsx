'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AWARDS } from '@/lib/data';
import AwardBadge from '@/components/ui/AwardBadge';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Awards() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="awards">
      <div className="container-inner">
        <SectionHeading title="Awards" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {AWARDS.map((award) => {
            const isGold = award.tier === 'gold';

            return (
              <motion.div
                key={award.title}
                className={
                  isGold ? 'md:col-span-2 lg:col-span-1' : undefined
                }
                variants={prefersReducedMotion ? undefined : fadeUp}
                style={
                  isGold
                    ? {
                        boxShadow: '0 0 40px var(--glow), 0 0 80px var(--glow)',
                        borderRadius: '0.75rem',
                      }
                    : undefined
                }
              >
                <AwardBadge award={award} featured={isGold} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
