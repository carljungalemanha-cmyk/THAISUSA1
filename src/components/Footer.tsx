import React from 'react';
import { SITE_DATA, Language } from '../data/content';
import { EyelashIcon } from './EyelashIcon';
import { MessageCircle, Instagram, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Gostaria de agendar meu horário pelo WhatsApp.'
      : 'Hello, Thais! I would like to schedule my appointment via WhatsApp.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const navLinks = [
    { id: 'servicos', label: { pt: 'Serviços', en: 'Services' } },
    { id: 'galeria', label: { pt: 'Galeria', en: 'Gallery' } },
    { id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
    { id: 'mentoria', label: { pt: 'Mentoria', en: 'Mentorship' } },
    { id: 'studio', label: { pt: 'Local', en: 'Studio' } },
    { id: 'agendamento', label: { pt: 'Agendar', en: 'Book' } },
    { id: 'faq', label: { pt: 'FAQ', en: 'FAQ' } },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F0E8DC] text-[#3B2F2A] relative pt-16 pb-12 border-t border-[#C9A24B]/30">
      {/* Top Gold Divider with Centered Eyelash Symbol */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-[#F0E8DC] border border-[#C9A24B]/40 flex items-center justify-center shadow-xs">
          <EyelashIcon className="w-6 h-5 text-[#C9A24B]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C9A24B]/20">
          {/* Column 1: Brand & Bio phrase */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <EyelashIcon className="w-6 h-5 text-[#C9A24B]" />
              <span className="font-serif text-2xl tracking-wide gold-text">
                Studio Thais Braga
              </span>
            </div>

            <p className="text-sm text-[#7A6A60] max-w-sm leading-relaxed">
              {lang === 'pt'
                ? 'Cílios, cuidado e transformação em Newark, NJ.'
                : 'Lash artistry, bespoke care, and empowering beauty in Newark, NJ.'}
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-2.5 px-6 rounded-full text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#2F241F]" />
                <span>{lang === 'pt' ? 'Agendar pelo WhatsApp' : 'Book on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-semibold text-[#3B2F2A] mb-4 uppercase tracking-wider text-xs">
              {lang === 'pt' ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="text-[#7A6A60] hover:text-[#C9A24B] transition-colors cursor-pointer"
                  >
                    {link.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#3B2F2A] mb-4 uppercase tracking-wider text-xs">
              {lang === 'pt' ? 'Atendimento' : 'Contact & Studio'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#7A6A60]">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C9A24B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>{SITE_DATA.contacts.whatsappNumber}</span>
              </a>

              <a
                href={SITE_DATA.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C9A24B] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>{SITE_DATA.contacts.instagramHandle}</span>
              </a>

              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>{SITE_DATA.contacts.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Final Line */}
        <div className="pt-8 text-center text-[11px] text-[#7A6A60] leading-relaxed">
          <p>
            © 2026 Studio Thais Braga. {lang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}{' '}
            <span className="hidden sm:inline">·</span>{' '}
            <span className="font-medium text-[#3B2F2A]">
              {lang === 'pt'
                ? 'Premiada Lash Designer Empreendedora 2023, America Star Magazine.'
                : 'Awarded Entrepreneur Lash Designer 2023, America Star Magazine.'}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
