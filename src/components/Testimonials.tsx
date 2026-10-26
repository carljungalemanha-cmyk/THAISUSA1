import React, { useState } from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import { Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = SITE_DATA.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Li os depoimentos no site e quero viver essa experiência! Gostaria de agendar.'
      : 'Hello, Thais! I read the testimonials on the site and I want to experience this luxury care! I would like to book.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="feedbacks" className="py-24 bg-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'Depoimentos' : 'Client Testimonials'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? 'Quem senta na cadeira, se apaixona.' : 'Sit in our chair, fall deeply in love.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Palavras de quem confiou o olhar e a carreira à Thais.'
              : 'Heartfelt words from women who trusted their gazes and beauty careers to Thais.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* Desktop View (3 visible at once or animated offset) & Mobile View (1 with arrows & pagination dots) */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Show sliding set of 3 cards */}
            {[0, 1, 2].map((offset) => {
              const itemIdx = (currentIndex + offset) % items.length;
              const item = items[itemIdx];

              return (
                <div
                  key={`${item.id}-${offset}`}
                  className={`luxury-card p-8 bg-white flex flex-col justify-between transition-all duration-500 ${
                    offset > 0 ? 'hidden md:flex' : 'flex'
                  }`}
                >
                  <div>
                    {/* 5 Golden Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A24B] text-[#C9A24B]" />
                      ))}
                    </div>

                    {/* Large Gold Quote Mark */}
                    <span className="font-serif text-5xl leading-none text-[#E8D08A] block -mb-2 select-none">
                      “
                    </span>

                    <p className="text-sm text-[#3B2F2A] font-serif italic leading-relaxed mb-6">
                      {item.quote[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C9A24B]/20 flex items-center justify-between">
                    <div>
                      <h4 className="font-sans font-semibold text-xs text-[#3B2F2A] uppercase tracking-wider">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-[#7A6A60]">
                        {item.role[lang]} · {item.service[lang]}
                      </p>
                    </div>
                    <span className="text-xs text-[#C9A24B] font-serif">✦</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls (Arrows and Indicator Dots) */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              aria-label="Depoimento anterior"
              className="p-3 rounded-full bg-white border border-[#C9A24B]/30 hover:bg-[#FAF4EA] text-[#3B2F2A] transition-colors shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#C9A24B]' : 'w-2 bg-[#C9A24B]/30 hover:bg-[#C9A24B]/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Próximo depoimento"
              className="p-3 rounded-full bg-white border border-[#C9A24B]/30 hover:bg-[#FAF4EA] text-[#3B2F2A] transition-colors shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#2F241F]" />
            <span>{lang === 'pt' ? 'Quero viver essa experiência' : 'I want to live this experience'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
