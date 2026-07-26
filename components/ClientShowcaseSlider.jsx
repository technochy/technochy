'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function ClientShowcaseSlider() {
  const slides = [
    {
      id: '01',
      title: 'Beyond expectations',
      quote: 'Working with Technochy completely transformed how we present our product. Their attention to detail, 3D aesthetics, and understanding of user experience helped us increase engagement by 370%.',
      author: 'Daniel Lewis',
      role: 'Founder, Lunaris Coffee Co.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
      badge: 'CASE STUDY // 01',
    },
    {
      id: '02',
      title: 'Game-changing architecture',
      quote: 'The custom software infrastructure Technochy built scaled our active platform from 10K to 500K daily active users without a single millisecond of downtime. Truly world-class engineering.',
      author: 'Sophia Chen',
      role: 'VP of Product, Omni Tech Network',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80',
      badge: 'SCALABILITY // 02',
    },
    {
      id: '03',
      title: 'Unmatched technical speed',
      quote: 'Hands down the most talented tech agency we have partnered with. Their automated affiliate tracking matrix and Next.js frontend speed exceeded our highest expectations.',
      author: 'Marcus Vance',
      role: 'CTO, Aura AI Suite',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      badge: 'AUTOMATION // 03',
    },
    {
      id: '04',
      title: 'Pixel-perfect precision',
      quote: 'From 8-bit pixel grid aesthetics to 60fps micro-animations, Technochy brought our vision to life with rare craftsmanship and strategic focus.',
      author: 'Elena Rostova',
      role: 'Head of Design, Nova Pay Global',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
      badge: 'EXPERIENCE // 04',
    },
  ];

  const [[page, direction], setPage] = useState([0, 1]);

  const currentIndex = ((page % slides.length) + slides.length) % slides.length;

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([p]) => [p + 1, 1]);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setPage([page + 1, 1]);
  };

  const handlePrev = () => {
    setPage([page - 1, -1]);
  };

  const currentSlide = slides[currentIndex];

  // Horizontal Slide Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const cardVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="w-full py-24 bg-[#f3f3f3] border-b border-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">

        {/* Top Header Tag */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#181818] text-white px-3.5 py-1 rounded-none border border-black mb-3">
            <span className="w-2 h-2 bg-[#0088ff] animate-ping"></span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              CLIENT SPOTLIGHT
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
            Stories of Impact & Excellence
          </h2>
        </div>

        {/* Main Full-Width Slider Container (Flex Column on Mobile, Position Relative Overlay on Desktop) */}
        <div className="relative border border-gray-300 bg-black overflow-hidden shadow-2xl group/slider flex flex-col sm:block min-h-[540px] sm:min-h-[620px]">

          {/* Four Black Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-40"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-40"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-40"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-40"></div>

          {/* Top-Left 8-Bit Pixel Mosaic Art Overlay (Blue & White Mix + Hover Toggle) */}
          <div className="absolute top-0 left-0 z-40 flex flex-col items-start">
            <div className="flex">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_20px_#0088ff] cursor-pointer"></div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_20px_#0088ff] cursor-pointer"></div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            </div>
          </div>

          {/* Top Badge Tag Pill */}
          <div className="absolute top-4 right-4 sm:top-10 sm:right-10 z-40 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <Sparkles size={14} className="text-[#0088ff]" />
            <span>{currentSlide.badge}</span>
          </div>

          {/* Image Layer Container (Height 64 on Mobile, Full height absolute on Desktop) */}
          <div className="relative w-full h-72 sm:h-full sm:absolute sm:inset-0 overflow-hidden bg-black z-10 flex-shrink-0">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 z-10 w-full h-full"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.author}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Card (Solid Dark Card stacked below image on Mobile, Glassmorphism overlay on Desktop) */}
          <div className="relative sm:absolute sm:bottom-0 sm:right-0 z-30 w-full sm:w-[540px] lg:w-[620px] bg-[#0c0c0e] sm:bg-black/70 sm:backdrop-blur-xl border-t sm:border-l border-white/15 p-6 sm:p-10 shadow-2xl text-white flex-1 flex flex-col justify-between">

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                {/* Slide Title */}
                <h3 className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight leading-tight">
                  {currentSlide.title}
                </h3>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed pt-1">
                  "{currentSlide.quote}"
                </p>

                {/* Author Info + Arrow Controls Row (Matching Mobile Screenshot Layout) */}
                <div className="flex items-stretch justify-between pt-5 border-t border-white/15 mt-6">

                  <div className="flex flex-col justify-center pr-2">
                    <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wide">
                      {currentSlide.author}
                    </div>
                    <div className="font-mono text-xs text-[#0088ff] font-medium mt-0.5">
                      {currentSlide.role}
                    </div>
                  </div>

                  {/* Previous / Next Arrow Controls */}
                  <div className="flex items-stretch border-l border-white/15 pl-4 sm:pl-0 sm:border-l-0">
                    <button
                      onClick={handlePrev}
                      className="w-12 h-12 bg-white/5 sm:bg-white/10 hover:bg-[#0088ff] hover:text-white text-white flex items-center justify-center transition-all duration-300 border-r border-white/15 sm:border sm:border-white/20 sm:rounded-none backdrop-blur-md active:scale-95"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 bg-white/5 sm:bg-white/10 hover:bg-[#0088ff] hover:text-white text-white flex items-center justify-center transition-all duration-300 sm:border sm:border-white/20 sm:rounded-none backdrop-blur-md active:scale-95"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators Pagination Dots */}
            <div className="flex items-center gap-2 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const dir = idx > currentIndex ? 1 : -1;
                    setPage([idx, dir]);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#0088ff] shadow-[0_0_10px_#0088ff]'
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
