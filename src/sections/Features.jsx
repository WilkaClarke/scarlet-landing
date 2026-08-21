import Reveal from '../components/Reveal.jsx'
import FeatureCard from '../components/FeatureCard.jsx'

const FEATURES = [
  {
    title: 'Agenda',
    desc: 'Organize compromissos e tarefas e saiba o que precisa da sua atenção a cada dia.',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Clientes',
    desc: 'Centralize contatos, preferências e histórico de cada cliente.',
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
    title: 'Visitas',
    desc: 'Registre informações durante a visita, direto do celular.',
    icon: (
      <path d="M3 10l9-6 9 6v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'ACM',
    desc: 'Organize dados e comparáveis para apoiar suas análises de mercado.',
    icon: <path d="M4 19V9M11 19V5M18 19v-7" strokeLinecap="round" />,
  },
  {
    title: 'Apresentações',
    desc: 'Organize as informações necessárias para apresentar seu trabalho ao cliente.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21l4-4 4 4M8 12l3-3 2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Documentos',
    desc: 'Mantenha documentos e informações relacionados ao atendimento organizados.',
    icon: (
      <>
        <path d="M8 3h8l4 4v14a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Relatórios',
    desc: 'Transforme as informações registradas em relatórios organizados para acompanhar o seu trabalho.',
    icon: (
      <>
        <path d="M7 3h7l4 4v14H7z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 3v5h4M10 12h5M10 16h5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Produtividade',
    desc: 'Menos tempo procurando informações. Mais tempo atendendo clientes.',
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
