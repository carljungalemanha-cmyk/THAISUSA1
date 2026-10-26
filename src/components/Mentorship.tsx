import React, { useState, useEffect, useRef } from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider, EyelashIcon } from './EyelashIcon';
import { Lightbox, LightboxImage } from './Lightbox';
import {
  Calendar,
  BookOpen,
  Sparkles,
  Users,
  Award,
  Gift,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  HeartPulse,
  Briefcase
} from 'lucide-react';

interface MentorshipProps {
  lang: Language;
}

export const Mentorship: React.FC<MentorshipProps> = ({ lang }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselTimerRef = useRef<number | null>(null);

  // Accordion state for the 5 curriculum & course blocks
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    fundamentos: true,
    tecnica: false,
    rotina: false,
    incluso: false,
    bonus: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const images: LightboxImage[] = SITE_DATA.images.courseCarousel.map((img) => ({
    url: img.url,
    alt: img.alt[lang]
  }));

  // Auto-advance course carousel
  useEffect(() => {
    if (isHovered) return;
    carouselTimerRef.current = window.setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => {
      if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
    };
  }, [isHovered, images.length]);

  const techniques = [
    { name: { pt: 'Volume Clássico', en: 'Classic Volume' }, desc: { pt: 'A base perfeita e refinada', en: 'The refined foundational technique' } },
    { name: { pt: 'Volume Brasileiro', en: 'Brazilian Volume' }, desc: { pt: 'O queridinho do dia a dia com fios Y', en: 'Top salon favorite with Y-lash strands' } },
    { name: { pt: '3D Volume', en: '3D Volume' }, desc: { pt: 'Densidade harmônica e elegância', en: 'Harmonious density and elegance' } },
    { name: { pt: '4D Volume', en: '4D Volume' }, desc: { pt: 'Expressão marcante com leveza', en: 'Expressive fullness with ultra lightness' } },
    { name: { pt: 'Volume Egípcio', en: 'Egyptian Volume' }, desc: { pt: 'Fios W para efeito preenchido e sedutor', en: 'W-lash strands for alluring fullness' } },
    { name: { pt: 'Volume Brown', en: 'Brown Volume' }, desc: { pt: 'Tendência máxima em naturalidade e sofisticação', en: 'Ultra-trending natural mocha luxury' } },
  ];

  const formatCards = [
    { icon: Calendar, title: { pt: '2 dias intensivos', en: '2 Intensive Days' }, desc: { pt: '7 horas por dia de imersão total', en: '7 hours/day total immersion' } },
    { icon: BookOpen, title: { pt: 'Teoria & Prática', en: 'Theory & Practice' }, desc: { pt: 'Conhecimento sólido e mão na massa', en: 'Rock-solid fundamentals & hands-on' } },
    { icon: Sparkles, title: { pt: 'Treino Gradual', en: 'Gradual Training' }, desc: { pt: 'Em esponja, boneca e modelo real', en: 'On sponges, mannequins, then live model' } },
    { icon: Users, title: { pt: 'Turmas de até 4 ou VIP', en: 'Max 4 Students or VIP' }, desc: { pt: 'Atenção 100% individualizada', en: '100% tailored 1-on-1 focus' } },
  ];

  // The 5 expandable modules requested by user
  const modules = [
    {
      id: 'fundamentos',
      icon: HeartPulse,
      title: { pt: 'Fundamentos e Saúde', en: 'Fundamentals & Health' },
      badge: null,
      items: [
        { pt: 'Função biológica e ciclo de vida dos cílios', en: 'Biological function and eyelash growth cycle' },
        { pt: 'Saúde, anatomia e patologias oculares', en: 'Ocular health, anatomy and contraindications' },
        { pt: 'Prevenção de irritações, queimaduras químicas e alergias', en: 'Prevention of irritations, chemical burns and allergies' },
      ],
    },
    {
      id: 'tecnica',
      icon: Sparkles,
      title: { pt: 'Técnica e Precisão', en: 'Technique & Precision' },
      badge: null,
      items: [
        { pt: 'Seleção de fios sintéticos, curvaturas e espessuras', en: 'Synthetic fibers selection, curlers and diameters' },
        { pt: 'Adesivos, controle de umidade e temperatura da sala', en: 'Adhesives, humidity and room temperature mastery' },
        { pt: 'Camadas, isolamento perfeito, mapping e visagismo', en: 'Layering, perfect surgical isolation, mapping & visagism' },
      ],
    },
    {
      id: 'rotina',
      icon: Briefcase,
      title: { pt: 'Rotina Profissional', en: 'Professional Routine' },
      badge: null,
      items: [
        { pt: 'Remoção química e mecânica segura', en: 'Safe chemical and mechanical lash removal' },
        { pt: 'Protocolos de manutenção e máxima retenção', en: 'Refill protocols and maximum 5-week retention' },
        { pt: 'Biossegurança, esterilização, materiais e ferramentas', en: 'Biosecurity, sterilization, materials and essential tools' },
      ],
    },
    {
      id: 'incluso',
      icon: Award,
      title: { pt: 'O Curso Inclui', en: 'Course Includes' },
      badge: null,
      items: [
        { pt: 'Kit de material personalizado de alto padrão', en: 'High-end customized student kit' },
        { pt: 'Apostila física e digital completa', en: 'Complete printed and digital student manual' },
        { pt: 'Certificado internacional de conclusão', en: 'Official international certificate of completion' },
        { pt: 'Coffee break gourmet incluso nos 2 dias', en: 'Gourmet coffee break included on both days' },
        { pt: '6 meses de assistência e suporte contínuo pós-curso', en: '6 months of continuous post-course support & assistance' },
      ],
    },
    {
      id: 'bonus',
      icon: Gift,
      title: { pt: 'Bônus Especiais', en: 'Special Bonuses' },
      badge: { pt: 'Exclusivo', en: 'Exclusive' },
      items: [
        { pt: 'Como atrair clientes prontas para pagar pelo seu valor', en: 'How to attract high-paying clients ready to book' },
        { pt: 'Segredos da alta retenção (cílios que duram semanas a mais)', en: 'High retention secrets (lashes that last weeks longer)' },
        { pt: 'Técnicas de fotos e iluminação para Instagram que vendem', en: 'Instagram lighting & photography techniques that convert' },
        { pt: 'Módulo exclusivo de fios marrons (tendência internacional)', en: 'Exclusive Brown Lash module (top international trend)' },
        { pt: 'Um dia de Shadowing no studio comigo, acompanhando atendimentos reais e tirando dúvidas ao vivo', en: 'VIP Shadowing Day at the studio with Thais, shadowing real clients and live Q&A' },
      ],
    },
  ];

  return (
    <section id="mentoria" className="py-24 bg-[#FBF8F3] relative overflow-hidden">
      {/* Golden Continuous Marquee Bar */}
      <div className="bg-gradient-to-r from-[#9C7A2E] via-[#C9A24B] to-[#E8D08A] py-3 text-[#2F241F] font-serif uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold select-none shadow-md overflow-hidden mb-20">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center mx-3">
              <span>EXTENSÃO DE CÍLIOS</span>
              <span className="mx-4 text-white">✦</span>
              <span>CLÁSSICO</span>
              <span className="mx-4 text-white">✦</span>
              <span>BRASILEIRO</span>
              <span className="mx-4 text-white">✦</span>
              <span>EGÍPCIO</span>
              <span className="mx-4 text-white">✦</span>
              <span>3D</span>
              <span className="mx-4 text-white">✦</span>
              <span>4D</span>
              <span className="mx-4 text-white">✦</span>
              <span>BROWN</span>
              <span className="mx-4 text-white">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>
              {lang === 'pt'
                ? 'Mentoria e Curso presencial · Newark, NJ'
                : 'Mentorship & In-Person Course · Newark, NJ'}
            </span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? (
              <>
                Lash Designer de Sucesso: <span className="gold-text">a sua nova carreira começa aqui.</span>
              </>
            ) : (
              <>
                Successful Lash Designer: <span className="gold-text">your new career begins here.</span>
              </>
            )}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Aprenda seis técnicas de extensão de cílios em 2 dias e comece a atender com confiança, do natural ao mais impactante.'
              : 'Master six in-demand eyelash extension techniques in just 2 days and start taking clients with absolute confidence, from subtle elegance to maximum glamour.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* Hero Highlight Box with Lateral Photo & Course Intro */}
        <div className="luxury-card p-6 sm:p-10 mb-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Lateral Featured Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C9A24B]/40 shadow-xl group">
                <img
                  src={SITE_DATA.images.mentorshipFeatured}
                  alt="Curso Lash Designer de Sucesso com Thais Braga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A24B]/30 text-xs font-semibold text-[#9C7A2E] shadow-sm">
                  {lang === 'pt' ? '🎓 Turmas Reduzidas' : '🎓 Intimate Cohorts'}
                </div>
              </div>
            </div>

            {/* Course Intro Text & Primary CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C7A2E] mb-2">
                {lang === 'pt' ? 'Sobre o Curso' : 'About The Course'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2F2A] mb-4">
                {lang === 'pt'
                  ? 'Aprenda do zero, com acolhimento e prática real.'
                  : 'Learn from scratch with warm guidance and real hands-on practice.'}
              </h3>
              <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed mb-6">
                {lang === 'pt'
                  ? 'Você vai aprender do zero, com acolhimento e prática de verdade: em apenas dois dias, domina seis técnicas essenciais, treinando em esponja e boneca e depois aplicando em modelo. Turmas pequenas de até 4 pessoas ou sessões VIP, para um aprendizado feito sob medida para você.'
                  : 'You will learn from the ground up with warm encouragement and authentic practice: in only two days, master six essential techniques, training on precision sponges, mannequin heads, and then a live real model. Intimate cohorts of up to 4 students or 1-on-1 VIP sessions tailored just for you.'}
              </p>

              {/* Format Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {formatCards.map((fmt, idx) => {
                  const Icon = fmt.icon;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/20 text-center">
                      <Icon className="w-5 h-5 text-[#C9A24B] mx-auto mb-1.5" />
                      <h4 className="text-xs font-semibold text-[#3B2F2A] leading-tight mb-0.5">{fmt.title[lang]}</h4>
                      <p className="text-[10px] text-[#7A6A60] leading-tight">{fmt.desc[lang]}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mentorship Button -> studiothaisbraga.com in new tab */}
              <div>
                <a
                  href={SITE_DATA.contacts.mentorshipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <span>{lang === 'pt' ? 'Garantir minha vaga' : 'Secure My Spot'}</span>
                  <ExternalLink className="w-4 h-4 text-[#2F241F]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Techniques Grid */}
        <div className="mb-20">
          <h3 className="text-center font-serif text-2xl sm:text-3xl text-[#3B2F2A] mb-8">
            {lang === 'pt' ? 'As 6 Técnicas que Você vai Dominar' : 'The 6 Techniques You Will Master'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techniques.map((tech, idx) => (
              <div
                key={idx}
                className="luxury-card p-4 text-center bg-white flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-bold gold-text block mb-1">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#3B2F2A] mb-1">
                    {tech.name[lang]}
                  </h4>
                </div>
                <p className="text-[11px] text-[#7A6A60] leading-tight mt-2">
                  {tech.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Curriculum & Inclusions Accordions (Requested by User with Arrow/Chevron) */}
        <div className="bg-[#FAF6EE] rounded-[32px] p-6 sm:p-10 md:p-12 border border-[#C9A24B]/30 mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2F2A] mb-2">
              {lang === 'pt' ? 'O que Você vai Aprender' : 'Curriculum & What You Will Learn'}
            </h3>
            <p className="text-xs text-[#7A6A60]">
              {lang === 'pt'
                ? 'Clique nas setas para expandir e ler os tópicos detalhados'
                : 'Click on the arrows to expand and explore the detailed curriculum'}
            </p>
          </div>

          <div className="space-y-4">
            {modules.map((mod) => {
              const isOpen = openSections[mod.id];
              const IconComp = mod.icon;

              return (
                <div
                  key={mod.id}
                  className="bg-white rounded-2xl border border-[#C9A24B]/25 overflow-hidden shadow-xs transition-all duration-300"
                >
                  {/* Clickable Header with Arrow */}
                  <button
                    type="button"
                    onClick={() => toggleSection(mod.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EE]/50 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FAF4EA] border border-[#C9A24B]/30 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4 text-[#C9A24B]" />
                      </div>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#3B2F2A]">
                        {mod.title[lang]}
                      </span>
                      {mod.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E9C7C3] text-[#3B2F2A] border border-[#C9A24B]/30">
                          {mod.badge[lang]}
                        </span>
                      )}
                    </div>

                    {/* Arrow / Chevron Button */}
                    <div
                      className={`w-7 h-7 rounded-full border border-[#C9A24B]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#C9A24B] text-white'
                          : 'bg-[#FAF6EE] text-[#9C7A2E]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#C9A24B]/15 animate-fadeIn">
                      <ul className="space-y-2.5 mt-2">
                        {mod.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#7A6A60] leading-relaxed"
                          >
                            <div className="mt-1 shrink-0 text-[#C9A24B]">
                              <EyelashIcon className="w-3.5 h-3 text-[#C9A24B]" />
                            </div>
                            <span className="text-[#3B2F2A]/90">{item[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Infinite Carousel of Course Photos with Lightbox and Touch drag/pause */}
        <div
          className="mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-2xl text-[#3B2F2A]">
                {lang === 'pt' ? 'Momentos da Mentoria & Prática' : 'Mentorship Moments & Practice'}
              </h3>
              <p className="text-xs text-[#7A6A60]">
                {lang === 'pt' ? 'Clique nas fotos para expandir' : 'Click on photos to expand in full view'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + images.length) % images.length)}
                aria-label="Anterior"
                className="p-2 rounded-full border border-[#C9A24B]/30 bg-white hover:bg-[#FAF4EA] text-[#3B2F2A] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % images.length)}
                aria-label="Próximo"
                className="p-2 rounded-full border border-[#C9A24B]/30 bg-white hover:bg-[#FAF4EA] text-[#3B2F2A] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {images.map((img, i) => {
              const isSelected = i === carouselIndex;
              return (
                <div
                  key={i}
                  onClick={() => {
                    setCurrentIdx(i);
                    setLightboxOpen(true);
                  }}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden aspect-square border transition-all duration-300 group ${
                    isSelected ? 'border-[#C9A24B] ring-2 ring-[#E8D08A]/60 shadow-lg scale-102' : 'border-[#C9A24B]/20 hover:border-[#C9A24B]'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#3B2F2A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Sparkles className="w-5 h-5 text-[#E8D08A]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integrated Reels Embed for Mentorship (without caption) */}
        <div className="mb-20 max-w-sm mx-auto text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#9C7A2E] mb-3">
            {lang === 'pt' ? 'Assista à Experiência' : 'Experience The Classroom'}
          </p>
          <div className="mx-auto w-full aspect-[9/16] rounded-2xl overflow-hidden border border-[#C9A24B]/40 shadow-lg bg-[#2F241F]">
            <iframe
              src={`https://www.instagram.com/reel/${SITE_DATA.reels.mentorship}/embed`}
              title="Instagram Reel Mentoria - Thais Braga"
              className="w-full h-full border-0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Warm Closing Quote & Final Course CTA */}
        <div className="text-center max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-[#C9A24B]/30 shadow-md">
          <p className="font-serif italic text-xl sm:text-2xl text-[#3B2F2A] mb-6">
            "{lang === 'pt'
              ? 'Você não precisa ter experiência. Precisa apenas de vontade de começar.'
              : 'You do not need prior experience. You only need the genuine willingness to begin.'}"
          </p>
          <a
            href={SITE_DATA.contacts.mentorshipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 shadow-lg cursor-pointer"
          >
            <span>{lang === 'pt' ? 'Garantir minha vaga' : 'Secure My Spot'}</span>
            <ExternalLink className="w-4 h-4 text-[#2F241F]" />
          </a>
        </div>
      </div>

      {/* Course Photos Lightbox */}
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
