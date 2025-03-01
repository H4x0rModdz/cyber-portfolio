"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import LanguageSwitch from '@/components/LanguageSwitch';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorksSection from '@/components/WorksSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';

export default function TranslatedContent() {
  const { isEnglish } = useLanguage();
  const actualLanguage = translations[isEnglish ? 'en' : 'pt'];

  return (
    <div className="bg-black text-white min-h-screen select-none">
      <Head>
        <title>{actualLanguage.title}</title>
        <meta name="description" content={actualLanguage.description} />
      </Head>
      <NavBar />
      <LanguageSwitch />
      <main>
        <HeroSection />
        <ExperienceSection />
        <WorksSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
}