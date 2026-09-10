import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Calendar, Clock, Award, Users, Megaphone, ReceiptText, ChevronRight
} from 'lucide-react';
import { 
  TaskManagementGraphic, 
  PayslipAuditGraphic, 
  LeaveManagementGraphic, 
  WorkingHoursGraphic, 
  BroadcastMessageGraphic, 
  BrighterTomorrowGraphic 
} from './graphics/StoryboardGraphics';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { GogoLogLogo } from './common/GogoLogLogo';

interface VisualGraphicsShowcaseProps {
  onOpenGetStarted: () => void;
  onOpenQrModal: () => void;
}

interface FeatureGraphicItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  graphic: React.ReactNode;
  highlights: string[];
  metrics: { label: string; value: string }[];
  description: string;
}

export const VisualGraphicsShowcase: React.FC<VisualGraphicsShowcaseProps> = ({
  onOpenGetStarted,
  onOpenQrModal
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features: FeatureGraphicItem[] = [
    {
      id: 'tasks',
      title: 'Manage Your Employee Tasks',
      subtitle: 'Organise daily work with ease',
      badge: 'TASK ENGINE',
      icon: Calendar,
      graphic: <TaskManagementGraphic className="max-w-[340px] sm:max-w-[380px] mx-auto" />,
      highlights: [
        'Assign daily counter, inventory & delivery checklists in 1 tap',
        'Real-time task completion markers with timestamp verification',
        'Automatic task carry-over for pending opening/closing shop duties',
        'Prevent missed duties during peak store rush hours'
      ],
      metrics: [
        { label: 'Task Completion', value: '99.4%' },
        { label: 'Time Saved Daily', value: '45 mins' },
        { label: 'Shop Audit Score', value: '10/10' }
      ],
      description: 'Replace messy wall chalkboards and paper notebooks with an intuitive visual task board customized for Indian retail shops and counters.'
    },
    {
      id: 'payslips',
      title: 'Payslips & Audit Ready',
      subtitle: 'Keep accurate records and stay audit ready',
      badge: 'PAYROLL & AUDIT',
      icon: ReceiptText,
      graphic: <PayslipAuditGraphic className="max-w-[340px] sm:max-w-[380px] mx-auto" />,
      highlights: [
        'Instant 1-click PDF/WhatsApp salary slips generated automatically',
        'Automatic deduction calculations for wage advances & late arrivals',
        'Zero disputes on pay day with transparent wage breakdowns',
        'Permanent digital archive for tax filing and shop compliance'
      ],
      metrics: [
        { label: 'Payroll Speed', value: '< 2 mins' },
        { label: 'Salary Accuracy', value: '100%' },
        { label: 'Advance Tracking', value: 'Instant ₹' }
      ],
      description: 'Empower both shop owners and retail employees with transparent, tamper-proof salary slips and wage advance ledgers.'
    },
    {
      id: 'leaves',
      title: 'Leave Management',
      subtitle: 'Track and update employee leaves',
      badge: 'ATTENDANCE & LEAVE',
      icon: Users,
      graphic: <LeaveManagementGraphic className="max-w-[340px] sm:max-w-[380px] mx-auto" />,
      highlights: [
        'Record planned vacations, emergency leaves, and half-day shifts',
        'Live calendar view showing scheduled shop floor coverage',
        'Automatic salary pro-rating based on approved leave balances',
        'Ensure continuous store presence and avoid sudden staff shortages'
      ],
      metrics: [
        { label: 'Shift Coverage', value: '100%' },
        { label: 'Leave Approvals', value: 'Real-time' },
        { label: 'Dispute Reduction', value: 'Zero' }
      ],
      description: 'Simple visual leave approvals ensure your cash counter, billing desk, and stock room are always adequately staffed.'
    },
    {
      id: 'hours',
      title: 'Working Hours & Shifts',
      subtitle: 'Monitor & manage work hours',
      badge: 'SHIFT TRACKER',
      icon: Clock,
      graphic: <WorkingHoursGraphic className="max-w-[340px] sm:max-w-[380px] mx-auto" />,
      highlights: [
        'Exact check-in and check-out timestamp logging with geolocation verification',
        'Accurate overtime tracking for festival rush hours and extended nights',
        'Monthly working hours summary exported directly to Excel/PDF',
        'Encourages punctual attendance through clear visual recognition'
      ],
      metrics: [
        { label: 'Punctuality Boost', value: '+38%' },
        { label: 'Overtime Accuracy', value: '100%' },
        { label: 'Check-in Time', value: '3 secs' }
      ],
      description: 'Accurately monitor daily work hours and overtime without costly biometric thumb scanners or broken hardware.'
    },
    {
      id: 'broadcast',
      title: 'Broadcast Message',
      subtitle: 'Reach everyone instantly',
      badge: 'TEAM COMMUNICATION',
      icon: Megaphone,
      graphic: <BroadcastMessageGraphic className="max-w-[340px] sm:max-w-[380px] mx-auto" />,
      highlights: [
        'Push emergency announcements, shift updates, and targets to all staff',
        'High-priority notification delivery guaranteed across devices',
        'Target specific roles (cashiers, sales executives, warehouse staff)',
        'Celebrate employee birthdays, sales milestones, and weekly targets'
      ],
      metrics: [
        { label: 'Message Reach', value: 'Instant' },
        { label: 'Delivery Rate', value: '100%' },
        { label: 'Team Alignment', value: 'High' }
      ],
      description: 'Keep your entire retail team in sync without chaotic WhatsApp groups where critical business announcements get lost.'
    }
  ];

  const current = features[activeTab];

  return (
    <section id="visual-showcase" className="relative py-20 sm:py-28 bg-transparent border-t border-red-500/25 overflow-hidden">
      {/* Background Red & Black Motion Graphic Gradients & Laser Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/15 rounded-full blur-[140px] -z-10 animate-pulse [animation-duration:6s]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-rose-700/15 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-red-900/20 rounded-full blur-[100px] -z-10" />
        {/* Fluid Red & Black Motion Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff1e4215_1px,transparent_1px),linear-gradient(to_bottom,#ff1e4215_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/20 border-2 border-yellow-400 text-yellow-300 text-xs font-black uppercase tracking-wider mb-4 shadow-md shadow-yellow-400/25">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-yellow-300 font-extrabold">Official Visual Storyboard & Feature Suite</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            High-Performance Shop Ledger.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500">
              Designed for Visual Clarity.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineered specifically for Indian retail shops, hardware counters, supermarkets, and service teams. 
            All essential shop tools in one lightning-fast, high-resolution interface.
          </p>
        </div>

        {/* Feature Tabs Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isActive 
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500 shadow-lg shadow-red-600/35 scale-105' 
                    : 'bg-[#140306]/85 text-slate-300 border-red-950/80 hover:bg-[#22050b] hover:text-white hover:border-red-500/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-400'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Card */}
        <div className="bg-gradient-to-br from-[#180307]/90 via-[#0e0204]/90 to-[#22040a]/90 border border-red-500/35 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-red-950/60 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High Quality Graphic Illustration */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[420px] p-4 rounded-2xl bg-gradient-to-b from-red-950/40 via-black/80 to-rose-950/30 border border-red-500/25 backdrop-blur-sm shadow-inner">
                {current.graphic}
                
                {/* Visual Caption Tag */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/90 border border-red-500/40 text-red-300 text-xs font-black tracking-wide shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>{current.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Feature Details & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/15 border border-red-500/35 text-red-300 text-xs font-black tracking-wider uppercase mb-3 w-fit">
                {current.badge}
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-sky-400 tracking-tight leading-snug">
                {current.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="mt-6 space-y-3">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metrics row */}
              <div className="mt-8 grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/70 border border-red-950/80">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg sm:text-xl font-black text-red-400">{m.value}</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Row with WhatsApp action */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`${GOGO_LOG_CONFIG.socialLinks.whatsapp}?text=${encodeURIComponent(`Hi Dadul Gogoi, I want to test the ${current.title} feature on GOGO LOG Free Trial.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-black text-sm shadow-xl shadow-[#25D366]/25 transition-all duration-200 cursor-pointer animate-blink"
                  id={`test-${current.id}-wa-btn`}
                >
                  <WhatsAppIcon size={18} variant="monochrome" className="text-white" />
                  <span>Try on 07-Day Free Trial</span>
                </a>

                <button
                  onClick={onOpenGetStarted}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-black text-sm border border-sky-300 shadow-md shadow-sky-400/25 transition-all duration-200 cursor-pointer"
                  id={`details-${current.id}-btn`}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 6-Card High-Quality Graphics Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
              Complete Visual Capability Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every critical shop workflow rendered in high fidelity for rapid team adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Task Management (Light Blue) */}
            <div className="group rounded-2xl bg-sky-400/10 border border-sky-400/25 p-6 transition-all duration-300 hover:border-sky-300/40 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-44 flex items-center justify-center bg-black/60 rounded-xl p-3 border border-sky-400/20 group-hover:border-sky-400/35 transition-colors">
                  <TaskManagementGraphic className="max-h-full w-auto" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 bg-sky-500/15 px-2 py-0.5 rounded border border-sky-400/25">
                    01 • Workflow
                  </span>
                  <span className="text-xs text-sky-300/80 font-semibold">Organise daily work</span>
                </div>
                <h4 className="text-lg font-black text-yellow-400 mt-2 group-hover:text-yellow-300 transition-colors">
                  Manage Your Employee Tasks
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Keep daily inventory, cash verification, and retail counter tasks in perfect rhythm.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab(0)}
                className="mt-4 flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-sky-200 group-hover:translate-x-1 transition-all"
              >
                <span>View Full Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </div>

            {/* Card 2: Payslips & Audit (Light-Medium Blue) */}
            <div className="group rounded-2xl bg-sky-400/25 border border-sky-400/35 p-6 transition-all duration-300 hover:border-sky-300/50 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-44 flex items-center justify-center bg-black/60 rounded-xl p-3 border border-sky-400/30 group-hover:border-sky-400/45 transition-colors">
                  <PayslipAuditGraphic className="max-h-full w-auto" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-200 bg-sky-500/25 px-2 py-0.5 rounded border border-sky-400/35">
                    02 • Compliance
                  </span>
                  <span className="text-xs text-sky-200 font-semibold">Audit ready</span>
                </div>
                <h4 className="text-lg font-black text-yellow-400 mt-2 group-hover:text-yellow-300 transition-colors">
                  Payslips & Audit Ready
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Generate professional salary records with wage advances, bonuses, and verified totals.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab(1)}
                className="mt-4 flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-sky-200 group-hover:translate-x-1 transition-all"
              >
                <span>View Full Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </div>

            {/* Card 3: Leave Management (Soft Medium Blue) */}
            <div className="group rounded-2xl bg-sky-500/40 border border-sky-400/45 p-6 transition-all duration-300 hover:border-sky-300/60 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-44 flex items-center justify-center bg-black/60 rounded-xl p-3 border border-sky-400/40 group-hover:border-sky-400/60 transition-colors">
                  <LeaveManagementGraphic className="max-h-full w-auto" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-100 bg-sky-500/35 px-2 py-0.5 rounded border border-sky-400/45">
                    03 • Operations
                  </span>
                  <span className="text-xs text-sky-100 font-semibold">Staff balance</span>
                </div>
                <h4 className="text-lg font-black text-yellow-400 mt-2 group-hover:text-yellow-300 transition-colors">
                  Leave Management
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Track approved leaves, emergency absences, and balance records without paper registers.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab(2)}
                className="mt-4 flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-sky-200 group-hover:translate-x-1 transition-all"
              >
                <span>View Full Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </div>

            {/* Card 4: Working Hours (Medium-Heavy Blue) */}
            <div className="group rounded-2xl bg-blue-600/60 border border-sky-400/60 p-6 transition-all duration-300 hover:border-sky-300/75 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-44 flex items-center justify-center bg-black/60 rounded-xl p-3 border border-blue-400/40 group-hover:border-blue-300/60 transition-colors">
                  <WorkingHoursGraphic className="max-h-full w-auto" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-blue-500/50 px-2 py-0.5 rounded border border-sky-300/50">
                    04 • Attendance
                  </span>
                  <span className="text-xs text-white/90 font-semibold">Punctuality</span>
                </div>
                <h4 className="text-lg font-black text-yellow-400 mt-2 group-hover:text-yellow-300 transition-colors">
                  Working Hours & Shifts
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Accurate shift check-in and check-out tracking with overtime recognition for staff.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab(3)}
                className="mt-4 flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-sky-200 group-hover:translate-x-1 transition-all"
              >
                <span>View Full Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </div>

            {/* Card 5: Broadcast Message (Heavy Blue) */}
            <div className="group rounded-2xl bg-blue-600/80 border border-blue-300/70 p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/50 flex flex-col justify-between">
              <div>
                <div className="h-44 flex items-center justify-center bg-black/60 rounded-xl p-3 border border-blue-300/40 group-hover:border-blue-200/60 transition-colors">
                  <BroadcastMessageGraphic className="max-h-full w-auto" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-blue-900/60 px-2 py-0.5 rounded border border-blue-200/50">
                    05 • Broadcast
                  </span>
                  <span className="text-xs text-blue-100 font-semibold">Instant reach</span>
                </div>
                <h4 className="text-lg font-black text-yellow-400 mt-2 group-hover:text-yellow-300 transition-colors">
                  Broadcast Message
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Send store announcements, target alerts, and opening/closing updates in one broadcast.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab(4)}
                className="mt-4 flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-sky-200 group-hover:translate-x-1 transition-all"
              >
                <span>View Full Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </div>

            {/* Card 6: Smarter Management (Solid Heavy Blue) */}
            <div className="group rounded-2xl bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 border-2 border-blue-200 p-6 transition-all duration-300 hover:border-white shadow-2xl shadow-blue-950/80 flex flex-col justify-between text-white">
              <div>
                <div className="h-44 flex items-center justify-center rounded-xl overflow-hidden border border-blue-200/50 bg-black/60">
                  <BrighterTomorrowGraphic className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-950 bg-white px-2 py-0.5 rounded border border-white">
                    06 • Vision
                  </span>
                  <span className="text-xs text-white font-bold">Shop Prosperity</span>
                </div>
                <h4 className="text-lg font-black text-yellow-300 mt-2 group-hover:text-yellow-200 transition-colors">
                  Smarter Management for a Brighter Tomorrow
                </h4>
                <p className="text-xs text-blue-100 mt-1 leading-relaxed font-normal">
                  Organized ledgers build thriving shops. Start your 07-day free trial and experience true business peace of mind.
                </p>
              </div>
              <button 
                onClick={onOpenGetStarted}
                className="mt-4 flex items-center gap-1.5 text-xs font-black text-white hover:text-yellow-300 group-hover:translate-x-1 transition-all"
              >
                <span>Claim 07-Day Free Trial</span>
                <ChevronRight className="w-3.5 h-3.5 text-white group-hover:text-yellow-300" />
              </button>
            </div>

          </div>
        </div>

        {/* Storyboard Banner Strip */}
        <div className="relative rounded-3xl bg-gradient-to-r from-red-950/80 via-[#180307]/90 to-rose-950/80 border border-red-500/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-red-950/50">
          <div className="flex items-center gap-4">
            <GogoLogLogo size="lg" variant="icon" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-black text-lg">GOGO LOG Ecosystem</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40">
                  Version 2026.1
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Plans start at just ₹99/month, ₹999/year, or ₹3,999 Lifetime. Includes 07-day unconditional free trial.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={GOGO_LOG_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs font-bold shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer animate-blink"
            >
              <WhatsAppIcon size={16} variant="monochrome" className="text-white" />
              <span>Chat: 9068254755</span>
            </a>
            
            <button
              onClick={onOpenGetStarted}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 active:scale-95 text-white font-black text-xs shadow-lg shadow-red-600/30 transition-all cursor-pointer animate-blink"
            >
              Start Free Trial
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
