'use client';
import React from 'react';

export default function TopAnnouncement() {
  const items = Array(8).fill("WE ARE AVAILABLE FOR DECEMBER PROJECTS");

  return (
    <div className="w-full bg-[#111111] text-white py-2.5 overflow-hidden border-b border-gray-800 text-xs font-mono tracking-widest uppercase relative z-50">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {items.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-[#7cff00] font-bold">
              <span className="arrow-pulse-1">▶</span>
              <span className="arrow-pulse-2">▶</span>
              <span className="arrow-pulse-3">▶</span>
            </div>
            <span>{text}</span>
            <div className="flex items-center gap-1 text-[#7cff00] font-bold">
              <span className="arrow-pulse-3">◀</span>
              <span className="arrow-pulse-2">◀</span>
              <span className="arrow-pulse-1">◀</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
