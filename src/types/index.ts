import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  features: string[];
  gradient: string;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export interface Technology {
  name: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface EnquiryFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  serviceInterested: string;
  message: string;
}
