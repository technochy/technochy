'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TopAnnouncement from '@/components/TopAnnouncement';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, ArrowLeft, Scale, Award, Shield, DollarSign, Globe } from 'lucide-react';

export default function TermsAndConditions() {
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
            <span className="font-mono text-xs font-bold tracking-widest uppercase">LEGAL AGREEMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-mono font-black uppercase tracking-tight text-white mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-400 text-sm sm:text-base font-mono">
            Last Updated: January {currentYear} // Technochy Client Service Agreement
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-gray-300 p-8 sm:p-12 shadow-xl space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Scale className="text-[#0088ff]" size={24} />
              1. Agreement & Acceptance
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              By accessing our website, contracting our services, or submitting a project inquiry to Technochy ("Company," "we," or "us"), you agree to be bound by these Terms and Conditions. These terms govern all service deliverables including Software Engineering, Web & Mobile App Development, UI/UX Design, AI Integrations, SEO, PPC, and Ebook Publishing.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Award className="text-[#0088ff]" size={24} />
              2. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Upon final payment completion, <strong>100% full ownership rights</strong> of the custom source code, design assets, database structures, and project collateral transfers completely to the client. Technochy retains no claim to your custom proprietary assets.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <DollarSign className="text-[#0088ff]" size={24} />
              3. Payment Terms & Invoicing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Project payments are structured according to milestone schedules agreed upon in the Statement of Work (SOW).</li>
              <li>Invoices are due within 7 days of issuance unless a monthly retainer SLA agreement is established.</li>
              <li>Work on subsequent sprint phases will commence upon receipt of milestone clearance.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Shield className="text-[#0088ff]" size={24} />
              4. Client Obligations & Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Clients agree to provide timely feedback, necessary credentials, and accurate project specifications. Technochy warrants that all code and design collateral generated is original and free of third-party infringement.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Globe className="text-[#0088ff]" size={24} />
              5. Governing Law & Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              These terms shall be governed by and construed in accordance with the laws of the United Kingdom and international digital trade standards. Any legal disputes shall be subject to arbitration in London, UK.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <FileText className="text-[#0088ff]" size={24} />
              6. Contact Legal Department
            </h2>
            <div className="bg-[#f8f8f9] p-4 border border-gray-300 font-mono text-sm space-y-1">
              <p><strong>Legal Inquiries:</strong> contact@technochy.com</p>
              <p><strong>Corporate Address:</strong> 2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE, UK</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
