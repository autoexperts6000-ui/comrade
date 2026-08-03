import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { useRegion } from '@/context/RegionContext';
import { fadeUp, viewportOnce } from '@/utils/motion';
import { ContactForm } from './contact/ContactForm';
import { WhatsAppIcon } from '@/components/layout/SocialIcons';

export function Contact() {
  const region = useRegion();

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B1120] py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Exceptional Together"
          description={`Tell us about your project and our ${region.label} team will get back to you with a personalized quotation.`}
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <GlassCard dark className="flex h-full flex-col gap-8 p-8">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {region.flag} {region.label} Office
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Reach out directly or send us your requirements — we typically respond within
                  one business day.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <MapPin size={16} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-white">Office Address</p>
                    {region.addressLines.map((line) => (
                      <p key={line} className="text-sm text-slate-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Mail size={16} />
                  </span>
                  <div className="flex flex-col gap-1">
                    {region.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="text-sm text-slate-300 hover:text-blue-300"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Phone size={16} />
                  </span>
                  <div className="flex flex-col gap-1">
                    {region.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-sm text-slate-300 hover:text-blue-300"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <WhatsAppIcon width={16} height={16} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <a
                      href={`https://wa.me/${region.whatsappDigits}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-300 hover:text-emerald-300"
                    >
                      {region.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Clock size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Business Hours</p>
                    <p className="text-sm text-slate-300">{region.businessHours}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.12}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-premium-lg sm:p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
