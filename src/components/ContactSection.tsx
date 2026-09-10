import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Mail, Phone, Clock, MapPin, Send, 
  CheckCircle2, Sparkles, Store, ShieldCheck
} from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    shopName: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Section 16 requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-red-300 text-xs font-bold border border-red-500/30">
            <WhatsAppIcon size={16} variant="color" />
            <span>Dedicated Shop Owner Support (WhatsApp: 9068254755)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
            Need Help? We're Here for You.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have questions about adding employees, calculating advances, or choosing a subscription plan? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-black/35 backdrop-blur-md text-white border border-red-500/25 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                <span>Fastest Ways to Reach Us</span>
              </h3>
              <p className="text-sm text-slate-300">
                We speak your language and understand the day-to-day realities of keeping a shop running smoothly.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp Channel */}
                <a 
                  href={GOGO_LOG_CONFIG.socialLinks.whatsapp || `https://wa.me/919068254755?text=Hello%20GOGO%20LOG`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 hover:border-[#25D366] transition-all group shadow-sm hover:shadow-md hover:shadow-[#25D366]/20 cursor-pointer animate-blink"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <WhatsAppIcon size={24} variant="monochrome" className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-black tracking-wider text-[#25D366]">WhatsApp Support (Fastest)</span>
                      <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] font-bold px-1.5 py-0.5 rounded">Online</span>
                    </div>
                    <p className="text-base font-black text-white mt-0.5">{GOGO_LOG_CONFIG.contact.whatsapp}</p>
                    <p className="text-[11px] text-slate-300 mt-0.5">Click to chat directly with Founder Dadul Gogoi</p>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a 
                  href={`tel:${GOGO_LOG_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">Phone Support</span>
                    <p className="text-sm font-bold text-white">{GOGO_LOG_CONFIG.contact.phone}</p>
                    <p className="text-[11px] text-slate-400">Direct assistance from onboarding team</p>
                  </div>
                </a>

                {/* Email Support */}
                <a 
                  href={`mailto:${GOGO_LOG_CONFIG.contact.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-400">Email Help Desk</span>
                    <p className="text-sm font-bold text-white">{GOGO_LOG_CONFIG.contact.email}</p>
                    <p className="text-[11px] text-slate-400">Response within 24 business hours</p>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-white/10 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{GOGO_LOG_CONFIG.contact.supportHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{GOGO_LOG_CONFIG.contact.officeLocation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-black/35 backdrop-blur-md border border-red-500/25 shadow-xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Tell us about your shop and we'll help you get started with the best setup for your staff.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-400 text-black mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You, {formData.ownerName || 'Shop Owner'}!</h4>
                  <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                    We have received your message. Our support team will contact you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ ownerName: '', shopName: '', phone: '', message: '' });
                    }}
                    className="mt-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-red-500/20 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                        Shop / Store Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patel Supermarket"
                        value={formData.shopName}
                        onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-red-500/20 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-red-500/20 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                      How Can We Help You?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. How do I record daily wages for 4 helpers? Can I manage multiple counters?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-red-500/20 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all disabled:opacity-70 animate-blink"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Contact GOGO LOG</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-400 text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    We respect your privacy. No spam calls or promotional sharing.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
