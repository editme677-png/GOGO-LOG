import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Info, Zap, Crown, Flame } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'monthly' | 'yearly') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const { plans, currencySymbol } = GOGO_LOG_CONFIG.pricing;

  // Background colour yellow-orange-maroon-red sequence
  const pricingThemes = [
    // 01: Yellow
    {
      card: 'bg-yellow-400 text-slate-950 border-2 border-yellow-200 shadow-xl shadow-yellow-950/30',
      badge: 'bg-slate-950 text-yellow-300 border border-slate-950 shadow-md font-black',
      title: 'text-slate-950',
      titleIcon: 'text-slate-950',
      capacity: 'bg-slate-950/15 text-slate-950 border border-slate-950/25 font-bold',
      desc: 'text-slate-900 font-medium',
      price: 'text-slate-950',
      period: 'text-slate-800 font-bold',
      note: 'text-slate-950 font-black',
      featuresLabel: 'text-slate-900 font-black',
      featureText: 'text-slate-950 font-medium',
      checkIcon: 'bg-slate-950 text-yellow-400',
      divider: 'border-slate-950/20',
      btn: 'bg-slate-950 hover:bg-slate-900 text-yellow-300 font-black shadow-lg shadow-slate-950/30 border border-slate-800 active:scale-[0.98]',
      btnArrow: 'text-yellow-300',
    },
    // 02: Orange
    {
      card: 'bg-gradient-to-b from-orange-500 to-orange-600 text-white border-2 border-orange-300 shadow-xl shadow-orange-950/40',
      badge: 'bg-white text-orange-600 border border-white font-black shadow-md',
      title: 'text-white',
      titleIcon: 'text-white',
      capacity: 'bg-orange-950/40 text-orange-100 border border-orange-300/30 font-bold',
      desc: 'text-orange-100 font-normal',
      price: 'text-white',
      period: 'text-orange-100 font-bold',
      note: 'text-orange-100 font-bold',
      featuresLabel: 'text-orange-100 font-bold',
      featureText: 'text-white font-medium',
      checkIcon: 'bg-white text-orange-600',
      divider: 'border-orange-400/40',
      btn: 'bg-white hover:bg-orange-50 text-orange-600 font-black shadow-lg shadow-orange-950/30 active:scale-[0.98]',
      btnArrow: 'text-orange-600',
    },
    // 03: Maroon
    {
      card: 'bg-gradient-to-b from-[#800000] via-[#650000] to-[#4a0000] text-white border-2 border-rose-400/60 shadow-2xl shadow-rose-950/60 scale-[1.02] z-10',
      badge: 'bg-amber-300 text-[#4a0000] border border-amber-300 font-black shadow-md',
      title: 'text-white',
      titleIcon: 'text-amber-300',
      capacity: 'bg-black/35 text-rose-100 border border-rose-300/30 font-bold',
      desc: 'text-rose-100/90 font-normal',
      price: 'text-amber-300',
      period: 'text-rose-200 font-bold',
      note: 'text-amber-300 font-bold',
      featuresLabel: 'text-rose-200 font-bold',
      featureText: 'text-rose-50 font-medium',
      checkIcon: 'bg-amber-300 text-[#4a0000]',
      divider: 'border-rose-400/30',
      btn: 'bg-amber-300 hover:bg-amber-200 text-[#4a0000] font-black shadow-lg shadow-black/40 active:scale-[0.98]',
      btnArrow: 'text-[#4a0000]',
    },
    // 04: Red
    {
      card: 'bg-gradient-to-b from-red-600 to-red-700 text-white border-2 border-red-300 shadow-xl shadow-red-950/50',
      badge: 'bg-white text-red-600 border border-white font-black shadow-md',
      title: 'text-white',
      titleIcon: 'text-white',
      capacity: 'bg-red-950/45 text-red-100 border border-red-300/40 font-bold',
      desc: 'text-red-100 font-normal',
      price: 'text-white',
      period: 'text-red-100 font-bold',
      note: 'text-red-100 font-bold',
      featuresLabel: 'text-red-100 font-bold',
      featureText: 'text-white font-medium',
      checkIcon: 'bg-white text-red-600',
      divider: 'border-red-400/40',
      btn: 'bg-white hover:bg-red-50 text-red-700 font-black shadow-lg shadow-red-950/30 active:scale-[0.98]',
      btnArrow: 'text-red-700',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clear & Affordable Plans for Every Shop</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-sky-400 tracking-tight">
            Simple Subscription Plans
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business: start with a <strong>07-day free trial</strong>, flexible <strong>₹99 monthly</strong>, value-packed <strong>₹999 annual</strong>, or permanent <strong>₹3999 all-time lifetime access</strong>.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const isAllTime = plan.id === 'plan-all-time';
            const isTrial = plan.id === 'plan-trial';
            const theme = pricingThemes[idx] || pricingThemes[0];

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 backdrop-blur-md ${theme.card}`}
              >
                {/* Badge Header */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] uppercase tracking-wider shadow-md whitespace-nowrap ${theme.badge}`}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <h3 className={`text-xl font-black flex items-center gap-1.5 ${theme.title}`}>
                      {isAllTime && <Crown className={`w-4 h-4 ${theme.titleIcon}`} />}
                      {plan.isPopular && <Flame className={`w-4 h-4 ${theme.titleIcon}`} />}
                      <span>{plan.name}</span>
                    </h3>
                  </div>

                  <div className="mb-3">
                    <span className={`text-[11px] px-2.5 py-1 rounded-lg inline-block ${theme.capacity}`}>
                      {plan.employeeCapacity}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed min-h-[40px] ${theme.desc}`}>
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className={`my-5 pb-5 border-b ${theme.divider}`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight font-mono ${theme.price}`}>
                        {isTrial ? "Free" : `${currencySymbol}${plan.monthlyPrice}`}
                      </span>
                      <span className={`text-xs ${theme.period}`}>
                        / {plan.periodText.replace(/^[0-9]+-Day\s+/, '')}
                      </span>
                    </div>

                    {plan.trialNote && (
                      <p className={`text-[11px] mt-1.5 flex items-center gap-1 ${theme.note}`}>
                        <span>✓</span>
                        <span>{plan.trialNote}</span>
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-7">
                    <span className={`text-[11px] uppercase tracking-wider block ${theme.featuresLabel}`}>
                      Features Included:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs leading-snug">
                        <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${theme.checkIcon}`}>
                          <Check className="w-3 h-3 font-bold" />
                        </div>
                        <span className={theme.featureText}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan, plan.id === 'plan-annual' ? 'yearly' : 'monthly')}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer animate-blink ${theme.btn}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className={`w-4 h-4 ${theme.btnArrow}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Assistance Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-black/35 backdrop-blur-md border border-red-500/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300 shadow-md">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-yellow-400 text-sm">Need help choosing a subscription for your shop?</p>
              <p className="text-zinc-400 text-xs">Chat directly with our team on WhatsApp for instant activation & setup assistance.</p>
            </div>
          </div>
          <a
            href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/30 transition-colors animate-blink cursor-pointer"
          >
            WhatsApp: 9068254755
          </a>
        </div>

      </div>
    </section>
  );
};
