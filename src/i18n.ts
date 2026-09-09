import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';
import arCommon from './locales/ar/common.json';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('zenhouz-language') : 'en';
const initialLang = savedLang === 'ar' ? 'ar' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enCommon
      },
      ar: {
        translation: arCommon
      }
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
