import { motion } from 'framer-motion'
import SectionHead from './SectionHead'

const MODES = ['PHOTO', 'NIGHT', 'VIDEO', 'SLO-MO', 'DUAL', 'PANO', 'MACRO']

const FEATURES = [
  {
    title: 'Night — RAW stacking engine',
    body: 'Eight aligned RAW frames merged into one clean DNG, with handheld shake compensated automatically.',
  },
  {
    title: 'Full manual control',
    body: 'Shutter, ISO, focus and white balance with live handoff from auto. RAW+JPEG — DNGs open anywhere.',
  },
  {
    title: 'Dual-camera recording',
    body: 'Front and back at once — draggable picture-in-picture or split screen, baked into one video via a GL compositor.',
  },
  {
    title: 'Pro assists',
    body: 'Live luma histogram, zebra stripes on blown highlights, focus peaking, guided panorama with tilt feedback.',
  },
  {
    title: 'Capability-probed, never assumed',
    body: 'On first launch it probes every lens and tells you straight: what supports manual, RAW, burst — and how far it can be pushed.',
  },
  {
    title: 'Built to survive OEM chaos',
    body: 'Probe failures degrade instead of crashing. Recordings survive camera switches, full cards and interrupted takes.',
  },
]

export default function ApertureFeature() {
  return (
    <section id="aperture" className="relative overflow-hidden border-b border-line">
      {/* faint aperture ring in the background */}
      <svg
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 opacity-[0.05] lg:block"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="#FFB454" strokeWidth="0.6" />
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={i}
            x1="50" y1="4" x2="74" y2="50"
            stroke="#FFB454" strokeWidth="0.6"
            transform={`rotate(${i * 60} 50 50)`}
          />
        ))}
      </svg>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          num="03"
          kicker="FEATURED BUILD — SIDE PROJECT, SERIOUS INTENT"
          title="Aperture"
          right="KOTLIN · COMPOSE · CAMERA2"
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Phone frame with real UI */}
          <motion.div
            className="relative mx-auto w-[260px] sm:w-[290px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[2.2rem] border border-bone/20 bg-raise p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="overflow-hidden rounded-[1.7rem] border border-line">
                <img src="/Assets/aperture-ui.jpg" alt="Aperture camera app interface" className="w-full" />
              </div>
            </div>
            <p className="hud mt-5 text-center">ACTUAL APP UI — NOT A MOCKUP</p>

            {/* Mode dial strip */}
            <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
              {MODES.map((m, i) => (
                <span key={m} className={i === 1 ? 'hud-amber' : 'hud'}>
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          <div>
            <motion.p
              className="max-w-2xl text-lg leading-relaxed text-dim"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              A pro-grade Android camera app that captures what stock cameras refuse to attempt —
              deep manual RAW control plus computational modes that fuse many RAW frames into one
              impossible shot. <span className="text-bone">Kotlin, Jetpack Compose, CameraX with a
              Camera2 manual-burst engine underneath</span> — signed, release-built, and honest with
              the user about what their hardware can do.
            </motion.p>

            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="frame-card bg-ink p-5 sm:p-6"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.05 }}
                >
                  <p className="font-display text-base font-semibold text-bone">{f.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{f.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {['Kotlin', 'Jetpack Compose', 'CameraX', 'Camera2', 'GL Compositor', 'minSdk 28'].map((t) => (
                <span key={t} className="hud border border-line px-3 py-1.5">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
