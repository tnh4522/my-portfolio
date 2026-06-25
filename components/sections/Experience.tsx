'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EXPERIENCES } from '@/lib/data';
import TimelineItem from '@/components/ui/TimelineItem';
import SectionHeading from '@/components/ui/SectionHeading';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience">
      <div className="container-inner">
        <SectionHeading title="Experience" />

        <motion.div
          className="relative max-w-2xl"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${exp.period}`}
              company={exp.company}
              location={exp.location}
              role={exp.role}
              period={exp.period}
              type={exp.type}
              bullets={exp.bullets}
              techStack={exp.techStack}
              logo={exp.logo}
              isActive={index === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
