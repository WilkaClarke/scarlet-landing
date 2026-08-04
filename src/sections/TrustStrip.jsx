const ITEMS = [
  'Captações',
  'Visitas',
  'Imóveis',
  'Documentos',
  'Clientes',
  'ACM',
  'Organização',
  'Inteligência',
]

export default function TrustStrip() {
  return (
    <section className="border-y border-line py-6 bg-mist/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-xs font-mono uppercase tracking-widest text-smoke">
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-12">
            {item}
            {i < ITEMS.length - 1 && <span className="text-line">/</span>}
          </span>
        ))}
      </div>
    </section>
  )
}
