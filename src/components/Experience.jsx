import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="work" className="relative border-b border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead num="02" kicker="CONTACT SHEET — CAREER" title="The roll so far" right="4 FRAMES · DEVELOPED" />

        {/* Film strip top edge */}
        <div className="sprockets h-6 border-x border-t border-line" />

        <div className="divide-y divide-line border border-line">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.org}
              className="frame-card group grid gap-6 bg-ink p-6 sm:p-8 lg:grid-cols-[110px_1fr_auto]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Frame number + logo */}
              <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-4">
                <span className="hud">FR&nbsp;{job.frame}</span>
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-sm p-2 grayscale transition-all duration-500 group-hover:grayscale-0"
                  style={{ background: job.logoBg }}
                >
                  <img src={job.logo} alt={job.org} className="max-h-full max-w-full object-contain" />
                </div>
              </div>

              {/* Body */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{job.org}</h3>
                  {job.sub && <span className="text-sm text-dim">{job.sub}</span>}
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-hud text-amber">{job.role}</p>
                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-dim">
                      <span className="mt-[9px] h-px w-4 shrink-0 bg-amber/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta column */}
              <div className="flex flex-row items-center gap-6 lg:w-44 lg:flex-col lg:items-end lg:gap-3 lg:text-right">
                <div>
                  <p className="hud">{job.period}</p>
                  <p className="hud mt-1">{job.location}</p>
                </div>
                {job.metric && (
                  <div className="lg:mt-4">
                    <p className="font-display text-3xl font-semibold text-amber">{job.metric.value}</p>
                    <p className="hud mt-1 normal-case !tracking-wider">{job.metric.label}</p>
                  </div>
                )}
                {job.status && (
                  <span className="hud-amber border border-amber/40 px-2.5 py-1 lg:mt-4">{job.status}</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Film strip bottom edge */}
        <div className="sprockets h-6 border-x border-b border-line" />
      </div>
    </section>
  )
}
