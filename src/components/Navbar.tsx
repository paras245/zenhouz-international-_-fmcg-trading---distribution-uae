import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const { getLocalizedPath } = useLanguage();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="corporate-navbar"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to={getLocalizedPath('')}
              id="navbar-brand-link"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#E6C65C] flex items-center justify-center text-[#050505] font-extrabold text-lg sm:text-xl shadow-[0_2px_12px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-200">
                Z
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-wider text-[#F7F4EC] light:text-[#111111] leading-none">
                  ZENHOUZ
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
                  INTERNATIONAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map(item => (
                <NavLink
                  key={item.id}
                  to={getLocalizedPath(item.path)}
                  end={item.path === ''}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                        : 'text-[#E5E5E5] light:text-[#44403C] hover:text-[#D4AF37] hover:bg-white/5 light:hover:bg-black/5'
                    }`
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right Controls */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <Link
                to={getLocalizedPath('contact')}
                id="navbar-partner-cta"
                className="px-4 xl:px-5 py-2 rounded-xl gold-gradient-bg text-[#050505] text-xs xl:text-sm font-bold tracking-wide uppercase shadow-[0_2px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.5)] transition-all duration-200 hover:scale-[1.02]"
              >
                {t('nav.partnerCta')}
              </Link>
            </div>

            {/* Mobile Hamburger & Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                id="mobile-menu-toggle-btn"
                className="p-2 rounded-lg border border-[#D4AF37]/30 bg-[#111111]/70 light:bg-white/80 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
