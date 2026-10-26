import React, { useState, useEffect } from 'react';
import { Language } from './data/content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Mentorship } from './components/Mentorship';
import { Testimonials } from './components/Testimonials';
import { Studio } from './components/Studio';
import { Booking } from './components/Booking';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  // Safe localStorage reading
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('studio_thaisbraga_lang');
      if (saved === 'pt' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'pt';
  });

  // Sync language choice to localStorage & HTML lang attribute
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('studio_thaisbraga_lang', newLang);
    } catch {
      // storage unavailable
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#3B2F2A] relative overflow-x-hidden selection:bg-[#E8D08A]/40 selection:text-[#3B2F2A]">
      {/* 1. Header (fixed, translucent blur, PT/EN selector, WhatsApp CTA) */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="flex-grow">
        {/* 2. Hero (Section 5.1) */}
        <Hero lang={lang} />

        {/* 3. Serviços (Section 5.2) */}
        <Services lang={lang} />

        {/* 4. Galeria (Section 5.3) */}
        <Gallery lang={lang} />

        {/* 5. Sobre a profissional + Instagram (Section 5.4) */}
        <About lang={lang} />

        {/* 6. Mentoria / Curso Lash Designer de Sucesso (Section 5.5) */}
        <Mentorship lang={lang} />

        {/* 7. Feedbacks / Depoimentos (Section 5.6) */}
        <Testimonials lang={lang} />

        {/* 8. Local / Studio (Section 5.7) */}
        <Studio lang={lang} />

        {/* 9. Agendamento + Mini Formulário com Prévia ao Vivo (Section 5.8) */}
        <Booking lang={lang} />

        {/* 10. FAQ (Section 5.9) */}
        <FAQ lang={lang} />
      </main>

      {/* 11. Rodapé (Section 5.10) */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Button with White Logo */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

export default App;
