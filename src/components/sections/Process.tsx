import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/data/process';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A Proven Path From Idea to Launch"
          description="Every project follows the same disciplined process — refined across dozens of enterprise engagements."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-20"
        >
          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="grid grid-cols-7 gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.index}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-blue-600 shadow-premium transition-all duration-300 group-hover:border-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-glow">
                      <Icon size={26} />
                      <span className="absolute -top-2.5 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                        {step.index}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.index} variants={fadeUp} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                      <Icon size={22} />
                    </div>
                    <span className="mt-2 flex-1 w-px bg-slate-200" />
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Step {step.index}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
