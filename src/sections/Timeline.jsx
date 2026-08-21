import Reveal from '../components/Reveal.jsx'

const EVOLUTION_AREAS = [
  {
    title: 'Mais inteligência para o trabalho de campo',
    desc: 'Ferramentas pensadas para simplificar etapas e tornar a rotina do corretor mais prática.',
  },
  {
    title: 'Análises e relatórios mais úteis',
    desc: 'Informações organizadas para apoiar decisões e dar mais clareza ao trabalho.',
  },
  {
    title: 'Uma rotina cada vez mais fluida',
    desc: 'Aperfeiçoamentos que tornam a experiência com a Scarlet cada vez mais simples e eficiente.',
  },
]

export default function Timeline() {
  return (
    <section id="em-breve" className="py-28 lg:py-36 bg-mist/60 border-y border-line">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-scarlet mb-4">Desenvolvimento</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
            A Scarlet continua evoluindo.
          </h2>
          <p className="mt-4 text-base text-graphite max-w-2xl mx-auto">
            A Scarlet evolui para atender às necessidades de quem vive o mercado imobiliário.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {EVOLUTION_AREAS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="bg-paper p-7 lg:p-8">
              <h3 className="font-medium text-ink mb-3">{item.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24} className="mt-12 text-center">
          <p className="text-lg font-medium text-ink leading-relaxed max-w-2xl mx-auto">
            A Scarlet evolui com experiências reais. Sua opinião faz parte desse processo de
            aperfeiçoamento.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
