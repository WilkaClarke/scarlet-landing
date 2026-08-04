import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'

const INITIAL = {
  nome: '',
  email: '',
  whatsapp: '',
  perfil: 'corretor-autonomo',
  desafio: '',
  problema: '',
}

export default function Waitlist() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrar com o endpoint real de captação de leads.
    setSubmitted(true)
  }

  return (
    <section id="lista-de-espera" className="py-28 lg:py-36">
      <div className="max-w-xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-scarlet mb-4">
            A Scarlet quer ouvir você.
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-4">
            A Scarlet quer ouvir você.
          </h2>
          <p className="text-graphite">
            Conte para a Scarlet como ela pode ajudar no seu dia a dia.
          </p>
          <p className="mt-4 text-sm text-graphite/80">
            A Scarlet nasceu para melhorar a rotina do corretor e continua evoluindo com a experiência de quem vive o mercado imobiliário.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-paper border border-line rounded-2xl p-7 sm:p-8"
          >
            <div>
              <label htmlFor="nome" className="block text-xs font-mono uppercase tracking-wide text-smoke mb-2">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                disabled={submitted}
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo (opcional)"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-ink transition-colors outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-smoke mb-2">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={submitted}
                value={form.email}
                onChange={handleChange}
                placeholder="voce@email.com"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-ink transition-colors outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-xs font-mono uppercase tracking-wide text-smoke mb-2">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                disabled={submitted}
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="(00) 00000-0000 (opcional)"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-ink transition-colors outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <span className="block text-xs font-mono uppercase tracking-wide text-smoke mb-2">Perfil</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'corretor-autonomo', label: 'Corretor autônomo' },
                  { value: 'corretor-imobiliaria', label: 'Corretor de imobiliária' },
                  { value: 'gestor-imobiliaria', label: 'Gestor de imobiliária' },
                  { value: 'outro', label: 'Outro' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-center gap-2 border rounded-lg px-4 py-3 text-sm cursor-pointer transition-colors ${
                      form.perfil === opt.value
                        ? 'border-ink bg-ink text-white'
                        : 'border-line hover:border-graphite'
                    }`}
                  >
                    <input
                      type="radio"
                      name="perfil"
                      value={opt.value}
                      checked={form.perfil === opt.value}
                      onChange={handleChange}
                      disabled={submitted}
                      className="hidden"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="desafio" className="block text-xs font-mono uppercase tracking-wide text-smoke mb-2">
                Qual é o maior desafio da sua rotina como corretor?
              </label>
              <textarea
                id="desafio"
                name="desafio"
                rows="4"
                disabled={submitted}
                value={form.desafio}
                onChange={handleChange}
                placeholder="Conte aqui o principal desafio"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-ink transition-colors outline-none disabled:opacity-50 resize-none"
              />
            </div>

            <div>
              <label htmlFor="problema" className="block text-xs font-mono uppercase tracking-wide text-smoke mb-2">
                Se a Scarlet pudesse resolver apenas um problema para você, qual seria?
              </label>
              <textarea
                id="problema"
                name="problema"
                rows="4"
                disabled={submitted}
                value={form.problema}
                onChange={handleChange}
                placeholder="Compartilhe a sua prioridade"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-ink transition-colors outline-none disabled:opacity-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full mt-2 bg-scarlet text-white text-sm font-medium py-3.5 rounded-lg hover:bg-scarlet-dark transition-colors duration-300 disabled:opacity-60"
            >
              {submitted ? 'Cadastro recebido' : 'Entrar na lista de espera'}
            </button>

            <p className="text-center text-sm text-graphite/70">
              Obrigado por fazer parte da construção da Scarlet.
            </p>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-scarlet pt-2 whitespace-pre-line"
                >
                  Obrigado por contribuir com a Scarlet.
                  <br />
                  Sua resposta foi recebida.
                  <br />
                  Estamos construindo a Scarlet ouvindo quem vive o mercado imobiliário todos os dias.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
