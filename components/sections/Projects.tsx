'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects">
      <div className="container-inner">
        <SectionHeading title="Projects" index={3} />

        {/* ── Top-to-bottom Stack ── */}
        <motion.div
          className="flex flex-col gap-6"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={prefersReducedMotion ? undefined : fadeUp}
            >
              <ProjectCard project={project} index={index + 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
