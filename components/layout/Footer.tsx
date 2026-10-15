import Link from 'next/link';
import { PERSONAL } from '@/lib/data';

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.006-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="container-inner">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left — brand + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Link
              href="#hero"
              className="font-display font-extrabold text-text-primary hover:text-accent-blue transition-colors tracking-tight text-base"
            >
              TNH<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </Link>
            <p className="font-mono text-[11px] tracking-widest uppercase text-text-muted">
              © {year} {PERSONAL.name} · Da Nang, Vietnam
            </p>
          </div>

          {/* Right — social links + built-with */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-caption"
              aria-label="GitHub profile"
            >
              <GithubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors text-caption"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span
              className="font-mono text-[11px] text-text-muted hidden md:inline"
              style={{ letterSpacing: '0.05em' }}
            >
              Built with Next.js · Tailwind · Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
