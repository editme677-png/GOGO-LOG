import React, { useState } from 'react';
import { 
  XCircle, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, 
  FileSpreadsheet, BookOpen, Smartphone, Clock, ShieldAlert, Check
} from 'lucide-react';

export const ProblemSolution: React.FC<{ onOpenGetStarted: () => void }> = ({ onOpenGetStarted }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'without' | 'with'>('both');

  const problems = [
    { text: "Employee records scattered everywhere", detail: "Aadhaar photos in WhatsApp, contacts on paper, notes in drawers" },
    { text: "Payment records difficult to track", detail: "Mid-month advances scribbled on diary margins, leading to arguments" },
    { text: "Leave information forgotten", detail: "Shop owner forgets who took days off when calculating month-end wages" },
    { text: "Working hours difficult to maintain", detail: "No clear proof of who arrived on time to open the shop or left early" },
    { text: "Daily tasks difficult to monitor", detail: "Restocking, cleaning, and deliveries require repeatedly asking staff" },
    { text: "Important information stored in notebooks", detail: "Vulnerable to lost pages, tea spills, or employee tampering" },
    { text: "Difficult to find old records", detail: "Impossible to quickly check an employee's salary or leave from 4 months ago" },
  ];

  const solutions = [
    { text: "Everything organized in one place", detail: "Open one simple app on your phone and see your entire shop team" },
    { text: "Easy employee records", detail: "Digital profiles with photos, phone numbers, roles, and emergency contacts" },
    { text: "Payment tracking & receipts", detail: "Log cash advances in 5 seconds and generate clean WhatsApp salary slips" },
    { text: "Leave management made simple", detail: "Mark leaves in 1 tap; automatic salary balance calculation at month-end" },
    { text: "Accurate working information", detail: "Clear shop opening/closing shift logs with zero expensive biometric hardware" },
    { text: "Daily task organization", detail: "Assign daily shop duties and check off completed work with calm certainty" },
    { text: "Better business visibility", detail: "Total clarity on shop staff expenses and dependable attendance trends" },
  ];

  // Progressive background sequence from Light Red (01) to Heavy Red (07)
  const redSequenceStyles = [
    'bg-rose-500/10 border border-rose-500/25 shadow-xs',
    'bg-rose-500/20 border border-rose-500/35 shadow-xs',
    'bg-rose-500/30 border border-rose-500/45 shadow-sm',
    'bg-rose-600/45 border border-rose-400/50 shadow-sm',
    'bg-rose-600/65 border border-rose-400/60 shadow-md',
    'bg-rose-600/85 border border-rose-300/70 shadow-lg shadow-rose-950/40',
    'bg-rose-600 border-2 border-rose-300 shadow-xl shadow-rose-900/50',
  ];

  const xIconStyles = [
    'bg-rose-500/20 text-rose-300',
    'bg-rose-500/25 text-rose-200',
    'bg-rose-500/30 text-rose-200',
    'bg-rose-950/40 text-rose-200',
    'bg-rose-950/50 text-white',
    'bg-rose-950/60 text-white',
    'bg-rose-950 text-rose-300 shadow-xs',
  ];

  // Progressive background sequence from Light Green (01) to Heavy Green (07)
  const greenSequenceStyles = [
    'bg-emerald-500/10 border border-emerald-500/25 shadow-xs',
    'bg-emerald-500/20 border border-emerald-500/35 shadow-xs',
    'bg-emerald-500/30 border border-emerald-500/45 shadow-sm',
    'bg-emerald-600/45 border border-emerald-400/50 shadow-sm',
    'bg-emerald-600/65 border border-emerald-400/60 shadow-md',
    'bg-emerald-600/85 border border-emerald-300/70 shadow-lg shadow-emerald-950/40',
    'bg-emerald-600 border-2 border-emerald-300 shadow-xl shadow-emerald-900/50',
  ];

  const checkIconStyles = [
    'bg-emerald-500/20 text-emerald-300',
    'bg-emerald-500/25 text-emerald-200',
    'bg-emerald-500/30 text-emerald-200',
    'bg-emerald-950/40 text-emerald-200',
    'bg-emerald-950/50 text-white',
    'bg-emerald-950/60 text-white',
    'bg-emerald-950 text-emerald-300 shadow-xs',
  ];

  return (
    <section id="problems" className="py-20 md:py-28 bg-transparent text-white relative overflow-hidden border-t border-red-500/20">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-semibold border border-white/10">
            <span>The Reality of Running a Shop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stop Running Your Shop on <span className="text-rose-400">Scattered Notebooks</span>.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Most small business owners lose hours every week wrestling with lost notes, unclear salary advances, and employee misunderstandings. See the difference GOGO LOG makes:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* WITHOUT GOGO LOG Card */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-black/35 backdrop-blur-md border border-rose-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-rose-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-rose-400">Old Way</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-sky-400">WITHOUT GOGO LOG</h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-950/60 text-rose-300 border border-rose-800/40 font-medium">
                  Manual & Frustrating
                </span>
              </div>

              {/* Problem Points with Light Red to Heavy Red Sequence */}
              <div className="space-y-4">
                {problems.map((prob, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl transition-all duration-200 ${redSequenceStyles[idx] || 'bg-rose-600 border border-rose-300'}`}
                  >
                    <div className={`p-1 rounded-md shrink-0 mt-0.5 ${xIconStyles[idx] || 'bg-rose-950 text-rose-300'}`}>
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${idx >= 4 ? 'text-white' : 'text-orange-400'}`}>{prob.text}</h4>
                      <p className={`text-xs mt-0.5 ${idx >= 4 ? 'text-rose-100' : 'text-zinc-300'}`}>{prob.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-rose-300">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Causes salary disputes & wasted hours
              </span>
            </div>
          </div>

          {/* WITH GOGO LOG Card */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-black/35 backdrop-blur-md border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between">
            {/* Highlight Tag */}
            <div className="absolute -top-3.5 right-8 px-3.5 py-1 rounded-full bg-emerald-400 text-black font-black text-xs uppercase tracking-wider shadow-md">
              The Smarter Way
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">GOGO LOG Digital Shop</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-sky-400">WITH GOGO LOG</h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-700/40 font-medium">
                  Instant Calm & Clarity
                </span>
              </div>

              {/* Solution Points with Light Green to Heavy Green Sequence */}
              <div className="space-y-4">
                {solutions.map((sol, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl transition-all duration-200 ${greenSequenceStyles[idx] || 'bg-emerald-600 border border-emerald-300'}`}
                  >
                    <div className={`p-1 rounded-md shrink-0 mt-0.5 ${checkIconStyles[idx] || 'bg-emerald-950 text-emerald-300'}`}>
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{sol.text}</h4>
                      <p className={`text-xs mt-0.5 ${idx >= 4 ? 'text-emerald-100' : 'text-zinc-300'}`}>{sol.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Conversion Trigger */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Setup takes under 1 minute on your phone
              </span>
              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all"
              >
                <span>Switch to GOGO LOG</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
