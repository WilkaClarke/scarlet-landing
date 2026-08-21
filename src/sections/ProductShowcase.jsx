import Reveal from '../components/Reveal.jsx'
import scarletLevantamentoImovel from '../assets/landing/scarlet-levantamento-imovel.png'
import scarletRelatorioCaptacao from '../assets/landing/scarlet-relatorio-captacao.png'

export default function ProductShowcase() {
  return (
    <section className="py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-scarlet mb-4">A interface</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Simples de olhar. Poderosa de usar.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3 rounded-2xl bg-mist border border-line p-2">
            <img
              src={scarletLevantamentoImovel}
              alt="Interface de levantamento do imóvel na Scarlet"
              className="block w-full h-auto rounded-xl"
            />
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2 rounded-2xl bg-mist border border-line p-2">
            <img
              src={scarletRelatorioCaptacao}
              alt="Relatório de captação organizado pela Scarlet"
              className="block w-full h-auto rounded-xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
