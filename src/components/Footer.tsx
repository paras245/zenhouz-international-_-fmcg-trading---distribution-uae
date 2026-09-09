import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';
import { NAV_ITEMS, PRODUCT_SUBNAV } from '../data/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

  const solutions = [
    { labelKey: 'solutions.globalSourcing.title' },
    { labelKey: 'solutions.importTrade.title' },
    { labelKey: 'solutions.modernTrade.title' },
    { labelKey: 'solutions.b2bDistribution.title' },
    { labelKey: 'solutions.wholesaleSupply.title' },
    { labelKey: 'solutions.reExport.title' },
  ];

  return (
    <footer
      id="corporate-footer"
      className="bg-[#050505] text-[#F7F4EC] border-t border-[#D4AF37]/20 pt-16 pb-12 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#D4AF37]/15">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2">
            <Link to={getLocalizedPath('')} className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#E6C65C] flex items-center justify-center text-[#050505] font-extrabold text-xl shadow-md">
                Z
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-[#F7F4EC]">
                  ZENHOUZ
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
                  INTERNATIONAL
                </span>
              </div>
            </Link>

            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
              "{t('footer.tagline')}"
            </p>

            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm mb-6">
              {t('footer.companyDesc')}
            </p>

            {/* Registered Region */}
            <div className="flex items-center gap-2 text-xs text-[#E5E5E5]">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{isRtl ? 'دولة الإمارات العربية المتحدة' : 'United Arab Emirates'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {NAV_ITEMS.map(item => (
                <li key={item.id}>
                  <Link
                    to={getLocalizedPath(item.path)}
                    className="text-[#A8A29E] hover:text-[#D4AF37] transition-colors"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {t('footer.productCategories')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRODUCT_SUBNAV.map(cat => (
                <li key={cat.id}>
                  <Link
                    to={getLocalizedPath(`products/${cat.slug}`)}
                    className="text-[#A8A29E] hover:text-[#D4AF37] transition-colors"
                  >
                    {t(cat.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {t('footer.contactInfo')}
            </h4>
            <div className="space-y-3 text-xs">
              {/* WhatsApp */}
              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#A8A29E] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span dir="ltr">{COMPANY.contact.whatsappDisplay}</span>
              </a>

              {/* Phone */}
              <a
                href={COMPANY.contact.phoneUrl}
                className="flex items-center gap-2.5 text-[#A8A29E] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span dir="ltr">{COMPANY.contact.phoneDisplay}</span>
              </a>

              {/* Email */}
              <a
                href={COMPANY.contact.emailUrl}
                className="flex items-center gap-2.5 text-[#A8A29E] hover:text-[#D4AF37] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{COMPANY.contact.email}</span>
              </a>

              <div className="pt-2">
                <Link
                  to={getLocalizedPath('contact')}
                  className="inline-block px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[11px] font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all"
                >
                  {t('nav.partnerCta')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('footer.disclaimer')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
