import React from 'react';
import { Building2, PackageCheck, Store, Truck, Globe } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useTranslation } from 'react-i18next';

export const TrustCards: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      id: 'uae-based',
      title: t('trust.uaeBased.title'),
      desc: t('trust.uaeBased.desc'),
      icon: Building2
    },
    {
      id: 'fmcg-focused',
      title: t('trust.fmcgFocused.title'),
      desc: t('trust.fmcgFocused.desc'),
      icon: PackageCheck
    },
    {
      id: 'modern-trade',
      title: t('trust.modernTrade.title'),
      desc: t('trust.modernTrade.desc'),
      icon: Store
    },
    {
      id: 'b2b-distribution',
      title: t('trust.b2bDistribution.title'),
      desc: t('trust.b2bDistribution.desc'),
      icon: Truck
    },
    {
      id: 'regional-reach',
      title: t('trust.regionalReach.title'),
      desc: t('trust.regionalReach.desc'),
      icon: Globe
    }
  ];

  return (
    <section id="trust-pillars-section" className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.map(item => {
          const Icon = item.icon;
          return (
            <GlassCard
              key={item.id}
              id={`trust-card-${item.id}`}
              className="p-5 sm:p-6 flex flex-col justify-between border-[#D4AF37]/25 hover:border-[#D4AF37]/60 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 light:bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#F7F4EC] light:text-[#111111] mb-2 font-mono">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8A29E] light:text-[#57534E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
