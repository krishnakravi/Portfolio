import { motion } from 'framer-motion'
import { EASE } from '../motion'
import SectionHead from './SectionHead'
import { STATS } from '../data'

export default function Now() {
  return (
    <section id="now" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead num="01" kicker="The present tense" title="Currently at Telstra" right="Status — Active" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Status card */}
          <motion.div
            className="border border-rule bg-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-5">
              <div className="flex items-center gap-4">
                <img src="/Assets/telstra-logo.webp" alt="Telstra" className="h-12 w-12 rounded-sm object-contain" />
                <div>
                  <p className="font-display text-xl font-medium">Telstra</p>
                  <p className="text-sm text-soft">Associate Software Engineer</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <span className="pulse-dot h-2 w-2 rounded-full bg-vermilion" />
                <span className="label-red">Active</span>
              </span>
            </div>
            <p className="mt-5 leading-relaxed text-soft">
              Fresh off six months on <span className="text-ink">Myntra&apos;s Search &amp; Filters team</span>,
              I&apos;m now engineering at Telstra. I care about the last 10% of a product — the state
              handling nobody notices, the edge cases nobody hits twice, the interfaces that feel
              engineered rather than assembled.
            </p>
            <p className="mt-4 leading-relaxed text-soft">
              B.Tech CSE from PES University, DAC Scholar. Outside work I keep shipping — the
              latest experiment was a pro-grade camera app, below. There will be more.
            </p>
          </motion.div>

          {/* Proof, in numbers */}
          <div className="grid content-start gap-px border border-rule bg-rule sm:grid-cols-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-paper p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <p className="font-display text-3xl font-medium text-vermilion sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm leading-snug text-soft">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
