import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export function StatCounter({ value, suffix = '', label, light = false }: StatCounterProps) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <p
        className={`text-4xl font-extrabold sm:text-5xl ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {current}
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className={`mt-1.5 text-sm font-medium ${light ? 'text-slate-400' : 'text-slate-500'}`}>
        {label}
      </p>
    </div>
  );
}
