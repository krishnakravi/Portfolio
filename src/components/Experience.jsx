import { motion } from 'framer-motion'
import { EASE } from '../motion'
import SectionHead from './SectionHead'
import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead num="02" kicker="The ledger" title="Experience" right="4 entries" />

        <div className="divide-y divide-rule border-b border-rule">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.org}
              className="group grid gap-4 py-8 sm:py-10 lg:grid-cols-[64px_1fr_1.4fr_auto] lg:gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
            >
              <span className="label hidden pt-1.5 lg:block">/{job.index}</span>

              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt=""
                  className="mt-1 h-11 w-11 rounded-sm border border-rule bg-white object-contain p-1 grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight sm:text-3xl">
                    {job.org}
                  </h3>
                  {job.sub && <p className="mt-0.5 text-sm text-soft">{job.sub}</p>}
                  <p className="label-red mt-2">{job.role}</p>
                </div>
              </div>

              <ul className="space-y-2.5 lg:pt-1">
                {job.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-soft">
                    <span className="mt-[10px] h-px w-4 shrink-0 bg-vermilion/80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 lg:flex-col lg:items-end lg:text-right">
                <p className="label pt-1">{job.period}</p>
                {job.current && (
                  <span className="label-red border border-vermilion/40 px-2.5 py-1">Present</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
