import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full pt-16 pb-8 px-6 lg:px-12 border-t border-white/40 bg-white/10 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          {/* Added TrendingUp icon to match the branding on the Sign In / Sign Up pages */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20">
            <TrendingUp className="text-white w-4 h-4" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-extrabold text-slate-800 tracking-tight">Harmony & Chapters</span>
        </div>

        {/* Simple Links */}
        <div className="flex gap-6 text-sm font-semibold text-slate-500">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact Support</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-400 font-medium">
          © {new Date().getFullYear()} All rights reserved.
        </div>

      </div>
    </footer>
  );
}