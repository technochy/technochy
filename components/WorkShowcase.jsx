'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorkShowcase() {
  const projects = [
    {
      title: 'Nova Mobile App',
      subtitle: 'We streamlined user flows, refreshed the visual language, and introduced accessibility-focused design components to improve usability.',
      appName: 'NOVA PAY',
      tagline: 'Finance Solution for Youngs',
      color: '#0088ff',
      textColor: '#ffffff',
      stats: [
        { value: '40%', label: 'Faster completion' },
        { value: '+25%', label: 'Higher conversion' },
        { value: '4.8', label: 'Star rating' },
      ],
    },
    {
      title: 'Aura AI Platform',
      subtitle: 'Built an ultra-fast generative AI workspace dashboard for modern creative studios with custom component design system.',
      appName: 'AURA STUDIO',
      tagline: 'Generative AI Suite',
      color: '#181818',
      textColor: '#0088ff',
      stats: [
        { value: '3x', label: 'Workflow speedup' },
        { value: '99.9%', label: 'Uptime reliability' },
        { value: '5.0', label: 'Client review' },
      ],
    },
    {
      title: 'Omni Affiliate Engine',
      subtitle: 'Engineered a real-time affiliate tracking matrix with automated payout triggers and fraud detection guardrails.',
      appName: 'OMNI TECH',
      tagline: 'Automated Affiliate System',
      color: '#111111',
      textColor: '#ffffff',
      stats: [
        { value: '500K+', label: 'Active clicks/day' },
        { value: '$12M+', label: 'Volume processed' },
        { value: '99.99%', label: 'Accuracy rate' },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.33) {
      if (currentIndex !== 0) setCurrentIndex(0);
    } else if (latest < 0.66) {
      if (currentIndex !== 1) setCurrentIndex(1);
    } else {
      if (currentIndex !== 2) setCurrentIndex(2);
    }
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="works" ref={targetRef} className="relative h-[300vh] bg-[#f3f3f3] border-b border-gray-300">
      
      {/* Sticky Full-Viewport Container pinned during scroll */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-6">
        <div className="max-w-7xl w-full mx-auto px-6">
          
          {/* Main Showcase Grid Box */}
          <div className="relative border border-gray-300 bg-[#c8c8c9] min-h-[580px] sm:min-h-[620px] rounded-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 shadow-xl">
            
            {/* Corner Pixel Mosaic Decorative Blocks (White ↔ Blue Hover Toggle) */}
            <div className="absolute top-0 left-0 z-20">
              <div className="flex">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
            </div>

            <div className="absolute top-0 right-0 z-20">
              <div className="flex justify-end">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
              <div className="flex justify-end">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
            </div>

            {/* Scroll Indicator Badge (Top Center) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-md text-[#0088ff] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0088ff] animate-ping"></span>
              <span>SCROLL TO EXPLORE ({currentIndex + 1} / 3)</span>
            </div>

            {/* Center Content: Phone Display Mockup with Metallic Brackets */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: currentIndex % 2 === 0 ? -16 : 16 }}
                animate={{ opacity: 1, scale: 1, rotate: currentIndex % 2 === 0 ? -8 : 8 }}
                exit={{ opacity: 0, scale: 1.08, rotate: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center items-center py-6 my-auto relative"
              >
                {/* Metallic 3D Bracket Left Accent */}
                <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-48 h-64 border-l-8 border-t-8 border-gray-400 rounded-tl-3xl opacity-60 pointer-events-none"></div>
                {/* Metallic 3D Bracket Right Accent */}
                <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-48 h-64 border-r-8 border-b-8 border-gray-400 rounded-br-3xl opacity-60 pointer-events-none"></div>

                {/* Phone Frame with Ease-Out Rotation Dynamics */}
                <div className="relative w-64 sm:w-80 h-[440px] sm:h-[480px] bg-black rounded-[48px] p-3.5 shadow-2xl border-4 border-gray-800 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out cursor-pointer z-10 group">
                  {/* Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20"></div>

                  {/* Phone Screen */}
                  <div 
                    className="w-full h-full rounded-[38px] p-6 flex flex-col justify-between relative overflow-hidden shadow-inner"
                    style={{ backgroundColor: currentProject.color, color: currentProject.textColor }}
                  >
                    <div className="pt-10">
                      <div className="text-3xl sm:text-4xl font-black font-mono tracking-tighter leading-none">
                        {currentProject.appName}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs font-mono font-bold opacity-90">
                        {currentProject.tagline}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-mono font-bold px-4 py-2 rounded-full shadow-lg group-hover:bg-[#0088ff] group-hover:text-white transition-colors duration-300">
                        <span>Get Started</span>
                        <span>›</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Control & Info Overlay Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4 relative z-20">
              
              {/* Dark Floating Metric Card */}
              <div className="lg:col-span-8 bg-[#4a4a4b] text-white p-5 sm:p-7 rounded-none shadow-2xl border border-gray-600/50">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-xs text-gray-200 font-sans leading-relaxed mb-4 max-w-xl">
                  {currentProject.subtitle}
                </p>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-500/60">
                  {currentProject.stats.map((st, i) => (
                    <div key={i} className="border-r border-gray-500/60 last:border-r-0 pr-2">
                      <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">
                        {st.value}
                      </div>
                      <div className="text-[10px] text-gray-300 font-mono mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Navigation Buttons (Bottom Right) */}
              <div className="lg:col-span-4 flex items-center justify-end gap-1">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4a4a4b] text-white hover:bg-[#0088ff] hover:text-white flex items-center justify-center transition-colors border border-gray-600 shadow-lg"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4a4a4b] text-white hover:bg-[#0088ff] hover:text-white flex items-center justify-center transition-colors border border-gray-600 shadow-lg"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
