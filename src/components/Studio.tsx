import React from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import {
  Shield,
  MapPin,
  Armchair,
  Cpu,
  Sparkles,
  Heart,
  Navigation,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface StudioProps {
  lang: Language;
}

export const Studio: React.FC<StudioProps> = ({ lang }) => {
  const differentials = [
    {
      icon: Shield,
      title: { pt: 'Segurança', en: 'Safety & Privacy' },
      desc: { pt: 'Ambiente reservado, calmo e tranquilo', en: 'Private, peaceful and calming studio setting' }
    },
    {
      icon: MapPin,
      title: { pt: 'Fácil acesso', en: 'Prime Location' },
      desc: { pt: 'Localização central e acessível em Newark, NJ', en: 'Central and convenient location in Newark, NJ' }
    },
    {
      icon: Armchair,
      title: { pt: 'Conforto', en: 'Supreme Comfort' },
      desc: { pt: 'Maca ultra confortável, ambiente climatizado e acolhedor', en: 'Ergonomic plush bed, climate control & cozy vibe' }
    },
    {
      icon: Cpu,
      title: { pt: 'Tecnologia', en: 'Modern Technology' },
      desc: { pt: 'Equipamentos e materiais modernos de alta qualidade', en: 'State-of-the-art beauty equipment & premium supplies' }
    },
    {
      icon: Sparkles,
      title: { pt: 'Higiene rigorosa', en: 'Hospital-Grade Hygiene' },
      desc: { pt: 'Materiais 100% esterilizados e protocolos sanitários rigorosos', en: 'Sterilized tools, disposables & strict sanitary protocols' }
    },
    {
      icon: Heart,
      title: { pt: 'Experiência exclusiva', en: 'Bespoke Experience' },
      desc: { pt: 'Atendimento exclusivo e calmo, no seu tempo', en: 'Dedicated 1-on-1 attention, unhurried and personalized' }
    }
  ];

  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Gostaria de agendar meu horário para conhecer o studio em Newark.'
      : 'Hello, Thais! I would like to book an appointment to visit your studio in Newark.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="studio" className="py-24 bg-[#FBF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'O Studio' : 'The Studio'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? 'Um espaço pensado para você relaxar.' : 'A space curated for your total relaxation.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Conforto, higiene e tecnologia em Newark, NJ, para uma experiência de cuidado do começo ao fim.'
              : 'Elegance, impeccable hygiene, and comfort in Newark, NJ, for a rejuvenating beauty experience from start to finish.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* Studio Identity Box: Logo + Differentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Logo Showcase & Space Video */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Highlighted Logo on White with Gold Border */}
            <div className="w-full max-w-[280px] p-6 rounded-3xl bg-white border border-[#C9A24B]/35 shadow-lg mb-8 flex items-center justify-center">
              <img
                src={SITE_DATA.images.studioLogo}
                alt="Studio Thais Braga Logo"
                className="w-full h-auto object-contain max-h-[140px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Studio Instagram Video Reel Embed */}
            <div className="w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#C9A24B]/40 shadow-lg bg-[#2F241F]">
              <iframe
                src={`https://www.instagram.com/reel/${SITE_DATA.reels.studio}/embed`}
                title="Studio Thais Braga - Espaço em Newark"
                className="w-full h-full border-0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>

          {/* 6 Differentials Grid - More subtle and minimalist */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {differentials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#C9A24B]/20 hover:border-[#C9A24B]/40 hover:bg-white transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#C9A24B]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-[#C9A24B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#3B2F2A] mb-0.5 leading-snug">
                      {item.title[lang]}
                    </h3>
                    <p className="text-xs text-[#7A6A60] leading-relaxed">
                      {item.desc[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Embedded Google Maps & Location Block */}
        <div className="luxury-card overflow-hidden bg-white p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Map Iframe */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#C9A24B]/30 shadow-inner h-[320px] sm:h-[380px] w-full">
              <iframe
                src={SITE_DATA.contacts.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Thais Braga no Google Maps"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />
            </div>

            {/* Address Details & Action Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C7A2E] block mb-2">
                  {lang === 'pt' ? 'Endereço e Visitas' : 'Location & Visits'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2F2A] mb-2">
                  Newark, New Jersey
                </h3>
                <p className="text-sm text-[#7A6A60] leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-1" />
                  <span>{SITE_DATA.contacts.address}</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/20 text-xs text-[#7A6A60] leading-relaxed">
                <p>
                  {lang === 'pt'
                    ? 'Fácil estacionamento nas proximidades e acesso rápido pelas principais vias de Newark e Ironbound.'
                    : 'Convenient nearby parking and swift access from all main Newark and Ironbound thoroughfares.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={SITE_DATA.contacts.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-secondary py-3 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#9C7A2E]" />
                  <span>{lang === 'pt' ? 'Como chegar' : 'Get Directions'}</span>
                  <ExternalLink className="w-3 h-3 text-[#7A6A60]" />
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-3 px-6 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#2F241F]" />
                  <span>{lang === 'pt' ? 'Agendar horário' : 'Book Appointment'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
