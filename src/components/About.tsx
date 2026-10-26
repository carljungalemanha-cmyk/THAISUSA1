import React from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import { Instagram, Sparkles, ShieldCheck, Award } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="sobre" className="py-24 bg-[#FBF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'Conheça a Thais' : 'Meet Thais'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt'
              ? 'Thais Braga, a mulher por trás de cada olhar.'
              : 'Thais Braga, the woman behind every gaze.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed max-w-2xl mx-auto">
            {lang === 'pt'
              ? 'Do Espírito Santo para Newark, uma história de coragem, recomeço e transformação.'
              : 'From Espírito Santo (Brazil) to Newark, a story of courage, reinvention, and transformation.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* 2-Column Split: Portrait & New Exact Bio Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Portrait Column with Quote at the bottom of the photo & thin border */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[360px] rounded-[24px] p-[1.5px] bg-gradient-to-tr from-[#9C7A2E] via-[#E8D08A] to-[#C9A24B] shadow-xl overflow-hidden bg-white">
              {/* Photo */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-white">
                <img
                  src={SITE_DATA.images.aboutSubstitute}
                  alt="Thais Braga"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quote at the bottom of the photo */}
              <div className="bg-[#FAF4EA] p-4 text-center border-t border-[#C9A24B]/30">
                <p className="font-serif italic text-base sm:text-lg text-[#9C7A2E] leading-snug">
                  "{lang === 'pt'
                    ? 'Cuidar do olhar é cuidar de quem você é.'
                    : 'Caring for your gaze is caring for who you truly are.'}"
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#7A6A60] mt-1 block">
                  — Thais Braga
                </span>
              </div>
            </div>
          </div>

          {/* Text and Cards Column */}
          <div className="lg:col-span-7 space-y-6 text-[#7A6A60]">
            
            {/* Parágrafo 1 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#C9A24B]/20 shadow-xs">
              <p className="font-serif text-lg text-[#9C7A2E] italic mb-3">
                {lang === 'pt'
                  ? 'Mais do que cílios, um resgate diário de autoestima'
                  : 'More than lashes, a daily restoration of self-esteem'}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#3B2F2A]/90">
                {lang === 'pt'
                  ? 'A beleza tem o poder de curar, despertar a segurança interior e renovar a forma como uma mulher se enxerga no espelho. No Studio Thaís Braga, cada atendimento é uma experiência acolhedora e personalizada, criada para proporcionar momentos de pausa, relaxamento e um olhar impecável que traz praticidade absoluta para a rotina diária da mulher moderna.'
                  : 'Beauty possesses the power to heal, awaken inner confidence, and renew how a woman perceives herself in the mirror. At Studio Thaís Braga, each service is a warm and personalized experience, created to provide moments of pause, relaxation, and an impeccable gaze that brings absolute ease to the modern woman\'s routine.'}
              </p>
            </div>

            {/* Parágrafo 2 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#C9A24B]/20 shadow-xs">
              <p className="text-sm sm:text-base leading-relaxed text-[#3B2F2A]/90">
                {lang === 'pt'
                  ? 'Com mais de 9 anos de atuação sólida no mercado da beleza, Thais é graduada em Estética e Cosmética, formada em Mentoria High Ticket para Empreendedoras e detém múltiplas certificações nacionais e internacionais em biossegurança e química de polímeros. Seu pioneirismo e rigor técnico a consagraram como Melhor Lash Designer Empreendedora do Ano de 2023 pela prestigiada revista America Star Magazine. Hoje, além de palestrante e mentora requisitada, é com orgulho Embaixadora oficial do Swiss Beauty Experience nos Estados Unidos.'
                  : 'With over 9 years of solid mastery in the beauty market, Thais holds a degree in Aesthetics and Cosmetics, is certified in High-Ticket Mentorship for Entrepreneurs, and holds multiple national and international certifications in biosecurity and polymer chemistry. Her pioneering spirit and technical rigor crowned her Best Entrepreneur Lash Designer of the Year 2023 by the prestigious America Star Magazine. Today, beyond being an in-demand speaker and mentor, she proudly serves as official Ambassador for the Swiss Beauty Experience in the United States.'}
              </p>
            </div>

            {/* Cards: Certificações Brasileiras & Internacionais / Biossegurança & Saúde Ocular Rigorosa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-[#C9A24B]/25 shadow-xs flex items-center gap-3.5 hover:border-[#C9A24B]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#FAF4EA] border border-[#C9A24B]/35 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#C9A24B]" />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-semibold text-[#3B2F2A] leading-snug">
                  {lang === 'pt' ? 'Certificações Brasileiras & Internacionais' : 'Brazilian & International Certifications'}
                </h4>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#C9A24B]/25 shadow-xs flex items-center gap-3.5 hover:border-[#C9A24B]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#FAF4EA] border border-[#C9A24B]/35 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C9A24B]" />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-semibold text-[#3B2F2A] leading-snug">
                  {lang === 'pt' ? 'Biossegurança & Saúde Ocular Rigorosa' : 'Biosecurity & Strict Ocular Health'}
                </h4>
              </div>
            </div>

          </div>
        </div>

        {/* Subsection: Instagram Routine & In-Page Reel Viewing */}
        <div className="bg-[#FAF6EE] rounded-[32px] p-8 sm:p-12 border border-[#C9A24B]/30 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <Instagram className="w-4 h-4 text-[#C9A24B]" />
            <span>{SITE_DATA.contacts.instagramHandle}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2F2A] mb-3">
            {lang === 'pt' ? 'Vem acompanhar a minha rotina.' : 'Follow my daily studio routine.'}
          </h3>

          <p className="text-sm text-[#7A6A60] max-w-lg mx-auto mb-8">
            {lang === 'pt'
              ? 'Bastidores, transformações, dicas e muito carinho, todos os dias no @studio_thaisbraga.'
              : 'Behind the scenes, stunning transformations, lash tips, and heartfelt moments every day at @studio_thaisbraga.'}
          </p>

          {/* Embedded Instagram Reel to watch directly on site */}
          <div className="mx-auto w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#C9A24B]/40 shadow-xl bg-[#1a1412] relative mb-8">
            <iframe
              src={`https://www.instagram.com/reel/${SITE_DATA.reels.about}/embed`}
              title="Instagram Reel - Thais Braga"
              className="w-full h-full border-0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <a
            href={SITE_DATA.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Instagram className="w-4 h-4 text-[#2F241F]" />
            <span>{lang === 'pt' ? 'Seguir @studio_thaisbraga' : 'Follow @studio_thaisbraga'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
