import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-white tracking-[0.3em] font-light text-lg">
          GET EDUCATE
        </div>
        <nav className="flex items-center gap-2">
          <a 
            href="#" 
            className="text-white/90 text-sm px-5 py-2.5 rounded-md hover:bg-white/10 transition-all duration-300 hover:text-white"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-white/90 text-sm px-5 py-2.5 rounded-md hover:bg-white/10 transition-all duration-300 hover:text-white"
          >
            Our Mission
          </a>
          <a 
            href="#" 
            className="text-white/90 text-sm px-5 py-2.5 rounded-md hover:bg-white/10 transition-all duration-300 hover:text-white border border-white/20"
          >
            Career
          </a>
        </nav>
      </div>
    </header>
  );
}
