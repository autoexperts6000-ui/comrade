import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCounter } from '@/components/ui/StatCounter';
import { whyChoosePoints, whyChooseStats } from '@/data/whyChoose';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function WhyChoose() {
  return (
    <section id="why-comrade" className="relative overflow-hidden bg-[#0B1120] py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Comrade"
          title="Engineering Trust Into Every Line of Code"
          description="We combine enterprise discipline with startup speed — so you get software that's secure, scalable, and shipped on time."
          light
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:grid-cols-4 lg:p-10"
        >
          {whyChooseStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} light />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChoosePoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-300 transition-transform duration-500 group-hover:rotate-6">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
