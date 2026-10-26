import React, { useState } from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(SITE_DATA.faqItems[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Tenho uma dúvida sobre os procedimentos e gostaria de falar com você.'
      : 'Hello, Thais! I have a question about the procedures and would like to chat with you.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="faq" className="py-24 bg-[#FBF8F3] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'Dúvidas frequentes' : 'Frequently Asked Questions'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? 'Tudo o que você precisa saber.' : 'Everything you need to know.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Respostas rápidas para você agendar com tranquilidade.'
              : 'Clear, transparent answers so you can book your appointment or enroll in the course with complete peace of mind.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 max-w-3xl mx-auto mb-14">
          {SITE_DATA.faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="luxury-card overflow-hidden bg-white border border-[#C9A24B]/25 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#3B2F2A] leading-snug">
                    {item.question[lang]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#C9A24B]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C9A24B] text-white' : 'text-[#9C7A2E]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#7A6A60] leading-relaxed border-t border-[#C9A24B]/10 animate-fadeIn">
                    <p>{item.answer[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <p className="text-xs text-[#7A6A60] mb-4">
            {lang === 'pt'
              ? 'Ainda tem alguma pergunta que não está aqui?'
              : 'Still have a question that is not covered here?'}
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#2F241F]" />
            <span>{lang === 'pt' ? 'Falar com a Thais no WhatsApp' : 'Speak with Thais on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
