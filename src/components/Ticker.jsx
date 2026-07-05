import { TICKER } from '../data'

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden border-b border-rule bg-ink py-3" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-5 font-mono text-[11px] uppercase tracking-label text-paper/75">{t}</span>
            <span className="text-vermilion">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
