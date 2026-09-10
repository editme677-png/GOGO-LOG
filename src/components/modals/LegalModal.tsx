import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';
import { GOGO_LOG_CONFIG } from '../../data/config';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: "Privacy Policy",
          icon: ShieldCheck,
          body: (
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white">Effective Date:</strong> January 2025<br />
                At <strong className="text-white">{GOGO_LOG_CONFIG.productName}</strong> ("we", "our", or "us"), we are committed to protecting the privacy of small shop owners, business proprietors, and their employees.
              </p>
              <h4 className="font-bold text-white text-base">1. Information We Collect</h4>
              <p>
                We collect shop details (shop name, address, business category), proprietor contact information (name, phone number, email), and employee records you choose to input (staff names, roles, daily/monthly wages, attendance marks, and cash advances).
              </p>
              <h4 className="font-bold text-white text-base">2. How We Use Your Data</h4>
              <p>
                Your data is strictly utilized to provide application functionality: computing employee attendance, generating payslip records, synchronizing data across your devices, and sending requested notifications. We <strong className="text-white">never</strong> sell or rent employee or shop records to third-party advertisers.
              </p>
              <h4 className="font-bold text-white text-base">3. Data Security</h4>
              <p>
                All data transmission between the mobile application and cloud servers is protected with standard industry encryption (SSL/TLS). Your data is backed up regularly to prevent loss.
              </p>
              <h4 className="font-bold text-white text-base">4. Contacting Us</h4>
              <p>
                For privacy inquiries or account data export requests, email us at <strong className="text-emerald-400">{GOGO_LOG_CONFIG.contact.email}</strong>.
              </p>
            </div>
          )
        };
      case 'terms':
        return {
          title: "Terms & Conditions",
          icon: FileText,
          body: (
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                Welcome to <strong className="text-white">{GOGO_LOG_CONFIG.productName}</strong>. By creating an account or subscribing to our service, you agree to these Terms and Conditions.
              </p>
              <h4 className="font-bold text-white text-base">1. Service Scope</h4>
              <p>
                GOGO LOG provides small business employee management tools, including shift logging, advance payment record keeping, leave tracking, and payslip generation. It is designed as a record-keeping aid for proprietors.
              </p>
              <h4 className="font-bold text-white text-base">2. Account Responsibility</h4>
              <p>
                You are responsible for maintaining the confidentiality of your mobile login OTP/credentials and ensuring that records entered regarding staff hours and wage payments comply with applicable local employment guidelines.
              </p>
              <h4 className="font-bold text-white text-base">3. Subscription & Billing</h4>
              <p>
                Subscriptions are billed on a recurring monthly or annual basis as selected. You may cancel at any time prior to the billing renewal date through account settings.
              </p>
            </div>
          )
        };
      case 'refund':
        return {
          title: "Refund & Cancellation Policy",
          icon: RefreshCw,
          body: (
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                We want every shop owner to be completely satisfied with <strong className="text-white">{GOGO_LOG_CONFIG.productName}</strong>.
              </p>
              <h4 className="font-bold text-white text-base">1. 07-Day Free Trial</h4>
              <p>
                Every new shop begins with a 07-day free trial with zero payment obligation. You can explore all features before deciding to subscribe.
              </p>
              <h4 className="font-bold text-white text-base">2. Money-Back Guarantee</h4>
              <p>
                If you purchase a paid subscription and find that GOGO LOG is not a fit for your shop operations, you may request a 100% full refund within 14 days of your initial payment.
              </p>
              <h4 className="font-bold text-white text-base">3. Cancellation Anytime</h4>
              <p>
                You can cancel your subscription at any time. Upon cancellation, you will retain access until the end of your prepaid billing period with no further charges.
              </p>
            </div>
          )
        };
    }
  };

  const current = getContent();
  const IconComp = current.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#121316] border border-white/10 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center">
              <IconComp className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">{current.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6">
          {current.body}
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs cursor-pointer transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
