import { motion } from 'framer-motion'
import { EASE } from '../motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { LINKS } from '../data'

const rise = (delay) => ({
  initial: { y: 36, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Masthead top rule */}
        <motion.div {...rise(0.25)} className="flex items-center justify-between border-b-2 border-ink pb-3">
          <p className="label">№ 001 — Portfolio, 2026 edition</p>
          <p className="label hidden sm:block">Bangalore, India · IST</p>
        </motion.div>

        <div className="grid gap-8 pt-10 sm:pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-4">
          {/* Headline */}
          <div className="flex flex-col justify-between pb-10 sm:pb-16">
            <div>
              <motion.h1 {...rise(0.35)} className="font-display font-medium leading-[0.95] tracking-tight">
                <span className="block text-[16.5vw] sm:text-[13vw] lg:text-[7.2rem]">Krishna</span>
                <span className="block text-[16.5vw] italic text-vermilion sm:text-[13vw] lg:text-[7.2rem]">K R</span>
              </motion.h1>

              <motion.p {...rise(0.5)} className="mt-8 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
                Software engineer at <span className="text-ink">Telstra</span>. At{' '}
                <span className="text-ink">Myntra</span>, I rebuilt the filters experience used by
                millions — adoption rose <span className="font-medium text-vermilion">10.2%</span>.
                I build mobile &amp; web products end to end, and side projects for the fun of it.
              </motion.p>
            </div>

            <motion.div {...rise(0.62)} className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2.5 bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-label text-paper transition-colors hover:bg-vermilion"
              >
                Selected work
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </button>
              <a
                href={`mailto:${LINKS.email}`}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink"
              >
                <span className="draw-link">Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-vermilion transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Portrait plate */}
          <motion.figure
            className="relative mx-auto w-full max-w-[300px] self-end sm:max-w-[340px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          >
            <div className="relative">
              {/* vermilion plate behind */}
              <div className="absolute -bottom-3 -left-3 h-full w-full bg-vermilion sm:-bottom-4 sm:-left-4" aria-hidden="true" />
              <img
                src="/Assets/krishna-hero.jpg"
                alt="Krishna K R"
                className="relative z-10 w-full"
                draggable="false"
              />
            </div>
            <figcaption className="relative z-10 mt-4 flex items-center justify-between border-t border-rule pt-2.5">
              <span className="label">Fig. 01 — The engineer</span>
              <span className="label-red">EST. 2003</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
