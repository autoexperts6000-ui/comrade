import { motion } from 'framer-motion';
import { Sparkles, FileText, Building } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

const cards = [
  {
    icon: Sparkles,
    title: 'Future Projects',
    description: 'A curated showcase of upcoming builds across web, mobile, and enterprise systems.',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'In-depth breakdowns of the challenges we solved and the impact we delivered.',
  },
  {
    icon: Building,
    title: 'Enterprise Solutions',
    description: 'Large-scale platforms built for organizations across the UAE and India.',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work Archive Is Launching Soon"
          description="We're preparing an in-depth showcase of our enterprise projects. In the meantime, get in touch to discuss your project directly with our team."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white/60 p-10 text-center backdrop-blur"
              >
                <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  Coming Soon
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                  <Icon size={26} />
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
