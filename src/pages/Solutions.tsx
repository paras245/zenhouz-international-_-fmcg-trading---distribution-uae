import React from 'react';
import { SEOHelmet } from '../components/SEOHelmet';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { SolutionCard } from '../components/SolutionCard';
import { SupplyChainDiagram } from '../components/SupplyChainDiagram';
import { ModernTradeSection } from '../components/ModernTradeSection';
import { CTASection } from '../components/CTASection';
import { SOLUTIONS } from '../data/solutions';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/PageTransition';

export const Solutions: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();

  const title = isRtl
    ? "حلول التجارة والتوزيع والاستيراد | زينهوز الدولية الإمارات"
    : "Trading & Distribution Solutions | Zenhouz International UAE";

  const description = isRtl
    ? "حلول شاملة في التوريد العالمي، الاستيراد، التوزيع في التجارة الحديثة، توريد الجملة، وإعادة التصدير الإقليمي من دولة الإمارات."
    : "Comprehensive solutions in global FMCG sourcing, import, modern trade distribution, wholesale supply, and regional re-export from the UAE.";

  const breadcrumbs = [
    { label: t('nav.solutions'), path: 'solutions' }
  ];

  return (
    <PageTransition>
      <SEOHelmet
        title={title}
        description={description}
        canonicalPath="solutions"
        keywords="FMCG distribution UAE, FMCG import Dubai, modern trade distribution UAE, re-export Middle East, wholesale FMCG supply"
      />

      <PageHeader
        badge={t('solutions.badge')}
        title={t('solutions.headline')}
        subtitle={t('solutions.subheading')}
        breadcrumbs={breadcrumbs}
      />

      {/* 6 Core Solutions Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SOLUTIONS.map(sol => (
            <SolutionCard key={sol.id} solution={sol} />
          ))}
        </div>

        {/* Interactive Supply Chain Flow Diagram */}
        <div className="pt-8 pb-12 border-t border-[#D4AF37]/15">
          <SectionHeading
            badge={isRtl ? 'الهيكل التشغيلي' : 'Operational Architecture'}
            title={t('solutions.supplyChainTitle')}
            subtitle={t('solutions.supplyChainSubtitle')}
          />
          <SupplyChainDiagram />
        </div>
      </section>

      {/* Built for Modern Trade Section */}
      <ModernTradeSection />

      {/* Global Brands & Buyers CTA Section */}
      <CTASection />
    </PageTransition>
  );
};
