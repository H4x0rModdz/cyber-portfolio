import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

  const messages = [
   "Heey! Nice to see u here! 😊",
   "Hope u like my portfolio! <3",
   "Shall we work together? 🌟",
   "I loved ur interest! 🎉",
  ];

  const translatedMessages = [
    "Oláá! Prazer em te ver aqui! 😊",
    "Espero que goste do meu portfólio! <3",
    "Vamos trabalhar juntos? 🌟",
    "Amei o seu interesse! 🎉",
  ]

 const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: true });

const AnimeCharacter = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const { isEnglish } = useLanguage();
  const currentMessage = isEnglish ? messages[currentMessageIndex] : translatedMessages[currentMessageIndex];
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMessageClick = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="relative flex items-center">
      {isClient && (
        <div className="w-64 h-64">
          <Player
            src='https://lottie.host/1ed4dfe6-3582-4e7d-a80a-e2dc30eb82c7/FbZ7fNtoa2.json'
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      )}
      <div
        onClick={handleMessageClick}
        className={`
          absolute
          -top-16 left-48
          bg-white p-4 rounded-2xl shadow-lg cursor-pointer
          transform hover:scale-105 transition-transform
          w-44 h-22
          max-[510px]:left-1/2
          max-[510px]:-translate-x-1/2
        `}
      >
        <div className="relative">
          <p className="text-gray-800 text-sm select-none">
            {currentMessage}
          </p>
          <div className="absolute -bottom-4 left-0 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCharacter;