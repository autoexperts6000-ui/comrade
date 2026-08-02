import { motion } from 'framer-motion';

const lines = [
  { text: 'const client = new Comrade({', color: 'text-slate-400' },
  { text: "  region: 'UAE-IN',", color: 'text-cyan-300' },
  { text: "  security: 'enterprise',", color: 'text-blue-300' },
  { text: '  uptime: 99.99,', color: 'text-emerald-300' },
  { text: '});', color: 'text-slate-400' },
];

export function HeroCodeSnippet() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="glass-dark hidden w-64 rounded-2xl border border-white/10 p-4 font-mono text-[13px] shadow-premium-lg sm:block"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      {lines.map((line, i) => (
        <motion.p
          key={line.text}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
          className={line.color}
        >
          {line.text}
        </motion.p>
      ))}
    </motion.div>
  );
}
