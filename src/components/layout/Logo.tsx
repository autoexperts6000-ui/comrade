import { cn } from '@/utils/cn';

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <a
      href="#top"
      aria-label="COMRADE — Home"
      className={cn('group flex items-center gap-2.5', className)}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-glow transition-transform duration-300 group-hover:rotate-6">
        <span className="text-base font-black text-white">C</span>
      </span>
      <span
        className={cn(
          'text-lg font-extrabold tracking-tight',
          light ? 'text-white' : 'text-slate-900',
        )}
      >
        COMRADE
      </span>
    </a>
  );
}
