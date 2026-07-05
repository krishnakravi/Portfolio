import { motion } from 'framer-motion'

export default function SectionHead({ num, kicker, title, right }) {
  return (
    <div className="relative mb-12 sm:mb-16">
      <span className="ghost-num pointer-events-none absolute -top-10 right-0 select-none font-display text-[7rem] font-bold leading-none sm:text-[10rem]">
        {num}
      </span>
      <motion.p
        className="hud-amber mb-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        {kicker}
      </motion.p>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <motion.h2
          className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
        {right && <p className="hud pb-2">{right}</p>}
      </div>
    </div>
  )
}
