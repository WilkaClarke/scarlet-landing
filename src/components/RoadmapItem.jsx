import Reveal from './Reveal.jsx'

export default function RoadmapItem({ title, desc, delay = 0 }) {
  return (
    <Reveal as="li" delay={delay} className="relative">
      <span className="absolute -left-8 top-1.5 w-1.5 h-1.5 rounded-full bg-scarlet" />
      <p className="font-medium text-ink">{title}</p>
      <p className="text-sm text-graphite mt-1">{desc}</p>
    </Reveal>
  )
}
