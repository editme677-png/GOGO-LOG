import React, { useRef, useState, useEffect } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Play, Pause, Volume2, VolumeX, RotateCcw, Maximize2, 
  Sparkles, CheckCircle2, ArrowRight, Smartphone, Upload, Film, ShieldCheck
} from 'lucide-react';

interface BrandVideoSectionProps {
  onOpenGetStarted: () => void;
  onOpenQrModal: () => void;
}

export const BrandVideoSection: React.FC<BrandVideoSectionProps> = ({
  onOpenGetStarted,
  onOpenQrModal
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(9);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);

  const videoConfig = GOGO_LOG_CONFIG.brandVideo;
  const activeVideoSrc = customVideoUrl || videoConfig?.videoUrl || '/assets/gogo-log-intro.mp4';
  const posterSrc = videoConfig?.posterUrl || '/assets/gogo-log-poster.png';

  // Sync state with HTML video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      // Loop automatically
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [activeVideoSrc]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newProgress * video.duration;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleCustomFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setCustomVideoUrl(objectUrl);
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  return (
    <section id="brand-video" className="relative py-20 sm:py-28 bg-[#0a0a0b] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold tracking-wide">
            <Film className="w-3.5 h-3.5 text-emerald-400" />
            <span>OFFICIAL BRAND ANIMATION • 9-SECOND REVEAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See GOGO LOG in Motion
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            {videoConfig?.description || "Watch how GOGO LOG transforms manual shop registers and attendance notebooks into simple, organized 1-tap mobile records."}
          </p>
        </div>

        {/* Video Player & Brand Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: High-End Video Player Container */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div 
              ref={containerRef}
              className="group relative w-full max-w-[340px] sm:max-w-[380px] rounded-[36px] bg-[#121316] border border-white/10 p-3 sm:p-4 shadow-2xl transition-all duration-300 hover:border-emerald-500/40"
            >
              {/* Outer Decorative Ambient Glow */}
              <div className="absolute -inset-1 rounded-[38px] bg-gradient-to-b from-cyan-500/20 via-emerald-500/10 to-transparent -z-10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Video Screen Frame */}
              <div className="relative aspect-[9/16] rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
                
                {/* HTML5 Video Element */}
                <video
                  ref={videoRef}
                  src={activeVideoSrc}
                  poster={posterSrc}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Big Center Play/Pause Overlay Indicator on hover */}
                <button
                  onClick={togglePlay}
                  className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer ${
                    isPlaying ? 'opacity-0 group-hover:opacity-80 scale-95 group-hover:scale-100' : 'opacity-100 scale-100'
                  }`}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white fill-white" />
                  ) : (
                    <Play className="w-7 h-7 text-emerald-400 fill-emerald-400 ml-1" />
                  )}
                </button>

                {/* Floating Top Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>GOGO LOG</span>
                  </span>

                  <span className="px-2 py-0.5 rounded-md bg-emerald-400/90 text-black text-[10px] font-black tracking-wider">
                    HD
                  </span>
                </div>

                {/* Bottom Interactive Video Controls Bar */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2 z-10">
                  
                  {/* Progress scrubber bar */}
                  <div 
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all relative overflow-hidden group/bar"
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Button row */}
                  <div className="flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
                      </button>

                      <button
                        onClick={handleRestart}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        title="Replay from start"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-[11px] font-mono text-zinc-400">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-4 h-4 text-zinc-400" />
                            <span className="text-[10px] hidden sm:inline text-zinc-400">Muted</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-[10px] hidden sm:inline text-emerald-400">Sound on</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={toggleFullscreen}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        title="Toggle fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Caption under video */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-bold text-white tracking-wider text-[11px]">
                  {videoConfig?.tagline || "TRACK • RECORD • GROW"}
                </span>
                
                {/* Upload or replace video file button for owner convenience */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  title="Upload / replace with custom video file"
                >
                  <Upload className="w-3 h-3" />
                  <span>{customVideoUrl ? "Custom Video Loaded" : "Upload Video File"}</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/mov"
                  className="hidden"
                  onChange={handleCustomFileUpload}
                />
              </div>

            </div>
          </div>

          {/* Right Column: Key Takeaways & Direct Conversion */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <span>The Story Behind The Brand</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                From Chaotic Paper Registers to Clear 1-Tap Control
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                The animation captures the heartbeat of every small shop proprietor: taking the traditional physical register book, attendance card, and pen, and turning it into a streamlined digital experience right on your phone.
              </p>
            </div>

            {/* 3 Visual Highlights corresponding to the video animation */}
            <div className="space-y-3.5">
              
              <div className="p-4 rounded-2xl bg-[#14151a] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Dynamic 'G' Emblem & Continuous Sync
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Represents seamless cloud synchronization between the shop owner's phone and staff records, working even with spotty internet connectivity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#14151a] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Pen to Digital Sheet: Zero Human Calculation Errors
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Eliminate month-end disputes about attendance days, overtime hours, and cash advances with automated payslip calculations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#14151a] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Track • Record • Grow
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Free up valuable hours every single week so you can focus on expanding your business, delighting customers, and increasing daily revenue.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenGetStarted}
                className="py-3.5 px-6 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer transition-all"
              >
                <span>Start 07-Day Free Access</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={onOpenQrModal}
                className="py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/10 cursor-pointer transition-colors"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Scan QR to Install</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Available for Android & iOS • No credit card required to begin</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
