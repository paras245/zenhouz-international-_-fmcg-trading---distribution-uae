export interface NavItem {
  id: string;
  labelKey: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelKey: 'nav.home', path: '' },
  { id: 'about', labelKey: 'nav.about', path: 'about' },
  { id: 'products', labelKey: 'nav.products', path: 'products' },
  { id: 'solutions', labelKey: 'nav.solutions', path: 'solutions' },
  { id: 'markets', labelKey: 'nav.markets', path: 'markets' },
  { id: 'contact', labelKey: 'nav.contact', path: 'contact' },
];

export const PRODUCT_SUBNAV = [
  { id: 'baby-care', slug: 'baby-care', labelKey: 'products.categories.babyCare.title' },
  { id: 'food-grocery', slug: 'food-grocery', labelKey: 'products.categories.foodGrocery.title' },
  { id: 'household', slug: 'household', labelKey: 'products.categories.household.title' },
  { id: 'personal-care', slug: 'personal-care', labelKey: 'products.categories.personalCare.title' },
  { id: 'tissue-paper', slug: 'tissue-paper', labelKey: 'products.categories.tissuePaper.title' },
];
