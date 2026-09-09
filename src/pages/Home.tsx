import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Globe, Shield, Sparkles, Building2, Store } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import { HeroCarousel } from '../components/HeroCarousel';
import { TrustCards } from '../components/TrustCards';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { SolutionCard } from '../components/SolutionCard';
import { SupplyChainDiagram } from '../components/SupplyChainDiagram';
import { ModernTradeSection } from '../components/ModernTradeSection';
import { CTASection } from '../components/CTASection';
import { GlassCard } from '../components/GlassCard';
import { PRODUCT_CATEGORIES } from '../data/products';
import { SOLUTIONS } from '../data/solutions';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const pageTitle = isRtl
    ? "زينهوز الدولية | تجارة وتوزيع المنتجات الاستهلاكية الإمارات"
    : "Zenhouz International | FMCG Trading & Distribution UAE";

  const pageDesc = isRtl
    ? "تربط زينهوز الدولية بين مصنعي وعلامات المنتجات الاستهلاكية وسوق دولة الإمارات والأسواق الإقليمية من خلال التوريد الاستراتيجي والتجارة الحديثة والتوزيع وإعادة التصدير."
    : "Zenhouz International connects global FMCG manufacturers and brands with UAE and regional markets through strategic sourcing, modern trade, distribution and re-export.";

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zenhouz International",
    "alternateName": "زينهوز الدولية",
    "url": "https://zenhouzinternational.com",
    "logo": "https://zenhouzinternational.com/favicon.svg",
    "description": pageDesc,
    "telephone": "+971508040587",
    "email": "ziyadthammattan@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai"
    },
    "sameAs": ["https://wa.me/971508040587"]
  };

  return (
    <PageTransition>
      <SEOHelmet
        title={pageTitle}
        description={pageDesc}
        canonicalPath=""
        schema={schemaOrg}
      />

      {/* 1. Cinematic Hero Carousel */}
      <HeroCarousel />

      {/* 2. Trust Cards (StatCards with no fake numbers) */}
      <TrustCards />

      {/* 3. About Preview Section */}
      <section id="home-about" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Media Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
                <img
                  src="/images/hero/hero-warehouse.jpg"
                  alt="Zenhouz FMCG Warehouse Logistics UAE"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border-[#D4AF37]/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37] text-[#050505] flex items-center justify-center font-extrabold text-xl shrink-0">
                    Z
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                      {isRtl ? 'المقر التجاري' : 'Strategic Hub'}
                    </span>
                    <span className="text-sm font-semibold text-[#F7F4EC] light:text-[#111111]">
                      {isRtl ? 'دولة الإمارات العربية المتحدة' : 'United Arab Emirates'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <span className="px-3 py-1 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                {t('about.badge')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EC] light:text-[#111111] tracking-tight leading-tight mb-5">
                {t('about.headline')}
              </h2>
              <p className="text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
                {t('about.lead')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <GlassCard className="p-4 border-[#D4AF37]/20">
                  <h3 className="text-sm font-bold text-[#D4AF37] uppercase mb-1">
                    {t('about.whoWeAre.title')}
                  </h3>
                  <p className="text-xs text-[#A8A29E] light:text-[#57534E] leading-relaxed">
                    {t('about.whoWeAre.desc')}
                  </p>
                </GlassCard>

                <GlassCard className="p-4 border-[#D4AF37]/20">
                  <h3 className="text-sm font-bold text-[#D4AF37] uppercase mb-1">
                    {t('about.whyPartner.title')}
                  </h3>
                  <p className="text-xs text-[#A8A29E] light:text-[#57534E] leading-relaxed">
                    {t('about.whyPartner.desc')}
                  </p>
                </GlassCard>
              </div>

              <Link
                to={getLocalizedPath('about')}
                id="home-learn-more-about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 light:bg-white/80 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-200"
              >
                <span>{isRtl ? 'اقرأ المزيد عن زينهوز' : 'Discover Our Company'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Portfolio Preview (5 Categories) */}
      <section id="home-products" className="py-20 sm:py-28 bg-[#080808] light:bg-[#F6F4ED] border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t('products.badge')}
            title={t('products.heading')}
            subtitle={t('products.subheading')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {PRODUCT_CATEGORIES.map(category => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to={getLocalizedPath('products')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient-bg text-[#050505] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all"
            >
              <span>{t('products.viewAll')}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Supply Chain Flow (Animated Model) */}
      <section id="home-supply-chain" className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={isRtl ? 'العمليات اللوجستية' : 'Distribution Model'}
            title={t('solutions.supplyChainTitle')}
            subtitle={t('solutions.supplyChainSubtitle')}
          />
          <SupplyChainDiagram />
        </div>
      </section>

      {/* 6. Built for Modern Trade Section */}
      <ModernTradeSection />

      {/* 7. Core Solutions Grid Preview */}
      <section id="home-solutions" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t('solutions.badge')}
            title={t('solutions.headline')}
            subtitle={t('solutions.subheading')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {SOLUTIONS.map(sol => (
              <SolutionCard key={sol.id} solution={sol} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to={getLocalizedPath('solutions')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 light:bg-white/80 text-[#D4AF37] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#050505] transition-all"
            >
              <span>{isRtl ? 'عرض كافة الحلول التجارية' : 'Explore All Trading Solutions'}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Partnership Section (Global Brands & Buyers) */}
      <CTASection />
    </PageTransition>
  );
};
