import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo.jsx'
import useScrollPosition from '../hooks/useScrollPosition.js'
import useDisclosure from '../hooks/useDisclosure.js'
import useLockBodyScroll from '../hooks/useLockBodyScroll.js'

const LINKS = [
  { href: '#recursos', label: 'Recursos' },
  { href: '#historia', label: 'A história' },
  { href: '#em-breve', label: 'Em breve' },
  { href: '#lista-de-espera', label: 'Lista de espera' },
]

export default function Nav() {
  const scrolled = useScrollPosition(20)
  const { isOpen, toggle, close } = useDisclosure(false)
  useLockBodyScroll(isOpen)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" aria-label="Scarlet, ir para o topo">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm text-smoke" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-scarlet transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#lista-de-espera"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium bg-scarlet text-white px-4 py-2.5 rounded-full hover:bg-scarlet-dark transition-colors duration-300"
        >
          Entrar na lista de espera
        </a>

        <button
          onClick={toggle}
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-paper border-t border-line overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 text-sm">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={close}>
                  {l.label}
                </a>
              ))}
              <a href="#lista-de-espera" onClick={close} className="font-medium text-scarlet">
                Entrar na lista de espera
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
