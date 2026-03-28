import { motion } from 'framer-motion';
import { BrainCircuit, Map, Video, LineChart } from 'lucide-react';

const features = [
  {
    title: "AI Skill Mapping",
    description: "Our proprietary AI analyzes your academic history, hobbies, and natural aptitudes to suggest high-growth career paths.",
    icon: BrainCircuit,
    colSpan: "col-span-1 md:col-span-2", // Spans 2 columns on desktop
    gradient: "from-blue-500/10 to-sky-400/10",
    iconColor: "text-blue-500",
  },
  {
    title: "Live Mentorship",
    description: "Book 1-on-1 video sessions with vetted industry professionals.",
    icon: Video,
    colSpan: "col-span-1",
    gradient: "from-green-500/10 to-emerald-400/10",
    iconColor: "text-green-500",
  },
  {
    title: "Parent Analytics",
    description: "Keep track of milestones, session feedback, and career readiness scores in real-time.",
    icon: LineChart,
    colSpan: "col-span-1",
    gradient: "from-purple-500/10 to-fuchsia-400/10",
    iconColor: "text-purple-500",
  },
  {
    title: "Dynamic Career Roadmaps",
    description: "Stop guessing. Get a step-by-step visual roadmap from your current grade all the way to your first day on the job.",
    icon: Map,
    colSpan: "col-span-1 md:col-span-2",
    gradient: "from-orange-500/10 to-amber-400/10",
    iconColor: "text-orange-500",
  }
];

export default function Features() {
  return (
    <section className="relative w-full py-24 px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Everything you need for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
              Future Success
            </span>
          </motion.h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className={`relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 flex flex-col items-start transition-all overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 ${feature.colSpan}`}
              >
                {/* Soft background gradient inside the card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 ${feature.iconColor}`}>
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}