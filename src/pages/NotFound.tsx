import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/PageTransition';

export const NotFound: React.FC = () => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <PageTransition>
      <SEOHelmet
        title={isRtl ? "الصفحة غير موجودة | زينهوز الدولية" : "Page Not Found | Zenhouz International"}
        description={isRtl ? "عذراً، الصفحة التي تبحث عنها غير موجودة." : "Sorry, the page you are looking for does not exist."}
      />

      <div className="min-h-[75vh] flex items-center justify-center px-4 py-24 sm:py-32">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-8 font-mono text-3xl font-extrabold shadow-lg">
            404
          </div>

          <h1 className="text-3xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-3">
            {isRtl ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>

          <p className="text-sm text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-8">
            {isRtl
              ? 'يبدو أن الرابط الذي اتبعته غير متوفر أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو استكشاف المنتجات.'
              : 'The page you are looking for might have been moved or does not exist. Return home or browse our products.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={getLocalizedPath('')}
              className="px-6 py-3 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
            >
              <Home className="w-4 h-4" />
              <span>{isRtl ? 'الرئيسية' : 'Return Home'}</span>
            </Link>

            <Link
              to={getLocalizedPath('products')}
              className="px-6 py-3 rounded-xl border border-[#D4AF37]/30 bg-[#111111]/70 light:bg-white/80 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D4AF37]/15 transition-all"
            >
              <span>{t('nav.products')}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
