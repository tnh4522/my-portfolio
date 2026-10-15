'use client';

import type { Award } from '@/lib/types';

interface AwardBadgeProps {
  award: Award;
  featured?: boolean;
}

const tierConfig = {
  gold: {
    icon: '🏆',
    label: '1st Prize',
    accentColor: '#F97B4F',
    accentBg: 'rgba(249, 123, 79, 0.08)',
    borderColor: 'rgba(249, 123, 79, 0.35)',
    glowColor: 'rgba(249, 123, 79, 0.18)',
  },
  silver: {
    icon: '🥈',
    label: '2nd Prize',
    accentColor: '#9BA3B5',
    accentBg: 'rgba(155,163,181,0.06)',
    borderColor: 'rgba(155,163,181,0.2)',
    glowColor: 'transparent',
  },
  bronze: {
    icon: '🥉',
    label: '3rd Prize',
    accentColor: '#CD7F32',
    accentBg: 'rgba(205,127,50,0.06)',
    borderColor: 'rgba(205,127,50,0.2)',
    glowColor: 'transparent',
  },
} as const;

export default function AwardBadge({ award, featured = false }: AwardBadgeProps) {
  const config = tierConfig[award.tier];

  if (featured) {
    /* ── Gold Hero Banner ── */
    return (
      <div
        className="relative card-surface rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
        style={{
          borderColor: config.borderColor,
          boxShadow: `0 8px 40px ${config.glowColor}, 0 2px 8px rgba(0,0,0,0.2)`,
        }}
      >
        {/* Shimmer background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, ${config.accentBg} 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7 sm:p-8">
          {/* Trophy icon */}
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl text-4xl shrink-0"
            style={{
              background: config.accentBg,
              border: `1px solid ${config.borderColor}`,
            }}
            role="img"
            aria-label="Trophy"
          >
            {config.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span
                className="font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  color: config.accentColor,
                  background: config.accentBg,
                  border: `1px solid ${config.borderColor}`,
                }}
              >
                {award.prize}
              </span>
              <span
                className="font-mono text-[11px] text-text-muted"
              >
                {award.date}
              </span>
            </div>

            <h3
              className="font-display font-extrabold text-text-primary mb-1"
              style={{ fontSize: 'var(--text-h2)', letterSpacing: '-0.01em' }}
            >
              {award.title}
            </h3>
            <p className="text-text-secondary text-sm">{award.issuer}</p>
          </div>

          {/* Large decorative icon — top-right */}
          <div
            className="hidden md:block text-7xl select-none pointer-events-none opacity-10"
            aria-hidden="true"
          >
            {config.icon}
          </div>
        </div>
      </div>
    );
  }

  /* ── Standard Award Card ── */
  return (
    <div
      className="relative card-surface rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
      style={{
        borderColor: config.borderColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 28px ${config.glowColor || 'rgba(79,156,249,0.1)'}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl" role="img" aria-label={`${award.tier} award`}>
          {config.icon}
        </span>
        <span
          className="font-mono text-[11px] text-text-muted"
        >
          {award.date}
        </span>
      </div>

      <span
        className="font-mono text-[11px] uppercase tracking-widest mb-2 inline-block px-2.5 py-1 rounded-full self-start"
        style={{
          color: config.accentColor,
          background: config.accentBg,
        }}
      >
        {award.prize}
      </span>

      <p className="font-display font-bold text-text-primary text-sm mb-2 leading-snug flex-1">
        {award.title}
      </p>
      <p className="text-text-muted text-caption mt-auto">{award.issuer}</p>
    </div>
  );
}
