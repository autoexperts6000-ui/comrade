import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { company, CTA } from '@/data/company';
import type { EnquiryFormValues } from '@/types';

const inputClasses =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100';

const labelClasses = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>();

  const onSubmit = async (data: EnquiryFormValues) => {
    // Placeholder submission — replace with real API integration.
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log('Enquiry submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className={inputClasses}
            aria-invalid={!!errors.name}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company name"
            className={inputClasses}
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className={inputClasses}
            aria-invalid={!!errors.email}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+971 5X XXX XXXX"
            className={inputClasses}
            aria-invalid={!!errors.phone}
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="country" className={labelClasses}>
            Country
          </label>
          <select
            id="country"
            defaultValue=""
            className={inputClasses}
            aria-invalid={!!errors.country}
            {...register('country', { required: 'Please select a country' })}
          >
            <option value="" disabled>
              Select country
            </option>
            {company.regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          {errors.country && (
            <p className="mt-1.5 text-xs text-red-500">{errors.country.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="serviceInterested" className={labelClasses}>
            Service Interested
          </label>
          <select
            id="serviceInterested"
            defaultValue=""
            className={inputClasses}
            aria-invalid={!!errors.serviceInterested}
            {...register('serviceInterested', { required: 'Please select a service' })}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.serviceInterested && (
            <p className="mt-1.5 text-xs text-red-500">{errors.serviceInterested.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your project..."
          className={`${inputClasses} resize-none`}
          aria-invalid={!!errors.message}
          {...register('message', { required: 'Please tell us about your project' })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="mt-2 w-full sm:w-auto"
        icon={isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
      >
        {isSubmitting ? 'Sending...' : CTA.primary}
      </Button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-emerald-600"
        >
          <CheckCircle2 size={16} /> Thank you! We'll get back to you within 24 hours.
        </motion.p>
      )}
    </form>
  );
}
