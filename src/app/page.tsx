"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import TranslatedContent from '@/components/TranslatedContent';

export default function Home() {
  return (
    <LanguageProvider>
      <TranslatedContent />
    </LanguageProvider>
  );
}