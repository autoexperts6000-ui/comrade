import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from 'lucide-react';
import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Requirement Analysis',
    description: 'We dive deep into your business goals to define scope, risks, and success metrics.',
    icon: Search,
  },
  {
    index: '02',
    title: 'Planning',
    description: 'Roadmaps, architecture, and sprint plans are laid out with full transparency.',
    icon: ClipboardList,
  },
  {
    index: '03',
    title: 'UI / UX Design',
    description: 'Pixel-perfect, research-backed interfaces crafted for clarity and delight.',
    icon: PenTool,
  },
  {
    index: '04',
    title: 'Development',
    description: 'Clean, scalable code built by senior engineers using modern best practices.',
    icon: Code2,
  },
  {
    index: '05',
    title: 'Testing',
    description: 'Rigorous QA, performance, and security testing before anything ships.',
    icon: Bug,
  },
  {
    index: '06',
    title: 'Deployment',
    description: 'Seamless, zero-downtime releases to production infrastructure.',
    icon: Rocket,
  },
  {
    index: '07',
    title: 'Support',
    description: 'Dedicated post-launch support to keep your software running flawlessly.',
    icon: LifeBuoy,
  },
];
