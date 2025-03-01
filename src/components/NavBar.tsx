"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { isEnglish } = useLanguage();
  const t = translations[isEnglish ? 'en' : 'pt'];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos <= lastScrollPos);
      setLastScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    switch (isEnglish) {
      case true:
        link.href = 'resume/resume-en-US.pdf';
        link.download = 'LucasLoboCurriculum.pdf';
        break;
      case false:
        link.href = 'resume/resume-pt-BR.pdf';
        link.download = 'CurriculoLucasLobo.pdf';
        break;
      default:
        link.href = 'resume/resume-en-US.pdf';
        link.download = 'LucasLoboCurriculum.pdf';
        break;
    }
    link.click();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3 }}
          className="relative w-full top-0 left-0 z-50 bg-black"
        >
          <div className="mx-auto flex items-center justify-between py-4 px-8">
            <div className="text-white font-bold text-xl cursor-pointer">
                <AnimatedTitle />
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <FaBars className="text-white" />
            </button>
            <div className="hidden md:flex space-x-6 text-white">
              <Link href="#about" className="hover:text-red-500 transition">
                {t.nav.about}
              </Link>
              <Link href="#workExperience" className="hover:text-red-500 transition">
              {t.nav.workExperience}
              </Link>
              <Link href="#works" className="hover:text-red-500 transition">
                {t.nav.works}
              </Link>
              <Link href="https://wa.me/5521978813492?text=Olá! Estou enviando esta mensagem para me contactar com você" target='_blank' className="hover:text-red-500 transition">
                {t.nav.contact}
              </Link>
              <button
                className="hover:text-red-500 transition"
                onClick={handleDownloadResume}
              >
                {t.nav.downloadCV}
              </button>
            </div>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full right-8 md:right-auto w-auto flex flex-col items-end space-y-4 text-white md:hidden"
                >
                  <Link href="#about" className="hover:text-red-500 transition">
                    {t.nav.about}
                  </Link>
                  <Link href="#works" className="hover:text-red-500 transition">
                    {t.nav.works}
                  </Link>
                  <Link href="#contact" className="hover:text-red-500 transition">
                    {t.nav.contact}
                  </Link>
                  <button
                    className="hover:text-red-500 transition"
                    onClick={handleDownloadResume}
                  >
                    {t.nav.downloadCV}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}