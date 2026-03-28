import React from 'react';
import Hero from '../components/sections/Hero';
import AppShowcase from '../components/sections/AppShowcase';
import RoleSelection from '../components/sections/RoleSelection';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans antialiased overflow-x-hidden text-slate-900">
      
      {/* ========================================================= */}
      {/* LEVEL 1: GLOBAL BACKGROUND (Soft Sky, Fixed to viewport)  */}
      {/* ========================================================= */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-[#F0F8FF]"
        style={{ 
          backgroundImage: "url('https://api.vcodinator.com/storage/v1/object/public/vovy_assets/skybgmain.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* MAIN CONTENT LAYER */}
      <main className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        <AppShowcase />
        <RoleSelection />
        <Features />
        <CTA />
        <Footer />
      </main>

    </div>
  );
}