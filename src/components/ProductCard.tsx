import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Baby, UtensilsCrossed, Sparkles, HeartHandshake, Scroll } from 'lucide-react';
import { ProductCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { GlassCard } from './GlassCard';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby,
  UtensilsCrossed,
  Sparkles,
  HeartHandshake,
  Scroll
};

interface ProductCardProps {
  category: ProductCategory;
}

export const ProductCard: React.FC<ProductCardProps> = ({ category }) => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();
  const IconComponent = ICON_MAP[category.iconName] || Sparkles;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <GlassCard
      id={`product-category-card-${category.id}`}
      className="group p-0 overflow-hidden flex flex-col h-full border-[#D4AF37]/20 hover:border-[#D4AF37]/60"
    >
      {/* Visual Image Banner with Subtle Zoom */}
      <div className="relative h-56 w-full overflow-hidden bg-[#111111]">
        <img
          src={category.image}
          alt={t(category.titleKey)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />

        {/* Floating Category Icon Badge */}
        <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 p-2.5 rounded-xl bg-[#050505]/80 border border-[#D4AF37]/40 text-[#D4AF37] backdrop-blur-md shadow-lg group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#F7F4EC] light:text-[#111111] mb-2.5 group-hover:text-[#D4AF37] transition-colors">
            {t(category.titleKey)}
          </h3>
          <p className="text-sm text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-5">
            {t(category.descKey)}
          </p>

          {/* Sub-item Count / Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {category.items.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#1A1A1A] light:bg-[#EFECE6] text-[#A8A29E] light:text-[#44403C] border border-[#D4AF37]/10"
              >
                {t(item.nameKey)}
              </span>
            ))}
            {category.items.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#D4AF37]/10 text-[#D4AF37]">
                +{category.items.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Explore Button */}
        <Link
          to={getLocalizedPath(`products/${category.slug}`)}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/30 bg-[#111111]/80 light:bg-white/90 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-200 group/btn"
        >
          <span>{t('products.exploreCategory')}</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
        </Link>
      </div>
    </GlassCard>
  );
};
