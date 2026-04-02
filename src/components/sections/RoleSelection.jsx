import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Users, ArrowRight } from 'lucide-react';

export default function RoleSelection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative z-10 pt-16 md:pt-24 pb-12 w-full max-w-6xl mx-auto px-6 lg:px-8">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight uppercase">
          Choose Your Path
        </h2>
        {/* THE FIX: Removed 'uppercase' class from the header description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-2xl mx-auto tracking-wide px-4">
          Our AI adapts to exactly what you need. Select how you want to sign in to get a tailored platform experience.
        </p>
      </motion.div>

      {/* Cards Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row gap-4 md:gap-8 w-full"
      >
        {/* STUDENT CARD */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.02, translateY: -5 }}
          className="w-10/12 sm:w-8/12 mx-auto md:w-1/3 md:mx-0"
        >
          <Link to="/signup" className="block h-full bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group">
             <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-blue-600">
                <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
             </div>
             <h3 className="text-base md:text-xl font-bold text-slate-900 mb-1.5 md:mb-3 uppercase tracking-wide">Student</h3>
             {/* THE FIX: Removed 'uppercase' class from the description paragraph */}
             <p className="text-slate-500 mb-4 md:mb-8 text-[11px] md:text-sm leading-snug md:leading-relaxed">
               Discover your strengths, explore industries, and map out a step-by-step trajectory to your dream career.
             </p>
             <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wide flex items-center gap-2 text-[11px] md:text-sm">
               Continue as Student <span>→</span>
             </div>
          </Link>
        </motion.div>

        {/* MENTOR CARD */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.02, translateY: -5 }}
          className="w-10/12 sm:w-8/12 mx-auto md:w-1/3 md:mx-0"
        >
          <Link to="/signup" className="block h-full bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group">
             <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-purple-600">
                <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
             </div>
             <h3 className="text-base md:text-xl font-bold text-slate-900 mb-1.5 md:mb-3 uppercase tracking-wide">Mentor</h3>
             {/* THE FIX: Removed 'uppercase' class from the description paragraph */}
             <p className="text-slate-500 mb-4 md:mb-8 text-[11px] md:text-sm leading-snug md:leading-relaxed">
               Share your industry expertise, guide the next generation, and give back to the professional community.
             </p>
             <div className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors uppercase tracking-wide flex items-center gap-2 text-[11px] md:text-sm">
               Continue as Mentor <span>→</span>
             </div>
          </Link>
        </motion.div>

        {/* PARENT CARD */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.02, translateY: -5 }}
          className="w-10/12 sm:w-8/12 mx-auto md:w-1/3 md:mx-0"
        >
          <Link to="/signup" className="block h-full bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group">
             <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-emerald-600">
                <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
             </div>
             <h3 className="text-base md:text-xl font-bold text-slate-900 mb-1.5 md:mb-3 uppercase tracking-wide">Parent</h3>
             {/* THE FIX: Removed 'uppercase' class from the description paragraph */}
             <p className="text-slate-500 mb-4 md:mb-8 text-[11px] md:text-sm leading-snug md:leading-relaxed">
               Track your child's progress, understand their natural aptitudes, and support them with data-driven insights.
             </p>
             <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-wide flex items-center gap-2 text-[11px] md:text-sm">
               Continue as Parent <span>→</span>
             </div>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}