import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../../data/config';
import { 
  X, Smartphone, Download, CheckCircle2, QrCode, ExternalLink, 
  Copy, Check, Globe, Share2 
} from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const targetUrl = GOGO_LOG_CONFIG.appUrl || "https://gogolog.ai.studio";

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#121316] border border-white/10 p-6 sm:p-8 text-white shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mx-auto flex items-center justify-center shadow-md">
            <QrCode className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            Download GOGO LOG
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
            Scan with your phone camera or visit the official application portal below.
          </p>
        </div>

        {/* High-Resolution QR Card Display (Matches Chrome Android Share Screen) */}
        <div className="flex justify-center my-3">
          <div className="p-3 bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-[290px]">
            <img 
              src="/assets/gogo-log-qr-card.svg" 
              alt="Scan with Phone — GOGO LOG" 
              className="w-full aspect-[500/590] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Official Web & App Link Box */}
        <div className="mt-4 p-3.5 bg-[#14151a] rounded-2xl border border-emerald-500/30 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Globe className="w-3.5 h-3.5" />
              Official Application URL
            </span>
            <span className="text-zinc-500 font-mono">Live Web App</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-0.5">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm font-bold text-emerald-300 hover:underline truncate"
            >
              {targetUrl}
            </a>

            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-[11px]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick 3 Instructions */}
        <div className="mt-3.5 bg-[#14151a] p-3.5 rounded-2xl border border-white/5 space-y-2 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Open phone camera & aim at the square code above</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tap banner to open <strong className="text-white">gogolog.ai.studio</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tap "Add to Home screen" or "Install" to place on phone</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-emerald-400/20"
          >
            <ExternalLink className="w-4 h-4 text-black" />
            <span>OPEN GOGO-LOG.AI.STUDIO IN BROWSER</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="/assets/gogo-log-qr-code.png"
              download="gogo-log-qr-code.png"
              className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 font-bold text-xs border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Save PNG</span>
            </a>

            <a
              href="/assets/gogo-log-qr-card.svg"
              download="gogo-log-qr-card.svg"
              className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 font-bold text-xs border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Save SVG</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-semibold cursor-pointer border border-white/5"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
