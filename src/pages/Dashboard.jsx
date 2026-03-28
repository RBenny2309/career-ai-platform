import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Map, 
  BrainCircuit, 
  Video, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  CheckCircle2,
  TrendingUp,
  Award,
  Lock // <-- Fixed: Moved Lock import up here
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* ========================================= */}
      {/* SIDEBAR                                   */}
      {/* ========================================= */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col justify-between fixed h-screen z-20">
        <div>
          {/* Logo */}
          <div className="h-20 flex items-center px-8 border-b border-slate-100 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg flex items-center justify-center shadow-md mr-3">
              <span className="text-white text-sm">🤖</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">Harmony</span>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 space-y-1">
            <NavItem icon={LayoutDashboard} label="Dashboard" active />
            <NavItem icon={Map} label="Career Roadmap" />
            <NavItem icon={BrainCircuit} label="AI Insights" />
            <NavItem icon={Video} label="Mentorship" />
            <NavItem icon={Settings} label="Settings" />
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all font-semibold"
          >
            <LogOut size={20} className="mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ========================================= */}
      {/* MAIN CONTENT AREA                         */}
      {/* ========================================= */}
      <main className="flex-1 md:ml-64 p-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back, Alex! 👋</h1>
            <p className="text-slate-500 font-medium mt-1">Here is what your AI career counselor has mapped out for you today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search skills..." 
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 shadow-sm"
              />
            </div>
            <button className="relative p-2.5 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-white shadow-sm cursor-pointer"></div>
          </div>
        </header>

        {/* ========================================= */}
        {/* BENTO BOX GRID                            */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Primary AI Goal Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-gradient-to-br from-blue-600 to-sky-400 rounded-3xl p-8 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-white/30">Target Role</span>
                <h2 className="text-3xl font-extrabold mb-2">Full-Stack AI Engineer</h2>
                <p className="text-blue-50 max-w-md font-medium">Your current skills in React, Node.js, and MongoDB match 65% of requirements for this role. Let's close the gap.</p>
              </div>
              
              <div className="mt-8">
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Overall Readiness</span>
                  <span>65%</span>
                </div>
                <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="h-full bg-white rounded-full w-[65%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Next Mentorship Session */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col"
          >
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Video size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Upcoming Session</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">System Architecture Review</p>
            
            <div className="mt-auto bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Senior Cloud Architect, AWS</p>
                </div>
              </div>
              <button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-colors">
                Join Call (In 2h)
              </button>
            </div>
          </motion.div>

          {/* 3. AI Recommended Milestones */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <BrainCircuit className="text-blue-500" />
                AI Recommended Path
              </h3>
              <button className="text-sm font-bold text-blue-500 hover:underline">View Full Map</button>
            </div>

            <div className="space-y-4">
              <MilestoneItem title="Master Advanced Data Structures" category="Computer Science" status="completed" />
              <MilestoneItem title="Build a full-stack MERN application" category="Project Based Learning" status="in-progress" />
              <MilestoneItem title="Introduction to Data Science concepts" category="Analytics" status="locked" />
            </div>
          </motion.div>

          {/* 4. Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm grid grid-rows-2 gap-4"
          >
            <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-md shadow-emerald-500/20">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Growth Score</p>
                <p className="text-2xl font-extrabold text-slate-800">842</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-md shadow-orange-500/20">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-0.5">Badges Earned</p>
                <p className="text-2xl font-extrabold text-slate-800">12</p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function NavItem({ icon: Icon, label, active }) {
  return (
    <a href="#" className={`flex items-center px-4 py-3 rounded-xl transition-all font-semibold ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}>
      <Icon size={20} className="mr-3" />
      {label}
    </a>
  );
}

function MilestoneItem({ title, category, status }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        {status === 'completed' && <CheckCircle2 className="text-emerald-500" size={24} />}
        {status === 'in-progress' && <div className="w-6 h-6 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>}
        {status === 'locked' && <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center"><Lock size={12} className="text-slate-400" /></div>}
        
        <div>
          <p className={`font-bold text-sm ${status === 'locked' ? 'text-slate-400' : 'text-slate-800'}`}>{title}</p>
          <p className="text-xs font-medium text-slate-500">{category}</p>
        </div>
      </div>
      <button className="opacity-0 group-hover:opacity-100 px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm transition-opacity">
        View
      </button>
    </div>
  );
}