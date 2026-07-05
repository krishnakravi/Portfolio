import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { SKILLS, ACHIEVEMENTS } from '../data'

export default function Kit() {
  return (
    <section id="kit" className="relative border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead num="05" kicker="WHAT'S IN THE BAG" title="Kit & spec sheet" right="FIELD-TESTED" />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((g, i) => (
            <motion.div
              key={g.group}
              className="frame-card bg-ink p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold">{g.group}</h3>
                <span className="hud">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className={`border px-2.5 py-1 font-mono text-[11px] tracking-wider transition-colors ${
                      s.includes('production')
                        ? 'border-amber/50 text-amber'
                        : 'border-line text-dim hover:border-amber/40 hover:text-bone'
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + achievements strip */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="hud-amber mb-5">EDUCATION</p>
            <div className="border-l-2 border-amber pl-6">
              <h3 className="font-display text-2xl font-semibold">PES University, Bangalore</h3>
              <p className="mt-1 text-dim">B.Tech in Computer Science · 2022 — 2026</p>
              <p className="mt-3 font-mono text-sm text-bone">
                CGPA <span className="text-amber">8.16</span> / 10 · 10 GPA in Sem 7 · DAC Scholar
              </p>
              <p className="mt-4 text-sm leading-relaxed text-dim">
                Published at ICCET 2026, Chennai — “Smart Diet and Fitness Planner: an AI-driven,
                calendar-aware mobile system for holistic health and motivational coaching.”
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="hud-amber mb-5">OFF THE CLOCK</p>
            <ul className="space-y-3">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] text-dim">
                  <span className="mt-[9px] h-px w-4 shrink-0 bg-amber/70" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
