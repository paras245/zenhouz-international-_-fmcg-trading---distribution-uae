import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, MessageCircle, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { COMPANY } from '../data/company';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 ${
          isRtl ? 'left-0' : 'right-0'
        } w-full max-w-xs sm:max-w-sm bg-[#080808] light:bg-[#FFFFFF] border-l rtl:border-r rtl:border-l-0 border-[#D4AF37]/25 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto`}
        onClick={e => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#D4AF37]/15 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#D4AF37] to-[#E6C65C] flex items-center justify-center text-[#050505] font-extrabold text-sm shadow-md">
                Z
              </div>
              <span className="font-extrabold tracking-wider text-sm text-[#F7F4EC] light:text-[#111111]">
                ZENHOUZ
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg text-[#A8A29E] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 mb-8">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.id}
                to={getLocalizedPath(item.path)}
                onClick={onClose}
                end={item.path === ''}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-r-2 rtl:border-r-0 rtl:border-l-2 border-[#D4AF37]'
                      : 'text-[#E5E5E5] light:text-[#2B2B2B] hover:bg-white/5 light:hover:bg-black/5 hover:text-[#D4AF37]'
                  }`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Controls */}
        <div className="pt-6 border-t border-[#D4AF37]/15 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <LanguageToggle className="flex-1 justify-center" />
            <ThemeToggle />
          </div>

          {/* Partner With Us CTA */}
          <NavLink
            to={getLocalizedPath('contact')}
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl gold-gradient-bg text-[#050505] font-bold text-center text-xs uppercase tracking-wider block shadow-md hover:opacity-90 transition-opacity"
          >
            {t('nav.partnerCta')}
          </NavLink>

          {/* Direct WhatsApp CTA */}
          <a
            href={COMPANY.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] text-xs font-semibold text-center flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>+971 50 804 0587</span>
          </a>
        </div>
      </div>
    </div>
  );
};
