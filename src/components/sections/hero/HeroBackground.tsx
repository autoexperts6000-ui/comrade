import { motion } from 'framer-motion';

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: (i * 53) % 100,
  top: (i * 37) % 100,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.5,
  duration: 5 + (i % 5),
}));

export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-[#070B18]">
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        className="absolute -left-40 top-[-10%] h-[32rem] w-[32rem] rounded-full bg-blue-600/30 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-8%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-[110px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-indigo-600/20 blur-[120px]"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-300/70"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -22, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070B18]" />
    </div>
  );
}
