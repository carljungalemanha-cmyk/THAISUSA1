export type Language = 'pt' | 'en';

export interface ServiceItem {
  id: string;
  name: { pt: string; en: string };
  description: { pt: string; en: string };
  image: string;
  // For lash extensions: 3 prices in USD (1st application, 2 weeks, 3 weeks)
  pricesUSD?: { first: number; twoWeeks: number; threeWeeks: number };
  // For single price services in USD
  priceUSD?: number;
  featured?: boolean;
}

export interface ServiceGroup {
  id: string;
  icon: string;
  title: { pt: string; en: string };
  subtitle: { pt: string; en: string };
  items: ServiceItem[];
}

export const SITE_DATA = {
  contacts: {
    whatsappNumber: '+18629558236',
    whatsappRaw: '18629558236',
    instagramUrl: 'https://www.instagram.com/studio_thaisbraga/',
    instagramHandle: '@studio_thaisbraga',
    mentorshipUrl: 'https://studiothaisbraga.com/',
    address: '269 Oliver St, Newark, NJ 07105, EUA',
    googleMapsEmbed: 'https://maps.google.com/maps?q=269+Oliver+St,+Newark,+NJ+07105&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsDirections: 'https://www.google.com/maps/place/269+Oliver+St,+Newark,+NJ+07105,+EUA/@40.7226175,-74.1635724,17z',
    coordinates: {
      lat: 40.7226175,
      lng: -74.1613837
    }
  },

  images: {
    hero: 'https://i.ibb.co/pj8Hv1dM/527245827-18182334562322314-654052260932165804-n-convertido-de-jpg.webp',
    aboutSubstitute: 'https://i.ibb.co/pj8Hv1dM/527245827-18182334562322314-654052260932165804-n-convertido-de-jpg.webp',
    mentorshipFeatured: 'https://i.ibb.co/qLt4gY0P/Improve-photo-quality-and-remove-2-K-20261024084236.webp',
    studioLogo: 'https://i.ibb.co/tRLxxwc/Center-logo-on-white-background-2-K-20261024091151.webp',
    gallery: [
      {
        url: 'https://i.ibb.co/sJwNP2jj/Save-Clip-App-540759101-18184636594322314-4295567144239371594-n.webp',
        alt: { pt: 'Extensão de cílios Volume Fox com acabamento delicado', en: 'Fox Volume lash extensions with delicate finish' }
      },
      {
        url: 'https://i.ibb.co/JRzz0h6z/Save-Clip-App-499876112-18174866023322314-5938040367293096446-n.webp',
        alt: { pt: 'Volume Brasileiro com alinhamento impecável', en: 'Brazilian Volume with flawless alignment' }
      },
      {
        url: 'https://i.ibb.co/gbkhqDb0/Save-Clip-App-481822213-18167533372322314-5535984661507270351-n.webp',
        alt: { pt: 'Design e definição de sobrancelhas no Studio Thais Braga', en: 'Eyebrow design and definition at Studio Thais Braga' }
      },
      {
        url: 'https://i.ibb.co/DfYR3N6c/Save-Clip-App-840418905-18229634053322314-3684551265117667453-n-convertido-de-jpg.webp',
        alt: { pt: 'Extensão de cílios clássico e natural em cliente satisfeita', en: 'Natural classic lash extensions on satisfied client' }
      },
      {
        url: 'https://i.ibb.co/6JFzpTkc/Save-Clip-App-566967945-18191771356322314-12907103959612794-n-convertido-de-jpg.webp',
        alt: { pt: 'Volume Egípcio destacando olhar misterioso e elegante', en: 'Egyptian Volume highlighting mysterious, elegant gaze' }
      },
      {
        url: 'https://i.ibb.co/bRCKTdTs/Save-Clip-App-858088404-18230618314322314-2216797133741016227-n-convertido-de-jpg.webp',
        alt: { pt: 'Lash Lifting e realce natural dos cílios', en: 'Lash Lifting and natural eyelash enhancement' }
      },
      {
        url: 'https://i.ibb.co/xKLqckbD/Save-Clip-App-775243996-18224099455322314-3653330432995892578-n-convertido-de-jpg.webp',
        alt: { pt: 'Brow Lamination e preenchimento harmônico', en: 'Brow Lamination and harmonic filling' }
      },
      {
        url: 'https://i.ibb.co/b5RdWCCq/Save-Clip-App-808284982-18227608273322314-1639686223512452624-n.webp',
        alt: { pt: 'Volume Russo com máxima sofisticação e densidade', en: 'Russian Volume with high density and glamour' }
      }
    ],
    courseCarousel: [
      {
        url: 'https://i.ibb.co/PG7jBgrR/Save-Clip-App-858088425-18230546068322314-703888666509887022-n.webp',
        alt: { pt: 'Aluna praticando técnica em modelo real', en: 'Student practicing technique on real model' }
      },
      {
        url: 'https://i.ibb.co/j9QMmGmV/Save-Clip-App-825323746-18228254752322314-322839167794412293-n.webp',
        alt: { pt: 'Kit exclusivo de materiais entregue no curso', en: 'Exclusive kit delivered during the course' }
      },
      {
        url: 'https://i.ibb.co/9kt6WdWn/Save-Clip-App-809543391-18226878469322314-8935497811955384705-n.webp',
        alt: { pt: 'Mentoria personalizada VIP com Thais Braga', en: 'Personalized VIP mentorship with Thais Braga' }
      },
      {
        url: 'https://i.ibb.co/v6HrDX2h/Save-Clip-App-757563411-18221651248322314-8430886763489132940-n.webp',
        alt: { pt: 'Prática de mapping e isolamento preciso', en: 'Precision mapping and isolation practice' }
      },
      {
        url: 'https://i.ibb.co/JjBcX6Yr/Save-Clip-App-747718822-18220273249322314-8309868645911816255-n.webp',
        alt: { pt: 'Entrega de certificado oficial e celebração', en: 'Official certification delivery and celebration' }
      },
      {
        url: 'https://i.ibb.co/21h8x9d4/Save-Clip-App-735170267-18218416567322314-8875759537842288013-n.webp',
        alt: { pt: 'Turma reduzida com atenção individualizada', en: 'Intimate cohort with 1-on-1 guidance' }
      }
    ]
  },

  reels: {
    about: 'Deh7RG5zPn5',
    mentorship: 'DeP7s3ATF-4',
    studio: 'DYai_nezU0l'
  },

  serviceGroups: [
    {
      id: 'lashes',
      icon: '👁️',
      title: { pt: 'Extensão de Cílios', en: 'Lash Extensions' },
      subtitle: {
        pt: 'Transforme seu olhar e sinta-se maravilhosa todos os dias!',
        en: 'Transform your gaze and feel gorgeous every single day!'
      },
      items: [
        {
          id: 'volume-classico',
          name: { pt: 'Volume Clássico', en: 'Classic Volume' },
          description: {
            pt: 'Ideal para quem busca um efeito natural e delicado!',
            en: 'Ideal for those seeking a soft, natural and delicate effect!'
          },
          image: 'https://i.ibb.co/rfwn25zg/Save-Clip-App-845844693-18230087431322314-3247018950939811102-n-convertido-de-jpg.webp',
          pricesUSD: { first: 100, twoWeeks: 65, threeWeeks: 75 }
        },
        {
          id: 'volume-brasileiro',
          name: { pt: 'Volume Brasileiro', en: 'Brazilian Volume' },
          description: {
            pt: 'Discreto e elegante, perfeito para o dia a dia!',
            en: 'Discreet and elegant, perfect for your everyday glow!'
          },
          image: 'https://i.ibb.co/VYYzdpm2/Save-Clip-App-444900070-18139027339322314-1585665006526179852-n-convertido-de-jpg.webp',
          pricesUSD: { first: 110, twoWeeks: 70, threeWeeks: 80 }
        },
        {
          id: 'volume-light',
          name: { pt: 'Volume Light', en: 'Light Volume' },
          description: {
            pt: 'Leveza e naturalidade para um olhar suave todos os dias!',
            en: 'Lightness and effortless natural beauty for a soft everyday look!'
          },
          image: 'https://i.ibb.co/HpCvqdLd/Save-Clip-App-625026629-18106424047685478-895653604560848372-n.webp',
          pricesUSD: { first: 110, twoWeeks: 70, threeWeeks: 80 }
        },
        {
          id: 'volume-egipcio',
          name: { pt: 'Volume Egípcio', en: 'Egyptian Volume' },
          description: {
            pt: 'Inspiração em olhares misteriosos e sedutores!',
            en: 'Inspired by alluring, seductive and mysterious gazes!'
          },
          image: 'https://i.ibb.co/m5XxrS2F/Volume-Eg-pcio-convertido-de-jpg.webp',
          pricesUSD: { first: 115, twoWeeks: 75, threeWeeks: 85 }
        },
        {
          id: 'volume-sirena',
          name: { pt: 'Volume Sirena', en: 'Siren Volume' },
          description: {
            pt: 'Cílios com efeito degradê que hipnotizam!',
            en: 'Eyelashes with a mesmerizing gradient elongation effect!'
          },
          image: 'https://i.ibb.co/wZNCtpY4/vi-lashes-pro-convertido-de-jpg.webp',
          pricesUSD: { first: 110, twoWeeks: 75, threeWeeks: 85 }
        },
        {
          id: 'volume-fox',
          name: { pt: 'Volume Fox', en: 'Fox Eyes Volume' },
          description: {
            pt: 'O olhar puxado que encanta!',
            en: 'The elongated lifted cat-eye that captivates!'
          },
          image: 'https://i.ibb.co/ZZ08Mvk/Save-Clip-App-504492662-1456881351993729-149536786975703498-n-convertido-de-jpg.webp',
          pricesUSD: { first: 120, twoWeeks: 80, threeWeeks: 90 }
        },
        {
          id: 'volume-wispy',
          name: { pt: 'Volume Wispy', en: 'Wispy Volume' },
          description: {
            pt: 'Textura única para um olhar diferenciado!',
            en: 'Unique feathery texture for a distinct, trendy gaze!'
          },
          image: 'https://i.ibb.co/hxSxyxpV/Save-Clip-App-503989992-1384994859421031-4815929985746500597-n-convertido-de-jpg.webp',
          pricesUSD: { first: 120, twoWeeks: 80, threeWeeks: 90 }
        },
        {
          id: 'volume-russo',
          name: { pt: 'Volume Russo', en: 'Russian Volume' },
          description: {
            pt: 'Para quem ama impacto e glamour!',
            en: 'For those who love maximum impact, density and glamour!'
          },
          image: 'https://i.ibb.co/b5RdWCCq/Save-Clip-App-808284982-18227608273322314-1639686223512452624-n.webp',
          pricesUSD: { first: 130, twoWeeks: 85, threeWeeks: 95 }
        }
      ]
    },
    {
      id: 'brows',
      icon: '🤎',
      title: { pt: 'Sobrancelha', en: 'Eyebrows' },
      subtitle: {
        pt: 'Porque sobrancelhas perfeitas fazem toda a diferença!',
        en: 'Because perfect brows frame your face and make all the difference!'
      },
      items: [
        {
          id: 'designer-sobrancelha',
          name: { pt: 'Designer de Sobrancelha', en: 'Eyebrow Shaping & Design' },
          description: {
            pt: 'Limpeza e alinhamento para realçar o formato natural',
            en: 'Precision shaping and alignment to enhance your natural arch'
          },
          image: 'https://i.ibb.co/Y5VMxc2/Design-super-natural-do-jeito-que-a-gente-ama-convertido-de-jpg.webp',
          priceUSD: 20
        },
        {
          id: 'designer-com-henna',
          name: { pt: 'Designer com Henna', en: 'Design with Henna' },
          description: {
            pt: 'Preenchimento e definição com longa duração',
            en: 'Semi-permanent tinting and definition with long-lasting hold'
          },
          image: 'https://i.ibb.co/jZvhjqVn/Henna-natural-convertido-de-jpg.webp',
          priceUSD: 35
        },
        {
          id: 'brow-lamination',
          name: { pt: 'Brow Lamination', en: 'Brow Lamination' },
          description: {
            pt: 'Sobrancelhas alinhadas e volumosas com efeito natural',
            en: 'Fluffy, brushed-up and fuller brows with a natural lift'
          },
          image: 'https://i.ibb.co/93tbcY87/Save-Clip-App-505420318-1748766062692478-23234415952025423-n-convertido-de-jpg.webp',
          priceUSD: 70
        }
      ]
    },
    {
      id: 'lashes-lips',
      icon: '💋',
      title: { pt: 'Cílios e Lábios', en: 'Lashes & Lips' },
      subtitle: {
        pt: 'Realce sua beleza natural.',
        en: 'Highlight your effortless natural beauty.'
      },
      items: [
        {
          id: 'lash-lifting',
          name: { pt: 'Lash Lifting', en: 'Lash Lift & Tint' },
          description: {
            pt: 'Cílios curvados e destacados, sem extensões!',
            en: 'Curled, dark and lifted natural eyelashes without extensions!'
          },
          image: 'https://i.ibb.co/3mmxns3s/Save-Clip-App-486406620-18170389681322314-8365755760430211235-n.webp',
          priceUSD: 85
        },
        {
          id: 'hidragloss',
          name: { pt: 'Hidragloss', en: 'Hydragloss Lips' },
          description: {
            pt: 'Tratamento labial profundo',
            en: 'Deep regenerative lip hydration, volume boost & rejuvenation'
          },
          image: 'https://i.ibb.co/N6PDcwdr/download-1-convertido-de-jpg.webp',
          priceUSD: 65
        }
      ]
    }
  ],

  testimonials: [
    {
      id: 't1',
      quote: {
        pt: 'Saí do studio me sentindo outra mulher. Os cílios ficaram leves, naturais e duraram muito!',
        en: 'I left the studio feeling like a whole new woman. The lashes felt featherlight, natural and lasted so long!'
      },
      author: 'Juliana S.',
      role: { pt: 'Cliente', en: 'Client' },
      service: { pt: 'Volume Brasileiro', en: 'Brazilian Volume' }
    },
    {
      id: 't2',
      quote: {
        pt: 'Atendimento acolhedor, ambiente lindo e um cuidado que a gente sente em cada detalhe.',
        en: 'Warm welcoming care, gorgeous ambiance, and attention to detail that you truly feel throughout.'
      },
      author: 'Carolina M.',
      role: { pt: 'Cliente', en: 'Client' },
      service: { pt: 'Volume Egípcio', en: 'Egyptian Volume' }
    },
    {
      id: 't3',
      quote: {
        pt: 'Fiz o curso do zero e saí segura para atender. A Thais ensina com paixão e muita paciência.',
        en: 'I took the course completely from scratch and graduated confident to take clients. Thais teaches with deep passion and endless patience.'
      },
      author: 'Beatriz L.',
      role: { pt: 'Aluna', en: 'Student' },
      service: { pt: 'Lash Designer de Sucesso', en: 'Successful Lash Designer Course' }
    },
    {
      id: 't4',
      quote: {
        pt: 'Minhas sobrancelhas nunca estiveram tão alinhadas e naturais. Recomendo demais!',
        en: 'My eyebrows have never looked so perfectly aligned and naturally full. Highly recommended!'
      },
      author: 'Amanda R.',
      role: { pt: 'Cliente', en: 'Client' },
      service: { pt: 'Brow Lamination', en: 'Brow Lamination' }
    },
    {
      id: 't5',
      quote: {
        pt: 'O acompanhamento depois do curso fez toda a diferença para começar a minha carreira.',
        en: 'The post-course mentorship and support made all the difference in launching my professional career.'
      },
      author: 'Fernanda C.',
      role: { pt: 'Aluna', en: 'Student' },
      service: { pt: 'Mentoria & Carreira Lash', en: 'Mentorship & Lash Career' }
    }
  ],

  faqItems: [
    {
      id: 'f1',
      question: {
        pt: 'Quanto tempo dura a aplicação?',
        en: 'How long does the lash application take?'
      },
      answer: {
        pt: 'Varia conforme o estilo escolhido. Combinamos o tempo estimado ao agendar.',
        en: 'It varies depending on the chosen volume and styling. We estimate and confirm the exact time when you schedule.'
      }
    },
    {
      id: 'f2',
      question: {
        pt: 'Quanto tempo duram os cílios?',
        en: 'How long do the lash extensions last?'
      },
      answer: {
        pt: 'Com os cuidados corretos e manutenções em dia, a durabilidade é ótima. As manutenções são recomendadas a cada 2 a 3 semanas.',
        en: 'With proper aftercare and regular touch-ups, longevity is excellent. Touch-ups are recommended every 2 to 3 weeks.'
      }
    },
    {
      id: 'f3',
      question: {
        pt: 'Qual estilo é ideal para mim?',
        en: 'Which lash style is best for me?'
      },
      answer: {
        pt: 'Na avaliação, analiso o formato dos seus olhos e o seu estilo de vida para indicar o melhor volume.',
        en: 'During your consultation, I assess your unique eye shape and lifestyle to recommend the most flattering volume.'
      }
    },
    {
      id: 'f4',
      question: {
        pt: 'Extensão de cílios prejudica os fios naturais?',
        en: 'Do lash extensions damage natural eyelashes?'
      },
      answer: {
        pt: 'Feita por profissional, com isolamento correto e materiais de qualidade, não. Saúde ocular é prioridade.',
        en: 'When applied by a certified master with meticulous isolation and premium medical-grade products, no. Ocular health is always priority number one.'
      }
    },
    {
      id: 'f5',
      question: {
        pt: 'Posso dormir, lavar o rosto e fazer exercícios normalmente?',
        en: 'Can I sleep, wash my face, and exercise normally?'
      },
      answer: {
        pt: 'Sim, com orientações simples de cuidado que passo no atendimento.',
        en: 'Yes, absolutely, by following simple aftercare guidelines that I provide during your appointment.'
      }
    },
    {
      id: 'f6',
      question: {
        pt: 'Preciso ir sem maquiagem?',
        en: 'Do I need to arrive without makeup?'
      },
      answer: {
        pt: 'Sim, venha sem maquiagem e sem produto na área dos olhos.',
        en: 'Yes, please arrive with clean eyes, completely free of mascara, eyeliner, oils, or creams in the eye area.'
      }
    },
    {
      id: 'f7',
      question: {
        pt: 'Qual a tolerância de atraso?',
        en: 'What is the grace period for late arrivals?'
      },
      answer: {
        pt: 'O máximo é 15 minutos.',
        en: 'The maximum grace period is 15 minutes to guarantee adequate time for your procedure.'
      }
    },
    {
      id: 'f8',
      question: {
        pt: 'E se eu precisar cancelar ou reagendar?',
        en: 'What if I need to cancel or reschedule?'
      },
      answer: {
        pt: 'Avise com no mínimo 24h de antecedência. Abaixo disso, é cobrado 50% do valor do procedimento.',
        en: 'Please provide at least 24 hours notice. Cancellations made with less than 24h notice will incur a 50% procedure charge.'
      }
    },
    {
      id: 'f9',
      question: {
        pt: 'Quando devo fazer a manutenção?',
        en: 'When should I schedule a refill/maintenance?'
      },
      answer: {
        pt: 'Entre 2 e 3 semanas. Com mais de 3 semanas, o valor é cobrado como 1ª aplicação.',
        en: 'Between 2 and 3 weeks. Sets over 3 weeks old require a new full set (charged as 1st application).'
      }
    },
    {
      id: 'f10',
      question: {
        pt: 'O curso é para iniciantes?',
        en: 'Is the course suitable for complete beginners?'
      },
      answer: {
        pt: 'Sim, você aprende do zero, em 2 dias, com prática em modelo.',
        en: 'Yes! You learn step-by-step from zero in 2 comprehensive days, with hands-on practice on a real model.'
      }
    },
    {
      id: 'f11',
      question: {
        pt: 'O curso é presencial? Onde?',
        en: 'Is the course in-person? Where?'
      },
      answer: {
        pt: 'Sim, em Newark, NJ, em grupo de até 4 pessoas ou VIP.',
        en: 'Yes, in-person in Newark, NJ, in intimate cohorts of up to 4 students or private 1-on-1 VIP sessions.'
      }
    },
    {
      id: 'f12',
      question: {
        pt: 'O que está incluso no curso?',
        en: 'What is included in the course?'
      },
      answer: {
        pt: 'Kit de material personalizado, apostila, certificado, coffee break e 6 meses de assistência pós-curso, além de bônus.',
        en: 'Customized student kit, complete manual, official certificate, gourmet coffee break, 6 months post-course support, plus business bonuses.'
      }
    }
  ]
};
