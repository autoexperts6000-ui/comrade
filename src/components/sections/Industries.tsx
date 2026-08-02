import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { industries } from '@/data/industries';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function Industries() {
  return (
    <section id="industries" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Purpose-Built Solutions for Every Sector"
          description="COMRADE has delivered specialized software across the industries that power the UAE and India's economies."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200/70 bg-surface px-4 py-8 text-center shadow-premium transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-glow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-premium transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <p className="text-sm font-semibold text-slate-800">{industry.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
