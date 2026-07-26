'use client';
import React from 'react';

export default function BrandMarquee() {
  const logos = [
    { name: 'logoipsum 1', icon: '✦ logoipsum' },
    { name: 'logoipsum 2', icon: '❖ logoipsum' },
    { name: 'logoipsum 3', icon: '◈ logoipsum' },
    { name: 'logoipsum 4', icon: '⬟ logoipsum' },
    { name: 'logoipsum 5', icon: '✺ logoipsum' },
    { name: 'logoipsum 6', icon: '⯁ logoipsum' },
  ];

  return (
    <div className="w-full bg-[#f3f3f3] border-b border-gray-300 overflow-hidden py-4">
      <div className="max-w-7xl mx-auto flex items-center border border-gray-300 bg-white/60">
        
        {/* Label Tag */}
        <div className="px-6 py-6 border-r border-gray-300 font-mono text-[11px] font-bold text-gray-500 tracking-wider whitespace-nowrap bg-gray-50/50">
          //WE'VE<br />TRUSTED BY
        </div>

        {/* Logo Carousel */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee flex items-center">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="px-12 py-6 border-r border-gray-300 flex items-center justify-center text-xl font-bold font-mono text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              >
                {logo.icon}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
