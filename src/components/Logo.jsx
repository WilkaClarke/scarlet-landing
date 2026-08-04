import scarletMark from '../assets/scarlet-mark.svg'

/**
 * Brand mark + wordmark. `variant="mark"` renders only the icon (footer, favic-like uses).
 */
export default function Logo({ variant = 'full', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={scarletMark} alt="" width={20} height={20} className="rounded-[6px]" />
      {variant === 'full' && (
        <span className="font-display text-xl tracking-tight font-semibold text-ink">Scarlet</span>
      )}
    </span>
  )
}
