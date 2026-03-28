import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const cloudUrl = "url('https://www.vovy.ai/cloud.png')";

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      
      {/* ========================================================= */}
      {/* LEVEL 2: DENSE HERO CLOUD OVERLAY SYSTEM (10 LAYERS)      */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden">
        
        {/* Layer 1: Massive bottom-left anchor */}
        <div 
          className="absolute bottom-[-25%] left-[-15%] w-[1200px] h-[700px] bg-no-repeat bg-center bg-contain opacity-20 blur-2xl animate-float-slower"
          style={{ backgroundImage: cloudUrl }}
        />
        
        {/* Layer 2: Massive mid-right filler */}
        <div 
          className="absolute top-[15%] right-[-20%] w-[1000px] h-[600px] bg-no-repeat bg-center bg-contain opacity-15 blur-3xl animate-float-slow"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 3: Distant top-left wisp */}
        <div 
          className="absolute top-[-5%] left-[10%] w-[500px] h-[300px] bg-no-repeat bg-center bg-contain opacity-25 blur-xl animate-float-slow"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 4: Center-right cloud */}
        <div 
          className="absolute top-[40%] right-[10%] w-[600px] h-[400px] bg-no-repeat bg-center bg-contain opacity-35 blur-lg animate-float-slow"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 5: Left-side distinct cloud */}
        <div 
          className="absolute top-[25%] left-[-5%] w-[550px] h-[350px] bg-no-repeat bg-center bg-contain opacity-30 blur-md animate-float-fast"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 6: Lower-center background filler */}
        <div 
          className="absolute bottom-[15%] left-[30%] w-[800px] h-[500px] bg-no-repeat bg-center bg-contain opacity-20 blur-2xl animate-float-slower"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 7: Bottom-left overlapping the previous */}
        <div 
          className="absolute bottom-[-10%] left-[5%] w-[650px] h-[400px] bg-no-repeat bg-center bg-contain opacity-45 blur-[3px] animate-float-fast"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 8: Top-right edge cloud */}
        <div 
          className="absolute top-[-10%] right-[5%] w-[450px] h-[300px] bg-no-repeat bg-center bg-contain opacity-40 blur-[4px] animate-float-fast"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 9: Far-right low cloud */}
        <div 
          className="absolute bottom-[20%] right-[-10%] w-[500px] h-[350px] bg-no-repeat bg-center bg-contain opacity-35 blur-[5px] animate-float-slow"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Layer 10: Center-top distinct wisp */}
        <div 
          className="absolute top-[10%] left-[40%] w-[350px] h-[200px] bg-no-repeat bg-center bg-contain opacity-30 blur-[2px] animate-float-fast"
          style={{ backgroundImage: cloudUrl }}
        />

        {/* Dense fog floor anchoring the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white/90 via-white/60 to-transparent opacity-100 z-1" />
      </div>

      {/* ========================================================= */}
      {/* HERO CONTENT (LOCKED AT z-10 ABOVE CLOUDS)                  */}
      {/* ========================================================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex flex-col justify-center items-start gap-6 text-left mt-[-5vh]">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Your <br/> True <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9]">
              Career Trajectory
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-800 max-w-lg leading-relaxed font-semibold bg-white/20 backdrop-blur-[2px] p-4 rounded-2xl shadow-sm border border-white/40"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Guided AI analysis that takes you from confusion to clarity. Join as a student, mentor, or parent to map out the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link 
              to="/signin" 
              className="px-8 py-4 bg-[#3b82f6] text-white text-center font-bold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all z-20"
            >
              Start Your Journey
            </Link>
            <button className="px-8 py-4 bg-white/70 text-slate-800 font-bold rounded-full hover:bg-white/90 backdrop-blur-md border border-white/80 transition-all shadow-sm z-20">
              See How It Works
            </button>
          </motion.div>
        </div>{/* RIGHT SIDE: Visual/Robot */}
        <div className="flex justify-center items-center relative h-full w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            // SHIFTED UP: Added -mt-24 (mobile) and lg:-mt-32 (desktop) to push the robot into the empty space
            className="animate-float-slow relative z-10 -mt-24 lg:-mt-32 w-full flex justify-center"
          >
            {/* 👉 Place your image path here! */}
            <img 
              src="/public/robo.png" 
              alt="AI Mascot" 
              // FIX: Added -scale-x-100 to horizontally flip the image!
              className="w-full max-w-[450px] lg:max-w-[550px] object-contain -scale-x-100" 
              style={{ 
                // COLOR FIX: hue-rotate(210deg) pushes the cyan towards blue to match the background
                // saturate(1.2) gives it a slight pop
                filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.15)) hue-rotate(210deg) saturate(1.2)' 
              }}
            />
          </motion.div>
          
          {/* Subtle blue glow behind the robot to blend it perfectly with the sky */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#3b82f6]/15 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs mb-2 uppercase tracking-widest font-extrabold text-slate-600/90">Scroll to Explore</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-slate-500/90 to-transparent rounded-full shadow-md" />
      </motion.div>

    </section>
  );
}