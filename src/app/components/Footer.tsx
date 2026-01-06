import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <span className="text-white/30">|</span>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
          <p className="text-white/50 text-sm">
            © 2026 GetEducate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
