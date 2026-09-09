import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  direction: 'ltr' | 'rtl';
  isRtl: boolean;
  switchLanguage: (newLang: Language) => void;
  getLocalizedPath: (targetPath: string, targetLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Detect language from URL first (/en/... or /ar/...) or fallback to saved / default
  const getLangFromPathname = (path: string): Language | null => {
    const segments = path.split('/').filter(Boolean);
    if (segments[0] === 'ar') return 'ar';
    if (segments[0] === 'en') return 'en';
    return null;
  };

  const [language, setLanguageState] = useState<Language>(() => {
    const urlLang = getLangFromPathname(location.pathname);
    if (urlLang) return urlLang;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('zenhouz-language') as Language;
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'en';
  });

  const direction = language === 'ar' ? 'rtl' : 'ltr';
  const isRtl = direction === 'rtl';

  // Synchronize document dir, lang, font styling, and i18n
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
    localStorage.setItem('zenhouz-language', language);
  }, [language, direction, i18n]);

  // Keep state in sync if user navigates via browser back/forward buttons or direct URL change
  useEffect(() => {
    const urlLang = getLangFromPathname(location.pathname);
    if (urlLang && urlLang !== language) {
      setLanguageState(urlLang);
    }
  }, [location.pathname, language]);

  const getLocalizedPath = (targetPath: string, targetLang: Language = language): string => {
    // Strip existing leading /en or /ar
    let cleanPath = targetPath.trim();
    if (cleanPath.startsWith('/')) {
      cleanPath = cleanPath.slice(1);
    }
    if (cleanPath.startsWith('en/') || cleanPath === 'en') {
      cleanPath = cleanPath.replace(/^en\/?/, '');
    } else if (cleanPath.startsWith('ar/') || cleanPath === 'ar') {
      cleanPath = cleanPath.replace(/^ar\/?/, '');
    }

    if (!cleanPath) {
      return `/${targetLang}`;
    }
    return `/${targetLang}/${cleanPath}`;
  };

  const switchLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);
    // Determine the equivalent path in new language
    const currentPath = location.pathname;
    const targetUrl = getLocalizedPath(currentPath, newLang) + location.search + location.hash;
    navigate(targetUrl, { replace: true });
  };

  return (
    <LanguageContext.Provider value={{ language, direction, isRtl, switchLanguage, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
