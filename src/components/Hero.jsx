import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { LINKS } from '../data'

const ease = [0.22, 1, 0.36, 1]

const rise = (delay) => ({
  initial: { y: 42, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.85, delay, ease },
})

export default function Hero() {
  return (
    <section className="thirds relative flex min-h-screen flex-col justify-end overflow-hidden pt-24">
      {/* HUD readouts pinned to the frame */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-16 z-10 flex items-start justify-between px-5 sm:top-20 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
      >
        <div className="space-y-1">
          <p className="hud">FRAME 001 / PORTFOLIO.RAW</p>
          <p className="hud">12.9716° N · 77.5946° E — BLR</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="hud-amber">ƒ/1.8 · 1/250 · ISO 100</p>
          <p className="hud">WB AUTO · AF-LOCK</p>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          {/* Headline block */}
          <div className="pb-10 lg:pb-20">
            <motion.p {...rise(1.7)} className="hud-amber mb-5">
              SOFTWARE ENGINEER — BANGALORE, INDIA
            </motion.p>

            <h1 className="font-display font-semibold leading-[0.93] tracking-tight">
              <motion.span {...rise(1.8)} className="block text-[15vw] sm:text-[11vw] lg:text-[8.5rem]">
                KRISHNA
              </motion.span>
              <motion.span
                {...rise(1.95)}
                className="block text-[15vw] text-transparent sm:text-[11vw] lg:text-[8.5rem]"
                style={{ WebkitTextStroke: '1.5px #EDEAE3' }}
              >
                K&nbsp;R
              </motion.span>
            </h1>

            <motion.p {...rise(2.15)} className="mt-7 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
              I ship mobile & web surfaces that millions actually touch — filters at{' '}
              <span className="text-bone">Myntra</span>, now engineering at{' '}
              <span className="text-bone">Telstra</span> — and after hours I build{' '}
              <span className="text-amber">Aperture</span>, a pro-grade Android camera app.
            </motion.p>

            <motion.div {...rise(2.3)} className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 bg-amber px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-hud text-ink transition-transform hover:-translate-y-0.5"
              >
                SEE THE WORK
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              <a
                href={`mailto:${LINKS.email}`}
                className="hud border border-line px-6 py-3.5 transition-colors hover:border-amber hover:text-amber"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

          {/* Portrait in a focus bracket */}
          <motion.div
            className="relative mx-auto w-[240px] shrink-0 sm:w-[300px] lg:w-[360px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bracket bracket-tr bracket-bl relative">
              <img
                src="/Assets/krishna-cutout.png"
                alt="Krishna K R"
                className="focus-pull relative z-10 w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
                draggable="false"
              />
              {/* Amber glow behind subject */}
              <div className="absolute inset-x-8 bottom-0 top-16 -z-0 rounded-full bg-amber/[0.09] blur-3xl" />
            </div>
            <motion.div
              className="mt-4 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <p className="hud">SUBJECT — IN FOCUS</p>
              <p className="hud-amber">●&nbsp;TRACKING</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom frame line */}
      <div className="relative z-10 border-t border-line" />
    </section>
  )
}
