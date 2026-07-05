import { motion } from 'framer-motion'
import { EASE } from '../motion'

export default function SectionHead({ num, kicker, title, right }) {
  return (
    <div className="relative mb-12 sm:mb-16">
      <span
        className="ghost-num pointer-events-none absolute -top-8 right-0 select-none font-display text-[6rem] font-semibold italic leading-none sm:text-[9rem]"
        aria-hidden="true"
      >
        {num}
      </span>
      <motion.p
        className="label-red mb-3"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        {kicker}
      </motion.p>
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink pb-5">
        <motion.h2
          className="font-display text-4xl font-medium tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        >
          {title}
        </motion.h2>
        {right && <p className="label pb-2">{right}</p>}
      </div>
    </div>
  )
}
