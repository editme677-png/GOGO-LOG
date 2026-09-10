import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../../data/config';
import { X, CheckCircle2, Clock, Upload, Sparkles, FileText, Image, QrCode, Globe, DollarSign, Phone, Copy, Check } from 'lucide-react';

interface AssetManagerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLivePreviewImage?: (key: string, url: string) => void;
}

export const AssetManagerGuideModal: React.FC<AssetManagerGuideModalProps> = ({ 
  isOpen, 
  onClose,
  onLivePreviewImage
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const assetChecklist = [
    {
      name: "1. GOGO LOG Application Screenshots",
      desc: "Up to 8 screens (Dashboard, Staff list, Salary advance ledger, Leave register, Store tasks, Reports, Broadcasts).",
      status: GOGO_LOG_CONFIG.screenshots.some(s => Boolean(s.imageUrl)) ? "Active" : "Placeholders Ready",
      location: "src/data/config.ts -> screenshots[].imageUrl",
      icon: Image
    },
    {
      name: "2. GOGO LOG Advertising Poster",
      desc: "Promotional banner/poster to showcase marketing art strategically.",
      status: GOGO_LOG_CONFIG.posterImage ? "Active" : "Ready to receive",
      location: "src/data/config.ts -> posterImage",
      icon: Sparkles
    },
    {
      name: "3. Official Download QR Code",
      desc: "Exact scannable QR code image for phone installs (unmodified).",
      status: GOGO_LOG_CONFIG.qrCodeImage ? "Custom QR Active" : "Vector QR Active",
      location: "src/data/config.ts -> qrCodeImage",
      icon: QrCode
    },
    {
      name: "4. Official Domain Name",
      desc: "Your custom production domain (e.g., gogolog.in, gogolog.com).",
      status: `Current: ${GOGO_LOG_CONFIG.domain}`,
      location: "src/data/config.ts -> domain",
      icon: Globe
    },
    {
      name: "5. Real Subscription Pricing",
      desc: "Updated plans: 07-Day Free Trial, Monthly (₹99), Annual (₹999), and All Time (₹3999).",
      status: "Configured (₹0, ₹99, ₹999, ₹3999)",
      location: "src/data/config.ts -> pricing.plans",
      icon: DollarSign
    },
    {
      name: "6. Official Contact & Support Numbers",
      desc: "WhatsApp help number, call center line, support email address.",
      status: `Active: ${GOGO_LOG_CONFIG.contact.phone}`,
      location: "src/data/config.ts -> contact",
      icon: Phone
    },
    {
      name: "7. Application Download Link / APK",
      desc: "Link to APK file or Google Play / App Store listing.",
      status: "Download section ready",
      location: "src/data/config.ts -> downloadLink",
      icon: Upload
    }
  ];

  const handleCopyPath = () => {
    navigator.clipboard.writeText("src/data/config.ts");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#121316] border border-white/10 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-emerald-400 text-xs font-bold mb-1 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Owner Asset Integration Hub</span>
            </div>
            <h3 className="text-xl font-black text-white">
              GOGO LOG Asset Checklist & Status
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Source of Truth Notice */}
        <div className="my-4 p-4 rounded-2xl bg-[#14151a] text-white border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <p className="font-bold text-emerald-400">Single Central Configuration File:</p>
            <p className="text-zinc-300 font-mono mt-0.5">/src/data/config.ts</p>
          </div>
          <button
            onClick={handleCopyPath}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-200 font-semibold flex items-center gap-1.5 border border-white/10 cursor-pointer transition-colors"
          >
            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCode ? "Copied!" : "Copy Path"}</span>
          </button>
        </div>

        {/* Asset Items List */}
        <div className="space-y-3 my-4">
          <p className="text-xs text-zinc-400 font-medium">
            Every section on this website is already built, responsive, and wired to this single config. When you upload your assets, update that file to immediately see them live.
          </p>

          {assetChecklist.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#14151a] border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-400 border border-emerald-500/20 font-semibold shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{item.desc}</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-1">Config Key: {item.location}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs cursor-pointer transition-colors"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
