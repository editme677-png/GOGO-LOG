export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  shopBenefit: string;
  badge?: string;
  mockDetails: {
    metricTitle: string;
    metricValue: string;
    highlight: string;
    sampleData: string[];
  };
}

export interface ScreenshotItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string; // When real screenshot is provided
  mockupType: 'mobile' | 'desktop';
  accentColor: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: string;
  yearlyPrice: string;
  periodText: string;
  employeeCapacity: string;
  description: string;
  features: string[];
  ctaText: string;
  trialNote?: string;
  planDuration?: '07_days' | 'monthly' | 'annual' | 'all_time';
  priceDisplay?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Subscription' | 'Installation' | 'Daily Usage';
}

export interface TestimonialItem {
  id: string;
  ownerName: string;
  shopName: string;
  shopType: string;
  location: string;
  quote: string;
  highlight: string;
  avatarBg: string;
  verified: boolean;
}

export interface GogoLogConfig {
  productName: string;
  tagline: string;
  heroHeadline: {
    line1: string;
    line2: string;
    line3: string;
  };
  heroSupportingText: string;
  trustStatement: string;
  domain: string;
  appUrl: string;
  downloadLink: {
    androidApk: string;
    googlePlay: string;
    iosTestFlight: string;
    webApp: string;
  };
  qrCodeImage: string | null; // URL or null for auto-generated clean SVG QR
  posterImage: string | null; // URL or null
  officialPosters?: {
    poster1: {
      id: string;
      title: string;
      headline: string;
      tagline: string;
      orientation: 'landscape';
      imageUrl: string;
      svgUrl: string;
      highlights: string[];
    };
    poster2: {
      id: string;
      title: string;
      headline: string;
      tagline: string;
      orientation: 'portrait';
      imageUrl: string;
      svgUrl: string;
      highlights: string[];
    };
  };
  brandVideo?: {
    videoUrl: string;
    posterUrl?: string;
    title: string;
    tagline: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    supportHours: string;
    officeLocation: string;
  };
  socialLinks: {
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
    linkedin?: string;
  };
  features: FeatureItem[];
  screenshots: ScreenshotItem[];
  pricing: {
    currencySymbol: string;
    yearlyDiscountPercentage: number;
    plans: PricingPlan[];
  };
  faqs: FaqItem[];
  trustPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  shopCategories: string[];
}
