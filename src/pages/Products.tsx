import React, { useState } from 'react';
import { SEOHelmet } from '../components/SEOHelmet';
import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { PRODUCT_CATEGORIES } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/PageTransition';
import { MessageCircle, Mail } from 'lucide-react';
import { COMPANY } from '../data/company';

export const Products: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const title = isRtl
    ? "المنتجات والسلع الاستهلاكية | زينهوز الدولية الإمارات"
    : "FMCG Products Portfolio | Zenhouz International UAE";

  const description = isRtl
    ? "استكشف مجموعة المنتجات الاستهلاكية لدى زينهوز الدولية: منتجات العناية بالطفل، الأغذية والمواد التموينية، المنظفات المنزلية، العناية الشخصية، والمنتجات الورقية."
    : "Explore Zenhouz International's FMCG portfolio: Baby & Mother Care, Food & Grocery, Household, Personal Care, and Tissue & Paper products for UAE distribution.";

  const breadcrumbs = [
    { label: t('nav.products'), path: 'products' }
  ];

  const filteredCategories = selectedFilter === 'all'
    ? PRODUCT_CATEGORIES
    : PRODUCT_CATEGORIES.filter(c => c.slug === selectedFilter);

  return (
    <PageTransition>
      <SEOHelmet
        title={title}
        description={description}
        canonicalPath="products"
        keywords="FMCG products UAE, baby diapers wholesale Dubai, packaged foods UAE, personal care distribution Dubai, paper products UAE"
      />

      <PageHeader
        badge={t('products.badge')}
        title={t('products.heading')}
        subtitle={t('products.subheading')}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              selectedFilter === 'all'
                ? 'gold-gradient-bg text-[#050505] shadow-md'
                : 'border border-[#D4AF37]/25 bg-[#111111]/70 light:bg-white/80 text-[#A8A29E] hover:text-[#D4AF37]'
            }`}
          >
            {isRtl ? 'كافة الفئات' : 'All Categories'}
          </button>

          {PRODUCT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedFilter === cat.slug
                  ? 'gold-gradient-bg text-[#050505] shadow-md'
                  : 'border border-[#D4AF37]/25 bg-[#111111]/70 light:bg-white/80 text-[#A8A29E] hover:text-[#D4AF37]'
              }`}
            >
              {t(cat.titleKey)}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCategories.map(category => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>

        {/* Quick Catalogue Bar */}
        <div className="p-8 rounded-2xl glass-panel border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div>
            <h3 className="text-lg font-extrabold text-[#F7F4EC] light:text-[#111111] mb-1">
              {isRtl ? 'هل ترغب في الحصول على قائمة المنتجات الكاملة والأسعار؟' : 'Need Full Product Catalogue & Wholesale Specifications?'}
            </h3>
            <p className="text-xs text-[#A8A29E] light:text-[#57534E]">
              {isRtl ? 'تواصل مع فريق المبيعات والتوزيع التجاري مباشرة' : 'Contact our commercial sales and trade department directly.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent('Hello Zenhouz, please send me your complete FMCG product catalogue and pricing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Catalogue</span>
            </a>

            <a
              href={`mailto:${COMPANY.contact.email}?subject=${encodeURIComponent('Catalogue Request - FMCG Portfolio')}`}
              className="px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 text-xs font-semibold text-[#F7F4EC] light:text-[#111111] hover:bg-[#D4AF37]/15 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Brands & Buyers CTA Section */}
      <CTASection />
    </PageTransition>
  );
};
