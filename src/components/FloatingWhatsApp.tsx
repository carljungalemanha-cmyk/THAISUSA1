import React from 'react';
import { SITE_DATA, Language } from '../data/content';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Estava olhando o site e gostaria de tirar uma dúvida ou agendar.'
      : 'Hello, Thais! I was browsing your website and would like to ask a question or book an appointment.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === 'pt' ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full btn-gold animate-float-pulse shadow-2xl cursor-pointer"
      >
        {/* Floating WhatsApp Logo in WHITE as requested */}
        <MessageCircle className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-xs" />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-xl bg-[#2F241F] text-white text-[11px] font-sans font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          {lang === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
