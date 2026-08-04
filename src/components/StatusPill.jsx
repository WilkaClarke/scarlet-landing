export default function StatusPill({ label, highlight = false }) {
  return (
    <span
      className={`text-xs font-mono rounded-full px-2.5 py-1 border ${
        highlight ? 'text-scarlet border-scarlet/30' : 'text-graphite border-line'
      }`}
    >
      {label}
    </span>
  )
}
