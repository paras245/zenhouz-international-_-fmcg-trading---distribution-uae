import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isStart = align === 'start';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isStart ? 'text-start' : 'mx-auto text-center'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isStart ? '' : 'justify-center'}`}>
          <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full gold-badge">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EC] light:text-[#111111] tracking-tight leading-snug mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
