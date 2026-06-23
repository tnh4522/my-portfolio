'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
          Lundi Matin Groupe
        </span>
      </>
    ),
  },
  {
    key: 'stack',
    delay: 0.8,
    content: (
      <div className="flex flex-wrap gap-2">
        {PERSONAL.skill.map((tech) => (
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
    key: 'languages',
    delay: 1.6,
    content: (
      <>
        <span className="text-text-secondary text-caption">Languages</span>
        <div className="flex flex-col gap-1 mt-1">
          <span className="font-display text-sm font-bold text-text-primary inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm">
              <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
              <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
              <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
              </g>
            </svg>
            English — TOEIC 610
          </span>
          <span className="font-display text-sm font-bold text-text-primary inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-3.5 rounded-sm">
              <rect width="1" height="2" x="0" fill="#002395"/>
              <rect width="1" height="2" x="1" fill="#fff"/>
              <rect width="1" height="2" x="2" fill="#ED2939"/>
            </svg>
            French — B1
          </span>
        </div>
      </>
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
            {/* Avatar + Code token row */}
            <motion.div
              className="flex items-center gap-4"
              variants={skip ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-accent-blue/40 ring-offset-2 ring-offset-bg-base">
                  <Image
                    src="/images/avatar.jpg"
                    alt={`Photo of ${PERSONAL.name}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-bg-base animate-pulse" aria-hidden="true" />
              </div>

              {/* Code token */}
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
                href="/resume"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium text-accent-blue transition-colors hover:bg-accent-blue/10"
                style={{ borderColor: 'var(--color-accent-blue)' }}
              >
                Resume
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
                  border: '1px solid var(--border)',
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
