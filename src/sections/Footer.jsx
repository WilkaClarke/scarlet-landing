import Logo from '../components/Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-graphite">
        <Logo />
        <span className="font-mono text-xs text-smoke">scarletapp.com.br</span>
        <span className="text-xs text-smoke">Desenvolvido no Brasil.</span>
        <span className="text-xs text-smoke">© 2026 Scarlet. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
