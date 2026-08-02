import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow hover:shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_28px_70px_-14px_rgba(37,99,235,0.5)] hover:-translate-y-0.5',
        secondary:
          'border border-slate-200 bg-white/80 text-slate-900 backdrop-blur hover:border-blue-300 hover:bg-white hover:-translate-y-0.5 shadow-premium',
        ghost: 'text-slate-700 hover:text-blue-600',
        outlineLight:
          'border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:-translate-y-0.5',
      },
      size: {
        md: 'h-12 px-6 text-[15px]',
        lg: 'h-14 px-8 text-base',
        sm: 'h-10 px-5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, icon, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {icon}
        </span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
      </button>
    );
  },
);

Button.displayName = 'Button';
