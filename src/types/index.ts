export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  labelKey: string;
  path: string;
}

export interface ProductItem {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
  highlights: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  titleKey: string;
  descKey: string;
  image: string;
  iconName: string;
  items: ProductItem[];
  channels: string[];
}

export interface SolutionItem {
  id: string;
  titleKey: string;
  descKey: string;
  iconName: string;
  details: string[];
  ctaKey: string;
}

export interface MarketRegion {
  id: string;
  titleKey: string;
  descKey: string;
  badgeKey: string;
  statusKey?: string;
  focus: string[];
  highlights?: string[];
  iconName: string;
}

export interface TrustPillar {
  id: string;
  titleKey: string;
  descKey: string;
  iconName: string;
}
