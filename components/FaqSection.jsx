'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(2); // Default 3rd open like screenshot
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'SERVICES', 'PROCESS', 'PRICING'];

  const faqs = [
    {
      id: '01',
      category: 'SERVICES',
      question: 'What if I only need one specific service?',
      answer: 'We offer highly modular engagements. Whether you need a standalone high-performance web app, custom API engineering, or an automated affiliate tracking system — we tailor our scope precisely to your goals without locking you into bundled overhead.',
    },
    {
      id: '02',
      category: 'PROCESS',
      question: 'How long does a typical project take?',
      answer: 'Project timelines depend on technical complexity. A custom web application or interactive studio site typically takes 2 to 4 weeks, while enterprise software platforms and affiliate tracking systems span 4 to 8 weeks with continuous milestone releases.',
    },
    {
      id: '03',
      category: 'PROCESS',
      question: 'Do you work with clients internationally?',
      answer: 'Yes. We collaborate with clients globally across North America, Europe, and Asia through asynchronous workflows, video strategy sessions, and real-time messaging tools — ensuring frictionless delivery regardless of time zone.',
    },
    {
      id: '04',
      category: 'SERVICES',
      question: 'Can you handle both design and development?',
      answer: 'Absoluty. Technochy is a full-stack studio. We handle everything from 3D visual language, UX architecture, and responsive UI design to high-throughput Next.js frontend code, backend APIs, and cloud infrastructure.',
    },
    {
      id: '05',
      category: 'PROCESS',
      question: 'How do we start a project with your team?',
      answer: 'Simply fill out our contact form or send us an email. We conduct an initial 30-minute discovery consultation to audit your tech needs, provide a detailed proposal within 24 hours, and kick off sprint planning immediately upon approval.',
    },
    {
      id: '06',
      category: 'PRICING',
      question: 'What is your pricing structure and support SLA?',
      answer: 'We provide both fixed-price project quotes and dedicated monthly sprint retainers. All deployments include 30 days of post-launch maintenance, 24/7 cloud health auditing, and guaranteed < 2 hour response SLAs.',
    },
  ];

  const filteredFaqs = activeCategory === 'ALL'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-24 bg-[#f3f3f3] bg-grid-pattern border-b border-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">

        {/* Top-Left 8-Bit Pixel Mosaic Corner Block (Blue ↔ White Hover Toggle) */}
        <div className="absolute top-0 left-2 sm:left-8 z-20 block">
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-black/5 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
        </div>

        {/* Bottom-Right 8-Bit Pixel Mosaic Corner Block (Blue ↔ White Hover Toggle) */}
        <div className="absolute bottom-0 right-2 sm:right-8 z-20 hidden sm:block">
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-black/5 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
        </div>

        {/* Main FAQ Outer Box Container */}
        <div className="relative border border-gray-300 bg-white/70 backdrop-blur-md p-6 sm:p-14 shadow-xl">
          
          {/* Four Black Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            
            {/* Top FAQS Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#181818] text-white px-3.5 py-1 rounded-none border border-black mb-4 shadow-sm">
              <span className="w-2 h-2 bg-[#0088ff] animate-pulse"></span>
              <span className="font-mono text-xs font-bold tracking-widest uppercase">
                FAQS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] font-sans tracking-tight uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
              Everything you need to know about partnering with Technochy for custom software engineering & digital transformation.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#0088ff] text-white border-[#0088ff] shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Accordion List Container */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0088ff] shadow-[0_10px_30px_rgba(0,136,255,0.12)]'
                      : 'bg-[#f8f8f9] border-gray-200/90 hover:border-gray-400 hover:bg-white shadow-sm'
                  }`}
                >
                  {/* Accordion Header / Trigger Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className={`font-mono text-sm font-extrabold px-2.5 py-0.5 rounded-md transition-colors ${
                        isOpen ? 'bg-[#0088ff] text-white' : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300'
                      }`}>
                        {faq.id}
                      </span>
                      <h3 className={`text-base sm:text-xl font-bold font-sans tracking-tight transition-colors ${
                        isOpen ? 'text-[#0088ff]' : 'text-[#111111] group-hover:text-[#0088ff]'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Plus / Minus Animated Icon Badge */}
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-[#0088ff] text-white shadow-[0_0_15px_rgba(0,136,255,0.5)] rotate-180'
                        : 'bg-[#181818] text-white group-hover:bg-[#0088ff]'
                    }`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-8 pb-6 pt-1 border-t border-dashed border-gray-200">
                          <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] font-bold text-[#0088ff] uppercase tracking-wider">
                            <Sparkles size={13} />
                            <span>Category: {faq.category}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Help CTA Bar */}
          <div className="mt-14 max-w-4xl mx-auto bg-[#181818] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-[#0088ff] rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_#0088ff] flex-shrink-0">
                <MessageSquare size={22} />
              </div>
              <div>
                <h4 className="font-mono text-base font-bold tracking-tight text-white">Still have questions?</h4>
                <p className="text-xs text-gray-400 font-sans mt-0.5">Can't find the answer you're looking for? Reach out directly to our engineering team.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0088ff] hover:bg-[#0077ff] text-white font-mono text-xs font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Ask Our Team
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
