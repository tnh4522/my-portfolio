'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { DrupalProject } from '@/lib/types';

interface ImageLightboxProps {
  project: DrupalProject | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ImageLightbox({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 cursor-pointer"
            style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(12px)' }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-[110] p-2.5 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.8)',
            }}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          {/* Nav: Previous */}
          {onPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 md:left-8 z-[110] p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Nav: Next */}
          {onNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 md:right-8 z-[110] p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image + Info */}
          <motion.div
            className="relative z-[105] flex flex-col items-center w-full max-w-5xl mx-4 md:mx-8"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{
                aspectRatio: '16/10',
                boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 95vw, 1200px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Info Bar */}
            <motion.div
              className="mt-4 flex flex-col sm:flex-row items-center gap-3 w-full justify-between px-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                  style={{
                    background: 'rgba(79,156,249,0.2)',
                    color: '#4F9CF9',
                    border: '1px solid rgba(79,156,249,0.3)',
                  }}
                >
                  {project.category}
                </span>
                <h3 className="text-white font-display font-bold text-lg">
                  {project.title}
                </h3>
              </div>
              <p className="text-white/50 text-xs font-mono text-center sm:text-right">
                ESC to close · ← → to navigate
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
