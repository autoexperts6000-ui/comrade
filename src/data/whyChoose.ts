import { ShieldCheck, Layers, Code2, Cpu, Zap, LifeBuoy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface WhyChooseStat {
  value: number;
  suffix: string;
  label: string;
}

export const whyChooseStats: WhyChooseStat[] = [
  { value: 500, suffix: '+', label: 'Businesses Served' },
  { value: 12, suffix: '+', label: 'Industries Served' },
  { value: 100, suffix: '%', label: 'Responsive Development' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

export interface WhyChoosePoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    title: 'Enterprise Grade Security',
    description: 'Every build follows OWASP standards with rigorous, independent security audits.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems engineered to grow from your first users to your millionth.',
    icon: Layers,
  },
  {
    title: 'Clean Code',
    description: 'Maintainable, well-documented codebases your future team will thank you for.',
    icon: Code2,
  },
  {
    title: 'Modern Technologies',
    description: 'We build exclusively with proven, future-ready frameworks and infrastructure.',
    icon: Cpu,
  },
  {
    title: 'Fast Delivery',
    description: 'Agile sprints and transparent timelines keep every project moving forward.',
    icon: Zap,
  },
  {
    title: 'Dedicated Support',
    description: 'A committed team stays with you well beyond launch day.',
    icon: LifeBuoy,
  },
];
