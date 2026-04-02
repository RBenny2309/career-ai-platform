import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// Moved static data outside the component to prevent unnecessary re-creations on render
const TABS = [
  { id: 'student', label: 'Student Dashboard', image: '/cc.jpeg' },
  { id: 'mentor', label: 'Mentor Dashboard', image: '/bb.jpeg' },
  { id: 'parent', label: 'Parent Dashboard', image: '/aa.jpeg' },
];

export default function AppShowcase() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('student');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"] 
  });

  // Spring physics for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // Snappy animation mapping
  const scale = useTransform(smoothProgress, [0, 0.4], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [80, 0]);

  // Safe fallback to prevent crashes if state goes out of sync
  const currentTab = TABS.find(t => t.id === activeTab) || TABS[0];

  return (
    <div className="relative z-10 pb-24 md:pb-32">
      {/* THE FIX: Wrapper div above creates bottom padding (pb-24 md:pb-32) to physically push the next section down and prevent overlap */}
      <section 
        ref={containerRef} 
        className="relative h-[120vh] w-full z-20"
        style={{ position: 'relative' }} 
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 lg:px-12 pointer-events-none">
          
          <motion.div 
            style={{ 
              scale, 
              opacity, 
              y,
              willChange: "transform, opacity" 
            }}
            className="relative w-full max-w-6xl aspect-[16/9] rounded-2xl md:rounded-[2rem] border border-white/40 bg-white/30 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
          >
            {/* Top Window Bar (Mac OS style) */}
            <div className="w-full py-3 bg-white/40 border-b border-white/30 flex items-center px-4 md:px-6 justify-between backdrop-blur-md z-20">
              
              {/* Left Mac Buttons */}
              <div className="flex gap-2 w-[60px]">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              {/* Interactive Toggle Tabs */}
              <div className="flex space-x-2 md:space-x-4 bg-white/50 p-1.5 rounded-full shadow-sm">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-sm font-bold transition-all ${
                      activeTab === tab.id 
                        ? 'bg-[#3b82f6] text-white shadow-md scale-105' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Right spacer to keep the tabs perfectly centered */}
              <div className="w-[60px]"></div> 
            </div>

            {/* Dashboard Image Display Area */}
            <div className="flex-1 w-full bg-slate-100 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab} 
                  src={currentTab.image}
                  alt={`${activeTab} dashboard preview`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>

          </motion.div>
          
        </div>
      </section>
    </div>
  );
}