import Reveal from '../components/Reveal.jsx'
import MockupChrome from '../components/MockupChrome.jsx'
import StatusPill from '../components/StatusPill.jsx'

const PROPERTIES = [
  { label: 'Apartamento · Centro, 2 quartos', status: 'Visita agendada', highlight: true },
  { label: 'Casa · Bairro Solar, 4 quartos', status: 'Em captação', highlight: false },
  { label: 'Cobertura · Vista Serra', status: 'Pendência', highlight: false },
]

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
            <div className="rounded-xl bg-white border border-line overflow-hidden">
              <MockupChrome label="Imóveis / Carteira ativa" />
              <div className="p-5 space-y-3">
                <div className="flex justify-between text-[11px] font-mono text-smoke uppercase tracking-wide px-2">
                  <span>Imóvel</span>
                  <span>Status</span>
                </div>
                <div className="space-y-2">
                  {PROPERTIES.map((p) => (
                    <div key={p.label} className="flex items-center justify-between bg-mist rounded-lg px-4 py-3">
                      <span className="text-sm">{p.label}</span>
                      <StatusPill label={p.status} highlight={p.highlight} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2 rounded-2xl bg-ink p-2">
            <div className="rounded-xl bg-[#18181B] overflow-hidden h-full p-5">
              <p className="text-[11px] font-mono text-white/40 uppercase tracking-wide mb-4">
                Assistente Scarlet
              </p>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3 text-xs text-white/70 leading-relaxed">
                  &ldquo;Gere uma descrição para o apartamento de 2 quartos no Centro.&rdquo;
                </div>
                <div className="bg-scarlet/10 border border-scarlet/20 rounded-lg p-3 text-xs text-white/85 leading-relaxed">
                  Apartamento reformado no coração do Centro, com 2 quartos amplos, luz natural em
                  todos os ambientes e a 5 minutos a pé do comércio local.
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-[10px] font-mono text-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-scarlet animate-pulse-dot" /> gerando
                em tempo real
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
