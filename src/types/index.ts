export interface PackSize {
  name: string;
  type: string;
  default?: boolean;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  sku: string;
  grade: string;
  origin: string;
  stockStatus: string;
  image: string;
  alt?: string;
  description: string;
  packSizes: PackSize[];
  volumeTiers: string;
  pricingNotice: string;
  storage: string;
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Depot {
  name: string;
  location: string;
  coverage: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    fullName: string;
    shortName: string;
    tagline: string;
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroDescription: string;
    heroNotice: string;
    companyNumber?: string;
    vatNumber?: string;
    year: number;
  };
  contact: {
    phone: string;
    phoneHref: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappHref: string;
    whatsappDisplay: string;
    email: string;
    emailHref: string;
    hours: string;
    depots: Depot[];
  };
  announcements: {
    topStrip: string;
    launchBadge?: string;
  };
  advantages: Advantage[];
  navigation: { label: string; target: string }[];
}

export interface QuoteItem {
  productId: string;
  title: string;
  sku: string;
  packSize: string;
  quantity: number;
  image: string;
}

