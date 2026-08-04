import Reveal from '../components/Reveal.jsx'
import RoadmapItem from '../components/RoadmapItem.jsx'

const ROADMAP = [
  {
    title: 'Descrição inteligente de imóveis',
    desc: 'Crie conteúdos de anúncio mais rápidos e precisos a partir das características do imóvel.',
  },
  {
    title: 'Controle de captações',
    desc: 'Acompanhe cada imóvel desde o primeiro contato até a entrada na carteira.',
  },
  {
    title: 'Agenda inteligente',
    desc: 'Encaixe visitas e compromissos sem perder prazos ou oportunidades.',
  },
  {
    title: 'Documentos digitais',
    desc: 'Organize contratos, pendências e aprovações em um mesmo fluxo.',
  },
  {
    title: 'Análise comparativa de mercado',
    desc: 'Compare preços com dados reais da sua região para tomar decisões mais seguras.',
  },
  {
    title: 'Histórico de visitas',
    desc: 'Registre o que foi conversado e o que precisa ser feito depois.',
  },
  {
    title: 'Acompanhamento de oportunidades',
    desc: 'Mantenha o progresso de cada cliente visível e fácil de acessar.',
  },
  {
    title: 'Acesso pelo celular',
    desc: 'Leve a Scarlet com você para o campo e acompanhe o trabalho em qualquer lugar.',
  },
]

export default function Timeline() {
  return (
    <section id="em-breve" className="py-28 lg:py-36 bg-mist/60 border-y border-line">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-scarlet mb-4">Roteiro</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
            Estamos construindo
          </h2>
          <p className="mt-4 text-base text-graphite max-w-2xl mx-auto">
            A Scarlet evolui para atender às necessidades de quem vive o mercado imobiliário.
          </p>
        </Reveal>

        <div className="relative pl-8">
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-line" />
          <ul className="space-y-9">
            {ROADMAP.map((item, i) => (
              <RoadmapItem key={item.title} {...item} delay={(i % 4) * 0.08} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
