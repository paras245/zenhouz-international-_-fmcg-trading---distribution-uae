import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isRtl } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 350);
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-button"
      onClick={scrollToTop}
      aria-label={t('common.backToTop')}
      className={`fixed bottom-6 z-40 p-3 rounded-full border border-[#D4AF37]/30 bg-[#0B0B0B]/85 dark:bg-[#0B0B0B]/85 light:bg-[#FFFFFF]/90 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md group ${
        isRtl ? 'right-6' : 'left-6'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};
