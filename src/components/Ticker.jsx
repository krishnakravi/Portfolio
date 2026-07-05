import { TICKER } from '../data'

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden border-b border-line bg-panel py-3.5">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="hud px-5 !text-bone/70">{t}</span>
            <span className="text-amber/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
