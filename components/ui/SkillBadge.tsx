'use client';

import {
  Compass,
  GitBranch,
  Layers,
  Network,
  Key,
  RefreshCw,
  FileCheck,
  Sparkles,
  Code,
} from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  compact?: boolean;
}

function getDeviconClass(name: string): string | null {
  const normalized = name.toLowerCase();
  
  if (normalized.includes('react')) return 'devicon-react-original colored';
  if (normalized.includes('next.js')) return 'devicon-nextjs-plain';
  if (normalized.includes('vue.js')) return 'devicon-vuejs-plain colored';
  if (normalized.includes('angular')) return 'devicon-angularjs-plain colored';
  if (normalized.includes('typescript')) return 'devicon-typescript-plain colored';
  if (normalized.includes('vite')) return 'devicon-vite-plain colored';
  if (normalized.includes('html')) return 'devicon-html5-plain colored';
  if (normalized.includes('css')) return 'devicon-css3-plain colored';
  if (normalized.includes('javascript')) return 'devicon-javascript-plain colored';
  if (normalized.includes('jquery')) return 'devicon-jquery-plain colored';
  if (normalized.includes('tailwind')) return 'devicon-tailwindcss-original colored';
  if (normalized.includes('bootstrap')) return 'devicon-bootstrap-plain colored';
  if (normalized.includes('figma')) return 'devicon-figma-plain colored';
  if (normalized.includes('drupal')) return 'devicon-drupal-plain colored';
  if (normalized.includes('wordpress')) return 'devicon-wordpress-plain colored';
  
  // PHP & Frameworks
  if (normalized.includes('laravel')) return 'devicon-laravel-original colored';
  if (normalized.includes('symfony')) return 'devicon-symfony-original';
  if (normalized.includes('yii')) return 'devicon-yiiframework-plain colored';
  if (normalized.includes('php')) return 'devicon-php-plain colored';
  
  // Java & Spring
  if (normalized.includes('spring boot') || normalized.includes('spring')) return 'devicon-spring-plain colored';
  if (normalized.includes('java')) return 'devicon-java-plain colored';
  
  // Python & Django
  if (normalized.includes('django')) return 'devicon-django-plain colored';
  if (normalized.includes('python')) return 'devicon-python-plain colored';
  
  // Node & Express
  if (normalized.includes('express')) return 'devicon-express-original';
  if (normalized.includes('nodejs') || normalized.includes('node')) return 'devicon-nodejs-plain colored';
  
  // .NET
  if (normalized.includes('asp.net') || normalized.includes('.net')) return 'devicon-dot-net-plain colored';
  
  // Databases & Tools
  if (normalized.includes('mysql')) return 'devicon-mysql-plain colored';
  if (normalized.includes('mariadb')) return 'devicon-mariadb-plain colored';
  if (normalized.includes('mongodb')) return 'devicon-mongodb-plain colored';
  
  // Version Control
  if (normalized.includes('github')) return 'devicon-github-original';
  if (normalized.includes('gitlab')) return 'devicon-gitlab-plain colored';
  if (normalized.includes('git')) return 'devicon-git-plain colored';
  
  // Management & Systems
  if (normalized.includes('docker')) return 'devicon-docker-plain colored';
  if (normalized.includes('trello')) return 'devicon-trello-plain colored';
  if (normalized.includes('jira')) return 'devicon-jira-plain colored';
  if (normalized.includes('linux')) return 'devicon-linux-plain colored';
  
  return null;
}

function getLucideIcon(name: string) {
  const normalized = name.toLowerCase();
  
  if (normalized.includes('ux design') || normalized.includes('ux')) return Compass;
  if (normalized.includes('user flows') || normalized.includes('flow')) return GitBranch;
  if (normalized.includes('component')) return Layers;
  
  if (normalized.includes('twig')) return Code;
  if (normalized.includes('rest') || normalized.includes('api')) return Network;
  if (normalized.includes('jwt')) return Key;
  
  if (normalized.includes('agile')) return Layers;
  if (normalized.includes('scrum')) return RefreshCw;
  if (normalized.includes('review')) return FileCheck;
  if (normalized.includes('ci/cd')) return RefreshCw;
  
  return Sparkles;
}

export default function SkillBadge({ name, compact = false }: SkillBadgeProps) {
  const deviconClass = getDeviconClass(name);
  const LucideIcon = !deviconClass ? getLucideIcon(name) : null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono transition-all duration-200 border border-transparent cursor-default select-none shrink-0
        ${compact 
          ? 'px-2 py-0.5 rounded bg-bg-elevated text-text-secondary text-[11px] hover:bg-accent-blue/10 hover:text-text-primary' 
          : 'px-3.5 py-1.5 rounded-full bg-bg-elevated text-text-secondary text-caption hover:bg-accent-blue/15 hover:text-text-primary hover:border-accent-blue/30'
        }`}
    >
      {deviconClass ? (
        <i className={`${deviconClass} ${compact ? 'text-[11px]' : 'text-sm'} shrink-0`} />
      ) : LucideIcon ? (
        <LucideIcon className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-accent-blue shrink-0`} />
      ) : null}
      <span>{name}</span>
    </span>
  );
}
