'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, CheckCircle2, Send, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setFileName('');
    }, 4000);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#f3f3f3] pt-12 sm:pt-20 pb-16 border-b border-gray-300 relative overflow-hidden">
      
      {/* 1. Single Wrapper Container for Edge-to-Edge Seamless Join */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Top White Grid Banner Box */}
        <div className="relative border border-b-0 border-gray-300 bg-white bg-grid-pattern pt-8 sm:pt-14 pb-0 px-3 sm:px-12 overflow-hidden shadow-sm">
          
          {/* Four Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Chevron Stream Wave + Headline */}
          <div className="text-center py-4 sm:py-6 relative z-20">
            
            {/* Top Headline Line 1: LET'S START with optional desktop-only arrows */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-2 sm:mb-4">
              {/* Left Animated Arrow Stream - Desktop Only */}
              <div className="hidden sm:flex items-center gap-1 text-3xl lg:text-5xl font-mono font-black select-none text-gray-400">
                <span className="arrow-pulse-1">»</span>
                <span className="arrow-pulse-2">»</span>
                <span className="arrow-pulse-3">»</span>
              </div>
              
              <h2 className="text-3xl sm:text-6xl lg:text-8xl font-mono font-black text-[#111111] tracking-tighter uppercase leading-none text-center">
                LET'S START
              </h2>

              {/* Right Animated Arrow Stream - Desktop Only */}
              <div className="hidden sm:flex items-center gap-1 text-3xl lg:text-5xl font-mono font-black select-none text-gray-400">
                <span className="arrow-pulse-3">«</span>
                <span className="arrow-pulse-2">«</span>
                <span className="arrow-pulse-1">«</span>
              </div>
            </div>

            {/* Top Headline Line 2: YOUR PROJECT */}
            <h2 className="text-3xl sm:text-6xl lg:text-8xl font-mono font-black text-[#111111] tracking-tighter uppercase leading-none mb-6 text-center">
              YOUR PROJECT
            </h2>

            {/* Centered 3D Hemisphere Media Badge */}
            <div className="flex justify-center my-6 relative z-20">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full p-2 sm:p-2.5 shadow-2xl border border-gray-300 flex items-center justify-center cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center gap-1 shadow-inner">
                  <div className="w-2.5 sm:w-3 h-6 sm:h-8 bg-gray-400 rounded-l-full"></div>
                  <div className="w-3 sm:w-4 h-7 sm:h-9 bg-gray-200 rounded-r-full"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Integrated Stepped Neon Green Columns Canvas */}
          <div className="relative w-full h-40 sm:h-64 flex items-end justify-between overflow-hidden -mx-3 sm:-mx-12 w-[calc(100%+1.5rem)] sm:w-[calc(100%+6rem)]">
            
            {/* Left Stepped Columns */}
            <div className="flex items-end h-full w-1/2">
              <div className="w-1/3 h-full bg-[#7cff00] p-2 sm:p-4 flex flex-col justify-end">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black text-white px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#7cff00]"></span>
                  <span className="truncate">IMPACTFUL CREATIVE</span>
                </div>
              </div>
              <div className="w-1/3 h-[68%] bg-[#7cff00] border-l border-white/20"></div>
              <div className="w-1/3 h-[38%] bg-[#7cff00] border-l border-white/20"></div>
            </div>

            {/* Right Stepped Columns */}
            <div className="flex items-end h-full w-1/2 justify-end">
              <div className="w-1/3 h-[38%] bg-[#7cff00] border-r border-white/20"></div>
              <div className="w-1/3 h-[68%] bg-[#7cff00] border-r border-white/20"></div>
              <div className="w-1/3 h-full bg-[#7cff00] p-2 sm:p-4 flex flex-col justify-end items-end">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black text-white px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#7cff00]"></span>
                  <span className="truncate">GLOBAL SUPPORT</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Dark Contact Box (Seamless Edge-to-Edge Join) */}
        <div className="relative bg-[#0c0c0e] text-white border border-t-0 border-gray-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Bottom Two Neon Corner Markers */}
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#7cff00] z-30 shadow-[0_0_10px_#7cff00]"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#7cff00] z-30 shadow-[0_0_10px_#7cff00]"></div>

          {/* Left Column: Direct Contact Info & Offices */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col justify-between space-y-10">
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#181818] px-3 py-1 rounded-none border border-gray-800">
                <span className="w-2 h-2 bg-[#7cff00]"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-[#7cff00] uppercase">
                  CONTACT
                </span>
              </div>

              <div className="space-y-2 pt-2 font-mono">
                <a
                  href="mailto:hello@technochy.com"
                  className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white hover:text-[#7cff00] transition-colors tracking-tight break-all"
                >
                  hello@technochy.com
                </a>
                <a
                  href="tel:+11234567890"
                  className="block text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-[#7cff00] transition-colors"
                >
                  (+1) 123 456-7890
                </a>
              </div>
            </div>

            {/* Global Offices Grid */}
            <div className="space-y-6 pt-8 border-t border-dashed border-gray-800">
              <div className="inline-flex items-center gap-2 bg-[#181818] px-3 py-1 rounded-none border border-gray-800">
                <span className="w-2 h-2 bg-[#7cff00]"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">
                  OFFICES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 font-sans">
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-mono">Montréal</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-mono space-y-1">
                    <span>4200 Saint Laurent Blvd, Suite 305</span><br />
                    <span>Montreal, QC H2W 2R2</span><br />
                    <span>Canada</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-mono">Texas</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-mono space-y-1">
                    <span>1920 McKinney Avenue, 7th Floor</span><br />
                    <span>Dallas, TX 75201</span><br />
                    <span>United States</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex items-center gap-2 font-mono text-[10px] text-gray-500">
              <Sparkles size={12} className="text-[#7cff00]" />
              <span>AVERAGE RESPONSE TIME: &lt; 2 HOURS</span>
            </div>

          </div>

          {/* Right Column: Interactive Glass Contact Form */}
          <div className="lg:col-span-6 p-5 sm:p-10 lg:p-14 bg-[#0a0a0c]">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 font-mono">
              
              {/* Field 1: Name */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  /YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-sm text-white focus:outline-none focus:border-[#7cff00] transition-colors placeholder:text-gray-600 font-sans"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  /YOUR E-MAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your e-mail"
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-sm text-white focus:outline-none focus:border-[#7cff00] transition-colors placeholder:text-gray-600 font-sans"
                />
              </div>

              {/* Field 3: Message */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  /MORE ABOUT THE PROJECT
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Leave us message"
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-sm text-white focus:outline-none focus:border-[#7cff00] transition-colors placeholder:text-gray-600 font-sans resize-none"
                />
              </div>

              {/* Attachment File Input */}
              <div className="pt-2">
                <label className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#7cff00] cursor-pointer transition-colors">
                  <Paperclip size={16} className="text-[#7cff00]" />
                  <span>{fileName ? `Attached: ${fileName}` : 'Add an Attachment'}</span>
                  <input type="file" onChange={handleFileChange} className="hidden" />
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-[#7cff00] hover:to-[#90ff1a] text-white hover:text-black font-extrabold text-sm rounded-xl border border-gray-700 hover:border-[#7cff00] transition-all duration-500 shadow-xl flex items-center justify-center gap-3 group"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-black font-bold"
                      >
                        <CheckCircle2 size={18} />
                        <span>MESSAGE SENT SUCCESSFULLY!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        <span>Submit Message</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
