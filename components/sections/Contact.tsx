'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';
import { PERSONAL } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
      <div className="container-inner">
        <SectionHeading title="Let's Work Together" />

        <motion.div
          initial={prefersReducedMotion ? undefined : fadeUp.initial}
          whileInView={prefersReducedMotion ? undefined : fadeUp.animate}
          viewport={{ once: true, margin: '-100px' }}
          transition={fadeUp.transition}
        >
          <p className="text-text-secondary text-body max-w-lg mb-8">
            I&apos;m open to frontend-focused roles, freelance projects, and
            interesting collaborations. Feel free to reach out.
          </p>

          <div className="bg-bg-surface rounded-xl p-6 space-y-4 max-w-lg">
            {/* Email row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="h-5 w-5 shrink-0 text-accent-blue" />
                <span className="text-body text-text-primary truncate">
                  {PERSONAL.email}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="bg-bg-elevated hover:bg-accent-blue/20 rounded-lg px-3 py-2 text-caption transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                aria-label={copied ? 'Copied' : 'Copy email'}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-text-secondary" />
                    <span className="text-text-secondary">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <LinkedinIcon className="h-5 w-5 shrink-0 text-accent-blue" />
                <span className="text-body text-text-primary truncate">
                  tran-huy-183ba1194
                </span>
              </div>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-elevated hover:bg-accent-blue/20 rounded-lg px-3 py-2 text-caption transition-colors flex items-center gap-1.5 shrink-0 text-text-secondary hover:text-accent-blue"
              >
                Open ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
