"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import AnimeCharacter from './AnimeCharacter';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), { ssr: true });

const experiences = [
  { role: 'Software Engineer', company: 'Projétil', duration: '2024 - Agora', location: 'São Paulo, Brasil', current: true },
  { role: 'Back End Developer', company: 'Forelock4IT', duration: '2023 - 2024', location: 'Bruxelas, Bélgica', current: false },
  { role: 'Full Stack Developer', company: 'Winsiga Sistemas', duration: '2022 - 2023', location: 'Rio de Janeiro, Brasil', current: false },
  { role: 'Full Stack Developer', company: 'Freelancer', duration: '2021 - Agora', location: 'Rio de Janeiro, Brasil', current: true },
];

export default function ExperienceSection() {
  const { isEnglish } = useLanguage(); 
  const actualLanguage = translations[isEnglish ? 'en' : 'pt'];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <div className="flex flex-col items-center justify-center w-full" id="workExperience">
      <h2 className="text-5xl font-semibold mb-28 text-center">{actualLanguage.experience.title}</h2>
      <div className="flex items-start justify-between w-full max-w-7xl px-8">
        <div className="flex items-start ml-8 max-[450px]:items-stretch">
          <hr
            className="h-56 border-l-2 border-fuchsia-900 mr-4 mt-10 max-[450px]:h-auto max-[450px]:mt-0 max-[450px]:self-stretch"
          />
          <AnimatedSection>
            <ul className="flex flex-col items-start">
              {experiences.map((exp, index) => (
                <li key={index} className="mb-4 flex items-center">
                  <span
                    className={`w-3 h-3 bg-fuchsia-500 rounded-full mr-2 ${exp.current ? 'animate-pulse' : ''}`}
                  />
                  <div className="flex flex-col">
                    <strong>
                      {isEnglish ? `${exp.role} at ${exp.company}` : `${exp.role} na ${exp.company}`}
                    </strong>
                    <p>{exp.duration} | {exp.location}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-start">
              <button
                className="bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-xl"
                onClick={handleDownloadResume}
              >
                {actualLanguage.experience.downloadFullCV}
              </button>
            </div>
          </AnimatedSection>
        </div>
        <div className="flex flex-col items-center mr-8 max-[870px]:hidden">
          <div className="w-96 h-96">
            {isClient && (
              <Player
                autoplay
                loop
                src="https://lottie.host/e40f09bb-c902-4a3f-807f-3d53f30ba4f5/YhWoJWpLbe.json"
                className="w-full h-full"
              />
            )}
          </div>
          <p className="mt-4">{actualLanguage.experience.workWithMe}</p>
          <a
            href="mailto:lucasbg.lobo@gmail.com?subject=Quero%20trabalhar%20com%20você&body=Olá%20Lucas,%0A%0AEstou%20entrando%20em%20contato%20porque%20gostaria%20de%20trabalhar%20com%20você.%20Adoraria%20discutir%20mais%20sobre%20possíveis%20colaborações.%0A%0AAtenciosamente,%0A[Seu%20Nome]"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-xl"
          >
            {actualLanguage.experience.talk}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[280px] mt-20">
        <AnimeCharacter />
      </div>
    </div>
  );
}