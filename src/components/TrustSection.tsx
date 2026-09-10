import React from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Sparkles, Layers, Clock, Smartphone, Store, CheckCircle2, 
  ShieldCheck, Star, Users, MessageSquareQuote, Info
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  // Progressive background sequence from Light Pink (01) to Heavy Pink (06)
  const pinkSequenceStyles = [
    'bg-pink-400/10 border border-pink-400/25 shadow-xs hover:border-pink-300/40',
    'bg-pink-400/25 border border-pink-400/35 shadow-xs hover:border-pink-300/50',
    'bg-pink-500/40 border border-pink-400/45 shadow-sm hover:border-pink-300/60',
    'bg-pink-600/60 border border-pink-400/60 shadow-md hover:border-pink-300/75',
    'bg-pink-600/80 border border-pink-300/70 shadow-lg shadow-pink-950/40 hover:border-pink-200',
    'bg-pink-600 border-2 border-pink-200 shadow-2xl shadow-pink-950/70 hover:border-white text-white',
  ];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'UsersCheck': return <Users className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="trust" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Section 14 requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-semibold border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built on Trust and Simplicity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
            Why Shop Owners Choose GOGO LOG
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Built from the ground up to solve daily friction between small store proprietors and staff without adding computer complexity.
          </p>
        </div>

        {/* The 6 Core Trust Pillars with Light Pink to Heavy Pink sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOGO_LOG_CONFIG.trustPillars.map((pillar, i) => {
            const isHeavyPink = i >= 4;

            return (
              <div 
                key={i} 
                className={`p-6 rounded-2xl backdrop-blur-md transition-all flex flex-col justify-between ${
                  pinkSequenceStyles[i] || 'bg-pink-600 border-2 border-pink-200 text-white'
                }`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-xs ${
                    isHeavyPink 
                      ? 'bg-pink-950/60 border border-pink-200/40 text-pink-200' 
                      : 'bg-pink-500/15 border border-pink-400/30 text-pink-300'
                  }`}>
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className={`text-base font-bold mb-1.5 ${
                    isHeavyPink ? 'text-white font-extrabold' : 'text-yellow-300'
                  }`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isHeavyPink ? 'text-pink-100 font-medium' : 'text-zinc-300 font-normal'
                  }`}>
                    {pillar.description}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t flex items-center gap-1.5 text-xs font-semibold ${
                  isHeavyPink ? 'border-pink-300/30 text-pink-100' : 'border-white/10 text-emerald-400'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Shop verified standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted Across Retail & Local Business Categories */}
        <div className="mt-16 p-8 rounded-3xl bg-black/35 backdrop-blur-md text-white border border-red-500/25 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              Versatile Shop Design
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-1">
              Engineered for Every Small Retail Category
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {GOGO_LOG_CONFIG.shopCategories.map((cat, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 rounded-xl bg-[#001f3f] text-blue-100 text-xs font-semibold border border-blue-500/50 shadow-sm shadow-blue-950 flex items-center gap-1.5 hover:border-blue-400 transition-colors"
              >
                <Store className="w-3.5 h-3.5 text-blue-400" />
                {cat}
              </span>
            ))}
          </div>

          {/* Testimonial Placeholder Notice (Section 14 mandate) */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-zinc-400 max-w-xl mx-auto flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Real customer stories and testimonials will be published here as shop owners share their verified reviews.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
