import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AppShowcase() {
  // We use a ref to track this specific section's position on the screen
  const containerRef = useRef(null);

  // useScroll tracks the scroll progress of our container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"] 
    // "start end" = animation starts when top of container hits bottom of viewport
    // "end end" = animation ends when bottom of container hits bottom of viewport
  });

  // We map the scroll progress (0 to 1) to visual properties
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);

  return (
    // The container is 200vh so we have plenty of room to scroll while the animation plays
    <section ref={containerRef} className="relative h-[200vh] w-full">
      
      {/* Sticky wrapper keeps the app window in the center of the screen while we scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 lg:px-12">
        
        <motion.div 
          style={{ scale, opacity, y }}
          className="relative w-full max-w-6xl aspect-[16/9] rounded-2xl md:rounded-[2rem] border border-white/40 bg-white/30 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Top Window Bar (Mac OS style) */}
          <div className="h-12 w-full bg-white/40 border-b border-white/30 flex items-center px-6 gap-2 backdrop-blur-md z-20">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="mx-auto text-xs font-semibold text-slate-500 tracking-wider">AI CAREER MAPPING DASHBOARD</div>
          </div>

          {/* Inner Dashboard UI Mockup */}
          <div className="flex-1 flex w-full relative bg-slate-50/50">
            
            {/* Fake Sidebar */}
            <div className="hidden md:flex flex-col w-64 border-r border-slate-200/50 p-6 gap-4">
              <div className="h-8 w-3/4 bg-blue-100 rounded-md"></div>
              <div className="h-4 w-1/2 bg-slate-200 rounded-md mt-4"></div>
              <div className="h-4 w-2/3 bg-slate-200 rounded-md"></div>
              <div className="h-4 w-1/2 bg-slate-200 rounded-md"></div>
            </div>

            {/* Fake Main Content Area (Skill Trajectory) */}
            <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center relative">
              
              {/* Central AI Node */}
              <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-3xl shadow-lg flex items-center justify-center z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-4xl text-white">✨</span>
              </div>

              {/* Connecting Lines & Skill Nodes */}
              <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-blue-200/50 -rotate-45"></div>
              <div className="absolute top-[20%] left-[20%] px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-sm font-bold text-slate-600">Analytical Skills</div>

              <div className="absolute top-1/4 right-1/4 w-32 h-1 bg-sky-200/50 rotate-45"></div>
              <div className="absolute top-[20%] right-[20%] px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-sm font-bold text-slate-600">Creative Design</div>

              <div className="absolute bottom-1/4 w-1 h-32 bg-gradient-to-b from-blue-400 to-transparent"></div>
              
              <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Analyzing Student Profile...</h3>
                <p className="text-slate-500">Mapping strengths to future industry demands.</p>
              </div>

            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}