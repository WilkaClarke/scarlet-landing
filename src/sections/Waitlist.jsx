import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'

const INITIAL = {
  nome: '',
  email: '',
  whatsapp: '',
  perfil: 'corretor-autonomo',
  praticidade: [],
  praticidadeOutro: '',
  trabalhoCampo: '',
}

const GOOGLE_FORMS_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLScYRPi3sUyCsGp8VXVsHsowgc_lJ7JybphKuTsz-NQ0gEEDyA/formResponse'

const PERFIL_LABELS = {
  'corretor-autonomo': 'Corretor autônomo',
  'corretor-imobiliaria': 'Corretor de imobiliária',
  'gestor-imobiliaria': 'Gestor de imobiliária',
  outro: 'Outro',
}

const PRATICIDADE_OPTIONS = [
  'Ter agenda, clientes e compromissos organizados em um só lugar.',
  'Registrar informações durante visitas sem precisar reorganizar tudo depois.',
  'Encontrar rapidamente informações e documentos de cada atendimento.',
  'Fazer análises e preparar apresentações com mais facilidade.',
  'Acompanhar o que já foi feito e o que ainda precisa de atenção.',
  'Outro.',
]

const formatBrazilianPhone = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (!digits) return ''
  if (digits.length <= 2) return `(${digits}`

  const ddd = digits.slice(0, 2)
  const number = digits.slice(2)

  if (number.length <= 4) return `(${ddd}) ${number}`
  if (number.length <= 8) return `(${ddd}) ${number.slice(0, 4)}-${number.slice(4)}`

  return `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`
}

export default function Waitlist() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')

  const isSubmitting = status === 'submitting'
  const isSubmitted = status === 'success'
  const isLocked = isSubmitting || isSubmitted

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'whatsapp' ? formatBrazilianPhone(value) : value,
    }))
    if (status !== 'idle') setStatus('idle')
  }

  const handlePraticidadeChange = (option) => {
    setForm((prev) => ({
      ...prev,
      praticidade: prev.praticidade.includes(option)
        ? prev.praticidade.filter((item) => item !== option)
        : [...prev.praticidade, option],
      praticidadeOutro:
        option === 'Outro.' && prev.praticidade.includes(option) ? '' : prev.praticidadeOutro,
    }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isLocked) return

    setStatus('submitting')

    const body = new URLSearchParams({
      'entry.595340833': form.nome,
      'entry.415532994': form.email,
      'entry.1717037175': form.whatsapp,
      'entry.80196197': PERFIL_LABELS[form.perfil],
      'entry.1209841237': form.trabalhoCampo,
    })

    form.praticidade.forEach((option) => {
      if (option === 'Outro.') {
        body.append('entry.928228932', '__other_option__')
        body.append('entry.928228932.other_option_response', form.praticidadeOutro.trim())
        return
      }

      body.append('entry.928228932', option)
    })

    try {
      await fetch(GOOGLE_FORMS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      })

      setForm(INITIAL)
      setStatus('success')
    } catch {
      setStatus('error')
    }
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
            Sua experiência contribui para tornar a Scarlet ainda melhor.
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
                disabled={isLocked}
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo (opcional)"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-scarlet transition-colors outline-none disabled:opacity-50"
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
                disabled={isLocked}
                value={form.email}
                onChange={handleChange}
                placeholder="voce@email.com"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-scarlet transition-colors outline-none disabled:opacity-50"
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
                inputMode="numeric"
                maxLength="15"
                required
                disabled={isLocked}
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="(00) 00000-0000 (opcional)"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-scarlet transition-colors outline-none disabled:opacity-50"
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
                        ? 'border-scarlet bg-scarlet text-white'
                        : 'border-line hover:border-graphite'
                    }`}
                  >
                    <input
                      type="radio"
                      name="perfil"
                      value={opt.value}
                      checked={form.perfil === opt.value}
                      onChange={handleChange}
                      disabled={isLocked}
                      className="hidden"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <fieldset>
              <legend className="block text-sm font-mono uppercase tracking-wide text-graphite mb-2">
                O que tornaria seu dia a dia mais prático?
              </legend>
              <div className="space-y-2">
                {PRATICIDADE_OPTIONS.map((option, index) => (
                  <label
                    key={option}
                    className={`flex items-start gap-3 border rounded-lg px-4 py-3 text-sm cursor-pointer transition-colors ${
                      form.praticidade.includes(option)
                        ? 'border-scarlet bg-scarlet-50 text-ink'
                        : 'border-line bg-white hover:border-graphite'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.praticidade.includes(option)}
                      onChange={() => handlePraticidadeChange(option)}
                      disabled={isLocked}
                      required={index === 0 && form.praticidade.length === 0}
                      className="mt-0.5 h-4 w-4 accent-scarlet"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {form.praticidade.includes('Outro.') && (
                <input
                  id="praticidadeOutro"
                  name="praticidadeOutro"
                  type="text"
                  disabled={isLocked}
                  value={form.praticidadeOutro}
                  onChange={handleChange}
                  required
                  placeholder="Escreva sua resposta"
                  aria-label="Outra forma de tornar o dia a dia mais prático"
                  className="mt-3 w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-scarlet transition-colors outline-none disabled:opacity-50"
                />
              )}
            </fieldset>

            <div>
              <label htmlFor="trabalhoCampo" className="block text-sm font-mono uppercase tracking-wide text-graphite mb-2">
                O que seria útil em uma ferramenta para o seu trabalho de campo?
              </label>
              <textarea
                id="trabalhoCampo"
                name="trabalhoCampo"
                rows="4"
                required
                disabled={isLocked}
                value={form.trabalhoCampo}
                onChange={handleChange}
                placeholder="Compartilhe a sua resposta"
                className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm placeholder:text-smoke focus:border-scarlet transition-colors outline-none disabled:opacity-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLocked}
              aria-busy={isSubmitting}
              className="w-full mt-2 bg-scarlet text-white text-sm font-medium py-3.5 rounded-lg hover:bg-scarlet-dark transition-colors duration-300 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  />
                  Enviando...
                </span>
              ) : 'Entrar na lista de espera'}
            </button>

            <p className="text-center text-xs text-graphite/70">
              Você receberá apenas 3 e-mails sobre a Scarlet: confirmação, lançamento e acesso.
            </p>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-scarlet pt-2 whitespace-pre-line"
                >
                  Obrigado pela sua contribuição.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-scarlet pt-2"
                  role="alert"
                >
                  Não foi possível concluir o cadastro. Tente novamente.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
