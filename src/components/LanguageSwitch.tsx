"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';

export default function LanguageSwitch() {
  const { isEnglish, toggleLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-2 py-4 px-8">
      <Image
        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
        alt="Bandeira do Brasil"
        width={24}
        height={16}
        className={!isEnglish ? 'opacity-100' : 'opacity-50'}
      />
      <Switch checked={isEnglish} onCheckedChange={toggleLanguage} />
      <Image
        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
        alt="Bandeira dos EUA"
        width={24}
        height={16}
        className={isEnglish ? 'opacity-100' : 'opacity-50'}
      />
    </div>
  );
}