import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, BarChart, Settings, LogOut, Bell, Search, Video, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MentorDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => { navigate("/"); };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col justify-between fixed h-screen z-20">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-slate-100 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center shadow-md mr-3">
              <span className="text-white text-sm">💼</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">Harmony Pro</span>
          </div>
          <nav className="px-4 space-y-1">
            <NavItem icon={Calendar} label="My Schedule" active color="text-emerald-600" bg="bg-emerald-50" />
            <NavItem icon={Users} label="My Students" />
            <NavItem icon={BarChart} label="Impact Metrics" />
            <NavItem icon={Settings} label="Settings" />
          </nav>
        </div>
        <div className="p-4 border-t border-slate-100">
          <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all font-semibold">
            <LogOut size={20} className="mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome, Mentor Sarah!</h1>
            <p className="text-slate-500 font-medium mt-1">You have 2 sessions scheduled for today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2.5 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 border-2 border-white shadow-sm cursor-pointer"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Next Session */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-teal-400 rounded-3xl p-8 text-white shadow-lg shadow-emerald-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-white/30">Up Next</span>
                <h2 className="text-3xl font-extrabold mb-2">System Architecture with Alex</h2>
                <p className="text-emerald-50 max-w-md font-medium">Alex is working on a MERN stack project and requested a code review of their backend structure.</p>
              </div>
              <div className="mt-8 flex gap-4">
                 <button className="px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl shadow-sm hover:scale-105 transition-all flex items-center gap-2">
                   <Video size={20} /> Join Call
                 </button>
                 <button className="px-6 py-3 bg-emerald-500/50 text-white font-bold rounded-xl border border-emerald-400 hover:bg-emerald-500/70 transition-all">
                   View Alex's Profile
                 </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm grid grid-rows-2 gap-4">
            <div className="flex items-center gap-4 bg-yellow-50 p-4 rounded-2xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-md shadow-yellow-500/20">
                <Star size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-0.5">Rating</p>
                <p className="text-2xl font-extrabold text-slate-800">4.9/5.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md shadow-blue-500/20">
                <Users size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">Active Students</p>
                <p className="text-2xl font-extrabold text-slate-800">14</p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, active, color, bg }) {
  return (
    <a href="#" className={`flex items-center px-4 py-3 rounded-xl transition-all font-semibold ${active ? `${bg} ${color}` : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}>
      <Icon size={20} className="mr-3" /> {label}
    </a>
  );
}