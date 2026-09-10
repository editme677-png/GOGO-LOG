import React from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Maximize2, Smartphone, Monitor } from 'lucide-react';
import { ScreenshotItem } from '../../types';
import { AppMockupScreen } from '../common/AppMockupScreen';

interface ScreenshotLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ScreenshotItem[];
  currentScreenshot: ScreenshotItem | null;
  onSelectScreenshot: (screenshot: ScreenshotItem) => void;
}

export const ScreenshotLightboxModal: React.FC<ScreenshotLightboxModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentScreenshot,
  onSelectScreenshot
}) => {
  if (!isOpen || !currentScreenshot) return null;

  const currentIndex = screenshots.findIndex(s => s.id === currentScreenshot.id);

  const handlePrev = () => {
    const nextIdx = currentIndex > 0 ? currentIndex - 1 : screenshots.length - 1;
    onSelectScreenshot(screenshots[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = currentIndex < screenshots.length - 1 ? currentIndex + 1 : 0;
    onSelectScreenshot(screenshots[nextIdx]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl rounded-3xl bg-[#121316] border border-white/10 p-6 sm:p-8 text-white shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-emerald-400 font-bold border border-white/10">
              {currentScreenshot.category}
            </span>
            <span className="text-xs text-zinc-400">
              Screen {currentIndex + 1} of {screenshots.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Mockup + Detailed Feature Breakdown */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 overflow-y-auto">
          
          {/* Mockup Display */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[310px] sm:max-w-[330px] aspect-[9/18.5] rounded-[44px] p-3 bg-[#0a0a0b] shadow-2xl border border-white/10">
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0a0a0b] rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 mr-2"></div>
                <div className="w-10 h-1.5 rounded-full bg-zinc-700"></div>
              </div>

              <div className="w-full h-full rounded-[34px] overflow-hidden">
                <AppMockupScreen screenshot={currentScreenshot} />
              </div>
            </div>
          </div>

          {/* Feature Explanations */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentScreenshot.title}
            </h3>

            <p className="text-zinc-300 text-base leading-relaxed">
              {currentScreenshot.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                Detailed Functional Capabilities:
              </h4>
              <div className="space-y-2">
                {currentScreenshot.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#14151a] border border-white/10 text-xs text-zinc-400">
              <span className="font-bold text-white block mb-1">Commercial Real-time Synchronization</span>
              Changes logged on this screen sync immediately across all authorized shop devices with offline storage protection.
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer border border-white/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Screen</span>
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer border border-white/10 transition-colors"
              >
                <span>Next Screen</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
