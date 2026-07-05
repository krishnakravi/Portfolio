import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { LINKS } from '../data'

const STATS = [
  { value: '10.2%', label: 'filter adoption lift @ Myntra' },
  { value: '88%', label: 'DB query time cut @ Alten' },
  { value: '1', label: 'pro camera app, built solo' },
  { value: '8.16', label: 'CGPA · PES University' },
]

export default function Now() {
  return (
    <section id="now" className="relative border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead num="01" kicker="EXPOSURE READING" title="Currently at Telstra" right="STATUS — ACTIVE" />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {/* Status card */}
            <motion.div
              className="frame-card border border-line bg-panel p-6 sm:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-white p-2">
                    <img src="/Assets/telstra-logo.png" alt="Telstra" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold">Telstra</p>
                    <p className="text-sm text-dim">Associate Software Engineer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rec-dot h-2 w-2 rounded-full bg-ember" />
                  <span className="hud !text-ember">REC</span>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-dim">
                Fresh off a six-month SDE internship on{' '}
                <span className="text-bone">Myntra's Search & Filters team</span> — where the filters
                revamp I worked on lifted adoption by{' '}
                <span className="text-amber">10.2%</span> — I'm now building at Telstra. I care about
                the last 10% of a product: state handling nobody notices, edge cases nobody hits twice,
                interfaces that feel engineered rather than assembled.
              </p>
              <p className="mt-4 leading-relaxed text-dim">
                B.Tech CSE from PES University (DAC Scholar). When I'm not shipping, I'm reverse-engineering
                what a phone camera refuses to do — which turned into{' '}
                <span className="text-amber">Aperture</span>, below.
              </p>
            </motion.div>

            {/* Stat strip */}
            <div className="mt-6 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="bg-ink p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <p className="font-display text-3xl font-semibold text-amber">{s.value}</p>
                  <p className="hud mt-2 normal-case !tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portrait — the hike frame */}
          <motion.figure
            className="relative"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bracket bracket-tr bracket-bl overflow-hidden">
              <img
                src="/Assets/krishna-hike.jpg"
                alt="Krishna in the hills"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between">
              <span className="hud">FIELD NOTE — WESTERN GHATS</span>
              <span className="hud-amber">EXP +0.3 EV</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
