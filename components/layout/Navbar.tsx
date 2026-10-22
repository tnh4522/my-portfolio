'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'backdrop-blur-xl border-b'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--bg-base) 80%, transparent)'
            : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          boxShadow: scrolled ? '0 1px 0 var(--border), 0 4px 20px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="container-inner flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#hero"
            className="font-display font-extrabold text-text-primary hover:text-accent-blue transition-colors tracking-tight text-xl select-none"
            onClick={handleNavClick}
            style={{ letterSpacing: '-0.03em' }}
          >
            TNH
            <span style={{ color: 'var(--accent-primary)' }}>.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  onClick={handleNavClick}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full"
                      style={{ background: 'var(--accent-primary)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/resume"
              className="px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--border-strong)',
                color: 'var(--accent-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(79,156,249,0.08)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 4px 12px var(--glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Resume
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer"
                style={{ background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-elevated)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              className="p-2 rounded-lg text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'color-mix(in srgb, var(--bg-base) 95%, transparent)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.24, delay: 0.05 }}
              className="flex flex-col items-center justify-center h-full gap-5"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-display font-extrabold tracking-tight transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-text-primary'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                    style={{ letterSpacing: '-0.02em' }}
                    onClick={handleNavClick}
                  >
                    {link.label}
                    {activeSection === link.href.replace('#', '') && (
                      <span
                        className="ml-2 text-sm font-mono"
                        style={{ color: 'var(--accent-primary)' }}
                        aria-hidden="true"
                      >
                        ●
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/resume"
                  className="px-6 py-3 text-sm font-medium rounded-full transition-colors"
                  style={{
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)',
                  }}
                  onClick={handleNavClick}
                >
                  Resume ↗
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
