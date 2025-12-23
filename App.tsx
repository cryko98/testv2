
import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import XLogo from './components/XLogo';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const caAddress = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  const handleCopy = () => {
    navigator.clipboard.writeText(caAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
      <StarBackground />

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full z-0"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Site Name Header */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent opacity-90">
          testv2
        </h1>

        {/* Rotating Logo */}
        <div className="relative group cursor-pointer mb-8">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-700"></div>
          <img 
            src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/logo%20-%202025-12-23T055827.325.png" 
            alt="Space Logo" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl animate-slow-spin relative z-10 border border-white/10"
          />
        </div>

        {/* Contract Address Section */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div 
            onClick={handleCopy}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all active:scale-95 cursor-pointer group"
          >
            <span className="text-sm md:text-lg font-mono text-gray-400 group-hover:text-white transition-colors">
              ca: <span className="text-white font-bold">{caAddress}</span>
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-colors ${copied ? 'text-green-400' : 'text-gray-500 group-hover:text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              )}
            </svg>
          </div>
          {copied && <span className="text-xs text-green-400 animate-pulse">Address copied to clipboard!</span>}
        </div>

        {/* Social Link */}
        <a 
          href="https://x.com/i/communities/2003309357401084152" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-white text-black rounded-full hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
        >
          <XLogo className="w-6 h-6" />
        </a>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 z-10 text-white/20 text-xs tracking-widest uppercase">
        Explore the digital void &copy; 2025 testv2
      </footer>
    </div>
  );
};

export default App;
