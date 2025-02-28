"use client";

import { useState, useEffect } from 'react';
import ClientLoadingScreen from './ClientLoadingScreen';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ClientLoadingScreen isLoading={isLoading} />
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          visibility: isLoading ? 'hidden' : 'visible',
        }}
      >
        {children}
      </div>
    </>
  );
} 