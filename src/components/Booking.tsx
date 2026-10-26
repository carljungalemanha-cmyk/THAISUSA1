import React, { useState, useMemo } from 'react';
import { SITE_DATA, Language } from '../data/content';
import { SectionDivider } from './EyelashIcon';
import {
  Clock,
  Droplets,
  RotateCcw,
  CalendarX,
  MessageCircle,
  Info,
  CheckCircle2,
  CheckCheck,
  Eye
} from 'lucide-react';

interface BookingProps {
  lang: Language;
}

export const Booking: React.FC<BookingProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('Volume Brasileiro');
  const [date, setDate] = useState('');
  const [timePreference, setTimePreference] = useState('Tarde');
  const [appointmentType, setAppointmentType] = useState('1ª aplicação');
  const [hasReferencePhoto, setHasReferencePhoto] = useState<'sim' | 'não'>('não');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Today's date in YYYY-MM-DD for blocking past dates
  const todayStr = new Date().toISOString().split('T')[0];

  const rules = [
    {
      icon: Clock,
      title: { pt: 'Pontualidade', en: 'Punctuality' },
      desc: {
        pt: 'Chegue no horário agendado. Tolerância máxima de 15 minutos.',
        en: 'Please arrive on time. Maximum grace period is 15 minutes.'
      }
    },
    {
      icon: Droplets,
      title: { pt: 'Higienização', en: 'Clean Eye Area' },
      desc: {
        pt: 'Venha sem maquiagem e sem nenhum produto na área dos olhos.',
        en: 'Arrive free of makeup, mascara, or oily eye creams.'
      }
    },
    {
      icon: RotateCcw,
      title: { pt: 'Manutenções', en: 'Refill Rules' },
      desc: {
        pt: 'Cílios com mais de 3 semanas são cobrados como 1ª aplicação.',
        en: 'Sets over 3 weeks require a new full set appointment.'
      }
    },
    {
      icon: CalendarX,
      title: { pt: 'Cancelamentos', en: 'Cancellation Policy' },
      desc: {
        pt: 'Cancelamentos com menos de 24h têm cobrança de 50% do valor.',
        en: 'Cancellations with under 24h notice are charged 50%.'
      }
    }
  ];

  // List of all services flattened for the dropdown
  const allServicesList = [
    { pt: 'Ainda não sei, quero uma indicação', en: 'Not sure yet, I would love a recommendation' },
    ...SITE_DATA.serviceGroups.flatMap(g => g.items.map(item => item.name))
  ];

  // Live generated WhatsApp message calculated dynamically
  const liveMessage = useMemo(() => {
    const displayName = name.trim() || (lang === 'pt' ? '[Seu Nome]' : '[Your Name]');
    const displayDate = date || (lang === 'pt' ? '[A combinar]' : '[To be confirmed]');

    if (lang === 'pt') {
      return `Olá, Thais! Meu nome é ${displayName}. Gostaria de agendar: ${service}. Dia: ${displayDate}. Horário: ${timePreference}. Tipo: ${appointmentType}. Foto de referência: ${hasReferencePhoto === 'sim' ? 'Sim' : 'Não'}.${notes.trim() ? ` Observações: ${notes.trim()}` : ''}`;
    } else {
      const typeEn = appointmentType === '1ª aplicação'
        ? '1st Full Set'
        : appointmentType === 'Manutenção até 2 semanas'
        ? 'Refill (up to 2 weeks)'
        : 'Refill (up to 3 weeks)';
      return `Hello, Thais! My name is ${displayName}. I would like to book: ${service}. Date: ${displayDate}. Time: ${timePreference}. Type: ${typeEn}. Reference photo: ${hasReferencePhoto === 'sim' ? 'Yes' : 'No'}.${notes.trim() ? ` Notes: ${notes.trim()}` : ''}`;
    }
  }, [name, service, date, timePreference, appointmentType, hasReferencePhoto, notes, lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage(
        lang === 'pt'
          ? 'Por favor, informe seu nome para que possamos te atender com carinho.'
          : 'Please tell us your name so we can assist you warmly.'
      );
      return;
    }

    setErrorMessage('');

    const whatsappUrl = `https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(liveMessage)}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-24 bg-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#9C7A2E]">
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
            <span>{lang === 'pt' ? 'Agende seu horário' : 'Book Your Session'}</span>
            <span className="w-5 h-[1px] bg-[#C9A24B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2F2A] mb-4">
            {lang === 'pt' ? 'Seu momento de cuidado está a um clique.' : 'Your moment of indulgence is one click away.'}
          </h2>

          <p className="text-base text-[#7A6A60] leading-relaxed">
            {lang === 'pt'
              ? 'Preencha em menos de um minuto e finalize a conversa direto comigo no WhatsApp.'
              : 'Fill in this quick form in under a minute and finalize your appointment directly with me on WhatsApp.'}
          </p>

          <SectionDivider className="mt-8" />
        </div>

        {/* 4 Orientation & Etiquette Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-6xl mx-auto">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-5 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF6EE] border border-[#C9A24B]/30 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#C9A24B]" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#3B2F2A] mb-1">
                    {rule.title[lang]}
                  </h3>
                  <p className="text-xs text-[#7A6A60] leading-relaxed">
                    {rule.desc[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Form Box with Real-Time Live Message Preview */}
        <div className="max-w-3xl mx-auto luxury-card p-6 sm:p-10 bg-white border border-[#C9A24B]/30">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#C9A24B] flex items-center justify-center mx-auto text-[#9C7A2E]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#3B2F2A]">
                {lang === 'pt' ? 'Abrindo seu WhatsApp...' : 'Opening WhatsApp...'}
              </h3>
              <p className="text-sm text-[#7A6A60] max-w-md mx-auto">
                {lang === 'pt'
                  ? 'Sua mensagem formatada foi enviada para o WhatsApp. Se a conversa não abriu automaticamente, clique no botão abaixo:'
                  : 'Your tailored message is prepared. If WhatsApp did not open automatically, please click below:'}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${SITE_DATA.contacts.whatsappRaw}?text=${encodeURIComponent(liveMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-3 px-8 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#2F241F]" />
                  <span>{lang === 'pt' ? 'Abrir conversa agora' : 'Open chat now'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-gold-secondary py-3 px-6 rounded-full text-xs font-semibold cursor-pointer"
                >
                  {lang === 'pt' ? 'Editar informações' : 'Edit details'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* 1. Nome */}
              <div>
                <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                  1. {lang === 'pt' ? 'Como você quer ser chamada?' : 'What is your preferred name?'}{' '}
                  <span className="text-[#C9A24B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'pt' ? 'Ex: Marina Silva' : 'e.g., Jennifer Smith'}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/30 text-sm text-[#3B2F2A] focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all placeholder:text-[#7A6A60]/60"
                />
              </div>

              {/* 2. Serviço escolhido */}
              <div>
                <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                  2. {lang === 'pt' ? 'Serviço escolhido' : 'Selected Service'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/30 text-sm text-[#3B2F2A] focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all cursor-pointer"
                >
                  {allServicesList.map((item, idx) => (
                    <option key={idx} value={item[lang]}>
                      {item[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Dia de preferência & 4. Melhor horário */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                    3. {lang === 'pt' ? 'Dia de preferência' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/30 text-sm text-[#3B2F2A] focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                    4. {lang === 'pt' ? 'Melhor horário' : 'Preferred Time'}
                  </label>
                  <select
                    value={timePreference}
                    onChange={(e) => setTimePreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/30 text-sm text-[#3B2F2A] focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all cursor-pointer"
                  >
                    <option value={lang === 'pt' ? 'Manhã (09h - 12h)' : 'Morning (9am - 12pm)'}>
                      {lang === 'pt' ? 'Manhã (09h - 12h)' : 'Morning (9am - 12pm)'}
                    </option>
                    <option value={lang === 'pt' ? 'Tarde (13h - 17h)' : 'Afternoon (1pm - 5pm)'}>
                      {lang === 'pt' ? 'Tarde (13h - 17h)' : 'Afternoon (1pm - 5pm)'}
                    </option>
                    <option value={lang === 'pt' ? 'Noite (17h - 19h)' : 'Evening (5pm - 7pm)'}>
                      {lang === 'pt' ? 'Noite (17h - 19h)' : 'Evening (5pm - 7pm)'}
                    </option>
                    <option value={lang === 'pt' ? 'Horário flexível' : 'Flexible'}>
                      {lang === 'pt' ? 'Horário flexível' : 'Flexible'}
                    </option>
                  </select>
                </div>
              </div>

              {/* 5. Primeira vez ou manutenção? */}
              <div>
                <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                  5. {lang === 'pt' ? 'Primeira vez ou manutenção?' : 'First time or refill touch-up?'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { val: '1ª aplicação', label: { pt: '1ª Aplicação', en: '1st Full Set' } },
                    { val: 'Manutenção até 2 semanas', label: { pt: 'Até 2 semanas', en: 'Up to 2 wks' } },
                    { val: 'Manutenção até 3 semanas', label: { pt: 'Até 3 semanas', en: 'Up to 3 wks' } },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        appointmentType === opt.val
                          ? 'border-[#C9A24B] bg-[#FAF6EE] font-semibold text-[#3B2F2A]'
                          : 'border-[#C9A24B]/20 bg-white text-[#7A6A60] hover:border-[#C9A24B]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        value={opt.val}
                        checked={appointmentType === opt.val}
                        onChange={() => setAppointmentType(opt.val)}
                        className="accent-[#C9A24B]"
                      />
                      <span>{opt.label[lang]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 6. Tem foto de referência? */}
              <div>
                <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                  6. {lang === 'pt' ? 'Tem foto de referência?' : 'Do you have a reference photo?'}
                </label>
                <div className="flex items-center gap-4 mb-2">
                  <label className="flex items-center gap-2 text-xs text-[#3B2F2A] cursor-pointer">
                    <input
                      type="radio"
                      name="refPhoto"
                      checked={hasReferencePhoto === 'sim'}
                      onChange={() => setHasReferencePhoto('sim')}
                      className="accent-[#C9A24B]"
                    />
                    <span>{lang === 'pt' ? 'Sim' : 'Yes'}</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#3B2F2A] cursor-pointer">
                    <input
                      type="radio"
                      name="refPhoto"
                      checked={hasReferencePhoto === 'não'}
                      onChange={() => setHasReferencePhoto('não')}
                      className="accent-[#C9A24B]"
                    />
                    <span>{lang === 'pt' ? 'Não' : 'No'}</span>
                  </label>
                </div>
                {hasReferencePhoto === 'sim' && (
                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/30 flex items-start gap-2 text-xs text-[#7A6A60]">
                    <Info className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                    <span>
                      {lang === 'pt'
                        ? 'Envie a foto aqui no WhatsApp depois de abrir a conversa!'
                        : 'Please send your photo right in our WhatsApp chat after it opens!'}
                    </span>
                  </div>
                )}
              </div>

              {/* 7. Observações */}
              <div>
                <label className="block text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider mb-2">
                  7. {lang === 'pt' ? 'Observações (opcional)' : 'Notes or special requests (optional)'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    lang === 'pt'
                      ? 'Dúvidas, sensibilidades anteriores, formato preferido...'
                      : 'Any sensitivities, allergies, or questions...'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#C9A24B]/30 text-sm text-[#3B2F2A] focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all placeholder:text-[#7A6A60]/60 resize-none"
                />
              </div>

              {/* REAL-TIME LIVE WHATSAPP MESSAGE PREVIEW */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#9C7A2E] uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-[#C9A24B]" />
                  <span>
                    {lang === 'pt'
                      ? 'Prévia em tempo real da mensagem que será enviada:'
                      : 'Real-time preview of the message to be sent:'}
                  </span>
                </div>

                <div className="bg-[#EFEAE2] rounded-2xl p-4 sm:p-5 border border-[#C9A24B]/30 relative shadow-inner">
                  {/* WhatsApp chat bubble */}
                  <div className="bg-white rounded-2xl rounded-tr-xs p-4 shadow-sm border border-black/5 relative max-w-xl ml-auto">
                    <p className="text-xs sm:text-sm text-[#111B21] leading-relaxed whitespace-pre-wrap font-sans">
                      {liveMessage}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-[#667781]">
                      <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full btn-gold text-sm font-semibold flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#2F241F]" />
                <span>{lang === 'pt' ? 'Enviar pelo WhatsApp' : 'Send via WhatsApp'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
