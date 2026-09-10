import React from 'react';

interface GogoLogLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'mark-only';
  showTagline?: boolean;
  className?: string;
  glow?: boolean;
}

export const GogoLogLogo: React.FC<GogoLogLogoProps> = ({
  size = 'md',
  variant = 'full',
  showTagline = true,
  className = '',
  glow = true,
}) => {
  // Dimension definitions
  const dimensions = {
    xs: { icon: 28, fullH: 32 },
    sm: { icon: 36, fullH: 40 },
    md: { icon: 44, fullH: 48 },
    lg: { icon: 56, fullH: 60 },
    xl: { icon: 72, fullH: 80 },
  }[size];

  // If icon-only variant
  if (variant === 'icon' || variant === 'mark-only') {
    return (
      <div 
        className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        {glow && (
          <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-md -z-10 animate-pulse [animation-duration:3s]" />
        )}
        <svg 
          viewBox="0 0 240 240" 
          fill="none" 
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberGGradient_comp" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="35%" stopColor="#00E5FF" />
              <stop offset="70%" stopColor="#0072FF" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="innerSheetGrad_comp" x1="85" y1="85" x2="165" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0e1726" />
              <stop offset="100%" stopColor="#060913" />
            </linearGradient>
            <linearGradient id="penGradient_comp" x1="160" y1="30" x2="185" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0072FF" />
            </linearGradient>
          </defs>

          {/* Outer Stylized "G" Loop */}
          <path 
            d="M 148 44 C 139 41 129 39 120 39 C 75.26 39 39 75.26 39 120 C 39 164.74 75.26 201 120 201 C 164.74 201 201 164.74 201 120 C 201 108 198.5 96.5 194 86 L 165 101 C 167 107 168 113.4 168 120 C 168 146.51 146.51 168 120 168 C 93.49 168 72 146.51 72 120 C 72 93.49 93.49 72 120 72 C 128.5 72 136.5 74.2 143.5 78 Z" 
            fill="url(#cyberGGradient_comp)" 
          />

          {/* Pen Nib */}
          <g>
            <path d="M 172 32 L 194 54 L 176 72 L 154 50 Z" fill="url(#penGradient_comp)" />
            <path d="M 154 50 L 143 61 L 151 69 L 162 58 Z" fill="#ffffff" />
            <circle cx="146" cy="66" r="1.5" fill="#0072FF" />
          </g>

          {/* Central Shop Ledger Document */}
          <g>
            <rect x="80" y="85" width="84" height="74" rx="18" fill="url(#innerSheetGrad_comp)" stroke="#00E5FF" strokeWidth="3" />
            <rect x="96" y="104" width="52" height="6.5" rx="3.25" fill="#FFFFFF" />
            <rect x="96" y="119" width="42" height="6.5" rx="3.25" fill="#38BDF8" />
            <rect x="96" y="134" width="48" height="6.5" rx="3.25" fill="#FFFFFF" opacity="0.9" />
          </g>
        </svg>
      </div>
    );
  }

  // Full Logo Variant (Emblem + Wordmark + Tagline)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        {glow && (
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md -z-10" />
        )}
        <svg 
          viewBox="0 0 240 240" 
          fill="none" 
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberGGradient_full" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="35%" stopColor="#00E5FF" />
              <stop offset="70%" stopColor="#0072FF" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="innerSheetGrad_full" x1="85" y1="85" x2="165" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0e1726" />
              <stop offset="100%" stopColor="#060913" />
            </linearGradient>
            <linearGradient id="penGradient_full" x1="160" y1="30" x2="185" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0072FF" />
            </linearGradient>
          </defs>

          <path 
            d="M 148 44 C 139 41 129 39 120 39 C 75.26 39 39 75.26 39 120 C 39 164.74 75.26 201 120 201 C 164.74 201 201 164.74 201 120 C 201 108 198.5 96.5 194 86 L 165 101 C 167 107 168 113.4 168 120 C 168 146.51 146.51 168 120 168 C 93.49 168 72 146.51 72 120 C 72 93.49 93.49 72 120 72 C 128.5 72 136.5 74.2 143.5 78 Z" 
            fill="url(#cyberGGradient_full)" 
          />
          <g>
            <path d="M 172 32 L 194 54 L 176 72 L 154 50 Z" fill="url(#penGradient_full)" />
            <path d="M 154 50 L 143 61 L 151 69 L 162 58 Z" fill="#ffffff" />
          </g>
          <g>
            <rect x="80" y="85" width="84" height="74" rx="18" fill="url(#innerSheetGrad_full)" stroke="#00E5FF" strokeWidth="3" />
            <rect x="96" y="104" width="52" height="6.5" rx="3.25" fill="#FFFFFF" />
            <rect x="96" y="119" width="42" height="6.5" rx="3.25" fill="#38BDF8" />
            <rect x="96" y="134" width="48" height="6.5" rx="3.25" fill="#FFFFFF" opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl">
            GOGO
          </span>
          <span className="font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl">
            LOG
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] text-slate-400 mt-1 uppercase">
            <span className="w-2.5 h-[1.5px] bg-cyan-400 rounded-full" />
            <span>TRACK</span>
            <span className="text-cyan-400">•</span>
            <span>RECORD</span>
            <span className="text-cyan-400">•</span>
            <span>GROW</span>
            <span className="w-2.5 h-[1.5px] bg-cyan-400 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};
