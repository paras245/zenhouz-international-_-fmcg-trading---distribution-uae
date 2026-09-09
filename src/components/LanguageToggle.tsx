import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div
      id="language-toggle-wrapper"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#D4AF37]/30 bg-[#111111]/70 light:bg-white/80 text-xs font-semibold backdrop-blur-md ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#D4AF37] opacity-80" />
      <button
        id="lang-btn-en"
        type="button"
        onClick={() => switchLanguage('en')}
        className={`px-1.5 py-0.5 rounded transition-colors duration-150 ${
          language === 'en'
            ? 'text-[#D4AF37] font-bold bg-[#D4AF37]/15'
            : 'text-[#A8A29E] hover:text-[#F7F4EC] light:hover:text-[#111111]'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-[#D4AF37]/40 text-xs">|</span>
      <button
        id="lang-btn-ar"
        type="button"
        onClick={() => switchLanguage('ar')}
        className={`px-1.5 py-0.5 rounded font-arabic transition-colors duration-150 ${
          language === 'ar'
            ? 'text-[#D4AF37] font-bold bg-[#D4AF37]/15'
            : 'text-[#A8A29E] hover:text-[#F7F4EC] light:hover:text-[#111111]'
        }`}
        aria-pressed={language === 'ar'}
      >
        العربية
      </button>
    </div>
  );
};
