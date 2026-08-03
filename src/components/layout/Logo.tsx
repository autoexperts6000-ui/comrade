import { cn } from '@/utils/cn';

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <a
      href="#top"
      aria-label="COMRADE — Home"
      className={cn('group flex items-center gap-2.5', className)}
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-glow ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-6">
        <img
          src={`${import.meta.env.BASE_URL}logo.jpeg`}
          alt=""
          className="h-full w-full object-contain"
        />
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
