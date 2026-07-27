import React from 'react';
import TopAnnouncement from '@/components/TopAnnouncement';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us — Technochy',
  description: 'Get in touch with Technochy for your software development, AI, design, and digital product needs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] text-[#111111] antialiased selection:bg-[#0088ff] selection:text-white">
      <div className="sticky top-0 z-40">
        <TopAnnouncement />
        <Navbar />
      </div>
      <div className="py-6">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
