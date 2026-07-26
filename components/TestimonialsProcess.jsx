'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsProcess() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVERY & TECH STRATEGY',
      desc: 'We analyze your core business goals, target demographic, and tech stack to construct a bulletproof software & affiliate architecture.',
    },
    {
      num: '02',
      title: 'ARCHITECTURE & SCHEMA',
      desc: 'Developing intuitive system architecture, high-performance database schemas, and custom API workflows before line-of-code execution.',
    },
    {
      num: '03',
      title: 'ENGINEERING & AUTOMATION',
      desc: 'Crafting bespoke software codebase, automated affiliate tracking engines, 60fps micro-animations, and cloud scalability.',
    },
    {
      num: '04',
      title: 'LAUNCH & CONTINUOUS SCALING',
      desc: 'Clean execution with Next.js & Node, cross-device QA testing, real-time performance auditing, and 24/7 infrastructure scaling.',
    },
  ];

  const testimonials = [
    {
      quote: "Working with Technochy transformed our brand and tech stack completely. The automated affiliate tracking, pixel-perfect layout, and speed exceeded our highest expectations.",
      author: "ALEX RIVERA",
      role: "Founder & CEO @ Nova Pay Global",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
    {
      quote: "The custom software architecture Technochy built scaled our active platform from 10K to 500K daily active users without a single millisecond of downtime. Truly world-class engineering.",
      author: "MARCUS VANCE",
      role: "CTO @ Aura AI Suite",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
    {
      quote: "Hands down the most talented software & tech agency we've partnered with. Their technical execution, speed, and continuous support are unmatched in the industry.",
      author: "SOPHIA CHEN",
      role: "VP of Product @ Omni Tech Network",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play testimonial carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-24 bg-[#f3f3f3] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Grid Box */}
        <div className="relative border-y border-dashed border-gray-400/80 py-10 sm:py-12 px-6 sm:px-10 mb-16 bg-white/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Four Black Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-[#0088ff]"></div>
              <span className="font-mono text-xs font-bold tracking-widest text-gray-700 uppercase">
                OUR METHODOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
              How We Turn Ideas Into Impact
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed">
            // A STRUCTURED 4-STEP PROCESS FOR PREDICTABLE DIGITAL EXCELLENCE.
          </span>
        </div>

        {/* 4-Step Process Timeline Cards with Staggered Scroll & Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group p-8 border border-gray-300 rounded-none cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px] ${
                  isActive
                    ? 'bg-[#141414] text-white shadow-2xl z-20 scale-[1.02]'
                    : 'bg-white text-[#111111] hover:border-gray-500 z-10'
                }`}
              >
                {/* Top Brand Blue Accent Sweep Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-[#0088ff] shadow-[0_0_12px_#0088ff] transition-transform duration-500 origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`} />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`font-mono text-3xl font-extrabold transition-colors duration-300 ${
                      isActive ? 'text-[#0088ff] drop-shadow-[0_0_10px_rgba(0,136,255,0.5)]' : 'text-gray-400'
                    }`}>
                      {st.num}
                    </span>
                    <div className={`w-2.5 h-2.5 rounded-sm transition-all duration-300 ${
                      isActive ? 'bg-[#0088ff] shadow-[0_0_8px_#0088ff] animate-pulse' : 'bg-gray-300'
                    }`}></div>
                  </div>

                  <h3 className={`text-sm font-mono font-bold tracking-wider mb-3 uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#111111]'
                  }`}>
                    {st.title}
                  </h3>
                </div>

                <p className={`text-xs font-sans leading-relaxed transition-colors duration-300 ${
                  isActive ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {st.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* High-End Client Testimonial Carousel Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#141414] text-white p-8 sm:p-14 border border-gray-800 rounded-none relative shadow-2xl overflow-hidden"
        >
          {/* Four Brand Blue Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#0088ff] z-30 shadow-[0_0_10px_#0088ff]"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#0088ff] z-30 shadow-[0_0_10px_#0088ff]"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0088ff] z-30 shadow-[0_0_10px_#0088ff]"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0088ff] z-30 shadow-[0_0_10px_#0088ff]"></div>

          {/* Background Decorative Quote Mark */}
          <Quote size={180} className="absolute -bottom-10 -right-10 text-white/5 pointer-events-none" />

          {/* Animated Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10"
            >
              <div className="space-y-6 max-w-3xl">
                {/* 5 Brand Blue Stars */}
                <div className="flex items-center gap-1.5 text-[#0088ff]">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#0088ff" className="drop-shadow-[0_0_8px_#0088ff]" />
                  ))}
                </div>

                <p className="text-xl sm:text-2xl font-medium italic text-gray-100 font-sans leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <div>
                  <div className="font-mono text-sm font-extrabold text-white uppercase tracking-wider">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="font-mono text-xs text-[#0088ff] font-bold mt-0.5">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Client Avatar with Glowing Ring */}
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#0088ff] p-1.5 shadow-[0_0_25px_rgba(0,136,255,0.4)] flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevTestimonial}
                    className="w-10 h-10 bg-[#222222] hover:bg-[#0088ff] hover:text-white text-white rounded-full flex items-center justify-center border border-gray-700 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex items-center gap-1.5 px-3">
                    {testimonials.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentTestimonial(dotIdx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentTestimonial === dotIdx ? 'w-6 bg-[#0088ff] shadow-[0_0_8px_#0088ff]' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextTestimonial}
                    className="w-10 h-10 bg-[#222222] hover:bg-[#0088ff] hover:text-white text-white rounded-full flex items-center justify-center border border-gray-700 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
