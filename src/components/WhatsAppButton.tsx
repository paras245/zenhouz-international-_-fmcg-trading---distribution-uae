import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/company';
import { useTranslation } from 'react-i18next';

export const WhatsAppButton: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="floating-whatsapp-wrapper"
      className={`fixed bottom-6 z-40 flex items-center gap-3 ${
        isRtl ? 'left-6 flex-row-reverse' : 'right-6 flex-row'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <span
        id="whatsapp-tooltip"
        className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide bg-[#0B0B0B]/90 text-[#F7F4EC] border border-[#D4AF37]/30 shadow-lg backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : isRtl
            ? 'opacity-0 -translate-x-2'
            : 'opacity-0 translate-x-2'
        }`}
      >
        {t('common.floatingWhatsAppTooltip')}
      </span>

      {/* Button */}
      <a
        id="floating-whatsapp-link"
        href={COMPANY.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('common.floatingWhatsAppTooltip')}
        className="relative group p-3.5 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <span className="relative z-10">
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </span>
      </a>
    </div>
  );
};
