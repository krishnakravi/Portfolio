import { motion } from 'framer-motion'
import { EASE } from '../motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionHead from './SectionHead'
import { FEATURED, PROJECTS, LINKS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead num="03" kicker="Selected work" title="Five things I shipped" right="Frames the repos — GitHub proves them" />

        {/* Featured: Aperture — a dark plate on the paper */}
        <motion.article
          className="grid overflow-hidden bg-dark text-paper lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="relative flex items-center justify-center p-8 sm:p-12">
            <div className="w-[210px] rounded-[2rem] border border-paper/25 bg-black/40 p-2 shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:w-[240px]">
              <img
                src={FEATURED.image}
                alt="Aperture camera app — actual interface"
                className="w-full rounded-[1.55rem]"
                loading="lazy"
              />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-label text-paper/50">
              {FEATURED.imageCaption}
            </p>
          </div>

          <div className="flex flex-col justify-center border-t border-paper/15 p-7 sm:p-10 lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between">
              <p className="label-red">/01 — {FEATURED.tag}</p>
              <p className="font-mono text-[10px] uppercase tracking-label text-paper/50">{FEATURED.year}</p>
            </div>
            <h3 className="mt-4 font-display text-4xl font-medium italic sm:text-5xl">{FEATURED.name}</h3>
            <p className="mt-5 max-w-xl leading-relaxed text-paper/70">{FEATURED.body}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {FEATURED.stack.map((t) => (
                <span key={t} className="border border-paper/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-paper/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {/* The other four */}
        <div className="mt-px grid gap-px border border-rule bg-rule md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-paper p-6 transition-colors duration-300 hover:bg-card sm:p-8"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: EASE }}
            >
              <div className="flex items-start justify-between">
                <span className="label">/{p.index}</span>
                <div className="flex items-center gap-3">
                  <span className="label-red">{p.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-vermilion" />
                </div>
              </div>
              <h3 className="mt-7 font-display text-2xl font-medium leading-tight">{p.name}</h3>
              <p className="label mt-1.5">{p.year}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-soft">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="label border border-rule px-2.5 py-1 transition-colors group-hover:border-vermilion/40">
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="group mt-10 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-label text-soft transition-colors hover:text-ink"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Github className="h-4 w-4" />
          <span className="draw-link">Full archive on GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-vermilion" />
        </motion.a>
      </div>
    </section>
  )
}
