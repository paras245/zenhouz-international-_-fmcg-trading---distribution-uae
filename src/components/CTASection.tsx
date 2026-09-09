import React from 'react';
import { ArrowRight, ArrowLeft, Building, ShoppingBag, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { GlassCard } from './GlassCard';
import { COMPANY } from '../data/company';

export const CTASection: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="partnership-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            {t('partnership.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EC] light:text-[#111111] tracking-tight leading-snug mb-3">
            {t('partnership.headline')}
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E]">
            {t('partnership.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Panel 1: For Global Brands */}
          <GlassCard
            id="partnership-global-brands"
            className="p-8 sm:p-10 flex flex-col justify-between border-[#D4AF37]/30 hover:border-[#D4AF37]/60 group relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                {t('partnership.globalBrands.badge')}
              </span>
              <h3 className="text-2xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-3">
                {t('partnership.globalBrands.title')}
              </h3>
              <p className="text-sm text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-8">
                {t('partnership.globalBrands.desc')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent('Hello Zenhouz, we are an international FMCG manufacturer/brand interested in entering the UAE market.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('partnership.globalBrands.cta')}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${COMPANY.contact.email}?subject=${encodeURIComponent('Brand Partnership Inquiry - UAE Market Entry')}`}
                className="px-4 py-3 rounded-xl border border-[#D4AF37]/30 bg-[#111111]/60 text-xs font-semibold text-[#F7F4EC] light:text-[#111111] hover:bg-[#D4AF37]/15 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Email Proposal</span>
              </a>
            </div>
          </GlassCard>

          {/* Panel 2: For FMCG Buyers */}
          <GlassCard
            id="partnership-buyers"
            className="p-8 sm:p-10 flex flex-col justify-between border-[#D4AF37]/30 hover:border-[#D4AF37]/60 group relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                {t('partnership.buyers.badge')}
              </span>
              <h3 className="text-2xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-3">
                {t('partnership.buyers.title')}
              </h3>
              <p className="text-sm text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-8">
                {t('partnership.buyers.desc')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent('Hello Zenhouz, please share your FMCG product catalogue and wholesale pricing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('partnership.buyers.cta')}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${COMPANY.contact.email}?subject=${encodeURIComponent('Product Catalogue Request')}`}
                className="px-4 py-3 rounded-xl border border-[#D4AF37]/30 bg-[#111111]/60 text-xs font-semibold text-[#F7F4EC] light:text-[#111111] hover:bg-[#D4AF37]/15 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Email Catalogue</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
