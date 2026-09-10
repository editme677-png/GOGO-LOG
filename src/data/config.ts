import { GogoLogConfig } from '../types';

/**
 * =========================================================================
 * GOGO LOG – CENTRALIZED CONFIGURATION & CONTENT MANAGEMENT
 * =========================================================================
 * 
 * Shop Owner / Developer Note:
 * Update this file whenever you have real assets, official domain, live pricing,
 * contact numbers, or real application screenshots.
 * All changes here will instantly propagate across the entire website!
 */

export const GOGO_LOG_CONFIG: GogoLogConfig = {
  // Brand & Identity
  productName: "GOGO LOG",
  tagline: "Smart Employee Management for Shop Owners",
  
  // Hero Section Copy (Exact match from Posters)
  heroHeadline: {
    line1: "RUN YOUR SHOP.",
    line2: "MANAGE YOUR TEAM.",
    line3: "SIMPLIFY EVERYTHING."
  },
  heroSupportingText: "From scattered paper registers and messy notebooks to one organized system. Track live attendance, assign daily tasks, maintain payslips, and communicate instantly with your staff. Plans start with a 07-day free trial, ₹99/month, ₹999/year, and ₹3999 all-time subscription.",
  trustStatement: "BOOST YOUR BUSINESS WITH GOGO LOG! TRACK. RECORD. GROW. • 07-Day Free Trial • ₹99/mo • ₹999/yr • ₹3999 All Time.",

  // Domain & Links (Synchronized with https://gogolog.ai.studio)
  domain: "gogolog.ai.studio",
  appUrl: "https://gogolog.ai.studio",

  downloadLink: {
    androidApk: "https://gogolog.ai.studio",
    googlePlay: "https://gogolog.ai.studio",
    iosTestFlight: "https://gogolog.ai.studio",
    webApp: "https://gogolog.ai.studio",
  },

  // Assets (QR Code, Official Posters & Animated Brand Video)
  qrCodeImage: "/assets/gogo-log-qr-card.svg", 
  posterImage: "/assets/gogo-log-poster-1.png",
  officialPosters: {
    poster1: {
      id: "poster-tablet",
      title: "Boost Your Business with GOGO LOG",
      headline: "BOOST YOUR BUSINESS WITH GOGO LOG! TRACK. RECORD. GROW.",
      tagline: "Live Attendance, Instant Broadcasts, Shift Management & Business Analytics",
      orientation: "landscape",
      imageUrl: "/assets/gogo-log-poster-1.png",
      svgUrl: "/assets/gogo-log-poster-1.svg",
      highlights: [
        "Live Attendance & Shift Management table (Gogo, Sarfu, Singha, Dutta)",
        "Instant Broadcasts (Holiday announcements & assigned owner tasks)",
        "Transparent Subscription Plans: 07-Day Free Trial, ₹99/mo, ₹999/yr, ₹3999 Lifetime",
        "Available directly through WhatsApp (+91-9068254755)",
        "Simplified payroll tracking & detailed business analytics"
      ]
    },
    poster2: {
      id: "poster-mobile",
      title: "Run Your Shop. Manage Your Team. Simplify Everything.",
      headline: "RUN YOUR SHOP. MANAGE YOUR TEAM. SIMPLIFY EVERYTHING.",
      tagline: "From Scattered Records → To One Organized System",
      orientation: "portrait",
      imageUrl: "/assets/gogo-log-poster-2.png",
      svgUrl: "/assets/gogo-log-poster-2.svg",
      highlights: [
        "01 — Daily Tasks: Organize and assign employee tasks every day",
        "02 — Payslips & Audit: Maintain employee payslips and important records",
        "03 — Leave Management: Track employee leave and attendance records",
        "04 — Working Hours: Record and monitor employee working hours",
        "05 — Broadcast Messages: Send important announcements to the entire team instantly",
        "06 — Work Activity: Monitor daily, weekly and monthly employee activity",
        "From scattered paper registers to one organized mobile system",
        "Official Plans: 07-Day Free Trial • Monthly ₹99 • Annual ₹999 • All Time ₹3999"
      ]
    }
  },
  brandVideo: {
    videoUrl: "/assets/gogo-log-intro.mp4",
    posterUrl: "/assets/gogo-log-poster-1.png",
    title: "GOGO LOG Official Brand Animation",
    tagline: "TRACK • RECORD • GROW",
    description: "Discover how GOGO LOG transforms small business employee management, attendance records, wage advances, and daily tasks into a simple, 1-tap mobile experience.",
  },

  // Contact Information (Exact details from Posters & User metadata)
  contact: {
    email: "gogoidadul677@gmail.com",
    phone: "+91 9068254755",
    whatsapp: "+91 9068254755",
    supportHours: "Monday to Sunday: 9:00 AM – 9:00 PM (Instant WhatsApp Support)",
    officeLocation: "Available across India via WhatsApp",
  },

  // Social Media Links
  socialLinks: {
    whatsapp: "https://wa.me/919068254755?text=Hello%20GOGO%20LOG,%20I%20want%20to%20subscribe%20to%20GOGO%20LOG!",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    linkedin: "",
  },

  // Target Shop Business Categories
  shopCategories: [
    "Grocery & Kirana Stores",
    "Retail & Garment Boutiques",
    "Hardware & Electricals",
    "Pharmacies & Medical Shops",
    "Cafes, Bakeries & Food Joints",
    "Electronics & Mobile Repairs",
    "Salons & Wellness Studios",
    "Wholesale Distributors"
  ],

  // Core Features (Section 7) - Exactly synchronized with Poster 2 (01 to 06)
  features: [
    {
      id: "daily-tasks",
      title: "01 — Daily Tasks",
      shortDesc: "Organize and assign employee tasks every day.",
      fullDesc: "Assign daily shop responsibilities like shelf restocking, inventory counting, display cleaning, or customer deliveries. Check completed work without having to repeatedly ask.",
      iconName: "CheckSquare",
      shopBenefit: "Your shop runs smoothly even when you step out.",
      badge: "01 on Poster",
      mockDetails: {
        metricTitle: "Today's Checklist",
        metricValue: "12 / 14 Tasks Done",
        highlight: "All high-priority store tasks completed",
        sampleData: ["Restock Dairy Rack ✓", "Check Expiry Dates on Snacks ✓", "Evening Cash Counter Balance ✓", "Deliver Order #402 ✓"]
      }
    },
    {
      id: "payslips-and-audit",
      title: "02 — Payslips & Audit",
      shortDesc: "Maintain employee payslips and important records.",
      fullDesc: "Track daily wages, monthly salaries, salary advances, overtime bonuses, and deductions with instant calculation. Generate neat digital payslips to share via WhatsApp.",
      iconName: "Wallet",
      shopBenefit: "Zero disputes over advance payments at month-end.",
      badge: "02 on Poster",
      mockDetails: {
        metricTitle: "Disbursed This Month",
        metricValue: "₹48,500",
        highlight: "3 Advance payments logged with receipts",
        sampleData: ["Salary Advance: ₹2,000 (Ramesh)", "Overtime Pay: ₹750 (Sunil)", "Monthly Salary: Paid via UPI"]
      }
    },
    {
      id: "leave-management",
      title: "03 — Leave Management",
      shortDesc: "Track employee leave and attendance records.",
      fullDesc: "Keep a transparent record of paid leaves, sick leaves, half-days, and unplanned absences. Know exactly how many days each employee took off before finalizing wages.",
      iconName: "CalendarX",
      shopBenefit: "Fair leave deductions without confusion or disputes.",
      badge: "03 on Poster",
      mockDetails: {
        metricTitle: "Leave Register",
        metricValue: "2 Days This Month",
        highlight: "Automatic leave balance recalculation",
        sampleData: ["Priya Sharma: 1 Day Sick Leave", "Anil Roy: Half-Day Planned", "Ramesh Kumar: 0 Leaves Taken"]
      }
    },
    {
      id: "working-hours",
      title: "04 — Working Hours",
      shortDesc: "Record and monitor employee working hours.",
      fullDesc: "Record exact shop clock-in and clock-out times, shift timings, lunch breaks, and overtime hours. Eliminate guesswork over who arrived late or stayed late to close shop.",
      iconName: "Clock",
      shopBenefit: "Accurate shift records without expensive biometric hardware.",
      badge: "04 on Poster",
      mockDetails: {
        metricTitle: "Avg Shop Shift",
        metricValue: "9.2 Hours/Day",
        highlight: "All staff clocked-in on schedule today",
        sampleData: ["Morning Shift: 09:00 AM – 06:00 PM", "Evening Shift: 12:00 PM – 09:30 PM", "Overtime: 45 min recorded"]
      }
    },
    {
      id: "broadcast-messages",
      title: "05 — Broadcast Messages",
      shortDesc: "Send important announcements to the entire team instantly.",
      fullDesc: "Broadcast festival store timings, holiday announcements, salary credit alerts, or safety notices to your entire team with a single click. Keep everyone informed.",
      iconName: "Megaphone",
      shopBenefit: "No more repeated phone calls or WhatsApp clutter.",
      badge: "05 on Poster",
      mockDetails: {
        metricTitle: "Latest Broadcast",
        metricValue: "Delivered to All Staff",
        highlight: "Friday Holiday: Closed shop notice delivered",
        sampleData: ["Friday Holiday - Closed Shop", "Enjoy with family notice", "Monthly Team Briefing"]
      }
    },
    {
      id: "work-activity",
      title: "06 — Work Activity",
      shortDesc: "Monitor daily, weekly and monthly employee activity.",
      fullDesc: "See visual summaries of employee attendance trends, punctuality scores, and task turnaround times. Identify your most dependable staff members easily.",
      iconName: "TrendingUp",
      shopBenefit: "Spot attendance patterns and reward your best workers.",
      badge: "06 on Poster",
      mockDetails: {
        metricTitle: "Shop Health Score",
        metricValue: "96% Attendance",
        highlight: "Punctuality improved by 14% this month",
        sampleData: ["Mon to Sat Attendance: Consistent", "Peak Shop Hours: 5 PM - 8 PM", "Zero Unapproved Absences"]
      }
    },
    {
      id: "employee-records",
      title: "Employee Records & Vault",
      shortDesc: "Keep important employee information organized and easy to access.",
      fullDesc: "Store Aadhaar/ID copies, police verification documents, bank account details for salary UPI, and emergency contacts securely on the cloud. Accessible anytime.",
      iconName: "FolderLock",
      shopBenefit: "Never worry about water spills or damaged physical files.",
      badge: "Cloud Vault",
      mockDetails: {
        metricTitle: "Digital Vault",
        metricValue: "100% Encrypted",
        highlight: "Instant search by employee name or role",
        sampleData: ["ID Proof Verified", "Bank UPI ID Linked", "Emergency Contact Stored"]
      }
    },
    {
      id: "business-overview",
      title: "Shop Business Overview",
      shortDesc: "Give shop owners a clearer view of employee-related activities.",
      fullDesc: "A master dashboard customized for shop owners. Get a 10-second morning briefing: who is present, total wages committed, active tasks, and urgent leaves pending approval.",
      iconName: "LayoutDashboard",
      shopBenefit: "Complete peace of mind knowing your shop is under control.",
      badge: "Master Overview",
      mockDetails: {
        metricTitle: "Daily Shop Snapshot",
        metricValue: "Shop Status: Open",
        highlight: "All operations running on schedule",
        sampleData: ["Staff Present: 5 of 6", "Pending Approvals: 1", "Total Wages Month-to-Date: Under Budget"]
      }
    }
  ],

  // Real Application Screenshots Showcase (Section 5 & 9)
  // Ready to receive user's live screenshots once uploaded
  screenshots: [
    {
      id: "screen-dashboard",
      title: "Shop Master Dashboard",
      category: "Dashboard",
      description: "Immediate overview of today's attendance, staff on duty, wage outlays, and pending shop approvals.",
      mockupType: "mobile",
      accentColor: "#059669",
      features: ["Live staff counter", "Today's shift tracker", "Quick action buttons for attendance and cash advances"]
    },
    {
      id: "screen-employees",
      title: "Staff & Employee Directory",
      category: "Employee Management",
      description: "Clean searchable directory with employee roles, contact numbers, salary type, and joining dates.",
      mockupType: "mobile",
      accentColor: "#2563EB",
      features: ["1-Tap call & WhatsApp button", "Daily wage vs monthly salary tag", "Full employee history"]
    },
    {
      id: "screen-payments",
      title: "Salary & Advance Payments",
      category: "Payment Records",
      description: "Log cash advances, view balance remaining, and compute final payout with automatic overtime calculation.",
      mockupType: "mobile",
      accentColor: "#0D9488",
      features: ["Cash advance tracking", "Digital WhatsApp payslip generator", "Salary balance breakdown"]
    },
    {
      id: "screen-leave",
      title: "Leave & Absence Register",
      category: "Leave Management",
      description: "Quick calendar marking for leaves, half-days, and medical absences with automatic payroll adjustments.",
      mockupType: "mobile",
      accentColor: "#EA580C",
      features: ["Color-coded leave calendar", "Half-day & full-day toggles", "Monthly leave quota counter"]
    },
    {
      id: "screen-tasks",
      title: "Daily Store Task Board",
      category: "Task Management",
      description: "Assign opening, closing, inventory, and cleaning tasks with real-time completion checklists.",
      mockupType: "mobile",
      accentColor: "#7C3AED",
      features: ["Assignee tagging", "Priority tags (Urgent, Daily, Weekly)", "Completion time stamps"]
    },
    {
      id: "screen-activity",
      title: "Activity & Attendance History",
      category: "Activity",
      description: "Filterable log of all shop actions: clock-ins, payment entries, leave changes, and store notes.",
      mockupType: "desktop",
      accentColor: "#0284C7",
      features: ["Time-stamped audit trail", "Filter by employee or date range", "Exportable PDF summaries"]
    },
    {
      id: "screen-broadcast",
      title: "Staff Broadcast Announcements",
      category: "Messages",
      description: "Push urgent messages and festival greetings directly to all shop employees simultaneously.",
      mockupType: "mobile",
      accentColor: "#D97706",
      features: ["Instant group dispatch", "Read confirmations", "Emergency notification banners"]
    },
    {
      id: "screen-reports",
      title: "Monthly Reports & Summaries",
      category: "Reports",
      description: "Downloadable PDF and Excel reports showing complete monthly attendance and salary payout sheets.",
      mockupType: "desktop",
      accentColor: "#16A34A",
      features: ["One-click PDF download", "CA & accountant ready spreadsheets", "Monthly expenditure graphs"]
    }
  ],

  // Subscription Pricing - Updated Official Plans
  pricing: {
    currencySymbol: "₹",
    yearlyDiscountPercentage: 16,
    plans: [
      {
        id: "plan-trial",
        name: "Free Trial",
        badge: "07 DAYS FREE",
        monthlyPrice: "0",
        yearlyPrice: "0",
        priceDisplay: "₹0",
        periodText: "07 Days Free Trial",
        employeeCapacity: "Full Access",
        description: "Test all digital features for your shop completely free for 07 days. No advance fee or credit card required.",
        features: [
          "07 Days full system access",
          "Live attendance clock-in register",
          "01 — Daily Tasks assignment",
          "02 — Payslips & wage tracking",
          "Mobile app on Android & iOS",
          "Instant setup in under 60 seconds",
          "WhatsApp onboarding assistance"
        ],
        ctaText: "Start 07-Day Free Trial",
        trialNote: "100% Free • No card or advance fee",
        planDuration: "07_days"
      },
      {
        id: "plan-monthly",
        name: "Monthly Subscription",
        badge: "FLEXIBLE MONTHLY",
        monthlyPrice: "99",
        yearlyPrice: "99",
        priceDisplay: "₹99",
        periodText: "per month",
        employeeCapacity: "Unlimited Staff",
        description: "99 rupees per month. Ideal for shop owners seeking monthly flexibility with zero long-term commitment.",
        features: [
          "99 Rupees per month",
          "Manage unlimited shop employees",
          "Live Attendance Register (Working vs Absent)",
          "01 — Daily Tasks & staff assignments",
          "02 — Digital payslips & salary audit",
          "03 — Leave management & absence notes",
          "04 — Working hours & overtime records",
          "05 — Broadcast announcements to all staff",
          "06 — Work activity & attendance reports",
          "WhatsApp support (+91-9068254755)"
        ],
        ctaText: "Get Monthly Plan (₹99)",
        trialNote: "Billed monthly • Cancel anytime",
        planDuration: "monthly"
      },
      {
        id: "plan-annual",
        name: "Annual Subscription",
        badge: "BEST VALUE • POPULAR",
        isPopular: true,
        monthlyPrice: "999",
        yearlyPrice: "999",
        priceDisplay: "₹999",
        periodText: "per annum",
        employeeCapacity: "Unlimited Staff",
        description: "999 rupees per annum. Save over ₹189 compared to monthly billing with year-round peace of mind.",
        features: [
          "999 Rupees per annum (Save ~16%)",
          "Full 12-month uninterrupted shop license",
          "All 6 Core Features from official posters",
          "Live attendance clock-in & shift monitoring",
          "Digital salary advances & payslip receipts",
          "Staff leave tracking & automatic deductions",
          "Instant staff broadcasts & holiday notices",
          "Monthly wage report exports (PDF & Excel)",
          "Priority WhatsApp onboarding & VIP support",
          "Automatic cloud backup & encrypted security"
        ],
        ctaText: "Get Annual Plan (₹999)",
        trialNote: "Best value: Save ₹189 vs monthly",
        planDuration: "annual"
      },
      {
        id: "plan-all-time",
        name: "All Time Subscription",
        badge: "LIFETIME • ONE-TIME",
        monthlyPrice: "3999",
        yearlyPrice: "3999",
        priceDisplay: "₹3999",
        periodText: "one-time payment (All Time)",
        employeeCapacity: "Unlimited Everything",
        description: "3999 rupees one-time payment. Lifetime ownership forever—never pay any recurring monthly or annual fees.",
        features: [
          "3999 Rupees one-time payment",
          "All Time Lifetime access — Never pay again",
          "Zero monthly or yearly renewal charges",
          "Unlimited shop branches & all staff members",
          "All future premium feature updates included",
          "Export complete salary ledgers to PDF / Excel",
          "Instant salary UPI advances & digital audit vault",
          "VIP 1-on-1 priority WhatsApp assistance",
          "Permanent digital ownership for your business"
        ],
        ctaText: "Get All Time Plan (₹3999)",
        trialNote: "Pay once • Lifetime ownership",
        planDuration: "all_time"
      }
    ]
  },

  // Trust Pillars (Section 14)
  trustPillars: [
    {
      title: "Simple to Use",
      description: "Designed so any shop owner can start logging in 60 seconds without any computer training.",
      icon: "Sparkles"
    },
    {
      title: "Organized Records",
      description: "Every attendance mark, advance payment, and leave is filed neatly and retrievable instantly.",
      icon: "Layers"
    },
    {
      title: "Saves Time",
      description: "Save 3 to 5 hours every week previously spent recalculating paper notebooks and reconciling advances.",
      icon: "Clock"
    },
    {
      title: "Easy Employee Management",
      description: "Keep staff happy with transparent, mistake-free salary calculation and prompt payslips.",
      icon: "UsersCheck"
    },
    {
      title: "Accessible From Your Device",
      description: "Check your shop's staff status from home, during travel, or directly at your shop billing counter.",
      icon: "Smartphone"
    },
    {
      title: "Designed for Small Businesses",
      description: "No bloated corporate jargon or complex HR frameworks—just practical tools built for real shop owners.",
      icon: "Store"
    }
  ],

  // Expandable FAQ (Section 15)
  faqs: [
    {
      id: "faq-1",
      question: "What is GOGO LOG?",
      answer: "GOGO LOG is a simple, mobile-first employee management application designed specifically for small shop owners and retail businesses. It allows you to easily maintain employee records, track daily attendance, record salary advances and payments, organize store tasks, and generate digital payslips in one clean place.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "Who is GOGO LOG designed for?",
      answer: "GOGO LOG is crafted for small shop owners, retail merchants, grocery/kirana stores, restaurants, salons, hardware outlets, and small business owners who employ 1 to 25+ staff members and want to get rid of disorganized paper registers, notebook calculations, and confusing WhatsApp threads.",
      category: "General"
    },
    {
      id: "faq-3",
      question: "How does GOGO LOG help shop owners?",
      answer: "It eliminates confusion and disputes over payments and leaves. You can record daily attendance in one tap, log cash advances as they happen, track daily opening/closing tasks, and compute exact monthly wages automatically without spending hours with a calculator at the end of every month.",
      category: "Daily Usage"
    },
    {
      id: "faq-4",
      question: "How do I install GOGO LOG?",
      answer: "You can download GOGO LOG directly onto your smartphone by scanning the QR code on this page, or tapping the 'Download App' button to get the Android APK / Google Play application. Once downloaded, install and register your shop in under 1 minute.",
      category: "Installation"
    },
    {
      id: "faq-5",
      question: "Is GOGO LOG subscription-based?",
      answer: "Yes, GOGO LOG offers simple and transparent plans: 1) Free trial for 07 days, 2) Monthly subscription at ₹99/month, 3) Annual subscription at ₹999/annum (Save ~16%), and 4) All Time subscription at ₹3999 for one-time lifetime access. You can start with our 07-day free trial with zero payment.",
      category: "Subscription"
    },
    {
      id: "faq-6",
      question: "What subscription plans are available?",
      answer: "We offer 4 distinct plans: 1) Free Trial (07 days full access, ₹0), 2) Monthly Subscription (₹99 per month), 3) Annual Subscription (₹999 per annum, best value), and 4) All Time Subscription (₹3999 one-time payment for lifetime access).",
      category: "Subscription"
    },
    {
      id: "faq-7",
      question: "Can I manage multiple employees?",
      answer: "Yes! You can manage from 1 employee up to dozens of employees, helpers, sales associates, and delivery staff. You can categorize them by role, set daily wage or fixed monthly pay, and review individual attendance ledgers with complete history.",
      category: "Daily Usage"
    },
    {
      id: "faq-8",
      question: "How do I contact GOGO LOG support?",
      answer: "Our support team is available via direct WhatsApp message, phone call, and email from Monday to Saturday between 9:00 AM and 8:00 PM. We assist you with setup, staff onboarding, and any questions you have.",
      category: "General"
    },
    {
      id: "faq-9",
      question: "Can I cancel my subscription?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your account settings with zero cancellation penalties. Your data remains secure and exportable.",
      category: "Subscription"
    }
  ]
};
