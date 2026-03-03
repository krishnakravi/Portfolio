import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 3
      })
    }, 40)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-dark-950 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        {/* Ambient glow */}
        <div className="absolute -inset-40 bg-primary-500/5 rounded-full blur-3xl" />

        {/* Logo */}
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-display text-5xl font-bold tracking-tight text-white">
            Krishna
            <span className="text-primary-400">.</span>
          </span>
        </motion.div>

        {/* Minimal progress line */}
        <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
