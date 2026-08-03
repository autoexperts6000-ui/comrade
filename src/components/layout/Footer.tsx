import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { company } from '@/data/company';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { useRegion } from '@/context/RegionContext';
import { Container } from '@/components/ui/Container';
import { Logo } from './Logo';
import { LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { RegionSwitchLink } from './RegionSwitch';

const socialLinks = [
  { icon: LinkedInIcon, href: company.social.linkedin, label: 'LinkedIn' },
  { icon: InstagramIcon, href: company.social.instagram, label: 'Instagram' },
  { icon: TwitterIcon, href: company.social.twitter, label: 'Twitter' },
  { icon: FacebookIcon, href: company.social.facebook, label: 'Facebook' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const region = useRegion();

  return (
    <footer className="relative overflow-hidden bg-[#0B1120] text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]"
      />
      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Since {company.foundedYear}, COMRADE has built enterprise software, ERP systems,
              mobile apps, CRM solutions, and secure digital platforms for ambitious businesses
              in {region.countryName}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <s.icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Industries</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.name}>
                  <a
                    href="#industries"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{region.addressLines.join(', ')}</span>
              </li>
              {region.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-start gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0" />
                    <span className="break-all">{email}</span>
                  </a>
                </li>
              ))}
              {region.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    <Phone size={15} className="shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} COMRADE. All rights reserved.
          </p>
          <RegionSwitchLink />
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Made with <Heart size={14} className="fill-blue-500 text-blue-500" /> by COMRADE
          </p>
        </div>
      </Container>
    </footer>
  );
}
