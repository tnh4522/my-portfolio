import { PERSONAL } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: 'var(--border)' }}>
      <div className="container-inner">
        <p className="text-center text-text-muted text-caption">
          © {new Date().getFullYear()} {PERSONAL.name} · Built with Next.js & Tailwind CSS · Da Nang, Vietnam
        </p>
      </div>
    </footer>
  );
}
