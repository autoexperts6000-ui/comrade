import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Landmark,
  Factory,
  HardHat,
  Building2,
  Hotel,
  Truck,
  Home,
} from 'lucide-react';
import type { Industry } from '@/types';

export const industries: Industry[] = [
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Finance', icon: Landmark },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Construction', icon: HardHat },
  { name: 'Government', icon: Building2 },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Logistics', icon: Truck },
  { name: 'Real Estate', icon: Home },
];
