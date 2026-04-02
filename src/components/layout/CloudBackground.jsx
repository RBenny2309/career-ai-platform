import React from 'react';

export function SkyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* 1. Main Sky Background (Spans the entire page) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/clud-bg.webp')" 
        }}
      />
      
      {/* 2. Cloud Overlay (Positioned at the bottom/center and spans the background) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat mix-blend-normal animate-float-slow"
        style={{ 
          backgroundImage: "url('/cloud.png')" 
        }}
      />

      {/* 3. Optional: A second duplicate cloud layer slightly offset to give it a parallax/3D floating effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat opacity-50 mix-blend-overlay animate-float-slower scale-110"
        style={{ 
          backgroundImage: "url('/cloud.png')" 
        }}
      />

    </div>
  );
}

// Export as default as well, so Home.jsx doesn't throw an error!
export default SkyBackground;