import { motion } from 'framer-motion';
import { BarChart3, Users2, Smartphone, Cloud, ShieldCheck, TrendingUp } from 'lucide-react';
import { HeroCodeSnippet } from './HeroCodeSnippet';

const bars = [46, 72, 38, 84, 60, 96, 54];

const floatingCards = [
  {
    icon: Users2,
    title: 'CRM',
    detail: '1,204 active leads',
    className: 'left-[-14%] top-[-8%]',
    delay: 0.2,
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    detail: '4.9 App Store rating',
    className: 'right-[-14%] top-[-4%]',
    delay: 0.4,
  },
  {
    icon: Cloud,
    title: 'Cloud',
    detail: '99.99% uptime',
    className: 'left-[-16%] bottom-[-6%]',
    delay: 0.6,
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    detail: 'OWASP verified',
    className: 'right-[-12%] bottom-[-10%]',
    delay: 0.8,
  },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center px-8 py-16 lg:px-14 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="glass-dark relative z-10 w-full max-w-sm rounded-3xl border border-white/10 p-5 shadow-premium-lg sm:p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
            <TrendingUp size={12} /> Live
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Revenue Analytics</p>
            <p className="mt-1 text-2xl font-bold text-white">$482,900</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
            <BarChart3 size={18} />
          </div>
        </div>

        <div className="mt-6 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400"
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          {[
            ['32', 'Projects'],
            ['128', 'Clients'],
            ['99.9%', 'Uptime'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-lg font-bold text-white">{value}</p>
              <p className="text-[11px] text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {floatingCards.map(({ icon: Icon, title, detail, className, delay }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.6, delay },
            scale: { duration: 0.6, delay },
            y: { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay },
          }}
          className={`glass-dark absolute z-20 hidden w-40 rounded-2xl border border-white/10 p-3.5 shadow-premium-lg sm:block ${className}`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
            <Icon size={15} />
          </div>
          <p className="mt-2 text-xs font-semibold text-white">{title}</p>
          <p className="text-[11px] text-slate-400">{detail}</p>
        </motion.div>
      ))}

      <div className="absolute -right-16 top-1/2 z-0 hidden -translate-y-1/2 xl:block">
        <HeroCodeSnippet />
      </div>
    </div>
  );
}
