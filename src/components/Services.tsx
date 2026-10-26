import React, { useState } from 'react';
import { SITE_DATA, Language, ServiceItem } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import { MessageCircle, Sparkles } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'lashes' | 'brows' | 'lashes-lips'>('all');

  const getServiceBookingUrl = (serviceName: string) => {
    const text = lang === 'pt'
      ? `Olá, Thais! Gostaria de agendar o serviço: ${serviceName}.`
      : `Hello, Thais! I would like to book the service: ${serviceName}.`;
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const getMainBookingUrl = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Quero agendar meu horário no studio.'
      : 'Hello, Thais! I would like to book my appointment at the studio.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const filteredGroups = activeTab === 'all'
    ? SITE_DATA.serviceGroups
    : SITE_DATA.serviceGroups.filter(g => g.id === activeTab);

  return (
    <section id="servicos" className="py-24 bg-[#FBF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'Serviços' : 'Services'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? 'Cada olhar, uma assinatura.' : 'Every gaze, a unique signature.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Escolha o estilo que combina com a sua essência. Eu cuido do resto, com técnica, delicadeza e acabamento impecável.'
              : 'Choose the style that reflects your inner essence. I care for the rest with precision, gentleness, and flawless artistry.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'btn-gold text-[#2F241F] shadow-sm'
                : 'bg-white border border-[#C9A24B]/30 text-[#7A6A60] hover:text-[#3B2F2A] hover:bg-[#F5EFE6]'
            }`}
          >
            {lang === 'pt' ? 'Todos os Serviços' : 'All Services'}
          </button>
          {SITE_DATA.serviceGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === group.id
                  ? 'btn-gold text-[#2F241F] shadow-sm'
                  : 'bg-white border border-[#C9A24B]/30 text-[#7A6A60] hover:text-[#3B2F2A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>{group.icon}</span>
              <span>{group.title[lang]}</span>
            </button>
          ))}
        </div>

        {/* Groups Listing */}
        <div className="space-y-20">
          {filteredGroups.map((group) => (
            <div key={group.id} className="relative">
              {/* Group Title & Subtitle */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 text-2xl font-serif text-[#3B2F2A] mb-1">
                  <span>{group.icon}</span>
                  <span className="font-semibold">{group.title[lang]}</span>
                </div>
                <p className="text-sm italic font-serif text-[#9C7A2E]">
                  "{group.subtitle[lang]}"
                </p>
              </div>

              {/* Lash Extension Cards (with Representative Photo, 3-tier mini table & Golden Button) */}
              {group.id === 'lashes' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item: ServiceItem) => {
                    const prices = item.pricesUSD;
                    const serviceName = item.name[lang];

                    return (
                      <div
                        key={item.id}
                        className="luxury-card overflow-hidden flex flex-col justify-between h-full bg-white relative group"
                      >
                        <div>
                          {/* Representative Photo for Each Service */}
                          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5EFE6] border-b border-[#C9A24B]/20">
                            <img
                              src={item.image}
                              alt={serviceName}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#9C7A2E] border border-[#C9A24B]/30 shadow-xs">
                              Lashes
                            </div>
                          </div>

                          <div className="p-5">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h3 className="font-serif text-xl font-semibold text-[#3B2F2A] group-hover:text-[#9C7A2E] transition-colors">
                                {serviceName}
                              </h3>
                              <Sparkles className="w-4 h-4 text-[#C9A24B] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <p className="text-xs text-[#7A6A60] leading-relaxed mb-5 min-h-[36px]">
                              {item.description[lang]}
                            </p>

                            {/* Mini Table for 3 values in USD */}
                            <div className="bg-[#FAF6EE] rounded-xl p-3 border border-[#C9A24B]/20 mb-5">
                              <div className="grid grid-cols-3 gap-1 text-center divide-x divide-[#C9A24B]/20">
                                <div className="px-1">
                                  <span className="block text-[10px] uppercase tracking-wider text-[#7A6A60]">
                                    {lang === 'pt' ? '1ª Aplic.' : '1st Set'}
                                  </span>
                                  <span className="block font-serif text-base font-bold text-[#3B2F2A] gold-text mt-0.5">
                                    ${prices?.first}
                                  </span>
                                </div>
                                <div className="px-1">
                                  <span className="block text-[10px] uppercase tracking-wider text-[#7A6A60]">
                                    {lang === 'pt' ? '2 Sem.' : '2 Wks'}
                                  </span>
                                  <span className="block font-serif text-base font-semibold text-[#3B2F2A] mt-0.5">
                                    ${prices?.twoWeeks}
                                  </span>
                                </div>
                                <div className="px-1">
                                  <span className="block text-[10px] uppercase tracking-wider text-[#7A6A60]">
                                    {lang === 'pt' ? '3 Sem.' : '3 Wks'}
                                  </span>
                                  <span className="block font-serif text-base font-semibold text-[#3B2F2A] mt-0.5">
                                    ${prices?.threeWeeks}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card Golden Action Button */}
                        <div className="p-5 pt-0">
                          <a
                            href={getServiceBookingUrl(serviceName)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-3 rounded-full text-xs font-semibold btn-gold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-[#2F241F]" />
                            <span>{lang === 'pt' ? 'Agendar este serviço' : 'Book this style'}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Brows & Lips Cards with Representative Photo & Golden Button */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {group.items.map((item: ServiceItem) => {
                    const price = item.priceUSD;
                    const serviceName = item.name[lang];

                    return (
                      <div
                        key={item.id}
                        className="luxury-card overflow-hidden flex flex-col justify-between h-full bg-white relative group"
                      >
                        <div>
                          {/* Representative Photo */}
                          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5EFE6] border-b border-[#C9A24B]/20">
                            <img
                              src={item.image}
                              alt={serviceName}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#9C7A2E] border border-[#C9A24B]/30 shadow-xs">
                              {group.id === 'brows' ? 'Brows' : 'Beauty'}
                            </div>
                          </div>

                          <div className="p-5">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h3 className="font-serif text-xl font-semibold text-[#3B2F2A] group-hover:text-[#9C7A2E] transition-colors">
                                {serviceName}
                              </h3>
                              <Sparkles className="w-4 h-4 text-[#C9A24B] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <p className="text-xs text-[#7A6A60] leading-relaxed mb-5 min-h-[36px]">
                              {item.description[lang]}
                            </p>

                            <div className="bg-[#FAF6EE] rounded-xl p-3 border border-[#C9A24B]/20 mb-5 text-center">
                              <span className="block text-[10px] uppercase tracking-wider text-[#7A6A60]">
                                {lang === 'pt' ? 'Valor do Procedimento' : 'Procedure Price'}
                              </span>
                              <span className="block font-serif text-2xl font-bold text-[#3B2F2A] gold-text mt-0.5">
                                ${price}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Card Golden Action Button */}
                        <div className="p-5 pt-0">
                          <a
                            href={getServiceBookingUrl(serviceName)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-3 rounded-full text-xs font-semibold btn-gold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-[#2F241F]" />
                            <span>{lang === 'pt' ? 'Agendar este serviço' : 'Book this service'}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footnote Notice */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-[#F5EFE6]/80 border border-[#C9A24B]/20 text-center text-xs text-[#7A6A60]">
          <p className="flex items-center justify-center gap-2">
            <span className="text-[#C9A24B] font-bold">✦</span>
            <span>
              {lang === 'pt'
                ? 'Observação: Valores sujeitos a alteração. Cílios com mais de 3 semanas são cobrados como 1ª aplicação.'
                : 'Note: Prices subject to change. Lash refills over 3 weeks old require a new full set (charged as 1st application).'}
            </span>
          </p>
        </div>

        {/* Final CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={getMainBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#2F241F]" />
            <span>{lang === 'pt' ? 'Quero agendar meu horário' : 'Book My Appointment Now'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
