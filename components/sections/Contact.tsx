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
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.006-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const socialLinks = [
  {
    key: 'github',
    label: 'GitHub',
    href: PERSONAL.github,
    Icon: GithubIcon,
    handle: 'tnh4522',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: PERSONAL.linkedin,
    Icon: LinkedinIcon,
    handle: 'tran-huy-183ba1194',
  },
];

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
        <SectionHeading title="Let's Work Together" index={6} />

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start"
        >
          {/* ── Left: CTA text + email ── */}
          <div>
            <p className="text-text-secondary text-body max-w-lg mb-8 leading-relaxed">
              I&apos;m open to frontend-focused roles, freelance projects, and
              interesting collaborations. Feel free to reach out — I usually reply
              within 24 hours.
            </p>

            {/* Email — primary CTA */}
            <div
              className="card-surface rounded-2xl p-5 flex items-center justify-between gap-4 max-w-lg mb-4 transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px var(--glow)';
                e.currentTarget.style.borderColor = 'rgba(79,156,249,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(79,156,249,0.1)' }}
                >
                  <Mail className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <span className="text-text-primary text-sm font-medium truncate">
                  {PERSONAL.email}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-caption font-medium transition-all duration-200 cursor-pointer shrink-0"
                style={{
                  background: copied ? 'rgba(74,222,128,0.1)' : 'var(--bg-elevated)',
                  color: copied ? '#4ade80' : 'var(--text-secondary)',
                }}
                aria-label={copied ? 'Copied to clipboard' : 'Copy email address'}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Social links */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              {socialLinks.map(({ key, label, href, Icon, handle }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface flex items-center gap-3 rounded-2xl p-4 flex-1 transition-all duration-300 hover:-translate-y-0.5 group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px var(--glow)';
                    e.currentTarget.style.borderColor = 'rgba(79,156,249,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ background: 'var(--bg-elevated)' }}
                  >
                    <Icon className="h-4 w-4 text-text-secondary group-hover:text-accent-blue transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-text-primary text-sm font-medium">{label}</div>
                    <div className="font-mono text-[11px] text-text-muted truncate">
                      @{handle}
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-auto text-text-muted group-hover:text-accent-blue transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: decorative availability card ── */}
          <motion.div
            className="card-surface rounded-2xl p-6 w-full lg:w-64 hidden lg:block"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow shrink-0"
                aria-hidden="true"
              />
              <span
                className="font-mono text-[11px] uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                Status
              </span>
            </div>
            <p
              className="font-display font-extrabold text-text-primary mb-1"
              style={{ fontSize: 'var(--text-h2)', letterSpacing: '-0.01em', lineHeight: 1.1 }}
            >
              Open to opportunities
            </p>
            <p className="text-text-secondary text-sm mt-3 leading-relaxed">
              Looking for frontend or full-stack roles. Remote-friendly. Based in Da Nang, Vietnam.
            </p>
            <div
              className="mt-5 pt-4 flex flex-col gap-2"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {['Frontend / Full-stack roles', 'Freelance projects', 'Open source collab'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--accent-primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary text-caption">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
