import Reveal from '../components/Reveal.jsx'
import scarletDashboardHero from '../assets/landing/scarlet-dashboard-hero.png'

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-smoke border border-line rounded-full px-3.5 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-scarlet" />
            Desenvolvida por quem vive o mercado imobiliário.
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[3.6rem] leading-[1.05] font-semibold tracking-tight text-ink">
              O escritório inteligente do corretor moderno.
              <br />
              <span className="text-graphite">Menos caos. Mais negócios.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 text-lg text-graphite max-w-md leading-relaxed">
              A Scarlet foi criada para melhorar a rotina do corretor. Organize imóveis,
              captações, visitas, clientes, documentos e análises de mercado em um único lugar.
              Enquanto a Scarlet cuida da organização, você dedica seu tempo ao que realmente importa:
              fechar negócios.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#lista-de-espera"
              className="inline-flex items-center gap-2 bg-scarlet text-white text-sm font-medium pl-5 pr-4 py-3.5 rounded-full hover:bg-scarlet-dark transition-all duration-300 hover:pr-3 hover:pl-6"
            >
              Entrar na lista de espera
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#recursos"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink px-5 py-3.5 rounded-full border border-line hover:border-scarlet transition-colors duration-300"
            >
              Conheça a Scarlet
            </a>
          </Reveal>

          <Reveal
            delay={0.32}
            className="mt-14 flex items-center gap-8 text-xs font-mono text-smoke uppercase tracking-wider"
          >
            <span>Feito por corretores</span>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span>Desenvolvido no Brasil</span>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative flex justify-center">
          <img
            src={scarletDashboardHero}
            alt="Dashboard da Scarlet com compromissos, tarefas, pendências e módulos"
            className="block w-full h-auto"
          />
        </Reveal>
      </div>
    </section>
  )
}
