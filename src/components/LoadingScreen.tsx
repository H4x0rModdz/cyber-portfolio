"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-64 h-64">
        <Player
          autoplay
          loop
          src="https://lottie.host/d5b12dd0-c9ba-4b9a-b2f6-4d39e319d80b/HYGGjb7W89.json"
          className="w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50">
          <Player
            autoplay
            loop
            src="https://lottie.host/3eebe5e4-5945-48a2-8c9b-0dfcc4b1c14c/pBAF28w0Q1.json"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
} 