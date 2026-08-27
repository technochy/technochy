'use client';
import React from 'react';

export default function BrandMarquee() {
  const logos = [
    { name: 'Concept Global', src: '/images/concept-global.png', className: 'scale-[2.5]' },
    { name: 'Oushk', src: '/images/oushk.png', className: 'scale-[1.6]' },
    { name: 'Hitway', src: '/images/hitway.png' },
    { name: 'Microsoft', src: '/images/microsoft.svg' },
    { name: 'Zooplus', src: '/images/zooplus.png', className: 'scale-[1.4]' },
    { name: 'Stylevana', src: '/images/stylevana.png', className: 'scale-[1.4]' },
    { name: 'Huawei', src: '/images/huawei.png', className: 'scale-[2.0]' },
    { name: 'Autobrush', src: '/images/autobrush.png' },
    { name: 'iScooter', src: '/images/iscooter.png', className: 'scale-[1.7]' },
  ];

  // Repeat logos to fill marquee screen width and enable a seamless loop
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#f3f3f3] border-b border-gray-300 overflow-hidden py-4">
      <div className="max-w-7xl mx-auto flex items-center border border-gray-300 bg-white/60">
        
        {/* Label Tag */}
        <div className="px-6 py-6 border-r border-gray-300 font-mono text-[11px] font-bold text-gray-500 tracking-wider whitespace-nowrap bg-gray-50/50 flex flex-col justify-center">
          <span>// WE'VE</span>
          <span>TRUSTED BY</span>
        </div>

        {/* Logo Carousel */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee flex items-center">
            {repeatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="px-8 border-r border-gray-300 flex items-center justify-center flex-shrink-0 bg-white/40 hover:bg-white/90 transition-all duration-300"
                style={{ width: '220px', height: '80px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`max-h-12 max-w-[160px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply ${logo.className || ''}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
