'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { DRUPAL_PROJECTS } from '@/lib/data';
import DrupalCard from '@/components/ui/DrupalCard';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function DrupalPortfolio() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="drupal-portfolio">
      <div className="container-inner">
        <SectionHeading
          title="Drupal Portfolio"
          subtitle="Production e-commerce websites built with Drupal at Lundi Matin Groupe — serving retail clients across France."
        />

        {/* Grid — 2-column on desktop */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {DRUPAL_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="h-full"
              variants={
                prefersReducedMotion
                  ? undefined
                  : { initial: fadeUp.initial, animate: fadeUp.animate }
              }
              transition={fadeUp.transition}
            >
              <DrupalCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="h-px w-12 bg-accent-blue/30" />
          <span className="text-text-muted text-xs font-mono tracking-wider uppercase">
            Built with Drupal & Twig
          </span>
          <div className="h-px w-12 bg-accent-blue/30" />
        </motion.div>
      </div>
    </section>
  );
}
