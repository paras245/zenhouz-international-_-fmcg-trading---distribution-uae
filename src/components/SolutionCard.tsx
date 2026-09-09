import React from 'react';
import { Globe2, Container, Store, Truck, Boxes, PlaneTakeoff, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { SolutionItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { GlassCard } from './GlassCard';
import { COMPANY } from '../data/company';

const SOLUTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe2,
  Container,
  Store,
  Truck,
  Boxes,
  PlaneTakeoff
};

interface SolutionCardProps {
  solution: SolutionItem;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();
  const IconComponent = SOLUTION_ICONS[solution.iconName] || Boxes;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <GlassCard
      id={`solution-card-${solution.id}`}
      className="flex flex-col justify-between h-full border-[#D4AF37]/20 hover:border-[#D4AF37]/50 group"
    >
      <div>
        {/* Solution Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 light:bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#F7F4EC] light:text-[#111111] mb-3 group-hover:text-[#D4AF37] transition-colors">
          {t(solution.titleKey)}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
          {t(solution.descKey)}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2.5 mb-8">
          {solution.details.map((pointKey, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[#E5E5E5] light:text-[#2B2B2B]">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{t(pointKey)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button -> Direct WhatsApp Business Inquiry */}
      <a
        href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Zenhouz, I would like to inquire about ${t(solution.titleKey)}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#D4AF37]/30 bg-[#111111]/70 light:bg-white/80 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-200 group/btn"
      >
        <span>{t(solution.ctaKey)}</span>
        <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
      </a>
    </GlassCard>
  );
};
