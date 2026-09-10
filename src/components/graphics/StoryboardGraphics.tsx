import React from 'react';

// Graphic 1: Manage Your Employee Tasks
export const TaskManagementGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto drop-shadow-2xl ${className}`}>
    <defs>
      <linearGradient id="taskBgGrad" x1="50" y1="20" x2="350" y2="340" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0b172e" />
        <stop offset="100%" stopColor="#050a17" />
      </linearGradient>
      <linearGradient id="calGrad" x1="100" y1="80" x2="280" y2="280" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="40%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="checkBubbleGrad" x1="260" y1="120" x2="330" y2="190" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="clockGrad" x1="60" y1="190" x2="140" y2="270" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="userGrad" x1="280" y1="220" x2="340" y2="280" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <filter id="glow3d" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
      </filter>
    </defs>

    {/* Ambient Glowing Halo */}
    <circle cx="200" cy="180" r="130" fill="#00E5FF" opacity="0.12" filter="url(#glow3d)" />

    {/* Main 3D Glossy Calendar */}
    <g filter="url(#softShadow)">
      {/* Calendar Backing */}
      <rect x="110" y="70" width="180" height="190" rx="32" fill="url(#calGrad)" stroke="#60a5fa" strokeWidth="2.5" />
      
      {/* Calendar Header Top Bar */}
      <path d="M 110 102 C 110 84.3 124.3 70 142 70 L 258 70 C 275.7 70 290 84.3 290 102 L 290 120 L 110 120 Z" fill="#3b82f6" />
      
      {/* Top Binder Rings */}
      <rect x="145" y="54" width="16" height="32" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <rect x="239" y="54" width="16" height="32" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

      {/* Grid of Task Days */}
      <rect x="135" y="145" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
      <rect x="175" y="145" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
      <rect x="215" y="145" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
      
      <rect x="135" y="180" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
      <rect x="175" y="180" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
      <rect x="215" y="180" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />

      <rect x="135" y="215" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
      <rect x="175" y="215" width="28" height="24" rx="8" fill="#00E5FF" fillOpacity="0.8" />
      <rect x="215" y="215" width="28" height="24" rx="8" fill="#ffffff" fillOpacity="0.15" />
    </g>

    {/* Floating 3D Checkmark Bubble (Right) */}
    <g filter="url(#softShadow)" transform="translate(255, 120)">
      <circle cx="35" cy="35" r="32" fill="url(#checkBubbleGrad)" stroke="#a7f3d0" strokeWidth="3" />
      <path d="M 23 35 L 31 43 L 47 27" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Floating 3D Cyan Clock (Bottom Left) */}
    <g filter="url(#softShadow)" transform="translate(65, 195)">
      <circle cx="40" cy="40" r="36" fill="url(#clockGrad)" stroke="#ffffff" strokeWidth="3" />
      <circle cx="40" cy="40" r="30" fill="#042f2e" opacity="0.4" />
      {/* Clock Hands */}
      <line x1="40" y1="40" x2="40" y2="22" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="40" y1="40" x2="54" y2="40" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="3.5" fill="#ffffff" />
    </g>

    {/* Floating User Avatar Bubble (Bottom Right) */}
    <g filter="url(#softShadow)" transform="translate(285, 215)">
      <circle cx="32" cy="32" r="28" fill="url(#userGrad)" stroke="#bfdbfe" strokeWidth="3" />
      {/* User Silhouette */}
      <circle cx="32" cy="24" r="8" fill="#ffffff" />
      <path d="M 19 44 C 19 36 25 34 32 34 C 39 34 45 36 45 44" fill="#ffffff" />
    </g>

    {/* Floating Particle Accents */}
    <circle cx="80" cy="110" r="3" fill="#00E5FF" opacity="0.8" />
    <circle cx="320" cy="90" r="4" fill="#60a5fa" opacity="0.9" />
    <circle cx="190" cy="40" r="3" fill="#ffffff" opacity="0.7" />
  </svg>
);

// Graphic 2: Payslips & Audit
export const PayslipAuditGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto drop-shadow-2xl ${className}`}>
    <defs>
      <linearGradient id="docGrad" x1="120" y1="60" x2="280" y2="280" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="shieldGrad" x1="260" y1="130" x2="340" y2="210" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="coinGrad" x1="60" y1="190" x2="140" y2="270" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <filter id="softShadowDoc" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000000" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Ambient Glow */}
    <circle cx="200" cy="170" r="130" fill="#38bdf8" opacity="0.12" />

    {/* The Official Floating Payslip Document */}
    <g filter="url(#softShadowDoc)" transform="translate(105, 55)">
      {/* Background card with slight perspective tilt */}
      <rect x="0" y="0" width="190" height="220" rx="24" fill="url(#docGrad)" stroke="#38bdf8" strokeWidth="2" />
      
      {/* Payslip Header Badge */}
      <rect x="25" y="24" width="105" height="26" rx="8" fill="#1e3a8a" />
      <text x="77" y="42" fill="#60a5fa" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="0.05em">PAYSLIP</text>

      {/* Payslip Lines & Table Entries */}
      <rect x="25" y="68" width="140" height="8" rx="4" fill="#94a3b8" />
      <rect x="25" y="86" width="105" height="7" rx="3.5" fill="#cbd5e1" />
      
      {/* Table separator */}
      <line x1="25" y1="110" x2="165" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
      
      <rect x="25" y="125" width="85" height="7" rx="3.5" fill="#94a3b8" />
      <rect x="130" y="125" width="35" height="7" rx="3.5" fill="#10b981" />
      
      <rect x="25" y="145" width="70" height="7" rx="3.5" fill="#94a3b8" />
      <rect x="130" y="145" width="35" height="7" rx="3.5" fill="#10b981" />

      {/* Bottom Verified Total */}
      <rect x="25" y="172" width="140" height="26" rx="8" fill="#0284c7" fillOpacity="0.15" />
      <text x="35" y="189" fill="#0369a1" fontSize="11" fontWeight="800">NET SALARY</text>
      <text x="155" y="189" fill="#0284c7" fontSize="12" fontWeight="900" textAnchor="end">₹18,500</text>
    </g>

    {/* Floating Indian Rupee Coin (₹) Badge */}
    <g filter="url(#softShadowDoc)" transform="translate(65, 185)">
      <circle cx="38" cy="38" r="35" fill="url(#coinGrad)" stroke="#ffffff" strokeWidth="3" />
      <circle cx="38" cy="38" r="29" fill="#0369a1" opacity="0.3" />
      <text x="38" y="47" fill="#ffffff" fontSize="28" fontWeight="900" textAnchor="middle">₹</text>
    </g>

    {/* Floating Security Shield Badge (Right) */}
    <g filter="url(#softShadowDoc)" transform="translate(265, 140)">
      <path d="M 35 10 C 50 10 65 18 65 35 C 65 55 45 70 35 75 C 25 70 5 55 5 35 C 5 18 20 10 35 10 Z" fill="url(#shieldGrad)" stroke="#a7f3d0" strokeWidth="3" />
      <path d="M 23 38 L 31 46 L 47 30" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// Graphic 3: Leave Management
