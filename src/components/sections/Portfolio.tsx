import { motion } from 'framer-motion';
import { Check, Globe2, Sparkles, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { comradeErp, upcomingPortfolio } from '@/data/portfolio';
import { useRegion } from '@/context/RegionContext';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

const upcomingIcons = [Sparkles, ShieldCheck];

export function Portfolio() {
  const region = useRegion();

  return (
    <section id="portfolio" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Flagship Work, In Production Since 1990"
          description="Comrade ERP has powered real businesses for over three decades. A full case-study archive of our custom engagements is on the way."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200/70 bg-[#0B1120] p-8 shadow-premium-lg sm:p-10 lg:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[110px]"
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Flagship Product · Est. 1990
              </span>
              <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                <Globe2 size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">{comradeErp.name}</h3>
              <p className="mt-1 text-sm font-semibold text-cyan-300">{comradeErp.subtitle}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                {comradeErp.description(region.countryName)}
              </p>
            </div>

            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3"
            >
              {comradeErp.features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <Check size={14} />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {upcomingPortfolio.map((card, i) => {
            const Icon = upcomingIcons[i];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white/60 p-8 backdrop-blur"
              >
                <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  Coming Soon
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
