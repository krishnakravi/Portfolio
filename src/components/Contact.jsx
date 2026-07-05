import { motion } from 'framer-motion'
import { EASE } from '../motion'
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react'
import { LINKS } from '../data'

const CHANNELS = [
  { icon: Mail, label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'krishna-k-r', href: LINKS.linkedin },
  { icon: Github, label: 'GitHub', value: 'krishnakravi', href: LINKS.github },
  { icon: Phone, label: 'Phone', value: LINKS.phone, href: `tel:${LINKS.phone.replace(/\s/g, '')}` },
  { icon: FileText, label: 'Resume', value: 'PDF · 1 page', href: LINKS.resume },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-32">
        <motion.p
          className="label-red mb-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The back page
        </motion.p>

        <motion.h2
          className="mx-auto max-w-3xl text-center font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Let&apos;s build something
          <br />
          <span className="italic text-vermilion">people actually use.</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-lg text-center leading-relaxed text-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Interesting problem, good coffee, or a role worth talking about —
          my inbox is open and I reply fast.
        </motion.p>

        <motion.div
          className="mx-auto mt-14 grid max-w-4xl gap-px border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank'}
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 bg-paper px-4 py-8 text-center transition-colors hover:bg-card"
            >
              <c.icon className="h-5 w-5 text-soft transition-colors group-hover:text-vermilion" />
              <div>
                <p className="label-red">{c.label}</p>
                <p className="mt-1 break-all font-mono text-[11px] text-soft group-hover:text-ink">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 sm:flex-row sm:px-8">
          <p className="label">© {new Date().getFullYear()} Krishna K R</p>
          <p className="label">
            Set in Fraunces &amp; Switzer · Built with React · <span className="text-vermilion">Bangalore, IST</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
