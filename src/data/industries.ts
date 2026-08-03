import {
  ShoppingBag,
  Radio,
  Landmark,
  Handshake,
  Server,
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  Shirt,
  HardHat,
  Briefcase,
} from 'lucide-react';
import type { Industry } from '@/types';

export const industries: Industry[] = [
  { name: 'Retail & FMCG', icon: ShoppingBag },
  { name: 'Telecommunications', icon: Radio },
  { name: 'Finance & Insurance', icon: Landmark },
  { name: 'Trading & Commerce', icon: Handshake },
  { name: 'IT Infrastructure', icon: Server },
  { name: 'Public Administration', icon: Building2 },
  { name: 'Manufacturing & Industry', icon: Factory },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Schools & Education', icon: GraduationCap },
  { name: 'Tailoring, Abaya & Sheila', icon: Shirt },
  { name: 'Construction & Contracting', icon: HardHat },
  { name: 'SME', icon: Briefcase },
];
