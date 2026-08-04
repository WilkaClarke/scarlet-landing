export default function MockupChrome({ label, dark = false }) {
  const dotClass = dark ? 'bg-white/10' : 'bg-line'
  return (
    <div className={`flex items-center gap-1.5 px-4 py-3 border-b ${dark ? 'border-white/5' : 'border-line'}`}>
      <span className={`w-2.5 h-2.5 rounded-full ${dotClass}`} />
      <span className={`w-2.5 h-2.5 rounded-full ${dotClass}`} />
      <span className={`w-2.5 h-2.5 rounded-full ${dotClass}`} />
      {label && (
        <span className={`ml-3 text-[11px] font-mono ${dark ? 'text-white/30' : 'text-smoke'}`}>
          {label}
        </span>
      )}
    </div>
  )
}
