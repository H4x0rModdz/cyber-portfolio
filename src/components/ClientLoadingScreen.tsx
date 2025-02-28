"use client";

import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('./LoadingScreen'), {
  ssr: false
});

interface ClientLoadingScreenProps {
  isLoading: boolean;
}

export default function ClientLoadingScreen({ isLoading }: ClientLoadingScreenProps) {
  return <LoadingScreen isLoading={isLoading} />;
} 