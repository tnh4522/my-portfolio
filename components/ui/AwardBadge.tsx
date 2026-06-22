'use client';

import type { Award } from '@/lib/types';

interface AwardBadgeProps {
  award: Award;
  featured?: boolean;
}

const tierConfig = {
  gold: {
    borderColor: 'border-accent-coral',
    icon: '🏆',
    glowColor: 'rgba(249, 123, 79, 0.15)',
  },
  silver: {
    borderColor: 'border-text-secondary',
    icon: '🥈',
    glowColor: 'transparent',
  },
  bronze: {
    borderColor: 'border-[#CD7F32]',
    icon: '🥉',
    glowColor: 'transparent',
  },
};

export default function AwardBadge({ award, featured }: AwardBadgeProps) {
  const config = tierConfig[award.tier];

  return (
    <div
      className={`
        relative bg-bg-surface rounded-xl p-6 border transition-all duration-300
        hover:-translate-y-1 hover:border-accent-blue
        ${config.borderColor}
        ${featured ? 'ring-1 ring-accent-coral/30' : ''}
      `}
      style={{
        borderColor: award.tier === 'bronze' ? '#CD7F32' : undefined,
        boxShadow: featured ? `0 0 30px ${tierConfig.gold.glowColor}` : undefined,
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl" role="img" aria-label={`${award.tier} award`}>
          {config.icon}
        </span>
        <span className="text-caption text-text-muted font-mono">{award.date}</span>
      </div>

      <p className="font-display font-bold text-text-primary text-body mb-1">
        {award.prize}
      </p>
      <p className="text-text-secondary text-caption mb-2 leading-relaxed">
        {award.title}
      </p>
      <p className="text-text-muted text-caption">
        {award.issuer}
      </p>
    </div>
  );
}
