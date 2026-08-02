import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUp, viewportOnce } from '@/utils/motion';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Badge className={light ? 'border-white/15 bg-white/10 text-white' : ''}>
            {eyebrow}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        custom={0.08}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          'max-w-3xl text-[32px] font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={cn(
            'max-w-2xl text-lg leading-relaxed',
            light ? 'text-slate-300' : 'text-slate-500',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
