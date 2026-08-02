import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, value };
}
