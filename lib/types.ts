export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  role: string;
  highlight?: boolean;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: 'full-time' | 'internship';
  bullets: string[];
  techStack?: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  prize: string;
  tier: 'gold' | 'silver' | 'bronze';
}

export interface Skill {
  category: string;
  items: string[];
}
