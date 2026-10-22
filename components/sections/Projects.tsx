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

  const featured = PROJECTS.filter((p) => p.highlight === true);
  const rest = PROJECTS.filter((p) => !p.highlight);

  // Bento layout: first featured = hero (large), others fill
  const [heroPick, ...secondaryFeatured] = featured;

  return (
    <section id="projects">
      <div className="container-inner">
        <SectionHeading title="Projects" index={3} />

        {/* ── Bento Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Hero card — spans 2 columns + 2 rows */}
          {heroPick && (
            <motion.div
              className="md:col-span-2 md:row-span-2"
              variants={prefersReducedMotion ? undefined : fadeUp}
            >
              <ProjectCard project={heroPick} featured />
            </motion.div>
          )}

          {/* Secondary featured — single column cells */}
          {secondaryFeatured.map((project) => (
            <motion.div
              key={project.id}
              variants={prefersReducedMotion ? undefined : fadeUp}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* Remaining projects — span full 3-col width if single project */}
          {rest.map((project) => (
            <motion.div
              key={project.id}
              className={rest.length === 1 ? 'md:col-span-3' : undefined}
              variants={prefersReducedMotion ? undefined : fadeUp}
            >
              <ProjectCard project={project} featured={rest.length === 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
