import React, { useState, useEffect } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { Menu, X, Download, ArrowRight, Smartphone, Store } from 'lucide-react';
import { GogoLogLogo } from './common/GogoLogLogo';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenQrModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted, onOpenQrModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Visual Suite", href: "#visual-showcase" },
    { name: "Official Posters", href: "#official-posters" },
    { name: "Features", href: "#features" },
    { name: "App Showcase", href: "#app-showcase" },
    { name: "Pricing", href: "#pricing", badge: "From ₹99" },
    { name: "Download", href: "#download" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0e0204]/90 backdrop-blur-md shadow-2xl border-b border-red-500/25 py-2.5' 
          : 'bg-[#080102]/80 backdrop-blur-sm border-b border-red-500/15 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official GOGO LOG Emblem & Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 group focus:outline-none rounded-lg"
          id="nav-brand-logo"
          title="GOGO LOG - Shop Attendance, Leave & Payroll Ledger"
        >
          <GogoLogLogo size="sm" variant="full" showTagline={false} />
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/35 hidden sm:inline-block ml-1">
            Shop Edition
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-slate-300 flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-1.5 py-0.2 rounded-full bg-red-500/25 text-red-300 text-[10px] font-black border border-red-500/40">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Action Group */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-[#25D366]/25 cursor-pointer animate-blink"
            id="nav-whatsapp-link"
          >
            <WhatsAppIcon size={16} variant="monochrome" className="text-white" />
            <span>WA: 9068254755</span>
          </a>

          <button
            id="nav-cta-download"
            onClick={onOpenQrModal}
            className="px-3 py-1.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors flex items-center gap-1.5 border border-white/10 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-red-400" />
            <span>Download</span>
          </button>

          <button
            id="nav-cta-get-started"
            onClick={onOpenGetStarted}
            className="px-4 py-1.5 text-sm font-black text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 active:scale-95 rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-1.5 cursor-pointer animate-blink"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#25D366] text-white"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={16} variant="monochrome" />
          </a>
          <button
            onClick={onOpenGetStarted}
            className="px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded-lg"
          >
            Trial
          </button>
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0204]/95 backdrop-blur-xl border-b border-red-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <WhatsAppIcon size={18} variant="monochrome" className="text-white" />
              <span>Chat Founder on WhatsApp (9068254755)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQrModal();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-red-400" />
              <span>Scan QR / Download App</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-black text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
            >
              <span>Get Started (07-Day Free Trial)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
