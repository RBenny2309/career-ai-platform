import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 z-10 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden"
      >
        {/* Subtle glowing orb inside the CTA card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Ready to map your <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
            true potential?
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
          Join thousands of students, mentors, and parents building a clearer, data-driven path to the future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-5 bg-blue-500 text-white text-lg font-bold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all">
            Create Free Account
          </button>
        </div>
      </motion.div>
    </section>
  );
}