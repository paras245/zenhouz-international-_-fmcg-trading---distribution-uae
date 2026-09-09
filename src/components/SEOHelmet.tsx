import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  schema?: Record<string, unknown>;
}

export const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords,
  schema
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const setOgMeta = (prop: string, content: string) => {
      let og = document.querySelector(`meta[property="${prop}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', prop);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    setOgMeta('og:title', title);
    setOgMeta('og:description', description);
    setOgMeta('og:locale', language === 'ar' ? 'ar_AE' : 'en_AE');

    // Canonical & hreflang links
    const baseUrl = 'https://zenhouzinternational.com';
    const cleanPath = canonicalPath.replace(/^\//, '');
    const enUrl = `${baseUrl}/en/${cleanPath}`.replace(/\/$/, '');
    const arUrl = `${baseUrl}/ar/${cleanPath}`.replace(/\/$/, '');
    const currentUrl = language === 'ar' ? arUrl : enUrl;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Structured data injection
    if (schema) {
      const scriptId = 'zenhouz-structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonicalPath, keywords, language, schema]);

  return null;
};
