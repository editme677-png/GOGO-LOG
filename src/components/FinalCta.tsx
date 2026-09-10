import React from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { ArrowRight, Download, QrCode, Store, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';
import { QrCodeGraphic } from './common/QrCodeGraphic';

interface FinalCtaProps {
  onOpenGetStarted: () => void;
  onOpenQrModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenGetStarted, onOpenQrModal }) => {
  return (
    <section className="py-20 md:py-28 bg-transparent relative overflow-hidden border-t border-red-500/20">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black/35 backdrop-blur-md text-white p-8 sm:p-12 lg:p-16 border border-red-500/25 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Area (Exact copy from Section 30) */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-emerald-400 border border-white/10 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Join Progressive Shop Owners</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-yellow-400 tracking-tight leading-tight">
                Your Shop Deserves Simpler Management.
              </h2>

              <p className="text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 font-normal">
                Start organizing your employee records and daily operations with GOGO LOG.
              </p>

              {/* Action Buttons (Section 30 requirement) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenGetStarted}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-black font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/20 cursor-pointer transition-all animate-blink"
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onOpenQrModal}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 text-white font-bold text-base border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-all animate-blink"
                >
                  <Download className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-extrabold">DOWNLOAD GOGO LOG</span>
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  07-Day Free Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zero hardware needed
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Install in 30 seconds
                </span>
              </div>
            </div>

            {/* Right Mini QR Widget (Section 30 requirement) */}
            <div className="lg:col-span-4 flex justify-center">
              <div 
                onClick={onOpenQrModal}
                className="bg-black/50 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-red-500/30 text-center max-w-[220px] cursor-pointer hover:scale-105 transition-transform"
              >
                <QrCodeGraphic size={150} showLabel={false} />
                <div className="mt-2 text-yellow-400 font-black text-xs flex items-center justify-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-yellow-400 font-extrabold">Scan to Install</span>
                </div>
                <p className="text-[10px] text-zinc-400 mt-0.5">Click to view full size</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
