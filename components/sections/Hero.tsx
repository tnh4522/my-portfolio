'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PERSONAL } from '@/lib/data';
import SkillBadge from '@/components/ui/SkillBadge';

/* ── animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 16,
      delay: 0.5 + i * 0.15,
    },
  }),
};

const floatingCards = [
  {
    key: 'status',
    label: 'Currently at',
    content: (
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            Currently at
          </span>
          <span className="font-display font-bold text-text-primary text-sm leading-tight">
            Lundi Matin Groupe
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--accent-primary)' }}>
            France · Remote
          </span>
        </div>
        <div
          className="inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 shrink-0 bg-white"
          style={{ border: '1px solid var(--border)' }}
        >
          <Image
            src="/images/lundi-matin-logo.svg"
            alt="Lundi Matin Groupe logo"
            width={70}
            height={26}
            className="object-contain h-5 w-auto"
          />
        </div>
      </div>
    ),
  },
  {
    key: 'stack',
    label: 'Tech stack',
    content: (
      <>
        <span
          className="font-mono text-[10px] uppercase tracking-widest mb-2 block"
          style={{ color: 'var(--text-muted)' }}
        >
          Tech stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {PERSONAL.skill.slice(0, 8).map((tech) => (
            <SkillBadge key={tech} name={tech} compact />
          ))}
        </div>
      </>
    ),
  },
  {
    key: 'languages',
    label: 'Languages',
    content: (
      <>
        <span
          className="font-mono text-[10px] uppercase tracking-widest mb-2 block"
          style={{ color: 'var(--text-muted)' }}
        >
          Languages
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-display text-sm font-bold text-text-primary inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm shrink-0">
              <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
              <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
              <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
              </g>
            </svg>
            <span>English — TOEIC 510</span>
          </span>
          <span className="font-display text-sm font-bold text-text-primary inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-3.5 rounded-sm shrink-0">
              <rect width="1" height="2" x="0" fill="#002395" />
              <rect width="1" height="2" x="1" fill="#fff" />
              <rect width="1" height="2" x="2" fill="#ED2939" />
            </svg>
            <span>French — B1</span>
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
      {/* ── Mesh gradient background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Primary blob */}
        <div
          className="absolute rounded-full"
          style={{
            width: 'clamp(400px, 60vw, 900px)',
            height: 'clamp(400px, 60vw, 900px)',
            top: '-20%',
            left: '-15%',
            background: 'radial-gradient(circle, rgba(79,156,249,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Secondary blob */}
        <div
          className="absolute rounded-full"
          style={{
            width: 'clamp(300px, 40vw, 600px)',
            height: 'clamp(300px, 40vw, 600px)',
            bottom: '5%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(249,123,79,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="container-inner w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-10 items-center">

          {/* ── Left: editorial text content ── */}
          <motion.div
            className="flex flex-col gap-6"
            variants={skip ? undefined : containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Avatar + status badge row */}
            <motion.div
              className="flex items-center gap-4"
              variants={skip ? undefined : itemVariants}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-14 h-14 rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 0 0 2px var(--accent-primary), 0 0 20px var(--glow)',
                  }}
                >
                  <Image
                    src="/images/avatar.jpg"
                    alt={`Photo of ${PERSONAL.name}`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Online indicator */}
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2"
                  style={{ borderColor: 'var(--bg-base)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Code token badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--accent-primary)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow shrink-0"
                  aria-hidden="true"
                />
                <span>Available for opportunities</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-text-secondary text-body"
              variants={skip ? undefined : itemVariants}
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name — display scale, editorial */}
            <motion.h1
              className="font-display font-extrabold text-text-primary"
              style={{
                fontSize: 'var(--text-display)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
              }}
              variants={skip ? undefined : itemVariants}
            >
              {PERSONAL.name.toUpperCase()
                .split(' ')
                .map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-text-secondary font-mono text-sm tracking-widest uppercase"
              variants={skip ? undefined : itemVariants}
            >
              <span style={{ color: 'var(--accent-primary)' }}>{'// '}</span>
              {PERSONAL.role}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-text-secondary text-body max-w-md leading-relaxed"
              variants={skip ? undefined : itemVariants}
            >
              {PERSONAL.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              variants={skip ? undefined : itemVariants}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: `linear-gradient(135deg, var(--accent-primary) 0%, #3d8ef0 100%)`,
                  boxShadow: '0 4px 20px var(--glow)',
                }}
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border px-7 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 4px 16px var(--glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-strong)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Resume ↗
              </Link>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="flex items-center gap-3 mt-4"
              variants={skip ? undefined : itemVariants}
            >
              <div
                className="h-px w-8 rounded-full"
                style={{ background: 'var(--text-muted)' }}
                aria-hidden="true"
              />
              <span
                className="font-mono text-[11px] uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                Scroll to explore
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: info cards ── */}
          <div className="flex flex-col gap-4 lg:items-end">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.key}
                custom={i}
                variants={skip ? undefined : cardVariants}
                initial="hidden"
                animate="visible"
                className="w-full lg:max-w-[340px] rounded-2xl p-5 card-surface animate-float"
                style={{
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${7 + i * 0.5}s`,
                  background: 'var(--bg-surface)',
                }}
                whileHover={skip ? undefined : { y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              >
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
