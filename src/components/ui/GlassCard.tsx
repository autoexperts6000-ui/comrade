import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dark?: boolean;
}

export function GlassCard({ children, className, dark, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border shadow-premium',
        dark ? 'glass-dark border-white/10 text-white' : 'glass border-white/60',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
