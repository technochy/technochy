'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TopAnnouncement from '@/components/TopAnnouncement';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, Database, Eye, Cookie, Bell } from 'lucide-react';

export default function PrivacyPolicy() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="min-h-screen bg-[#f3f3f3] text-[#111111] font-sans antialiased selection:bg-[#0088ff] selection:text-white">
      <div className="sticky top-0 z-40">
        <TopAnnouncement />
        <Navbar />
      </div>

      {/* Hero Header */}
      <section className="w-full bg-[#0c0c0e] text-white py-16 sm:py-20 border-b border-gray-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          {/* Back to Home Button Row */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#0088ff] hover:text-white bg-white/5 hover:bg-[#0088ff] px-3.5 py-1.5 border border-gray-800 transition-all duration-300 font-bold uppercase rounded-md"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#181818] text-white px-3.5 py-1 rounded-none border border-gray-800 mb-4">
            <span className="w-2 h-2 bg-[#0088ff] animate-pulse"></span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase">LEGAL DOCUMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-mono font-black uppercase tracking-tight text-white mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-sm sm:text-base font-mono">
            Last Updated: January {currentYear} // Technochy Creative Digital Agency
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-gray-300 p-8 sm:p-12 shadow-xl space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <ShieldCheck className="text-[#0088ff]" size={24} />
              1. Introduction & Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              At Technochy ("we," "our," or "us"), we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard client data across our website, web applications, mobile software, and technology consulting services.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Database className="text-[#0088ff]" size={24} />
              2. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We collect information that you voluntarily provide to us when inquiring about or using our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><strong>Contact Information:</strong> Full Name, Business Email Address, Phone Number, and Company Name.</li>
              <li><strong>Project Requirements:</strong> Project scope, technical specifications, attached documentation, and project budgets.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage analytics when visiting our website.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Eye className="text-[#0088ff]" size={24} />
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Your information is strictly used for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Executing custom software, web, mobile, AI, and marketing service deliverables.</li>
              <li>Responding to project inquiries and providing consultation proposals within 2 hours.</li>
              <li>Sending essential project updates, invoices, and technical documentation.</li>
              <li>Maintaining system security, audit logging, and preventing fraudulent activities.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Lock className="text-[#0088ff]" size={24} />
              4. Data Security & Encryption
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We employ enterprise-grade security protocols, end-to-end SSL/TLS encryption, and access controls to ensure your project files and intellectual property remain confidential. We do not sell, rent, or trade client data to third parties under any circumstances.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Cookie className="text-[#0088ff]" size={24} />
              5. Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our website uses essential performance cookies to enhance navigation speed, analyze site traffic, and optimize user experience. You can manage cookie preferences directly through your web browser settings.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Bell className="text-[#0088ff]" size={24} />
              6. Your Privacy Rights & Contact
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              You have the right to request access to, correction of, or deletion of your personal data stored with Technochy. For any privacy requests or questions, please contact our privacy compliance team at:
            </p>
            <div className="bg-[#f8f8f9] p-4 border border-gray-300 font-mono text-sm space-y-1">
              <p><strong>Email:</strong> contact@technochy.com</p>
              <p><strong>Phone:</strong> +44 7460 708828</p>
              <p><strong>Office:</strong> 2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE, UK</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
