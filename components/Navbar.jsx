'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/#home', active: true },
    { label: 'ABOUT US', href: '/#about' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'WORKS', href: '/#works' },
    { label: 'FAQS', href: '/#faq' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  return (
    <header className="w-full bg-[#f4f4f4] border-b border-gray-300 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Grid Cells Container */}
        <div className="flex items-center justify-between border-x border-gray-300 h-20 relative">
          
          {/* Corner Crosshair Dot Markers */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-black -translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-black translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-black -translate-x-1/2 translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-black translate-x-1/2 translate-y-1/2 z-20"></div>

          {/* Left Cell: High-Impact Stylized Text Logo */}
          <div className="px-4 sm:px-8 h-full flex items-center border-r border-gray-300">
            <a href="/#home" className="flex items-center group">
              <span className="font-extrabold text-2xl sm:text-[32px] tracking-tighter uppercase font-sans flex items-center gap-0.5 whitespace-nowrap">
                <span className="text-[#111111] group-hover:text-black transition-colors">TECHNO</span>
                <span className="text-[#0088ff] group-hover:text-[#0066ee] transition-colors">CHY</span>
                <span className="w-2 h-2 bg-[#0088ff] rounded-sm inline-block ml-1 shadow-[0_0_8px_rgba(0,136,255,0.6)]"></span>
              </span>
            </a>
          </div>

          {/* Center Cell: Desktop Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 px-6 sm:px-8 h-full flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-mono font-bold tracking-wide transition-colors duration-200 relative py-1 ${
                  link.active
                    ? 'text-[#111111] border-b-2 border-[#111111]'
                    : 'text-gray-600 hover:text-[#111111]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Cell: Start a Project CTA Button */}
          <div className="hidden md:flex items-center px-6 sm:px-8 h-full border-l border-gray-300">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-[#181818] text-white text-sm font-mono font-bold px-6 py-3 rounded-full hover:bg-black hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden px-4 sm:px-6 h-full flex items-center border-l border-gray-300">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-11 h-11 bg-[#181818] text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors border border-black shadow-md focus:outline-none"
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <span className="w-5 h-0.5 bg-white rounded-full"></span>
                  <span className="w-5 h-0.5 bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#181818] text-white px-6 py-6 border-b border-gray-800 space-y-4 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block hover:text-[#0088ff] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[#0088ff] text-white font-bold py-3 rounded-xl mt-4 hover:bg-[#0077ff] transition-colors shadow-lg"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
