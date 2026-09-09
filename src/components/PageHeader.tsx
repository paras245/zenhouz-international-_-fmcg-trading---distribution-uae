import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
  className = ''
}) => {
  return (
    <section
      id="page-header"
      className={`relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-[#D4AF37]/15 bg-gradient-to-b from-[#050505] via-[#0B0B0B] to-[#111111] light:from-[#FDFBF7] light:via-[#F8F6F0] light:to-[#EFECE6] ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full gold-badge">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4EC] light:text-[#111111] leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-[#A8A29E] light:text-[#57534E] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
