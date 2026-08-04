import Reveal from '../components/Reveal.jsx'
import FeatureCard from '../components/FeatureCard.jsx'

const FEATURES = [
  {
    title: 'Visitas',
    desc: 'Tenha as informações importantes sempre à mão durante a visita.',
    icon: (
      <path d="M3 10l9-6 9 6v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Carteira de imóveis',
    desc: 'Organize sua carteira de imóveis de forma simples e eficiente.',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Captações',
    desc: 'Acompanhe cada imóvel desde o primeiro contato até a entrada na carteira.',
    icon: (
      <>
        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    title: 'Documentos',
    desc: 'Centralize documentos e acompanhe pendências em um só lugar.',
    icon: (
      <>
        <path d="M8 3h8l4 4v14a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'ACM',
    desc: 'Construa análises comparativas com mais organização e confiança.',
    icon: <path d="M4 19V9M11 19V5M18 19v-7" strokeLinecap="round" />,
  },
  {
    title: 'Agenda e oportunidades',
    desc: 'Organize sua rotina e acompanhe cada oportunidade no momento certo.',
    icon: <path d="M12 3l2.4 5.8L20 11l-5.6 2.2L12 19l-2.4-5.8L4 11l5.6-2.2L12 3z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: 'Clientes',
    desc: 'Mantenha o histórico de cada atendimento sempre acessível.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
        <circle cx="17" cy="8" r="2.3" />
        <path d="M22 20c0-2.6-2-4.8-4.5-5.7" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Produtividade',
    desc: 'Tenha mais clareza sobre o que precisa ser feito em cada etapa do trabalho.',
    icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />,
  },
]

export default function Features() {
  return (
    <section id="recursos" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-scarlet mb-4">
            Tudo em um lugar
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Como a Scarlet transforma o seu dia a dia
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={(i % 4) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
