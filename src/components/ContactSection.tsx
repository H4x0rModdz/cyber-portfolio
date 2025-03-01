"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export default function ContactSection() {
  const { isEnglish } = useLanguage();
  const t = translations[isEnglish ? 'en' : 'pt'];

  return (
    <section className="py-8 text-center transition-opacity duration-300">
      <h2 className="text-2xl font-semibold text-fuchsia-800 hover:text-white transition-colors duration-300">
        {t.contact.title}
      </h2>
      <p className="text-gray-400">
        <Link href="mailto:lucasbg.lobo@gmail.com">{t.contact.email}</Link>
      </p>
    </section>
  );
}