'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const featured = PROJECTS.filter((p) => p.highlight === true);
  const rest = PROJECTS.filter((p) => !p.highlight);

  return (
    <section id="projects">
      <div className="container-inner">
        <SectionHeading title="Projects" />

        {/* Row 1 — Featured projects (3-column) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={
                prefersReducedMotion
                  ? undefined
                  : { initial: fadeUp.initial, animate: fadeUp.animate }
              }
              transition={fadeUp.transition}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 — Remaining projects (2-column) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {rest.map((project) => (
            <motion.div
              key={project.id}
              variants={
                prefersReducedMotion
                  ? undefined
                  : { initial: fadeUp.initial, animate: fadeUp.animate }
              }
              transition={fadeUp.transition}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
