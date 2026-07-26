'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const [activeCol, setActiveCol] = useState(0);

  const services = [
    {
      id: '01',
      title: 'CUSTOM SOFTWARE',
      items: ['Web & Mobile Apps', 'High-Performance APIs', 'Cloud & Database Systems', 'Scalable Architecture'],
    },
    {
      id: '02',
      title: 'AFFILIATE PLATFORMS',
      items: ['Affiliate Tracking Engines', 'Commission Payout Systems', 'Real-Time Analytics', 'Multi-Tier Network Tools'],
    },
    {
      id: '03',
      title: 'TECH AUTOMATION',
      items: ['Workflow Automation', 'Custom API Integrations', 'Bot & Scripting Systems', 'Data Pipeline Scaling'],
    },
    {
      id: '04',
      title: 'DIGITAL SOLUTIONS',
      items: ['SaaS Product Engineering', 'Performance Tuning', 'Product UI/UX Design', '24/7 Cloud Monitoring'],
    },
  ];

  return (
    <section id="services" className="w-full py-24 bg-[#f3f3f3] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Single Unified Outer Grid Box Container */}
        <div className="relative border border-gray-300 bg-white">
          
          {/* Four Black Square Corner Markers on Outer Box */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Integrated Top Header Row */}
          <div className="text-center py-14 sm:py-20 px-6 border-b border-gray-300">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-[#0088ff]"></div>
              <span className="font-mono text-xs font-bold tracking-widest text-gray-700 uppercase">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
              We Build We Create
            </h2>
          </div>

          {/* 4 Vertical Columns Prominent Grid with Staggered Scroll & Rich Internal Ease-In-Out Hover Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => {
              const isHovered = activeCol === idx;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onMouseEnter={() => setActiveCol(idx)}
                  className={`group p-8 lg:p-10 min-h-[520px] border-b md:border-b-0 lg:border-r border-gray-300 last:border-r-0 flex flex-col justify-between transition-all duration-500 ease-in-out relative overflow-hidden cursor-pointer ${
                    isHovered 
                      ? 'bg-[#141414] text-white shadow-2xl z-20 scale-[1.015]' 
                      : 'bg-white text-[#111111] z-10'
                  }`}
                >
                  {/* Background Radial Glow Accent on Hover */}
                  <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,136,255,0.08)_0%,_transparent_70%)] pointer-events-none transition-opacity duration-500 ease-in-out ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Top Brand Blue Sweep Line Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-[#0088ff] shadow-[0_0_15px_#0088ff] transition-transform duration-500 ease-in-out origin-left ${
                    isHovered ? 'scale-x-100' : 'scale-x-0'
                  }`} />

                  {/* Header Tag & Title */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2.5 mb-10 transform group-hover:translate-x-1 transition-transform duration-500 ease-in-out">
                      <div className="w-2.5 h-2.5 bg-[#0088ff] flex-shrink-0 animate-pulse shadow-[0_0_8px_#0088ff]"></div>
                      <span className={`font-mono text-[11px] font-bold tracking-wider px-3 py-1 rounded-sm transition-all duration-500 ease-in-out ${
                        isHovered 
                          ? 'bg-[#0088ff] text-white font-extrabold shadow-[0_0_20px_rgba(0,136,255,0.85)] scale-105' 
                          : 'bg-black text-white'
                      }`}>
                        {service.title}
                      </span>
                    </div>

                    {/* Giant Translucent Floating Number */}
                    <div className={`text-8xl lg:text-[115px] font-extrabold font-mono tracking-tighter my-8 transition-all duration-500 ease-in-out leading-none ${
                      isHovered 
                        ? 'text-zinc-600 -translate-y-2.5 scale-105 drop-shadow-[0_0_18px_rgba(0,136,255,0.18)]' 
                        : 'text-gray-200'
                    }`}>
                      {service.id}
                    </div>
                  </div>

                  {/* Service List Items with Internal Staggered Slide Animation */}
                  <div className="relative z-10 space-y-3.5 pt-6 border-t border-dashed border-gray-300/30">
                    {service.items.map((item, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-2.5 transform transition-all duration-400 ease-in-out ${
                          isHovered ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: isHovered ? `${i * 0.05}s` : '0s' }}
                      >
                        <div className={`w-1.5 h-3.5 rounded-sm transition-all duration-400 ease-in-out ${
                          isHovered ? 'bg-[#0088ff] shadow-[0_0_10px_#0088ff] scale-y-120' : 'bg-gray-400'
                        }`}></div>
                        <span className={`text-xs font-mono transition-all duration-400 ease-in-out ${
                          isHovered ? 'text-white font-bold tracking-wide' : 'text-gray-700 font-medium'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
