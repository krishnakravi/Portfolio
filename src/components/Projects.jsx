import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHead from './SectionHead'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead num="04" kicker="CONTACT SHEET — BUILDS" title="Selected projects" right="DEVELOPED · ARCHIVED" />

        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="frame-card group relative bg-ink p-6 transition-colors duration-500 hover:bg-raise sm:p-8"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between">
                <span className="hud">NEG&nbsp;{p.index}</span>
                <div className="flex items-center gap-3">
                  <span className="hud-amber">{p.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber" />
                </div>
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold leading-tight sm:text-[1.7rem]">
                {p.name}
              </h3>
              <p className="hud mt-1.5">{p.year}</p>

              <p className="mt-4 text-[15px] leading-relaxed text-dim">{p.body}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="hud border border-line px-2.5 py-1 transition-colors group-hover:border-amber/30">
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="hud mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          FULL ARCHIVE ON{' '}
          <a href="https://github.com/krishnakravi" target="_blank" rel="noreferrer" className="text-amber underline underline-offset-4">
            GITHUB ↗
          </a>
        </motion.p>
      </div>
    </section>
  )
}
