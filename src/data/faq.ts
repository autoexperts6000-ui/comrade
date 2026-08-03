export interface FaqItemTemplate {
  question: string | ((countryName: string) => string);
  answer: string | ((countryName: string) => string);
}

export const faqItems: FaqItemTemplate[] = [
  {
    question: 'How long does software development take?',
    answer:
      'Timelines vary based on scope and complexity — a typical MVP takes 6–10 weeks, while enterprise platforms can take 3–6 months. We provide a detailed timeline after the requirement analysis phase.',
  },
  {
    question: (countryName) => `Do you work with local ${countryName} companies?`,
    answer: (countryName) =>
      `Yes. COMRADE has a dedicated local team in ${countryName}, familiar with regional compliance and market requirements, serving businesses since 1990.`,
  },
  {
    question: 'Do you provide support?',
    answer:
      'Absolutely. Every engagement includes dedicated post-launch support, with flexible maintenance plans to keep your software secure, updated, and performing at its best.',
  },
  {
    question: 'Can you redesign existing software?',
    answer:
      'Yes. We specialize in modernizing legacy systems — from UI/UX overhauls to full architecture migrations — without disrupting your existing operations.',
  },
  {
    question: 'Do you build mobile apps?',
    answer:
      'Yes, we build native Android and iOS apps as well as cross-platform apps using Flutter and React Native, tailored to your product and budget.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on project requirements. Contact us for a personalized quotation.',
  },
];
