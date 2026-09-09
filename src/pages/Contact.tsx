import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import { PageHeader } from '../components/PageHeader';
import { GlassCard } from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '../data/company';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  const { isRtl } = useLanguage();
  const { t } = useTranslation();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const title = isRtl
    ? "اتصل بنا وتواصل معنا | زينهوز الدولية الإمارات"
    : "Contact Us & Commercial Inquiries | Zenhouz International UAE";

  const description = isRtl
    ? "تواصل مع زينهوز الدولية لمناقشة شراكات توريد المنتجات الاستهلاكية، توزيع التجارة الحديثة، أو التوريد بالجملة في دولة الإمارات."
    : "Contact Zenhouz International directly via WhatsApp, email or phone to discuss FMCG sourcing, distribution, market entry, or wholesale supply in the UAE.";

  const breadcrumbs = [
    { label: t('nav.contact'), path: 'contact' }
  ];

  const contactMethods = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      badge: 'Immediate Response',
      badgeAr: 'استجابة فورية',
      titleKey: 'contact.whatsapp.title',
      value: COMPANY.contact.whatsappDisplay,
      descKey: 'contact.whatsapp.desc',
      ctaKey: 'contact.whatsapp.cta',
      url: COMPANY.contact.whatsappUrl,
      isExternal: true,
      color: '#25D366'
    },
    {
      id: 'email',
      icon: Mail,
      badge: 'Formal Proposals',
      badgeAr: 'العروض الرسمية',
      titleKey: 'contact.email.title',
      value: COMPANY.contact.email,
      descKey: 'contact.email.desc',
      ctaKey: 'contact.email.cta',
      url: COMPANY.contact.emailUrl,
      isExternal: false,
      color: '#D4AF37'
    },
    {
      id: 'phone',
      icon: Phone,
      badge: 'Direct Line',
      badgeAr: 'اتصال مباشر',
      titleKey: 'contact.phone.title',
      value: COMPANY.contact.phoneDisplay,
      descKey: 'contact.phone.desc',
      ctaKey: 'contact.phone.cta',
      url: COMPANY.contact.phoneUrl,
      isExternal: false,
      color: '#E6C65C'
    }
  ];

  return (
    <PageTransition>
      <SEOHelmet
        title={title}
        description={description}
        canonicalPath="contact"
        keywords="Contact Zenhouz International, FMCG distributor WhatsApp UAE, UAE trading contact, Dubai wholesale contact"
      />

      <PageHeader
        badge={t('contact.badge')}
        title={t('contact.headline')}
        subtitle={t('contact.subheading')}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Direct Contact Cards (WhatsApp, Email, Phone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map(item => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.id}
                id={`contact-card-${item.id}`}
                className="p-8 border-[#D4AF37]/30 hover:border-[#D4AF37]/60 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                      {isRtl ? item.badgeAr : item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F7F4EC] light:text-[#111111] mb-2">
                    {t(item.titleKey)}
                  </h3>

                  <p className="text-xs text-[#A8A29E] light:text-[#57534E] leading-relaxed mb-6">
                    {t(item.descKey)}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#111111]/70 light:bg-black/5 border border-[#D4AF37]/15 font-mono text-xs sm:text-sm font-semibold text-[#F7F4EC] light:text-[#111111] mb-6 select-all break-all" dir="ltr">
                    {item.value}
                  </div>
                </div>

                <a
                  href={item.url}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="w-full py-3 px-4 rounded-xl gold-gradient-bg text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-md hover:scale-[1.02] transition-all"
                >
                  <span>{t(item.ctaKey)}</span>
                  <ArrowIcon className="w-4 h-4" />
                </a>
              </GlassCard>
            );
          })}
        </div>

        {/* Large Discussion Card (Prominent WhatsApp CTA) */}
        <div className="rounded-3xl overflow-hidden glass-panel border-[#D4AF37]/40 p-8 sm:p-14 relative text-center max-w-4xl mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center mx-auto mb-6 shadow-[0_4px_25px_rgba(37,211,102,0.4)]">
            <MessageCircle className="w-8 h-8 fill-current" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EC] light:text-[#111111] mb-4">
            {t('contact.discussion.title')}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A29E] light:text-[#57534E] max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('contact.discussion.desc')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${COMPANY.contact.whatsappUrl}?text=${encodeURIComponent('Hello Zenhouz International, I would like to schedule a commercial discussion regarding FMCG distribution in the UAE.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl gold-gradient-bg text-[#050505] font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t('contact.discussion.cta')}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${COMPANY.contact.email}?subject=${encodeURIComponent('Commercial FMCG Partnership Discussion')}`}
              className="px-6 py-4 rounded-xl border border-[#D4AF37]/40 bg-[#111111]/70 light:bg-white/80 text-[#F7F4EC] light:text-[#111111] font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37]/15 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('contact.email.cta')}</span>
            </a>
          </div>

          {/* Quick Info Badges */}
          <div className="mt-12 pt-8 border-t border-[#D4AF37]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#A8A29E] light:text-[#78716C]">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>United Arab Emirates</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>GST (UTC+4) Business Hours</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Verified Commercial Channel</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
