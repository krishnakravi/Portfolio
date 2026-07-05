import { useState } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '../motion'
import { Menu, X } from 'lucide-react'
import { LINKS } from '../data'

const ITEMS = [
  { id: 'now', label: 'Now' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'kit', label: 'Kit' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[80] border-b border-rule bg-paper/85 backdrop-blur-md"
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-lg font-semibold italic tracking-tight"
          aria-label="Back to top"
        >
          Krishna<span className="text-vermilion">.</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {ITEMS.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className="draw-link text-sm text-soft transition-colors hover:text-ink">
              {it.label}
            </button>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="label-red border border-vermilion/50 px-3.5 py-2 transition-colors hover:bg-vermilion hover:!text-paper"
          >
            Resume ↗
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-rule bg-paper px-5 pb-5 pt-2 md:hidden">
          {ITEMS.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className="block w-full py-3 text-left text-sm text-soft">
              {it.label}
            </button>
          ))}
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="label-red block py-3">
            Resume ↗
          </a>
        </div>
      )}
    </motion.header>
  )
}
