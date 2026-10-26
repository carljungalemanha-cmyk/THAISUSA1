import React, { useState, useEffect } from 'react';
import { EyelashIcon } from './EyelashIcon';
import { SITE_DATA, Language } from '../data/content';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'servicos', 'galeria', 'sobre', 'mentoria', 'feedbacks', 'studio', 'agendamento', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: { pt: 'Início', en: 'Home' } },
    { id: 'servicos', label: { pt: 'Serviços', en: 'Services' } },
    { id: 'galeria', label: { pt: 'Galeria', en: 'Gallery' } },
    { id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
    { id: 'mentoria', label: { pt: 'Mentoria', en: 'Mentorship' } },
    { id: 'studio', label: { pt: 'Local', en: 'Studio' } },
    { id: 'agendamento', label: { pt: 'Agendar', en: 'Book' } },
    { id: 'faq', label: { pt: 'FAQ', en: 'FAQ' } },
  ];

  const getWhatsAppLink = () => {
    const text = lang === 'pt'
      ? 'Olá, Thais! Gostaria de agendar um horário no studio.'
      : 'Hello, Thais! I would like to book an appointment at the studio.';
    return `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8F3]/90 backdrop-blur-md shadow-sm border-b border-[#C9A24B]/20 py-3.5'
          : 'bg-[#FBF8F3]/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          aria-label="Studio Thais Braga - Início"
        >
          <EyelashIcon className="w-6 h-5 text-[#C9A24B] transition-transform duration-300 group-hover:scale-110" />
          <span className="font-serif text-2xl sm:text-3xl tracking-wide font-normal gold-text">
            Thais Braga
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#C9A24B] font-semibold'
                    : 'text-[#7A6A60] hover:text-[#3B2F2A]'
                }`}
              >
                {item.label[lang]}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A24B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Zone: Language Selector PT | EN & CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Language Selector PT | EN */}
          <div className="flex items-center bg-[#F5EFE6] border border-[#C9A24B]/30 rounded-full p-0.5 text-xs font-semibold text-[#7A6A60]">
            <button
              onClick={() => onLanguageChange('pt')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'pt'
                  ? 'bg-[#9C7A2E] text-white shadow-xs'
                  : 'hover:text-[#3B2F2A]'
              }`}
              aria-label="Mudar para Português"
            >
              PT
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#9C7A2E] text-white shadow-xs'
                  : 'hover:text-[#3B2F2A]'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Primary CTA (WhatsApp) */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold btn-gold whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#2F241F]" />
            <span>{lang === 'pt' ? 'Agendar' : 'Book Now'}</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#3B2F2A] hover:text-[#C9A24B] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FBF8F3]/98 backdrop-blur-xl border-b border-[#C9A24B]/30 shadow-2xl py-6 px-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left font-serif text-xl tracking-wide text-[#3B2F2A] hover:text-[#C9A24B] py-2 border-b border-[#C9A24B]/10 cursor-pointer flex items-center justify-between"
              >
                <span>{item.label[lang]}</span>
                {activeSection === item.id && (
                  <EyelashIcon className="w-4 h-3 text-[#C9A24B]" />
                )}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold btn-gold cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#2F241F]" />
                <span>{lang === 'pt' ? 'Agendar pelo WhatsApp' : 'Book on WhatsApp'}</span>
              </a>

              <a
                href={SITE_DATA.contacts.mentorshipUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 rounded-full text-xs font-semibold btn-gold-secondary cursor-pointer"
              >
                <span>{lang === 'pt' ? 'Conhecer a Mentoria' : 'Explore Mentorship'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
