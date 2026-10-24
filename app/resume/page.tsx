import type { Metadata } from 'next';
import ResumeContent from './ResumeContent';

export const metadata: Metadata = {
  title: 'Resume — Trần Ngọc Huy',
  description: 'Resume of Trần Ngọc Huy — Information Technology Engineer & Full-Stack Developer.',
};

export default function ResumePage() {
  return <ResumeContent />;
}
