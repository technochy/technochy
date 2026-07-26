'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const TwitterIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const DribbbleIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 18.5"></path>
  </svg>
);

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ethan Brooks',
      role: 'Founder & Lead Architect',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      socials: { twitter: '#', linkedin: '#', github: '#' },
      stagger: false,
    },
    {
      id: 2,
      name: 'Liam Anderson',
      role: 'Brand Identity & UI Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      socials: { twitter: '#', linkedin: '#', dribbble: '#' },
      stagger: true,
    },
    {
      id: 3,
      name: 'Ethan Walker',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      socials: { twitter: '#', linkedin: '#', github: '#' },
      stagger: false,
    },
    {
      id: 4,
      name: 'Mason Cole',
      role: 'Lead UI/UX Engineer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      socials: { twitter: '#', linkedin: '#', dribbble: '#' },
      stagger: true,
    },
    {
      id: 5,
      name: 'Noah Reed',
      role: 'Senior Product Designer',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      socials: { twitter: '#', linkedin: '#', github: '#' },
      stagger: true,
    },
  ];

  return (
    <section id="team" className="w-full py-24 bg-[#f3f3f3] bg-grid-pattern border-b border-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#181818] text-white px-3.5 py-1 rounded-none border border-black mb-3">
            <span className="w-2 h-2 bg-[#0088ff] animate-pulse"></span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              OUR CREATIVE TEAM
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] font-sans tracking-tight uppercase">
            The Minds Behind the Work
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base mt-3">
            Meet the engineers, designers, and strategists crafting next-generation digital products at Technochy.
          </p>
        </div>

        {/* Team Grid Container (3-Column Balanced Staggered Layout for 5 Members + 1 CTA Card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative bg-gradient-to-b from-[#f9f9f9] to-[#ededef] rounded-[28px] border border-gray-200/90 shadow-md hover:shadow-2xl overflow-hidden group transition-all duration-500 flex flex-col justify-between ${
                member.stagger ? 'lg:mt-10' : 'lg:mt-0'
              }`}
            >

              {/* Background Top-Left 8-Bit Pixel Mosaic Art (Blue ↔ White Hover Toggle) */}
              <div className="absolute top-3 left-3 z-10 flex flex-col items-start opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="flex">
                  <div className="w-4 h-4 bg-[#0088ff] border border-black/10 transition-all duration-300 hover:bg-white hover:scale-125 cursor-pointer"></div>
                  <div className="w-4 h-4 bg-white border border-gray-300 transition-all duration-300 hover:bg-[#0088ff] hover:scale-125 cursor-pointer"></div>
                </div>
                <div className="flex">
                  <div className="w-4 h-4 bg-white border border-gray-300 transition-all duration-300 hover:bg-[#0088ff] hover:scale-125 cursor-pointer"></div>
                </div>
              </div>

              {/* Member Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden pt-4 px-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top rounded-2xl filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Bottom Name & Socials Card Container */}
              <div className="p-3 sm:p-4 relative z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 text-center border border-gray-200/80 shadow-md group-hover:shadow-xl group-hover:border-[#0088ff]/40 transition-all duration-300">
                  
                  {/* Name & Role */}
                  <h3 className="text-lg font-extrabold text-[#111111] font-sans tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans font-medium mt-0.5">
                    {member.role}
                  </p>

                  {/* Social Profile Icons (Reveals Smoothly on Hover!) */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 overflow-hidden flex items-center justify-center gap-2">
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#0088ff] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-sm"
                        title="Twitter / X"
                      >
                        <TwitterIcon size={14} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#0088ff] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-sm"
                        title="LinkedIn"
                      >
                        <LinkedinIcon size={14} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#0088ff] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-sm"
                        title="GitHub"
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                    {member.socials.dribbble && (
                      <a
                        href={member.socials.dribbble}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#0088ff] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-sm"
                        title="Dribbble"
                      >
                        <DribbbleIcon size={14} />
                      </a>
                    )}
                  </div>

                </div>
              </div>

            </motion.div>
          ))}

          {/* 8th Card: "We're Searching For Talents" CTA Card (Exact Match to Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative bg-gradient-to-br from-[#1b1b1e] via-[#141417] to-[#0c0c0e] border border-gray-800 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#0088ff] transition-all duration-500 lg:mt-10 min-h-[380px] group"
          >
            {/* Grid Pattern Effect in Dark Card */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-[28px] pointer-events-none"></div>

            <div>
              {/* Green/Blue Square Badge */}
              <div className="w-3.5 h-3.5 bg-[#0088ff] rounded-sm shadow-[0_0_10px_#0088ff] mb-6 animate-pulse"></div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight leading-snug">
                We're Searching For Talents
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed mt-4">
                Join our team of creatives pushing boundaries & experimenting with high-impact software, AI systems, and design language.
              </p>
            </div>

            {/* Apply Now Button */}
            <div className="pt-8">
              <a
                href="#contact"
                className="w-full bg-[#222226] group-hover:bg-[#0088ff] text-white rounded-xl py-3.5 px-5 flex items-center justify-between font-mono text-xs font-bold tracking-wider transition-all duration-300 border border-white/10 group-hover:border-[#0088ff] group-hover:shadow-[0_0_20px_rgba(0,136,255,0.4)]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#0088ff] group-hover:bg-white text-white group-hover:text-[#0088ff] flex items-center justify-center transition-colors">
                    <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                  </div>
                  <span>Apply Now</span>
                </div>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
