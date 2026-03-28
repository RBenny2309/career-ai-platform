import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO IN TOP LEFT */}
        <div className="flex items-center gap-2">
          {/* We'll use your 🤖 emoji placeholder as a logo icon */}
          <span className="text-2xl">🤖</span>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">career.ai</span>
        </div>

        {/* Basic Nav Links & CTA */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-700 hover:text-slate-950 font-medium">How it works</a>
          <a href="#" className="text-slate-700 hover:text-slate-950 font-medium">For Parents</a>
          <button className="px-5 py-2.5 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-transform">
            Start Journey
          </button>
        </div>
      </div>
    </nav>
  );
}