'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section className="w-full py-24 bg-[#f3f3f3] border-b border-gray-300">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-3 h-3 bg-[#7cff00]"></div>
          <span className="font-mono text-xs font-bold tracking-widest text-gray-700 uppercase">
            OUR VISION
          </span>
        </div>

        {/* Headline with Embedded Interactive Ease-Out 3D Mockup Badge */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.15] mb-10"
        >
          Every project we take on starts with a{' '}
          <span className="inline-block align-middle mx-2 relative group cursor-pointer">
            <motion.span 
              whileHover={{ scale: 1.25, width: '180px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-between w-28 sm:w-36 h-14 sm:h-18 bg-[#181818] border-2 border-gray-800 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 relative"
            >
              {/* Green Glow Screen Accent */}
              <div className="w-full h-full bg-[#7cff00] p-2 flex flex-col justify-between relative group-hover:bg-[#90ff1a] transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-extrabold text-black uppercase tracking-wider">NOVA PAY</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></div>
                </div>
                <div className="text-center font-mono font-black text-black text-xs sm:text-sm tracking-tighter">
                  3D ENGINE
                </div>
                <div className="text-[8px] font-mono font-bold text-black/70 flex justify-between">
                  <span>SCALE</span>
                  <span>99.9%</span>
                </div>
              </div>
            </motion.span>
          </span>{' '}
          deep understanding of goals
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-gray-600 font-sans text-sm sm:text-base leading-relaxed"
        >
          We build high-performance software, custom affiliate architectures, and digital platforms that blend engineering, strategy, and continuous scalability. The results don't just look great, they drive revenue.
        </motion.p>

      </div>
    </section>
  );
}
