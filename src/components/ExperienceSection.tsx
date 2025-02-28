"use client";
import AnimatedSection from './AnimatedSection';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import AnimeCharacter from './AnimeCharacter';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: true });
const experiences = [
  { role: 'Software Engineer', company: 'Projétil', duration: '2024 - Now', location: 'São Paulo, Brazil', current: true },
  { role: 'Back End Developer', company: 'Forelock4IT', duration: '2023 - 2024', location: 'Brussels, Belgium', current: false },
  { role: 'Full Stack Developer', company: 'Winsiga Sistemas', duration: '2022 - 2023', location: 'Rio de Janeiro, Brazil', current: false },
  { role: 'Full Stack Developer', company: 'Freelancer', duration: '2021 - Now', location: 'Rio de Janeiro, Brazil', current: true },
];

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = 'resume/resume.pdf';
  link.download = 'resume.pdf';
  link.click();
};

export default function ExperienceSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full" id='works'>
      <h2 className="text-5xl font-semibold mb-28 text-center">Work Experience</h2>
      <div className="flex items-start justify-between w-full max-w-7xl px-8">
      <div className="flex items-start ml-8 max-[450px]:items-stretch">
      <hr
        className="
          h-56
          border-l-2 border-fuchsia-900 mr-4 mt-10
          max-[450px]:h-auto
          max-[450px]:mt-0
          max-[450px]:self-stretch
        "
      />
      <AnimatedSection>
        <ul className="flex flex-col items-start">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-4 flex items-center">
              <span
                className={`w-3 h-3 bg-fuchsia-500 rounded-full mr-2 ${
                  exp.current ? 'animate-pulse' : ''
                }`}
              />
              <div className="flex flex-col">
                <strong>{exp.role} at {exp.company}</strong>
                <p>{exp.duration} | {exp.location}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex">
        <div className="mt-8 flex justify-start">
        <button
          className="bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-xl"
          onClick={handleDownloadResume}
        >
          Download Full CV
        </button>
      </div>
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
          <p className="mt-4">Would you like to work with me?</p>
          <a
            href="mailto:lucasbg.lobo@gmail.com?subject=I%20need%20to%20work%20with%20you&body=Hello%20Lucas,%0A%0AI%20am%20reaching%20out%20because%20I%20am%20interested%20in%20working%20with%20you.%20I%20would%20love%20to%20discuss%20more%20about%20potential%20collaborations.%0A%0ABest%20regards,%0A[Your%20Name]"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-xl"
          >
            Let's talk!
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[280px] mt-20">
        <AnimeCharacter />
      </div>
    </div>
  );
}
