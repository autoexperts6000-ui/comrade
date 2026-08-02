import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import { CTA } from '@/data/company';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Full-Stack Software Services, Delivered End to End"
          description="From concept to launch and beyond — every engagement is engineered for scale, security, and speed."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.slug}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-premium transition-shadow duration-300 hover:shadow-premium-lg"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-glow transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                  {service.summary}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check size={14} className="shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all group-hover:gap-2.5"
                >
                  {CTA.enquire}
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