export const LeaveManagementGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto drop-shadow-2xl ${className}`}>
    <defs>
      <linearGradient id="leaveBgGrad" x1="100" y1="80" x2="280" y2="280" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="palmCircle" x1="140" y1="130" x2="220" y2="210" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
      <linearGradient id="clockCyan" x1="240" y1="200" x2="300" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>

    {/* Glow */}
    <circle cx="200" cy="180" r="130" fill="#00E5FF" opacity="0.1" />

    {/* Main Calendar Frame */}
    <g transform="translate(100, 70)">
      <rect x="0" y="0" width="200" height="200" rx="32" fill="url(#leaveBgGrad)" stroke="#7dd3fc" strokeWidth="3" />
      {/* Top Bar */}
      <path d="M 0 32 C 0 14.3 14.3 0 32 0 L 168 0 C 185.7 0 200 14.3 200 32 L 200 48 L 0 48 Z" fill="#0ea5e9" />
      
      {/* Rings */}
      <rect x="40" y="-14" width="16" height="30" rx="8" fill="#ffffff" />
      <rect x="144" y="-14" width="16" height="30" rx="8" fill="#ffffff" />

      {/* Vacation Palm Tree Circle */}
      <circle cx="100" cy="120" r="42" fill="url(#palmCircle)" stroke="#ffffff" strokeWidth="2.5" />
      
      {/* Stylized Palm Tree Trunk & Fronds */}
      <path d="M 98 145 C 98 125 105 115 101 98" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
      {/* Fronds */}
      <path d="M 101 98 C 90 85 75 92 68 98" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 101 98 C 112 85 128 90 134 96" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 101 98 C 88 102 78 112 76 122" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 101 98 C 114 102 124 112 126 122" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
    </g>

    {/* Floating Approval Check Badge (Top Right) */}
    <g transform="translate(265, 95)">
      <circle cx="28" cy="28" r="26" fill="#10b981" stroke="#ffffff" strokeWidth="3" />
      <path d="M 18 28 L 25 35 L 38 22" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Approved Check Badge (Bottom Left) */}
    <g transform="translate(75, 210)">
      <circle cx="24" cy="24" r="22" fill="#10b981" stroke="#ffffff" strokeWidth="2.5" />
      <path d="M 16 24 L 22 30 L 32 18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Floating Clock (Bottom Right) */}
    <g transform="translate(245, 205)">
      <circle cx="32" cy="32" r="30" fill="url(#clockCyan)" stroke="#ffffff" strokeWidth="3" />
      <line x1="32" y1="32" x2="32" y2="18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="32" x2="44" y2="32" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3" fill="#ffffff" />
    </g>
  </svg>
);

// Graphic 4: Working Hours
export const WorkingHoursGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto drop-shadow-2xl ${className}`}>
    <defs>
      <linearGradient id="neonClockGrad" x1="100" y1="60" x2="300" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="40%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
    </defs>

    {/* Glowing Rings */}
    <circle cx="200" cy="180" r="140" fill="#00E5FF" opacity="0.1" />
    <circle cx="200" cy="180" r="105" stroke="#00E5FF" strokeWidth="2" strokeDasharray="4 8" opacity="0.5" />

    {/* Giant High-Gloss 3D Clock */}
    <g transform="translate(110, 85)">
      <circle cx="90" cy="90" r="85" fill="url(#neonClockGrad)" stroke="#38bdf8" strokeWidth="4" />
      <circle cx="90" cy="90" r="70" fill="#081024" opacity="0.75" />
      
      {/* Clock ticks */}
      <circle cx="90" cy="30" r="3" fill="#38bdf8" />
      <circle cx="150" cy="90" r="3" fill="#38bdf8" />
      <circle cx="90" cy="150" r="3" fill="#38bdf8" />
      <circle cx="30" cy="90" r="3" fill="#38bdf8" />

      {/* Clock hands showing 10:10 */}
      <line x1="90" y1="90" x2="60" y2="55" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <line x1="90" y1="90" x2="125" y2="60" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="90" cy="90" r="6" fill="#ffffff" />
    </g>

    {/* Floating Chat Message Bubble (Left) */}
    <g transform="translate(70, 195)">
      <rect x="0" y="0" width="44" height="34" rx="10" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
      <line x1="10" y1="12" x2="34" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="20" x2="26" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Floating Staff User Avatar (Right) */}
    <g transform="translate(255, 190)">
      <circle cx="34" cy="34" r="30" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
      <circle cx="34" cy="24" r="9" fill="#ffffff" />
      <path d="M 20 48 C 20 38 27 36 34 36 C 41 36 48 38 48 48" fill="#ffffff" />
    </g>

    {/* Location Pin Accent (Far Right) */}
    <g transform="translate(305, 230)">
      <circle cx="15" cy="15" r="14" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
      <circle cx="15" cy="15" r="5" fill="#ffffff" />
    </g>
  </svg>
);

