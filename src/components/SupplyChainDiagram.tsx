import React from 'react';
import { Factory, Landmark, Warehouse, Truck, Store, Users, Plane, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from './GlassCard';

export const SupplyChainDiagram: React.FC = () => {
  const { isRtl } = useLanguage();

  return (
    <div id="supply-chain-diagram" className="w-full py-6">
      {/* Primary UAE Domestic Supply Pipeline */}
      <div className="mb-10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>{isRtl ? 'سلسلة التوريد والتوزيع في دولة الإمارات' : 'UAE Domestic Supply & Modern Trade Pipeline'}</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {/* Step 1: Global Manufacturers */}
          <GlassCard className="p-4 flex flex-col items-center text-center border-[#D4AF37]/20">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
              <Factory className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#F7F4EC] light:text-[#111111] uppercase tracking-wider mb-1">
              {isRtl ? 'المصنّعون العالميون' : 'Global Manufacturers'}
            </span>
            <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
              {isRtl ? 'أوروبا، آسيا، الأمريكتان' : 'Europe, Asia, Americas'}
            </span>
          </GlassCard>

          {/* Step 2: Zenhouz International */}
          <GlassCard className="p-4 flex flex-col items-center text-center border-[#D4AF37]/60 bg-[#D4AF37]/10 light:bg-[#D4AF37]/15 relative">
            <div className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#050505] text-[9px] font-extrabold uppercase">
              {isRtl ? 'المركز التجاري' : 'Strategic Hub'}
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-[#050505] flex items-center justify-center mb-3">
              <Landmark className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold text-[#D4AF37] uppercase tracking-wider mb-1">
              ZENHOUZ INTERNATIONAL
            </span>
            <span className="text-[10px] text-[#A8A29E] light:text-[#57534E]">
              {isRtl ? 'إدارة التوريد والتعاقدات' : 'Sourcing & Governance'}
            </span>
          </GlassCard>

          {/* Step 3: UAE Import & Warehousing */}
          <GlassCard className="p-4 flex flex-col items-center text-center border-[#D4AF37]/20">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
              <Warehouse className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#F7F4EC] light:text-[#111111] uppercase tracking-wider mb-1">
              {isRtl ? 'الاستيراد والتخزين بالإمارات' : 'UAE Import & Warehousing'}
            </span>
            <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
              {isRtl ? 'موانئ دبي ومستودعات مكيفة' : 'Dubai Seaports & Storage'}
            </span>
          </GlassCard>

          {/* Step 4: Distribution Logistics */}
          <GlassCard className="p-4 flex flex-col items-center text-center border-[#D4AF37]/20">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#F7F4EC] light:text-[#111111] uppercase tracking-wider mb-1">
              {isRtl ? 'لوجستيات التوزيع' : 'Fleet Distribution'}
            </span>
            <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
              {isRtl ? 'توصيل مجدول ومنتظم' : 'Scheduled Direct Routing'}
            </span>
          </GlassCard>

          {/* Step 5: Modern Trade / B2B */}
          <GlassCard className="p-4 flex flex-col items-center text-center border-[#D4AF37]/20">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
              <Store className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#F7F4EC] light:text-[#111111] uppercase tracking-wider mb-1">
              {isRtl ? 'الهايبرماركت والتجارة الحديثة' : 'Modern Trade & Retail'}
            </span>
            <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
              {isRtl ? 'سلاسل التجزئة ومشتري B2B' : 'Supermarkets & Wholesale'}
            </span>
          </GlassCard>

          {/* Step 6: End Consumers */}
          <GlassCard className="p-4 flex flex-col items-center text-center border-[#D4AF37]/20">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#F7F4EC] light:text-[#111111] uppercase tracking-wider mb-1">
              {isRtl ? 'المستهلكون في الدولة' : 'End Consumers'}
            </span>
            <span className="text-[10px] text-[#A8A29E] light:text-[#78716C]">
              {isRtl ? 'أسر ومجتمعات الإمارات' : 'UAE Households'}
            </span>
          </GlassCard>
        </div>
      </div>

      {/* Regional Re-export Corridor */}
      <div className="pt-6 border-t border-[#D4AF37]/15">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E6C65C]" />
          <span>{isRtl ? 'ممر إعادة التصدير الإقليمي والدولي' : 'Regional Re-export & Transit Corridor'}</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GlassCard className="p-4 flex items-center gap-4 border-[#D4AF37]/20">
            <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#F7F4EC] light:text-[#111111] block">
                ZENHOUZ INTERNATIONAL
              </span>
              <span className="text-[11px] text-[#A8A29E] light:text-[#78716C]">
                {isRtl ? 'مركز التجميع في دولة الإمارات' : 'UAE Consolidation Hub'}
              </span>
            </div>
          </GlassCard>

          <GlassCard className="p-4 flex items-center gap-4 border-[#D4AF37]/40 bg-[#D4AF37]/5">
            <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#D4AF37] block">
                {isRtl ? 'إعادة التصدير الجمركي' : 'Customs Re-export Transit'}
              </span>
              <span className="text-[11px] text-[#A8A29E] light:text-[#78716C]">
                {isRtl ? 'شحن بري وبحري وجوي' : 'Bonded Land & Sea Logistics'}
              </span>
            </div>
          </GlassCard>

          <GlassCard className="p-4 flex items-center gap-4 border-[#D4AF37]/20">
            <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#F7F4EC] light:text-[#111111] block">
                {isRtl ? 'دول الخليج والأسواق الإقليمية' : 'GCC & Regional Markets'}
              </span>
              <span className="text-[11px] text-[#A8A29E] light:text-[#78716C]">
                {isRtl ? 'السعودية، عُمان، والشرق الأوسط' : 'Saudi Arabia, Oman & Beyond'}
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
