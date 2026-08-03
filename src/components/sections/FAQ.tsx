import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqItems } from '@/data/faq';
import { useRegion } from '@/context/RegionContext';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function FAQ() {
  const region = useRegion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const resolvedItems = faqItems.map((item) => ({
    question:
      typeof item.question === 'function' ? item.question(region.countryName) : item.question,
    answer: typeof item.answer === 'function' ? item.answer(region.countryName) : item.answer,
  }));

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 flex flex-col gap-4"
        >
          {resolvedItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-surface"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-premium"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
