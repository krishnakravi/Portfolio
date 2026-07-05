import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LINKS } from '../data'

const ITEMS = [
  { id: 'now', label: 'NOW' },
  { id: 'work', label: 'WORK' },
  { id: 'aperture', label: 'APERTURE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'kit', label: 'KIT' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-[80] border-b border-line bg-ink/80 backdrop-blur-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <svg width="22" height="22" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#FFB454" strokeWidth="7" />
            <circle cx="50" cy="50" r="12" fill="#FFB454" />
          </svg>
          <span className="font-display text-sm font-semibold tracking-wide">KRISHNA K R</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {ITEMS.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className="hud transition-colors hover:text-amber">
              {it.label}
            </button>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="hud-amber border border-amber/50 px-3 py-1.5 transition-colors hover:bg-amber hover:text-ink"
          >
            RESUME ↗
          </a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <span className="rec-dot h-2 w-2 rounded-full bg-signal" />
          <span className="hud text-signal">OPEN TO CHAT</span>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5 text-amber" /> : <Menu className="h-5 w-5 text-amber" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink px-5 pb-5 pt-2 md:hidden">
          {ITEMS.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="hud block w-full py-3 text-left transition-colors hover:text-amber"
            >
              {it.label}
            </button>
          ))}
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="hud-amber block py-3">
            RESUME ↗
          </a>
        </div>
      )}
    </motion.header>
  )
}
