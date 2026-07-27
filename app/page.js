import React from 'react';
import Preloader from '@/components/Preloader';
import TopAnnouncement from '@/components/TopAnnouncement';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import VisionSection from '@/components/VisionSection';
import WorkShowcase from '@/components/WorkShowcase';
import ClientShowcaseSlider from '@/components/ClientShowcaseSlider';
import TeamSection from '@/components/TeamSection';
import TestimonialsProcess from '@/components/TestimonialsProcess';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Technochy — AI Agency & Software Studio',
  description: 'High-performance creative software & tech agency landing page with rich animations, pixel mosaic grid design, interactive services, and work showcase.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] text-[#111111] antialiased selection:bg-[#0088ff] selection:text-white">
      <Preloader />
      <div className="sticky top-0 z-40">
        <TopAnnouncement />
        <Navbar />
      </div>
      <Hero />
      <BrandMarquee />
      <AboutSection />
      <ServicesGrid />
      <VisionSection />
      <WorkShowcase />
      <ClientShowcaseSlider />
      <TestimonialsProcess />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
