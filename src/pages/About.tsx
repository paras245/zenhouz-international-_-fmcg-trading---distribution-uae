import React from 'react';
import { ShieldCheck, Target, Award, Sparkles, Building2, Store, Truck, Globe, MessageCircle, Mail } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import { PageHeader } from '../components/PageHeader';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '../data/company';
import { PageTransition } from '../components/PageTransition';

export const About: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();

  const title = isRtl
    ? "عن زينهوز الدولية | شركة تجارة المنتجات الاستهلاكية بالإمارات"
    : "About Zenhouz International | UAE FMCG Trading Company";

  const description = isRtl
    ? "تعرف على زينهوز الدولية، شركة التجارة والتوزيع والاستيراد المتخصصة في السلع الاستهلاكية السريعة الدوران في دولة الإمارات العربية المتحدة."
    : "Learn about Zenhouz International, a premier UAE-based FMCG trading, import, distribution, modern trade and regional re-export company.";

  const breadcrumbs = [
    { label: t('nav.about'), path: 'about' }
  ];

  const sections = [
    {
      id: 'who-we-are',
      titleKey: 'about.whoWeAre.title',
      descKey: 'about.whoWeAre.desc',
      icon: Building2,
      badge: isRtl ? 'الهوية المؤسسية' : 'Corporate Identity'
    },
    {
      id: 'what-we-do',
      titleKey: 'about.whatWeDo.title',
      descKey: 'about.whatWeDo.desc',
      icon: Store,
      badge: isRtl ? 'العمليات الأساسية' : 'Core Operations'
    },
    {
      id: 'our-approach',
      titleKey: 'about.ourApproach.title',
      descKey: 'about.ourApproach.desc',
      icon: Target,
      badge: isRtl ? 'فلسفة العمل' : 'Commercial Philosophy'
    },
    {
      id: 'why-partner',
      titleKey: 'about.whyPartner.title',
      descKey: 'about.whyPartner.desc',
      icon: ShieldCheck,
      badge: isRtl ? 'الميزة التنافسية' : 'Competitive Advantage'
    }
  ];

  return (
    <PageTransition>
      <SEOHelmet
        title={title}
        description={description}
        canonicalPath="about"
        keywords="About Zenhouz International, UAE FMCG trading company, FMCG distributor UAE, modern trade Dubai"
      />

      <PageHeader
        badge={t('about.badge')}
        title={t('about.headline')}
        subtitle={t('about.lead')}
        breadcrumbs={breadcrumbs}
      />

      {/* Pillars Breakdown */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {sections.map(sec => {
            const Icon = sec.icon;
            return (
              <GlassCard
                key={sec.id}
                id={`about-card-${sec.id}`}
                className="p-8 sm:p-10 border-[#D4AF37]/25 hover:border-[#D4AF37]/60 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                    {sec.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F7F4EC] light:text-[#111111] mb-4">
                    {t(sec.titleKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed">
                    {t(sec.descKey)}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* The Strategic UAE Gateway Section */}
        <div className="rounded-3xl overflow-hidden glass-panel border-[#D4AF37]/30 p-8 sm:p-12 lg:p-16 relative">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
              {isRtl ? 'الموقع الاستراتيجي' : 'Strategic Location'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-5">
              {t('about.uaeAdvantage.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-8">
              {t('about.uaeAdvantage.desc')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('nav.partnerCta')}</span>
              </a>

              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="px-6 py-3.5 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 text-[#F7F4EC] light:text-[#111111] font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#D4AF37]/15 transition-all"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{COMPANY.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Brands & Buyers CTA Section */}
      <CTASection />
    </PageTransition>
  );
};
