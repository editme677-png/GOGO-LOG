import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Sparkles, Maximize2, Download, MessageSquare, CheckCircle2, 
  Layers, ArrowRight, ShieldCheck, Phone, Smartphone, Tablet,
  Clock, Users, FileText, CheckSquare, Megaphone, BarChart3, 
  ExternalLink, ZoomIn, Eye, Sparkle
} from 'lucide-react';

interface OfficialPostersSectionProps {
  onOpenWhatsApp?: () => void;
}

export const OfficialPostersSection: React.FC<OfficialPostersSectionProps> = ({ onOpenWhatsApp }) => {
  const [activeTab, setActiveTab] = useState<'poster1' | 'poster2' | 'both'>('poster1');
  const [lightboxPoster, setLightboxPoster] = useState<{ url: string; title: string; orientation: string } | null>(null);

  const posters = GOGO_LOG_CONFIG.officialPosters;
  if (!posters) return null;

  const handleWhatsAppClick = () => {
    if (onOpenWhatsApp) {
      onOpenWhatsApp();
    } else {
      window.open(GOGO_LOG_CONFIG.socialLinks.whatsapp, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="official-posters" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20 overflow-hidden">
      {/* Ambient background glow matching posters */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-rose-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Official Application Marketing Kit</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sky-400 tracking-tight leading-tight">
            Official Promotional Posters
          </h2>
          
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Direct from our official launch materials. Inspect the verified data, live attendance registers, core features, and our transparent plans: <span className="text-emerald-400 font-bold">07-Day Free Trial, ₹99/mo, ₹999/yr, and ₹3999 Lifetime</span> available via WhatsApp.
          </p>

          {/* Tab Switcher */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('poster1')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'poster1'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>Poster 1: Boost Your Business (Tablet)</span>
            </button>

            <button
              onClick={() => setActiveTab('poster2')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'poster2'
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/40 border-2 border-yellow-300'
                  : 'bg-yellow-400/25 text-yellow-300 hover:text-black hover:bg-yellow-400 border border-yellow-400/50'
              }`}
            >
              <Smartphone className="w-4 h-4 text-yellow-400 group-hover:text-black" />
              <span>Poster 2: Simplify Everything (Mobile)</span>
            </button>

            <button
              onClick={() => setActiveTab('both')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'both'
                  ? 'bg-zinc-200 text-zinc-900 shadow-lg shadow-white/10 border border-white/50'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span className="text-orange-500 font-bold">View Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* POSTER 1 VIEW: LANDSCAPE */}
        {(activeTab === 'poster1' || activeTab === 'both') && (
          <div className="mb-16 bg-gradient-to-b from-black/40 via-red-950/20 to-black/40 backdrop-blur-md rounded-3xl border border-red-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Top Accent Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-400 mb-1">
                  <Tablet className="w-4 h-4" />
                  <span>Poster 01 • Landscape Dashboard Showcase</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-sky-400">
                  BOOST YOUR BUSINESS WITH GOGO LOG!
                </h3>
                <p className="text-red-300 font-bold text-sm tracking-widest mt-1">
                  TRACK. RECORD. GROW.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setLightboxPoster({
                    url: posters.poster1.imageUrl,
                    title: posters.poster1.title,
                    orientation: 'landscape'
                  })}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold border border-yellow-300 shadow-md shadow-yellow-400/20 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen Zoom</span>
                </button>
                <button
                  onClick={() => handleDownload(posters.poster1.imageUrl, 'gogo-log-poster-boost-business.png')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download HD</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-extrabold shadow-lg shadow-emerald-500/20 transition-all animate-blink cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Poster Preview Image with interactive hover container */}
            <div className="relative group rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
              <img 
                src={posters.poster1.imageUrl} 
                alt="Boost Your Business with GOGO LOG - Official Poster" 
                className="w-full h-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                onClick={() => setLightboxPoster({
                  url: posters.poster1.imageUrl,
                  title: posters.poster1.title,
                  orientation: 'landscape'
                })}
              />
              
              {/* Overlay Hover Prompt */}
              <div 
                onClick={() => setLightboxPoster({
                  url: posters.poster1.imageUrl,
                  title: posters.poster1.title,
                  orientation: 'landscape'
                })}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
              >
                <div className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-bold text-sm shadow-xl flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Inspect in High Definition</span>
                </div>
              </div>
            </div>

            {/* Poster 1 Key Data Extraction Checklist */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 mb-4">
                Information Extracted From Poster 1:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 01: Light White */}
                <div className="p-4 rounded-xl bg-white/10 border border-white/20 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-2 font-black text-sm">
                    01
                  </div>
                  <h5 className="font-extrabold text-orange-400 text-sm">Live Attendance Table</h5>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    Tracks staff (<span className="text-zinc-100 font-semibold">Gogo, Sarfu, Singha, Dutta</span>) clocked in at 9:00 AM with green "WORKING" status and absent records.
                  </p>
                </div>

                {/* 02: Medium-Light White */}
                <div className="p-4 rounded-xl bg-white/30 border border-white/40 shadow-sm backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/30 text-orange-300 flex items-center justify-center mb-2 font-black text-sm">
                    02
                  </div>
                  <h5 className="font-extrabold text-orange-300 text-sm">Instant Broadcasts</h5>
                  <p className="text-xs text-zinc-100 mt-1 leading-relaxed">
                    Direct shop announcements (<span className="text-white font-bold">"Friday Holiday - Closed Shop"</span>) &amp; owner task assignments (<span className="text-white font-bold">"Enjoy with family"</span>).
                  </p>
                </div>

                {/* 03: Medium-Heavy White */}
                <div className="p-4 rounded-xl bg-white/65 border border-white/80 shadow-md backdrop-blur-sm text-slate-900">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center mb-2 font-black text-sm shadow-xs">
                    03
                  </div>
                  <h5 className="font-extrabold text-orange-700 text-sm">Official Subscription Plans</h5>
                  <p className="text-xs text-slate-800 mt-1 leading-relaxed">
                    Choose 07-Day Free Trial, ₹99/month, ₹999/annum, or ₹3999 All-Time lifetime subscription. Available via WhatsApp: <span className="text-orange-700 font-black">9068254755</span>.
                  </p>
                </div>

                {/* 04: Heavy Solid White */}
                <div className="p-4 rounded-xl bg-white border-2 border-white shadow-xl text-slate-950">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center mb-2 font-black text-sm shadow-xs">
                    04
                  </div>
                  <h5 className="font-extrabold text-orange-700 text-sm">4 Core Business Pillars</h5>
                  <p className="text-xs text-slate-800 mt-1 leading-relaxed">
                    Easy Attendance, Direct Owner-to-Staff Communication, Simplified Payroll Tracking, and Detailed Business Analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* POSTER 2 VIEW: PORTRAIT */}
        {(activeTab === 'poster2' || activeTab === 'both') && (
          <div className="mb-16 bg-gradient-to-b from-black/40 via-red-950/20 to-black/40 backdrop-blur-md rounded-3xl border border-red-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Top Accent Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-400 mb-1">
                  <Smartphone className="w-4 h-4" />
                  <span>Poster 02 • Portrait Mobile Showcase &amp; Transformation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  RUN YOUR SHOP. MANAGE YOUR TEAM. SIMPLIFY EVERYTHING.
                </h3>
                <p className="text-emerald-300 font-bold text-sm tracking-wide mt-1">
                  GOGO LOG — Smart Employee Management for Shop Owners
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setLightboxPoster({
                    url: posters.poster2.imageUrl,
                    title: posters.poster2.title,
                    orientation: 'portrait'
                  })}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen Zoom</span>
                </button>
                <button
                  onClick={() => handleDownload(posters.poster2.imageUrl, 'gogo-log-poster-simplify-everything.png')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download HD</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-extrabold shadow-lg shadow-emerald-500/20 transition-all animate-blink cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91-9068254755</span>
                </button>
              </div>
            </div>

            {/* Poster 2 layout: Image alongside feature breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Poster Image (Left / Center in mobile) */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative group rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl max-w-md w-full">
                  <img 
                    src={posters.poster2.imageUrl} 
                    alt="Run Your Shop. Manage Your Team. Simplify Everything - Official Poster" 
                    className="w-full h-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                    onClick={() => setLightboxPoster({
                      url: posters.poster2.imageUrl,
                      title: posters.poster2.title,
                      orientation: 'portrait'
                    })}
                  />
                  
                  <div 
                    onClick={() => setLightboxPoster({
                      url: posters.poster2.imageUrl,
                      title: posters.poster2.title,
                      orientation: 'portrait'
                    })}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                  >
                    <div className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-sm shadow-xl flex items-center gap-2">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Inspect in High Definition</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Poster 2 Numbered Features List (Right) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-2">
                  <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-wider block">Real-World Transformation</span>
                  <p className="text-white font-black text-lg mt-0.5">
                    "From scattered records → to one organized system."
                  </p>
                  <p className="text-zinc-300 text-xs mt-1">
                    Replace chaotic paper registers, missing payslips, and manual math with 1 simple mobile system in your palm.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h5 className="font-extrabold text-white text-sm">DAILY TASKS</h5>
                      <p className="text-xs text-zinc-300">Organize and assign employee tasks every day.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h5 className="font-extrabold text-white text-sm">PAYSLIPS &amp; AUDIT</h5>
                      <p className="text-xs text-zinc-300">Maintain employee payslips and important records.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h5 className="font-extrabold text-white text-sm">LEAVE MANAGEMENT</h5>
                      <p className="text-xs text-zinc-300">Track employee leave and attendance records.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      04
                    </div>
                    <div>
                      <h5 className="font-extrabold text-white text-sm">WORKING HOURS</h5>
                      <p className="text-xs text-zinc-300">Record and monitor employee working hours.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      05
                    </div>
                    <div>
                      <h5 className="font-extrabold text-white text-sm">BROADCAST MESSAGES</h5>
                      <p className="text-xs text-zinc-300">Send important announcements to entire team instantly.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      06
                    </div>
                    <div>
                      <h5 className="font-extrabold text-white text-sm">WORK ACTIVITY</h5>
                      <p className="text-xs text-zinc-300">Monitor daily, weekly and monthly employee activity.</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Order Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-zinc-900 border border-emerald-500/30 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">Transparent Shop Plans</span>
                    <span className="text-base sm:text-lg font-black text-white">07-Day Free • ₹99/mo • ₹999/yr • ₹3999 Lifetime</span>
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs shadow-lg shadow-emerald-500/20 shrink-0 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Get on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxPoster && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxPoster(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <h4 className="font-bold text-base truncate max-w-[70%]">{lightboxPoster.title}</h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(lightboxPoster.url, `${lightboxPoster.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setLightboxPoster(null)}
                  className="px-3 py-1.5 rounded-lg bg-red-500/80 hover:bg-red-500 text-white text-xs font-bold"
                >
                  Close (ESC)
                </button>
              </div>
            </div>

            {/* Lightbox Image */}
            <div className="overflow-auto max-h-[82vh] rounded-xl border border-white/20 shadow-2xl bg-black">
              <img 
                src={lightboxPoster.url} 
                alt={lightboxPoster.title} 
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
