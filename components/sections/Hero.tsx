'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { PERSONAL } from '@/lib/data';

/* ── animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const cardSlide = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18 },
  },
};

/* ── floating card data ── */
const floatingCards = [
  {
    key: 'location',
    delay: 0,
    content: (
      <>
        <span className="text-text-secondary text-caption">Currently at</span>
        <span className="font-display text-lg font-bold text-text-primary">
          Lundi Matin
        </span>
        <span className="mt-1 inline-block rounded-full bg-bg-elevated px-3 py-0.5 text-xs text-text-secondary">
          France 🇫🇷
        </span>
      </>
    ),
  },
  {
    key: 'stack',
    delay: 0.8,
    content: (
      <div className="flex flex-wrap gap-2">
        {['PHP', 'React', 'Python', 'TypeScript'].map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-bg-elevated px-2.5 py-1 text-xs font-medium text-text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    ),
  },
  {
    key: 'awards',
    delay: 1.6,
    content: (
      <div className="flex items-center gap-2">
        <span className="text-2xl">🏆</span>
        <span className="font-display text-lg font-bold text-text-primary">
          6 Awards Won
        </span>
      </div>
    ),
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const skip = !!prefersReducedMotion;

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-4rem)] flex items-center overflow-hidden"
    >
      <div className="container-inner w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* ── Left: text content ── */}
          <motion.div
            className="flex flex-col gap-5"
            variants={skip ? undefined : staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Code token */}
            <motion.div
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <span
                className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 font-mono text-sm text-accent-blue"
                style={{ borderColor: 'var(--color-accent-blue)' }}
              >
                {'{ VN → FR }'}
                <span className="ml-0.5 inline-block h-4 w-[2px] bg-accent-blue animate-blink" />
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-text-secondary text-body"
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              className="font-display text-display text-text-primary font-extrabold"
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {PERSONAL.name.toUpperCase()}
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-accent-blue text-h2 font-medium"
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {PERSONAL.role}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-text-secondary text-body max-w-md"
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {PERSONAL.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                View My Work ↓
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium text-accent-blue transition-colors hover:bg-accent-blue/10"
                style={{ borderColor: 'var(--color-accent-blue)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: floating cards ── */}
          <motion.div
            className="flex flex-col gap-5 md:items-end"
            initial="initial"
            animate="animate"
            variants={skip ? undefined : { animate: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
          >
            {floatingCards.map((card) => (
              <motion.div
                key={card.key}
                className="flex flex-col gap-1 rounded-xl bg-bg-surface p-5 w-full md:max-w-[280px] animate-float"
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  animationDelay: `${card.delay}s`,
                }}
                variants={skip ? undefined : cardSlide}
              >
                {card.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
