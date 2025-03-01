"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import AnimatedText from './AnimatedText';

export default function HeroSection() {
  const { isEnglish } = useLanguage();
  const actualLanguage = translations[isEnglish ? 'en' : 'pt'];

  return (
    <section className="h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold text-center"
      >
        <AnimatedText /> <br className="hidden md:block" /> {isEnglish ? 'Made in Brazil.' : 'Diretamente do Brasil'}
        </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 mt-6 max-w-4xl"
      >
        {actualLanguage.hero.subtitle}
      </motion.p>
    </section>
  );
}