import React from 'react';
import { MapPin, Navigation, Anchor, Plane, ShieldCheck, CheckCircle2, MessageCircle, Mail, Globe, Landmark } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import { PageHeader } from '../components/PageHeader';
import { GlassCard } from '../components/GlassCard';
import { CTASection } from '../components/CTASection';
import { MARKET_REGIONS } from '../data/markets';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '../data/company';
import { PageTransition } from '../components/PageTransition';

export const Markets: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();

  const title = isRtl
    ? "الأسواق والتغطية الجغرافية | زينهوز الدولية الإمارات"
    : "Geographic Markets & Reach | Zenhouz International UAE";

  const description = isRtl
    ? "من دولة الإمارات إلى العالم: المركز الرئيسي للتجارة والتوزيع المحلي، ورؤية التوسع الإقليمي في دول مجلس التعاون الخليجي، وشبكة التوريد الدولية."
    : "From the UAE to the world: Primary UAE domestic market, regional GCC vision, and global FMCG sourcing corridors.";

  const breadcrumbs = [
    { label: t('nav.markets'), path: 'markets' }
  ];

  return (
    <PageTransition>
      <SEOHelmet
        title={title}
        description={description}
        canonicalPath="markets"
        keywords="UAE FMCG market, Dubai trading hub, GCC re-export, Middle East consumer goods distribution"
      />

      <PageHeader
        badge={t('markets.badge')}
        title={t('markets.headline')}
        subtitle={t('markets.subheading')}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual UAE Strategic Gateway Hub */}
        <div className="rounded-3xl overflow-hidden glass-panel border-[#D4AF37]/30 p-8 sm:p-12 mb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="px-3 py-1 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                {isRtl ? 'الموقع الجغرافي الاستراتيجي' : 'Strategic Global Crossroads'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-4">
                {isRtl ? 'دبي والإمارات: عاصمة التجارة اللوجستية في المنطقة' : 'The UAE: Premier Trade & FMCG Logistics Gateway'}
              </h2>
              <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
                {isRtl
                  ? 'بفضل الموانئ البحرية المتقدمة والمطارات العالمية والموقع الاستراتيجي الرابط بين الشرق والغرب، تُمثل دولة الإمارات منصة الانطلاق المثالية لتوزيع السلع الاستهلاكية محلياً وإعادة تصديرها إقليمياً.'
                  : 'Operating from the UAE gives Zenhouz International immediate access to world-class maritime ports, air corridors, and highway networks connecting manufacturers with millions of active consumers.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111111]/60 light:bg-white/70 border border-[#D4AF37]/20">
                  <Anchor className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#F7F4EC] light:text-[#111111] block">
                      {isRtl ? 'موانئ بحرية عالمية' : 'Jebel Ali & UAE Seaports'}
                    </span>
                    <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
                      {isRtl ? 'تخليص ومناولة فورية' : 'Rapid container clearance'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111111]/60 light:bg-white/70 border border-[#D4AF37]/20">
                  <Plane className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#F7F4EC] light:text-[#111111] block">
                      {isRtl ? 'شحن جوي سريع' : 'International Air Cargo'}
                    </span>
                    <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
                      {isRtl ? 'وصول للمنتجات الحساسة' : 'Global fast-track access'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden relative border border-[#D4AF37]/20">
              <img
                src="/images/hero/hero-dubai.jpg"
                alt="Dubai Ports & Commercial Trade Gateway"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border-[#D4AF37]/30 text-center">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  ZENHOUZ INTERNATIONAL
                </span>
                <span className="text-[11px] text-[#F7F4EC] light:text-[#111111]">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Regions Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {MARKET_REGIONS.map(region => (
            <GlassCard
              key={region.id}
              className="p-8 border-[#D4AF37]/25 hover:border-[#D4AF37]/60 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    {t(region.statusKey || region.badgeKey)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#F7F4EC] light:text-[#111111] mb-3">
                  {t(region.titleKey)}
                </h3>

                <p className="text-sm text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
                  {t(region.descKey)}
                </p>

                <div className="space-y-2.5 mb-8">
                  {(region.highlights || region.focus).map((hKey, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#E5E5E5] light:text-[#2B2B2B]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t(hKey)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <span className="text-[11px] text-[#A8A29E] light:text-[#78716C]">
                  {isRtl ? 'للاستفسار عن التوزيع الإقليمي:' : 'Regional Distribution Inquiry:'}
                </span>
                <a
                  href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Zenhouz, I would like to discuss FMCG distribution opportunities in ${t(region.titleKey)}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] text-xs font-bold transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Global Brands & Buyers CTA Section */}
      <CTASection />
    </PageTransition>
  );
};
