import Head from 'next/head';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorksSection from '@/components/WorksSection';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen select-none">
      <Head>
        <title>Lucas Lobo | Software Engineer</title>
        <meta
          name="description"
          content="Lucas Lobo | Software Engineer"
        />
      </Head>

      <NavBar />

      <main> 
        <HeroSection />
        <ExperienceSection />
        <WorksSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
}
