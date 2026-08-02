import { lazy, Suspense } from 'react';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';

const WhyChoose = lazy(() =>
  import('@/components/sections/WhyChoose').then((m) => ({ default: m.WhyChoose })),
);
const Industries = lazy(() =>
  import('@/components/sections/Industries').then((m) => ({ default: m.Industries })),
);
const Technology = lazy(() =>
  import('@/components/sections/Technology').then((m) => ({ default: m.Technology })),
);
const Process = lazy(() =>
  import('@/components/sections/Process').then((m) => ({ default: m.Process })),
);
const Portfolio = lazy(() =>
  import('@/components/sections/Portfolio').then((m) => ({ default: m.Portfolio })),
);
const Testimonials = lazy(() =>
  import('@/components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
);
const FAQ = lazy(() => import('@/components/sections/FAQ').then((m) => ({ default: m.FAQ })));
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
);

const SectionFallback = () => <div className="h-40 w-full" aria-hidden />;

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Suspense fallback={<SectionFallback />}>
        <WhyChoose />
        <Industries />
        <Technology />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  );
}
