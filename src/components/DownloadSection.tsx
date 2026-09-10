import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Download, QrCode, Smartphone, CheckCircle2, ShieldCheck, 
  ArrowRight, Sparkles, Store, ExternalLink, Play, Globe, Copy, Check
} from 'lucide-react';
import { QrCodeGraphic } from './common/QrCodeGraphic';

interface DownloadSectionProps {
  onOpenQrModal: () => void;
  onOpenGetStarted: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenQrModal, onOpenGetStarted }) => {
  const [copied, setCopied] = useState(false);
  const targetUrl = GOGO_LOG_CONFIG.appUrl || "https://gogolog.ai.studio";

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="download" className="py-20 md:py-28 bg-transparent text-white relative overflow-hidden border-t border-red-500/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-black/35 backdrop-blur-md rounded-3xl border border-red-500/25 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area: Headline, Subtext, Install Steps */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30 text-xs font-bold">
                <Store className="w-3.5 h-3.5" />
                <span>Ready For Your Shop Mobile Phone</span>
              </div>

              {/* Exact requested Section Title and Text */}
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-yellow-400 leading-tight">
                Get GOGO LOG
              </h2>

              <p className="text-xl text-zinc-300 font-medium">
                Start managing your shop smarter today.
              </p>

              {/* Official App & Website URL Card */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Official Application & Website Portal</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    Live Portal
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm sm:text-base font-bold text-emerald-300 hover:text-emerald-200 hover:underline flex items-center gap-1.5 break-all"
                  >
                    <span>{targetUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" />
                  </a>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyUrl}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Copy URL"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>

                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-extrabold flex items-center gap-1 transition-colors cursor-pointer animate-blink"
                    >
                      <span>Open App</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Install Instructions (Section 11 requirement) */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  Easy 3-Step Phone Installation:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Step 1: White Background */}
                  <div className="p-3.5 rounded-xl bg-white text-slate-950 border-2 border-white shadow-xl">
                    <span className="w-6 h-6 rounded-full bg-slate-950 text-white font-black text-xs flex items-center justify-center mb-2 shadow-xs">1</span>
                    <p className="text-xs font-black text-slate-950">Scan or Open</p>
                    <p className="text-[11px] text-slate-800 font-medium mt-1">Scan the QR code with phone camera or click the link.</p>
                  </div>

                  {/* Step 2: Yellow Background */}
                  <div className="p-3.5 rounded-xl bg-yellow-400 text-slate-950 border-2 border-yellow-200 shadow-xl shadow-yellow-950/30">
                    <span className="w-6 h-6 rounded-full bg-slate-950 text-yellow-300 font-black text-xs flex items-center justify-center mb-2 shadow-xs">2</span>
                    <p className="text-xs font-black text-slate-950">Install on Phone</p>
                    <p className="text-[11px] text-slate-900 font-medium mt-1">Tap "Add to Home screen" or confirm installation.</p>
                  </div>

                  {/* Step 3: Orange Background */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 text-white border-2 border-orange-300 shadow-xl shadow-orange-950/40">
                    <span className="w-6 h-6 rounded-full bg-white text-orange-600 font-black text-xs flex items-center justify-center mb-2 shadow-xs">3</span>
                    <p className="text-xs font-black text-white">Add Your Staff</p>
                    <p className="text-[11px] text-orange-100 font-medium mt-1">Type in your shop name and first employee to start.</p>
                  </div>
                </div>
              </div>

              {/* Prominent Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
                <button
                  onClick={onOpenQrModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/20 cursor-pointer transition-all animate-blink"
                >
                  <QrCode className="w-4 h-4" />
                  <span>SCAN TO DOWNLOAD</span>
                </button>

                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm border-2 border-yellow-300 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-yellow-400/30 animate-blink"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span className="text-black font-black">DOWNLOAD / LAUNCH APP</span>
                </a>

                <a
                  href="/assets/gogo-log-qr-code.png"
                  download="gogo-log-qr-code.png"
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-black text-xs border border-sky-300 shadow-md shadow-sky-400/25 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-slate-950" />
                  <span>Save QR (PNG)</span>
                </a>
              </div>

              {/* Supported Platforms Notice */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Android 8.0+ (Chrome, APK & Web App)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  iOS & iPadOS (Safari)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Web Browser at gogolog.ai.studio
                </span>
              </div>

            </div>

            {/* Right Column: Scannable Official QR Code Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative p-6 sm:p-7 rounded-3xl bg-black/40 backdrop-blur-md border border-red-500/25 shadow-2xl flex flex-col items-center text-center max-w-[340px] w-full">
                
                {/* Brand Logo Header inside QR frame */}
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400 text-black font-black flex items-center justify-center text-xs">
                    GL
                  </div>
                  <div className="text-left">
                    <span className="font-extrabold text-yellow-400 text-sm tracking-tight block">
                      {GOGO_LOG_CONFIG.productName}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-semibold block">
                      gogolog.ai.studio
                    </span>
                  </div>
                </div>

                {/* Scannable QR Code Card (Matching Chrome Android Share Sheet) */}
                <div 
                  className="cursor-pointer transition-transform hover:scale-[1.03] active:scale-[0.98] w-full flex justify-center" 
                  onClick={onOpenQrModal}
                >
                  <img 
                    src="/assets/gogo-log-qr-card.svg" 
                    alt="Scan with Phone to Download GOGO LOG" 
                    className="w-full max-w-[260px] aspect-[500/590] rounded-2xl bg-white shadow-md border border-slate-200 object-contain p-2"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-4 space-y-1">
                  <p className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Scan with Phone Camera</span>
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Directly opens <strong className="text-zinc-200">gogolog.ai.studio</strong> on your mobile browser.
                  </p>
                </div>

                <div className="mt-4 w-full grid grid-cols-2 gap-2">
                  <button
                    onClick={onOpenQrModal}
                    className="py-2.5 px-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black border border-yellow-300 flex items-center justify-center gap-1 cursor-pointer shadow-md shadow-yellow-400/25"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-black" />
                    <span>Enlarge QR</span>
                  </button>

                  <a
                    href="/assets/gogo-log-qr-card.svg"
                    download="gogo-log-qr-card.svg"
                    className="py-2.5 px-2 rounded-xl bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Save SVG</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
