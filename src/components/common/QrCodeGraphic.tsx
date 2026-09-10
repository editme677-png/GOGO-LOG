import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../../data/config';
import { QrCode, Smartphone, Copy, Check, ExternalLink } from 'lucide-react';

interface QrCodeGraphicProps {
  className?: string;
  size?: number;
  showLabel?: boolean;
  showCardFrame?: boolean;
  showUrlBadge?: boolean;
}

export const QrCodeGraphic: React.FC<QrCodeGraphicProps> = ({ 
  className = "", 
  size = 200,
  showLabel = true,
  showCardFrame = false,
  showUrlBadge = false
}) => {
  const [copied, setCopied] = useState(false);
  const targetUrl = GOGO_LOG_CONFIG.appUrl || "https://gogolog.ai.studio";
  const qrCardSrc = "/assets/gogo-log-qr-card.svg";
  const qrCodeSrc = "/assets/gogo-log-qr-code.svg";

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If card frame mode is requested or for standard large display
  if (showCardFrame) {
    return (
      <div className={`flex flex-col items-center justify-center p-3 bg-white rounded-3xl shadow-xl border border-slate-200 text-center max-w-[320px] w-full ${className}`}>
        {/* Scannable Card Image matching Chrome Android Share Sheet */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
          <img 
            src={qrCardSrc} 
            alt="Scan with Phone — GOGO LOG" 
            style={{ width: size, height: size }}
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {showUrlBadge && (
          <div className="mt-2.5 w-full flex items-center justify-between gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-left">
            <div className="min-w-0">
              <p className="text-[10px] uppercase font-bold text-slate-500">App URL</p>
              <a 
                href={targetUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-emerald-700 hover:underline truncate block"
              >
                {targetUrl.replace(/^https?:\/\//, '')}
              </a>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors shrink-0"
              title="Copy URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  // If size is small (like in navbar or hero badge), render clean QR code image or clean card
  return (
    <div className={`flex flex-col items-center justify-center p-2.5 bg-white rounded-2xl shadow-sm border border-slate-200 text-center ${className}`}>
      <div 
        className="relative flex items-center justify-center bg-white p-1 rounded-xl"
        style={{ width: size, height: size }}
      >
        <img 
          src={size <= 100 ? qrCodeSrc : qrCardSrc} 
          alt="GOGO LOG QR Code" 
          width={size}
          height={size}
          className="object-contain w-full h-full"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {showLabel && (
        <div className="mt-2">
          <p className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Scan with Phone</span>
          </p>
          <p className="text-[10px] text-slate-500 font-medium">Point camera to open</p>
        </div>
      )}
    </div>
  );
};
