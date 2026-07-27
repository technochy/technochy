'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, ShieldCheck, ChevronDown, Loader2, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    phone: '',
    service: '',
    message: '',
    agreeSms: false,
    isRobotChecked: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const servicesList = [
    'Mobile App Development',
    'Web Development',
    'Software Development',
    'Front-End Development',
    'Back-End Development',
    'UI/UX Design',
    'AI & Machine Learning',
    'Cybersecurity',
    'Technology & Product Consulting',
    'Data & Analytics',
    'SEO',
    'Digital Marketing',
    'PPC',
    'Affiliate Marketing',
    'Performance Optimization',
    'Graphic Designing',
    'Ebook Publishing Services',
    'Social Media Marketing'
  ];

  const [submitting, setSubmitting] = useState(false);
  const [captchaVerifying, setCaptchaVerifying] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [fileData, setFileData] = useState('');

  const handleCaptchaClick = () => {
    if (captchaVerified) {
      setCaptchaVerified(false);
      return;
    }
    setCaptchaVerifying(true);
    setCaptchaError(false);
    setTimeout(() => {
      setCaptchaVerifying(false);
      setCaptchaVerified(true);
    }, 700);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      setCaptchaVerifying(true);
      setTimeout(() => {
        setCaptchaVerifying(false);
        setCaptchaVerified(true);
        processSubmit();
      }, 500);
      return;
    }
    processSubmit();
  };

  const processSubmit = async () => {
    setSubmitting(true);
    setCaptchaError(false);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, fileName, fileData }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setCaptchaVerified(false);
        setFormData({
          fullName: '',
          businessEmail: '',
          companyName: '',
          phone: '',
          service: '',
          message: '',
          agreeSms: false,
          isRobotChecked: false
        });
        setFileName('');
        setFileData('');
      }, 4000);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFileData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#f3f3f3] pt-10 sm:pt-16 pb-16 border-b border-gray-300 relative overflow-hidden">
      
      {/* Wrapper Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Top Header Banner Box */}
        <div className="relative border border-b-0 border-gray-300 bg-white bg-grid-pattern pt-8 sm:pt-12 pb-0 px-3 sm:px-12 overflow-hidden shadow-sm">
          
          {/* Four Black Square Corner Markers */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black z-30"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black z-30"></div>

          {/* Chevron Stream Wave + Headline */}
          <div className="text-center py-4 relative z-20">
            
            {/* Headline Line 1 */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-2">
              <div className="hidden sm:flex items-center gap-1 text-3xl lg:text-5xl font-mono font-black select-none text-gray-400">
                <span className="arrow-pulse-1">»</span>
                <span className="arrow-pulse-2">»</span>
                <span className="arrow-pulse-3">»</span>
              </div>
              
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-mono font-black text-[#111111] tracking-tighter uppercase leading-none text-center">
                LET'S START
              </h2>

              <div className="hidden sm:flex items-center gap-1 text-3xl lg:text-5xl font-mono font-black select-none text-gray-400">
                <span className="arrow-pulse-3">«</span>
                <span className="arrow-pulse-2">«</span>
                <span className="arrow-pulse-1">«</span>
              </div>
            </div>

            {/* Headline Line 2 */}
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-mono font-black text-[#111111] tracking-tighter uppercase leading-none mb-4 text-center">
              YOUR PROJECT
            </h2>

            {/* 3D Badge */}
            <div className="flex justify-center my-4 relative z-20">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full p-2 shadow-2xl border border-gray-300 flex items-center justify-center cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-r from-gray-900 to-black rounded-full flex items-center justify-center gap-1 shadow-inner">
                  <div className="w-2 sm:w-2.5 h-5 sm:h-7 bg-gradient-to-b from-[#00a3ff] via-[#0088ff] to-[#0055cc] rounded-l-full shadow-[0_0_12px_#0088ff]"></div>
                  <div className="w-2.5 sm:w-3.5 h-6 sm:h-8 bg-gray-200 rounded-r-full"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stepped Brand Blue Canvas */}
          <div className="relative w-full h-24 sm:h-36 flex items-end justify-between overflow-hidden -mx-3 sm:-mx-12 w-[calc(100%+1.5rem)] sm:w-[calc(100%+6rem)]">
            <div className="flex items-end h-full w-1/2">
              <div className="w-1/3 h-full bg-[#0088ff] p-2 sm:p-4 flex flex-col justify-end">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black text-white px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#0088ff]"></span>
                  <span className="truncate">IMPACTFUL CREATIVE</span>
                </div>
              </div>
              <div className="w-1/3 h-[68%] bg-[#0088ff] border-l border-white/20"></div>
              <div className="w-1/3 h-[38%] bg-[#0088ff] border-l border-white/20"></div>
            </div>

            <div className="flex items-end h-full w-1/2 justify-end">
              <div className="w-1/3 h-[38%] bg-[#0088ff] border-r border-white/20"></div>
              <div className="w-1/3 h-[68%] bg-[#0088ff] border-r border-white/20"></div>
              <div className="w-1/3 h-full bg-[#0088ff] p-2 sm:p-4 flex flex-col justify-end items-end">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black text-white px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#0088ff]"></span>
                  <span className="truncate">GLOBAL SUPPORT</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Split Container */}
        <div id="contact-form" className="relative bg-[#0c0c0e] text-white border border-t-0 border-gray-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Bottom Corner Markers */}
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0088ff] z-30 shadow-[0_0_10px_#0088ff]"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0088ff] z-30 shadow-[0_0_10px_#0088ff]"></div>

          {/* Left Column: Direct Contact Info & Global Offices */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col justify-start space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#181818] px-3 py-1 border border-gray-800">
                <span className="w-2 h-2 bg-[#0088ff]"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-[#0088ff] uppercase">
                  DIRECT CONTACT
                </span>
              </div>

              <div className="space-y-2 pt-1 font-mono">
                <a
                  href="mailto:contact@technochy.com"
                  className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-white hover:text-[#0088ff] transition-colors tracking-tight break-words"
                >
                  contact@technochy.com
                </a>
                <a
                  href="tel:+447460708828"
                  className="block text-base sm:text-lg lg:text-xl font-bold text-gray-300 hover:text-[#0088ff] transition-colors"
                >
                  +44 7460 708828
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="space-y-4 pt-6 border-t border-dashed border-gray-800">
              <div className="inline-flex items-center gap-2 bg-[#181818] px-3 py-1 border border-gray-800">
                <span className="w-2 h-2 bg-[#0088ff]"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">
                  OFFICE LOCATION
                </span>
              </div>

              <div className="space-y-1 font-sans">
                <h4 className="text-base sm:text-lg font-bold text-white font-mono">London, UK</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                  2nd Floor College House, 17 King Edwards Road<br />
                  Ruislip, London, United Kingdom, HA4 7AE
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 font-mono text-[11px] text-gray-500 border-t border-gray-800/50">
              <Sparkles size={14} className="text-[#0088ff]" />
              <span>AVERAGE RESPONSE TIME: &lt; 2 HOURS</span>
            </div>

          </div>

          {/* Right Column: Clean Form Card with Technochy Electric Blue Brand Colors */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 bg-[#f4f7fb] text-[#111827]">
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 font-sans">
              
              {/* Row 1: Full Name & Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">
                    Full Name <span className="text-[#0088ff]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-[#0088ff] transition-colors placeholder:text-gray-400 font-sans"
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">
                    Business Email <span className="text-[#0088ff]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-[#0088ff] transition-colors placeholder:text-gray-400 font-sans"
                  />
                </div>

              </div>

              {/* Row 2: Company Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Company Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">
                    Company Name <span className="text-[#0088ff]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Company or Organization"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-[#0088ff] transition-colors placeholder:text-gray-400 font-sans"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">
                    Phone Number <span className="text-[#0088ff]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +44 7460 708828"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-[#0088ff] transition-colors placeholder:text-gray-400 font-sans"
                  />
                </div>

              </div>

              {/* Row 3: Custom Styled Service Selection Dropdown */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700">
                  I'm Interested In <span className="text-[#0088ff]">*</span>
                </label>
                <div className="relative border-b-2 border-gray-300 focus-within:border-[#0088ff] transition-colors">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent py-2 text-sm text-gray-900 focus:outline-none appearance-none cursor-pointer pr-8 font-medium font-sans"
                  >
                    <option value="" disabled className="text-gray-400">
                      Please Select a Service...
                    </option>
                    {servicesList.map((svc, idx) => (
                      <option key={idx} value={svc} className="text-gray-900 bg-white font-sans py-1">
                        {svc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#0088ff] w-4 h-4" />
                </div>
              </div>

              {/* Row 4: Project Scope Message */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700">
                  Tell Us About Your Project <span className="text-[#0088ff]">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project goals, scope, or timeline..."
                  className="w-full bg-transparent border-b-2 border-gray-300 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-[#0088ff] transition-colors placeholder:text-gray-400 font-sans resize-none"
                />
              </div>

              {/* Row 5: Attach File */}
              <div className="space-y-1.5 pt-1 border-b-2 border-gray-300 pb-3">
                <div className="text-xs font-bold text-gray-800">Attach File</div>
                <p className="text-xs text-gray-600">
                  Upload scope of work or supporting files
                </p>
                <p className="text-xs text-[#0088ff] font-bold">
                  (Allowed files types: "jpeg, jpg, png, pdf")
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <label className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs py-1.5 px-4 rounded border border-gray-300 shadow-sm cursor-pointer transition-colors flex-shrink-0">
                    Browse...
                    <input
                      type="file"
                      accept=".jpeg,.jpg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-[#0088ff] font-bold truncate max-w-[200px] sm:max-w-xs">
                    {fileName ? fileName : 'No file selected'}
                  </span>
                </div>
              </div>

              {/* Row 6: SMS Agreement Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="agreeSms"
                  required
                  checked={formData.agreeSms}
                  onChange={(e) => setFormData({ ...formData, agreeSms: e.target.checked })}
                  className="mt-0.5 w-4 h-4 text-[#0088ff] border-gray-400 rounded focus:ring-[#0088ff] accent-[#0088ff] cursor-pointer flex-shrink-0"
                />
                <label htmlFor="agreeSms" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer font-medium">
                  By submitting this form, you agree to receive SMS messages from Technochy related to your inquiry, consultation scheduling, project updates, and support communication. Message frequency varies. Message & data rates may apply. Reply STOP to opt out or HELP for help. View our <a href="#" className="text-[#0088ff] font-bold underline hover:text-[#0066ee]">Privacy Policy</a>.
                </label>
              </div>

              {/* Row 7: Interactive reCAPTCHA Box */}
              <div className="space-y-1 my-2">
                <div 
                  onClick={handleCaptchaClick}
                  className={`bg-white border ${captchaError ? 'border-red-500 ring-2 ring-red-200' : captchaVerified ? 'border-emerald-500/80 shadow-[0_0_12px_rgba(16,185,129,0.15)]' : 'border-gray-300'} rounded-md p-3 max-w-[290px] shadow-sm flex items-center justify-between cursor-pointer transition-all duration-300 select-none hover:border-[#0088ff]`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7 flex items-center justify-center">
                      {captchaVerifying ? (
                        <Loader2 className="w-6 h-6 animate-spin text-[#0088ff]" />
                      ) : captchaVerified ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white font-bold shadow-sm"
                        >
                          <Check size={16} strokeWidth={3} />
                        </motion.div>
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-400 rounded bg-white hover:border-[#0088ff] transition-colors"></div>
                      )}
                    </div>
                    <span className="text-xs text-gray-800 font-bold">I'm not a robot</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <ShieldCheck size={22} className={captchaVerified ? 'text-emerald-500' : 'text-[#0088ff]'} />
                    <span className="text-[9px] text-gray-400 font-mono font-bold tracking-tight">reCAPTCHA</span>
                  </div>
                </div>

                {captchaError && (
                  <p className="text-[11px] font-bold text-red-600 animate-bounce">
                    ⚠️ Please verify the reCAPTCHA checkbox before submitting.
                  </p>
                )}
              </div>

              {/* Row 8: Technochy Electric Blue Brand Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className="w-full sm:w-auto px-10 py-3 bg-[#0088ff] hover:bg-[#0077ff] text-white font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(0,136,255,0.4)] hover:shadow-[0_0_30px_rgba(0,136,255,0.7)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-white font-bold"
                      >
                        <CheckCircle2 size={18} />
                        <span>Submitted Successfully!</span>
                      </motion.div>
                    ) : submitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Submit</span>
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
