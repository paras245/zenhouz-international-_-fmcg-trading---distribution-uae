import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/company';
import { useTranslation } from 'react-i18next';

interface Slide {
  id: string;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
}

export const HeroCarousel: React.FC = () => {
  const { isRtl, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides: Slide[] = [
    {
      id: 'slide-1',
      image: '/images/hero/hero-logistics.jpg', // Global shipping/maritime logistics
      badge: t('hero.slides.slide1.tag'),
      title: t('hero.slides.slide1.title'),
      subtitle: t('hero.slides.slide1.subtitle'),
    },
    {
      id: 'slide-2',
      image: '/images/hero/hero-warehouse.jpg', // High-tech distribution warehousing
      badge: t('hero.slides.slide2.tag'),
      title: t('hero.slides.slide2.title'),
      subtitle: t('hero.slides.slide2.subtitle'),
    },
    {
      id: 'slide-3',
      image: '/images/hero/hero-dubai.jpg', // Dubai skyline & global commercial gateway
      badge: t('hero.slides.slide3.tag'),
      title: t('hero.slides.slide3.title'),
      subtitle: t('hero.slides.slide3.subtitle'),
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay timer
  useEffect(() => {
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (isRtl) prevSlide();
        else nextSlide();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) nextSlide();
        else prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRtl, nextSlide, prevSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        if (isRtl) prevSlide();
        else nextSlide();
      } else {
        // Swiped right
        if (isRtl) nextSlide();
        else prevSlide();
      }
    }
  };

  const ActionArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      id="hero-carousel"
      className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050505]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Zenhouz Hero Showcase"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with subtle zoom */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-10000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic dark luxury gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent rtl:bg-gradient-to-l rtl:from-[#050505]/90 rtl:via-[#050505]/50 rtl:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tagline Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs sm:text-sm font-semibold mb-6 tracking-wide backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Main Slide Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7F4EC] tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-xl text-[#A8A29E] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-medium">
            {slides[currentSlide].subtitle}
          </p>

          {/* Core CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              to={getLocalizedPath('products')}
              id="hero-explore-products-btn"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl gold-gradient-bg text-[#050505] font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.55)] transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 group"
            >
              <span>{t('hero.ctaExplore')}</span>
              <ActionArrow className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>

            <Link
              to={getLocalizedPath('contact')}
              id="hero-partner-cta-btn"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 hover:bg-[#D4AF37]/15 text-[#F7F4EC] font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]"
            >
              {t('hero.ctaPartner')}
            </Link>

            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t('hero.ctaWhatsApp')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      
    </div>
  );
};
