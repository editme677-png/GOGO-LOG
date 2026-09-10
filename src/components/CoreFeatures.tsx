import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Users, Wallet, CalendarX, Clock, CheckSquare, TrendingUp, 
  Megaphone, FolderLock, LayoutDashboard, ArrowRight, CheckCircle2,
  Sparkles, Shield, ChevronRight
} from 'lucide-react';
import { FeatureItem } from '../types';

interface CoreFeaturesProps {
  onSelectFeature?: (feature: FeatureItem) => void;
  onOpenGetStarted: () => void;
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ onOpenGetStarted }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem>(GOGO_LOG_CONFIG.features[0]);

  // Progressive background sequence from Light Yellow (01) to Heavy Yellow (08)
  const yellowSequenceStyles = [
    'bg-yellow-400/10 border border-yellow-400/25 shadow-xs hover:border-yellow-400/40',
    'bg-yellow-400/20 border border-yellow-400/35 shadow-xs hover:border-yellow-400/50',
    'bg-yellow-400/30 border border-yellow-400/45 shadow-sm hover:border-yellow-400/60',
    'bg-yellow-500/45 border border-yellow-400/55 shadow-sm hover:border-yellow-300/70',
    'bg-yellow-500/60 border border-yellow-400/65 shadow-md hover:border-yellow-300/80',
    'bg-yellow-500/75 border border-yellow-400/75 shadow-lg shadow-yellow-950/40 hover:border-yellow-300',
    'bg-yellow-400/90 border border-yellow-300/85 shadow-xl shadow-yellow-950/50 hover:border-yellow-200 text-slate-950',
    'bg-yellow-400 border-2 border-yellow-200 shadow-2xl shadow-yellow-900/60 hover:border-white text-slate-950',
  ];

  // Icon mapper for dynamic feature items
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Users': return <Users className={className} />;
      case 'Wallet': return <Wallet className={className} />;
      case 'CalendarX': return <CalendarX className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'CheckSquare': return <CheckSquare className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Megaphone': return <Megaphone className={className} />;
      case 'FolderLock': return <FolderLock className={className} />;
      case 'LayoutDashboard': return <LayoutDashboard className={className} />;
      default: return <Users className={className} />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built Specifically for Shop Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything Your Shop Needs. <br className="hidden sm:inline" />
            <span className="text-emerald-400">Nothing Complicated.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            GOGO LOG strips away confusing corporate HR jargon and gives shop owners simple, direct tools to keep staff and salary records neat.
          </p>
        </div>

        {/* Feature Grid: 8 core categories with Light Yellow to Heavy Yellow sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOGO_LOG_CONFIG.features.map((feat, idx) => {
            const isSelected = selectedFeature.id === feat.id;
            const isHeavyYellow = idx >= 6;
            const isMediumYellow = idx >= 3 && idx < 6;

            return (
              <div
                key={feat.id}
                onClick={() => setSelectedFeature(feat)}
                className={`group relative p-6 sm:p-7 rounded-2xl backdrop-blur-md transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  yellowSequenceStyles[idx] || 'bg-yellow-400 text-slate-950'
                } ${
                  isSelected 
                    ? 'ring-2 ring-yellow-400 shadow-xl' 
                    : ''
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-yellow-400 text-black font-black shadow-lg shadow-yellow-400/30 ring-2 ring-yellow-400' 
                        : isHeavyYellow
                        ? 'bg-slate-950 text-yellow-400 shadow-md font-black'
                        : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/35 group-hover:bg-yellow-400 group-hover:text-black'
                    }`}>
                      {renderIcon(feat.iconName, "w-6 h-6")}
                    </div>
                    {feat.badge && (
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isHeavyYellow
                          ? 'bg-slate-950/20 text-slate-950 border border-slate-950/30'
                          : 'bg-white/10 text-zinc-200 border border-white/15'
                      }`}>
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  {/* Feature Title */}
                  <h3 className={`text-lg font-bold transition-colors ${
                    isHeavyYellow
                      ? 'text-slate-950 font-black'
                      : isMediumYellow
                      ? 'text-yellow-200 group-hover:text-yellow-100 font-extrabold'
                      : 'text-sky-400 group-hover:text-sky-300'
                  }`}>
                    {feat.title}
                  </h3>

                  {/* Short Description */}
                  <p className={`text-sm mt-2 leading-relaxed ${
                    isHeavyYellow 
                      ? 'text-slate-900 font-medium' 
                      : isMediumYellow 
                      ? 'text-zinc-200 font-normal' 
                      : 'text-zinc-400 font-normal'
                  }`}>
                    {feat.shortDesc}
                  </p>
                </div>

                {/* Bottom Shop Owner Takeaway */}
                <div className={`mt-5 pt-4 border-t flex items-center justify-between text-xs ${
                  isHeavyYellow ? 'border-slate-950/20' : 'border-white/10'
                }`}>
                  <span className={`font-semibold flex items-center gap-1 ${
                    isHeavyYellow ? 'text-slate-950 font-extrabold' : 'text-emerald-400'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {feat.shopBenefit}
                  </span>
                  <ChevronRight className={`w-4 h-4 group-hover:translate-x-0.5 transition-all ${
                    isHeavyYellow ? 'text-slate-900' : 'text-zinc-500 group-hover:text-white'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Deep Dive Highlight Card (Selector 4) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-black/35 backdrop-blur-md text-white border border-red-500/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span>Selected Feature in Depth</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{selectedFeature.title}</span>
              </div>
              <h4 className="text-2xl font-extrabold text-sky-400">
                {selectedFeature.title}
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {selectedFeature.fullDesc}
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {selectedFeature.mockDetails.sampleData.map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-zinc-200 border border-white/10 font-medium">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/50 backdrop-blur-md p-5 rounded-2xl border border-red-500/20 flex flex-col justify-between">
              <div>
                <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                  {selectedFeature.mockDetails.metricTitle}
                </span>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  {selectedFeature.mockDetails.metricValue}
                </div>
                <p className="text-xs text-zinc-300 mt-1">
                  {selectedFeature.mockDetails.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Ready in GOGO LOG App</span>
                <button
                  onClick={onOpenGetStarted}
                  className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-md shadow-yellow-400/30 transition-all"
                >
                  <span>Try this feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
