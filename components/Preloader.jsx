'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Ticker counter from 0% to 100%
    const duration = 1300; // ms
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 20);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2400);

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
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 1.0 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden"
        >
          {/* 6 Vertical Shutter Columns with Neon Green Leading Accent Lines */}
          <div className="absolute inset-0 flex w-full h-full">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.85,
                  ease: [0.85, 0, 0.15, 1],
                  delay: i * 0.08 + 1.25,
                }}
                style={{ transformOrigin: i % 2 === 0 ? 'top' : 'bottom' }}
                className={`flex-1 h-full ${i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#121212]'
                  } border-r border-white/5 relative group`}
              >
                {/* Brand Blue Edge Line Wiping Away */}
                <motion.div
                  exit={{ opacity: [1, 0] }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 right-0 h-1 bg-[#0088ff] shadow-[0_0_15px_#0088ff] ${i % 2 === 0 ? 'bottom-0' : 'top-0'
                    }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Background Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10"></div>

          {/* Corner Crosshair Dot Markers */}
          <div className="absolute top-8 left-8 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] text-gray-500 tracking-widest">
            <span className="w-2 h-2 bg-[#0088ff] rounded-full animate-ping"></span>
            <span>// SYS.INIT_v2.4</span>
          </div>
          <div className="absolute top-8 right-8 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] text-gray-500 tracking-widest">
            <span>[MODE: HIGH_PERF]</span>
            <div className="w-2 h-2 bg-white"></div>
          </div>
          <div className="absolute bottom-8 left-8 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] text-gray-500 tracking-widest">
            <span>LOC: 0x7F9A</span>
          </div>
          <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] font-bold text-[#0088ff] tracking-widest">
            <span>TECHNOCHY STUDIO</span>
          </div>

          {/* Center Main Intro Content */}
          <motion.div
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
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
              <span className="font-mono text-xs font-bold text-gray-300 tracking-widest uppercase">
                ENGINEERING THE FUTURE
              </span>
            </motion.div>

            {/* Staggered Letter Reveal Brand Title */}
            <div className="flex items-center justify-center overflow-hidden py-2">
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%', opacity: 0, rotateX: -90 }}
                  animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05 + 0.1,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-mono text-white uppercase inline-block tracking-tighter drop-shadow-2xl"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Animated Live Ticker Counter + Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              {/* Huge Monospace Percentage Digits */}
              <div className="font-mono text-3xl sm:text-5xl font-extrabold text-[#0088ff] tracking-wider drop-shadow-[0_0_15px_rgba(0,136,255,0.4)]">
                {String(count).padStart(2, '0')}%
              </div>

              {/* High Tech Glowing Progress Bar Container */}
              <div className="w-56 sm:w-80 h-1.5 bg-gray-900 rounded-full overflow-hidden p-0.5 border border-white/10 relative shadow-inner">
                <motion.div
                  style={{ width: `${count}%` }}
                  className="h-full bg-gradient-to-r from-[#0088ff] via-[#00a3ff] to-[#0077ff] rounded-full shadow-[0_0_16px_#0088ff]"
                />
              </div>

              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                OPTIMIZING PLATFORM ASSETS
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
