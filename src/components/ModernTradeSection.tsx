import React from 'react';
import { ShoppingBag, CheckCircle, ShieldCheck, Barcode, CalendarCheck, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from './GlassCard';

export const ModernTradeSection: React.FC = () => {
  const { t } = useTranslation();

  const channels = [
    { titleKey: 'modernTradeSection.channels.hypermarkets', icon: ShoppingBag },
    { titleKey: 'modernTradeSection.channels.supermarkets', icon: StoreIcon },
    { titleKey: 'modernTradeSection.channels.retailChains', icon: ShieldCheck },
    { titleKey: 'modernTradeSection.channels.b2bBuyers', icon: TrendingUp },
    { titleKey: 'modernTradeSection.channels.wholesale', icon: Barcode },
  ];

  const commitments = [
    { text: t('modernTradeSection.commitments.0'), icon: ShieldCheck },
    { text: t('modernTradeSection.commitments.1'), icon: Barcode },
    { text: t('modernTradeSection.commitments.2'), icon: CalendarCheck },
    { text: t('modernTradeSection.commitments.3'), icon: TrendingUp },
  ];

  return (
    <section id="modern-trade-section" className="py-16 sm:py-20 bg-[#080808] light:bg-[#F4F1EA] border-y border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context */}
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full gold-badge">
              {t('modernTradeSection.badge')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EC] light:text-[#111111] tracking-tight leading-tight mb-4">
              {t('modernTradeSection.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
              {t('modernTradeSection.desc')}
            </p>

            <div className="space-y-3">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#E5E5E5] light:text-[#2B2B2B]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Channels Matrix */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((chan, idx) => {
                const Icon = chan.icon;
                return (
                  <GlassCard
                    key={idx}
                    className="p-5 border-[#D4AF37]/20 flex items-center gap-4 hover:border-[#D4AF37]/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#F7F4EC] light:text-[#111111] block">
                        {t(chan.titleKey)}
                      </span>
                      <span className="text-[11px] text-[#D4AF37] flex items-center gap-1 mt-0.5">
                        <CheckCircle className="w-3 h-3" />
                        <span>UAE Compliant Supply</span>
                      </span>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function StoreIcon(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
      <path d="M2 7h20"/>
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
    </svg>
  );
}
