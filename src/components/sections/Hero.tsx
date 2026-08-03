import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CTA, company } from '@/data/company';
import { useRegion } from '@/context/RegionContext';
import { fadeUp } from '@/utils/motion';
import { HeroBackground } from './hero/HeroBackground';
import { HeroMockup } from './hero/HeroMockup';

export function Hero() {
  const region = useRegion();
  const yearsInBusiness = new Date().getFullYear() - company.foundedYear;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-24"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur"
            >
              <Sparkles size={13} />
              {region.heroBadge}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="visible"
              className="mt-6 text-[32px] font-extrabold leading-[1.08] text-white sm:text-[40px] lg:text-[72px]"
            >
              Build Software That{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Accelerates
              </span>{' '}
              Your Business.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              From enterprise software and ERP systems to mobile apps, security testing, CRM
              solutions and digital marketing, COMRADE has helped businesses in {region.countryName}{' '}
              transform digitally since {company.foundedYear}.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#contact">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                  {CTA.primary}
                </Button>
              </a>
              <a href="#services">
                <Button variant="outlineLight" size="lg">
                  {CTA.secondary}
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              initial="hidden"
              animate="visible"
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {yearsInBusiness}+
                Years in Business
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 12+ Industries Served
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Enterprise-Grade
                Security
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <HeroMockup />
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-5 rounded-full border border-slate-500"
        >
          <motion.span
            animate={{ y: [2, 12, 2], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyan-300"
          />
        </motion.span>
      </motion.div>
    </section>
  );
}
