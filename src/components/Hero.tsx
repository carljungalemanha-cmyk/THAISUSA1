import React from 'react';
import { SITE_DATA, Language } from '../data/content';
import { EyelashIcon } from './EyelashIcon';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Vim pelo site e gostaria de agendar meu horário.'
      : 'Hello, Thais! I came from the website and would like to book my appointment.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const scrollToMentorship = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('mentoria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FBF8F3] via-[#FAF4EA] to-[#F5EFE6]"
    >
      {/* Subtle Lash Watermark in background (5-8% opacity) */}
      <div className="absolute -top-12 -left-20 pointer-events-none opacity-[0.06] select-none text-[#C9A24B] transform -rotate-12">
        <EyelashIcon size={520} />
      </div>
      <div className="absolute top-1/2 -right-32 pointer-events-none opacity-[0.05] select-none text-[#C9A24B] transform rotate-12">
        <EyelashIcon size={640} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Photo Column - Displayed FIRST on Mobile, on Right on Desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center">
            {/* Arched Gold Frame with thinner border */}
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] aspect-[4/5] rounded-t-full rounded-b-[36px] p-[1.5px] bg-gradient-to-b from-[#E8D08A] via-[#C9A24B] to-[#9C7A2E] shadow-xl">
              <div className="w-full h-full rounded-t-full rounded-b-[34px] overflow-hidden bg-[#FAF4EA] relative">
                <img
                  src={SITE_DATA.images.hero}
                  alt="Thais Braga - Máster Lash Designer e Mentora em Newark, NJ"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle luxury light overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2A]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text Column - Displayed AFTER photo on Mobile (Centered), on Left on Desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Kicker label */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
              <span className="w-6 h-[1px] bg-[#C9A24B]" />
              <span>
                {lang === 'pt'
                  ? 'Máster em Extensão de Cílios · Newark, NJ'
                  : 'Master Lash Designer · Newark, NJ'}
              </span>
              <span className="w-6 h-[1px] bg-[#C9A24B] lg:hidden" />
            </div>

            {/* H1 Title - Centered on Mobile */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] leading-[1.15] font-normal text-[#3B2F2A] tracking-tight mb-5 text-center lg:text-left">
              {lang === 'pt' ? (
                <>
                  Seu olhar merece ser <span className="italic gold-text">inesquecível</span>.
                </>
              ) : (
                <>
                  Your gaze deserves to be <span className="italic gold-text">unforgettable</span>.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#7A6A60] font-normal leading-relaxed max-w-2xl mb-8 text-center lg:text-left">
              {lang === 'pt'
                ? 'Extensão de cílios, design de sobrancelhas e cuidado com cada detalhe, feitos por quem transforma olhares e vidas há mais de 9 anos.'
                : 'Luxury lash extensions, bespoke eyebrow design, and meticulous care crafted by a master transforming gazes and lives for over 9 years.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#2F241F]" />
                <span>{lang === 'pt' ? 'Agendar meu horário' : 'Book My Appointment'}</span>
              </a>

              <a
                href="#mentoria"
                onClick={scrollToMentorship}
                className="btn-gold-secondary px-7 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'pt' ? 'Conhecer a mentoria' : 'Explore Mentorship'}</span>
                <ArrowRight className="w-4 h-4 text-[#9C7A2E]" />
              </a>
            </div>

            {/* Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#C9A24B]/20 w-full text-xs text-[#7A6A60] text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#3B2F2A] gold-text">+9 Anos</span>
                <span className="text-[11px] uppercase tracking-wider">{lang === 'pt' ? 'Em Beleza' : 'In Beauty'}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#3B2F2A] gold-text">2023</span>
                <span className="text-[11px] uppercase tracking-wider">{lang === 'pt' ? 'Premiada' : 'Award-Winning'}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#3B2F2A] gold-text">6 Técnicas</span>
                <span className="text-[11px] uppercase tracking-wider">{lang === 'pt' ? 'Exclusivas' : 'Lash Techniques'}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#3B2F2A] gold-text">100%</span>
                <span className="text-[11px] uppercase tracking-wider">{lang === 'pt' ? 'Personalizado' : 'Personalized'}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
