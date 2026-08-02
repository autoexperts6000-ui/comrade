import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700',
        className,
      )}
    >
      {children}
    </span>
  );
}
