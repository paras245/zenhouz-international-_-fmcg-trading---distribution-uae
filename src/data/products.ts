import { ProductCategory } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'baby-care',
    slug: 'baby-care',
    titleKey: 'products.categories.babyCare.title',
    descKey: 'products.categories.babyCare.desc',
    iconName: 'Baby',
    image: '/images/products/baby-care.jpg',
    channels: ['Modern Trade', 'Hypermarkets', 'Supermarkets', 'Pharmacies', 'B2B Wholesale', 'Regional Re-export'],
    items: [
      {
        id: 'baby-diapers',
        nameKey: 'products.items.babyDiapers.name',
        descKey: 'products.items.babyDiapers.desc',
        image: '/images/products/diapers.jpg',
        highlights: ['High absorbency core', 'Breathable materials', 'Premium fit & comfort']
      },
      {
        id: 'baby-wipes',
        nameKey: 'products.items.babyWipes.name',
        descKey: 'products.items.babyWipes.desc',
        image: '/images/products/wipes.jpg',
        highlights: ['Dermatologically tested', 'Alcohol & paraben free', 'Gentle soothing formula']
      },
      {
        id: 'training-pants',
        nameKey: 'products.items.trainingPants.name',
        descKey: 'products.items.trainingPants.desc',
        image: '/images/products/training-pants.jpg',
        highlights: ['Elastic 360 waistband', 'Easy pull-up design', 'Leak prevention barriers']
      },
      {
        id: 'baby-hygiene',
        nameKey: 'products.items.babyHygiene.name',
        descKey: 'products.items.babyHygiene.desc',
        image: '/images/products/baby-hygiene.jpg',
        highlights: ['Hypoallergenic items', 'Pediatrician-grade standards', 'Daily delicate care']
      },
      {
        id: 'mother-baby-care',
        nameKey: 'products.items.motherBabyCare.name',
        descKey: 'products.items.motherBabyCare.desc',
        image: '/images/products/mother-baby.jpg',
        highlights: ['Maternity essentials', 'Postpartum hygiene', 'Nurturing wellness essentials']
      }
    ]
  },
  {
    id: 'food-grocery',
    slug: 'food-grocery',
    titleKey: 'products.categories.foodGrocery.title',
    descKey: 'products.categories.foodGrocery.desc',
    iconName: 'UtensilsCrossed',
    image: '/images/products/food-grocery.jpg',
    channels: ['Hypermarkets', 'Supermarkets', 'Convenience Stores', 'Foodservice Supply', 'Wholesale'],
    items: [
      {
        id: 'packaged-foods',
        nameKey: 'products.items.packagedFoods.name',
        descKey: 'products.items.packagedFoods.desc',
        image: '/images/products/packaged-foods.jpg',
        highlights: ['Shelf-stable staples', 'International quality certifications', 'Bulk & consumer packs']
      },
      {
        id: 'snacks',
        nameKey: 'products.items.snacks.name',
        descKey: 'products.items.snacks.desc',
        image: '/images/products/snacks.jpg',
        highlights: ['Savory chips & crisps', 'Healthy roasted nuts', 'Impulse buy packaging']
      },
      {
        id: 'biscuits',
        nameKey: 'products.items.biscuits.name',
        descKey: 'products.items.biscuits.desc',
        image: '/images/products/biscuits.jpg',
        highlights: ['Tea biscuits & cookies', 'Cream-filled wafers', 'Premium imported collections']
      },
      {
        id: 'cereals',
        nameKey: 'products.items.cereals.name',
        descKey: 'products.items.cereals.desc',
        image: '/images/products/cereals.jpg',
        highlights: ['Breakfast cereals', 'Granola & oats', 'Fortified family nutrition']
      },
      {
        id: 'dry-grocery',
        nameKey: 'products.items.dryGrocery.name',
        descKey: 'products.items.dryGrocery.desc',
        image: '/images/products/dry-grocery.jpg',
        highlights: ['Rice, pulses & pasta', 'Culinary condiments', 'Long shelf-life essentials']
      },
      {
        id: 'confectionery',
        nameKey: 'products.items.confectionery.name',
        descKey: 'products.items.confectionery.desc',
        image: '/images/products/confectionery.jpg',
        highlights: ['Chocolates & gummies', 'Hard candies & mints', 'Seasonal gift confectionery']
      },
      {
        id: 'beverages',
        nameKey: 'products.items.beverages.name',
        descKey: 'products.items.beverages.desc',
        image: '/images/products/beverages.jpg',
        highlights: ['Juices & nectar', 'Ready-to-drink teas', 'Sparkling & functional beverages']
      }
    ]
  },
  {
    id: 'household',
    slug: 'household',
    titleKey: 'products.categories.household.title',
    descKey: 'products.categories.household.desc',
    iconName: 'Sparkles',
    image: '/images/products/household.jpg',
    channels: ['Modern Trade', 'Hypermarkets', 'Facilities Management', 'Hotels & HORECA', 'Wholesale'],
    items: [
      {
        id: 'cleaning-products',
        nameKey: 'products.items.cleaningProducts.name',
        descKey: 'products.items.cleaningProducts.desc',
        image: '/images/products/cleaning.jpg',
        highlights: ['Surface disinfectants', 'Floor & glass cleaners', 'Antibacterial power']
      },
      {
        id: 'household-consumables',
        nameKey: 'products.items.householdConsumables.name',
        descKey: 'products.items.householdConsumables.desc',
        image: '/images/products/consumables.jpg',
        highlights: ['Dishwashing liquids', 'Laundry detergents & softeners', 'Odor neutralizers']
      },
      {
        id: 'home-essentials',
        nameKey: 'products.items.homeEssentials.name',
        descKey: 'products.items.homeEssentials.desc',
        image: '/images/products/home-essentials.jpg',
        highlights: ['Trash bags & aluminum foil', 'Sponges & scouring pads', 'Food storage wraps']
      },
      {
        id: 'paper-products-home',
        nameKey: 'products.items.paperProductsHome.name',
        descKey: 'products.items.paperProductsHome.desc',
        image: '/images/products/tissue-paper.jpg',
        highlights: ['Kitchen rolls & towels', 'Multi-ply napkins', 'Eco-friendly pulp options']
      }
    ]
  },
  {
    id: 'personal-care',
    slug: 'personal-care',
    titleKey: 'products.categories.personalCare.title',
    descKey: 'products.categories.personalCare.desc',
    iconName: 'HeartHandshake',
    image: '/images/products/personal-care.jpg',
    channels: ['Retail Pharmacies', 'Cosmetic Chains', 'Hypermarkets', 'Supermarkets', 'B2B Exports'],
    items: [
      {
        id: 'personal-hygiene',
        nameKey: 'products.items.personalHygiene.name',
        descKey: 'products.items.personalHygiene.desc',
        image: '/images/products/personal-hygiene.jpg',
        highlights: ['Antibacterial hand soaps', 'Body washes & sanitizers', 'Daily feminine hygiene']
      },
      {
        id: 'personal-care-items',
        nameKey: 'products.items.personalCareItems.name',
        descKey: 'products.items.personalCareItems.desc',
        image: '/images/products/personal-care-item.jpg',
        highlights: ['Hair care & shampoos', 'Skin moisturisers & lotions', 'Oral dental hygiene']
      },
      {
        id: 'everyday-consumer-products',
        nameKey: 'products.items.everydayConsumerProducts.name',
        descKey: 'products.items.everydayConsumerProducts.desc',
        image: '/images/products/everyday-consumer.jpg',
        highlights: ['Shaving & grooming kits', 'Cotton pads & swabs', 'Deodorants & roll-ons']
      }
    ]
  },
  {
    id: 'tissue-paper',
    slug: 'tissue-paper',
    titleKey: 'products.categories.tissuePaper.title',
    descKey: 'products.categories.tissuePaper.desc',
    iconName: 'Scroll',
    image: '/images/products/tissue-paper.jpg',
    channels: ['Modern Trade', 'B2B Hospitality', 'Corporate Offices', 'Supermarkets', 'Export Trade'],
    items: [
      {
        id: 'facial-tissues',
        nameKey: 'products.items.facialTissues.name',
        descKey: 'products.items.facialTissues.desc',
        image: '/images/products/tissue-products.jpg',
        highlights: ['Virgin pulp softness', '2-ply & 3-ply luxury boxes', 'Pocket pack formats']
      },
      {
        id: 'toilet-paper',
        nameKey: 'products.items.toiletPaper.name',
        descKey: 'products.items.toiletPaper.desc',
        image: '/images/products/tissue-paper.jpg',
        highlights: ['Embossed texture', 'High disintegration speed', 'Economy & luxury rolls']
      },
      {
        id: 'disposable-paper',
        nameKey: 'products.items.disposablePaper.name',
        descKey: 'products.items.disposablePaper.desc',
        image: '/images/products/disposable-products.jpg',
        highlights: ['Paper cups & plates', 'Food grade wax liners', 'Biodegradable fiber options']
      },
      {
        id: 'commercial-consumables',
        nameKey: 'products.items.commercialConsumables.name',
        descKey: 'products.items.commercialConsumables.desc',
        image: '/images/products/household.jpg',
        highlights: ['Maxi rolls & C-fold towels', 'Dispenser-ready rolls', 'High traffic facility packs']
      }
    ]
  }
];
