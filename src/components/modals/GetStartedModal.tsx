import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../../data/config';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Store, Users, Smartphone } from 'lucide-react';
import { PricingPlan } from '../../types';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
  billingCycle?: 'monthly' | 'yearly';
  onOpenQrModal: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedPlan, 
  billingCycle = 'monthly',
  onOpenQrModal
}) => {
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [employeeCount, setEmployeeCount] = useState('3-5');
  const [planId, setPlanId] = useState(selectedPlan?.id || 'plan-annual');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentPlan = GOGO_LOG_CONFIG.pricing.plans.find(p => p.id === planId) || GOGO_LOG_CONFIG.pricing.plans[2];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#121316] border border-white/10 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[92vh]"
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

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-400 text-black mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Welcome to GOGO LOG, {ownerName || 'Shop Owner'}!
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Your 07-day free trial for <strong>{shopName || 'Your Shop'}</strong> ({currentPlan.name}) has been reserved.
            </p>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-left text-xs text-zinc-300 space-y-2">
              <p className="font-bold text-emerald-400">Next step to access your shop:</p>
              <p>1. We have sent a quick login confirmation link to <strong>{phone}</strong>.</p>
              <p>2. Install the GOGO LOG mobile app on your smartphone to start logging attendance.</p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenQrModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Smartphone className="w-4 h-4 text-black" />
                <span>Scan QR to Install App</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold cursor-pointer border border-white/10"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-emerald-400 text-[11px] font-bold border border-white/10">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>07-Day Full Free Access • No Card Needed</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Get Started with GOGO LOG
              </h3>
              <p className="text-xs text-zinc-400">
                Register your shop in under 60 seconds to organize employee records and payments.
              </p>
            </div>

            {/* Plan Selector */}
            <div className="mb-5 p-3 rounded-2xl bg-[#14151a] border border-white/10">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Selected Plan:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {GOGO_LOG_CONFIG.pricing.plans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setPlanId(plan.id)}
                    className={`p-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      planId === plan.id
                        ? 'bg-emerald-400 text-black font-bold border-emerald-400 shadow-sm'
                        : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <p className="font-bold truncate">{plan.name}</p>
                    <p className={`text-[10px] ${planId === plan.id ? 'text-black/80' : 'text-zinc-400'}`}>
                      {plan.monthlyPrice === "0" 
                        ? "Free (7d)" 
                        : plan.id === 'plan-all-time'
                        ? "₹3999 once"
                        : plan.id === 'plan-annual'
                        ? "₹999/yr"
                        : "₹99/mo"}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                  Shop / Store Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. City Mart & Bakery"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0e11] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-zinc-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                    Owner / Manager Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0e11] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-zinc-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                    Staff / Helper Count
                  </label>
                  <select
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0e11] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <option value="1-2" className="bg-[#14151a] text-white">1 to 2 employees</option>
                    <option value="3-5" className="bg-[#14151a] text-white">3 to 5 employees</option>
                    <option value="6-10" className="bg-[#14151a] text-white">6 to 10 employees</option>
                    <option value="11-25" className="bg-[#14151a] text-white">11 to 25 employees</option>
                    <option value="25+" className="bg-[#14151a] text-white">25+ employees (Multi-branch)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0e11] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-zinc-500"
                />
                <p className="text-[10px] text-zinc-400 mt-1">Used for login verification and instant WhatsApp payslips.</p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>{currentPlan.id === 'plan-trial' ? 'Start 07-Day Free Access' : `Get ${currentPlan.name}`}</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No credit card needed • Cancel anytime with 1 tap</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
