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
  Webhook,
  Clock,
  Cpu,
  Plug,
  Terminal,
  ShieldCheck,
  Activity,
  Headphones,
  Server,
  Globe,
  Router,
} from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  compact?: boolean;
}

function getDeviconClass(name: string): string | null {
  const normalized = name.toLowerCase();

  if (normalized.includes('react')) return 'devicon-react-original colored';
  if (normalized.includes('next.js') || normalized === 'next') return 'devicon-nextjs-plain';
  if (normalized.includes('vue.js') || normalized === 'vue') return 'devicon-vuejs-plain colored';
  if (normalized.includes('angular')) return 'devicon-angularjs-plain colored';
  if (normalized.includes('javascript/typescript') || normalized.includes('typescript')) return 'devicon-typescript-plain colored';
  if (normalized.includes('vite') && !normalized.includes('vitest')) return 'devicon-vite-plain colored';
  if (normalized.includes('html')) return 'devicon-html5-plain colored';
  if (normalized.includes('css')) return 'devicon-css3-plain colored';
  if (normalized.includes('javascript')) return 'devicon-javascript-plain colored';
  if (normalized.includes('jquery')) return 'devicon-jquery-plain colored';
  if (normalized.includes('tailwind')) return 'devicon-tailwindcss-original colored';
  if (normalized.includes('bootstrap')) return 'devicon-bootstrap-plain colored';
  if (normalized.includes('figma')) return 'devicon-figma-plain colored';
  if (normalized.includes('drupal')) return 'devicon-drupal-plain colored';
  if (normalized.includes('wordpress')) return 'devicon-wordpress-plain colored';

  // C# & C/C++
  if (normalized === 'c#') return 'devicon-csharp-plain colored';
  if (normalized.includes('c/c++') || normalized === 'c++') return 'devicon-cplusplus-plain colored';

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

  // Version Control & Testing
  if (normalized.includes('github')) return 'devicon-github-original';
  if (normalized.includes('gitlab')) return 'devicon-gitlab-plain colored';
  if (normalized.includes('git')) return 'devicon-git-plain colored';
  if (normalized.includes('jest')) return 'devicon-jest-plain colored';

  // Management & Systems
  if (normalized.includes('docker')) return 'devicon-docker-plain colored';
  if (normalized.includes('trello')) return 'devicon-trello-plain colored';
  if (normalized.includes('jira')) return 'devicon-jira-plain colored';
  if (normalized.includes('linux')) return 'devicon-linux-plain colored';
  if (normalized.includes('windows')) return 'devicon-windows8-original colored';

  return null;
}

function getLucideIcon(name: string) {
  const normalized = name.toLowerCase();

  if (normalized.includes('ux design') || normalized.includes('ux')) return Compass;
  if (normalized.includes('user flows') || normalized.includes('flow')) return GitBranch;
  if (normalized.includes('component')) return Layers;

  if (normalized.includes('twig')) return Code;
  if (normalized.includes('webhook')) return Webhook;
  if (normalized.includes('cron')) return Clock;
  if (normalized.includes('esb') || normalized.includes('mcp')) return Cpu;
  if (normalized.includes('connector')) return Plug;
  if (normalized.includes('rest') || normalized.includes('api')) return Network;
  if (normalized.includes('jwt') || normalized.includes('account') || normalized.includes('permission')) return ShieldCheck;

  if (normalized.includes('lan') || normalized.includes('wan') || normalized.includes('tcp') || normalized.includes('subnet') || normalized.includes('vlan') || normalized.includes('trunk')) return Router;
  if (normalized.includes('dns') || normalized.includes('dhcp') || normalized.includes('ip/network')) return Globe;
  if (normalized.includes('ipconfig') || normalized.includes('ping') || normalized.includes('tracert') || normalized.includes('nslookup')) return Terminal;
  if (normalized.includes('monitoring') || normalized.includes('wireshark')) return Activity;
  if (normalized.includes('helpdesk') || normalized.includes('support')) return Headphones;
  if (normalized.includes('cisco') || normalized.includes('vmware')) return Server;

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
      className={`
        inline-flex items-center gap-1.5 font-mono cursor-default select-none shrink-0
        transition-all duration-200
        ${compact
          ? 'px-2 py-0.5 rounded-md text-[11px]'
          : 'px-3 py-1.5 rounded-full text-caption'
        }
      `}
      style={{
        background: 'var(--bg-elevated)',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = 'rgba(79,156,249,0.08)';
        el.style.color = 'var(--text-primary)';
        el.style.borderColor = 'rgba(79,156,249,0.25)';
        el.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = 'var(--bg-elevated)';
        el.style.color = 'var(--text-secondary)';
        el.style.borderColor = 'var(--border)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {deviconClass ? (
        <i className={`${deviconClass} ${compact ? 'text-[11px]' : 'text-sm'} shrink-0`} />
      ) : LucideIcon ? (
        <LucideIcon
          className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} shrink-0`}
          style={{ color: 'var(--accent-primary)' }}
        />
      ) : null}
      <span>{name}</span>
    </span>
  );
}
