import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, ArrowRight } from 'lucide-react';

const roles = [
  {
    id: 'student',
    title: 'Student',
    description: 'Discover your strengths, explore industries, and map out a step-by-step trajectory to your dream career.',
    icon: GraduationCap,
    color: 'from-blue-400 to-sky-300',
    shadow: 'hover:shadow-blue-500/20'
  },
  {
    id: 'mentor',
    title: 'Mentor',
    description: 'Share your industry expertise, guide the next generation, and give back to the professional community.',
    icon: Briefcase,
    color: 'from-green-400 to-emerald-300',
    shadow: 'hover:shadow-green-500/20'
  },
  {
    id: 'parent',
    title: 'Parent',
    description: 'Track your child\'s progress, understand their natural aptitudes, and support them with data-driven insights.',
    icon: Users,
    color: 'from-purple-400 to-fuchsia-300',
    shadow: 'hover:shadow-purple-500/20'
  }
];

export default function RoleSelection() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Our AI adapts to exactly what you need. Select how you want to sign in to get a tailored platform experience.
          </motion.p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 flex flex-col items-start transition-all duration-300 shadow-lg ${role.shadow} cursor-pointer overflow-hidden`}
              >
                {/* Background Hover Gradient Blob */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${role.color} rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} strokeWidth={2.5} />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{role.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {role.description}
                </p>

                {/* CTA Link */}
                <div className="flex items-center text-slate-800 font-bold group-hover:text-blue-500 transition-colors mt-auto">
                  Continue as {role.title} 
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}