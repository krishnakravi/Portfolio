import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { SKILLS } from '../data'

export default function Kit() {
  return (
    <section id="kit" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead num="04" kicker="The toolkit" title="What I work with" right="Only what I can defend in an interview" />

        <div className="divide-y divide-rule border-b border-rule">
          {SKILLS.map((g, i) => (
            <motion.div
              key={g.group}
              className="grid gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-baseline gap-3">
                <span className="label">0{i + 1}</span>
                <h3 className="font-display text-xl font-medium">{g.group}</h3>
              </div>
              <p className="pt-0.5 font-mono text-[13px] leading-relaxed text-soft">
                {g.items.map((s, j) => (
                  <span key={s}>
                    <span className="transition-colors hover:text-vermilion">{s}</span>
                    {j < g.items.length - 1 && <span className="mx-2 text-rule">/</span>}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
