'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Check, RotateCw } from 'lucide-react';

function Counter({ from = 0, to, suffix = '', decimals = 0 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(decimals) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, from, to, suffix, decimals]);

  return <span ref={nodeRef}>{from.toFixed(decimals) + suffix}</span>;
}

export default function AboutSection() {
  const stats = [
    {
      to: 370,
      suffix: '%',
      decimals: 0,
      label: 'Average ROI boost from software & affiliate automation',
      icon: (
        <div className="w-10 h-10 bg-[#181818] rounded-xl flex items-center justify-center text-[#7cff00] font-mono text-xs font-bold shadow-md flex-shrink-0">
          :::
        </div>
      ),
    },
    {
      to: 120,
      suffix: '+',
      decimals: 0,
      label: 'Software tools & affiliate platforms deployed',
      icon: (
        <div className="w-10 h-10 bg-[#181818] rounded-xl flex items-center justify-center text-[#7cff00] font-mono text-xs font-bold shadow-md flex-shrink-0">
          <Check size={16} />
        </div>
      ),
    },
    {
      to: 4.9,
      suffix: '/5',
      decimals: 1,
      label: 'Client rating across 100+ global tech deployments',
      icon: (
        <div className="w-10 h-10 bg-[#181818] rounded-xl flex items-center justify-center text-[#7cff00] font-mono text-xs font-bold shadow-md flex-shrink-0">
          <RotateCw size={14} />
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="w-full py-24 bg-[#f3f3f3] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Headline Grid Box with Dashed Border & Corner Dot Markers */}
        <div className="relative border-y border-dashed border-gray-400/80 py-10 sm:py-14 px-6 sm:px-12 mb-12 bg-white/50">
          {/* Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Section Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-3 h-3 bg-[#7cff00]"></div>
            <span className="font-mono text-xs font-bold tracking-widest text-gray-700 uppercase">
              ABOUT US
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] max-w-5xl tracking-tight leading-tight"
          >
            We engineer intelligent software tools & automated affiliate platforms that turn strategy into scalable revenue.
          </motion.h2>
        </div>

        {/* 2-Column Content with Corner Markers & Dashed Borders */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 border border-gray-300 bg-white">
          
          {/* Four Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>
          
          {/* Left Column: Stats */}
          <div className="lg:col-span-5 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-300 flex flex-col justify-between relative">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs text-gray-500 tracking-wider uppercase mb-10 leading-relaxed"
            >
              OUR RESULTS SPEAK FOR THEMSELVES. EACH NUMBER REPRESENTS THE TRUST WE'VE BUILT.
            </motion.p>

            <div className="space-y-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex items-start gap-5 pt-6 border-t border-dashed border-gray-300 first:border-t-0 first:pt-0"
                >
                  {stat.icon}
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-extrabold text-[#111111] font-mono tracking-tight">
                      <Counter from={0} to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                    </h3>
                    <p className="text-xs text-gray-600 font-sans font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Image with Corner Pixel Mosaic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 relative min-h-[400px] overflow-hidden bg-gray-900 group"
          >
            {/* Background Office Image */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Agency Team"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 filter grayscale"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Bottom Right Pixel Mosaic Art */}
            <div className="absolute bottom-0 right-0 pointer-events-none flex flex-col items-end">
              <div className="flex">
                <div className="w-10 h-10 bg-white"></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 bg-white"></div>
                <div className="w-10 h-10 bg-[#181818]"></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 bg-white"></div>
                <div className="w-10 h-10 bg-white"></div>
                <div className="w-10 h-10 bg-[#7cff00]"></div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
