import { motion } from 'framer-motion'

const BLADES = 6

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.55, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center gap-6">
        <svg width="92" height="92" viewBox="0 0 100 100" className="iris-spin">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#26262d" strokeWidth="2" />
          {Array.from({ length: BLADES }).map((_, i) => {
            const a = (i * 360) / BLADES
            return (
              <line
                key={i}
                x1="50"
                y1="8"
                x2="72"
                y2="50"
                stroke="#FFB454"
                strokeWidth="2.5"
                strokeLinecap="round"
                transform={`rotate(${a} 50 50)`}
              />
            )
          })}
          <circle cx="50" cy="50" r="9" fill="#FFB454" />
        </svg>
        <motion.p
          className="hud"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0.4, 1] }}
          transition={{ duration: 1.2 }}
        >
          METERING&nbsp;·&nbsp;FOCUSING&nbsp;·&nbsp;READY
        </motion.p>
      </div>
    </motion.div>
  )
}
