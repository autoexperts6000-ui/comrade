import type { Testimonial } from '@/types';
import type { RegionKey } from '@/data/regions';

export const testimonialsByRegion: Record<RegionKey, Testimonial[]> = {
  dubai: [
    {
      name: 'Rashid Al Mansoori',
      role: 'Operations Director',
      company: 'Retail Group, Dubai',
      quote:
        'COMRADE rebuilt our entire operations platform. The delivery was fast, the code quality was outstanding, and the team felt like an extension of ours.',
      initials: 'RM',
    },
    {
      name: 'Omar Al Suwaidi',
      role: 'CTO',
      company: 'Healthtech, Abu Dhabi',
      quote:
        'The penetration testing team found vulnerabilities our previous vendor missed entirely. Meticulous, professional, and genuinely security-first.',
      initials: 'OS',
    },
    {
      name: 'Fatima Al Zaabi',
      role: 'Finance Manager',
      company: 'Trading LLC, Sharjah',
      quote:
        "We've run Comrade ERP for our accounting since our very first year. Decades later, it's still the backbone of how we manage our books.",
      initials: 'FZ',
    },
  ],
  india: [
    {
      name: 'Ananya Sharma',
      role: 'Founder',
      company: 'FinEdge, Bengaluru',
      quote:
        'From day one, COMRADE understood our vision. Their CRM solution streamlined our sales pipeline and doubled our team’s productivity.',
      initials: 'AS',
    },
    {
      name: 'Priya Nair',
      role: 'Head of Digital',
      company: 'EduNext, Kochi',
      quote:
        'Our mobile app launched on time, on budget, and exceeded every expectation. COMRADE is now our permanent technology partner.',
      initials: 'PN',
    },
    {
      name: 'Vishnu Menon',
      role: 'Managing Partner',
      company: 'Menon Textiles, Thiruvananthapuram',
      quote:
        'Comrade ERP has handled our inventory and GST filing for years without a hitch. Local support that actually understands our business.',
      initials: 'VM',
    },
  ],
};
