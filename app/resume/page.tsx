import type { Metadata } from 'next';
import ResumeContent from './ResumeContent';

export const metadata: Metadata = {
  title: 'Resume — Trần Ngọc Huy',
  description: 'Resume of Trần Ngọc Huy — Full-stack Developer at Lundi Matin (France).',
};

export default function ResumePage() {
  return <ResumeContent />;
}
