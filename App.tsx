
import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import XLogo from './components/XLogo';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const caAddress = "8egqa9EEuTRBE57vhLTrMz464nrW7ygsoqZPHMWpump";
  const ticker = "$testv2";

  const handleCopy = () => {
    navigator.clipboard.writeText(caAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden bg-black">
      <StarBackground />

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-blue-600/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-4 w-full flex-grow justify-center">
        {/* Rotating Logo - Large size */}
        <div className="relative flex justify-center items-center scale-110 md:scale-125 transition-transform duration-700">
          <img 
            src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/logo%20-%202025-12-23T055827.325.png" 
            alt="Space Logo" 
            className="w-64 h-64 md:w-[480px] md:h-[480px] object-contain animate-slow-spin relative z-10 select-none pointer-events-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          />
        </div>
      </main>

      {/* Redesigned Footer with X Logo, Ticker, and CA */}
      <footer className="relative z-20 w-full bg-black/40 backdrop-blur-md border-t border-white/5 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Ticker Section */}
          <div className="flex items-center gap-4">
            <span className="text-2xl md:text-3xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              {ticker}
            </span>
          </div>

          {/* CA Section */}
          <div 
            onClick={handleCopy}
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-all"
          >
            <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-tight">Contract:</span>
            <span className="text-xs md:text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
              {copied ? 'COPIED!' : caAddress}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ${copied ? 'text-green-400' : 'text-gray-500 group-hover:text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/i/communities/2003309357401084152" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 bg-white text-black rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-95"
              aria-label="X Community"
            >
              <XLogo className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
