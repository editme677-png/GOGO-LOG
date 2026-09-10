import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { GOGO_LOG_CONFIG } from '../../data/config';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside 
      aria-label="Instant WhatsApp Assistance"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip on Hover / Desktop */}
      <a
        href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-extrabold text-sm shadow-2xl shadow-[#25D366]/40 transition-all duration-300 border border-white/20 cursor-pointer animate-blink"
        id="floating-whatsapp-btn"
        title="Chat on WhatsApp: 9068254755"
      >
        <WhatsAppIcon size={24} variant="monochrome" className="text-white" />
        <div className="flex flex-col text-left leading-tight pr-1">
          <span className="text-[10px] uppercase font-bold text-emerald-950 tracking-wider">Instant Support</span>
          <span className="text-xs font-black text-white">Chat on WhatsApp</span>
        </div>
        <span className="relative flex h-2.5 w-2.5 -ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </a>
    </aside>
  );
};
