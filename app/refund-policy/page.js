'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TopAnnouncement from '@/components/TopAnnouncement';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { RefreshCw, ArrowLeft, CheckCircle2, AlertTriangle, Clock, ShieldAlert } from 'lucide-react';

export default function RefundPolicy() {
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

          <div className="inline-flex items-center gap-2 bg-[#181818] text-[#0088ff] px-3.5 py-1 rounded-none border border-gray-800 mb-4">
            <span className="w-2 h-2 bg-[#0088ff] animate-pulse"></span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase">GUARANTEE & TERMS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-mono font-black uppercase tracking-tight text-white mb-4">
            Refund Policy
          </h1>

          <p className="text-gray-400 text-sm sm:text-base font-mono">
            Last Updated: January {currentYear} // Technochy Client Satisfaction Protocol
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-gray-300 p-8 sm:p-12 shadow-xl space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <RefreshCw className="text-[#0088ff]" size={24} />
              1. Our Satisfaction Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Technochy strives to deliver exceptional technical quality across all custom software, web, mobile, AI, and digital marketing engagements. We establish clear milestone deliverables and approval gates before project commencement to ensure complete transparency.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <CheckCircle2 className="text-[#0088ff]" size={24} />
              2. Refund Eligibility Criteria
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              A full or partial refund may be issued under the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><strong>Pre-Discovery Cancellation:</strong> 100% full refund if a project is canceled within 48 hours of initial payment and prior to discovery kickoff.</li>
              <li><strong>Milestone Approval Failure:</strong> If initial design prototypes or architectural specifications fail to meet agreed requirements during Phase 1 review, a 75% refund of phase deposit will be processed.</li>
              <li><strong>Inability to Deliver:</strong> 100% refund if Technochy is unable to execute a project due to technical constraints on our end.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <AlertTriangle className="text-[#0088ff]" size={24} />
              3. Non-Refundable Items
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Refunds will not be issued for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Milestones that have been formally reviewed, approved, and accepted by the client.</li>
              <li>Third-party costs incurred on your behalf (e.g. domain registration, paid API credits, cloud server hosting fees, or ad spend).</li>
              <li>Projects where work has been stalled for more than 30 consecutive days due to client unresponsiveness.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <Clock className="text-[#0088ff]" size={24} />
              4. Refund Processing Timeline
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Once a refund request is approved by our billing department, refunds will be credited back to the original payment method (Bank Transfer, Credit Card, or Stripe) within <strong>5 to 10 business days</strong>.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-gray-300">
            <h2 className="text-2xl font-bold font-mono uppercase text-[#111111] flex items-center gap-2">
              <ShieldAlert className="text-[#0088ff]" size={24} />
              5. How to Request a Refund
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To submit a refund claim, please email our billing support team with your project ID and reason for request:
            </p>
            <div className="bg-[#f8f8f9] p-4 border border-gray-300 font-mono text-sm space-y-1">
              <p><strong>Billing Email:</strong> contact@technochy.com</p>
              <p><strong>Support SLA:</strong> Guaranteed response within 2 hours</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
