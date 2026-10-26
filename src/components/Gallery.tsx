import React, { useState } from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import { Lightbox, LightboxImage } from './Lightbox';
import { Eye, MessageCircle } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images: LightboxImage[] = SITE_DATA.images.gallery.map((img) => ({
    url: img.url,
    alt: img.alt[lang]
  }));

  const openLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Vi a galeria de trabalhos no site e quero um olhar assim! Gostaria de agendar.'
      : 'Hello, Thais! I saw your work gallery on the website and I want lashes like that! I would like to book.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="galeria" className="py-24 bg-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'Galeria' : 'Gallery'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? 'Olhares que contam histórias.' : 'Gazes that tell stories.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Cada trabalho é pensado para valorizar o formato dos olhos e a personalidade de quem senta na minha cadeira.'
              : 'Every single set is customized to harmonize with your facial anatomy and accentuate the unique essence of who sits in my chair.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[#C9A24B]/30 shadow-sm hover:shadow-xl transition-all duration-500 aspect-square"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Shimmer / Gold Hover Vignette without title text */}
              <div className="absolute inset-0 bg-[#2F241F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-[#E8D08A]/60 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-5 h-5 text-[#E8D08A]" />
                </div>
              </div>

              {/* Fine gold border highlight */}
              <div className="absolute inset-0 border border-[#E8D08A]/0 group-hover:border-[#E8D08A]/60 rounded-2xl pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Mention that photos can be clicked to expand */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#9C7A2E] font-medium tracking-wide flex items-center justify-center gap-2">
            <span className="text-[#C9A24B]">✦</span>
            <span>
              {lang === 'pt'
                ? 'Clique em qualquer foto para expandir em tela cheia'
                : 'Click on any photo to expand in full screen'}
            </span>
            <span className="text-[#C9A24B]">✦</span>
          </p>
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
            <span>{lang === 'pt' ? 'Quero um olhar assim' : 'I want a look like this'}</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % images.length)}
        onPrev={() => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)}
      />
    </section>
  );
};
