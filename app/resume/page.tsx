import type { Metadata } from 'next';
import ResumeContent from './ResumeContent';

export const metadata: Metadata = {
  title: 'Resume — Trần Ngọc Huy',
  description: 'Resume of Trần Ngọc Huy — Web Designer & Frontend Developer at Lundi Matin Groupe (France).',
};

export default function ResumePage() {
  return <ResumeContent />;
}
