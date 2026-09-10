import React from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  ArrowRight, Download, QrCode, CheckCircle2, ShieldCheck, 
  Smartphone, Sparkles, Store, Users, Wallet, Clock, Star, Layers
} from 'lucide-react';
import { AppMockupScreen } from './common/AppMockupScreen';
import { QrCodeGraphic } from './common/QrCodeGraphic';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { GogoLogLogo } from './common/GogoLogLogo';

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenQrModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted, onOpenQrModal }) => {
  const dashboardScreenshot = GOGO_LOG_CONFIG.screenshots[0];

  return (
    <section 
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-transparent"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-red-600/15 blur-[140px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition, Headline, Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Announcement Badge from Poster with official icon */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400 border border-yellow-300 text-slate-950 text-xs font-bold shadow-md shadow-yellow-400/30">
              <GogoLogLogo size="xs" variant="icon" />
              <span className="text-slate-950 font-black">BOOST YOUR BUSINESS WITH GOGO LOG! TRACK. RECORD. GROW.</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-950/15 text-slate-950 text-[10px] font-black uppercase tracking-wider border border-slate-950/25">
                FROM ₹99/MO • 07-DAY TRIAL
              </span>
            </div>

            {/* Main Headline (Exact copy from Poster 2) */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08]">
              <span className="block text-white">RUN YOUR SHOP.</span>
              <span className="block text-white">MANAGE YOUR TEAM.</span>
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
                SIMPLIFY EVERYTHING.
              </span>
            </h1>

            {/* Supporting Subtitle & Value (From Posters) */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <span className="text-yellow-400 font-bold block mb-1">GOGO LOG — Smart Employee Management for Shop Owners</span>
              From scattered paper registers and messy notebooks → to one organized mobile system. Live attendance, 6 core shop tools, and instant staff broadcasts. <span className="text-sky-400 font-black underline decoration-sky-500">07-Day Free Trial • Plans from ₹99/month</span>.
            </p>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                id="hero-whatsapp-cta"
                href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-zinc-950 font-black text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer group animate-blink"
              >
                <WhatsAppIcon size={22} variant="monochrome" className="text-zinc-950" />
                <span>Order on WhatsApp (From ₹99)</span>
                <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#visual-showcase"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 active:bg-yellow-400/35 text-yellow-300 font-bold text-sm border border-yellow-400/50 flex items-center justify-center gap-2 transition-colors cursor-pointer group shadow-lg shadow-yellow-400/10 animate-blink"
              >
                <Layers className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
                <span>Explore Visual Graphics</span>
              </a>

              <a
                href="#official-posters"
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 active:bg-orange-500/25 text-orange-400 font-semibold text-sm border border-orange-500/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Store className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 font-bold">Official Posters</span>
              </a>
            </div>

            {/* Small Trust / Value Statement (Requested in Section 4) */}
            <div className="pt-3 pb-1 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <WhatsAppIcon size={16} variant="color" />
                <span>Available exclusively through WhatsApp • Number: 9068254755</span>
              </p>

              {/* 3 Simple Shop Owner Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-xs text-slate-400 font-medium">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>07-Day Free Trial</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Works on any phone</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Replaces paper registers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Phone Mockup & Live QR Code Area */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Phone Frame Mockup */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/18.5] rounded-[44px] p-3 bg-black/60 backdrop-blur-xl shadow-2xl shadow-red-950/50 ring-1 ring-red-500/30">
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-zinc-900 mr-2"></div>
                <div className="w-10 h-1.5 rounded-full bg-zinc-800"></div>
              </div>

              {/* Screen Content Container */}
              <div className="w-full h-full rounded-[34px] overflow-hidden">
                <AppMockupScreen screenshot={dashboardScreenshot} initialView="splash" />
              </div>
            </div>

            {/* Floating Live Badge 1: Payment Recorded */}
            <div className="hidden sm:flex absolute -left-6 top-24 bg-[#180307]/90 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-red-500/35 items-center gap-3 animate-bounce [animation-duration:4s]">
              <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <Wallet className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Advance Logged</p>
                <p className="text-xs font-bold text-white">₹2,000 to Ramesh Kumar</p>
                <p className="text-[9px] text-red-400 font-medium flex items-center gap-1">
                  <WhatsAppIcon size={12} variant="color" />
                  <span>WhatsApp slip sent ✓</span>
                </p>
              </div>
            </div>

            {/* Floating Live Badge 2: Shop Attendance */}
            <div className="hidden sm:flex absolute -right-6 bottom-20 bg-[#180307]/90 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-red-500/35 items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Daily Attendance</p>
                <p className="text-xs font-bold text-white">5 of 6 Staff Present</p>
                <p className="text-[9px] text-rose-400 font-medium">Opening shift ready</p>
              </div>
            </div>

            {/* Hero Quick QR Scan Widget (Requested in Section 4) */}
            <div className="mt-6 w-full max-w-[320px] bg-[#180307]/90 backdrop-blur-xl p-3.5 rounded-2xl border border-red-500/30 shadow-xl flex items-center gap-3">
              <div className="shrink-0 cursor-pointer" onClick={onOpenQrModal}>
                <QrCodeGraphic size={64} showLabel={false} className="p-1 rounded-lg border-0 shadow-none bg-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-white font-bold text-xs">
                  <Smartphone className="w-3.5 h-3.5 text-red-400" />
                  <span>Scan to Download App</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Point phone camera to install directly on your device.
                </p>
                <button
                  onClick={onOpenQrModal}
                  className="mt-1 text-[11px] font-bold text-red-400 hover:text-red-300 underline inline-flex items-center gap-0.5 cursor-pointer"
                >
                  View Large QR Code
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
