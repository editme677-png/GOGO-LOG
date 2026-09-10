import React from 'react';
import { UserPlus, Users, ClipboardCheck, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenGetStarted: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGetStarted }) => {
  // Progressive background sequence from Light Black (Step 01) to Heavy Black (Step 04)
  const blackSequenceStyles = [
    'bg-black/25 border border-white/10 shadow-xs hover:border-white/25',
    'bg-black/50 border border-white/15 shadow-sm hover:border-white/30',
    'bg-black/75 border border-zinc-700/60 shadow-md hover:border-zinc-500/70',
    'bg-black border-2 border-zinc-500/80 shadow-2xl shadow-black/90 ring-1 ring-white/10 hover:border-zinc-400',
  ];

  const steps = [
    {
      step: "STEP 01",
      title: "Create Your Account",
      desc: "Install the app and enter your shop name and phone number. No lengthy paperwork or credit card required.",
      time: "Takes 30 seconds",
      icon: UserPlus,
      highlight: "Simple phone verification"
    },
    {
      step: "STEP 02",
      title: "Add Your Employees",
      desc: "Type in your employee names, mobile numbers, roles (cashier, helper, sales), and salary or daily wage.",
      time: "1 minute per staff",
      icon: Users,
      highlight: "Store photos & ID easily"
    },
    {
      step: "STEP 03",
      title: "Manage Your Records",
      desc: "Tap once for daily attendance, record cash advances when you hand over money, and approve leave in seconds.",
      time: "10 seconds daily",
      icon: ClipboardCheck,
      highlight: "Automatic wage balance math"
    },
    {
      step: "STEP 04",
      title: "Run Your Shop Smarter",
      desc: "Share WhatsApp salary slips, know who opened shop on time, and enjoy zero arguments over wages.",
      time: "Permanent peace of mind",
      icon: Store,
      highlight: "Zero lost paper records"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-semibold border border-white/10">
            <span>Simple Setup for Busy Owners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 tracking-tight">
            How It Works in 4 Easy Steps
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            You don't need any technical skills or computer training. If you know how to use WhatsApp, you can use GOGO LOG.
          </p>
        </div>

        {/* 4 Connected Cards / Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.step}
                className={`relative p-6 rounded-2xl backdrop-blur-md transition-all duration-200 flex flex-col justify-between ${
                  blackSequenceStyles[index] || 'bg-black border border-zinc-700'
                }`}
              >
                <div>
                  {/* Top Step Number Badge & Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-lg bg-yellow-400 text-black shadow-md shadow-yellow-400/30">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400">
                      {item.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center mb-4 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step-to-action banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-sm font-bold shadow-md cursor-pointer transition-all animate-blink"
          >
            <span>Start Step 1 – Create Account Free</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>
    </section>
  );
};
