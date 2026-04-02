import React from 'react';
import { motion } from 'framer-motion';

export const ShinyOverlay = () => (
  <>
    {/* Glowing Border Ring */}
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)_inset] transition-all duration-300 pointer-events-none z-20" />
    {/* Sweeping Light Beam (Sped up to 0.7s for a snappier feel) */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20 pointer-events-none"
      initial={{ x: '-150%' }}
      whileHover={{ x: '150%' }}
      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
    />
  </>
);