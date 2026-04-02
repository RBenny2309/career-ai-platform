import { motion } from 'framer-motion';
import { BrainCircuit, Video, LineChart, Map } from 'lucide-react';
import { ShinyOverlay } from '../ui/ShinyOverlay'; // 👉 Import our new reusable effect!

const features = [
  { id: 1, title: 'AI Skill Mapping', desc: 'Our proprietary AI analyzes your academic history, hobbies, and natural aptitudes to suggest high-growth career paths.', icon: BrainCircuit, color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 2, title: 'Live Mentorship', desc: 'Book 1-on-1 video sessions with vetted industry professionals to get real-world guidance and advice.', icon: Video, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  { id: 3, title: 'Parent Analytics', desc: 'Keep track of milestones, session feedback, and career readiness scores in real-time.', icon: LineChart, color: 'text-purple-500', bg: 'bg-purple-100' },
  { id: 4, title: 'Dynamic Career Roadmaps', desc: 'Stop guessing. Get a step-by-step visual roadmap from your current grade all the way to your first day on the job.', icon: Map, color: 'text-orange-500', bg: 'bg-orange-100' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } }
};

export default function Features() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Everything you need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Future Success</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }} // Snappy lift
                className="group relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 flex flex-col md:flex-row items-start gap-6 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                {/* 👇 The magic drop-in shiny effect */}
                <ShinyOverlay /> 
                
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={feature.color} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}