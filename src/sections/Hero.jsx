import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import MockupChrome from '../components/MockupChrome.jsx'

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

        <Reveal delay={0.16} className="relative">
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none -mt-3"
            animate={{ y: 0, rotate: 0 }}
          >
            <div className="rounded-[22px] bg-scarlet-dark shadow-[0_40px_80px_-20px_rgba(9,42,35,0.35)] p-1.5">
              <div className="rounded-[16px] bg-[#0D3028] overflow-hidden">
                <MockupChrome label="app.scarletapp.com.br" dark />
                <div className="flex">
                  <div className="w-14 py-5 flex flex-col items-center gap-5 border-r border-white/5">
                    <span className="w-2 h-2 rounded-full bg-scarlet" />
                    <span className="w-4 h-4 rounded bg-white/15" />
                    <span className="w-4 h-4 rounded bg-white/40" />
                    <span className="w-4 h-4 rounded bg-white/15" />
                    <span className="w-4 h-4 rounded bg-white/15" />
                  </div>
                  <div className="flex-1 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm font-medium">Painel de captações</p>
                      <span className="text-[10px] font-mono text-scarlet border border-scarlet/30 rounded-full px-2 py-0.5">
                        IA ativa
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-white/5 p-3">
                        <p className="text-[10px] text-white/40 font-mono">Visitas / mês</p>
                        <p className="text-white text-lg font-display font-semibold">32</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-3">
                        <p className="text-[10px] text-white/40 font-mono">Em negociação</p>
                        <p className="text-white text-lg font-display font-semibold">08</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-3">
                        <p className="text-[10px] text-white/40 font-mono">Fechamentos</p>
                        <p className="text-white text-lg font-display font-semibold text-scarlet">
                          04
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-[10px] text-white/40 font-mono mb-2">
                        Análise comparativa — Bairro Central
                      </p>
                      <svg viewBox="0 0 260 60" className="w-full h-12" aria-hidden="true">
                        <polyline
                          points="0,45 30,38 60,40 90,25 120,30 150,15 180,20 210,8 240,12"
                          fill="none"
                          stroke="#123D33"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="rounded-lg border border-white/10 p-3 flex items-start gap-2.5">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-scarlet flex-shrink-0" />
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Sugestão da Scarlet: o apto 302 está 8 dias sem contato — agendar retorno?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -left-8 top-1/3 items-center gap-2 bg-white rounded-2xl shadow-xl px-4 py-3 border border-line">
              <span className="w-8 h-8 rounded-full bg-scarlet-50 flex items-center justify-center text-scarlet text-xs font-mono">
                ✓
              </span>
              <div>
                <p className="text-xs font-medium text-ink">Documento validado</p>
                <p className="text-[10px] text-smoke">Checklist completo</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
