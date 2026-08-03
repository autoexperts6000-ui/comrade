import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsByRegion } from '@/data/testimonials';
import { useRegion } from '@/context/RegionContext';

export function Testimonials() {
  const region = useRegion();
  const testimonials = testimonialsByRegion[region.key];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0B1120] py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say About Working With Us"
          light
        />

        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%] px-2 sm:px-4 md:flex-[0_0_60%] lg:flex-[0_0_44%]">
                  <motion.div
                    initial={{ opacity: 0.4, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                    className="glass-dark flex h-full flex-col rounded-3xl border border-white/10 p-8"
                  >
                    <Quote className="text-blue-400" size={28} />
                    <p className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-200">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
                        {t.initials}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-slate-400">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === i ? 'w-7 bg-gradient-to-r from-blue-500 to-cyan-400' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
