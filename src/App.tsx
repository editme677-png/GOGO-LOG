import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from './data/config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisualGraphicsShowcase } from './components/VisualGraphicsShowcase';
import { OfficialPostersSection } from './components/OfficialPostersSection';
import { ProblemSolution } from './components/ProblemSolution';
import { CoreFeatures } from './components/CoreFeatures';
import { HowItWorks } from './components/HowItWorks';
import { AppScreenshotShowcase } from './components/AppScreenshotShowcase';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { DownloadSection } from './components/DownloadSection';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

// Modals
import { QrModal } from './components/modals/QrModal';
import { GetStartedModal } from './components/modals/GetStartedModal';
import { ScreenshotLightboxModal } from './components/modals/ScreenshotLightboxModal';
import { LegalModal } from './components/modals/LegalModal';
import { AssetManagerGuideModal } from './components/modals/AssetManagerGuideModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { WhatsAppIcon } from './components/common/WhatsAppIcon';
import { RedBlackMotionBackground } from './components/common/RedBlackMotionBackground';

import { PricingPlan, ScreenshotItem } from './types';
import { Smartphone, Sparkles, Download, ArrowRight, Layers } from 'lucide-react';

export default function App() {
  // Modal states
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isAssetGuideOpen, setIsAssetGuideOpen] = useState(false);
  const [selectedPricingPlan, setSelectedPricingPlan] = useState<PricingPlan | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Lightbox screenshot state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<ScreenshotItem | null>(null);

  // Legal modal state
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const handleOpenGetStarted = (plan?: PricingPlan, cycle?: 'monthly' | 'yearly') => {
    if (plan) setSelectedPricingPlan(plan);
    if (cycle) setBillingCycle(cycle);
    setIsGetStartedOpen(true);
  };

  const handleOpenLightbox = (screenshot: ScreenshotItem) => {
    setActiveScreenshot(screenshot);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080102] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden">
      
      {/* Dynamic Red and Black Mix Motion Graphics Background (Faithfully modeled from provided reference video) */}
      <RedBlackMotionBackground />

      {/* 1. NAVBAR */}
      <Navbar 
        onOpenGetStarted={() => handleOpenGetStarted()} 
        onOpenQrModal={() => setIsQrModalOpen(true)} 
      />

      <main className="flex-grow relative z-10">
        {/* 2. HERO SECTION */}
        <Hero 
          onOpenGetStarted={() => handleOpenGetStarted()} 
          onOpenQrModal={() => setIsQrModalOpen(true)} 
        />

        {/* 2.5 HIGH-QUALITY GRAPHICS SHOWCASE (Replacing animated video with rich interactive graphic storyboard) */}
        <VisualGraphicsShowcase 
          onOpenGetStarted={() => handleOpenGetStarted()}
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />

        {/* 2.7 OFFICIAL PROMOTIONAL POSTERS (Poster 1 & Poster 2 Data & Showcase) */}
        <OfficialPostersSection 
          onOpenWhatsApp={() => window.open(GOGO_LOG_CONFIG.socialLinks.whatsapp, '_blank')}
        />

        {/* 3. PROBLEM / SOLUTION SECTION */}
        <ProblemSolution 
          onOpenGetStarted={() => handleOpenGetStarted()} 
        />

        {/* 4. FEATURES SECTION */}
        <CoreFeatures 
          onOpenGetStarted={() => handleOpenGetStarted()} 
        />

        {/* 5. HOW IT WORKS */}
        <HowItWorks 
          onOpenGetStarted={() => handleOpenGetStarted()} 
        />

        {/* 6. APP SCREENSHOT SHOWCASE */}
        <AppScreenshotShowcase 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* 7. BENEFITS */}
        <Benefits 
          onOpenGetStarted={() => handleOpenGetStarted()} 
        />

        {/* 8. PRICING / SUBSCRIPTION */}
        <Pricing 
          onSelectPlan={(plan, cycle) => handleOpenGetStarted(plan, cycle)} 
        />

        {/* 9. DOWNLOAD / QR */}
        <DownloadSection 
          onOpenQrModal={() => setIsQrModalOpen(true)} 
          onOpenGetStarted={() => handleOpenGetStarted()} 
        />

        {/* 10. TRUST / TESTIMONIALS */}
        <TrustSection />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. CONTACT / SUPPORT */}
        <ContactSection />

        {/* 13. FINAL CTA */}
        <FinalCta 
          onOpenGetStarted={() => handleOpenGetStarted()} 
          onOpenQrModal={() => setIsQrModalOpen(true)} 
        />
      </main>

      {/* 14. FOOTER */}
      <Footer 
        onOpenGetStarted={() => handleOpenGetStarted()} 
        onOpenQrModal={() => setIsQrModalOpen(true)} 
        onOpenLegal={(type) => setLegalModalType(type)} 
      />

      {/* Sticky Mobile Quick Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0e0204]/90 backdrop-blur-xl border-t border-red-500/30 p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#25D366] text-zinc-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-sm"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon size={18} variant="monochrome" className="text-zinc-950" />
        </a>

        <button
          onClick={() => setIsQrModalOpen(true)}
          className="flex-1 py-2.5 px-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Smartphone className="w-4 h-4 text-red-400" />
          <span>Scan / App</span>
        </button>

        <button
          onClick={() => handleOpenGetStarted()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs flex items-center justify-center gap-1 shadow-lg shadow-red-600/30 cursor-pointer"
        >
          <span>Free Trial</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Persistent Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />

      {/* Floating Owner Asset Status Indicator */}
      <button
        onClick={() => setIsAssetGuideOpen(true)}
        className="fixed bottom-20 md:bottom-24 right-5 z-30 px-3.5 py-1.5 rounded-full bg-[#180307]/90 backdrop-blur-md text-white hover:bg-[#2c050e] border border-red-500/40 shadow-xl shadow-red-950/40 flex items-center gap-2 text-xs font-semibold cursor-pointer transition-all hover:scale-105 group"
        title="View asset integration checklist"
      >
        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <span className="hidden sm:inline">Owner Guide:</span>
        <span className="text-red-400 font-bold">Assets & Plans</span>
      </button>

      {/* MODALS */}
      <QrModal 
        isOpen={isQrModalOpen} 
        onClose={() => setIsQrModalOpen(false)} 
      />

      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
        selectedPlan={selectedPricingPlan}
        billingCycle={billingCycle}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      <ScreenshotLightboxModal 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        screenshots={GOGO_LOG_CONFIG.screenshots}
        currentScreenshot={activeScreenshot}
        onSelectScreenshot={(s) => setActiveScreenshot(s)}
      />

      <LegalModal 
        isOpen={Boolean(legalModalType)} 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />

      <AssetManagerGuideModal 
        isOpen={isAssetGuideOpen} 
        onClose={() => setIsAssetGuideOpen(false)} 
      />

    </div>
  );
}
