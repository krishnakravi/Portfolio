import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 150

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-dark-200 relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Scroll progress indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 origin-left z-[60]"
              style={{ scaleX }}
            />

            <ParticleBackground />
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} />

            <main className="relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>

            {/* Scroll to top */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed bottom-8 right-8 p-3 rounded-xl glass border border-white/[0.06] hover:border-primary-500/20 text-dark-400 hover:text-white z-50 transition-all duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
