import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MessageCircle, Mail, ArrowRight, ArrowLeft, CheckCircle2, Store, ShoppingBag, ShieldCheck } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import { PageHeader } from '../components/PageHeader';
import { GlassCard } from '../components/GlassCard';
import { CTASection } from '../components/CTASection';
import { PRODUCT_CATEGORIES } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '../data/company';
import { PageTransition } from '../components/PageTransition';

export const ProductCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const category = PRODUCT_CATEGORIES.find(c => c.slug === categorySlug);

  if (!category) {
    return <Navigate to={getLocalizedPath('products')} replace />;
  }

  const title = isRtl
    ? `${t(category.titleKey)} | زينهوز الدولية الإمارات`
    : `${t(category.titleKey)} | Zenhouz International UAE`;

  const description = t(category.descKey);

  const breadcrumbs = [
    { label: t('nav.products'), path: 'products' },
    { label: t(category.titleKey), path: `products/${category.slug}` }
  ];

  // Schema markup for Product Category
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": t(category.titleKey),
    "description": description,
    "url": `https://zenhouzinternational.com/products/${category.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "Zenhouz International"
    }
  };

  return (
    <PageTransition>
      <SEOHelmet
        title={title}
        description={description}
        canonicalPath={`products/${category.slug}`}
        schema={schema}
      />

      <PageHeader
        badge={t('products.badge')}
        title={t(category.titleKey)}
        subtitle={description}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Hero Banner */}
        <div className="rounded-3xl overflow-hidden glass-panel border-[#D4AF37]/30 mb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12">
              <span className="px-3 py-1 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                {isRtl ? 'المواصفات والاعتماد التجاري' : 'Commercial Specifications'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-4">
                {isRtl ? 'معايير التوريد والتجارة المنظمة' : 'Structured Supply for UAE Modern Trade'}
              </h2>
              <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
                {description}
              </p>

              {/* Quality & Logistics Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-[#E5E5E5] light:text-[#2B2B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isRtl ? 'مطابقة للمواصفات القياسية الإماراتية' : 'UAE Regulatory & ESMA Compliant'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E5E5E5] light:text-[#2B2B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isRtl ? 'ترميز تجاري وجاهزية البيع بالتجزئة' : 'Retail Barcode & Pallet Ready'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E5E5E5] light:text-[#2B2B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isRtl ? 'تخزين بدرجات حرارة معتمدة' : 'Climate Controlled Storage'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E5E5E5] light:text-[#2B2B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isRtl ? 'جاهزية التوزيع المباشر وإعادة التصدير' : 'Direct Distribution & Re-export'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Zenhouz, I would like to inquire about wholesale supply for ${t(category.titleKey)}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{isRtl ? 'طلب تسعير جملة عبر واتساب' : 'Request Wholesale Quote'}</span>
                </a>

                <a
                  href={`mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(`Inquiry for ${t(category.titleKey)}`)}`}
                  className="px-5 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 text-[#F7F4EC] light:text-[#111111] font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#D4AF37]/15 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>Email Commercial Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden">
              <img
                src={category.image}
                alt={t(category.titleKey)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-[#0B0B0B]/80 rtl:lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>

        {/* Detailed Product Sub-Categories Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F7F4EC] light:text-[#111111]">
              {isRtl ? 'المنتجات والخطوط التموينية المتاحة' : 'Available Commercial Lines & Specifications'}
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A29E] light:text-[#57534E] mt-1">
              {isRtl ? 'توريد منظم لمتاجر الهايبرماركت، السوبرماركت، والتوزيع بالجملة' : 'Supplying hypermarkets, supermarkets, organized trade, and regional re-export corridors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item, idx) => (
              <GlassCard
                key={idx}
                className="p-6 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>

                  <h4 className="text-base font-bold text-[#F7F4EC] light:text-[#111111] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {t(item.nameKey)}
                  </h4>

                  <p className="text-xs text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
                    {t(item.descKey)}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#D4AF37]/10 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                      {isRtl ? 'قنوات التوزيع المخدومة' : 'Channels Served'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {category.channels.map((ch, chIdx) => (
                        <span
                          key={chIdx}
                          className="px-2 py-0.5 rounded text-[10px] bg-[#141414] light:bg-[#EBE7DF] text-[#A8A29E] light:text-[#44403C]"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Zenhouz, please provide quote and pack specs for ${t(item.nameKey)}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl border border-[#D4AF37]/30 bg-[#111111]/70 light:bg-white/80 text-xs font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center justify-between"
                  >
                    <span>{isRtl ? 'طلب تسعير' : 'Inquire on WhatsApp'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Other Categories Navigation */}
        <div className="pt-12 border-t border-[#D4AF37]/15">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">
            {isRtl ? 'استكشف فئات أخرى' : 'Explore Other FMCG Categories'}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PRODUCT_CATEGORIES.filter(c => c.slug !== category.slug).slice(0, 4).map(c => (
              <Link
                key={c.id}
                to={getLocalizedPath(`products/${c.slug}`)}
                className="p-4 rounded-xl glass-panel border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all text-start"
              >
                <span className="text-xs font-bold text-[#F7F4EC] light:text-[#111111] block mb-1">
                  {t(c.titleKey)}
                </span>
                <span className="text-[11px] text-[#D4AF37] flex items-center gap-1">
                  <span>{t('products.exploreCategory')}</span>
                  <ArrowIcon className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Brands & Buyers CTA Section */}
      <CTASection />
    </PageTransition>
  );
};
