export default function Footer() {
  return (
    <footer className="relative z-10 w-full pt-16 pb-8 px-6 lg:px-12 border-t border-white/40 bg-white/10 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🤖</span>
          <span className="text-xl font-extrabold text-slate-800 tracking-tight">Harmony & Chapters</span>
        </div>

        {/* Simple Links */}
        <div className="flex gap-6 text-sm font-semibold text-slate-500">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact Support</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-400 font-medium">
          © {new Date().getFullYear()} All rights reserved.
        </div>

      </div>
    </footer>
  );
}