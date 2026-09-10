import React from 'react';
import { 
  Clock, ShieldCheck, Smile, Smartphone, Zap, 
  TrendingUp, CheckCircle2, ArrowRight, Store, HeartHandshake
} from 'lucide-react';

export const Benefits: React.FC<{ onOpenGetStarted: () => void }> = ({ onOpenGetStarted }) => {
  // Progressive background sequence from Light Grey (01) to Heavy Grey (06)
  const greySequenceStyles = [
    'bg-zinc-400/10 border border-zinc-400/20 shadow-xs hover:border-zinc-300/40',
    'bg-zinc-400/25 border border-zinc-400/35 shadow-xs hover:border-zinc-300/50',
    'bg-zinc-500/40 border border-zinc-400/45 shadow-sm hover:border-zinc-300/60',
    'bg-zinc-600/60 border border-zinc-400/60 shadow-md hover:border-zinc-300/75',
    'bg-zinc-600/80 border border-zinc-300/70 shadow-lg shadow-zinc-950/40 hover:border-zinc-200',
    'bg-zinc-700 border-2 border-zinc-200 shadow-2xl shadow-zinc-950/70 hover:border-white text-zinc-100',
  ];

  const benefits = [
    {
      title: "Save 3+ Hours Every Week",
      desc: "No more spending hours on Sunday night with a pocket calculator recalculating staff shifts, advances, and pay packets.",
      icon: Clock,
      stat: "3+ hrs",
      statLabel: "Saved per week"
    },
    {
      title: "Zero Payment Arguments",
      desc: "Both you and your employee have clear digital records of every cash advance and daily shift. Instant trust.",
      icon: HeartHandshake,
      stat: "100%",
      statLabel: "Dispute-free records"
    },
    {
      title: "Everything In One Place",
      desc: "Emergency contacts, Aadhaar copies, shift times, and salary receipts filed neatly on your shop phone.",
      icon: ShieldCheck,
      stat: "1 App",
      statLabel: "Replaces notebooks"
    },
    {
      title: "Know What's Happening Anywhere",
      desc: "Check who has clocked in while you are away negotiating with suppliers or spending time with family.",
      icon: Smartphone,
      stat: "24/7",
      statLabel: "Peace of mind"
    },
    {
      title: "1-Tap WhatsApp Payslips",
      desc: "Send polite, professional salary receipts to employees directly over WhatsApp without printing paper.",
      icon: Zap,
      stat: "1 Tap",
      statLabel: "Delivery to staff"
    },
    {
      title: "Built for Every Type of Shop",
      desc: "Whether you run a grocery store, apparel boutique, medical store, or cafe with 2 or 20 helpers.",
      icon: Store,
      stat: "0",
      statLabel: "Computer skills needed"
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-transparent border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-semibold border border-white/10">
            <span>Why Switch from Paper?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
            Real Benefits for Real Shop Owners
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            GOGO LOG is not built for corporate executives. It is built to make daily life easier and calmer for hard-working small business owners.
          </p>
        </div>

        {/* Benefits Grid with Light Grey to Heavy Grey sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, i) => {
            const IconComponent = b.icon;
            const isHeavy = i >= 4;

            return (
              <div 
                key={i} 
                className={`p-7 rounded-2xl backdrop-blur-md transition-all flex flex-col justify-between ${
                  greySequenceStyles[i] || 'bg-zinc-700 border-2 border-zinc-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-black text-white block leading-none">{b.stat}</span>
                      <span className="text-[10px] text-zinc-300 font-bold uppercase">{b.statLabel}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-yellow-400 mb-2">
                    {b.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    isHeavy ? 'text-zinc-100 font-medium' : 'text-zinc-300 font-normal'
                  }`}>
                    {b.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center gap-1.5 text-xs font-bold ${
                  isHeavy ? 'border-zinc-500/40 text-emerald-300' : 'border-white/10 text-emerald-400'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified shop benefit</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
