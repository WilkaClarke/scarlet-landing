import Reveal from './Reveal.jsx'

export default function FeatureCard({ title, desc, icon, delay = 0 }) {
  return (
    <Reveal delay={delay} className="bg-paper p-7 hover:bg-white transition-colors duration-300">
      <svg
        className="w-6 h-6 text-scarlet mb-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        {icon}
      </svg>
      <h3 className="font-medium text-ink mb-1.5">{title}</h3>
      <p className="text-sm text-graphite leading-relaxed">{desc}</p>
    </Reveal>
  )
}
