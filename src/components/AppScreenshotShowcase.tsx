import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Maximize2, ChevronLeft, ChevronRight, Smartphone, Monitor, 
  CheckCircle2, Sparkles, UploadCloud, Info
} from 'lucide-react';
import { AppMockupScreen } from './common/AppMockupScreen';
import { ScreenshotItem } from '../types';

interface AppScreenshotShowcaseProps {
  onOpenLightbox: (screenshot: ScreenshotItem) => void;
}

export const AppScreenshotShowcase: React.FC<AppScreenshotShowcaseProps> = ({ onOpenLightbox }) => {
  const screenshots = GOGO_LOG_CONFIG.screenshots;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ["All", ...Array.from(new Set(screenshots.map(s => s.category)))];

  const filteredScreenshots = selectedCategory === "All" 
    ? screenshots 
    : screenshots.filter(s => s.category === selectedCategory);

  const currentItem = filteredScreenshots[currentIndex] || filteredScreenshots[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredScreenshots.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredScreenshots.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="app-showcase" className="py-20 md:py-28 bg-transparent text-white relative overflow-hidden border-t border-red-500/20">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact title from Section 5) */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-semibold border border-white/10">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Application Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 tracking-tight">
            See GOGO LOG in Action
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Explore the clean, intuitive interface designed so any shop owner can start logging in 10 seconds.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-400 text-black shadow-md shadow-emerald-400/20'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/35 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-red-500/25 shadow-2xl">
          
          {/* Left Column: Feature Details for Current Screenshot */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <span>{currentItem.category}</span>
              <span>•</span>
              <span>Screen {currentIndex + 1} of {filteredScreenshots.length}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-400">
              {currentItem.title}
            </h3>

            <p className="text-zinc-300 text-base leading-relaxed">
              {currentItem.description}
            </p>

            {/* Key Capabilities on this screen */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Key Screen Capabilities:
              </span>
              {currentItem.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Navigation & Lightbox Controls */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onOpenLightbox(currentItem)}
                className="ml-auto px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup of Selected Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div 
              onClick={() => onOpenLightbox(currentItem)}
              className="relative w-full max-w-[310px] aspect-[9/18.5] rounded-[44px] p-3 bg-black/45 backdrop-blur-md shadow-2xl shadow-red-950/40 border border-red-500/30 cursor-pointer group transition-transform hover:scale-[1.02]"
            >
              {/* Phone Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 mr-2"></div>
                <div className="w-10 h-1.5 rounded-full bg-zinc-800"></div>
              </div>

              {/* Hover Zoom Hint */}
              <div className="absolute inset-0 bg-black/50 rounded-[44px] z-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#14151a] text-emerald-400 font-bold text-xs border border-emerald-500/40 flex items-center gap-1.5 shadow-xl">
                  <Maximize2 className="w-3.5 h-3.5" /> Click to enlarge
                </span>
              </div>

              {/* Screen Inner */}
              <div className="w-full h-full rounded-[34px] overflow-hidden">
                <AppMockupScreen screenshot={currentItem} />
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Asset Drop Slot Information (Section 5 requirement) */}
        <div className="mt-8 p-4 rounded-2xl bg-[#14151a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Owner note:</strong> When you provide real application screenshots, simply assign the image URL in <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">src/data/config.ts</code> to display your actual app.
            </span>
          </div>
          <span className="shrink-0 text-emerald-400 font-semibold">
            {screenshots.length} Feature Slots Prepared
          </span>
        </div>

      </div>
    </section>
  );
};
