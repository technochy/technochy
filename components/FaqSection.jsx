'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'DEVELOPMENT', 'AI & TECH', 'MARKETING & SEO', 'PROCESS & PRICING'];

  const faqs = [
    {
      id: '01',
      category: 'DEVELOPMENT',
      question: 'What full-stack software, mobile app, and web development technologies do you specialize in?',
      answer: 'We specialize in end-to-end modern tech stacks including Next.js, React, React Native, Node.js, Python (FastAPI/Django), Flutter, and cloud-native serverless architectures. Whether you need an enterprise web app, iOS/Android mobile applications, or custom SaaS solutions, we engineer scalable, high-throughput codebases.',
    },
    {
      id: '02',
      category: 'AI & TECH',
      question: 'How do you integrate AI & Machine Learning into custom business workflows?',
      answer: 'We build custom AI agents, LLM integrations, automated data pipelines, predictive analytics models, and intelligent customer workflows. From natural language processing to automated decision-making engines, we tailor AI solutions that directly boost operational efficiency and user engagement.',
    },
    {
      id: '03',
      category: 'MARKETING & SEO',
      question: 'What performance marketing, SEO, PPC, and growth services do you offer?',
      answer: 'Our growth suite spans Technical & On-Page SEO, high-conversion Google/Meta PPC campaigns, Affiliate Marketing infrastructure, Social Media Marketing, and Performance Optimization. We focus on data-backed, ROI-driven strategies that systematically drive high-intent traffic and maximize client revenue.',
    },
    {
      id: '04',
      category: 'DEVELOPMENT',
      question: 'Can you handle UI/UX Design, product prototyping, and graphic design from scratch?',
      answer: 'Yes. Our in-house design studio creates high-end UI/UX designs, interactive design systems, 3D brand visuals, and custom graphic assets in Figma before writing a single line of code. We ensure every product is visually breathtaking, user-centric, and conversion-optimized.',
    },
    {
      id: '05',
      category: 'AI & TECH',
      question: 'What cybersecurity and technology consulting protocols do you follow?',
      answer: 'We conduct comprehensive code audits, vulnerability assessments, penetration testing, data encryption standards, and compliance reviews. Our technology & product consulting helps startups and enterprises make optimal architectural decisions, scale safely, and protect critical user data.',
    },
    {
      id: '06',
      category: 'MARKETING & SEO',
      question: 'Do you offer Ebook Publishing Services and digital content distribution?',
      answer: 'Yes! Our Ebook Publishing division provides complete end-to-end publishing solutions — including professional interior formatting, cover graphic design, Amazon KDP setup, copywriting, copyright setup, and multi-channel global digital marketing.',
    },
    {
      id: '07',
      category: 'PROCESS & PRICING',
      question: 'What is your typical project timeline and agile development process?',
      answer: 'Project timelines range from 2 to 4 weeks for custom web applications and marketing funnels, and 4 to 8 weeks for complex mobile apps or enterprise software. We work in agile 2-week sprints with transparent milestone updates, real-time client communication, and staging previews.',
    },
    {
      id: '08',
      category: 'PROCESS & PRICING',
      question: 'What are your pricing models and post-launch support SLA?',
      answer: 'We offer flexible fixed-scope project quotes as well as dedicated monthly retainers. Every project includes 30 days of complimentary post-launch support, 24/7 server health auditing, security patches, and guaranteed response times under 2 hours.',
    },
  ];

  const filteredFaqs = activeCategory === 'ALL'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 sm:py-24 bg-[#f3f3f3] bg-grid-pattern border-b border-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">

        {/* Top-Left 8-Bit Pixel Mosaic Corner Block */}
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

        {/* Bottom-Right 8-Bit Pixel Mosaic Corner Block */}
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
        <div className="relative border border-gray-300 bg-white/80 backdrop-blur-md p-6 sm:p-12 lg:p-14 shadow-xl">
          
          {/* Four Black Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            
            {/* Top FAQS Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#181818] text-white px-3.5 py-1 rounded-none border border-black mb-4 shadow-sm">
              <span className="w-2 h-2 bg-[#0088ff] animate-pulse"></span>
              <span className="font-mono text-xs font-bold tracking-widest uppercase">
                FAQS & KNOWLEDGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] font-sans tracking-tight uppercase leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
              Everything you need to know about partnering with Technochy across software engineering, AI, mobile apps, UI/UX, and digital growth.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs font-bold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
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
          <div className="max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.35 }}
                  className={`border rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0088ff] shadow-[0_10px_30px_rgba(0,136,255,0.12)]'
                      : 'bg-[#f8f8f9] border-gray-200/90 hover:border-gray-400 hover:bg-white shadow-sm'
                  }`}
                >
                  {/* Accordion Header / Trigger Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left gap-3.5 focus:outline-none group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1">
                      <span className={`font-mono text-xs sm:text-sm font-extrabold px-2.5 py-0.5 rounded-md transition-colors flex-shrink-0 ${
                        isOpen ? 'bg-[#0088ff] text-white' : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300'
                      }`}>
                        {faq.id}
                      </span>
                      <h3 className={`text-sm sm:text-lg lg:text-xl font-bold font-sans tracking-tight transition-colors ${
                        isOpen ? 'text-[#0088ff]' : 'text-[#111111] group-hover:text-[#0088ff]'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Plus / Minus Animated Icon Badge */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-[#0088ff] text-white shadow-[0_0_15px_rgba(0,136,255,0.5)] rotate-180'
                        : 'bg-[#181818] text-white group-hover:bg-[#0088ff]'
                    }`}>
                      {isOpen ? <Minus size={16} className="sm:w-5 sm:h-5" /> : <Plus size={16} className="sm:w-5 sm:h-5" />}
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
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 sm:px-8 pb-5 sm:pb-6 pt-1 border-t border-dashed border-gray-200">
                          <p className="text-gray-600 font-sans text-xs sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-3.5 flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold text-[#0088ff] uppercase tracking-wider">
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
          <div className="mt-12 sm:mt-14 max-w-4xl mx-auto bg-[#181818] text-white p-5 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-[#0088ff] rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_#0088ff] flex-shrink-0">
                <MessageSquare size={22} />
              </div>
              <div>
                <h4 className="font-mono text-base font-bold tracking-tight text-white">Have a specific project question?</h4>
                <p className="text-xs text-gray-400 font-sans mt-0.5">Reach out directly to our engineering & product team for a 30-min discovery call.</p>
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
