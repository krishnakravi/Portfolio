import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-dark-900/70 backdrop-blur-xl border-b border-white/[0.04]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Krishna
                <span className="text-primary-400">.</span>
              </span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-dark-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute inset-0 bg-white/[0.06] rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/Assets/Krishna_K_R_Resume.pdf"
                target="_blank"
                className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary-400 border border-primary-500/20 rounded-lg hover:bg-primary-500/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              <motion.button
                className="lg:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 lg:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute top-0 right-0 h-full w-72 bg-dark-800/95 backdrop-blur-xl border-l border-white/[0.04]"
        >
          <div className="flex flex-col p-8 pt-24 gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-white/[0.06]'
                    : 'text-dark-400 hover:text-white hover:bg-white/[0.03]'
                }`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 30 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <motion.a
                href="/Assets/Krishna_K_R_Resume.pdf"
                target="_blank"
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white bg-primary-600/20 border border-primary-500/20 rounded-xl hover:bg-primary-600/30 transition-all"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 30 }}
                transition={{ delay: 0.35 }}
              >
                Download Resume
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Navigation
