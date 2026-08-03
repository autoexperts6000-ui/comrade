import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { navLinks } from '@/data/nav';
import { CTA } from '@/data/company';
import { useRegion } from '@/context/RegionContext';
import { Button } from '@/components/ui/Button';
import { RegionSwitchLink } from './RegionSwitch';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const region = useRegion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="ml-auto flex h-full w-[86%] max-w-sm flex-col justify-between bg-white px-6 pb-8 pt-28 shadow-premium-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.35 }}
              className="rounded-xl px-3 py-3.5 text-lg font-semibold text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
          <a href="#contact" onClick={onClose}>
            <Button variant="primary" className="w-full">
              {CTA.primary}
            </Button>
          </a>
          <a
            href={`mailto:${region.emails[0]}`}
            className="flex items-center gap-3 text-sm font-medium text-slate-600"
          >
            <Mail size={16} className="text-blue-600" /> {region.emails[0]}
          </a>
          <a
            href={`tel:${region.phones[0].replace(/\s+/g, '')}`}
            className="flex items-center gap-3 text-sm font-medium text-slate-600"
          >
            <Phone size={16} className="text-blue-600" /> {region.phones[0]}
          </a>
          <RegionSwitchLink />
        </div>
      </motion.div>
    </motion.div>
  );
}
