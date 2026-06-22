'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SKILLS } from '@/lib/data';
import SkillBadge from '@/components/ui/SkillBadge';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills">
      <div className="container-inner">
        <SectionHeading title="Skills" />

        <div>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="mb-8"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
            >
              <h3 className="uppercase text-caption text-text-secondary font-medium tracking-wider border-l-2 border-accent-blue pl-3 mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <SkillBadge key={item} name={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
