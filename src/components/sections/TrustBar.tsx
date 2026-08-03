import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useRegion } from '@/context/RegionContext';

const placeholders = [
  'Nexora',
  'Atlas Retail',
  'Zenith Health',
  'Falcon Finance',
  'Orbit Logistics',
  'Meridian Group',
  'Skyline Realty',
  'Vertex Manufacturing',
];

export function TrustBar() {
  const region = useRegion();
  const loop = [...placeholders, ...placeholders];

  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Trusted by Businesses Across {region.countryName}
        </p>
      </Container>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div className="flex w-max animate-marquee gap-16 px-8">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center text-xl font-bold tracking-tight text-slate-300 transition-colors hover:text-slate-500"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
