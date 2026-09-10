import React, { useState } from 'react';
import { 
  Users, Wallet, Calendar, Clock, CheckCircle2, AlertCircle, 
  ChevronRight, ArrowUpRight, Plus, Phone, MessageSquare, 
  Check, FileText, Bell, Sparkles, Building2, CheckSquare, Eye
} from 'lucide-react';
import { ScreenshotItem } from '../../types';
import { GogoLogLogo } from './GogoLogLogo';

interface AppMockupScreenProps {
  screenshot: ScreenshotItem;
  className?: string;
  initialView?: 'dashboard' | 'splash';
}

export const AppMockupScreen: React.FC<AppMockupScreenProps> = ({ 
  screenshot, 
  className = "",
  initialView = 'dashboard'
}) => {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'splash'>(initialView);

  // If user provided a real image screenshot
  if (screenshot.imageUrl) {
    return (
      <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-slate-900 ${className}`}>
        <img 
          src={screenshot.imageUrl} 
          alt={screenshot.title}
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/80 to-transparent text-white text-xs">
          <p className="font-semibold">{screenshot.title}</p>
        </div>
      </div>
    );
  }

  // SCREEN VIEW A: Authentic GOGO LOG Splash Screen (From User's Screenshot)
  if (activeScreen === 'splash') {
    return (
      <div className={`relative w-full h-full bg-[#050b18] text-white flex flex-col justify-between items-center p-6 select-none overflow-hidden ${className}`}>
        {/* Cyber perspective grid floor on bottom half */}
        <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-[linear-gradient(to_bottom,transparent,#00E5FF10)] pointer-events-none" />
        
        {/* Top Status Bar & View Toggle */}
        <div className="w-full flex items-center justify-between text-[10px] text-cyan-300/70 z-10">
          <span className="font-mono">12:02</span>
          <button
            onClick={() => setActiveScreen('dashboard')}
            className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-bold hover:bg-cyan-500/30 flex items-center gap-1 cursor-pointer"
          >
            <span>Open Register</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Center: Glowing GOGO LOG Crest, Particles & Logo */}
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center w-full">
          {/* Glowing particle dots aura */}
          <div className="relative">
            <div className="absolute -inset-8 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
            
            {/* Sparkle particles floating around */}
            <span className="absolute -top-4 -left-6 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
            <span className="absolute -bottom-3 -right-4 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="absolute top-8 -right-8 w-1 h-1 rounded-full bg-white animate-ping" />
            
            {/* Authentic GOGO LOG Logo Mark */}
            <div className="relative z-10 drop-shadow-[0_0_25px_rgba(0,229,255,0.6)]">
              <GogoLogLogo size="xl" variant="icon" glow={true} />
            </div>
          </div>

          {/* GOGO LOG Typography */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            <span className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 font-['Plus_Jakarta_Sans']">
              GOGO
            </span>
            <span className="text-3xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans']">
              LOG
            </span>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.25em] text-slate-300 mt-2 uppercase">
            <span className="w-3 h-[1.5px] bg-cyan-400" />
            <span>TRACK</span>
            <span className="text-cyan-400">•</span>
            <span>RECORD</span>
            <span className="text-cyan-400">•</span>
            <span>GROW</span>
            <span className="w-3 h-[1.5px] bg-cyan-400" />
          </div>

          {/* Official Subtitle Pill */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Shop Attendance, Leave & Payroll Ledger</span>
          </div>
        </div>

        {/* Bottom Loading Progress Bar */}
        <div className="w-full max-w-[200px] flex flex-col items-center z-10">
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
            <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
          </div>
          <span className="text-[9px] text-slate-400 mt-2 font-mono tracking-wider">
            Loading Shop Ledger...
          </span>
        </div>
      </div>
    );
  }

  // SCREEN VIEW B: Realistic Live Register Dashboard Preview
  return (
    <div className={`w-full h-full bg-slate-900 text-slate-100 flex flex-col font-sans text-xs overflow-hidden select-none ${className}`}>
      {/* Phone Status Bar with view switcher */}
      <div className="h-6 px-4 flex items-center justify-between text-[10px] text-slate-400 bg-slate-950/80 border-b border-slate-800/60 shrink-0">
        <span className="font-mono font-medium text-cyan-400">09:41</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveScreen('splash')}
            className="text-[9px] text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5 cursor-pointer font-bold"
            title="View Official Logo Splash"
          >
            <Eye className="w-2.5 h-2.5" />
            <span>Splash</span>
          </button>
          <span>5G</span>
          <div className="w-3.5 h-2 border border-slate-400 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-cyan-400 rounded-3xs"></div>
          </div>
        </div>
      </div>

      {/* App Header with Official GOGO LOG Logo */}
      <div className="px-3.5 py-2 bg-[#09152b] border-b border-cyan-500/30 flex items-center justify-between shrink-0 text-white">
        <div className="flex items-center gap-2">
          <GogoLogLogo size="xs" variant="icon" />
          <div>
            <div className="font-black text-white text-[11px] tracking-tight flex items-center gap-1.5">
              <span>GOGO LOG</span>
              <span className="text-[8px] px-1.5 py-0.2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded font-bold">SHOP</span>
            </div>
            <p className="text-[8px] text-cyan-200/70 font-medium">Shop Owner Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[9px] font-bold text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Cloud Sync</span>
        </div>
      </div>

      {/* Screen Body by Category */}
      <div className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-slate-950/60">
        {screenshot.category === 'Dashboard' && (
          <>
            {/* Quick Metrics: 4 Total, 3 Present, 1 Absent */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-center">
                <div className="text-[9px] text-slate-300 font-bold">Employees</div>
                <div className="text-sm font-black text-white">4</div>
                <div className="text-[7px] text-cyan-400">Total Staff</div>
              </div>
              <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center">
                <div className="text-[9px] text-cyan-300 font-bold">Present</div>
                <div className="text-sm font-black text-cyan-300">3</div>
                <div className="text-[7px] text-cyan-300">Working Now</div>
              </div>
              <div className="p-2 rounded-xl bg-red-950/40 border border-red-500/30 text-center">
                <div className="text-[9px] text-red-300 font-bold">Absent</div>
                <div className="text-sm font-black text-red-400">1</div>
                <div className="text-[7px] text-red-400">On Leave</div>
              </div>
            </div>

            {/* LIVE ATTENDANCE REGISTER Table */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800">
                <span className="font-bold text-white text-[10px] uppercase tracking-wider">Live Attendance</span>
                <span className="text-[9px] text-cyan-400 font-bold">Today • 07 Sep</span>
              </div>
              
              <div className="space-y-1.5">
                {[
                  { name: "Ramesh Kumar", role: "Cashier", time: "09:02 AM", status: "Present", color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40" },
                  { name: "Sunil Verma", role: "Salesman", time: "09:14 AM", status: "Present", color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40" },
                  { name: "Amit Sharma", role: "Inventory", time: "09:30 AM", status: "Present", color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40" },
                  { name: "Deepak Nath", role: "Delivery", time: "On Leave", status: "Absent", color: "text-red-400 bg-red-950/60 border-red-500/40" },
                ].map((emp, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-300">
                        {emp.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-[10px] leading-tight">{emp.name}</div>
                        <div className="text-[8px] text-slate-400">{emp.role} • {emp.time}</div>
                      </div>
                    </div>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded border font-bold ${emp.color}`}>
                      {emp.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Strip */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Wallet className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[8px] text-slate-400">Total Wage Advance</div>
                  <div className="text-[11px] font-black text-white">₹4,500 logged</div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[8px] text-slate-400">Avg Working Hours</div>
                  <div className="text-[11px] font-black text-white">8.4 hrs/day</div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenshot.category !== 'Dashboard' && (
          <div className="space-y-2">
            <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-[10px]">
              <div className="font-bold text-white mb-0.5">{screenshot.title}</div>
              <p className="text-[9px] text-slate-400">{screenshot.description}</p>
            </div>
            <div className="space-y-1.5">
              {screenshot.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-slate-800 text-[9px] text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-cyan-300 text-[9px] text-center font-medium">
              ✓ Synchronized instantly with shop cloud
            </div>
          </div>
        )}
      </div>

      {/* Bottom App Navigation Bar */}
      <div className="h-10 px-4 bg-slate-950 border-t border-slate-800/80 flex items-center justify-around text-slate-500 shrink-0">
        <div className="flex flex-col items-center text-cyan-400">
          <Users className="w-3.5 h-3.5" />
          <span className="text-[8px] font-bold">Staff</span>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-[8px]">Shifts</span>
        </div>
        <div className="flex flex-col items-center">
          <Wallet className="w-3.5 h-3.5" />
          <span className="text-[8px]">Payslip</span>
        </div>
        <div className="flex flex-col items-center">
          <CheckSquare className="w-3.5 h-3.5" />
          <span className="text-[8px]">Tasks</span>
        </div>
      </div>
    </div>
  );
};
