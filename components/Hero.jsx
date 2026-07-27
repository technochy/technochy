'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#f4f4f4] bg-grid-pattern border-b border-gray-300 pt-2 pb-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        
        {/* Top-Left 8-Bit Pixel Mosaic Corner Block (Blue ↔ White Hover Toggle) */}
        <div className="absolute top-0 left-2 sm:left-8 z-20 block">
          <div className="flex">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white border border-black/5 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
        </div>

        {/* Bottom-Right 8-Bit Pixel Mosaic Corner Block (Blue ↔ White Hover Toggle) */}
        <div className="absolute bottom-0 right-2 sm:right-8 z-20 hidden sm:block">
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white border border-black/5 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-md cursor-pointer"></div>
          </div>
        </div>

        {/* Central Headline Grid Row Container */}
        <div className="relative border-y border-dashed border-gray-400/80 my-8 sm:my-10 py-6 sm:py-20 z-10">
          
          {/* Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Upper Right Arrow Stream (Directional Right-to-Left Wave) */}
          <div className="hidden lg:flex items-center justify-end gap-3.5 text-xl sm:text-2xl font-mono pr-12 -mt-6 mb-4 select-none">
            {Array(11).fill('«').map((arrow, i) => (
              <span
                key={i}
                style={{ animation: `arrowWave 1.8s infinite ease-in-out ${(10 - i) * 0.12}s` }}
                className="font-extrabold tracking-tight inline-block"
              >
                {arrow}
              </span>
            ))}
          </div>

          {/* Main Giant Text & 3D Disc Row */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-2 sm:px-4 gap-2 sm:gap-3 lg:gap-4 divide-y divide-dashed divide-gray-400/80 lg:divide-y-0"
          >
            {/* WE BUILD */}
            <div className="w-full lg:w-auto py-2 lg:py-0 flex justify-center items-center">
              <h1 className="text-4xl sm:text-6xl lg:text-[85px] font-extrabold tracking-tighter text-[#1b1b1b] uppercase font-sans leading-none whitespace-nowrap">
                WE BUILD
              </h1>
            </div>

            {/* 3D Graphic Circle Frame featuring Animated Interactive 3D Hemisphere Badge */}
            <div className="w-full lg:w-auto py-2 lg:py-0 flex justify-center items-center">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-[36px] bg-white border border-gray-300/80 shadow-2xl hover:shadow-[0_0_40px_rgba(0,136,255,0.5)] hover:border-[#0088ff] flex items-center justify-center p-4 backdrop-blur-md group hover:scale-110 transition-all duration-500 flex-shrink-0 cursor-pointer">
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-100 via-white to-gray-200 border border-gray-200 flex items-center justify-center shadow-inner overflow-hidden">
                  {/* 3D Semi-Spherical Crescent Discs */}
                  <div className="flex items-center gap-1.5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <div className="w-9 h-20 sm:w-11 sm:h-24 bg-gradient-to-br from-[#00a3ff] via-[#0088ff] to-[#0055cc] group-hover:from-[#00e5ff] group-hover:via-[#0088ff] group-hover:to-[#7000ff] rounded-l-full shadow-[0_0_25px_rgba(0,136,255,0.6)] group-hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] transition-all duration-500"></div>
                    <div className="w-12 h-24 sm:w-14 sm:h-28 bg-gradient-to-r from-[#181818] via-gray-900 to-black group-hover:from-[#0a1128] group-hover:via-[#001f54] group-hover:to-[#0088ff] rounded-r-full shadow-2xl transition-all duration-500"></div>
                  </div>
                </div>

                {/* Four Frame Dot Markers */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-black group-hover:bg-[#0088ff] transition-colors"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-black group-hover:bg-[#0088ff] transition-colors"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black group-hover:bg-[#0088ff] transition-colors"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black group-hover:bg-[#0088ff] transition-colors"></div>
              </div>
            </div>

            {/* SOFTWARE */}
            <div className="w-full lg:w-auto py-2 lg:py-0 flex justify-center items-center">
              <h1 className="text-4xl sm:text-6xl lg:text-[85px] font-extrabold tracking-tighter text-[#1b1b1b] uppercase font-sans leading-none whitespace-nowrap">
                SOFTWARE
              </h1>
            </div>
          </motion.div>

          {/* Lower Left Arrow Stream (Directional Left-to-Right Wave) */}
          <div className="hidden lg:flex items-center justify-start gap-3.5 text-xl sm:text-2xl font-mono pl-12 mt-4 -mb-6 select-none">
            {Array(11).fill('»').map((arrow, i) => (
              <span
                key={i}
                style={{ animation: `arrowWave 1.8s infinite ease-in-out ${i * 0.12}s` }}
                className="font-extrabold tracking-tight inline-block"
              >
                {arrow}
              </span>
            ))}
          </div>

        </div>

        {/* Subtitle Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-gray-800 text-sm sm:text-base font-medium leading-relaxed mt-8 mb-10 px-4"
        >
          From web & mobile app development to AI, UI/UX design, and digital marketing — we build high-impact tech & growth solutions that drive real revenue.
        </motion.p>

        {/* Action Buttons (z-30 to stay cleanly above background elements) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          {/* Contact Us / Start Project button */}
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#0088ff] hover:bg-[#0077ff] text-white font-mono text-sm font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center h-12"
          >
            Start A Project
          </a>

          {/* Explore Software button with Brand Blue Icon Block */}
          <a
            href="#services"
            className="w-full sm:w-auto group flex items-center justify-center bg-[#181818] text-white rounded-xl p-1.5 pr-8 hover:bg-black transition-all duration-300 shadow-xl border border-black h-12"
          >
            <div className="w-9 h-9 bg-[#0088ff] text-white rounded-lg flex items-center justify-center font-mono font-extrabold mr-3.5 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <span className="text-xs">:::▶</span>
            </div>
            <span className="font-mono text-sm font-bold tracking-wider whitespace-nowrap">Explore Services</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
