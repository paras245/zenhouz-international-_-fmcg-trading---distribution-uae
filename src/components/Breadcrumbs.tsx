import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

  const SeparatorIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <nav
      id="breadcrumbs-nav"
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-6 rounded-xl bg-[#111111]/40 light:bg-white/60 border border-[#D4AF37]/15 inline-flex flex-wrap items-center gap-1.5 text-xs text-[#A8A29E] light:text-[#78716C] mb-6 backdrop-blur-sm"
    >
      <Link
        to={getLocalizedPath('')}
        className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>{t('common.breadcrumbHome')}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <SeparatorIcon className="w-3 h-3 text-[#D4AF37]/40 shrink-0" />
            {isLast || !item.path ? (
              <span className="text-[#D4AF37] font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                to={getLocalizedPath(item.path)}
                className="hover:text-[#D4AF37] transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
