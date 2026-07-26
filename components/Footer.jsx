'use client';
import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#works' },
    { label: 'FAQs', href: '#faq' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Linkedin', href: 'https://linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Behance', href: 'https://behance.net' },
  ];

  return (
    <footer id="contact" className="w-full bg-[#f3f3f3] text-[#111111] pt-12 pb-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* 1. Top Navigation Links Grid Row */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 border border-gray-300 bg-white text-center">
          {/* Four Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="py-6 sm:py-8 border-b md:border-b-0 border-r border-gray-300 last:border-r-0 flex items-center justify-center gap-4 hover:bg-[#181818] hover:text-white transition-all duration-300 group relative"
            >
              <span className="font-sans font-extrabold text-base sm:text-xl tracking-tight">
                {item.label}
              </span>
              <div className="w-2 h-2 bg-gray-300 group-hover:bg-[#0088ff] transition-colors flex-shrink-0"></div>
            </a>
          ))}
        </div>

        {/* 2. Center Main Brand Box with White Pixel Mosaic & Corner Markers */}
        <div className="relative border border-gray-300 bg-[#f4f4f4] my-6 py-16 sm:py-24 px-6 text-center overflow-hidden group">
          {/* Four Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Top-Left Corner 8-Bit White Pixel Mosaic Art (White ↔ Blue Hover Toggle) */}
          <div className="absolute top-0 left-0 flex flex-col items-start z-20">
            <div className="flex">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
            </div>
          </div>

          {/* Bottom-Right Corner 8-Bit White Pixel Mosaic Art (White ↔ Blue Hover Toggle) */}
          <div className="absolute bottom-0 right-0 flex flex-col items-end z-20">
            <div className="flex">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
            </div>
          </div>

          {/* Center Brand Logo & Text Mark */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 relative z-20">

            {/* 3D Hemisphere Logo Mark with Electric Blue Accent */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 sm:w-10 h-14 sm:h-20 bg-gradient-to-br from-[#00a3ff] via-[#0088ff] to-[#0055cc] rounded-l-full shadow-[0_0_25px_rgba(0,136,255,0.6)] transform -rotate-12 group-hover:rotate-0 transition-all duration-500"></div>
              <div className="w-10 sm:w-16 h-20 sm:h-28 bg-gradient-to-r from-[#181818] via-gray-900 to-black rounded-r-full shadow-2xl group-hover:scale-105 transition-transform duration-500"></div>
            </div>

            {/* Main Brand Title */}
            <span className="text-3xl sm:text-7xl lg:text-[110px] font-mono font-black text-[#111111] tracking-tighter leading-none group-hover:text-[#181818] transition-colors">
              Technochy
            </span>
          </div>

        </div>

        {/* 3. Bottom Credits & Social Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 font-mono text-xs text-gray-600">

          {/* Left: Social Media Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gray-700 hover:text-black transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Center: Copyright Notice */}
          <div className="text-center font-sans font-medium text-gray-500 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Technochy. All Rights Reserved
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-mono font-bold text-gray-800 hover:text-black transition-colors"
          >
            <span>Back to Top</span>
            <ChevronUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}
