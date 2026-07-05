import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react'
import { LINKS } from '../data'

const CHANNELS = [
  { icon: Mail, label: 'EMAIL', value: LINKS.email, href: `mailto:${LINKS.email}` },
  { icon: Linkedin, label: 'LINKEDIN', value: 'krishna-k-r', href: LINKS.linkedin },
  { icon: Github, label: 'GITHUB', value: 'krishnakravi', href: LINKS.github },
  { icon: Phone, label: 'PHONE', value: LINKS.phone, href: `tel:${LINKS.phone.replace(/\s/g, '')}` },
  { icon: FileText, label: 'RESUME', value: 'PDF · 1 PAGE', href: LINKS.resume },
]

export default function Contact() {
  return (
    <section id="contact" className="thirds relative">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <motion.p
          className="hud-amber mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          FINAL FRAME — SHUTTER STILL OPEN
        </motion.p>

        <motion.h2
          className="mx-auto max-w-4xl text-center font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's make something
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #FFB454' }}>
            worth framing.
          </span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-dim"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Interesting problem? Good coffee? A phone camera that should do more than it does?
          My inbox develops fast.
        </motion.p>

        <motion.div
          className="mx-auto mt-14 grid max-w-4xl gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') || c.href.startsWith('/') ? '_blank' : undefined}
              rel="noreferrer"
              className="frame-card group flex flex-col items-center gap-3 bg-ink px-4 py-8 text-center transition-colors hover:bg-raise"
            >
              <c.icon className="h-5 w-5 text-dim transition-colors group-hover:text-amber" />
              <div>
                <p className="hud-amber">{c.label}</p>
                <p className="mt-1 break-all font-mono text-[11px] text-dim group-hover:text-bone">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
          <p className="hud">© {new Date().getFullYear()} KRISHNA K R — ALL FRAMES RESERVED</p>
          <p className="hud">
            DESIGNED IN A DARKROOM · BUILT WITH REACT · <span className="text-amber">ƒ/1.8 FOREVER</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
