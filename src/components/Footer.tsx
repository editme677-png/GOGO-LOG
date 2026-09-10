import React from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { ArrowRight, Smartphone, Store, ShieldCheck, Heart } from 'lucide-react';
import { GogoLogLogo } from './common/GogoLogLogo';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface FooterProps {
  onOpenGetStarted: () => void;
  onOpenQrModal: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetStarted, onOpenQrModal, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Visual Suite", href: "#visual-showcase" },
    { name: "Official Posters", href: "#official-posters" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Download", href: "#download" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if any actual social links were provided
  const hasSocials = Object.values(GOGO_LOG_CONFIG.socialLinks).some(url => Boolean(url));

  return (
    <footer className="bg-transparent text-slate-400 border-t border-red-500/20 text-xs sm:text-sm relative z-10 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <GogoLogLogo size="sm" variant="full" />
            </div>

            {/* Exact requested short description */}
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Simple employee management for smarter small businesses.
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-500 font-mono">
                Official Domain:{' '}
                <a 
                  href={GOGO_LOG_CONFIG.appUrl || "https://gogolog.ai.studio"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  {GOGO_LOG_CONFIG.domain}
                </a>
              </span>
            </div>

            {/* Social Links with Official WhatsApp Icon */}
            {hasSocials && (
              <div className="flex items-center gap-3 pt-2">
                {GOGO_LOG_CONFIG.socialLinks.whatsapp && (
                  <a 
                    href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 cursor-pointer animate-blink"
                  >
                    <WhatsAppIcon size={16} variant="monochrome" className="text-white" />
                    <span>WhatsApp: 9068254755</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-black tracking-wider text-orange-500">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-slate-400">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Footer CTA Column (Section 17 requirement) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-black tracking-wider text-yellow-400">
              Start Managing Smarter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Take the first step toward stress-free shop records today.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenGetStarted}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer animate-blink"
              >
                <span>Start Free 07-Day Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenQrModal}
                className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-orange-500 font-bold">Download App via QR</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} {GOGO_LOG_CONFIG.productName}. All rights reserved. Built for small business owners.
          </div>

          {/* Legal Links (Section 17 requirement) */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
