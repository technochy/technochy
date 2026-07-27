'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 1200; // ms
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 16);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const titleChars = "TECHNOCHY".split("");

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.9 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden bg-[#0a0a0c]"
        >
          {/* 6 Vertical Shutter Columns */}
          <div className="absolute inset-0 flex w-full h-full">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.85, 0, 0.15, 1],
                  delay: i * 0.06 + 0.9,
                }}
                style={{ transformOrigin: i % 2 === 0 ? 'top' : 'bottom' }}
                className={`flex-1 h-full ${
                  i % 2 === 0 ? 'bg-[#0c0c0e]' : 'bg-[#121216]'
                } border-r border-white/5 relative`}
              />
            ))}
          </div>

          {/* Background Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10"></div>

          {/* Corner Clean Brand Indicators */}
          <div className="absolute top-8 left-8 z-20 hidden sm:flex items-center gap-2.5 font-mono text-[11px] text-gray-400 tracking-widest uppercase">
            <span className="w-2 h-2 bg-[#0088ff] rounded-full animate-ping"></span>
            <span className="font-bold text-white">TECHNOCHY STUDIO</span>
          </div>

          <div className="absolute top-8 right-8 z-20 hidden sm:flex items-center gap-2 font-mono text-[11px] text-gray-400 tracking-widest uppercase">
            <span>CREATIVE DIGITAL AGENCY</span>
          </div>

          <div className="absolute bottom-8 left-8 z-20 hidden sm:flex items-center gap-2 font-mono text-[11px] text-gray-500 tracking-widest uppercase">
            <span>HIGH-PERFORMANCE SOLUTIONS</span>
          </div>

          <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2 font-mono text-[11px] font-bold text-[#0088ff] tracking-widest uppercase">
            <span>LOADING EXPERIENCE</span>
          </div>

          {/* Center Content */}
          <motion.div
            exit={{ opacity: 0, y: -30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className="relative z-20 flex flex-col items-center justify-center text-center px-4"
          >
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md mb-8 shadow-2xl"
            >
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#0088ff] rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-[#0088ff] rounded-full animate-pulse delay-100"></span>
                <span className="w-1.5 h-1.5 bg-[#0088ff] rounded-full animate-pulse delay-200"></span>
              </div>
              <span className="font-mono text-xs font-bold text-gray-200 tracking-widest uppercase">
                ENGINEERING THE FUTURE
              </span>
            </motion.div>

            {/* Brand Title */}
            <div className="flex items-center justify-center overflow-hidden py-2">
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04 + 0.1,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-mono text-white uppercase inline-block tracking-tighter drop-shadow-2xl"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Live Ticker Counter + Smooth Glowing Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              {/* Percentage */}
              <div className="font-mono text-3xl sm:text-5xl font-extrabold text-[#0088ff] tracking-wider drop-shadow-[0_0_20px_rgba(0,136,255,0.6)]">
                {String(count).padStart(2, '0')}%
              </div>

              {/* Glowing Progress Bar */}
              <div className="w-64 sm:w-96 h-2 bg-gray-900 rounded-full overflow-hidden p-0.5 border border-gray-800 relative shadow-inner">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${count}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                  className="h-full bg-gradient-to-r from-[#0088ff] via-[#00a3ff] to-[#0077ff] rounded-full shadow-[0_0_20px_#0088ff]"
                />
              </div>

              <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                LOADING DIGITAL ASSETS
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
