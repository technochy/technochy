'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorkShowcase() {
  const projects = [
    {
      title: 'Commissionbag Affiliate platform',
      subtitle: 'Grow your online revenue with ease. Connect with top global brands, access premium CPA & CPS campaigns, and track monthly payouts with real-time analytics.',
      appName: 'COMMISSIONBAG',
      tagline: 'Affiliate Marketing Network',
      color: '#3b3abe',
      textColor: '#ffffff',
      image: '/images/commissionbag-full.png',
      link: 'https://commissionbag.com/',
      stats: [
        { value: '20K+', label: 'Active Publishers' },
        { value: '50+', label: 'Integrated Brands' },
        { value: 'CPA/CPS', label: 'Offer Models' },
      ],
    },
    {
      title: 'Couponchy Coupons Platform',
      subtitle: 'Smart Shopping, Instant Savings. Explore verified discount codes, store coupon offers, and daily trending deals from top global e-commerce brands.',
      appName: 'COUPONCHY',
      tagline: 'Global Promo Codes & Discounts',
      color: '#1a1635',
      textColor: '#a855f7',
      image: '/images/couponchy-coupons-full.png',
      link: 'https://couponchy.com/',
      stats: [
        { value: '10K+', label: 'Verified Coupons' },
        { value: '500+', label: 'Partner Stores' },
        { value: '99%', label: 'Success Rate' },
      ],
    },
    {
      title: 'Universe Coupons Platform',
      subtitle: 'Your ultimate destination for verified discounts, daily updated shopping vouchers, and exclusive promo codes from trusted international stores.',
      appName: 'UNIVERSE COUPONS',
      tagline: 'Verified Coupons & Promo Codes',
      color: '#0f172a',
      textColor: '#f8fafc',
      image: '/images/universecoupons-full.png',
      link: 'https://universecoupons.com/',
      stats: [
        { value: '15K+', label: 'Vouchers Available' },
        { value: '200+', label: 'Store Categories' },
        { value: 'Daily', label: 'Updates' },
      ],
    },
    {
      title: 'WeSaveCart Platform',
      subtitle: 'Unlock exclusive savings before you checkout. Aggregating active promo codes, free shipping offers, and seasonal discounts to save money on every cart.',
      appName: 'WESAVECART',
      tagline: 'Exclusive Savings & Discount Coupons',
      color: '#16a34a',
      textColor: '#ffffff',
      image: '/images/wesavecart-full.png',
      link: 'https://wesavecart.com/',
      stats: [
        { value: '8K+', label: 'Active Codes' },
        { value: '65%', label: 'Max Savings' },
        { value: '100%', label: 'Free to Use' },
      ],
    },
    {
      title: 'Ovrone Leather Wear',
      subtitle: 'Premium Canadian leather wear crafting timeless jackets for men and women. Discover genuine leather outerwear built for ultimate style, comfort, and longevity.',
      appName: 'OVRONE',
      tagline: 'Premium Leather Jackets & Apparel',
      color: '#1c1917',
      textColor: '#e7e5e4',
      image: '/images/ovrone-full.png',
      link: 'https://ovrone.com/',
      stats: [
        { value: '100%', label: 'Genuine Leather' },
        { value: 'Free', label: 'US & CA Shipping' },
        { value: '4.9', label: 'Customer Rating' },
      ],
    },
    {
      title: 'Amna Ismail Couture',
      subtitle: 'Elegance Redefined. Explore premium designer ethnic wear, unstitched luxury lawn, ready-to-wear prêt, and bridal ensembles celebrating rich cultural heritage.',
      appName: 'AMNA ISMAIL',
      tagline: 'Luxury Ethnic & Bridal Wear',
      color: '#faf8f5',
      textColor: '#1c1917',
      image: '/images/amnaismail-full.png',
      link: 'https://amnaismail.com/',
      stats: [
        { value: '15+', label: 'Annual Collections' },
        { value: '100%', label: 'Handcrafted Craft' },
        { value: 'Global', label: 'Worldwide Delivery' },
      ],
    },
    {
      title: 'Mondo E-Commerce',
      subtitle: 'A premium cafe and restaurant experience in Karachi. Browse gourmet menus, place digital orders, and enjoy artisanal coffees and fine dining at DHA Phase 8.',
      appName: 'MONDO',
      linkName: 'mondo.pk',
      tagline: 'Gourmet Cafe & Fine Dining',
      color: '#7c2d12',
      textColor: '#ffedd5',
      image: '/images/mondo-full.png',
      link: 'https://mondo.pk/',
      stats: [
        { value: 'Karachi', label: 'DHA Phase 8' },
        { value: '4.8', label: 'Google Rating' },
        { value: 'Online', label: 'Easy Ordering' },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [segmentProgress, setSegmentProgress] = useState(0);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(Math.floor(latest * projects.length), projects.length - 1);
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
    const segment = 1 / projects.length;
    const progress = (latest - (index * segment)) / segment;
    setSegmentProgress(Math.max(0, Math.min(1, progress)));
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="works" ref={targetRef} className="relative h-[700vh] bg-[#f3f3f3] border-b border-gray-300">
      
      {/* Sticky Full-Viewport Container pinned during scroll */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-6">
        <div className="max-w-7xl w-full mx-auto px-6">
          
          {/* Main Showcase Grid Box */}
          <div className="relative border border-gray-300 bg-[#c8c8c9] min-h-[580px] sm:min-h-[620px] rounded-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 shadow-xl">
            
            {/* Corner Pixel Mosaic Decorative Blocks (White ↔ Blue Hover Toggle) */}
            <div className="absolute top-0 left-0 z-20">
              <div className="flex">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
            </div>

            <div className="absolute top-0 right-0 z-20">
              <div className="flex justify-end">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
              <div className="flex justify-end">
                <div className="w-8 h-8 bg-white border border-gray-100 transition-all duration-300 hover:bg-[#0088ff] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,255,0.5)] cursor-pointer"></div>
              </div>
            </div>

            {/* Scroll Indicator Badge (Top Center) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-md text-[#0088ff] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0088ff] animate-ping"></span>
              <span>SCROLL TO EXPLORE ({currentIndex + 1} / {projects.length})</span>
            </div>

            {/* Center Content: Phone Display Mockup with Metallic Brackets */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: currentIndex % 2 === 0 ? -16 : 16 }}
                animate={{ opacity: 1, scale: 1, rotate: currentIndex % 2 === 0 ? -8 : 8 }}
                exit={{ opacity: 0, scale: 1.08, rotate: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center items-center py-6 my-auto relative"
              >
                {/* Metallic 3D Bracket Left Accent */}
                <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-48 h-64 border-l-8 border-t-8 border-gray-400 rounded-tl-3xl opacity-60 pointer-events-none"></div>
                {/* Metallic 3D Bracket Right Accent */}
                <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-48 h-64 border-r-8 border-b-8 border-gray-400 rounded-br-3xl opacity-60 pointer-events-none"></div>

                {/* Phone Frame with Ease-Out Rotation Dynamics */}
                <div className="relative w-72 h-[480px] bg-black rounded-[48px] p-3.5 shadow-2xl border-4 border-gray-800 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out cursor-pointer z-10 group">
                  {/* Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20"></div>

                  {/* Phone Screen */}
                  <a 
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full rounded-[38px] relative overflow-hidden bg-white shadow-inner flex flex-col block cursor-pointer group"
                  >
                    {/* Website mock top-bar */}
                    <div className="absolute top-0 left-0 w-full h-11 bg-black/80 backdrop-blur-sm z-20 px-6 flex items-center justify-between border-b border-white/10 text-[9px] font-mono text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span>
                      </div>
                      <div className="bg-white/10 hover:bg-white/20 transition-colors px-2 py-0.5 rounded text-[8px] tracking-tight text-white flex items-center gap-1">
                        <span>{currentProject.linkName || (currentProject.appName.toLowerCase() + '.com')}</span>
                        <span className="text-[6px] opacity-70">↗</span>
                      </div>
                    </div>

                    {/* Scrolling content container */}
                    <div className="w-full flex-1 overflow-hidden relative">
                      <div 
                        className="absolute top-11 left-0 w-full transition-transform duration-100 ease-out"
                        style={{
                          transform: `translateY(-calc(${segmentProgress} * (100% - 408px)))`,
                          imageRendering: '-webkit-optimize-contrast',
                        }}
                      >
                        <img 
                          src={currentProject.image} 
                          alt={currentProject.appName} 
                          className="w-full h-auto object-cover antialiased"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Control & Info Overlay Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4 relative z-20">
              
              {/* Dark Floating Metric Card */}
              <div className="lg:col-span-8 bg-[#4a4a4b] text-white p-5 sm:p-7 rounded-none shadow-2xl border border-gray-600/50">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-xs text-gray-200 font-sans leading-relaxed mb-4 max-w-xl">
                  {currentProject.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-3 border-t border-gray-500/60">
                  <div className="grid grid-cols-3 gap-3 flex-1 w-full">
                    {currentProject.stats.map((st, i) => (
                      <div key={i} className="border-r border-gray-500/60 last:border-r-0 pr-2">
                        <div className="text-lg sm:text-xl font-extrabold font-mono text-white">
                          {st.value}
                        </div>
                        <div className="text-[9px] text-gray-300 font-mono mt-0.5">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#0088ff] text-white hover:bg-white hover:text-black transition-all duration-300 text-[11px] font-mono font-bold px-5 py-2.5 flex items-center justify-center gap-2 uppercase tracking-wider shrink-0 shadow-lg border border-[#0088ff] hover:border-white cursor-pointer"
                  >
                    <span>Visit Project</span>
                    <span className="text-[9px]">↗</span>
                  </a>
                </div>
              </div>

              {/* Slider Navigation Buttons (Bottom Right) */}
              <div className="lg:col-span-4 flex items-center justify-end gap-1">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4a4a4b] text-white hover:bg-[#0088ff] hover:text-white flex items-center justify-center transition-colors border border-gray-600 shadow-lg"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4a4a4b] text-white hover:bg-[#0088ff] hover:text-white flex items-center justify-center transition-colors border border-gray-600 shadow-lg"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
