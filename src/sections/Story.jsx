import Reveal from '../components/Reveal.jsx'

export default function Story() {
  return (
    <section id="historia" className="py-28 lg:py-36 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-scarlet mb-6">A origem</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8">
            Feito para quem vive
            <br />o mercado imobiliário.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            A Scarlet nasceu da rotina real de uma corretora: visitas, documentos, captações,
            clientes, análises de mercado e decisões que precisam acontecer no momento certo.
            Mais do que reunir informações, a Scarlet foi criada para tornar o trabalho mais
            simples, organizado e produtivo.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-12 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-white/25 to-transparent" />
        </Reveal>
      </div>
    </section>
  )
}
