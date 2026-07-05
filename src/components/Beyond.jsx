import { motion } from 'framer-motion'
import { EASE } from '../motion'
import { ACHIEVEMENTS } from '../data'

export default function Beyond() {
  return (
    <section id="beyond" className="border-b border-rule bg-vermilion text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <motion.p
              className="mb-3 font-mono text-[11px] uppercase tracking-label text-paper/70"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55 }}
            >
              05 — Beyond the editor
            </motion.p>
            <motion.h2
              className="font-display text-4xl font-medium tracking-tight sm:text-6xl"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            >
              Not just <span className="italic">commits.</span>
            </motion.h2>

            <motion.p
              className="mt-6 max-w-lg leading-relaxed text-paper/85"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Debate stages, swimming lanes, chess boards, hackathon floors — the same
              competitive streak, different arenas. Also: B.Tech CSE at PES University,
              CGPA 8.30, DAC Scholar, with capstone research published at ICCET 2026.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.li
                  key={a}
                  className="flex gap-3 text-[15px] leading-relaxed text-paper/85"
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <span className="mt-[10px] h-px w-4 shrink-0 bg-paper/70" />
                  <span>{a}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* The red-backdrop studio shot bleeds into the red section */}
          <motion.figure
            className="relative mx-auto w-full max-w-[380px]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <img
              src="/Assets/krishna-red.jpg"
              alt="Krishna, studio portrait on red"
              className="w-full border border-paper/30"
              loading="lazy"
              draggable="false"
            />
            <figcaption className="mt-3 flex items-center justify-between border-t border-paper/40 pt-2.5">
              <span className="font-mono text-[10px] uppercase tracking-label text-paper/70">Fig. 02 — Off the clock</span>
              <span className="font-mono text-[10px] uppercase tracking-label text-paper/70">Studio, 2026</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
