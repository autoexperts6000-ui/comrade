import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { technologies } from '@/data/technologies';

function TechRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex w-max gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex shrink-0 items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-premium transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Technology() {
  const mid = Math.ceil(technologies.length / 2);
  const rowOne = technologies.slice(0, mid);
  const rowTwo = technologies.slice(mid);

  return (
    <section id="technology" className="overflow-hidden bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology Stack"
          title="Built With Proven, Future-Ready Technology"
          description="We choose tools that scale — from frontend frameworks to cloud infrastructure and DevOps pipelines."
        />
      </Container>

      <div className="mt-16 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <TechRow items={rowOne} />
        <TechRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
