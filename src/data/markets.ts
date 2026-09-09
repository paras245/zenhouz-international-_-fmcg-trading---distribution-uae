import { MarketRegion } from '../types';

export const MARKETS: MarketRegion[] = [
  {
    id: 'uae',
    titleKey: 'markets.uae.title',
    descKey: 'markets.uae.desc',
    badgeKey: 'markets.uae.badge',
    statusKey: 'markets.uae.badge',
    focus: [
      'markets.uae.point1',
      'markets.uae.point2',
      'markets.uae.point3',
      'markets.uae.point4'
    ],
    highlights: [
      'markets.uae.point1',
      'markets.uae.point2',
      'markets.uae.point3',
      'markets.uae.point4'
    ],
    iconName: 'Building'
  },
  {
    id: 'gcc',
    titleKey: 'markets.gcc.title',
    descKey: 'markets.gcc.desc',
    badgeKey: 'markets.gcc.badge',
    statusKey: 'markets.gcc.badge',
    focus: [
      'markets.gcc.point1',
      'markets.gcc.point2',
      'markets.gcc.point3'
    ],
    highlights: [
      'markets.gcc.point1',
      'markets.gcc.point2',
      'markets.gcc.point3'
    ],
    iconName: 'Compass'
  },
  {
    id: 'regional',
    titleKey: 'markets.regional.title',
    descKey: 'markets.regional.desc',
    badgeKey: 'markets.regional.badge',
    statusKey: 'markets.regional.badge',
    focus: [
      'markets.regional.point1',
      'markets.regional.point2',
      'markets.regional.point3'
    ],
    highlights: [
      'markets.regional.point1',
      'markets.regional.point2',
      'markets.regional.point3'
    ],
    iconName: 'Layers'
  },
  {
    id: 'international',
    titleKey: 'markets.international.title',
    descKey: 'markets.international.desc',
    badgeKey: 'markets.international.badge',
    statusKey: 'markets.international.badge',
    focus: [
      'markets.international.point1',
      'markets.international.point2',
      'markets.international.point3'
    ],
    highlights: [
      'markets.international.point1',
      'markets.international.point2',
      'markets.international.point3'
    ],
    iconName: 'Globe'
  }
];

export const MARKET_REGIONS = MARKETS;

