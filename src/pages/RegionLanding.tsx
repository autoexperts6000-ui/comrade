import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { regionList } from '@/data/regions';
import { company } from '@/data/company';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

export default function RegionLanding() {
  const yearsInBusiness = new Date().getFullYear() - company.foundedYear;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#070B18] py-20">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-600/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-[-10%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-glow"
        >
          <span className="text-2xl font-black text-white">C</span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.08}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur"
        >
          <Sparkles size={13} />
          Since {company.foundedYear} · {yearsInBusiness}+ Years of Enterprise Software
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          animate="visible"
          className="mt-6 text-[32px] font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Choose Your{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            COMRADE
          </span>{' '}
          Region
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.24}
          initial="hidden"
          animate="visible"
          className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          COMRADE operates locally in the UAE and India, each with a dedicated team, office, and
          contact line. Select your region to continue.
        </motion.p>

        <motion.div
          variants={staggerContainer(0.12, 0.35)}
          initial="hidden"
          animate="visible"
          className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {regionList.map((region) => (
            <motion.div key={region.key} variants={fadeUp}>
              <Link
                to={`/${region.key}`}
                className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08] hover:shadow-glow"
              >
                <span
                  aria-hidden
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="text-4xl">{region.flag}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{region.label}</h2>
                  <p className="mt-1 text-sm text-slate-400">{region.cityLine}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{region.addressLines[0]}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-all group-hover:gap-2.5">
                  Enter {region.label} Site
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-xs text-slate-500"
        >
          &copy; {new Date().getFullYear()} COMRADE Software Marketing LLC. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
}