// Graphic 5: Broadcast Message
export const BroadcastMessageGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto drop-shadow-2xl ${className}`}>
    <defs>
      <linearGradient id="hornGrad" x1="100" y1="140" x2="240" y2="220" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="60%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    {/* Sound Waves from Speaker */}
    <circle cx="190" cy="170" r="130" fill="#00E5FF" opacity="0.1" />
    
    <path d="M 230 135 C 245 150 245 180 230 195" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
    <path d="M 248 120 C 270 145 270 190 248 215" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
    <path d="M 268 105 C 298 140 298 205 268 235" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

    {/* 3D Cyan Megaphone (Bullhorn) */}
    <g transform="translate(100, 115)">
      {/* Horn Cone */}
      <path d="M 40 40 L 115 15 L 115 95 L 40 65 Z" fill="url(#hornGrad)" stroke="#ffffff" strokeWidth="3" />
      {/* Front Rim */}
      <ellipse cx="115" cy="55" rx="14" ry="40" fill="#38bdf8" stroke="#ffffff" strokeWidth="3" />
      {/* Back Cap */}
      <rect x="25" y="42" width="18" height="22" rx="6" fill="#1e3a8a" stroke="#ffffff" strokeWidth="2.5" />
      {/* Handle */}
      <path d="M 52 65 L 56 100 L 72 96 L 68 64 Z" fill="#0369a1" stroke="#ffffff" strokeWidth="2.5" />
    </g>

    {/* Floating Chat Bubbles */}
    <g transform="translate(225, 90)">
      <rect x="0" y="0" width="50" height="34" rx="12" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="16" cy="17" r="3" fill="#ffffff" />
      <circle cx="25" cy="17" r="3" fill="#ffffff" />
      <circle cx="34" cy="17" r="3" fill="#ffffff" />
    </g>

    {/* Team Member Badges (Bottom) */}
    <g transform="translate(180, 220)">
      <rect x="0" y="0" width="70" height="42" rx="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="25" cy="21" r="7" fill="#ffffff" />
      <circle cx="45" cy="21" r="7" fill="#ffffff" />
    </g>

    {/* Staff User Left Badge */}
    <g transform="translate(65, 220)">
      <circle cx="22" cy="22" r="18" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
      <circle cx="22" cy="16" r="5.5" fill="#ffffff" />
      <path d="M 13 31 C 13 25 18 24 22 24 C 26 24 31 25 31 31" fill="#ffffff" />
    </g>
  </svg>
);

// Graphic 6: Smarter Management for a Brighter Tomorrow (Road to Growth)
export const BrighterTomorrowGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto drop-shadow-2xl rounded-3xl overflow-hidden ${className}`}>
    <defs>
      <linearGradient id="skyGrad" x1="300" y1="0" x2="300" y2="240" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0c1e3d" />
        <stop offset="40%" stopColor="#1e3a8a" />
        <stop offset="70%" stopColor="#d97706" />
        <stop offset="90%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#fef08a" />
      </linearGradient>
      <linearGradient id="roadGrad" x1="300" y1="200" x2="300" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="40%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#00E5FF" />
      </linearGradient>
      <radialGradient id="sunGlow" cx="300" cy="210" r="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#fef08a" />
        <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Dramatic Sky */}
    <rect width="600" height="360" fill="url(#skyGrad)" />

    {/* Rising Sun */}
    <circle cx="300" cy="210" r="90" fill="url(#sunGlow)" />

    {/* Mountain Ridges */}
    <path d="M 0 240 L 120 180 L 220 220 L 300 190 L 380 230 L 480 180 L 600 240 L 600 360 L 0 360 Z" fill="#0f264d" />
    <path d="M 0 265 L 140 220 L 250 250 L 350 225 L 470 260 L 600 235 L 600 360 L 0 360 Z" fill="#091830" opacity="0.9" />

    {/* Glowing Winding Highway (Golden Road to Growth) */}
    <path d="M 300 210 Q 320 250 270 280 T 300 360" stroke="url(#roadGrad)" strokeWidth="36" strokeLinecap="round" fill="none" opacity="0.95" />
    <path d="M 300 210 Q 320 250 270 280 T 300 360" stroke="#ffffff" strokeWidth="4" strokeDasharray="12 12" fill="none" />

    {/* Foreground Hills */}
    <path d="M 0 310 Q 150 290 240 360 L 0 360 Z" fill="#040c17" />
    <path d="M 600 300 Q 460 290 360 360 L 600 360 Z" fill="#040c17" />
  </svg>
);
