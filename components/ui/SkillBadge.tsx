'use client';

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1.5 rounded-full bg-bg-elevated text-text-secondary text-caption font-mono transition-colors duration-200 hover:bg-accent-blue/15 hover:text-accent-blue cursor-default select-none">
      {name}
    </span>
  );
}
